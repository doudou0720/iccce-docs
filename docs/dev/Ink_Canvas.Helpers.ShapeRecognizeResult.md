# <a id="Ink_Canvas_Helpers_ShapeRecognizeResult"></a> Class ShapeRecognizeResult

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ShapeRecognizeResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ShapeRecognizeResult](Ink\_Canvas.Helpers.ShapeRecognizeResult.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_ShapeRecognizeResult__ctor_System_Windows_Point_System_Windows_Media_PointCollection_System_Windows_Ink_AnalysisAlternate_System_Windows_Ink_InkDrawingNode_"></a> ShapeRecognizeResult\(Point, PointCollection, AnalysisAlternate, InkDrawingNode\)

```csharp
public ShapeRecognizeResult(Point centroid, PointCollection hotPoints, AnalysisAlternate analysisAlternate, InkDrawingNode node)
```

#### Parameters

`centroid` [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

`hotPoints` [PointCollection](https://learn.microsoft.com/dotnet/api/system.windows.media.pointcollection)

`analysisAlternate` AnalysisAlternate

`node` InkDrawingNode

## Properties

### <a id="Ink_Canvas_Helpers_ShapeRecognizeResult_AnalysisAlternate"></a> AnalysisAlternate

```csharp
public AnalysisAlternate AnalysisAlternate { get; }
```

#### Property Value

 AnalysisAlternate

### <a id="Ink_Canvas_Helpers_ShapeRecognizeResult_Centroid"></a> Centroid

```csharp
public Point Centroid { get; set; }
```

#### Property Value

 [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

### <a id="Ink_Canvas_Helpers_ShapeRecognizeResult_HotPoints"></a> HotPoints

```csharp
public PointCollection HotPoints { get; }
```

#### Property Value

 [PointCollection](https://learn.microsoft.com/dotnet/api/system.windows.media.pointcollection)

### <a id="Ink_Canvas_Helpers_ShapeRecognizeResult_InkDrawingNode"></a> InkDrawingNode

```csharp
public InkDrawingNode InkDrawingNode { get; }
```

#### Property Value

 InkDrawingNode

