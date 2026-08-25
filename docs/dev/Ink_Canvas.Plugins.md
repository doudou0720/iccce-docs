# <a id="Ink_Canvas_Plugins"></a> Namespace Ink\_Canvas.Plugins

### Classes

 [AppRestartService](Ink\_Canvas.Plugins.AppRestartService.md)

 [CanvasKeyEventArgs](Ink\_Canvas.Plugins.CanvasKeyEventArgs.md)

与宿主内部键盘路由解耦的画布工具按键事件。

 [CanvasLineFinalizedEventArgs](Ink\_Canvas.Plugins.CanvasLineFinalizedEventArgs.md)

宿主完成全部笔迹后处理后发布的直线候选。候选令牌仅能成功消费一次。

 [CanvasPointerEventArgs](Ink\_Canvas.Plugins.CanvasPointerEventArgs.md)

与宿主内部输入类型解耦的画布指针事件。

 [CanvasViewportTransformEventArgs](Ink\_Canvas.Plugins.CanvasViewportTransformEventArgs.md)

宿主对整张普通白板内容应用的增量视口变换。

 [CompatibilityResult](Ink\_Canvas.Plugins.CompatibilityResult.md)

兼容性检查结果。

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

IPC 调用错误描述。

 [IpcMessage](Ink\_Canvas.Plugins.IpcMessage.md)

IPC 消息结构（JSON 透明传输）。宿主与插件共用。

 [MergedPluginInfo](Ink\_Canvas.Plugins.MergedPluginInfo.md)

合并后的插件信息（本地 + 市场）。

 [PluginAnnouncement](Ink\_Canvas.Plugins.PluginAnnouncement.md)

公告条目（只读描述）。

 [PluginBase](Ink\_Canvas.Plugins.PluginBase.md)

插件抽象基类。

 [PluginCameraInfo](Ink\_Canvas.Plugins.PluginCameraInfo.md)

摄像头信息。

 [PluginCompatibility](Ink\_Canvas.Plugins.PluginCompatibility.md)

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

 [PluginHotkeyInfo](Ink\_Canvas.Plugins.PluginHotkeyInfo.md)

热键信息（只读描述，不含回调）。

 [PluginInfo](Ink\_Canvas.Plugins.PluginInfo.md)

插件运行时信息。宿主加载插件时创建，记录插件元数据与加载状态。

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

 [PluginNameRoster](Ink\_Canvas.Plugins.PluginNameRoster.md)

花名册（与宿主 Settings.NameRoster 一致）。

 [PluginNotification](Ink\_Canvas.Plugins.PluginNotification.md)

通知历史条目（只读描述）。

 [PluginQuoteScheme](Ink\_Canvas.Plugins.PluginQuoteScheme.md)

名言预设方案描述。

 [PluginReadmeRenderer](Ink\_Canvas.Plugins.PluginReadmeRenderer.md)

轻量级 Markdown → FlowDocument 渲染器。专为插件说明文档设计，
不引入任何第三方依赖，支持：标题、加粗、斜体、行内代码、代码块、列表、
链接、引用、分隔线与简单表格。

 [PluginReloadResult](Ink\_Canvas.Plugins.PluginReloadResult.md)

<xref href="Ink_Canvas.Plugins.PluginManager.ReloadPlugin(System.String)" data-throw-if-not-resolved="false"></xref> 的结果。

 [PluginResolutionInfo](Ink\_Canvas.Plugins.PluginResolutionInfo.md)

摄像头分辨率（宽×高×帧率）。

 [PluginScreenInfo](Ink\_Canvas.Plugins.PluginScreenInfo.md)

显示器信息（只读）。

 [PluginSecurityCheck](Ink\_Canvas.Plugins.PluginSecurityCheck.md)

插件来源安全检查。

