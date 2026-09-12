# <a id="Ink_Canvas_Plugins_IPluginHost"></a> Interface IPluginHost

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

宿主 API 入口。每个插件在 Initialize 阶段获得自己的宿主代理（<code>PluginHostProxy</code>）：
日志写入该插件独立的日志目录，其余调用转发到宿主 <code>PluginManager</code>。
所有注册动作（服务、工具栏项、IPC 处理器等）必须在 Initialize 阶段完成。

```csharp
public interface IPluginHost
```

## Properties

### <a id="Ink_Canvas_Plugins_IPluginHost_Ipc"></a> Ipc

获取当前的 IPC 总线实例。调用 <xref href="Ink_Canvas.Plugins.IPluginHost.RegisterIpcHandler(System.String%2cSystem.Func%7bSystem.Nullable%7bSystem.Text.Json.JsonElement%7d%2cSystem.Object%7d)" data-throw-if-not-resolved="false"></xref> 或宿主启动 IPC 后可用，
之前为 null。仅在 Initialize 之后使用。

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

安装包（.icpx）文件路径。

`expectedSha256` [string](https://learn.microsoft.com/dotnet/api/system.string)

预留参数，当前不参与信任判定（保留兼容）；传 null 即可。

`declaredPluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

插件声明 ID，用于与官方市场索引比对。

#### Returns

 [SecurityVerdict](Ink\_Canvas.Plugins.SecurityVerdict.md)

包含信任级别、权限声明与提示原因的安全评估结果。

### <a id="Ink_Canvas_Plugins_IPluginHost_GetService__1"></a> GetService<T\>\(\)

从 DI 容器获取服务（兼容旧接口）。优先从 DI 容器解析，其次回退到旧注册字典。

```csharp
T GetService<T>() where T : class
```

#### Returns

 T

已注册的服务实例；未注册时返回 null。

#### Type Parameters

`T` 

服务类型。

### <a id="Ink_Canvas_Plugins_IPluginHost_Log_System_String_"></a> Log\(string\)

写入普通日志。仅写入当前插件独立的日志文件（<code>PluginLogs/&lt;plugin-id&gt;/</code>），
不落入宿主日志与主程序日志。

```csharp
void Log(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

日志消息。

### <a id="Ink_Canvas_Plugins_IPluginHost_LogError_System_String_System_Exception_"></a> LogError\(string, Exception\)

写入错误日志，可附带异常。仅写入当前插件独立的日志文件，
不落入宿主日志与主程序日志。

```csharp
void LogError(string message, Exception ex = null)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

错误描述。

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

关联异常；可为 null。

### <a id="Ink_Canvas_Plugins_IPluginHost_RegisterBoardToolbarItem_Ink_Canvas_Plugins_PluginToolbarItemInfo_"></a> RegisterBoardToolbarItem\(PluginToolbarItemInfo\)

旧版接口：固定向白板工具栏注册插件组件，与 <xref href="Ink_Canvas.Plugins.IPluginHost.RegisterToolbarItem(Ink_Canvas.Plugins.PluginToolbarItemInfo)" data-throw-if-not-resolved="false"></xref> 共用同一实现。
新插件请改用 <xref href="Ink_Canvas.Plugins.IPluginHost.RegisterToolbarItem(Ink_Canvas.Plugins.PluginToolbarItemInfo)" data-throw-if-not-resolved="false"></xref> 并设置 <xref href="Ink_Canvas.Plugins.PluginToolbarItemInfo.Surface" data-throw-if-not-resolved="false"></xref>
= <xref href="Ink_Canvas.Plugins.PluginToolbarSurface.Whiteboard" data-throw-if-not-resolved="false"></xref>。

```csharp
void RegisterBoardToolbarItem(PluginToolbarItemInfo itemInfo)
```

#### Parameters

`itemInfo` [PluginToolbarItemInfo](Ink\_Canvas.Plugins.PluginToolbarItemInfo.md)

要注册的工具栏组件信息。

### <a id="Ink_Canvas_Plugins_IPluginHost_RegisterIpcHandler_System_String_System_Func_System_Nullable_System_Text_Json_JsonElement__System_Object__"></a> RegisterIpcHandler\(string, Func<JsonElement?, object\>\)

注册一个 IPC 方法处理函数，由插件调用。
同一 <code class="paramref">method</code> 可注册多个处理函数，调用时第一个不抛异常的处理函数胜出。
<code class="paramref">method</code> 为空字符串时宿主抛出 <xref href="System.ArgumentException" data-throw-if-not-resolved="false"></xref>，
<code class="paramref">handler</code> 为 null 时抛出 <xref href="System.ArgumentNullException" data-throw-if-not-resolved="false"></xref>。

```csharp
void RegisterIpcHandler(string method, Func<JsonElement?, object> handler)
```

#### Parameters

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

方法名，不能为空。

`handler` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?, [object](https://learn.microsoft.com/dotnet/api/system.object)\>

处理函数，接收 JSON 参数，返回任意可序列化对象（可为 null）。

### <a id="Ink_Canvas_Plugins_IPluginHost_RegisterService__1___0_"></a> RegisterService<T\>\(T\)

向 DI 容器注册服务（兼容旧接口，仅在 Initialize 阶段有效）。

```csharp
void RegisterService<T>(T service) where T : class
```

#### Parameters

`service` T

要注册的服务实例。

#### Type Parameters

`T` 

服务类型。

### <a id="Ink_Canvas_Plugins_IPluginHost_RegisterToolbarItem_Ink_Canvas_Plugins_PluginToolbarItemInfo_"></a> RegisterToolbarItem\(PluginToolbarItemInfo\)

向工具栏注册插件组件。目标工具栏由 <xref href="Ink_Canvas.Plugins.PluginToolbarItemInfo.Surface" data-throw-if-not-resolved="false"></xref> 决定：
Whiteboard 注册到白板工具栏，其余注册到浮动工具栏。

```csharp
void RegisterToolbarItem(PluginToolbarItemInfo itemInfo)
```

#### Parameters

`itemInfo` [PluginToolbarItemInfo](Ink\_Canvas.Plugins.PluginToolbarItemInfo.md)

要注册的工具栏组件信息。

