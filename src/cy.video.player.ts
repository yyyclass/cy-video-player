import Hls from "hls.js";
import defaults from "./config/defaults";
import ICyVideoPlayerOptions from "./interfaces/i.cy.video.player.options";
import CyVideoPlayerDirector from "./cy.video.player.director";
import BuilderConfig from "./builder/builder.config";
import BuilderControls from "./builder/builder.controls";

interface CyVideoPlayer {

}


class CyVideoPlayer {
    /**
     * 初始化配置项
     * @private
     */
    #config: ICyVideoPlayerOptions = defaults;

    /**
     * @param target {any} video 标签的 DOM 结构
     * @param options {ICyVideoPlayerOptions} 配置项
     */
    constructor(target: any, options: Partial<ICyVideoPlayerOptions> = {}) {

        this.#init();

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(options.src as string);
            hls.attachMedia(target);
        }
    }

    #init() {
        const director = new CyVideoPlayerDirector();
        const builderConfig = new BuilderConfig();
        const builderControls = new BuilderControls();
        director.setConfigBuilder(builderConfig);
        director.setControlsBuilder(builderControls);
        director.buildAllConfig();
        director.buildAllControls();
    }
}


export {CyVideoPlayer}
export default CyVideoPlayer;