# <a id="Ink_Canvas_Helpers"></a> Namespace Ink\_Canvas.Helpers

### Classes

 [AdvancedBezierSmoothing](Ink\_Canvas.Helpers.AdvancedBezierSmoothing.md)

原有的同步版本（保持向后兼容）

 [AppRestartHelper](Ink\_Canvas.Helpers.AppRestartHelper.md)

 [AsyncAdvancedBezierSmoothing](Ink\_Canvas.Helpers.AsyncAdvancedBezierSmoothing.md)

改进的异步硬件加速墨迹平滑处理器，使用优化的三次贝塞尔曲线拟合

 [AutoBackupManager](Ink\_Canvas.Helpers.AutoBackupManager.md)

自动备份管理器
负责管理配置文件的自动备份功能

 [AutoFontSizeHelper](Ink\_Canvas.Helpers.AutoFontSizeHelper.md)

Automatically shrinks text to fit available width.
Supports TextBlock and Label.
Only shrinks, never enlarges above MaxFontSize.

 [AvoidFullScreenHelper](Ink\_Canvas.Helpers.AvoidFullScreenHelper.md)

防止窗口进入全屏状态的辅助类

 [BaseUploadQueue](Ink\_Canvas.Helpers.BaseUploadQueue.md)

通用上传队列基类

 [CameraInfo](Ink\_Canvas.Helpers.CameraInfo.md)

 [CameraPropState](Ink\_Canvas.Helpers.CameraPropState.md)

单个摄像头属性的支持状态与归一化值。

 [CameraServiceFactory](Ink\_Canvas.Helpers.CameraServiceFactory.md)

摄像头服务工厂。
统一返回 <xref href="Ink_Canvas.Helpers.DirectShowCameraService" data-throw-if-not-resolved="false"></xref>（基于 DirectShowLib + SampleGrabber），
不依赖 WinRT MediaFrameReader。
视频展台特殊模式（全屏预览）走 MainWindow.VideoPresenterFullCanvasImage（WPFMediaKit VideoCaptureElement）。

 [CapturableVideoCaptureElement](Ink\_Canvas.Helpers.CapturableVideoCaptureElement.md)

继承自 WPFMediaKit 的 VideoCaptureElement，额外暴露从 D3DImage 直接拍照的能力。
参考 EasiCamera.Control.CameraPreviewer：
  public BitmapSource CameraImage =&gt; base.D3DImage.GetBitmapSource();
D3DImage 属性是 protected，只能在子类中访问。

 [Circle](Ink\_Canvas.Helpers.Circle.md)

 [ComPPTLinkManager](Ink\_Canvas.Helpers.ComPPTLinkManager.md)

 [ConfigProfileManager](Ink\_Canvas.Helpers.ConfigProfileManager.md)

提供多配置文件保存、切换与热重载支持。
方案保存在 Configs/Profiles 目录下，当前生效的配置仍为 Configs/Settings.json。

 [DebugConsoleManager](Ink\_Canvas.Helpers.DebugConsoleManager.md)

 [DelayAction](Ink\_Canvas.Helpers.DelayAction.md)

 [DirectShowCameraService](Ink\_Canvas.Helpers.DirectShowCameraService.md)

基于 DirectShow (DirectShowLib) FilterGraph + SampleGrabber 的摄像头服务实现。
纯 DirectShow + GDI+，兼容 Win7 SP1+。
ScreenshotSelectorWindow 使用此实现（不创建 UI 控件，纯帧事件路径）。
视频展台特殊模式（全屏预览）仍走 MainWindow.VideoPresenterFullCanvasImage (WPFMediaKit VideoCaptureElement)。

 [DlassApiClient](Ink\_Canvas.Helpers.DlassApiClient.md)

Dlass API 客户端，用于与服务端通信

 [DlassUploadProvider](Ink\_Canvas.Helpers.DlassUploadProvider.md)

