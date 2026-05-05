# <a id="Ink_Canvas_Helpers_InkShapeRecognitionResult"></a> Class InkShapeRecognitionResult

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

与具体识别后端无关的形状识别结果，供统一纠正模块消费。

```csharp
public sealed class InkShapeRecognitionResult
```

#### Inheritance

object ← 
[InkShapeRecognitionResult](Ink\_Canvas.Helpers.InkShapeRecognitionResult.md)

## Constructors

### <a id="Ink_Canvas_Helpers_InkShapeRecognitionResult__ctor_System_String_Point_PointCollection_System_Double_System_Double_StrokeCollection_"></a> InkShapeRecognitionResult\(string, Point, PointCollection, double, double, StrokeCollection\)

```csharp
public InkShapeRecognitionResult(string shapeName, Point centroid, PointCollection hotPoints, double shapeWidth, double shapeHeight, StrokeCollection strokesToRemove)
```

#### Parameters

`shapeName` string

`centroid` Point

`hotPoints` PointCollection

`shapeWidth` double

`shapeHeight` double

`strokesToRemove` StrokeCollection

## Fields

### <a id="Ink_Canvas_Helpers_InkShapeRecognitionResult_Empty"></a> Empty

```csharp
public static readonly InkShapeRecognitionResult Empty
```

#### Field Value

 [InkShapeRecognitionResult](Ink\_Canvas.Helpers.InkShapeRecognitionResult.md)

## Properties

### <a id="Ink_Canvas_Helpers_InkShapeRecognitionResult_Centroid"></a> Centroid

```csharp
public Point Centroid { get; set; }
```

#### Property Value

 Point

### <a id="Ink_Canvas_Helpers_InkShapeRecognitionResult_HotPoints"></a> HotPoints

```csharp
public PointCollection HotPoints { get; }
```

#### Property Value

 PointCollection

### <a id="Ink_Canvas_Helpers_InkShapeRecognitionResult_IsSuccess"></a> IsSuccess

```csharp
public bool IsSuccess { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_InkShapeRecognitionResult_ShapeHeight"></a> ShapeHeight

```csharp
public double ShapeHeight { get; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Helpers_InkShapeRecognitionResult_ShapeName"></a> ShapeName

```csharp
public string ShapeName { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Helpers_InkShapeRecognitionResult_ShapeWidth"></a> ShapeWidth

```csharp
public double ShapeWidth { get; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Helpers_InkShapeRecognitionResult_StrokesToRemove"></a> StrokesToRemove

```csharp
public StrokeCollection StrokesToRemove { get; }
```

#### Property Value

 StrokeCollection

