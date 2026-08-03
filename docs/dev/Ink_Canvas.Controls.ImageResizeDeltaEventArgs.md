# <a id="Ink_Canvas_Controls_ImageResizeDeltaEventArgs"></a> Class ImageResizeDeltaEventArgs

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ImageResizeDeltaEventArgs : EventArgs
```

#### Inheritance

EventArgs ← 
[ImageResizeDeltaEventArgs](Ink\_Canvas.Controls.ImageResizeDeltaEventArgs.md)

## Constructors

### <a id="Ink_Canvas_Controls_ImageResizeDeltaEventArgs__ctor_Ink_Canvas_Controls_ImageResizeCorner_Vector_System_Boolean_"></a> ImageResizeDeltaEventArgs\(ImageResizeCorner, Vector, bool\)

```csharp
public ImageResizeDeltaEventArgs(ImageResizeCorner corner, Vector canvasDelta, bool lockAspect)
```

#### Parameters

`corner` [ImageResizeCorner](Ink\_Canvas.Controls.ImageResizeCorner.md)

`canvasDelta` Vector

`lockAspect` bool

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

 bool

