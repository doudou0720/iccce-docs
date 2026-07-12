# <a id="Ink_Canvas_Plugins_PluginIpcService"></a> Class PluginIpcService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class PluginIpcService : IPluginIpcBus, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginIpcService](Ink\_Canvas.Plugins.PluginIpcService.md)

#### Implements

IPluginIpcBus, 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Plugins_PluginIpcService__ctor"></a> PluginIpcService\(\)

```csharp
public PluginIpcService()
```

## Fields

### <a id="Ink_Canvas_Plugins_PluginIpcService_MaxMessageBytes"></a> MaxMessageBytes

单条消息的最大字节数。

```csharp
public const int MaxMessageBytes = 1048576
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="Ink_Canvas_Plugins_PluginIpcService_PipeName"></a> PipeName

```csharp
public string PipeName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Plugins_PluginIpcService_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Plugins_PluginIpcService_GetSessionId"></a> GetSessionId\(\)

```csharp
public static string GetSessionId()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginIpcService_InvokeAsync_System_String_System_Nullable_System_Text_Json_JsonElement__System_Nullable_System_TimeSpan__"></a> InvokeAsync\(string, JsonElement?, TimeSpan?\)

主动调用对端，<code class="paramref">args</code> 是任意 JSON 结构。
失败时抛出 <xref href="System.InvalidOperationException" data-throw-if-not-resolved="false"></xref>。

```csharp
public Task<object> InvokeAsync(string method, JsonElement? args = null, TimeSpan? timeout = null)
```

#### Parameters

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

`args` [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?

`timeout` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Plugins_PluginIpcService_RegisterHandler_System_String_System_Func_System_Nullable_System_Text_Json_JsonElement__System_Object__"></a> RegisterHandler\(string, Func<JsonElement?, object\>\)

注册一个处理函数。同一方法可注册多个，第一个不抛异常的胜出。

```csharp
public void RegisterHandler(string method, Func<JsonElement?, object> handler)
```

#### Parameters

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

`handler` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?, [object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Plugins_PluginIpcService_Start"></a> Start\(\)

启动命名管道服务端，循环 accept 客户端连接。

```csharp
public void Start()
```

### <a id="Ink_Canvas_Plugins_PluginIpcService_MessageReceived"></a> MessageReceived

收到任何消息时触发。

```csharp
public event EventHandler<IpcMessage> MessageReceived
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<IpcMessage\>

