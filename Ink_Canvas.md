# <a id="Ink_Canvas"></a> Namespace Ink\_Canvas

### Namespaces

 [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)

 [Ink\_Canvas.Converter](Ink\_Canvas.Converter.md)

 [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)

 [Ink\_Canvas.IPC](Ink\_Canvas.IPC.md)

 [Ink\_Canvas.MarkupExtensions](Ink\_Canvas.MarkupExtensions.md)

 [Ink\_Canvas.Models](Ink\_Canvas.Models.md)

 [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)

 [Ink\_Canvas.ProcessBars](Ink\_Canvas.ProcessBars.md)

 [Ink\_Canvas.Properties](Ink\_Canvas.Properties.md)

 [Ink\_Canvas.Shaders](Ink\_Canvas.Shaders.md)

 [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)

 [Ink\_Canvas.Windows](Ink\_Canvas.Windows.md)

 [Ink\_Canvas.WorkflowAutomation](Ink\_Canvas.WorkflowAutomation.md)

### Classes

 [AddCustomIconWindow](Ink\_Canvas.AddCustomIconWindow.md)

AddCustomIconWindow.xaml 的交互逻辑

 [AddPickNameBackgroundWindow](Ink\_Canvas.AddPickNameBackgroundWindow.md)

AddPickNameBackgroundWindow.xaml 的交互逻辑

 [Advanced](Ink\_Canvas.Advanced.md)

 [App](Ink\_Canvas.App.md)

Interaction logic for App.xaml

 [Appearance](Ink\_Canvas.Appearance.md)

 [Automation](Ink\_Canvas.Automation.md)

 [CameraSettings](Ink\_Canvas.CameraSettings.md)

 [Canvas](Ink\_Canvas.Canvas.md)

 [CanvasElementInfo](Ink\_Canvas.CanvasElementInfo.md)

 [ChickenSoup](Ink\_Canvas.ChickenSoup.md)

 [ClipboardNotification](Ink\_Canvas.ClipboardNotification.md)

剪贴板通知类，用于监控剪贴板变化

 [CountdownTimerWindow](Ink\_Canvas.CountdownTimerWindow.md)

Interaction logic for StopwatchWindow.xaml

 [CrashWindow](Ink\_Canvas.CrashWindow.md)

 [CustomFloatingBarIcon](Ink\_Canvas.CustomFloatingBarIcon.md)

 [CustomIconWindow](Ink\_Canvas.CustomIconWindow.md)

CustomIconWindow.xaml 的交互逻辑

 [CustomPickNameBackground](Ink\_Canvas.CustomPickNameBackground.md)

 [DlassSettings](Ink\_Canvas.DlassSettings.md)

 [FloatingWindowInterceptorManager](Ink\_Canvas.FloatingWindowInterceptorManager.md)

悬浮窗拦截管理器

 [FloatingWindowInterceptorSettings](Ink\_Canvas.FloatingWindowInterceptorSettings.md)

 [Gesture](Ink\_Canvas.Gesture.md)

 [InkToShape](Ink\_Canvas.InkToShape.md)

 [FloatingWindowInterceptorManager.InterceptStatistics](Ink\_Canvas.FloatingWindowInterceptorManager.InterceptStatistics.md)

 [LiquidGlassBarWindow](Ink\_Canvas.LiquidGlassBarWindow.md)

液态玻璃浮动栏：独立的置顶、不可激活胶囊窗口，把桌面截图经折射着色器处理后作为自身背景，
呈现一块厚玻璃压在桌面上的效果。工具按钮转发到 <xref href="Ink_Canvas.MainWindow" data-throw-if-not-resolved="false"></xref> 的既有处理器。
参考 wpf-liquid-glass-window（MIT）的三层结构：截图背景 → 折射 → 半透明内容。

 [MainWindow](Ink\_Canvas.MainWindow.md)

批注状态点提示：当用户在批注模式下反复点击同一区域时，
在非屏幕边缘区域显示「当前正处于批注状态」的半透明提示，
帮助教师意识到当前处于批注模式而非鼠标模式。
同时支持点击画布即留下可见点状墨迹。

<p>
实现策略：全部逻辑在 <xref href="Ink_Canvas.MainWindow.ProcessCommittedStroke(Stroke)" data-throw-if-not-resolved="false"></xref> 后处理中完成，
不拦截 PreviewMouse 事件，避免干扰 InkCanvas 的墨迹采集与平滑管线。
</p>

 [ManageNameRostersWindow](Ink\_Canvas.ManageNameRostersWindow.md)

ManageNameRostersWindow.xaml 的交互逻辑 — 管理随机点名的"选择方案"（学生档案）

 [ManagePickNameBackgroundsWindow](Ink\_Canvas.ManagePickNameBackgroundsWindow.md)

