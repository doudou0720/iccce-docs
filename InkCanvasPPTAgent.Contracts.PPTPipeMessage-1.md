# <a id="InkCanvasPPTAgent_Contracts_PPTPipeMessage_1"></a> Class PPTPipeMessage<T\>

Namespace: [InkCanvasPPTAgent.Contracts](InkCanvasPPTAgent.Contracts.md)  
Assembly: InkCanvas.PPTAgent.Contracts.dll  

```csharp
public sealed class PPTPipeMessage<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PPTPipeMessage<T\>](InkCanvasPPTAgent.Contracts.PPTPipeMessage\-1.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="InkCanvasPPTAgent_Contracts_PPTPipeMessage_1_Cmd"></a> Cmd

```csharp
public string Cmd { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="InkCanvasPPTAgent_Contracts_PPTPipeMessage_1_Data"></a> Data

```csharp
public T Data { get; set; }
```

#### Property Value

 T

### <a id="InkCanvasPPTAgent_Contracts_PPTPipeMessage_1_Error"></a> Error

```csharp
public string Error { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="InkCanvasPPTAgent_Contracts_PPTPipeMessage_1_RequestId"></a> RequestId

```csharp
public string RequestId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="InkCanvasPPTAgent_Contracts_PPTPipeMessage_1_Success"></a> Success

```csharp
public bool Success { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="InkCanvasPPTAgent_Contracts_PPTPipeMessage_1_Type"></a> Type

```csharp
public string Type { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="InkCanvasPPTAgent_Contracts_PPTPipeMessage_1_Version"></a> Version

```csharp
public int Version { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

