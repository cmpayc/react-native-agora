import { Component } from 'react';
import RtcEngine from 'react-native-agora';
interface State {
    channelId: string;
    isJoined: boolean;
    openMicrophone: boolean;
    enableSpeakerphone: boolean;
    playEffect: boolean;
}
export default class JoinChannelAudio extends Component<{}, State, any> {
    _engine: RtcEngine | undefined;
    constructor(props: {});
    UNSAFE_componentWillMount(): void;
    componentWillUnmount(): void;
    _initEngine: () => Promise<void>;
    _addListeners: () => void;
    _joinChannel: () => Promise<void>;
    _leaveChannel: () => Promise<void>;
    _switchMicrophone: () => void;
    _switchSpeakerphone: () => void;
    _switchEffect: () => void;
    _onChangeRecordingVolume: (value: number) => void;
    _onChangePlaybackVolume: (value: number) => void;
    _onChangeInEarMonitoringVolume: (value: number) => void;
    _toggleInEarMonitoring: (isEnabled: boolean) => void;
    render(): JSX.Element;
}
export {};
