/**
 * video 标签的 attributes 接口
 *
 * Attributes interface for the video TAB
 */
export default interface ICyVideoPlayerAttributes {
    /**
     * 一个布尔属性;如果指定，视频将自动开始播放，只要它可以这样做，而不停止以完成加载数据。
     *
     * A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data.
     */
    autoplay: boolean;

    /**
     * 如果存在此属性，浏览器将提供控件来允许用户控制视频播放，包括音量、查找和暂停/恢复播放。
     *
     * If this attribute is present, the browser will offer controls to allow the user to control video playback, including volume, seeking, and pause/resume playback.
     */
    controls: boolean;

    /**
     * 视频显示区域的高度，以CSS像素为单位(仅限绝对值;没有百分比。)
     *
     * The height of the video's display area, in CSS pixels (absolute values only; no percentages.)
     */
    height: number;

    /**
     * 一个布尔属性;如果指定，浏览器将自动寻求回到开始时，达到视频的结束。
     *
     * A Boolean attribute; if specified, the browser will automatically seek back to the start upon reaching the end of the video
     */
    loop: boolean;

    /**
     * 一个布尔属性，指示视频中包含的音频的默认设置。如果设置，音频最初将被静音。默认值为false，表示播放视频时播放音频
     *
     * A Boolean attribute that indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played
     */
    muted: boolean;

    /**
     * 在下载视频时显示图像的URL。如果没有指定此属性，则在第一帧可用之前不显示任何内容，然后第一帧将显示为海报帧。
     *
     * A URL for an image to be shown while the video is downloading. If this attribute isn't specified, nothing is displayed until the first frame is available, then the first frame is shown as the poster frame.
     */
    poster: string;

    /**
     * 这个枚举属性旨在为浏览器提供一个提示，说明作者认为在播放视频之前加载什么内容会导致最佳的用户体验。它可能有以下值之一
     *
     * none:不预加载
     *
     * metadata: 表示只获取视频元数据(例如长度)。
     *
     * auto: 表示即使不希望用户使用，也可以下载整个视频文件。
     *
     * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience with regards to what content is loaded before the video is played. It may have one of the following values:
     *
     * none: Indicates that the video should not be preloaded.
     *
     * metadata: Indicates that only video metadata (e.g. length) is fetched.
     *
     * auto: Indicates that the whole video file can be downloaded, even if the user is not expected to use it.
     */
    preload: "none" | "metadata" | "auto";

    /**
     * 要嵌入的视频的URL。这是可选的;你可以在视频块中使用<source>元素来指定要嵌入的视频。
     *
     * The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed.
     */
    src: string;

    /**
     * 视频显示区域的宽度，以CSS像素为单位(仅限绝对值;没有百分比。)
     *
     * The width of the video's display area, in CSS pixels (absolute values only; no percentages.)
     */
    width: number;
}