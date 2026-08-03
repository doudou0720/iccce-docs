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
public System.Windows.Media.Imaging.BitmapSource CameraBitmapSource { get; }
```

#### Property Value

 System.Windows.Media.Imaging.BitmapSource

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

 bool

### <a id="Ink_Canvas_ScreenshotSelectorWindow_SelectedArea"></a> SelectedArea

```csharp
public System.Drawing.Rectangle? SelectedArea { get; }
```

#### Property Value

 System.Drawing.Rectangle?

### <a id="Ink_Canvas_ScreenshotSelectorWindow_SelectedPath"></a> SelectedPath

```csharp
public List<System.Windows.Point> SelectedPath { get; }
```

#### Property Value

 List<System.Windows.Point\>

### <a id="Ink_Canvas_ScreenshotSelectorWindow_ShouldAddToWhiteboard"></a> ShouldAddToWhiteboard

```csharp
public bool ShouldAddToWhiteboard { get; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_ScreenshotSelectorWindow_OnClosed_EventArgs_"></a> OnClosed\(EventArgs\)

```csharp
protected override void OnClosed(EventArgs e)
```

#### Parameters

`e` EventArgs

