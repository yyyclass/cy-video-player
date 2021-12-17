# video 创建实例前后的结构对比

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
        <!-- video 包装器 -->
        <div class="cyvp-wrapper">
            <video id="cy-video-player">
                <!-- 动态导入字幕 或者 sources -->
            </video>
        </div>
        
        <!-- 功能类型的各种控件 -->
        <div class="cyvp-controls">
            <!-- 音量 -->
            <div class="cyvp-controls-item cyvp-controls-volume">
                <!-- ....其他东西 -->
            </div>
            <!-- 字幕 -->
            <div class="cyvp-controls-item cyvp-controls-captions">
                <!-- ....其他东西 -->
            </div>
            <!-- 设置 -->
            <div class="cyvp-controls-item cyvp-controls-XXXX">
                <!-- ....其他东西 -->
            </div>
            <!-- 画中画 -->
            <div class="cyvp-controls-item cyvp-controls-miniscreen">
                <!-- ....其他东西 -->
            </div>
            <!-- 宽屏 -->
            <div class="cyvp-controls-item cyvp-controls-widescreen">
                <!-- ....其他东西 -->
            </div>
            <!-- 全屏 -->
            <div class="cyvp-controls-item cyvp-controls-fullscreen">
                <!-- ....其他东西 -->
            </div>
        </div>
        
        <!-- 播放器状态 暂停/播放/加载中/结束/开始/移入/移出 -->
        <div class="cyvp-status">
            <!-- 其他 -->
        </div>

        <!-- 进度条控件 -->
        <div class="cyvp-process">
            <!-- ....其他东西 -->
            <div class="cyvp-process-wrapper">
                <div class="cyvp-process-bar">
                    <div class="cyvp-process-value"></div>
                </div>
            </div>
            <div class="cyvp-process-">
            </div>
        </div>
    </div>
</div>
</body>
</html>
```