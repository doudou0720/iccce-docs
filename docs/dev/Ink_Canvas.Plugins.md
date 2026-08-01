# <a id="Ink_Canvas_Plugins"></a> Namespace Ink\_Canvas.Plugins

### Classes

 [AppRestartService](Ink\_Canvas.Plugins.AppRestartService.md)

 [CompatibilityResult](Ink\_Canvas.Plugins.CompatibilityResult.md)

兼容性检查结果。

 [DependencyAnalysis](Ink\_Canvas.Plugins.DependencyAnalysis.md)

一组 <xref href="Ink_Canvas.Plugins.DependencyIssue" data-throw-if-not-resolved="false"></xref> 的归纳报告。

 [DependencyIssue](Ink\_Canvas.Plugins.DependencyIssue.md)

 [DownloadTaskInfo](Ink\_Canvas.Plugins.DownloadTaskInfo.md)

下载任务状态。

 [HostApiRequirement](Ink\_Canvas.Plugins.HostApiRequirement.md)

宿主的 API 兼容性要求，由 PluginManager 在加载前对所有插件生效。

 [IpcError](Ink\_Canvas.Plugins.IpcError.md)

 [IpcMessage](Ink\_Canvas.Plugins.IpcMessage.md)

IPC 消息结构（JSON 透明传输）。宿主与插件共用。

 [MergedPluginInfo](Ink\_Canvas.Plugins.MergedPluginInfo.md)

合并后的插件信息（本地 + 市场）。

 [PluginBase](Ink\_Canvas.Plugins.PluginBase.md)

插件抽象基类。

 [PluginCompatibility](Ink\_Canvas.Plugins.PluginCompatibility.md)

 [PluginConfigIo](Ink\_Canvas.Plugins.PluginConfigIo.md)

插件配置导入导出器。导出的 .plugincfg 文件是一个 zip：

