import CyVideoPlayer from "./cy.video.player";

// const src = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
const src = "/assets/test.m3u8";

const video = new CyVideoPlayer("cy-video-player", {
    src:src,
    tracks: [
        {
            default:true,
            kind: "subtitles",
            srclang: "zh-CN",
            src: '/assets/test.vtt',
            label: '中文'
        },
        {
            kind: "subtitles",
            srclang: "en-US",
            src: '/assets/test.en.vtt',
            label: 'English'
        }
    ]
});





export {
    CyVideoPlayer
}
export default CyVideoPlayer;