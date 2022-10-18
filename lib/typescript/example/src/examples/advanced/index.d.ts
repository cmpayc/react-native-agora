import JoinMultipleChannel from './JoinMultipleChannel/JoinMultipleChannel';
import StreamMessage from './StreamMessage/StreamMessage';
import ChannelMediaRelay from './ChannelMediaRelay/ChannelMediaRelay';
import VoiceChanger from './VoiceChanger/VoiceChanger';
declare const Advanced: {
    title: string;
    data: ({
        name: string;
        component: typeof JoinMultipleChannel;
    } | {
        name: string;
        component: typeof StreamMessage;
    } | {
        name: string;
        component: typeof ChannelMediaRelay;
    } | {
        name: string;
        component: typeof VoiceChanger;
    })[];
};
export default Advanced;
