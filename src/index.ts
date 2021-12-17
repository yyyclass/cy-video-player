import CyVideoPlayer from "./cy.video.player";

if(!document){
    throw new Error("所发生的")
}

// const src = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
const src = "/assets/test.m3u8";
const dom = document.getElementById("cy-video-player");
const video = new CyVideoPlayer(dom, {
    src:src,
    debug: true,
});



export {
    CyVideoPlayer
}
export default CyVideoPlayer;