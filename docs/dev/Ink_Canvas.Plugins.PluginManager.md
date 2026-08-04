# <a id="Ink_Canvas_Plugins_PluginManager"></a> Class PluginManager

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class PluginManager : IPluginHost
```

#### Inheritance

object ← 
[PluginManager](Ink\_Canvas.Plugins.PluginManager.md)

#### Implements

IPluginHost

## Fields

### <a id="Ink_Canvas_Plugins_PluginManager_ManifestFileName"></a> ManifestFileName

```csharp
public static readonly string ManifestFileName
```

#### Field Value

 string

### <a id="Ink_Canvas_Plugins_PluginManager_PluginPackageExtension"></a> PluginPackageExtension

```csharp
public static readonly string PluginPackageExtension
```

#### Field Value

 string

## Properties

### <a id="Ink_Canvas_Plugins_PluginManager_ConfigIo"></a> ConfigIo

暴露给 UI 的配置导入导出器。

```csharp
public PluginConfigIo ConfigIo { get; }
```

#### Property Value

 [PluginConfigIo](Ink\_Canvas.Plugins.PluginConfigIo.md)

### <a id="Ink_Canvas_Plugins_PluginManager_DisabledPlugins"></a> DisabledPlugins

已禁用的插件 ID 列表。

```csharp
public IReadOnlyCollection<string> DisabledPlugins { get; }
```

#### Property Value

 IReadOnlyCollection<string\>

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

 IReadOnlyList<PluginInfo\>

### <a id="Ink_Canvas_Plugins_PluginManager_ServiceProvider"></a> ServiceProvider

```csharp
public IServiceProvider ServiceProvider { get; }
```

#### Property Value

 IServiceProvider

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

`pluginId` string

### <a id="Ink_Canvas_Plugins_PluginManager_EnablePlugin_System_String_"></a> EnablePlugin\(string\)

启用已禁用的插件（下次启动生效）。

```csharp
public void EnablePlugin(string pluginId)
```

#### Parameters

`pluginId` string

### <a id="Ink_Canvas_Plugins_PluginManager_EvaluateTrust_System_String_System_String_System_String_"></a> EvaluateTrust\(string, string, string\)

调用 <xref href="Ink_Canvas.Plugins.PluginSecurityCheck" data-throw-if-not-resolved="false"></xref> 评估即将安装的插件包。

```csharp
public SecurityVerdict EvaluateTrust(string packagePath, string expectedSha256, string declaredPluginId)
```

#### Parameters

`packagePath` string

`expectedSha256` string

`declaredPluginId` string

#### Returns

 SecurityVerdict

### <a id="Ink_Canvas_Plugins_PluginManager_GetLogger_System_String_"></a> GetLogger\(string\)

按 pluginId 获取独立的 <xref href="Ink_Canvas.Plugins.PluginLogger" data-throw-if-not-resolved="false"></xref>。

```csharp
public PluginLogger GetLogger(string pluginId)
```

#### Parameters

`pluginId` string

#### Returns

 [PluginLogger](Ink\_Canvas.Plugins.PluginLogger.md)

### <a id="Ink_Canvas_Plugins_PluginManager_GetPendingPackagePluginIds"></a> GetPendingPackagePluginIds\(\)

返回 PluginPackages 目录中仍待安装的插件 ID（按 .icpx 文件名）。

```csharp
public HashSet<string> GetPendingPackagePluginIds()
```

#### Returns

 HashSet<string\>

### <a id="Ink_Canvas_Plugins_PluginManager_GetPluginError_System_String_"></a> GetPluginError\(string\)

获取插件错误记录（用于 UI 展示错误详情）。

```csharp
public PluginErrorRecord GetPluginError(string pluginId)
```

#### Parameters

`pluginId` string

#### Returns

 [PluginErrorRecord](Ink\_Canvas.Plugins.PluginErrorRecord.md)

### <a id="Ink_Canvas_Plugins_PluginManager_GetPluginLogPath_System_String_"></a> GetPluginLogPath\(string\)

获取插件日志文件路径。

```csharp
public string GetPluginLogPath(string pluginId)
```

#### Parameters

`pluginId` string

#### Returns

 string

### <a id="Ink_Canvas_Plugins_PluginManager_GetService__1"></a> GetService<T\>\(\)

从 DI 容器获取服务（兼容旧接口）。

```csharp
public T GetService<T>() where T : class
```

#### Returns

 T

#### Type Parameters

`T` 

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

`approvedPackagePath` string

`approvedPackageSha256` string

#### Returns

 IReadOnlyList<string\>

本次成功安装（解压）的插件 ID 列表。

### <a id="Ink_Canvas_Plugins_PluginManager_IsPluginDisabled_System_String_"></a> IsPluginDisabled\(string\)

检查插件是否被禁用。

```csharp
public bool IsPluginDisabled(string pluginId)
```

#### Parameters

`pluginId` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_PluginManager_LoadAllAsync"></a> LoadAllAsync\(\)

```csharp
public Task LoadAllAsync()
```

#### Returns

 Task

### <a id="Ink_Canvas_Plugins_PluginManager_Log_System_String_"></a> Log\(string\)

```csharp
public void Log(string message)
```

#### Parameters

`message` string

### <a id="Ink_Canvas_Plugins_PluginManager_LogError_System_String_Exception_"></a> LogError\(string, Exception\)

```csharp
public void LogError(string message, Exception ex = null)
```

#### Parameters

`message` string

`ex` Exception

### <a id="Ink_Canvas_Plugins_PluginManager_LogPlugin_System_String_System_String_System_String_"></a> LogPlugin\(string, string, string\)

写入插件独立日志。

```csharp
public void LogPlugin(string pluginId, string level, string message)
```

#### Parameters

`pluginId` string

`level` string

`message` string

### <a id="Ink_Canvas_Plugins_PluginManager_OnLogMessage_System_String_"></a> OnLogMessage\(string\)

```csharp
protected virtual void OnLogMessage(string message)
```

#### Parameters

`message` string

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

`uri` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterBoardToolbarItem_Ink_Canvas_Plugins_PluginToolbarItemInfo_"></a> RegisterBoardToolbarItem\(PluginToolbarItemInfo\)

向白板工具栏注册插件组件。行为与 <xref href="Ink_Canvas.Plugins.PluginManager.RegisterToolbarItem(Ink_Canvas.Plugins.PluginToolbarItemInfo)" data-throw-if-not-resolved="false"></xref> 相同，仅目标工具栏不同。

```csharp
public void RegisterBoardToolbarItem(PluginToolbarItemInfo itemInfo)
```

#### Parameters

`itemInfo` PluginToolbarItemInfo

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterIpcHandler_System_String_Func_System_Nullable_System_Text_Json_JsonElement__System_Object__"></a> RegisterIpcHandler\(string, Func<JsonElement?, object\>\)

注册 IPC 处理函数。

```csharp
public void RegisterIpcHandler(string method, Func<System.Text.Json.JsonElement?, object> handler)
```

#### Parameters

`method` string

`handler` Func<System.Text.Json.JsonElement?, object\>

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterService__1___0_"></a> RegisterService<T\>\(T\)

向 DI 容器注册服务（兼容旧接口，仅在 Initialize 阶段有效）。

```csharp
public void RegisterService<T>(T service) where T : class
```

#### Parameters

`service` T

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterService_Type_System_Object_"></a> RegisterService\(Type, object\)

非泛型注册服务，支持 Type 参数批量注册。

```csharp
public void RegisterService(Type serviceType, object service)
```

#### Parameters

`serviceType` Type

`service` object

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterToolbarItem_Ink_Canvas_Plugins_PluginToolbarItemInfo_"></a> RegisterToolbarItem\(PluginToolbarItemInfo\)

向工具栏注册插件组件。

```csharp
public void RegisterToolbarItem(PluginToolbarItemInfo itemInfo)
```

#### Parameters

`itemInfo` PluginToolbarItemInfo

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterUriHandler_System_String_Func_Ink_Canvas_Plugins_PluginUriRequest_System_Boolean__"></a> RegisterUriHandler\(string, Func<PluginUriRequest, bool\>\)

注册 URI 处理程序。须在插件 Initialize 阶段调用，通过 <xref href="Ink_Canvas.Plugins.PluginManager._currentLoadingPlugin" data-throw-if-not-resolved="false"></xref> 识别调用方插件。

```csharp
public void RegisterUriHandler(string subPath, Func<PluginUriRequest, bool> handler)
```

#### Parameters

`subPath` string

`handler` Func<PluginUriRequest, bool\>

### <a id="Ink_Canvas_Plugins_PluginManager_ReloadPlugin_System_String_"></a> ReloadPlugin\(string\)

热重载单个插件：卸载 → 校验 ALC 已释放 → 从磁盘重新发现并加载。
用于插件开发时直接覆盖 DLL 后免重启生效，也用于市场更新的热更新路径。

```csharp
public PluginReloadResult ReloadPlugin(string pluginId)
```

#### Parameters

`pluginId` string

#### Returns

 [PluginReloadResult](Ink\_Canvas.Plugins.PluginReloadResult.md)

重载结果，<xref href="Ink_Canvas.Plugins.PluginReloadResult.Success" data-throw-if-not-resolved="false"></xref> 为 false 时调用方应提示重启。

### <a id="Ink_Canvas_Plugins_PluginManager_ResetPluginFailure_System_String_"></a> ResetPluginFailure\(string\)

显式重置插件的错误记录并清除禁用状态，然后尝试热加载。

```csharp
public bool ResetPluginFailure(string pluginId)
```

#### Parameters

`pluginId` string

#### Returns

 bool

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

`pluginId` string

`subPath` string

`rawUri` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_PluginManager_UnloadAll"></a> UnloadAll\(\)

```csharp
public void UnloadAll()
```

### <a id="Ink_Canvas_Plugins_PluginManager_UnloadPlugin_Ink_Canvas_Plugins_PluginInfo_"></a> UnloadPlugin\(PluginInfo\)

```csharp
public void UnloadPlugin(PluginInfo plugin)
```

#### Parameters

`plugin` PluginInfo

### <a id="Ink_Canvas_Plugins_PluginManager_WaitForUnload_System_String_System_Int32_"></a> WaitForUnload\(string, int\)

等待指定插件的 ALC 被 GC 真正回收，返回是否卸载成功。

<p>
AssemblyLoadContext.Unload 只是发起卸载请求，实际释放要等 GC 确认
无人引用。这里做有限次 GC 后检查弱引用；仍存活说明宿主某处还留着插件对象，
属于注册撤销不完整，调用方据此决定是否回退到重启。
</p>

```csharp
public bool WaitForUnload(string pluginId, int maxAttempts = 10)
```

#### Parameters

`pluginId` string

`maxAttempts` int

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_PluginManager_LogMessage"></a> LogMessage

```csharp
public event EventHandler<string> LogMessage
```

#### Event Type

 EventHandler<string\>

### <a id="Ink_Canvas_Plugins_PluginManager_PluginLoaded"></a> PluginLoaded

```csharp
public event EventHandler<PluginInfo> PluginLoaded
```

#### Event Type

 EventHandler<PluginInfo\>

### <a id="Ink_Canvas_Plugins_PluginManager_PluginUnloaded"></a> PluginUnloaded

```csharp
public event EventHandler<PluginInfo> PluginUnloaded
```

#### Event Type

 EventHandler<PluginInfo\>

