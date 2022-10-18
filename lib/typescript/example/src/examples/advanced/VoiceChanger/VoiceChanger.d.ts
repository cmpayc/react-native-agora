import { Component } from 'react';
import RtcEngine, { AudioEffectPreset, AudioEqualizationBandFrequency, AudioReverbType, VoiceBeautifierPreset } from 'react-native-agora';
interface State {
    channelId: string;
    isJoined: boolean;
    isBeautifierOnly: boolean;
}
export default class VoiceChanger extends Component<{}, State, any> {
    _engine?: RtcEngine;
    _voiceBeautifierPreset: VoiceBeautifierPreset;
    _audioEffectPreset: AudioEffectPreset;
    _param1: number;
    _param2: number;
    _audioReverbType: AudioReverbType;
    _audioReverbValue: number;
    _audioEqualizationBandFrequency: AudioEqualizationBandFrequency;
    _bandGain: number;
    _localVoicePitch: number;
    constructor(props: {});
    UNSAFE_componentWillMount(): void;
    componentWillUnmount(): void;
    _initEngine: () => Promise<void>;
    _addListeners: () => void;
    _joinChannel: () => Promise<void>;
    _leaveChannel: () => Promise<void>;
    render(): JSX.Element;
    _renderBeautifier: () => JSX.Element;
    _renderOthers: () => JSX.Element;
}
export {};
