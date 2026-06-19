# <a id="InkCanvas_PowerPointAddIn_IPC_PipeHost"></a> Class PipeHost

Namespace: [InkCanvas.PowerPointAddIn.IPC](InkCanvas.PowerPointAddIn.IPC.md)  
Assembly: InkCanvas.PowerPointAddIn.dll  

```csharp
public sealed class PipeHost : IDisposable
```

#### Inheritance

IDisposable ← 
[PipeHost](InkCanvas.PowerPointAddIn.IPC.PipeHost.md)

## Constructors

### <a id="InkCanvas_PowerPointAddIn_IPC_PipeHost__ctor_Func_System_String_System_String__"></a> PipeHost\(Func<string, string\>\)

```csharp
public PipeHost(Func<string, string> dispatch)
```

#### Parameters

`dispatch` Func<string, string\>

## Properties

### <a id="InkCanvas_PowerPointAddIn_IPC_PipeHost_IsEnabled"></a> IsEnabled

```csharp
public bool IsEnabled { get; }
```

#### Property Value

 bool

## Methods

### <a id="InkCanvas_PowerPointAddIn_IPC_PipeHost_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="InkCanvas_PowerPointAddIn_IPC_PipeHost_SendFrame_System_String_"></a> SendFrame\(string\)

向当前连接的客户端主动推送消息（状态/事件）。
线程安全，可从任意线程调用。

```csharp
public void SendFrame(string json)
```

#### Parameters

`json` string

### <a id="InkCanvas_PowerPointAddIn_IPC_PipeHost_Start"></a> Start\(\)

```csharp
public void Start()
```

### <a id="InkCanvas_PowerPointAddIn_IPC_PipeHost_Stop"></a> Stop\(\)

```csharp
public void Stop()
```

