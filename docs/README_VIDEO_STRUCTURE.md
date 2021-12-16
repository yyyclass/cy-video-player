# video 创建实例后的结构

创建之前的标签结构

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <video id="cy-video-player"></video>
</div>
</body>
</html>
```

创建之后的标签结构

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <!-- 容器包裹 -->
    <div class="cyvp-container">

        <!-- 各种控件 -->
        <div class="cyvp-controls">
            <!-- 进度条 -->
            <div class="cyvp-controls-item cyvp-controls-process">
                <!-- ....其他东西 -->
            </div>
            <!-- 全屏 -->
            <div class="cyvp-controls-item cyvp-controls-fullscreen">
                <!-- ....其他东西 -->
            </div>
            <!-- 宽屏 -->
            <div class="cyvp-controls-item cyvp-controls-widescreen">
                <!-- ....其他东西 -->
            </div>
            <!-- 倍速 -->
            <div class="cyvp-controls-item cyvp-controls-speed">
                <!-- ....其他东西 -->
            </div>
            <!-- 音量 -->
            <div class="cyvp-controls-item cyvp-controls-volume">
                <!-- ....其他东西 -->
            </div>
            <!-- 等等 -->
            <div class="cyvp-controls-item cyvp-controls-XXXX">
                <!-- ....其他东西 -->
            </div>
        </div>
        
        <!-- 字幕 -->
        <div class="cyvp-captions">
            <span class="cyvp-captions-text">字幕XXXXXXXXXXXXXXXX</span>
        </div>
        
        <!-- video 包装器 -->
        <div class="cyvp-wrapper">
            <video id="cy-video-player">
                <!-- 动态导入字幕 或者 sources -->
            </video>
        </div>
        
        <!-- 播放器状态 暂停/播放/加载中/结束/开始/移入/移出 -->
        <div class="cyvp-status">
            <!-- 其他 -->
        </div>
    </div>
</div>
</body>
</html>
```