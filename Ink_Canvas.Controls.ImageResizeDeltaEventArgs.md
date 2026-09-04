# <a id="Ink_Canvas_Controls_ImageResizeDeltaEventArgs"></a> Class ImageResizeDeltaEventArgs

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ImageResizeDeltaEventArgs : EventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[ImageResizeDeltaEventArgs](Ink\_Canvas.Controls.ImageResizeDeltaEventArgs.md)

#### Inherited Members

[EventArgs.Empty](https://learn.microsoft.com/dotnet/api/system.eventargs.empty), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Controls_ImageResizeDeltaEventArgs__ctor_Ink_Canvas_Controls_ImageResizeCorner_Vector_System_Boolean_"></a> ImageResizeDeltaEventArgs\(ImageResizeCorner, Vector, bool\)

```csharp
public ImageResizeDeltaEventArgs(ImageResizeCorner corner, Vector canvasDelta, bool lockAspect)
```

#### Parameters

`corner` [ImageResizeCorner](Ink\_Canvas.Controls.ImageResizeCorner.md)

`canvasDelta` Vector

`lockAspect` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### <a id="Ink_Canvas_Controls_ImageResizeDeltaEventArgs_CanvasDelta"></a> CanvasDelta

```csharp
public Vector CanvasDelta { get; }
```

#### Property Value

 Vector

### <a id="Ink_Canvas_Controls_ImageResizeDeltaEventArgs_Corner"></a> Corner

```csharp
public ImageResizeCorner Corner { get; }
```

#### Property Value

 [ImageResizeCorner](Ink\_Canvas.Controls.ImageResizeCorner.md)

### <a id="Ink_Canvas_Controls_ImageResizeDeltaEventArgs_LockAspectRatio"></a> LockAspectRatio

```csharp
public bool LockAspectRatio { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

