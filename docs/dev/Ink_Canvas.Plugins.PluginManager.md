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

依赖注入服务集合。插件可在 Initialize 阶段向此集合注册自己的服务。

```csharp
public IServiceCollection Services { get; }
```

#### Property Value

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

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

### <a id="Ink_Canvas_Plugins_PluginManager_InstallPendingPackages"></a> InstallPendingPackages\(\)

安装 PluginPackages 中待安装的插件包并立即加载。可在运行时调用。

```csharp
public void InstallPendingPackages()
```

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

### <a id="Ink_Canvas_Plugins_PluginManager_Log_System_String_"></a> Log\(string\)

```csharp
public void Log(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManager_LogError_System_String_System_Exception_"></a> LogError\(string, Exception\)

```csharp
public void LogError(string message, Exception ex = null)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

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

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterService_System_Type_System_Object_"></a> RegisterService\(Type, object\)

非泛型注册服务，支持 Type 参数批量注册。

```csharp
public void RegisterService(Type serviceType, object service)
```

#### Parameters

`serviceType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`service` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterToolbarItem_Ink_Canvas_Plugins_PluginToolbarItemInfo_"></a> RegisterToolbarItem\(PluginToolbarItemInfo\)

向工具栏注册插件组件。

```csharp
public void RegisterToolbarItem(PluginToolbarItemInfo itemInfo)
```

#### Parameters

`itemInfo` PluginToolbarItemInfo

### <a id="Ink_Canvas_Plugins_PluginManager_ResetPluginFailure_System_String_"></a> ResetPluginFailure\(string\)

显式重置插件的错误记录并清除禁用状态，下次重新加载。

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

