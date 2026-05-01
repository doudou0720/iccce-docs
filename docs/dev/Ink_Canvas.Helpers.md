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

 [CameraService](Ink\_Canvas.Helpers.CameraService.md)

 [Circle](Ink\_Canvas.Helpers.Circle.md)

 [ComPPTLinkManager](Ink\_Canvas.Helpers.ComPPTLinkManager.md)

 [ConfigProfileManager](Ink\_Canvas.Helpers.ConfigProfileManager.md)

提供多配置文件保存、切换与热重载支持。
方案保存在 Configs/Profiles 目录下，当前生效的配置仍为 Configs/Settings.json。

 [DebugConsoleManager](Ink\_Canvas.Helpers.DebugConsoleManager.md)

 [DelayAction](Ink\_Canvas.Helpers.DelayAction.md)

 [DlassApiClient](Ink\_Canvas.Helpers.DlassApiClient.md)

Dlass API 客户端，用于与服务端通信

 [DlassUploadProvider](Ink\_Canvas.Helpers.DlassUploadProvider.md)

Dlass上传提供者

 [DlassUploadQueue](Ink\_Canvas.Helpers.DlassUploadQueue.md)

Dlass上传队列

 [EdgeGestureUtil](Ink\_Canvas.Helpers.EdgeGestureUtil.md)

 [ExternalCallerLauncher](Ink\_Canvas.Helpers.ExternalCallerLauncher.md)

 [FileAssociationManager](Ink\_Canvas.Helpers.FileAssociationManager.md)

文件关联管理器，用于注册和处理.icstk文件的关联

 [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md)

悬浮窗拦截器 - 检测和隐藏指定的悬浮窗

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

 [ImprovedBezierSmoothing](Ink\_Canvas.Helpers.ImprovedBezierSmoothing.md)

改进的三次贝塞尔曲线平滑算法

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

 [InkSmoothingEventArgs](Ink\_Canvas.Helpers.InkSmoothingEventArgs.md)

墨迹平滑事件参数

 [InkSmoothingManager](Ink\_Canvas.Helpers.InkSmoothingManager.md)

统一的墨迹平滑管理器，整合异步处理和硬件加速

 [InkSmoothingPerformanceMonitor](Ink\_Canvas.Helpers.InkSmoothingPerformanceMonitor.md)

性能监控器

 [FloatingWindowInterceptor.InterceptRule](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptRule.md)

拦截规则

 [IpcIACoreClient](Ink\_Canvas.Helpers.IpcIACoreClient.md)

 [LocalizationHelper](Ink\_Canvas.Helpers.LocalizationHelper.md)

i18n 本地化辅助：设置/获取当前 UI 语言，便于后续从配置切换语言。

 [PPTInkManager](Ink\_Canvas.Helpers.PPTInkManager.md)

PPT墨迹管理器 - 负责按幻灯片保存/加载墨迹、自动保存与内存管理。

 [PPTManager](Ink\_Canvas.Helpers.PPTManager.md)

PPT联动管理器 - 统一管理PPT和WPS的连接、事件处理和进程管理

 [PPTROTConnectionHelper](Ink\_Canvas.Helpers.PPTROTConnectionHelper.md)

 [PPTUIManager](Ink\_Canvas.Helpers.PPTUIManager.md)

PPT UI管理器 - 统一管理PPT相关的UI更新和样式设置

 [ROTPPTManager](Ink\_Canvas.Helpers.ROTPPTManager.md)

 [SafeZipExtractor](Ink\_Canvas.Helpers.SafeZipExtractor.md)

 [SaveFileNameContext](Ink\_Canvas.Helpers.SaveFileNameContext.md)

 [SaveFileNameHelper](Ink\_Canvas.Helpers.SaveFileNameHelper.md)

渲染保存文件名模板。支持占位符: {date} {time} {datetime} {mode} {page} {count} {type}。
当模板为空、渲染结果非法或仅含分隔符时，回退到默认时间戳命名。

 [ScreenDetectionHelper](Ink\_Canvas.Helpers.ScreenDetectionHelper.md)

屏幕检测帮助类 - 用于检测窗口所在的屏幕和屏幕信息

 [ShapeRecognitionRouter](Ink\_Canvas.Helpers.ShapeRecognitionRouter.md)

 [StartupCount](Ink\_Canvas.Helpers.StartupCount.md)

 [StrokeVisual](Ink\_Canvas.Helpers.StrokeVisual.md)

用于显示笔迹的类

 [ThemeHelper](Ink\_Canvas.Helpers.ThemeHelper.md)

 [TimeMachine](Ink\_Canvas.Helpers.TimeMachine.md)

 [TimeMachineHistory](Ink\_Canvas.Helpers.TimeMachineHistory.md)

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

 [VisualCanvas](Ink\_Canvas.Helpers.VisualCanvas.md)

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

 [WindowZOrderManager](Ink\_Canvas.Helpers.WindowZOrderManager.md)

窗口Z-Order管理器，用于管理窗口的层级顺序
在无焦点模式下，确保后打开的窗口能够置顶于先打开的窗口

### Structs

 [EdgeGestureUtil.PropVariant](Ink\_Canvas.Helpers.EdgeGestureUtil.PropVariant.md)

 [EdgeGestureUtil.PropertyKey](Ink\_Canvas.Helpers.EdgeGestureUtil.PropertyKey.md)

 [ROTPPTManager.RECT](Ink\_Canvas.Helpers.ROTPPTManager.RECT.md)

 [PPTManager.RECT](Ink\_Canvas.Helpers.PPTManager.RECT.md)

 [WindowRect](Ink\_Canvas.Helpers.WindowRect.md)

矩形结构体（用于窗口位置和大小）

### Interfaces

 [IPPTLinkManager](Ink\_Canvas.Helpers.IPPTLinkManager.md)

 [EdgeGestureUtil.IPropertyStore](Ink\_Canvas.Helpers.EdgeGestureUtil.IPropertyStore.md)

 [IUploadProvider](Ink\_Canvas.Helpers.IUploadProvider.md)

上传提供者接口

### Enums

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

