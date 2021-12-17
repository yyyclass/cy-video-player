import IBuilderControls from "./interfaces/i.builder.controls";
import IBuilderConfig from "./interfaces/i.builder.config";
import createEl from "./utils/createEl";

/**
 * 主管类
 */
export default class CyVideoPlayerDirector {
    #controlsBuilder: IBuilderControls | undefined = undefined;
    #configBuilder: IBuilderConfig | undefined = undefined;

    /**
     * 设置控件生成器
     * @param builder
     */
    public setControlsBuilder(builder: IBuilderControls){
        this.#controlsBuilder = builder;
    }

    /**
     * 初始化配置生成器
     * @param builder
     */
    public setConfigBuilder(builder: IBuilderConfig){
        this.#configBuilder = builder;
    }


    public buildAllControls(){
        const controls = createEl("div");
        this.#controlsBuilder?.createBackSpeedButton();
    }


    public buildAllConfig(){

    }

}