<p>插件安装来源分为 <xref href="Ink_Canvas.Plugins.PluginTrustLevel" data-throw-if-not-resolved="false"></xref> 三档：</p>
<ul><li><xref href="Ink_Canvas.Plugins.PluginTrustLevel.Trusted" data-throw-if-not-resolved="false"></xref>：官方插件市场索引中的条目，且 SHA256 校验通过</li><li><xref href="Ink_Canvas.Plugins.PluginTrustLevel.Known" data-throw-if-not-resolved="false"></xref>：市场索引中存在但 SHA256 未提供/未校验</li><li><xref href="Ink_Canvas.Plugins.PluginTrustLevel.Unknown" data-throw-if-not-resolved="false"></xref>：本地 .icpx、第三方镜像、或 SHA256 校验失败的安装包</li></ul>

对 <xref href="Ink_Canvas.Plugins.PluginTrustLevel.Unknown" data-throw-if-not-resolved="false"></xref> 的安装，建议弹出安全提示并由用户明确确认。

 [PluginShapeRecognitionResult](Ink\_Canvas.Plugins.PluginShapeRecognitionResult.md)

与具体识别后端无关的形状识别结果。宿主识别到形状时，
<xref href="Ink_Canvas.Plugins.PluginShapeRecognitionResult.StrokesToRemove" data-throw-if-not-resolved="false"></xref> 指明应移除的原始笔画，插件可据此用标准形状替换。

 [PluginSlideThumbnail](Ink\_Canvas.Plugins.PluginSlideThumbnail.md)

单张幻灯片的缩略图（PNG 字节）。

 [PluginToolbarItemInfo](Ink\_Canvas.Plugins.PluginToolbarItemInfo.md)

 [PluginToolbarSettingInfo](Ink\_Canvas.Plugins.PluginToolbarSettingInfo.md)

插件工具栏项的自定义设置描述。

 [PluginUpdateCheckResult](Ink\_Canvas.Plugins.PluginUpdateCheckResult.md)

更新检查结果。

 [PluginUriRequest](Ink\_Canvas.Plugins.PluginUriRequest.md)

插件 URI 请求。宿主解析 <code>icc://plugin/&lt;pluginId&gt;/&lt;path&gt;</code> 后构造，传递给注册的处理器。

 [PluginUsageStats](Ink\_Canvas.Plugins.PluginUsageStats.md)

宿主使用统计。

 [PluginWindowInfo](Ink\_Canvas.Plugins.PluginWindowInfo.md)

主程序窗口概览的插件安全视图。插件只能读取窗口元数据，不能操作目标窗口。

 [PresentationSourceDescriptor](Ink\_Canvas.Plugins.PresentationSourceDescriptor.md)

外部演示源描述。

 [SecurityVerdict](Ink\_Canvas.Plugins.SecurityVerdict.md)

评估结果，用于安装前的安全提示。

 [WhiteboardPageChangedEventArgs](Ink\_Canvas.Plugins.WhiteboardPageChangedEventArgs.md)

 [WhiteboardPageChangingEventArgs](Ink\_Canvas.Plugins.WhiteboardPageChangingEventArgs.md)

 [WhiteboardPageInfo](Ink\_Canvas.Plugins.WhiteboardPageInfo.md)

 [WhiteboardPageRemovedEventArgs](Ink\_Canvas.Plugins.WhiteboardPageRemovedEventArgs.md)

### Structs

 [PluginVisiblePage](Ink\_Canvas.Plugins.PluginVisiblePage.md)

