# <a id="Ink_Canvas_Plugins_IPluginHost"></a> Interface IPluginHost

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

```csharp
public interface IPluginHost
```

## Properties

### <a id="Ink_Canvas_Plugins_IPluginHost_Ipc"></a> Ipc

获取当前的 IPC 服务实例（仅在 Initialize 之后可用）。

```csharp
IPluginIpcBus Ipc { get; }
```

#### Property Value

 [IPluginIpcBus](Ink\_Canvas.Plugins.IPluginIpcBus.md)

### <a id="Ink_Canvas_Plugins_IPluginHost_ServiceProvider"></a> ServiceProvider

依赖注入服务提供者。在所有插件 Initialize 完成后可用。

```csharp
IServiceProvider ServiceProvider { get; }
```

#### Property Value

 [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

### <a id="Ink_Canvas_Plugins_IPluginHost_Services"></a> Services

依赖注入服务集合。插件可在 Initialize 阶段向此集合注册自己的服务。

```csharp
IServiceCollection Services { get; }
```

#### Property Value

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

## Methods

### <a id="Ink_Canvas_Plugins_IPluginHost_EvaluateTrust_System_String_System_String_System_String_"></a> EvaluateTrust\(string, string, string\)

根据文件路径评估即将安装的插件包的安全等级。

<p>实现可参考 PluginSecurityCheck。</p>

```csharp
SecurityVerdict EvaluateTrust(string packagePath, string expectedSha256, string declaredPluginId)
```

#### Parameters

`packagePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`expectedSha256` [string](https://learn.microsoft.com/dotnet/api/system.string)

`declaredPluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [SecurityVerdict](Ink\_Canvas.Plugins.SecurityVerdict.md)

### <a id="Ink_Canvas_Plugins_IPluginHost_GetService__1"></a> GetService<T\>\(\)

从 DI 容器获取服务（兼容旧接口）。

```csharp
T GetService<T>() where T : class
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Plugins_IPluginHost_Log_System_String_"></a> Log\(string\)

```csharp
void Log(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IPluginHost_LogError_System_String_System_Exception_"></a> LogError\(string, Exception\)

```csharp
void LogError(string message, Exception ex = null)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### <a id="Ink_Canvas_Plugins_IPluginHost_RegisterIpcHandler_System_String_System_Func_System_Nullable_System_Text_Json_JsonElement__System_Object__"></a> RegisterIpcHandler\(string, Func<JsonElement?, object\>\)

注册一个 IPC 方法，由插件调用。返回前请确保未注册相同 <code class="paramref">method</code>。

```csharp
void RegisterIpcHandler(string method, Func<JsonElement?, object> handler)
```

#### Parameters

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

`handler` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?, [object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Plugins_IPluginHost_RegisterService__1___0_"></a> RegisterService<T\>\(T\)

向 DI 容器注册服务（兼容旧接口，仅在 Initialize 阶段有效）。

```csharp
void RegisterService<T>(T service) where T : class
```

#### Parameters

`service` T

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Plugins_IPluginHost_RegisterToolbarItem_Ink_Canvas_Plugins_PluginToolbarItemInfo_"></a> RegisterToolbarItem\(PluginToolbarItemInfo\)

向工具栏注册插件组件。

```csharp
void RegisterToolbarItem(PluginToolbarItemInfo itemInfo)
```

#### Parameters

`itemInfo` [PluginToolbarItemInfo](Ink\_Canvas.Plugins.PluginToolbarItemInfo.md)

