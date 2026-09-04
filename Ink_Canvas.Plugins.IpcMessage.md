# <a id="Ink_Canvas_Plugins_IpcMessage"></a> Class IpcMessage

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

IPC 消息结构（JSON 透明传输）。宿主与插件共用。

```csharp
public class IpcMessage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IpcMessage](Ink\_Canvas.Plugins.IpcMessage.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_IpcMessage_Error"></a> Error

错误信息；非空表示调用失败。

```csharp
public IpcError Error { get; set; }
```

#### Property Value

 [IpcError](Ink\_Canvas.Plugins.IpcError.md)

### <a id="Ink_Canvas_Plugins_IpcMessage_From"></a> From

消息来源标识，当前实现中宿主发出的消息为 "host"。

```csharp
public string From { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IpcMessage_Id"></a> Id

消息标识（用于请求-响应关联）。

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IpcMessage_IsError"></a> IsError

是否携带错误信息（<xref href="Ink_Canvas.Plugins.IpcMessage.Error" data-throw-if-not-resolved="false"></xref> 非空）。

```csharp
public bool IsError { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IpcMessage_Method"></a> Method

方法名。

```csharp
public string Method { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IpcMessage_Params"></a> Params

调用参数（任意 JSON 结构）。

```csharp
public JsonElement? Params { get; set; }
```

#### Property Value

 [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?

### <a id="Ink_Canvas_Plugins_IpcMessage_Result"></a> Result

调用结果（任意 JSON 结构）。

```csharp
public JsonElement? Result { get; set; }
```

#### Property Value

 [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?