ManagePickNameBackgroundsWindow.xaml 的交互逻辑

 [MiniWhiteboardSettings](Ink\_Canvas.MiniWhiteboardSettings.md)

 [MiniWhiteboardWindow](Ink\_Canvas.MiniWhiteboardWindow.md)

MiniWhiteboardWindow.xaml 的交互逻辑
浮窗小白板，提供简易的书写和绘图功能，支持多页管理和PPT联动

 [ModeSettings](Ink\_Canvas.ModeSettings.md)

 [NameRoster](Ink\_Canvas.NameRoster.md)

 [NamesInputWindow](Ink\_Canvas.NamesInputWindow.md)

Interaction logic for NamesInputWindow.xaml

 [NewStyleRollCallWindow](Ink\_Canvas.NewStyleRollCallWindow.md)

新点名UI风格的窗口

 [NotificationSettings](Ink\_Canvas.NotificationSettings.md)

 [OperatingGuideWindow](Ink\_Canvas.OperatingGuideWindow.md)

Interaction logic for StopwatchWindow.xaml

 [PerformanceRunRecord](Ink\_Canvas.PerformanceRunRecord.md)

One session record in Configs/PerformanceHistory.json.
Default serialization omits zeros/nulls so normal CPU history stays compact.
Super-detailed realtime-ink fields are only populated when Debug 页开关开启.

 [PerformanceSettings](Ink\_Canvas.PerformanceSettings.md)

 [PowerPointSettings](Ink\_Canvas.PowerPointSettings.md)

 [PrivacyAgreementWindow](Ink\_Canvas.PrivacyAgreementWindow.md)

 [QuickDrawWindow](Ink\_Canvas.QuickDrawWindow.md)

快抽窗口

 [RandSettings](Ink\_Canvas.RandSettings.md)

 [RandWindow](Ink\_Canvas.RandWindow.md)

Interaction logic for RandWindow.xaml

 [RecentRollCallData](Ink\_Canvas.RecentRollCallData.md)

最近点名记录数据模型

 [RollCallHistoryData](Ink\_Canvas.RollCallHistoryData.md)

点名历史记录数据模型

 [RollCallHistoryWindow](Ink\_Canvas.RollCallHistoryWindow.md)

Interaction logic for RollCallHistoryWindow.xaml

 [RosterDisplayItem](Ink\_Canvas.RosterDisplayItem.md)

ListView 展示行：把 NameRoster 的内容与"是否当前"状态合并展示。

 [ScreenshotSelectorWindow](Ink\_Canvas.ScreenshotSelectorWindow.md)

 [Security](Ink\_Canvas.Security.md)

 [Settings](Ink\_Canvas.Settings.md)

 [Startup](Ink\_Canvas.Startup.md)

 [TimeViewModel](Ink\_Canvas.TimeViewModel.md)

时间视图模型类，用于绑定显示时间和日期

 [TipsScheme](Ink\_Canvas.TipsScheme.md)

 [UploadSettings](Ink\_Canvas.UploadSettings.md)

 [XamlGraphicsIconGeometries](Ink\_Canvas.XamlGraphicsIconGeometries.md)

图标几何路径定义类，包含各种工具图标的XAML几何路径

### Structs

 [ScreenshotResult](Ink\_Canvas.ScreenshotResult.md)

### Enums

 [App.CrashActionType](Ink\_Canvas.App.CrashActionType.md)

 [OptionalOperation](Ink\_Canvas.OptionalOperation.md)

 [PPTLinkMode](Ink\_Canvas.PPTLinkMode.md)

 [PhotoCorrectionAccelerationMode](Ink\_Canvas.PhotoCorrectionAccelerationMode.md)

照片矫正加速模式。CPU：纯 CPU 计算，兼容性最好。
OpenCL：GPU 通用加速（NVIDIA/AMD/Intel 集显均可，需驱动支持）。
CUDA：仅 NVIDIA 显卡，需 OpenCvSharp4WithCuda 包 + 本地 CUDA runtime，否则自动回退到 OpenCL。

 [StartupMode](Ink\_Canvas.StartupMode.md)

 [TelemetryUploadLevel](Ink\_Canvas.TelemetryUploadLevel.md)

遥测上传等级

 [ToolbarPosition](Ink\_Canvas.ToolbarPosition.md)

 [TrayClickAction](Ink\_Canvas.TrayClickAction.md)

 [UIAMode](Ink\_Canvas.UIAMode.md)

 [UpdateChannel](Ink\_Canvas.UpdateChannel.md)

 [UpdatePackageArchitecture](Ink\_Canvas.UpdatePackageArchitecture.md)

自动更新要下载的安装包架构。默认跟随当前软件进程架构；64 位包对应发布物 ZIP 文件名在 .zip 前增加 -x64。

