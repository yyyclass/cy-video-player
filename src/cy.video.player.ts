import {CyVideoPlayerOptions} from "./interface/cy.video.player"

/**
 * CyVideoPlayer instance
 *
 * 播放器实例
 */
interface CyVideoPlayer{
    test: string;
}

class CyVideoPlayer {
    /**
     *
     * @param id Dom Element id （DOM元素id）
     * @param options CyVideoPlayer options （播放器配置项）
     */
    constructor(id: string, options?: CyVideoPlayerOptions) {
    }
}


export {
    CyVideoPlayer
}
export default CyVideoPlayer;