Dlass上传提供者

 [DlassUploadQueue](Ink\_Canvas.Helpers.DlassUploadQueue.md)

Dlass上传队列

 [DwmCompositionHelper](Ink\_Canvas.Helpers.DwmCompositionHelper.md)

 [EdgeGestureUtil](Ink\_Canvas.Helpers.EdgeGestureUtil.md)

 [ExternalCallerLauncher](Ink\_Canvas.Helpers.ExternalCallerLauncher.md)

 [FeedbackSanitizer](Ink\_Canvas.Helpers.FeedbackSanitizer.md)

反馈数据脱敏处理器。
对上传到 pastebin 的 JSON 数据进行脱敏，移除敏感配置。
脱敏规则：
- 设备 ID：保留原样
- WebDAV 配置（URL、用户名、密码、根目录）：完全移除
- DlassSettings 的 token 和 API 地址：移除
- 密码哈希/盐值：移除

 [FileAssociationManager](Ink\_Canvas.Helpers.FileAssociationManager.md)

文件关联管理器，用于注册和处理.icstk文件的关联

 [FillImage](Ink\_Canvas.Helpers.FillImage.md)

继承自 FrameworkElement，自行管理 Source + Stretch 渲染。
行为与 WPFMediaKit 的 VideoCaptureElement 一致：
  MeasureOverride / ArrangeOverride 都返回可用空间本身（填满容器），
  OnRender 在 RenderSize 内按 Stretch=Uniform 居中绘制图像（有黑边但居中）。
不继承 Image：Image.ArrangeOverride 返回按图像比例 fit 后的尺寸（小于容器），
且内部 _arrangedSize 在 LayoutTransform 旋转后会与实际不匹配导致拉伸。
用于拍照后的照片预览，使其与实时画面走完全相同的变换管线。

 [FloatingBarThemeMarketService](Ink\_Canvas.Helpers.FloatingBarThemeMarketService.md)

Floating-bar theme marketplace. Theme packages are downloaded outside the application assembly.

 [FloatingBarThemeService](Ink\_Canvas.Helpers.FloatingBarThemeService.md)

加载浮动工具栏的本地 XAML 主题。
Each theme is a folder containing manifest.json and Theme.xaml.

 [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md)

悬浮窗拦截器 - 检测和隐藏指定的悬浮窗

 [FrameEventArgs](Ink\_Canvas.Helpers.FrameEventArgs.md)

 [FullScreenHelper](Ink\_Canvas.Helpers.FullScreenHelper.md)

用来使窗口变得全屏的辅助类
采用设置窗口位置和尺寸，确保盖住整个屏幕的方式来实现全屏
目前已知需要满足的条件是：窗口盖住整个屏幕、窗口没有WS_THICKFRAME样式、窗口不能有标题栏且最大化

 [GlobalHotkeyManager](Ink\_Canvas.Helpers.GlobalHotkeyManager.md)

全局快捷键管理器 - 使用NHotkey库实现全局快捷键功能

 [HandwritingRecognitionResult](Ink\_Canvas.Helpers.HandwritingRecognitionResult.md)

一次手写识别批次的汇总结果。

 [HandwritingWordSegment](Ink\_Canvas.Helpers.HandwritingWordSegment.md)

单个手写词片段的识别结果。

 [HardwareAcceleratedInkProcessor](Ink\_Canvas.Helpers.HardwareAcceleratedInkProcessor.md)

硬件加速的墨迹处理器，利用WPF的GPU渲染能力

 [GlobalHotkeyManager.HotkeyInfo](Ink\_Canvas.Helpers.GlobalHotkeyManager.HotkeyInfo.md)

快捷键信息类

 [IACoreDllExtractor](Ink\_Canvas.Helpers.IACoreDllExtractor.md)

IACore DLL自动释放器
在应用启动时自动释放IACore相关的DLL文件到应用程序目录

 [IacoreTextHint](Ink\_Canvas.Helpers.IacoreTextHint.md)

