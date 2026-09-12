# <a id="Ink_Canvas_IPC_PPTAgentPipeClient"></a> Class PPTAgentPipeClient

Namespace: [Ink\_Canvas.IPC](Ink\_Canvas.IPC.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class PPTAgentPipeClient : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PPTAgentPipeClient](Ink\_Canvas.IPC.PPTAgentPipeClient.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_IsConnected"></a> IsConnected

```csharp
public bool IsConnected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_SendCommand_System_String_System_Object_"></a> SendCommand\(string, object\)

```csharp
public bool SendCommand(string command, object data = null)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_SendRequest__1_System_String_System_Object_System_Int32_"></a> SendRequest<T\>\(string, object, int\)

Synchronous request. Prefer <xref href="Ink_Canvas.IPC.PPTAgentPipeClient.SendRequestAsync%60%601(System.String%2cSystem.Object%2cSystem.Int32)" data-throw-if-not-resolved="false"></xref> to avoid sync-over-async deadlocks.

```csharp
public T SendRequest<T>(string command, object data = null, int timeoutMilliseconds = default)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

`timeoutMilliseconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 T

#### Type Parameters

`T` 

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_SendRequestAsync__1_System_String_System_Object_System_Int32_"></a> SendRequestAsync<T\>\(string, object, int\)

```csharp
public Task<T> SendRequestAsync<T>(string command, object data = null, int timeoutMilliseconds = default)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

`timeoutMilliseconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<T\>

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

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_EventReceived"></a> EventReceived

```csharp
public event Action<string, PPTState> EventReceived
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), PPTState\>

### <a id="Ink_Canvas_IPC_PPTAgentPipeClient_StateReceived"></a> StateReceived

```csharp
public event Action<PPTState> StateReceived
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<PPTState\>

