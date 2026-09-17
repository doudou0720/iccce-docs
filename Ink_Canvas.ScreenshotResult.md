# <a id="Ink_Canvas_ScreenshotResult"></a> Struct ScreenshotResult

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public struct ScreenshotResult
```

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_ScreenshotResult__ctor_System_Drawing_Rectangle_System_Collections_Generic_List_System_Windows_Point__Bitmap_BitmapSource_System_Boolean_System_Boolean_BitmapSource_"></a> ScreenshotResult\(Rectangle, List<Point\>, Bitmap, BitmapSource, bool, bool, BitmapSource\)

```csharp
public ScreenshotResult(Rectangle area, List<Point> path = null, Bitmap cameraImage = null, BitmapSource cameraBitmapSource = null, bool addToWhiteboard = false, bool includeInk = false, BitmapSource inkOverlayBitmapSource = null)
```

#### Parameters

`area` [Rectangle](https://learn.microsoft.com/dotnet/api/system.drawing.rectangle)

`path` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Point\>

`cameraImage` Bitmap

`cameraBitmapSource` BitmapSource

`addToWhiteboard` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`includeInk` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`inkOverlayBitmapSource` BitmapSource

## Fields

### <a id="Ink_Canvas_ScreenshotResult_AddToWhiteboard"></a> AddToWhiteboard

```csharp
public bool AddToWhiteboard
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_ScreenshotResult_Area"></a> Area

```csharp
public Rectangle Area
```

#### Field Value

 [Rectangle](https://learn.microsoft.com/dotnet/api/system.drawing.rectangle)

### <a id="Ink_Canvas_ScreenshotResult_CameraBitmapSource"></a> CameraBitmapSource

```csharp
public BitmapSource CameraBitmapSource
```

#### Field Value

 BitmapSource

### <a id="Ink_Canvas_ScreenshotResult_CameraImage"></a> CameraImage

```csharp
public Bitmap CameraImage
```

#### Field Value

 Bitmap

### <a id="Ink_Canvas_ScreenshotResult_IncludeInk"></a> IncludeInk

```csharp
public bool IncludeInk
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_ScreenshotResult_InkOverlayBitmapSource"></a> InkOverlayBitmapSource

```csharp
public BitmapSource InkOverlayBitmapSource
```

#### Field Value

 BitmapSource

### <a id="Ink_Canvas_ScreenshotResult_Path"></a> Path

```csharp
public List<Point> Path
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Point\>

