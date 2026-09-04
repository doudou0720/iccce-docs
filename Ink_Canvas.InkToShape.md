# <a id="Ink_Canvas_InkToShape"></a> Class InkToShape

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class InkToShape
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InkToShape](Ink\_Canvas.InkToShape.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_InkToShape_EnableWinRtHandwritingStrokeBeautify"></a> EnableWinRtHandwritingStrokeBeautify

```csharp
public bool EnableWinRtHandwritingStrokeBeautify { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_InkToShape_HandwritingBeautifyDebounceMs"></a> HandwritingBeautifyDebounceMs

收笔后延迟识别的毫秒数（300-5000，默认 2000），多笔一字时等用户写完再识别。

```csharp
public int HandwritingBeautifyDebounceMs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_InkToShape_HandwritingCorrectionFontFamily"></a> HandwritingCorrectionFontFamily

```csharp
public string HandwritingCorrectionFontFamily { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_InkToShape_HandwritingLanguageOverrideLcid"></a> HandwritingLanguageOverrideLcid

手写识别器语言覆盖 LCID。0=跟随系统；其余值见 HandwritingRecognitionTuning 支持。

```csharp
public int HandwritingLanguageOverrideLcid { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_InkToShape_IsInkToShapeEnabled"></a> IsInkToShapeEnabled

```csharp
public bool IsInkToShapeEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_InkToShape_IsInkToShapeNoFakePressureRectangle"></a> IsInkToShapeNoFakePressureRectangle

```csharp
public bool IsInkToShapeNoFakePressureRectangle { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_InkToShape_IsInkToShapeNoFakePressureTriangle"></a> IsInkToShapeNoFakePressureTriangle

```csharp
public bool IsInkToShapeNoFakePressureTriangle { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_InkToShape_IsInkToShapeRectangle"></a> IsInkToShapeRectangle

```csharp
public bool IsInkToShapeRectangle { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_InkToShape_IsInkToShapeRounded"></a> IsInkToShapeRounded

```csharp
public bool IsInkToShapeRounded { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_InkToShape_IsInkToShapeTriangle"></a> IsInkToShapeTriangle

```csharp
public bool IsInkToShapeTriangle { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_InkToShape_LineNormalizationThreshold"></a> LineNormalizationThreshold

```csharp
public double LineNormalizationThreshold { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_InkToShape_LineStraightenSensitivity"></a> LineStraightenSensitivity

```csharp
public double LineStraightenSensitivity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_InkToShape_ShapeRecognitionEngine"></a> ShapeRecognitionEngine

```csharp
public int ShapeRecognitionEngine { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

