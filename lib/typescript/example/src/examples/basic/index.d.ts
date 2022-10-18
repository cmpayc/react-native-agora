import JoinChannelAudio from './JoinChannelAudio/JoinChannelAudio';
import JoinChannelVideo from './JoinChannelVideo/JoinChannelVideo';
import StringUid from './StringUid/StringUid';
declare const Basic: {
    title: string;
    data: ({
        name: string;
        component: typeof JoinChannelAudio;
    } | {
        name: string;
        component: typeof JoinChannelVideo;
    } | {
        name: string;
        component: typeof StringUid;
    })[];
};
export default Basic;
