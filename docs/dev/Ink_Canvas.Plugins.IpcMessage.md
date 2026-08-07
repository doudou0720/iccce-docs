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

```csharp
public IpcError Error { get; set; }
```

#### Property Value

 [IpcError](Ink\_Canvas.Plugins.IpcError.md)

### <a id="Ink_Canvas_Plugins_IpcMessage_From"></a> From

```csharp
public string From { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IpcMessage_Id"></a> Id

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IpcMessage_IsError"></a> IsError

```csharp
public bool IsError { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IpcMessage_Method"></a> Method

```csharp
public string Method { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IpcMessage_Params"></a> Params

```csharp
public JsonElement? Params { get; set; }
```

#### Property Value

 [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?

### <a id="Ink_Canvas_Plugins_IpcMessage_Result"></a> Result

```csharp
public JsonElement? Result { get; set; }
```

#### Property Value

 [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?

