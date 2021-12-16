import Hls from 'hls.js';
import {ICyVideoPlayerOptions} from "./interfaces/i.cy.video.player.options";
import createEl from "./utils/createEl";


class CyVideoPlayer {

    /**
     * 初始属性
     * @private
     */
    #options: Partial<ICyVideoPlayerOptions> = {
        controls: false,
    }

    /**
     * @param dom {string} id
     * @param options {ICyVideoPlayerOptions} 配置项
     */
    constructor(dom: string, options: Partial<ICyVideoPlayerOptions> = {}) {
        this.#options = {
            ...this.#options,
            ...options
        }
        this.init(dom);
    }

    private init(dom) {
        const video: any = document.getElementById(dom);
        const videoParent = video.parentElement;
        const videoCaptions = createEl("div");
        console.log(video.parentElement)
        const container = createEl("div");
        container.appendChild(video);
        container.style.position = "relative";
        videoParent.appendChild(container)

        console.dir(video)
        video.onloadstart =  () => {
            if (this.#options.tracks) {
                for (let i = 0, len = this.#options.tracks.length; i < len; i++) {
                    const track = this.#options.tracks[i];
                    const trackDom = createEl("track", track);
                    video.appendChild(trackDom);
                }
            }
            const span = createEl("span");
            videoCaptions.appendChild(span) ;
            for(let i = 0, len = video.textTracks.length; i < len; i ++){
                const cues = video.textTracks[i];
                cues.oncuechange = function (){
                    if(cues.activeCues.length > 0){
                        console.log("oncuechange 中文",cues.activeCues[0])
                        span.innerText = `${cues.activeCues[0].text}`;
                        span.setAttribute("startTime", cues.activeCues[0].startTime)
                        span.setAttribute("endTime", cues.activeCues[0].endTime)
                    }
                }
            }
        }

        videoCaptions.style.position = "fixed";
        videoCaptions.style.bottom = "0";
        videoCaptions.style.left = "0";
        videoCaptions.style.right = "0";
        videoCaptions.style.fontSize = "40px";
        videoCaptions.style.width = "100%";
        videoCaptions.style.height = "100px";
        videoCaptions.style.zIndex = "0";
        videoCaptions.style.userSelect = "none";
        container.appendChild(videoCaptions);
        // video.removeAttribute("controls")



        // const cues = video.textTracks[0];
        // cues.oncuechange = function (e){
        //
        // }
        //
        //
        // const cues1 = video.textTracks[1];
        // cues1.oncuechange = function (e){
        //     console.log("oncuechange 英文",cues1.activeCues)
        // }


        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(this.#options.src as any);
            hls.attachMedia(video)
            // dom.removeAttribute("display")
        }
    }

}


export {
    CyVideoPlayer
}
export default CyVideoPlayer;