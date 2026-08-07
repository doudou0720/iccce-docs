# <a id="Ink_Canvas_Plugins_IpcMessage"></a> Class IpcMessage

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

IPC 消息结构（JSON 透明传输）。宿主与插件共用。

```csharp
public class IpcMessage
```

#### Inheritance

object ← 
[IpcMessage](Ink\_Canvas.Plugins.IpcMessage.md)

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

 string

### <a id="Ink_Canvas_Plugins_IpcMessage_Id"></a> Id

```csharp
public string Id { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_IpcMessage_IsError"></a> IsError

```csharp
public bool IsError { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_IpcMessage_Method"></a> Method

```csharp
public string Method { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_IpcMessage_Params"></a> Params

```csharp
public System.Text.Json.JsonElement? Params { get; set; }
```

#### Property Value

 System.Text.Json.JsonElement?

### <a id="Ink_Canvas_Plugins_IpcMessage_Result"></a> Result

```csharp
public System.Text.Json.JsonElement? Result { get; set; }
```

#### Property Value

 System.Text.Json.JsonElement?

