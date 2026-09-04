# <a id="Ink_Canvas_Plugins_CanvasLineFinalizedEventArgs"></a> Class CanvasLineFinalizedEventArgs

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

宿主完成全部笔迹后处理后发布的直线候选。候选令牌仅能成功消费一次。

```csharp
public sealed class CanvasLineFinalizedEventArgs : EventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[CanvasLineFinalizedEventArgs](Ink\_Canvas.Plugins.CanvasLineFinalizedEventArgs.md)

#### Inherited Members

[EventArgs.Empty](https://learn.microsoft.com/dotnet/api/system.eventargs.empty), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_CanvasLineFinalizedEventArgs_CandidateToken"></a> CandidateToken

```csharp
public string CandidateToken { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_CanvasLineFinalizedEventArgs_End"></a> End

```csharp
public Point End { get; set; }
```

#### Property Value

 [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

### <a id="Ink_Canvas_Plugins_CanvasLineFinalizedEventArgs_PageId"></a> PageId

```csharp
public string PageId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_CanvasLineFinalizedEventArgs_Source"></a> Source

```csharp
public CanvasLineSource Source { get; set; }
```

#### Property Value

 [CanvasLineSource](Ink\_Canvas.Plugins.CanvasLineSource.md)

### <a id="Ink_Canvas_Plugins_CanvasLineFinalizedEventArgs_Start"></a> Start

```csharp
public Point Start { get; set; }
```

#### Property Value

 [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

