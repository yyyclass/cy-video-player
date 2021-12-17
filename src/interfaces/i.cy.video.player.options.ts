import ICyVideoPlayerOptionsSource from "./i.cy.video.player.options.source";
import ICyVideoPlayerOptionsTrack from "./i.cy.video.player.options.track";
import ICyVideoPlayerOptionsSpeed from "./i.cy.video.player.options.speed";
import ICyVideoPlayerOptionsLanguages from "./i.cy.video.player.options.languages";
import ICyVideoPlayerAttributes from "./i.cy.video.player.attributes";

/**
 * 创建播放器实例的第二个参数接口
 */

export default interface ICyVideoPlayerOptions extends ICyVideoPlayerAttributes {
    /**
     * 播放器实例中使用的语言
     */
    language: string;
    /**
     * 自定义播放器中可用的语言，会展示切换语言按钮
     */
    languages: ICyVideoPlayerOptionsLanguages[];
    /**
     * 不同视频格式的配置项
     */
    sources: ICyVideoPlayerOptionsSource[];
    /**
     * 不同语言的字幕
     */
    tracks: ICyVideoPlayerOptionsTrack[];
    /**
     * 记录到控制台
     */
    debug: boolean;
    /**
     * 默认音量
     */
    volume: number;
    /**
     * 配置的速度默认和选项显示
     */
    speed: ICyVideoPlayerOptionsSpeed
}
