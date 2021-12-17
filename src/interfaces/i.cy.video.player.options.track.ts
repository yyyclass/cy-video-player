export default interface ICyVideoPlayerOptionsTrack {
    /**
     * 规定该轨道是默认的，假如没有选择任何轨道。
     */
    default?: boolean;
    /**
     * 表示轨道属于什么文本类型。
     */
    kind: "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
    /**
     * 轨道的标签或标题。
     */
    label: string;
    /**
     * 轨道的 URL。
     */
    src: string;
    /**
     * 轨道的语言，为 language_code，若 kind 属性值是 "subtitles"，则该属性必需的。
     */
    srclang: string;
}