一个可见页：页索引 + 该页在背景层内占据的矩形（背景元素坐标系，DIP）。
供 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.SetVisiblePagesAsync(System.Collections.Generic.IReadOnlyList%7bInk_Canvas.Plugins.PluginVisiblePage%7d%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref> 使用。

### Interfaces

 [IAnnouncementService](Ink\_Canvas.Plugins.IAnnouncementService.md)

公告服务：供插件读取宿主公告中心的未读数、历史与标记已读。

 [IAppInfoService](Ink\_Canvas.Plugins.IAppInfoService.md)

应用信息服务：供插件读取宿主应用的基本信息。

 [IAppRestartService](Ink\_Canvas.Plugins.IAppRestartService.md)

应用重启服务：供插件以指定权限/置顶模式重启宿主应用。

 [IBackupService](Ink\_Canvas.Plugins.IBackupService.md)

自动备份服务：供插件控制宿主的设置文件自动备份（复制 Settings.json 到备份目录）。

 [ICameraService](Ink\_Canvas.Plugins.ICameraService.md)

摄像头服务：供插件枚举摄像头、启动预览、接收帧回调与拍照。

<p>底层复用宿主视频展台的 DirectShow 采集（<code>CameraServiceFactory.Create()</code>），
与展台共用摄像头设备——插件启动预览可能抢占展台正在使用的设备。</p>
<p>帧回调在后台线程触发，返回的 <xref href="System.Windows.Media.Imaging.BitmapSource" data-throw-if-not-resolved="false"></xref> 已 Freeze。</p>

 [ICanvasAppearanceService](Ink\_Canvas.Plugins.ICanvasAppearanceService.md)

Exposes presentation-neutral canvas appearance information to plugins.

 [ICanvasCompositionService](Ink\_Canvas.Plugins.ICanvasCompositionService.md)

画布合成服务：允许插件向宿主画布下方注入全屏背景层，并把「背景 + 墨迹」按页导出。

<p>
典型用法（以 PDF 阅读器为例）：

<ol><li>调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.InjectBackgroundLayer(System.Func%7bSystem.Windows.FrameworkElement%7d)" data-throw-if-not-resolved="false"></xref> 把自己的页面视图放到 InkCanvas 下方；</li><li>调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.ConfigurePages(System.UInt32%2cSystem.UInt32%2cSystem.Func%7bSystem.UInt32%2cSystem.Threading.CancellationToken%2cSystem.Threading.Tasks.Task%7bSystem.Windows.Media.Imaging.BitmapSource%7d%7d)" data-throw-if-not-resolved="false"></xref> 告知总页数、当前页与离屏渲染回调；</li><li>自己翻页后调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.SetCurrentPageAsync(System.UInt32%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref>，宿主会自动保存/恢复每页墨迹；</li><li>需要成品时调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.ExportWithInkAsync(System.String%2cSystem.UInt32%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref>。</li></ol>
</p>

所有方法都可以从任意线程调用，宿主内部会切换到 UI 线程。

 [ICanvasElementService](Ink\_Canvas.Plugins.ICanvasElementService.md)

画布元素服务：允许插件把任意 WPF 控件作为「元素」插入主画布，
复用宿主对图片/媒体元素的完整交互（拖动、缩放、旋转、触摸、撤销历史、冻结页保护）。

<p>
典型用法（如单词卡片、可点击的教具控件）：

<ol><li>用 XAML/C# 构造一个 <xref href="System.Windows.FrameworkElement" data-throw-if-not-resolved="false"></xref> 控件（Grid/StackPanel/Border 等）；</li><li>调用 <xref href="Ink_Canvas.Plugins.ICanvasElementService.InsertElement(System.Windows.FrameworkElement)" data-throw-if-not-resolved="false"></xref> 插入画布（居中、自动尺寸、进撤销历史、切选择模式）；</li><li>用户可像拖动图片一样拖动/缩放/旋转该控件，并按 Ctrl+Z 撤销插入；</li><li>控件内部的按钮/滑块等交互子元素，在选中模式下可正常点击（宿主已做命中穿透处理）。</li></ol>
</p>
<p>
所有方法都可以从任意线程调用，宿主内部会切换到 UI 线程。
元素只存在于当前会话的画布/页面历史中，不会随 .ink/.elements.json 持久化到磁盘，
翻页后由页面历史恢复到画布，但交互/事件绑定会随会话重建。
</p>

 [ICanvasInkService](Ink\_Canvas.Plugins.ICanvasInkService.md)

画布墨迹服务：允许插件读取、插入、清除主画布墨迹，切换工具，
控制白板分页、撤销/重做与墨迹冻结。

<p>
所有方法都可以从任意线程调用，宿主内部会切换到 UI 线程。
插入/清除会写入 TimeMachine 历史（可按 Ctrl+Z 撤销），
当前页处于墨迹冻结状态时，变更类操作会被拒绝并返回 <code>false</code>。
</p>

 [ICanvasLayerService](Ink\_Canvas.Plugins.ICanvasLayerService.md)

插件画布图层服务。图层 ID 在同一插件内必须唯一；插件卸载时宿主会统一清理。

 [ICanvasLineConversionService](Ink\_Canvas.Plugins.ICanvasLineConversionService.md)

允许插件把宿主最终直线与自己的结构化状态作为一个撤销项进行原子转换。

 [ICanvasToolService](Ink\_Canvas.Plugins.ICanvasToolService.md)

 [ICanvasToolSession](Ink\_Canvas.Plugins.ICanvasToolSession.md)

插件工具的独占输入会话。释放后宿主恢复进入工具前的普通墨迹模式。

 [ICanvasViewportService](Ink\_Canvas.Plugins.ICanvasViewportService.md)

 [IClipboardService](Ink\_Canvas.Plugins.IClipboardService.md)

剪贴板服务：允许插件读取/写入系统剪贴板文本与图像，并订阅剪贴板变化事件。

<p>宿主已挂接系统剪贴板监听（AddClipboardFormatListener），
<xref href="Ink_Canvas.Plugins.IClipboardService.ClipboardUpdate" data-throw-if-not-resolved="false"></xref> 在剪贴板文本/图像变化时触发。</p>
<p>所有方法都应在 UI 线程调用（WPF Clipboard 依赖 STA 线程）。</p>

 [IConfigProfileService](Ink\_Canvas.Plugins.IConfigProfileService.md)

配置方案服务：供插件管理宿主的「配置方案」（一套 Settings.json 的快照）。
与设置窗口里的配置方案管理共用同一存储目录。

 [IEventService](Ink\_Canvas.Plugins.IEventService.md)

事件服务，供插件订阅主程序事件。

 [IFileAssociationService](Ink\_Canvas.Plugins.IFileAssociationService.md)

文件关联服务，供插件注册自定义文件类型关联。

 [IFileDialogService](Ink\_Canvas.Plugins.IFileDialogService.md)

文件对话框服务：供插件弹出标准的 Windows 打开/保存文件对话框。

<p>宿主内部切到 UI 线程展示对话框，以宿主主窗口为所有者。</p>

 [IFocusInteractionService](Ink\_Canvas.Plugins.IFocusInteractionService.md)

让插件的临时交互界面在宿主无焦点模式下仍可接收输入。
同一插件重复设置为 active 不会重复计数；关闭或卸载时必须设置为 false。

 [IHotkeyService](Ink\_Canvas.Plugins.IHotkeyService.md)

快捷键服务，供插件注册自定义全局热键。

 [IInkEffectService](Ink\_Canvas.Plugins.IInkEffectService.md)

墨迹特效服务：供插件控制宿主画布的墨迹渐变消隐动画（InkFade）。

<p>宿主画布上的墨迹按时间渐隐消失，用于演示/答题场景的自动擦除效果。</p>
<p>底层复用宿主 <code>InkFadeManager</code>；画布未初始化时调用方法可能无效，
但不会抛出异常。</p>

 [INameRosterService](Ink\_Canvas.Plugins.INameRosterService.md)

点名花名册服务：供插件管理宿主「随机点名」功能的学生花名册。
与宿主设置里的花名册管理共用同一存储（Names.txt / Replace.txt / 方案目录）。

 [INotificationService](Ink\_Canvas.Plugins.INotificationService.md)

通知服务，供插件发送应用内通知。

 [IPlugin](Ink\_Canvas.Plugins.IPlugin.md)

插件接口。每个插件须有一个实现此接口的类；建议用 <xref href="Ink_Canvas.Plugins.PluginEntranceAttribute" data-throw-if-not-resolved="false"></xref> 标记（未标记时宿主自动回退查找 <xref href="Ink_Canvas.Plugins.PluginBase" data-throw-if-not-resolved="false"></xref> 子类或任意实现）。

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

宿主 API 入口。每个插件在 Initialize 阶段获得自己的宿主代理（<code>PluginHostProxy</code>）：
日志写入该插件独立的日志目录，其余调用转发到宿主 <code>PluginManager</code>。
所有注册动作（服务、工具栏项、IPC 处理器等）必须在 Initialize 阶段完成。

 [IPluginIpcBus](Ink\_Canvas.Plugins.IPluginIpcBus.md)

IPC 总线抽象。SDK 暴露接口，实现在主项目中。

 [IPluginUriService](Ink\_Canvas.Plugins.IPluginUriService.md)

URI 服务：供插件注册深链接处理程序，或主动打开 <code>icc://</code> 深链接。

<p>
注册后，宿主会把形如 <code>icc://plugin/&lt;pluginId&gt;/&lt;path&gt;?&lt;query&gt;</code> 的深链接
派发给对应插件注册的处理器。子路径按「/」分段做最长前缀匹配（忽略大小写），
注册空字符串 <code>""</code> 表示接收该插件全部子路径。
</p>
<p>
处理器与 <xref href="Ink_Canvas.Plugins.IPluginUriService.OpenUri(System.String)" data-throw-if-not-resolved="false"></xref> 均在 UI 线程执行，可安全操作画布/窗口等宿主对象。
</p>

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

 [IQuoteService](Ink\_Canvas.Plugins.IQuoteService.md)

名言（鸡汤/一言）服务：供插件读取宿主内置的名言预设、触发白板水印名言刷新。

<p>预设来源：osu 玩家语录、励志名言、高考祝福、Phigros Tips、一言（Hitokoto API）。</p>

 [IRecognitionService](Ink\_Canvas.Plugins.IRecognitionService.md)

墨迹识别服务：包装宿主的 WinRT / IACore 双引擎识别能力，
供插件做手写转文字、图形识别/纠正与手写体美化。

<p>识别引擎可能需要系统组件（Windows 10+ 手写识别或 IACore IPC 辅助进程），
不可用时返回 <code>IsSuccess=false</code> 的结果，不会抛出异常。</p>

 [IScreenInfoService](Ink\_Canvas.Plugins.IScreenInfoService.md)

屏幕信息服务：供插件读取系统显示器信息。

 [IScreenshotService](Ink\_Canvas.Plugins.IScreenshotService.md)

截图服务：允许插件捕获全屏或指定区域的屏幕内容，返回位图或保存为文件。

<p>所有方法都应在 UI 线程调用（宿主内部不做线程切换）。</p>

 [ISettingsService](Ink\_Canvas.Plugins.ISettingsService.md)

设置服务，供插件读写主程序设置。

 [ISystemInfoService](Ink\_Canvas.Plugins.ISystemInfoService.md)

系统信息服务：供插件读取宿主设备与系统信息。

 [IThemeService](Ink\_Canvas.Plugins.IThemeService.md)

主题服务：供插件检测系统/宿主当前主题，并把主题应用到自己的控件。

 [ITrayService](Ink\_Canvas.Plugins.ITrayService.md)

系统托盘服务：允许插件控制宿主托盘图标的显隐、主窗口的显隐、
打开托盘右键菜单，以及向托盘右键菜单注入/移除自己的菜单项。

<p>
所有方法都可以从任意线程调用，宿主内部会切换到 UI 线程。
注入的菜单项会插入到宿主固定菜单区（隐藏窗口/重启/关闭等）之间，
不会破坏宿主菜单的动态状态更新。
</p>

 [IUndoService](Ink\_Canvas.Plugins.IUndoService.md)

将插件的结构化状态快照接入宿主统一撤销/重做链路。

 [IUpdateService](Ink\_Canvas.Plugins.IUpdateService.md)

更新服务：供插件检查宿主是否有新版本、读取更新日志、触发安装或取消下载。

<p>底层复用宿主 <code>AutoUpdateHelper</code>，与软件内置的检查更新共用同一套更新源与校验。</p>

 [IWhiteboardCompanionStateProvider](Ink\_Canvas.Plugins.IWhiteboardCompanionStateProvider.md)

可选契约：把某页已捕获的插件状态导出为与宿主文档并列的兼容文件。
扩展名必须是无目录部分的复合扩展名，例如 ".feature.json"。

 [IWhiteboardDocumentService](Ink\_Canvas.Plugins.IWhiteboardDocumentService.md)

 [IWhiteboardInitialHistoryProvider](Ink\_Canvas.Plugins.IWhiteboardInitialHistoryProvider.md)

可选契约：文档载入已有插件状态时，为宿主时间机器提供空白基线。

 [IWhiteboardLegacyStateImporter](Ink\_Canvas.Plugins.IWhiteboardLegacyStateImporter.md)

Optional importer for page state written by a feature before it became a plugin.
Returning null means that no compatible legacy state exists at the supplied location.

 [IWhiteboardPageStateProvider](Ink\_Canvas.Plugins.IWhiteboardPageStateProvider.md)

 [IWindowOverviewService](Ink\_Canvas.Plugins.IWindowOverviewService.md)

提供主程序窗口读取模型的只读插件接口。

 [IWindowService](Ink\_Canvas.Plugins.IWindowService.md)

窗口控制服务，供插件操控主窗口状态。

### Enums

 [CanvasLayerPlacement](Ink\_Canvas.Plugins.CanvasLayerPlacement.md)

插件画布图层相对于普通墨迹层的位置。

 [CanvasLineSource](Ink\_Canvas.Plugins.CanvasLineSource.md)

 [CanvasPointerAction](Ink\_Canvas.Plugins.CanvasPointerAction.md)

 [CanvasPointerDeviceKind](Ink\_Canvas.Plugins.CanvasPointerDeviceKind.md)

 [DependencyIssueCode](Ink\_Canvas.Plugins.DependencyIssueCode.md)

 [IssueSeverity](Ink\_Canvas.Plugins.IssueSeverity.md)

 [NotificationLevel](Ink\_Canvas.Plugins.NotificationLevel.md)

通知级别。

 [PluginInkTool](Ink\_Canvas.Plugins.PluginInkTool.md)

画布工具枚举。用于 <xref href="Ink_Canvas.Plugins.ICanvasInkService.SelectTool(Ink_Canvas.Plugins.PluginInkTool)" data-throw-if-not-resolved="false"></xref> 切换主画布工具。

 [PluginLoadStatus](Ink\_Canvas.Plugins.PluginLoadStatus.md)

插件加载状态

 [PluginRecognitionEngine](Ink\_Canvas.Plugins.PluginRecognitionEngine.md)

墨迹识别后端：自动 / IACore / WinRT。自动模式在 Windows 10 及以上默认 WinRT。

 [PluginTheme](Ink\_Canvas.Plugins.PluginTheme.md)

主题枚举。

 [PluginToolbarSettingType](Ink\_Canvas.Plugins.PluginToolbarSettingType.md)

插件工具栏设置项类型。

 [PluginToolbarSurface](Ink\_Canvas.Plugins.PluginToolbarSurface.md)

插件工具栏项信息，用于向主程序注册工具栏组件。

 [PluginTrustLevel](Ink\_Canvas.Plugins.PluginTrustLevel.md)

插件来源信任度。

 [PluginUpdateChannel](Ink\_Canvas.Plugins.PluginUpdateChannel.md)

更新通道。

 [PresentationNavigation](Ink\_Canvas.Plugins.PresentationNavigation.md)

翻页方向。

