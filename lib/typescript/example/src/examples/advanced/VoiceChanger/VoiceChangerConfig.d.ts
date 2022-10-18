import { AudioEffectPreset, AudioEqualizationBandFrequency, AudioReverbType, VoiceBeautifierPreset } from 'react-native-agora';
declare const _default: ({
    alertTitle: string;
    options: {
        text: string;
        type: VoiceBeautifierPreset;
    }[];
} | {
    alertTitle: string;
    options: {
        text: string;
        type: AudioEffectPreset;
    }[];
})[];
export default _default;
export declare const FreqOptions: {
    text: string;
    type: AudioEqualizationBandFrequency;
}[];
export declare const ReverbKeyOptions: {
    text: string;
    type: AudioReverbType;
    min: number;
    max: number;
}[];
