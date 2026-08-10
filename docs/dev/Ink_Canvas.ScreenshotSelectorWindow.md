# <a id="Ink_Canvas_ScreenshotSelectorWindow"></a> Class ScreenshotSelectorWindow

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ScreenshotSelectorWindow : Window
```

#### Inheritance

Window ← 
[ScreenshotSelectorWindow](Ink\_Canvas.ScreenshotSelectorWindow.md)

## Constructors

### <a id="Ink_Canvas_ScreenshotSelectorWindow__ctor_BitmapSource_"></a> ScreenshotSelectorWindow\(BitmapSource\)

```csharp
public ScreenshotSelectorWindow(BitmapSource inkOverlayPreview = null)
```

#### Parameters

`inkOverlayPreview` BitmapSource

## Properties

### <a id="Ink_Canvas_ScreenshotSelectorWindow_CameraBitmapSource"></a> CameraBitmapSource

```csharp
public Media.Imaging.BitmapSource CameraBitmapSource { get; }
```

#### Property Value

 Media.Imaging.BitmapSource

### <a id="Ink_Canvas_ScreenshotSelectorWindow_CameraImage"></a> CameraImage

```csharp
public Bitmap CameraImage { get; }
```

#### Property Value

 Bitmap

### <a id="Ink_Canvas_ScreenshotSelectorWindow_IncludeInkInScreenshot"></a> IncludeInkInScreenshot

```csharp
public bool IncludeInkInScreenshot { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_ScreenshotSelectorWindow_SelectedArea"></a> SelectedArea

```csharp
public Rectangle? SelectedArea { get; }
```

#### Property Value

 [Rectangle](https://learn.microsoft.com/dotnet/api/system.drawing.rectangle)?

### <a id="Ink_Canvas_ScreenshotSelectorWindow_SelectedPath"></a> SelectedPath

```csharp
public List<Point> SelectedPath { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Point\>

### <a id="Ink_Canvas_ScreenshotSelectorWindow_ShouldAddToWhiteboard"></a> ShouldAddToWhiteboard

```csharp
public bool ShouldAddToWhiteboard { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_ScreenshotSelectorWindow_OnClosed_System_EventArgs_"></a> OnClosed\(EventArgs\)

```csharp
protected override void OnClosed(EventArgs e)
```

#### Parameters

`e` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

