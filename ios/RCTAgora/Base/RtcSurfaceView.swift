import AgoraRtcKit
import Foundation
import UIKit
import DeepAR

class RtcSurfaceView: UIView {
    private var surface: UIView
    private var canvas: AgoraRtcVideoCanvas
    private weak var channel: AgoraRtcChannel?
    private var engine: AgoraRtcEngineKit?
    private var deepAr: DeepAR?
    private var rtcEngineManager: RtcEngineManager?
    private var arView: ARView!
    private var cameraController: CameraController!

    override init(frame: CGRect) {
        surface = UIView(frame: CGRect(origin: CGPoint(x: 0, y: 0), size: frame.size))
        canvas = AgoraRtcVideoCanvas()
        canvas.view = surface
        super.init(frame: frame)
        addSubview(surface)
        addObserver(self, forKeyPath: observerForKeyPath(), options: .new, context: nil)
    }

    func observerForKeyPath() -> String {
        return "frame"
    }

    @available(*, unavailable)
    required init?(coder _: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    deinit {
        canvas.view = nil
        removeObserver(self, forKeyPath: observerForKeyPath(), context: nil)
    }

    func setData(_ engine: AgoraRtcEngineKit, _ deepAr: DeepAR?, _ channel: AgoraRtcChannel?, _ uid: UInt) {
        self.channel = channel
        self.engine = engine
        self.deepAr = deepAr
        if (self.deepAr != nil) {
            self.rtcEngineManager = self.deepAr?.delegate as? RtcEngineManager
        }
        canvas.channelId = channel?.getId()
        canvas.uid = uid
        setupVideoCanvas(engine)
    }

    func resetVideoCanvas(_ engine: AgoraRtcEngineKit) {
        let canvas = AgoraRtcVideoCanvas()
        canvas.view = nil
        canvas.renderMode = self.canvas.renderMode
        canvas.channelId = self.canvas.channelId
        canvas.uid = self.canvas.uid
        canvas.mirrorMode = self.canvas.mirrorMode

        if canvas.uid == 0 && self.deepAr != nil {
            engine.setExternalVideoSource(true, useTexture: true, pushMode: true)
        } else if canvas.uid == 0 {
            engine.setupLocalVideo(canvas)
        } else {
            engine.setupRemoteVideo(canvas)
        }
    }

    private func setupVideoCanvas(_ engine: AgoraRtcEngineKit) {
        subviews.forEach {
            $0.removeFromSuperview()
        }
        surface = UIView(frame: CGRect(origin: CGPoint(x: 0, y: 0), size: bounds.size))
        
        if canvas.uid == 0 && self.deepAr != nil {
            let deepARWidth = rtcEngineManager?.deepARWidth?.intValue ?? 720
            let deepARHeight = rtcEngineManager?.deepARHeight?.intValue ?? 1280
            let rect = CGRect(
                x: 0,
                y: 0,
                width: deepARWidth,
                height: deepARHeight
            )
            let rectView = UIView(frame: rect)
            arView = self.deepAr?.createARView(withFrame: rectView.frame) as! ARView
            arView.translatesAutoresizingMaskIntoConstraints = false
            
            surface.addSubview(arView)
            
            let ratio = rect.size.height / CGFloat(deepARHeight)
            surface.transform = CGAffineTransformScale(CGAffineTransformIdentity, ratio, ratio)
            arView.heightAnchor.constraint(equalToConstant: CGFloat(deepARHeight)).isActive = true
            arView.widthAnchor.constraint(equalToConstant: CGFloat(deepARWidth)).isActive = true
            arView.centerYAnchor.constraint(equalTo: surface.centerYAnchor, constant: 0).isActive = true
            arView.centerXAnchor.constraint(equalTo: surface.centerXAnchor, constant: 0).isActive = true
            
            addSubview(surface)
            
            self.cameraController = CameraController()
            self.cameraController.deepAR = self.deepAr
            self.cameraController.startCamera()
            
            engine.setExternalVideoSource(true, useTexture: true, pushMode: true)
        } else if canvas.uid == 0 {
            surface = UIView(frame: CGRect(origin: CGPoint(x: 0, y: 0), size: bounds.size))
            addSubview(surface)
            canvas.view = surface

            engine.setupLocalVideo(canvas)
        } else {
            surface = UIView(frame: CGRect(origin: CGPoint(x: 0, y: 0), size: bounds.size))
            addSubview(surface)
            canvas.view = surface

            engine.setupRemoteVideo(canvas)
        }
    }

    func setRenderMode(_ engine: AgoraRtcEngineKit, _ renderMode: UInt) {
        canvas.renderMode = AgoraVideoRenderMode(rawValue: renderMode)!
        setupRenderMode(engine)
    }

    func setMirrorMode(_ engine: AgoraRtcEngineKit, _ mirrorMode: UInt) {
        canvas.mirrorMode = AgoraVideoMirrorMode(rawValue: mirrorMode)!
        setupRenderMode(engine)
    }

    private func setupRenderMode(_ engine: AgoraRtcEngineKit) {
        if canvas.uid == 0 {
            engine.setLocalRenderMode(canvas.renderMode, mirrorMode: canvas.mirrorMode)
        } else {
            if let channel = channel {
                channel.setRemoteRenderMode(canvas.uid, renderMode: canvas.renderMode, mirrorMode: canvas.mirrorMode)
            } else {
                engine.setRemoteRenderMode(canvas.uid, renderMode: canvas.renderMode, mirrorMode: canvas.mirrorMode)
            }
        }
    }

    override func observeValue(forKeyPath keyPath: String?, of _: Any?, change: [NSKeyValueChangeKey: Any]?, context _: UnsafeMutableRawPointer?) {
        if keyPath == observerForKeyPath() {
            if let rect = change?[.newKey] as? CGRect {
                surface.frame = CGRect(origin: CGPoint(x: 0, y: 0), size: rect.size)
                if (arView != nil) {
                    let deepARWidth = rtcEngineManager?.deepARWidth?.intValue ?? 720
                    let deepARHeight = rtcEngineManager?.deepARHeight?.intValue ?? 1280
                    let ratio = rect.size.height / CGFloat(deepARHeight)
                    surface.transform = CGAffineTransformScale(CGAffineTransformIdentity, ratio, ratio)
                    arView.heightAnchor.constraint(equalToConstant: CGFloat(deepARHeight)).isActive = true
                    arView.widthAnchor.constraint(equalToConstant: CGFloat(deepARWidth)).isActive = true
                    arView.centerYAnchor.constraint(equalTo: surface.centerYAnchor, constant: 0).isActive = true
                    arView.centerXAnchor.constraint(equalTo: surface.centerXAnchor, constant: 0).isActive = true
                }
            }
        }
    }
}