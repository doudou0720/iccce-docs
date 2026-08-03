# <a id="Ink_Canvas_IPC_PPTAgentPipeClient"></a> Class PPTAgentPipeClient

Namespace: [Ink\_Canvas.IPC](Ink\_Canvas.IPC.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class PPTAgentPipeClient : IDisposable
```

#### Inheritance

IDisposable ← 
[PPTAgentPipeClient](Ink\_Canvas.IPC.PPTAgentPipeClient.md)

## Properties

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_IsConnected"></a> IsConnected

```csharp
public bool IsConnected { get; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_SendCommand_System_String_System_Object_"></a> SendCommand\(string, object\)

```csharp
public bool SendCommand(string command, object data = null)
```

#### Parameters

`command` string

`data` object

#### Returns

 bool

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_SendRequest__1_System_String_System_Object_System_Int32_"></a> SendRequest<T\>\(string, object, int\)

Synchronous request. Prefer <xref href="Ink_Canvas.IPC.PPTAgentPipeClient.SendRequestAsync%60%601(System.String%2cSystem.Object%2cSystem.Int32)" data-throw-if-not-resolved="false"></xref> to avoid sync-over-async deadlocks.

```csharp
public T SendRequest<T>(string command, object data = null, int timeoutMilliseconds = null)
```

#### Parameters

`command` string

`data` object

`timeoutMilliseconds` int

#### Returns

 T

#### Type Parameters

`T` 

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_SendRequestAsync__1_System_String_System_Object_System_Int32_"></a> SendRequestAsync<T\>\(string, object, int\)

```csharp
public Task<T> SendRequestAsync<T>(string command, object data = null, int timeoutMilliseconds = null)
```

#### Parameters

`command` string

`data` object

`timeoutMilliseconds` int

#### Returns

 Task<T\>

#### Type Parameters

`T` 

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_Start"></a> Start\(\)

```csharp
public void Start()
```

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_Stop"></a> Stop\(\)

```csharp
public void Stop()
```

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_ConnectionChanged"></a> ConnectionChanged

```csharp
public event Action<bool> ConnectionChanged
```

#### Event Type

 Action<bool\>

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_EventReceived"></a> EventReceived

```csharp
public event Action<string, PPTState> EventReceived
```

#### Event Type

 Action<string, PPTState\>

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_StateReceived"></a> StateReceived

```csharp
public event Action<PPTState> StateReceived
```

#### Event Type

 Action<PPTState\>

