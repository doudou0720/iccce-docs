# <a id="Ink_Canvas_Plugins_PluginShapeRecognitionResult"></a> Class PluginShapeRecognitionResult

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

与具体识别后端无关的形状识别结果。宿主识别到形状时，
<xref href="Ink_Canvas.Plugins.PluginShapeRecognitionResult.StrokesToRemove" data-throw-if-not-resolved="false"></xref> 指明应移除的原始笔画，插件可据此用标准形状替换。

```csharp
public sealed class PluginShapeRecognitionResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginShapeRecognitionResult](Ink\_Canvas.Plugins.PluginShapeRecognitionResult.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginShapeRecognitionResult_Centroid"></a> Centroid

形状中心点。

```csharp
public Point Centroid { get; set; }
```

#### Property Value

 [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

### <a id="Ink_Canvas_Plugins_PluginShapeRecognitionResult_HotPoints"></a> HotPoints

形状关键点。

```csharp
public PointCollection HotPoints { get; set; }
```

#### Property Value

 [PointCollection](https://learn.microsoft.com/dotnet/api/system.windows.media.pointcollection)

### <a id="Ink_Canvas_Plugins_PluginShapeRecognitionResult_IsSuccess"></a> IsSuccess

是否识别成功。

```csharp
public bool IsSuccess { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginShapeRecognitionResult_ShapeHeight"></a> ShapeHeight

形状高度（DIP）。

```csharp
public double ShapeHeight { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Plugins_PluginShapeRecognitionResult_ShapeName"></a> ShapeName

识别出的形状名，如 "Triangle"、"Circle"、"Rectangle"、"Arrow" 等。

```csharp
public string ShapeName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginShapeRecognitionResult_ShapeWidth"></a> ShapeWidth

形状宽度（DIP）。

```csharp
public double ShapeWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Plugins_PluginShapeRecognitionResult_StrokesToRemove"></a> StrokesToRemove

识别为形状、应从画布移除的原始笔画。

```csharp
public StrokeCollection StrokesToRemove { get; set; }
```

#### Property Value

 [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

