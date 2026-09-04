# <a id="Ink_Canvas_Plugins_IPluginIpcBus"></a> Interface IPluginIpcBus

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

IPC 总线抽象。SDK 暴露接口，实现在主项目中。

```csharp
public interface IPluginIpcBus
```

## Methods

### <a id="Ink_Canvas_Plugins_IPluginIpcBus_InvokeAsync_System_String_System_Nullable_System_Text_Json_JsonElement__System_Nullable_System_TimeSpan__"></a> InvokeAsync\(string, JsonElement?, TimeSpan?\)

主动调用对端服务，<code class="paramref">args</code> 为任意 JSON 结构。
失败时抛出 <xref href="System.InvalidOperationException" data-throw-if-not-resolved="false"></xref>，超时抛出 <xref href="System.TimeoutException" data-throw-if-not-resolved="false"></xref>。

```csharp
Task<object> InvokeAsync(string method, JsonElement? args, TimeSpan? timeout = null)
```

#### Parameters

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

要调用的方法名。

`args` [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?

调用参数（任意 JSON 结构）。

`timeout` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

超时时间；默认 5 秒，必须为正。

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

对端返回的 JSON 结果；无结果时为 null。

### <a id="Ink_Canvas_Plugins_IPluginIpcBus_RegisterHandler_System_String_System_Func_System_Nullable_System_Text_Json_JsonElement__System_Object__"></a> RegisterHandler\(string, Func<JsonElement?, object\>\)

注册一个方法处理函数。同一方法可注册多个，调用时第一个不抛异常的处理函数胜出。

```csharp
void RegisterHandler(string method, Func<JsonElement?, object> handler)
```

#### Parameters

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

方法名，不能为空。

`handler` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?, [object](https://learn.microsoft.com/dotnet/api/system.object)\>

处理函数。

### <a id="Ink_Canvas_Plugins_IPluginIpcBus_Start"></a> Start\(\)

启动命名管道服务端，循环接收客户端连接。

```csharp
void Start()
```

### <a id="Ink_Canvas_Plugins_IPluginIpcBus_MessageReceived"></a> MessageReceived

收到任何消息时触发。

```csharp
event EventHandler<IpcMessage> MessageReceived
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[IpcMessage](Ink\_Canvas.Plugins.IpcMessage.md)\>

