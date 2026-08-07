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
System.Threading.Tasks.Task<object> InvokeAsync(string method, System.Text.Json.JsonElement? args, System.TimeSpan? timeout = null)
```

#### Parameters

`method` string

`args` System.Text.Json.JsonElement?

`timeout` System.TimeSpan?

#### Returns

 System.Threading.Tasks.Task<object\>

### <a id="Ink_Canvas_Plugins_IPluginIpcBus_RegisterHandler_System_String_Func_System_Nullable_System_Text_Json_JsonElement__System_Object__"></a> RegisterHandler\(string, Func<JsonElement?, object\>\)

注册一个方法处理函数。

```csharp
void RegisterHandler(string method, Func<System.Text.Json.JsonElement?, object> handler)
```

#### Parameters

`method` string

`handler` Func<System.Text.Json.JsonElement?, object\>

### <a id="Ink_Canvas_Plugins_IPluginIpcBus_Start"></a> Start\(\)

启动服务器。

```csharp
void Start()
```

### <a id="Ink_Canvas_Plugins_IPluginIpcBus_MessageReceived"></a> MessageReceived

收到任何消息时触发。

```csharp
event System.EventHandler<IpcMessage> MessageReceived
```

#### Event Type

 System.EventHandler<[IpcMessage](Ink\_Canvas.Plugins.IpcMessage.md)\>

