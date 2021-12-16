# 项目结构说明

**cy-video-player**

```

├── docs                                              文档说明                
├── public                                            开发阶段的静态资源目录
├── src                                               cy-video-player 入口目录
│   ├── icon                                          播放器的图标目录
│   ├── interfaces                                    播放器的接口目录
│   ├── loader                                        webpack的loader目录
│   ├── plugin                                        播放器的插件目录
│   ├── utils                                         工具函数目录
│   ├── view                                          渲染播放器目录
│   ├── cy.video.player.ts                            播放器主类
│   └── index.ts                                      入口文件
├── webpack                                           不同环境的webpack配置项
├── .gitgnore                                         git哪些文件不需要添加到版本管理中
├── .npmignore                                        npm哪些文件不需要添加到npm包中
├── README.md                                         项目的详细使用说明
├── package.json                                      这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）
├── typing.d.ts                                       typescript的接口文件
└── yarn.lock                                         yarn 依赖项文件
```