IACore 文字识别的上下文提示（对应 IAWinFX AnalysisHintNode 的属性层）。
UWP WinRT InkAnalyzer 无法访问这些层；只有走 IPC 辅助进程才能注入 Factoid/WordList/WordMode/Coerce。
HintLeft/Top/Width/Height 全 0 表示无限区域（属性作用于全部笔画）。

 [InkFadeManager](Ink\_Canvas.Helpers.InkFadeManager.md)

墨迹渐隐管理器 - 管理墨迹的渐隐动画和状态

 [InkRecognitionManager](Ink\_Canvas.Helpers.InkRecognitionManager.md)

 [InkRecognizeHelper](Ink\_Canvas.Helpers.InkRecognizeHelper.md)

墨迹形状/手写识别的对外门面。
IACore 路径通过 IPC 调用 x86 辅助进程；WinRT 路径在主进程内直接调用。
主进程 (.NET 6 x64) 不再直接引用 IAWinFX 类型。

 [InkShapeRecognitionResult](Ink\_Canvas.Helpers.InkShapeRecognitionResult.md)

与具体识别后端无关的形状识别结果，供统一纠正模块消费。

 [InkSmoothingConfig](Ink\_Canvas.Helpers.InkSmoothingConfig.md)

墨迹平滑配置类

 [InkSmoothingDetailedStats](Ink\_Canvas.Helpers.InkSmoothingDetailedStats.md)

墨迹纠正详细性能统计

 [InkSmoothingEventArgs](Ink\_Canvas.Helpers.InkSmoothingEventArgs.md)

墨迹平滑事件参数

 [InkSmoothingManager](Ink\_Canvas.Helpers.InkSmoothingManager.md)

统一的墨迹平滑管理器，整合异步处理和硬件加速

 [InkSmoothingPerformanceMonitor](Ink\_Canvas.Helpers.InkSmoothingPerformanceMonitor.md)

性能监控器（含分阶段计时）

 [InkSmoothingPipelineSample](Ink\_Canvas.Helpers.InkSmoothingPipelineSample.md)

 [FloatingWindowInterceptor.InterceptRule](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptRule.md)

拦截规则

 [IpcIACoreClient](Ink\_Canvas.Helpers.IpcIACoreClient.md)

 [LocalizationHelper](Ink\_Canvas.Helpers.LocalizationHelper.md)

 [LrcChar](Ink\_Canvas.Helpers.LrcChar.md)

Represents a single timed character within a lyric line.
Used for per-character highlight animation (already-sung / pending chars).

 [LrcData](Ink\_Canvas.Helpers.LrcData.md)

Represents a parsed LRC file containing metadata and timed lyrics.

 [LrcLine](Ink\_Canvas.Helpers.LrcLine.md)

Represents a single lyric line with timing information.

 [LrcParser](Ink\_Canvas.Helpers.LrcParser.md)

Parses standard LRC and translated LRC files.

 [MemoryBreakdownHelper](Ink\_Canvas.Helpers.MemoryBreakdownHelper.md)

Builds a detailed memory snapshot of the current process for diagnostics
(relates to issue #546). The snapshot is plain text — it lists:
  1) Process-level working set / private usage / page-file usage
  2) .NET GC heap stats (per-generation size, fragmentation, pinned objects)
  3) WPF UI counts (Windows, SettingsWindow page cache, Visual tree size)
  4) In-app caches that are known to grow (PerformanceMonitorHelper samples,
     Automation / plugin manager registry if accessible via reflection)
  5) Loaded assemblies count
The caller can persist the report to Logs/MemoryBreakdown_*.txt and/or
emit a short summary through <xref href="Ink_Canvas.Helpers.LogHelper.WriteLogToFile(System.String%2cInk_Canvas.Helpers.LogHelper.LogType)" data-throw-if-not-resolved="false"></xref>.

 [MessageBoxHelper](Ink\_Canvas.Helpers.MessageBoxHelper.md)

