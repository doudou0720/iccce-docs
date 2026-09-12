# <a id="Ink_Canvas_Plugins_CanvasViewportTransformEventArgs"></a> Class CanvasViewportTransformEventArgs

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

宿主对整张普通白板内容应用的增量视口变换。

```csharp
public sealed class CanvasViewportTransformEventArgs : EventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[CanvasViewportTransformEventArgs](Ink\_Canvas.Plugins.CanvasViewportTransformEventArgs.md)

#### Inherited Members

[EventArgs.Empty](https://learn.microsoft.com/dotnet/api/system.eventargs.empty), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_CanvasViewportTransformEventArgs_Delta"></a> Delta

```csharp
public Matrix Delta { get; set; }
```

#### Property Value

 [Matrix](https://learn.microsoft.com/dotnet/api/system.windows.media.matrix)

### <a id="Ink_Canvas_Plugins_CanvasViewportTransformEventArgs_IsCompleted"></a> IsCompleted

```csharp
public bool IsCompleted { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

