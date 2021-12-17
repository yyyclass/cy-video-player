import ICyVideoPlayerOptions from "../interfaces/i.cy.video.player.options";

const defaults: ICyVideoPlayerOptions = {
    debug: false,
    speed: {
        selected: 1,
        options: [0.75, 1, 1.25, 1.5, 2]
    },
    volume: 0,
    autoplay: false,
    controls: false,
    height: 0,
    language: "zh-CN",
    languages: [],
    loop: false,
    muted: false,
    poster: "",
    preload: "metadata",
    sources: [],
    src: "",
    tracks: [],
    width: 0
}

export default defaults;