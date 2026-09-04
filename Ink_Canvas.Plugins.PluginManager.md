# <a id="Ink_Canvas_Plugins_PluginManager"></a> Class PluginManager

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class PluginManager : IPluginHost
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginManager](Ink\_Canvas.Plugins.PluginManager.md)

#### Implements

IPluginHost

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_Plugins_PluginManager_ManifestFileName"></a> ManifestFileName

```csharp
public static readonly string ManifestFileName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManager_PluginPackageExtension"></a> PluginPackageExtension

```csharp
public static readonly string PluginPackageExtension
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Ink_Canvas_Plugins_PluginManager_ConfigIo"></a> ConfigIo

暴露给 UI 的配置导入导出器。

```csharp
public PluginConfigIo ConfigIo { get; }
```

#### Property Value

 [PluginConfigIo](Ink\_Canvas.Plugins.PluginConfigIo.md)

### <a id="Ink_Canvas_Plugins_PluginManager_CurrentLoadingPluginId"></a> CurrentLoadingPluginId

当前正在 Initialize 的插件。供宿主服务（如 Ink_Canvas.Plugins.Services.NotificationService）
在插件调用时识别来源，确保热重载时能按插件 ID 辨认通知回调归属。
不暴露 IPlugin 字段以免插件引用影响到 GC 回收。