统一弹窗辅助类。
自动为弹窗定位最适合的 Owner 窗口（优先关联当前 Page/Control 所在的设置窗口或活动窗口），
防止在设置窗口置顶或最大化时，无 Owner 的弹窗被遮挡在设置窗口后方导致界面死锁。

 [MicroBinClient](Ink\_Canvas.Helpers.MicroBinClient.md)

MicroBin pastebin 客户端。

MicroBin 没有 REST API，通过表单提交创建 paste：
  POST /   — multipart/form-data, 字段 "content" = 文本
  302 重定向到 paste 页面，从 Location 头获取 URL

 [NameRosterManager](Ink\_Canvas.Helpers.NameRosterManager.md)

随机点名"选择方案"（学生档案）管理器。
把 Names.txt / Replace.txt 当作"当前生效的方案"，把各方案内容持久化到 Settings.json，
切换方案时把对应方案内容写回 Names.txt / Replace.txt。

 [PPTAgentLinkManager](Ink\_Canvas.Helpers.PPTAgentLinkManager.md)

 [PPTInkManager](Ink\_Canvas.Helpers.PPTInkManager.md)

PPT墨迹管理器 - 负责按幻灯片保存/加载墨迹、自动保存与内存管理。

 [PPTManager](Ink\_Canvas.Helpers.PPTManager.md)

PPT联动管理器 - 统一管理PPT和WPS的连接、事件处理和进程管理

 [PPTROTConnectionHelper](Ink\_Canvas.Helpers.PPTROTConnectionHelper.md)

 [PPTSlideThumbnail](Ink\_Canvas.Helpers.PPTSlideThumbnail.md)

 [PPTUIManager](Ink\_Canvas.Helpers.PPTUIManager.md)

PPT UI管理器 - 统一管理PPT相关的UI更新和样式设置

 [PerformanceMonitorHelper](Ink\_Canvas.Helpers.PerformanceMonitorHelper.md)

Monitors CPU/memory usage during app runtime and manages performance history.

 [PerformanceTransparentWin](Ink\_Canvas.Helpers.PerformanceTransparentWin.md)

Main-window base that can use WindowChrome for DWM-backed transparent rendering.

 [PopupManagerHelper](Ink\_Canvas.Helpers.PopupManagerHelper.md)

 [ROTPPTManager](Ink\_Canvas.Helpers.ROTPPTManager.md)

 [RealtimeInkInputPerformanceSnapshot](Ink\_Canvas.Helpers.RealtimeInkInputPerformanceSnapshot.md)

 [RealtimeInkSlowEventSnapshot](Ink\_Canvas.Helpers.RealtimeInkSlowEventSnapshot.md)

 [ResolutionInfo](Ink\_Canvas.Helpers.ResolutionInfo.md)

 [SafeZipExtractor](Ink\_Canvas.Helpers.SafeZipExtractor.md)

 [SaveFileNameContext](Ink\_Canvas.Helpers.SaveFileNameContext.md)

 [SaveFileNameHelper](Ink\_Canvas.Helpers.SaveFileNameHelper.md)

渲染保存文件名模板。支持占位符: {date} {time} {datetime} {mode} {page} {count} {type}。
当模板为空、渲染结果非法或仅含分隔符时，回退到默认时间戳命名。

 [ScreenDetectionHelper](Ink\_Canvas.Helpers.ScreenDetectionHelper.md)

屏幕检测帮助类 - 用于检测窗口所在的屏幕和屏幕信息

 [ShapeRecognitionRouter](Ink\_Canvas.Helpers.ShapeRecognitionRouter.md)

 [SliderTouchHelper](Ink\_Canvas.Helpers.SliderTouchHelper.md)

