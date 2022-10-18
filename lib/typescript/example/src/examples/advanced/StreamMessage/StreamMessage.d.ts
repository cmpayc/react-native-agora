import { Component } from 'react';
import RtcEngine from 'react-native-agora';
interface State {
    channelId: string;
    isJoined: boolean;
    remoteUid: number[];
    message?: string;
}
export default class StreamMessage extends Component<{}, State, any> {
    _engine?: RtcEngine;
    constructor(props: {});
    UNSAFE_componentWillMount(): void;
    componentWillUnmount(): void;
    _initEngine: () => Promise<void>;
    _addListeners: () => void;
    _joinChannel: () => Promise<void>;
    _leaveChannel: () => Promise<void>;
    render(): JSX.Element;
    _renderVideo: () => JSX.Element;
    _renderToolBar: () => JSX.Element;
    _onPressSend: () => Promise<void>;
}
export {};
