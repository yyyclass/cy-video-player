/**
 * 创建播放器实例的第二个参数接口
 */
import {ICyVideoPlayerOptionsSource} from "./i.cy.video.player.options.source";
import {ICyVideoPlayerOptionsTrack} from "./i.cy.video.player.options.track";

export interface ICyVideoPlayerOptions {
    /**
     * 如果出现该属性，则视频在就绪后马上播放。
     */
    autoplay: boolean;
    /**
     * 如果出现该属性，则向用户显示控件，比如播放按钮。
     */
    controls: boolean;
    /**
     * 设置视频播放器的宽度。
     */
    width: number;
    /**
     * 设置视频播放器的高度。
     */
    height: number;
    /**
     * 如果出现该属性，则当媒介文件完成播放后再次开始播放。
     */
    loop: boolean;
    /**
     * 规定视频的音频输出应该被静音。
     */
    muted: boolean;
    /**
     * 规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像。
     */
    poster: string;
    /**
     * 如果出现该属性，则视频在页面加载时进行加载，并预备播放。
     *
     * 如果使用 "autoplay"，则忽略该属性。
     */
    preload: boolean;
    /**
     * 要播放的视频的 URL。
     */
    src: string;

    /**
     * 视频倍速。如果出现该属性,则会出现视频倍速按钮
     */
    playbackRates: number[],
    /**
     * 播放器实例中使用的语言
     */
    language: string;
    /**
     * 自定义播放器中可用的语言，会展示切换语言按钮
     */
    languages: CyVideoPlayerOptionsLanguages[];
    /**
     * 不同视频格式的配置项
     */
    sources: ICyVideoPlayerOptionsSource[];
    /**
     * 不同语言的字幕
     */
    tracks: ICyVideoPlayerOptionsTrack[]
}


interface CyVideoPlayerOptionsLanguages {
    /**
     * ISO 语言代码。例如 en-US、zh-CN
     */
    lang: string;
}