# <a id="Ink_Canvas_Models_CapturedImage"></a> Class CapturedImage

Namespace: [Ink\_Canvas.Models](Ink\_Canvas.Models.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class CapturedImage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CapturedImage](Ink\_Canvas.Models.CapturedImage.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Models_CapturedImage__ctor_BitmapImage_"></a> CapturedImage\(BitmapImage\)

使用指定的位图创建一个 CapturedImage 实例，并为其生成缩略图、空白笔划集合和时间戳。

```csharp
public CapturedImage(BitmapImage image)
```

#### Parameters

`image` BitmapImage

用于初始化的位图；不能为空。传入的图像将在内部确保为冻结状态以便安全跨线程使用。

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

当 <code class="paramref">image</code> 为 null 时抛出。

### <a id="Ink_Canvas_Models_CapturedImage__ctor_BitmapImage_System_String_"></a> CapturedImage\(BitmapImage, string\)

初始化 CapturedImage 实例：将指定图像冻结用于线程安全、生成缩略图并初始化空的笔迹集合，同时设置文件路径和时间戳（尝试从文件名提取时间戳，失败则使用当前时间）。

```csharp
public CapturedImage(BitmapImage image, string filePath)
```

#### Parameters

`image` BitmapImage

源图像，不能为空。

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

关联文件的路径，可能为 null。

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

当 <code class="paramref">image</code> 为 null 时抛出。

## Properties

### <a id="Ink_Canvas_Models_CapturedImage_FilePath"></a> FilePath

```csharp
public string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_CapturedImage_Image"></a> Image

```csharp
public BitmapImage Image { get; }
```

#### Property Value

 BitmapImage

### <a id="Ink_Canvas_Models_CapturedImage_Strokes"></a> Strokes

```csharp
public StrokeCollection Strokes { get; }
```

#### Property Value

 StrokeCollection

### <a id="Ink_Canvas_Models_CapturedImage_Thumbnail"></a> Thumbnail

```csharp
public BitmapImage Thumbnail { get; }
```

#### Property Value

 BitmapImage

### <a id="Ink_Canvas_Models_CapturedImage_Timestamp"></a> Timestamp

```csharp
public string Timestamp { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

