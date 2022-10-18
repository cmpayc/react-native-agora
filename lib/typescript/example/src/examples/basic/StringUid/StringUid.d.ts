import { Component } from 'react';
import RtcEngine from 'react-native-agora';
interface State {
    channelId: string;
    stringUid: string;
    isJoined: boolean;
}
export default class StringUid extends Component<{}, State, any> {
    _engine: RtcEngine | undefined;
    constructor(props: {});
    UNSAFE_componentWillMount(): void;
    componentWillUnmount(): void;
    _initEngine: () => Promise<void>;
    _addListeners: () => void;
    _joinChannel: () => Promise<void>;
    _leaveChannel: () => Promise<void>;
    _getUserInfo: () => void;
    render(): JSX.Element;
}
export {};
