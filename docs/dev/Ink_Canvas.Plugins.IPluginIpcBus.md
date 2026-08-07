# <a id="Ink_Canvas_Plugins_IPluginIpcBus"></a> Interface IPluginIpcBus

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

IPC 总线抽象。SDK 暴露接口，实现在主项目中。

```csharp
public interface IPluginIpcBus
```

## Methods

### <a id="Ink_Canvas_Plugins_IPluginIpcBus_InvokeAsync_System_String_System_Nullable_System_Text_Json_JsonElement__System_Nullable_System_TimeSpan__"></a> InvokeAsync\(string, JsonElement?, TimeSpan?\)

调用对端服务。

```csharp
Task<object> InvokeAsync(string method, JsonElement? args, TimeSpan? timeout = null)
```

#### Parameters

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

`args` [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?

`timeout` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Plugins_IPluginIpcBus_RegisterHandler_System_String_System_Func_System_Nullable_System_Text_Json_JsonElement__System_Object__"></a> RegisterHandler\(string, Func<JsonElement?, object\>\)

注册一个方法处理函数。

```csharp
void RegisterHandler(string method, Func<JsonElement?, object> handler)
```

#### Parameters

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

`handler` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?, [object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Plugins_IPluginIpcBus_Start"></a> Start\(\)

启动服务器。

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

