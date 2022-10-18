import { Component } from 'react';
import RtcEngine from 'react-native-agora';
interface State {
    channelId: string;
    isJoined: boolean;
    remoteUid: number[];
    anotherChannelName?: string;
    isRelaying: boolean;
}
export default class ChannelMediaRelay extends Component<{}, State, any> {
    _engine?: RtcEngine;
    constructor(props: {});
    onPressRelay: () => Promise<void>;
    onPressStop: () => Promise<void>;
    UNSAFE_componentWillMount(): void;
    componentWillUnmount(): void;
    _initEngine: () => Promise<void>;
    _addListeners: () => void;
    _joinChannel: () => Promise<void>;
    _leaveChannel: () => Promise<void>;
    render(): JSX.Element;
    _renderVideo: () => JSX.Element;
    _renderToolBar: () => JSX.Element;
}
export {};
