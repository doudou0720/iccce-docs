# <a id="Ink_Canvas_Controls_ImageSelectionOverlay"></a> Class ImageSelectionOverlay

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ImageSelectionOverlay : UserControl
```

#### Inheritance

UserControl ← 
[ImageSelectionOverlay](Ink\_Canvas.Controls.ImageSelectionOverlay.md)

## Constructors

### <a id="Ink_Canvas_Controls_ImageSelectionOverlay__ctor"></a> ImageSelectionOverlay\(\)

```csharp
public ImageSelectionOverlay()
```

## Properties

### <a id="Ink_Canvas_Controls_ImageSelectionOverlay_CoordinateSource"></a> CoordinateSource

```csharp
public IInputElement CoordinateSource { get; set; }
```

#### Property Value

 IInputElement

## Methods

### <a id="Ink_Canvas_Controls_ImageSelectionOverlay_UpdateFrame_Point_System_Double_System_Double_System_Double_"></a> UpdateFrame\(Point, double, double, double\)

Position overlay so its logical rect (width × height) is centered at centerCanvas,
then rotated by rotationAngleDegrees around that center to match the target element.

```csharp
public void UpdateFrame(Point centerCanvas, double width, double height, double rotationAngleDegrees)
```

#### Parameters

`centerCanvas` Point

`width` [double](https://learn.microsoft.com/dotnet/api/system.double)

`height` [double](https://learn.microsoft.com/dotnet/api/system.double)

`rotationAngleDegrees` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Controls_ImageSelectionOverlay_InteractionEnded"></a> InteractionEnded

```csharp
public event EventHandler InteractionEnded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### <a id="Ink_Canvas_Controls_ImageSelectionOverlay_InteractionStarted"></a> InteractionStarted

```csharp
public event EventHandler InteractionStarted
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### <a id="Ink_Canvas_Controls_ImageSelectionOverlay_MoveDelta"></a> MoveDelta

```csharp
public event EventHandler<ImageMoveDeltaEventArgs> MoveDelta
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[ImageMoveDeltaEventArgs](Ink\_Canvas.Controls.ImageMoveDeltaEventArgs.md)\>

### <a id="Ink_Canvas_Controls_ImageSelectionOverlay_ResizeDelta"></a> ResizeDelta

```csharp
public event EventHandler<ImageResizeDeltaEventArgs> ResizeDelta
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[ImageResizeDeltaEventArgs](Ink\_Canvas.Controls.ImageResizeDeltaEventArgs.md)\>

### <a id="Ink_Canvas_Controls_ImageSelectionOverlay_RotateDelta"></a> RotateDelta

```csharp
public event EventHandler<ImageRotateDeltaEventArgs> RotateDelta
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[ImageRotateDeltaEventArgs](Ink\_Canvas.Controls.ImageRotateDeltaEventArgs.md)\>