为 Slider 控件提供触摸和手写笔事件支持的辅助类

 [StartupCount](Ink\_Canvas.Helpers.StartupCount.md)

 [StrokeVisual](Ink\_Canvas.Helpers.StrokeVisual.md)

用于显示笔迹的类

 [ThemeHelper](Ink\_Canvas.Helpers.ThemeHelper.md)

 [FloatingBarThemeService.ThemeInfo](Ink\_Canvas.Helpers.FloatingBarThemeService.ThemeInfo.md)

 [ThemeMarketEntry](Ink\_Canvas.Helpers.ThemeMarketEntry.md)

 [ThemeMarketIndex](Ink\_Canvas.Helpers.ThemeMarketIndex.md)

 [ThemeMarketManifest](Ink\_Canvas.Helpers.ThemeMarketManifest.md)

 [TimeMachine](Ink\_Canvas.Helpers.TimeMachine.md)

 [TimeMachineHistory](Ink\_Canvas.Helpers.TimeMachineHistory.md)

 [TouchAwareDragDropHelper](Ink\_Canvas.Helpers.TouchAwareDragDropHelper.md)

触屏感知拖拽辅助类。

<p>根据窗口与控件层级处理触屏拖拽：</p>
<p>- 窗口/控件级检测输入设备类型（鼠标/触屏）</p>
<p>- 触屏模式下显示拖动按钮（grip handle），鼠标模式下隐藏</p>
<p>- 触屏模式下只有从 grip handle 发起的按下才能触发拖动，否则事件交给 ScrollViewer 处理滑动</p>
<p>- 一旦检测到触屏输入，grip handle 将持续显示直到应用重启（不因鼠标输入而恢复隐藏）</p>
<p>用法：</p>
<p>1. 在 ItemsControl 上设置 touch:TouchAwareDragDropHelper.IsEnabled="True"</p>
<p>2. 在 ItemTemplate 中的拖动图标上设置 touch:TouchAwareDragDropHelper.IsGripHandle="True"</p>

 [UIAccessHelper](Ink\_Canvas.Helpers.UIAccessHelper.md)

通过 Winlogon 令牌模拟实现 UIAccess 提权重启。
1. 找到当前会话中 winlogon.exe 的令牌，复制为模拟令牌；
2. SetThreadToken 暂时模拟 winlogon（拥有 TCB 权限）；
3. 在自身令牌副本上 SetTokenInformation(TokenUIAccess, TRUE)；
4. RevertToSelf 后用 CreateProcessWithTokenW 启动新进程；
5. 新进程具有 UIAccess 权限，可置顶于 UAC 提示之上。

 [UploadHelper](Ink\_Canvas.Helpers.UploadHelper.md)

上传帮助类

 [DlassUploadQueue.UploadNoteResponse](Ink\_Canvas.Helpers.DlassUploadQueue.UploadNoteResponse.md)

上传笔记响应模型

 [UploadQueueHelper](Ink\_Canvas.Helpers.UploadQueueHelper.md)

上传队列帮助类，提供统一的队列管理功能

 [UploadQueueItem](Ink\_Canvas.Helpers.UploadQueueItem.md)

上传队列项

 [UploadQueueItemData](Ink\_Canvas.Helpers.UploadQueueItemData.md)

上传队列项数据（用于序列化）

 [UriSchemeHelper](Ink\_Canvas.Helpers.UriSchemeHelper.md)

 [UsbDriveInfo](Ink\_Canvas.Helpers.UsbDriveInfo.md)

 [UsbSecurityManager](Ink\_Canvas.Helpers.UsbSecurityManager.md)

 [VisualCanvas](Ink\_Canvas.Helpers.VisualCanvas.md)

 [VstoRegistrationHelper](Ink\_Canvas.Helpers.VstoRegistrationHelper.md)

VSTO PowerPoint 插件自动注册/反注册辅助类。
优先使用 .vsto 清单加载，回退到 regasm COM 注册。

 [WebDavUploadProvider](Ink\_Canvas.Helpers.WebDavUploadProvider.md)

