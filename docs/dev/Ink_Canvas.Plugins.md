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

插件抽象基类。参考 ClassIsland 的 PluginBase 设计。

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

插件市场源（Source）配置管理。参考 ClassIsland ClassIsland/ClassIsland/Plugins/PluginMarketService.cs，
用户可添加多个第三方插件源（指向不同的 index.json URL），并在每个源下选择具体的镜像。

 [PluginReadmeRenderer](Ink\_Canvas.Plugins.PluginReadmeRenderer.md)

轻量级 Markdown → <xref href="System.Windows.Documents.FlowDocument" data-throw-if-not-resolved="false"></xref> 渲染器。专为插件说明文档设计，
不引入任何第三方依赖，支持：标题、加粗、斜体、行内代码、代码块、列表、
链接、引用、分隔线与简单表格。

 [PluginSecurityCheck](Ink\_Canvas.Plugins.PluginSecurityCheck.md)

插件来源安全检查。

<p>插件安装来源分为 <xref href="Ink_Canvas.Plugins.PluginTrustLevel" data-throw-if-not-resolved="false"></xref> 三档：</p>
<ul><li><xref href="Ink_Canvas.Plugins.PluginTrustLevel.Trusted" data-throw-if-not-resolved="false"></xref>：官方插件市场索引中的条目，且 SHA256 校验通过</li><li><xref href="Ink_Canvas.Plugins.PluginTrustLevel.Known" data-throw-if-not-resolved="false"></xref>：市场索引中存在但 SHA256 未提供/未校验</li><li><xref href="Ink_Canvas.Plugins.PluginTrustLevel.Unknown" data-throw-if-not-resolved="false"></xref>：本地 .icpx、第三方镜像、或 SHA256 校验失败的安装包</li></ul>

对 <xref href="Ink_Canvas.Plugins.PluginTrustLevel.Unknown" data-throw-if-not-resolved="false"></xref> 的安装，建议弹出安全提示并由用户明确确认。

 [PluginToolbarItemInfo](Ink\_Canvas.Plugins.PluginToolbarItemInfo.md)

插件工具栏项信息，用于向主程序注册工具栏组件。

 [PluginToolbarSettingInfo](Ink\_Canvas.Plugins.PluginToolbarSettingInfo.md)

插件工具栏项的自定义设置描述。

 [PluginWindowInfo](Ink\_Canvas.Plugins.PluginWindowInfo.md)

主程序窗口概览的插件安全视图。插件只能读取窗口元数据，不能操作目标窗口。

 [SecurityVerdict](Ink\_Canvas.Plugins.SecurityVerdict.md)

评估结果，用于安装前的安全提示。

### Interfaces

 [IAppRestartService](Ink\_Canvas.Plugins.IAppRestartService.md)

 [IEventService](Ink\_Canvas.Plugins.IEventService.md)

事件服务，供插件订阅主程序事件。

 [IFileAssociationService](Ink\_Canvas.Plugins.IFileAssociationService.md)

文件关联服务，供插件注册自定义文件类型关联。

 [IHotkeyService](Ink\_Canvas.Plugins.IHotkeyService.md)

快捷键服务，供插件注册自定义全局热键。

 [INotificationService](Ink\_Canvas.Plugins.INotificationService.md)

通知服务，供插件发送应用内通知。

 [IPlugin](Ink\_Canvas.Plugins.IPlugin.md)

 [IPluginHost](Ink\_Canvas.Plugins.IPluginHost.md)

 [IPluginIpcBus](Ink\_Canvas.Plugins.IPluginIpcBus.md)

IPC 总线抽象。SDK 暴露接口，实现在主项目中。

 [IPowerPointService](Ink\_Canvas.Plugins.IPowerPointService.md)

PowerPoint 控制服务，供插件操控 PPT 联动。

 [ISettingsService](Ink\_Canvas.Plugins.ISettingsService.md)

设置服务，供插件读写主程序设置。

 [IWindowOverviewService](Ink\_Canvas.Plugins.IWindowOverviewService.md)

提供主程序窗口读取模型的只读插件接口。

 [IWindowService](Ink\_Canvas.Plugins.IWindowService.md)

窗口控制服务，供插件操控主窗口状态。

### Enums

 [DependencyIssueCode](Ink\_Canvas.Plugins.DependencyIssueCode.md)

 [IssueSeverity](Ink\_Canvas.Plugins.IssueSeverity.md)

 [NotificationLevel](Ink\_Canvas.Plugins.NotificationLevel.md)

 [PluginLoadStatus](Ink\_Canvas.Plugins.PluginLoadStatus.md)

插件加载状态

 [PluginToolbarSettingType](Ink\_Canvas.Plugins.PluginToolbarSettingType.md)

 [PluginTrustLevel](Ink\_Canvas.Plugins.PluginTrustLevel.md)

插件来源信任度。

