# <a id="Ink_Canvas_Plugins_PluginIpcService"></a> Class PluginIpcService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class PluginIpcService : IPluginIpcBus, IDisposable
```

#### Inheritance

object ← 
[PluginIpcService](Ink\_Canvas.Plugins.PluginIpcService.md)

#### Implements

IPluginIpcBus, 
IDisposable

## Constructors

### <a id="Ink_Canvas_Plugins_PluginIpcService__ctor"></a> PluginIpcService\(\)

```csharp
public PluginIpcService()
```

## Fields

### <a id="Ink_Canvas_Plugins_PluginIpcService_MaxMessageBytes"></a> MaxMessageBytes

单条消息的最大字节数。

```csharp
public const int MaxMessageBytes
```

#### Field Value

 int

## Properties

### <a id="Ink_Canvas_Plugins_PluginIpcService_PipeName"></a> PipeName

```csharp
public string PipeName { get; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_Plugins_PluginIpcService_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Plugins_PluginIpcService_GetSessionId"></a> GetSessionId\(\)

```csharp
public static string GetSessionId()
```

#### Returns

 string

### <a id="Ink_Canvas_Plugins_PluginIpcService_InvokeAsync_System_String_System_Nullable_System_Text_Json_JsonElement__System_Nullable_TimeSpan__"></a> InvokeAsync\(string, JsonElement?, TimeSpan?\)

主动调用对端，<code class="paramref">args</code> 是任意 JSON 结构。
失败时抛出 InvalidOperationException。

```csharp
public Task<object> InvokeAsync(string method, System.Text.Json.JsonElement? args = null, TimeSpan? timeout = null)
```

#### Parameters

`method` string

`args` System.Text.Json.JsonElement?

`timeout` TimeSpan?

#### Returns

 Task<object\>

### <a id="Ink_Canvas_Plugins_PluginIpcService_RegisterHandler_System_String_Func_System_Nullable_System_Text_Json_JsonElement__System_Object__"></a> RegisterHandler\(string, Func<JsonElement?, object\>\)

注册一个处理函数。同一方法可注册多个，第一个不抛异常的胜出。

```csharp
public void RegisterHandler(string method, Func<System.Text.Json.JsonElement?, object> handler)
```

#### Parameters

`method` string

`handler` Func<System.Text.Json.JsonElement?, object\>

### <a id="Ink_Canvas_Plugins_PluginIpcService_Start"></a> Start\(\)

启动命名管道服务端，循环 accept 客户端连接。

```csharp
public void Start()
```

### <a id="Ink_Canvas_Plugins_PluginIpcService_UnregisterHandler_System_String_Func_System_Nullable_System_Text_Json_JsonElement__System_Object__"></a> UnregisterHandler\(string, Func<JsonElement?, object\>\)

注销之前注册的处理函数（按引用匹配）。插件卸载时必须调用，
否则委托留在 <xref href="Ink_Canvas.Plugins.PluginIpcService._handlers" data-throw-if-not-resolved="false"></xref> 中会钉住插件 ALC，导致热重载失效。

```csharp
public bool UnregisterHandler(string method, Func<System.Text.Json.JsonElement?, object> handler)
```

#### Parameters

`method` string

`handler` Func<System.Text.Json.JsonElement?, object\>

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_PluginIpcService_MessageReceived"></a> MessageReceived

收到任何消息时触发。

```csharp
public event EventHandler<IpcMessage> MessageReceived
```

#### Event Type

 EventHandler<IpcMessage\>

