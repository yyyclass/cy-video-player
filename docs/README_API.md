# 功能要点以及技术解决

****

### 字幕功能（Track）

1. 获取`video`标签
2. 假设`video`标签下有`track`标签，根据`video.textTracks`获取到`textTracks` 数组
3. 循环`textTracks`数组，不同语言的`track`，需要监听`oncuechange`事件
4. 当播放器状态为`play`时，实时拿到 `track.activeCues` 数据

注意事项：
1. 记得开启字幕功能，否则 `oncuechange` 事件不生效
2. js动态导入`track`,请在`video.onloadstart`执行插入到`video`

```ts
// 示例代码

const video = document.getElementById("cy-video-player"); // video 标签

// 字幕文件
const tracks = [
    {
        default:true,
        kind: "subtitles",
        srclang: "zh-CN",
        src: '/assets/test.vtt',
        label: '中文'
    },
    {
        kind: "subtitles",
        srclang: "en-US",
        src: '/assets/test.en.vtt',
        label: 'English'
    }
]

// js插入track时，为了防止默认字幕不生效，请在onloadstart中插入字幕
video.onloadstart =  () => {
    
    // 循环字幕，插入到video标签
    for (let i = 0, len = tracks.length; i < len; i++) {
        const track = tracks[i]; // 单个字幕的配置属性
        const trackDom = createEl("track", track); // 创建track标签
        video.appendChild(trackDom); // 把track标签插入到video标签
    }

    // 根据video下的track标签，拿到对应的textTrack数组
    const textTracks = video.textTracks;
    
    // 循环字幕数组
    for(let i = 0, len = textTracks.length; i < len; i ++){
        const cues = textTracks[i];
        cues.oncuechange = function (){
            if(cues.activeCues.length > 0){
                console.log("实时获取字幕",cues.activeCues[0])
            }
        }
    }
}

/**
 * 创建一个带有属性的标签
 * @param name
 * @param attributes
 */
function createEl(name: string, attributes = {}): any {
    let el = document.createElement(name);
    for (const attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }
    return el;
}
```

****