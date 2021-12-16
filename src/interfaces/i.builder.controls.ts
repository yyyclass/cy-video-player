/**
 * 播放器控件接口生成器
 */
export interface IBuilderControls {
    /**
     * 播放/暂停按钮
     */
    createPlayButton(): void;

    /**
     * 进度条
     */
    createProgressBar():void;

    /**
     * 分段进度条
     */
    createSectionProgressBar():void;

    /**
     * 音量条
     */
    createVolumeBar(): void;

    /**
     * 全屏按钮
     */
    createFullScreenButton(): void;

    /**
     * 宽屏按钮
     */
    createWideScreenButton():void;


    /**
     * 画中画按钮
     */
    createPictureInPicture():void;

    /**
     * 字幕按钮
     */
    createCaptionButton():void;

    /**
     * 播放倍速
     */
    createBackSpeedButton():void;

    /**
     * 清晰度
     */
    createDefinitionButton():void;
}