WebDav上传提供者

 [WebDavUploadQueue](Ink\_Canvas.Helpers.WebDavUploadQueue.md)

WebDAV上传队列

 [WebDavUploader](Ink\_Canvas.Helpers.WebDavUploader.md)

WebDav上传工具类

 [WindowInfo](Ink\_Canvas.Helpers.WindowInfo.md)

窗口信息结构

 [FloatingWindowInterceptor.WindowInterceptedEventArgs](Ink\_Canvas.Helpers.FloatingWindowInterceptor.WindowInterceptedEventArgs.md)

 [WindowOverviewModel](Ink\_Canvas.Helpers.WindowOverviewModel.md)

窗口概览模型 - 实时监控桌面所有可见窗口并计算遮挡情况

 [FloatingWindowInterceptor.WindowRestoredEventArgs](Ink\_Canvas.Helpers.FloatingWindowInterceptor.WindowRestoredEventArgs.md)

 [WindowTopmostManager](Ink\_Canvas.Helpers.WindowTopmostManager.md)

窗口置顶中央管理器。
所有窗口的置顶状态由此类统一管理，子窗口不再自行调用 Win32 API 置顶。

### Structs

 [EdgeGestureUtil.PropVariant](Ink\_Canvas.Helpers.EdgeGestureUtil.PropVariant.md)

 [EdgeGestureUtil.PropertyKey](Ink\_Canvas.Helpers.EdgeGestureUtil.PropertyKey.md)

 [ROTPPTManager.RECT](Ink\_Canvas.Helpers.ROTPPTManager.RECT.md)

 [WindowRect](Ink\_Canvas.Helpers.WindowRect.md)

矩形结构体（用于窗口位置和大小）

### Interfaces

 [ICameraService](Ink\_Canvas.Helpers.ICameraService.md)

视频展台摄像头服务的抽象接口。
当前实现：<xref href="Ink_Canvas.Helpers.DirectShowCameraService" data-throw-if-not-resolved="false"></xref>（基于 DirectShowLib FilterGraph + SampleGrabber）。

 [IPPTLinkManager](Ink\_Canvas.Helpers.IPPTLinkManager.md)

 [EdgeGestureUtil.IPropertyStore](Ink\_Canvas.Helpers.EdgeGestureUtil.IPropertyStore.md)

 [IUploadProvider](Ink\_Canvas.Helpers.IUploadProvider.md)

上传提供者接口

### Enums

 [BoothCameraProperty](Ink\_Canvas.Helpers.BoothCameraProperty.md)

视频展台可调摄像头属性枚举。映射到 DirectShow IAMVideoProcAmp / IAMCameraControl 的对应 property。

 [InkSmoothingConfig.InkSmoothingQuality](Ink\_Canvas.Helpers.InkSmoothingConfig.InkSmoothingQuality.md)

 [FloatingWindowInterceptor.InterceptType](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptType.md)

拦截规则类型

 [RecognizeLanguage](Ink\_Canvas.Helpers.RecognizeLanguage.md)

 [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

墨迹形状识别后端：自动 / IACore / WinRT。

 [InkSmoothingConfig.SmoothingQuality](Ink\_Canvas.Helpers.InkSmoothingConfig.SmoothingQuality.md)

 [TimeMachineHistoryType](Ink\_Canvas.Helpers.TimeMachineHistoryType.md)

 [FullScreenHelper.WindowPositionFlags](Ink\_Canvas.Helpers.FullScreenHelper.WindowPositionFlags.md)

### Delegates

 [TimeMachine.OnRedoStateChange](Ink\_Canvas.Helpers.TimeMachine.OnRedoStateChange.md)

 [TimeMachine.OnUndoStateChange](Ink\_Canvas.Helpers.TimeMachine.OnUndoStateChange.md)

