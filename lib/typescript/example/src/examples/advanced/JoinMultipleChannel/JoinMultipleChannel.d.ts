import { Component } from 'react';
import RtcEngine, { RtcChannel } from 'react-native-agora';
interface State {
    renderChannelId: string;
    isJoined0: boolean;
    isJoined1: boolean;
    remoteUid0: number[];
    remoteUid1: number[];
}
export default class JoinMultipleChannel extends Component<{}, State, any> {
    _engine: RtcEngine | undefined;
    _channel0: RtcChannel | undefined;
    _channel1: RtcChannel | undefined;
    constructor(props: {});
    UNSAFE_componentWillMount(): void;
    componentWillUnmount(): void;
    _initEngine: () => Promise<void>;
    _joinChannel0: () => Promise<void>;
    _joinChannel1: () => Promise<void>;
    _addListener: (rtcChannel: RtcChannel) => void;
    _publishChannel0: () => Promise<void>;
    _publishChannel1: () => Promise<void>;
    _leaveChannel0: () => Promise<void>;
    _leaveChannel1: () => Promise<void>;
    render(): JSX.Element;
    _renderVideo: () => JSX.Element;
}
export {};
