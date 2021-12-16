# 实例创建过程

```ts
import CyVideoPlayer from "cy.video.player";

const video = new CyVideoPlayer("cy-video-player", {
    // options
});
```

## 过程

1. `new` 实例
   1. 合并`options`
   2. 根据`options `创建对应的`DOM`
   3. 