```csharp
public string CurrentLoadingPluginId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManager_DisabledPlugins"></a> DisabledPlugins

已禁用的插件 ID 列表。

```csharp
public IReadOnlyCollection<string> DisabledPlugins { get; }
```

#### Property Value

 [IReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_PluginManager_Instance"></a> Instance

```csharp
public static PluginManager Instance { get; }
```

#### Property Value

 [PluginManager](Ink\_Canvas.Plugins.PluginManager.md)

### <a id="Ink_Canvas_Plugins_PluginManager_Ipc"></a> Ipc

当前 IPC 服务实例。

```csharp
public IPluginIpcBus Ipc { get; }
```

#### Property Value

 IPluginIpcBus

### <a id="Ink_Canvas_Plugins_PluginManager_IpcService"></a> IpcService

获取宿主 IPC 实例。仅在 <xref href="Ink_Canvas.Plugins.PluginManager.StartIpc" data-throw-if-not-resolved="false"></xref> 之后可用。

```csharp
public IPluginIpcBus IpcService { get; }
```

#### Property Value

 IPluginIpcBus

### <a id="Ink_Canvas_Plugins_PluginManager_Plugins"></a> Plugins

```csharp
public IReadOnlyList<PluginInfo> Plugins { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<PluginInfo\>

### <a id="Ink_Canvas_Plugins_PluginManager_ServiceProvider"></a> ServiceProvider

依赖注入服务提供者。在所有插件 Initialize 完成后可用。

```csharp
public IServiceProvider ServiceProvider { get; }
```

#### Property Value

 [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

### <a id="Ink_Canvas_Plugins_PluginManager_Services"></a> Services

```csharp
public IServiceCollection Services { get; }
```

#### Property Value

 IServiceCollection

## Methods

### <a id="Ink_Canvas_Plugins_PluginManager_AnalyzeDependencies"></a> AnalyzeDependencies\(\)

暴露给 UI/插件的依赖分析入口。

```csharp
public DependencyAnalysis AnalyzeDependencies()
```

#### Returns

 [DependencyAnalysis](Ink\_Canvas.Plugins.DependencyAnalysis.md)

### <a id="Ink_Canvas_Plugins_PluginManager_DisablePlugin_System_String_"></a> DisablePlugin\(string\)

禁用插件（下次启动生效）。

```csharp
public void DisablePlugin(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManager_EnablePlugin_System_String_"></a> EnablePlugin\(string\)

启用已禁用的插件（下次启动生效）。

```csharp
public void EnablePlugin(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManager_EvaluateTrust_System_String_System_String_System_String_"></a> EvaluateTrust\(string, string, string\)

调用 <xref href="Ink_Canvas.Plugins.PluginSecurityCheck" data-throw-if-not-resolved="false"></xref> 评估即将安装的插件包。

```csharp
public SecurityVerdict EvaluateTrust(string packagePath, string expectedSha256, string declaredPluginId)
```

#### Parameters

`packagePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`expectedSha256` [string](https://learn.microsoft.com/dotnet/api/system.string)

`declaredPluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 SecurityVerdict

### <a id="Ink_Canvas_Plugins_PluginManager_GetLogger_System_String_"></a> GetLogger\(string\)

按 pluginId 获取独立的 <xref href="Ink_Canvas.Plugins.PluginLogger" data-throw-if-not-resolved="false"></xref>。

```csharp
public PluginLogger GetLogger(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [PluginLogger](Ink\_Canvas.Plugins.PluginLogger.md)

### <a id="Ink_Canvas_Plugins_PluginManager_GetPendingPackagePluginIds"></a> GetPendingPackagePluginIds\(\)

返回 PluginPackages 目录中仍待安装的插件 ID（按 .icpx 文件名）。

```csharp
public HashSet<string> GetPendingPackagePluginIds()
```

#### Returns

 [HashSet](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_PluginManager_GetPluginError_System_String_"></a> GetPluginError\(string\)

获取插件错误记录（用于 UI 展示错误详情）。

```csharp
public PluginErrorRecord GetPluginError(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [PluginErrorRecord](Ink\_Canvas.Plugins.PluginErrorRecord.md)

### <a id="Ink_Canvas_Plugins_PluginManager_GetPluginLogPath_System_String_"></a> GetPluginLogPath\(string\)

获取插件日志文件路径。

```csharp
public string GetPluginLogPath(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManager_GetService__1"></a> GetService<T\>\(\)

从 DI 容器获取服务（兼容旧接口）。优先从 DI 容器解析，其次回退到旧注册字典。

```csharp
public T GetService<T>() where T : class
```

#### Returns

 T

已注册的服务实例；未注册时返回 null。

#### Type Parameters

`T` 

服务类型。

### <a id="Ink_Canvas_Plugins_PluginManager_InitializeAdvancedServices_Ink_Canvas_Plugins_PluginMarketService_"></a> InitializeAdvancedServices\(PluginMarketService\)

待外部在市场服务初始化后注入。

```csharp
public void InitializeAdvancedServices(PluginMarketService market)
```

#### Parameters

`market` [PluginMarketService](Ink\_Canvas.Plugins.PluginMarketService.md)

### <a id="Ink_Canvas_Plugins_PluginManager_InstallPendingPackages_System_String_System_String_"></a> InstallPendingPackages\(string, string\)

安装 PluginPackages 中待安装的插件包并立即加载。可在运行时调用。
已加载插件若有待安装包，会先卸载再覆盖安装，实现热更新。

```csharp
public IReadOnlyList<string> InstallPendingPackages(string approvedPackagePath = null, string approvedPackageSha256 = null)
```

#### Parameters

`approvedPackagePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`approvedPackageSha256` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

本次成功安装（解压）的插件 ID 列表。

### <a id="Ink_Canvas_Plugins_PluginManager_IsPluginDisabled_System_String_"></a> IsPluginDisabled\(string\)

检查插件是否被禁用。

```csharp
public bool IsPluginDisabled(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginManager_LoadAllAsync"></a> LoadAllAsync\(\)

```csharp
public Task LoadAllAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Plugins_PluginManager_LoadPlugin_System_String_"></a> LoadPlugin\(string\)

加载指定插件。插件必须已经被发现且当前未处于 Loaded 状态。

```csharp
public bool LoadPlugin(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginManager_Log_System_String_"></a> Log\(string\)

写入普通日志。仅写入当前插件独立的日志文件（<code>PluginLogs/&lt;plugin-id&gt;/</code>），
不落入宿主日志与主程序日志。

```csharp
public void Log(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

日志消息。

### <a id="Ink_Canvas_Plugins_PluginManager_LogError_System_String_System_Exception_"></a> LogError\(string, Exception\)

写入错误日志，可附带异常。仅写入当前插件独立的日志文件，
不落入宿主日志与主程序日志。

```csharp
public void LogError(string message, Exception ex = null)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

错误描述。

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

关联异常；可为 null。

### <a id="Ink_Canvas_Plugins_PluginManager_LogPlugin_System_String_System_String_System_String_"></a> LogPlugin\(string, string, string\)

写入插件独立日志。

```csharp
public void LogPlugin(string pluginId, string level, string message)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`level` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManager_OnLogMessage_System_String_"></a> OnLogMessage\(string\)

```csharp
protected virtual void OnLogMessage(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManager_OnPluginLoaded_Ink_Canvas_Plugins_PluginInfo_"></a> OnPluginLoaded\(PluginInfo\)

```csharp
protected virtual void OnPluginLoaded(PluginInfo pluginInfo)
```

#### Parameters

`pluginInfo` PluginInfo

### <a id="Ink_Canvas_Plugins_PluginManager_OnPluginUnloaded_Ink_Canvas_Plugins_PluginInfo_"></a> OnPluginUnloaded\(PluginInfo\)

```csharp
protected virtual void OnPluginUnloaded(PluginInfo pluginInfo)
```

#### Parameters

`pluginInfo` PluginInfo

### <a id="Ink_Canvas_Plugins_PluginManager_OpenUri_System_String_"></a> OpenUri\(string\)

主动打开一个 <code>icc://</code> 深链接。非 UI 线程时切到 UI 线程执行；
复用 <xref href="Ink_Canvas.MainWindow.HandleUriCommand(System.String)" data-throw-if-not-resolved="false"></xref> 的路由与「启用 URI 协议」守卫。

```csharp
public bool OpenUri(string uri)
```

#### Parameters

`uri` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginManager_PurgeUnloadedPlugin_Ink_Canvas_Plugins_PluginInfo_"></a> PurgeUnloadedPlugin\(PluginInfo\)

删除一个未加载插件的全部磁盘残留：插件目录、配置目录、日志目录、
错误恢复记录与禁用标记。已加载的插件请走 <xref href="Ink_Canvas.Plugins.PluginManager.UnloadPlugin(Ink_Canvas.Plugins.PluginInfo%2cSystem.Boolean%2cSystem.Boolean)" data-throw-if-not-resolved="false"></xref>
并传 <code>deleteFolder: true</code>。

```csharp
public void PurgeUnloadedPlugin(PluginInfo plugin)
```

#### Parameters

`plugin` PluginInfo

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterBoardToolbarItem_Ink_Canvas_Plugins_PluginToolbarItemInfo_"></a> RegisterBoardToolbarItem\(PluginToolbarItemInfo\)

旧版接口：固定向白板工具栏注册插件组件（无论 <xref href="Ink_Canvas.Plugins.PluginToolbarItemInfo.Surface" data-throw-if-not-resolved="false"></xref> 取值）。
与 <xref href="Ink_Canvas.Plugins.PluginManager.RegisterToolbarItem(Ink_Canvas.Plugins.PluginToolbarItemInfo)" data-throw-if-not-resolved="false"></xref> 共用同一实现，同样按插件登记，
卸载/初始化失败回滚时会由 <xref href="Ink_Canvas.Plugins.PluginManager.UnregisterToolbarItems(System.String)" data-throw-if-not-resolved="false"></xref> 统一撤销。
新插件请改用 <xref href="Ink_Canvas.Plugins.PluginManager.RegisterToolbarItem(Ink_Canvas.Plugins.PluginToolbarItemInfo)" data-throw-if-not-resolved="false"></xref> 并设置 Surface = Whiteboard。

```csharp
public void RegisterBoardToolbarItem(PluginToolbarItemInfo itemInfo)
```

#### Parameters

`itemInfo` PluginToolbarItemInfo

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterIpcHandler_System_String_System_Func_System_Nullable_System_Text_Json_JsonElement__System_Object__"></a> RegisterIpcHandler\(string, Func<JsonElement?, object\>\)

注册 IPC 处理函数。

```csharp
public void RegisterIpcHandler(string method, Func<JsonElement?, object> handler)
```

#### Parameters

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

`handler` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?, [object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterService__1___0_"></a> RegisterService<T\>\(T\)

向 DI 容器注册服务（兼容旧接口，仅在 Initialize 阶段有效）。

```csharp
public void RegisterService<T>(T service) where T : class
```

#### Parameters

`service` T

要注册的服务实例。

#### Type Parameters

`T` 

服务类型。

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterService_System_Type_System_Object_"></a> RegisterService\(Type, object\)

非泛型注册服务，支持 Type 参数批量注册。

```csharp
public void RegisterService(Type serviceType, object service)
```

#### Parameters

`serviceType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`service` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterToolbarItem_Ink_Canvas_Plugins_PluginToolbarItemInfo_"></a> RegisterToolbarItem\(PluginToolbarItemInfo\)

向工具栏注册插件组件。目标工具栏由 <xref href="Ink_Canvas.Plugins.PluginToolbarItemInfo.Surface" data-throw-if-not-resolved="false"></xref> 决定：
Whiteboard 注册到白板工具栏，其余注册到浮动工具栏。

```csharp
public void RegisterToolbarItem(PluginToolbarItemInfo itemInfo)
```

#### Parameters

`itemInfo` PluginToolbarItemInfo

要注册的工具栏组件信息。

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterUriHandler_System_String_System_Func_Ink_Canvas_Plugins_PluginUriRequest_System_Boolean__"></a> RegisterUriHandler\(string, Func<PluginUriRequest, bool\>\)

注册 URI 处理程序。须在插件 Initialize 阶段调用，通过 <xref href="Ink_Canvas.Plugins.PluginManager._currentLoadingPlugin" data-throw-if-not-resolved="false"></xref> 识别调用方插件。

```csharp
public void RegisterUriHandler(string subPath, Func<PluginUriRequest, bool> handler)
```

#### Parameters

`subPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`handler` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<PluginUriRequest, [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Plugins_PluginManager_ReloadPlugin_System_String_"></a> ReloadPlugin\(string\)

热重载单个插件：卸载 → 校验 ALC 已释放 → 从磁盘重新发现并加载。
用于插件开发时直接覆盖 DLL 后免重启生效，也用于市场更新的热更新路径。

```csharp
public PluginReloadResult ReloadPlugin(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [PluginReloadResult](Ink\_Canvas.Plugins.PluginReloadResult.md)

重载结果，<xref href="Ink_Canvas.Plugins.PluginReloadResult.Success" data-throw-if-not-resolved="false"></xref> 为 false 时调用方应提示重启。

### <a id="Ink_Canvas_Plugins_PluginManager_ResetPluginFailure_System_String_"></a> ResetPluginFailure\(string\)

显式重置插件的错误记录并清除禁用状态，然后尝试热加载。

```csharp
public bool ResetPluginFailure(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginManager_StartIpc"></a> StartIpc\(\)

启动 IPC 总线。可由 MainWindow 在适当时机调用一次。

```csharp
public void StartIpc()
```

### <a id="Ink_Canvas_Plugins_PluginManager_TryDispatchUri_System_String_System_String_System_String_"></a> TryDispatchUri\(string, string, string\)

派发插件 URI（由 MainWindow 的路由器调用，UI 线程）。
子路径按「/」分段做最长前缀匹配（忽略大小写）；插件未注册/处理器返回 false/处理器异常均返回 false。

```csharp
public bool TryDispatchUri(string pluginId, string subPath, string rawUri)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`subPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`rawUri` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginManager_UnloadAll"></a> UnloadAll\(\)

```csharp
public void UnloadAll()
```

### <a id="Ink_Canvas_Plugins_PluginManager_UnloadPlugin_Ink_Canvas_Plugins_PluginInfo_System_Boolean_System_Boolean_"></a> UnloadPlugin\(PluginInfo, bool, bool\)

卸载插件：撤销所有宿主注册、释放 AssemblyLoadContext，并按需删除插件目录。

```csharp
public void UnloadPlugin(PluginInfo plugin, bool deleteFolder = false, bool keepInList = false)
```

#### Parameters

`plugin` PluginInfo

要卸载的插件。

`deleteFolder` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true = 真正卸载，连同插件目录一并删除（用户点"删除"）；
false = 仅卸载实例并释放目录锁，保留文件（热重载 / 覆盖安装）。

`keepInList` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true = 保留插件信息以便稍后从页面再次加载；false = 从已安装列表移除（重载/删除流程）。

### <a id="Ink_Canvas_Plugins_PluginManager_WaitForUnload_System_String_System_Int32_"></a> WaitForUnload\(string, int\)

等待指定插件的 ALC 被 GC 真正回收，返回是否卸载成功。

<p>
<xref href="System.Runtime.Loader.AssemblyLoadContext.Unload" data-throw-if-not-resolved="false"></xref> 只是发起卸载请求，实际释放要等 GC 确认
无人引用。这里做有限次 GC 后检查弱引用；仍存活说明宿主某处还留着插件对象，
属于注册撤销不完整，调用方据此决定是否回退到重启。
</p>

```csharp
public bool WaitForUnload(string pluginId, int maxAttempts = 10)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`maxAttempts` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginManager_LogMessage"></a> LogMessage

```csharp
public event EventHandler<string> LogMessage
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_PluginManager_PluginLoaded"></a> PluginLoaded

```csharp
public event EventHandler<PluginInfo> PluginLoaded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<PluginInfo\>

### <a id="Ink_Canvas_Plugins_PluginManager_PluginUnloaded"></a> PluginUnloaded

```csharp
public event EventHandler<PluginInfo> PluginUnloaded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<PluginInfo\>

