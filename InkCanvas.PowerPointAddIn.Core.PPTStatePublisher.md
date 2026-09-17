# <a id="InkCanvas_PowerPointAddIn_Core_PPTStatePublisher"></a> Class PPTStatePublisher

Namespace: [InkCanvas.PowerPointAddIn.Core](InkCanvas.PowerPointAddIn.Core.md)  
Assembly: InkCanvas.PowerPointAddIn.dll  

```csharp
public sealed class PPTStatePublisher
```

#### Inheritance

object ← 
[PPTStatePublisher](InkCanvas.PowerPointAddIn.Core.PPTStatePublisher.md)

## Constructors

### <a id="InkCanvas_PowerPointAddIn_Core_PPTStatePublisher__ctor_Action_System_String__"></a> PPTStatePublisher\(Action<string\>\)

```csharp
public PPTStatePublisher(Action<string> send)
```

#### Parameters

`send` Action<string\>

## Methods

### <a id="InkCanvas_PowerPointAddIn_Core_PPTStatePublisher_PublishState_PPTState_"></a> PublishState\(PPTState\)

```csharp
public void PublishState(PPTState state)
```

#### Parameters

`state` PPTState

### <a id="InkCanvas_PowerPointAddIn_Core_PPTStatePublisher_RaiseEvent_System_String_PPTState_"></a> RaiseEvent\(string, PPTState\)

```csharp
public void RaiseEvent(string eventName, PPTState state)
```

#### Parameters

`eventName` string

`state` PPTState

### <a id="InkCanvas_PowerPointAddIn_Core_PPTStatePublisher_SendError_System_String_System_String_"></a> SendError\(string, string\)

```csharp
public string SendError(string requestId, string error)
```

#### Parameters

`requestId` string

`error` string

#### Returns

 string

### <a id="InkCanvas_PowerPointAddIn_Core_PPTStatePublisher_SendResponse_System_String_System_Object_System_String_System_Boolean_"></a> SendResponse\(string, object, string, bool\)

```csharp
public string SendResponse(string command, object data, string requestId, bool success = true)
```

#### Parameters

`command` string

`data` object

`requestId` string

`success` bool

#### Returns

 string

