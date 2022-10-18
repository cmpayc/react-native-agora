import { Component } from 'react';
import RtcEngine from 'react-native-agora';
interface State {
    channelId: string;
    isJoined: boolean;
    remoteUid: number[];
    switchCamera: boolean;
    switchRender: boolean;
    isRenderTextureView: boolean;
}
export default class JoinChannelVideo extends Component<{}, State, any> {
    _engine: RtcEngine | undefined;
    constructor(props: {});
    UNSAFE_componentWillMount(): void;
    componentWillUnmount(): void;
    _initEngine: () => Promise<void>;
    _addListeners: () => void;
    _joinChannel: () => Promise<void>;
    _leaveChannel: () => Promise<void>;
    _switchCamera: () => void;
    _switchRender: () => void;
    _switchRenderView: (value: boolean) => void;
    render(): JSX.Element;
    _renderVideo: () => JSX.Element;
}
export {};