<ul><li>manifest.json —— 插件元数据</li><li>configs/* —— 插件配置目录下所有文件</li></ul>

 [PluginConfigPackage](Ink\_Canvas.Plugins.PluginConfigPackage.md)

一个尚未落盘的配置包。

 [PluginDependency](Ink\_Canvas.Plugins.PluginDependency.md)

插件依赖描述

 [PluginDependencyResolver](Ink\_Canvas.Plugins.PluginDependencyResolver.md)

插件依赖冲突检测器。在加载前对一组 <xref href="Ink_Canvas.Plugins.PluginInfo" data-throw-if-not-resolved="false"></xref> 做以下检查：

<ol><li>重复 id（同一目录扫描两次或市场提供重复条目）</li><li>循环依赖（LoadStatus 已被 <xref href="Ink_Canvas.Plugins.PluginManager.ResolveLoadOrder" data-throw-if-not-resolved="false"></xref> 检测，本类只做静态补充检查）</li><li>版本冲突：插件 A 要求 dep 1.0.0，插件 B 要求 dep 1.5.0 但不可同时满足</li><li>缺失的必需依赖</li><li>缺失的可选依赖（仅告警，不阻塞加载）</li></ol>

 [PluginEntranceAttribute](Ink\_Canvas.Plugins.PluginEntranceAttribute.md)

标记插件入口类。PluginManager 会优先查找带有此特性的类作为插件入口。

 [PluginErrorRecord](Ink\_Canvas.Plugins.PluginErrorRecord.md)

单个插件的错误记录。

 [PluginErrorRecoveryService](Ink\_Canvas.Plugins.PluginErrorRecoveryService.md)

插件错误恢复服务，当某插件多次加载失败或连续抛异常时。
自动将其标记为"自动禁用"并写入恢复令牌文件。用户可在插件列表上手动重置。

 [PluginErrorReport](Ink\_Canvas.Plugins.PluginErrorReport.md)

错误报告——记录 <xref href="Ink_Canvas.Plugins.PluginErrorRecoveryService.ReportFailure(System.String%2cSystem.String%2cSystem.Exception)" data-throw-if-not-resolved="false"></xref> 的处置结果。

 [PluginHandwritingResult](Ink\_Canvas.Plugins.PluginHandwritingResult.md)

一次手写识别批次的汇总结果。

 [PluginHandwritingWord](Ink\_Canvas.Plugins.PluginHandwritingWord.md)

手写识别结果中的单个分词：候选文本与包围框。

 [PluginInfo](Ink\_Canvas.Plugins.PluginInfo.md)

 [PluginIpcService](Ink\_Canvas.Plugins.PluginIpcService.md)

 [PluginLogger](Ink\_Canvas.Plugins.PluginLogger.md)

 [PluginManager](Ink\_Canvas.Plugins.PluginManager.md)

 [PluginManifest](Ink\_Canvas.Plugins.PluginManifest.md)

插件清单元数据，从 manifest.json 文件加载。

 [PluginMarketEntry](Ink\_Canvas.Plugins.PluginMarketEntry.md)

市场中的单个插件条目。

 [PluginMarketIndex](Ink\_Canvas.Plugins.PluginMarketIndex.md)

插件市场索引，对应 index.json 的顶层结构。

 [PluginMarketService](Ink\_Canvas.Plugins.PluginMarketService.md)

插件市场服务，负责索引获取、插件下载安装、本地/远程插件合并、镜像管理。

 [PluginMarketSourceInfo](Ink\_Canvas.Plugins.PluginMarketSourceInfo.md)

插件市场源信息（自定义源配置）。

 [PluginMarketSourcesService](Ink\_Canvas.Plugins.PluginMarketSourcesService.md)

插件市场源配置管理，支持添加多个第三方插件源并选择镜像。

 [PluginReadmeRenderer](Ink\_Canvas.Plugins.PluginReadmeRenderer.md)

轻量级 Markdown → <xref href="System.Windows.Documents.FlowDocument" data-throw-if-not-resolved="false"></xref> 渲染器。专为插件说明文档设计，
不引入任何第三方依赖，支持：标题、加粗、斜体、行内代码、代码块、列表、
链接、引用、分隔线与简单表格。

 [PluginSecurityCheck](Ink\_Canvas.Plugins.PluginSecurityCheck.md)

插件来源安全检查。

<p>插件安装来源分为 <xref href="Ink_Canvas.Plugins.PluginTrustLevel" data-throw-if-not-resolved="false"></xref> 三档：</p>
<ul><li><xref href="Ink_Canvas.Plugins.PluginTrustLevel.Trusted" data-throw-if-not-resolved="false"></xref>：官方插件市场索引中的条目，且 SHA256 校验通过</li><li><xref href="Ink_Canvas.Plugins.PluginTrustLevel.Known" data-throw-if-not-resolved="false"></xref>：市场索引中存在但 SHA256 未提供/未校验</li><li><xref href="Ink_Canvas.Plugins.PluginTrustLevel.Unknown" data-throw-if-not-resolved="false"></xref>：本地 .icpx、第三方镜像、或 SHA256 校验失败的安装包</li></ul>

对 <xref href="Ink_Canvas.Plugins.PluginTrustLevel.Unknown" data-throw-if-not-resolved="false"></xref> 的安装，建议弹出安全提示并由用户明确确认。

 [PluginShapeRecognitionResult](Ink\_Canvas.Plugins.PluginShapeRecognitionResult.md)

与具体识别后端无关的形状识别结果。宿主识别到形状时，
<xref href="Ink_Canvas.Plugins.PluginShapeRecognitionResult.StrokesToRemove" data-throw-if-not-resolved="false"></xref> 指明应移除的原始笔画，插件可据此用标准形状替换。

 [PluginToolbarItemInfo](Ink\_Canvas.Plugins.PluginToolbarItemInfo.md)

插件工具栏项信息，用于向主程序注册工具栏组件。

 [PluginToolbarSettingInfo](Ink\_Canvas.Plugins.PluginToolbarSettingInfo.md)

插件工具栏项的自定义设置描述。

 [PluginWindowInfo](Ink\_Canvas.Plugins.PluginWindowInfo.md)

主程序窗口概览的插件安全视图。插件只能读取窗口元数据，不能操作目标窗口。

 [PresentationSourceDescriptor](Ink\_Canvas.Plugins.PresentationSourceDescriptor.md)

外部演示源描述。

 [SecurityVerdict](Ink\_Canvas.Plugins.SecurityVerdict.md)

评估结果，用于安装前的安全提示。

### Structs

 [PluginVisiblePage](Ink\_Canvas.Plugins.PluginVisiblePage.md)

一个可见页：页索引 + 该页在背景层内占据的矩形（背景元素坐标系，DIP）。
供 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.SetVisiblePagesAsync(System.Collections.Generic.IReadOnlyList%7bInk_Canvas.Plugins.PluginVisiblePage%7d%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref> 使用。

### Interfaces

 [IAppRestartService](Ink\_Canvas.Plugins.IAppRestartService.md)

 [ICanvasCompositionService](Ink\_Canvas.Plugins.ICanvasCompositionService.md)

画布合成服务：允许插件向宿主画布下方注入全屏背景层，并把「背景 + 墨迹」按页导出。

<p>
典型用法（以 PDF 阅读器为例）：

<ol><li>调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.InjectBackgroundLayer(System.Func%7bSystem.Windows.FrameworkElement%7d)" data-throw-if-not-resolved="false"></xref> 把自己的页面视图放到 InkCanvas 下方；</li><li>调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.ConfigurePages(System.UInt32%2cSystem.UInt32%2cSystem.Func%7bSystem.UInt32%2cSystem.Threading.CancellationToken%2cSystem.Threading.Tasks.Task%7bSystem.Windows.Media.Imaging.BitmapSource%7d%7d)" data-throw-if-not-resolved="false"></xref> 告知总页数、当前页与离屏渲染回调；</li><li>自己翻页后调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.SetCurrentPageAsync(System.UInt32%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref>，宿主会自动保存/恢复每页墨迹；</li><li>需要成品时调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.ExportWithInkAsync(System.String%2cSystem.UInt32%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref>。</li></ol>
</p>

所有方法都可以从任意线程调用，宿主内部会切换到 UI 线程。

 [ICanvasInkService](Ink\_Canvas.Plugins.ICanvasInkService.md)

画布墨迹服务：允许插件读取、插入、清除主画布墨迹，切换工具，
控制白板分页、撤销/重做与墨迹冻结。

<p>
所有方法都可以从任意线程调用，宿主内部会切换到 UI 线程。
插入/清除会写入 TimeMachine 历史（可按 Ctrl+Z 撤销），
当前页处于墨迹冻结状态时，变更类操作会被拒绝并返回 <code>false</code>。
</p>

 [IEventService](Ink\_Canvas.Plugins.IEventService.md)

事件服务，供插件订阅主程序事件。

 [IFileAssociationService](Ink\_Canvas.Plugins.IFileAssociationService.md)

文件关联服务，供插件注册自定义文件类型关联。

 [IHotkeyService](Ink\_Canvas.Plugins.IHotkeyService.md)

快捷键服务，供插件注册自定义全局热键。

 [INotificationService](Ink\_Canvas.Plugins.INotificationService.md)

通知服务，供插件发送应用内通知。

 [IPlugin](Ink\_Canvas.Plugins.IPlugin.md)

 [IPluginCanvasGestureHandler](Ink\_Canvas.Plugins.IPluginCanvasGestureHandler.md)

画布双指手势处理器：宿主把 InkCanvas 上的操作（Manipulation）事件转发给插件，
用于实现插件背景层的双指缩放/平移，并让墨迹与背景同步。

<p>
宿主在以下时机回调（均发生在 UI 线程）：

<ol><li><xref href="Ink_Canvas.Plugins.IPluginCanvasGestureHandler.OnCanvasGestureStarting(System.Windows.Input.ManipulationStartingEventArgs)" data-throw-if-not-resolved="false"></xref> — 操作即将开始，返回 <code>true</code> 表示插件接管，
    此时插件应在 <xref href="System.Windows.Input.ManipulationStartingEventArgs.Mode" data-throw-if-not-resolved="false"></xref> 里声明需要的手势类型
    （如 <xref href="System.Windows.Input.ManipulationModes.Scale" data-throw-if-not-resolved="false"></xref> | <xref href="System.Windows.Input.ManipulationModes.Translate" data-throw-if-not-resolved="false"></xref>）；</li><li><xref href="Ink_Canvas.Plugins.IPluginCanvasGestureHandler.OnCanvasGestureDelta(System.Windows.Input.ManipulationDeltaEventArgs)" data-throw-if-not-resolved="false"></xref> — 操作增量，返回 <code>true</code> 表示插件已处理，
    宿主将跳过默认的墨迹/画布变换；</li><li><xref href="Ink_Canvas.Plugins.IPluginCanvasGestureHandler.OnCanvasGestureCompleted(System.Windows.Input.ManipulationCompletedEventArgs)" data-throw-if-not-resolved="false"></xref> — 操作结束，宿主的编辑模式恢复由宿主照常处理。</li></ol>

不参与手势时应返回 <code>false</code>，让宿主走默认行为（书写/选择/橡皮擦等）。
</p>

 [IPluginHost](Ink\_Canvas.Plugins.IPluginHost.md)

 [IPluginIpcBus](Ink\_Canvas.Plugins.IPluginIpcBus.md)

IPC 总线抽象。SDK 暴露接口，实现在主项目中。

 [IPowerPointService](Ink\_Canvas.Plugins.IPowerPointService.md)

PowerPoint 控制服务，供插件操控 PPT 联动。

 [IPresentationSourceService](Ink\_Canvas.Plugins.IPresentationSourceService.md)

外部演示源服务：让插件把自己声明为一个「可翻页的演示文档」，
复用宿主 PPT 放映模式的整套 UI（四个翻页条、工具栏放映布局、全屏处理）。

<p>
与 <xref href="Ink_Canvas.Plugins.IPowerPointService" data-throw-if-not-resolved="false"></xref> 的区别：后者是遥控真实 PowerPoint，
本服务是把插件自己的文档接进放映模式，翻页请求会回调到插件。
</p>
<p>
典型用法（以 PDF 阅读器为例）：

<ol><li>打开文档并注入背景层后调用 <xref href="Ink_Canvas.Plugins.IPresentationSourceService.BeginAsync(Ink_Canvas.Plugins.PresentationSourceDescriptor%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref>，宿主进入放映模式并显示翻页条；</li><li>宿主翻页条被点击时回调 <xref href="Ink_Canvas.Plugins.PresentationSourceDescriptor.NavigateAsync" data-throw-if-not-resolved="false"></xref>；</li><li>插件自己翻页（滚轮、弹窗按钮）后调用 <xref href="Ink_Canvas.Plugins.IPresentationSourceService.UpdatePageAsync(System.Int32%2cSystem.Int32%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref> 同步页码；</li><li>关闭文档时调用 <xref href="Ink_Canvas.Plugins.IPresentationSourceService.EndAsync(System.String%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref> 退出放映模式。</li></ol>
</p>

所有方法都可以从任意线程调用，宿主内部会切换到 UI 线程。

 [IRecognitionService](Ink\_Canvas.Plugins.IRecognitionService.md)

墨迹识别服务：包装宿主的 WinRT / IACore 双引擎识别能力，
供插件做手写转文字、图形识别/纠正与手写体美化。

<p>识别引擎可能需要系统组件（Windows 10+ 手写识别或 IACore IPC 辅助进程），
不可用时返回 <code>IsSuccess=false</code> 的结果，不会抛出异常。</p>

 [ISettingsService](Ink\_Canvas.Plugins.ISettingsService.md)

设置服务，供插件读写主程序设置。

 [ITrayService](Ink\_Canvas.Plugins.ITrayService.md)

系统托盘服务：允许插件控制宿主托盘图标的显隐、主窗口的显隐、
打开托盘右键菜单，以及向托盘右键菜单注入/移除自己的菜单项。

<p>
所有方法都可以从任意线程调用，宿主内部会切换到 UI 线程。
注入的菜单项会插入到宿主固定菜单区（隐藏窗口/重启/关闭等）之间，
不会破坏宿主菜单的动态状态更新。
</p>

 [IWindowOverviewService](Ink\_Canvas.Plugins.IWindowOverviewService.md)

提供主程序窗口读取模型的只读插件接口。

 [IWindowService](Ink\_Canvas.Plugins.IWindowService.md)

窗口控制服务，供插件操控主窗口状态。

### Enums

 [DependencyIssueCode](Ink\_Canvas.Plugins.DependencyIssueCode.md)

 [IssueSeverity](Ink\_Canvas.Plugins.IssueSeverity.md)

 [NotificationLevel](Ink\_Canvas.Plugins.NotificationLevel.md)

 [PluginInkTool](Ink\_Canvas.Plugins.PluginInkTool.md)

画布工具枚举。用于 <xref href="Ink_Canvas.Plugins.ICanvasInkService.SelectTool(Ink_Canvas.Plugins.PluginInkTool)" data-throw-if-not-resolved="false"></xref> 切换主画布工具。

 [PluginLoadStatus](Ink\_Canvas.Plugins.PluginLoadStatus.md)

插件加载状态

 [PluginRecognitionEngine](Ink\_Canvas.Plugins.PluginRecognitionEngine.md)

墨迹识别后端：自动 / IACore / WinRT。自动模式在 Windows 10 及以上默认 WinRT。

 [PluginToolbarSettingType](Ink\_Canvas.Plugins.PluginToolbarSettingType.md)

 [PluginTrustLevel](Ink\_Canvas.Plugins.PluginTrustLevel.md)

插件来源信任度。

 [PresentationNavigation](Ink\_Canvas.Plugins.PresentationNavigation.md)

翻页方向。

