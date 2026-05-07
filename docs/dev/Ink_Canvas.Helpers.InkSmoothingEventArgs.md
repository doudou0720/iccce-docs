# <a id="Ink_Canvas_Helpers_InkSmoothingEventArgs"></a> Class InkSmoothingEventArgs

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

墨迹平滑事件参数

```csharp
public class InkSmoothingEventArgs : EventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[InkSmoothingEventArgs](Ink\_Canvas.Helpers.InkSmoothingEventArgs.md)

#### Inherited Members

[EventArgs.Empty](https://learn.microsoft.com/dotnet/api/system.eventargs.empty), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Helpers_InkSmoothingEventArgs_OriginalStroke"></a> OriginalStroke

```csharp
public Stroke OriginalStroke { get; set; }
```

#### Property Value

 [Stroke](https://learn.microsoft.com/dotnet/api/system.windows.ink.stroke)

### <a id="Ink_Canvas_Helpers_InkSmoothingEventArgs_ProcessingTime"></a> ProcessingTime

```csharp
public TimeSpan ProcessingTime { get; set; }
```

#### Property Value

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

### <a id="Ink_Canvas_Helpers_InkSmoothingEventArgs_SmoothedStroke"></a> SmoothedStroke

```csharp
public Stroke SmoothedStroke { get; set; }
```

#### Property Value

 [Stroke](https://learn.microsoft.com/dotnet/api/system.windows.ink.stroke)

### <a id="Ink_Canvas_Helpers_InkSmoothingEventArgs_UsedHardwareAcceleration"></a> UsedHardwareAcceleration

```csharp
public bool UsedHardwareAcceleration { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_InkSmoothingEventArgs_WasAsync"></a> WasAsync

```csharp
public bool WasAsync { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

