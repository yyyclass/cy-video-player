import {IBuilderControls} from "../interfaces/i.builder.controls";
import {ControlsProduct} from "../controls.product";

/**
 * 播放器控件的生成器
 */
class BuilderControls implements IBuilderControls {
    #product: ControlsProduct | undefined = undefined;
    constructor() {
        this.#reset();
    }

    #reset(){
        this.#product = new ControlsProduct();
    }

    createBackSpeedButton(): void {
    }

    createCaptionButton(): void {
    }

    createDefinitionButton(): void {
    }

    createFullScreenButton(): void {
    }

    createPictureInPicture(): void {
    }

    createPlayButton(): void {
    }

    createProgressBar(): void {
        const el = {
            class: "cy-player-progress-bar",
            type: "div"
        };


    }

    createSectionProgressBar(): void {
    }

    createVolumeBar(): void {
    }

    createWideScreenButton(): void {
    }

    /**
     * 返回一个实例
     */
    public getControlsProduct(){
        const result = this.#product as ControlsProduct;
        this.#reset();
        return result;
    }
}