import {IBuilderControls} from "../interfaces/i.builder.controls";

/**
 * 控件主管类
 */
export class DirectorControls {
    #builder: IBuilderControls | undefined = undefined;

    /**
     * 设置生成器
     * @param builder
     */
    public setBuilder(builder: IBuilderControls){
        this.#builder = builder;
    }

    public buildAll(){

    }
}