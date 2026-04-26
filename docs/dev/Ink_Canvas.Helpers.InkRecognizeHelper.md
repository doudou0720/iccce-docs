# <a id="Ink_Canvas_Helpers_InkRecognizeHelper"></a> Class InkRecognizeHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class InkRecognizeHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InkRecognizeHelper](Ink\_Canvas.Helpers.InkRecognizeHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_CorrectHandwritingStrokesUnifiedAsync_System_Windows_Ink_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> CorrectHandwritingStrokesUnifiedAsync\(StrokeCollection, ShapeRecognitionEngineMode\)

WinRT 下将识别成功的词替换为手写体字形墨迹；是否应用由设置「WinRT 识别转手写体字形」控制。

```csharp
public static Task<StrokeCollection> CorrectHandwritingStrokesUnifiedAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode)
```

#### Parameters

`strokes` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)\>

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_CorrectHandwritingStrokesUnifiedAsync_System_Windows_Ink_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_System_Boolean_"></a> CorrectHandwritingStrokesUnifiedAsync\(StrokeCollection, ShapeRecognitionEngineMode, bool\)

显式指定是否应用手写体字形替换（忽略开关）；字体仍从设置读取。

```csharp
public static Task<StrokeCollection> CorrectHandwritingStrokesUnifiedAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode, bool applyHandwritingBeautify)
```

#### Parameters

`strokes` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

`applyHandwritingBeautify` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)\>

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_IsContainShapeType_System_String_"></a> IsContainShapeType\(string\)

```csharp
public static bool IsContainShapeType(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_RecognizeHandwritingUnifiedAsync_System_Windows_Ink_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> RecognizeHandwritingUnifiedAsync\(StrokeCollection, ShapeRecognitionEngineMode\)

WinRT 手写识别（Windows 10+）。

```csharp
public static Task<HandwritingRecognitionResult> RecognizeHandwritingUnifiedAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode)
```

#### Parameters

`strokes` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[HandwritingRecognitionResult](Ink\_Canvas.Helpers.HandwritingRecognitionResult.md)\>

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_RecognizeShape_System_Windows_Ink_StrokeCollection_"></a> RecognizeShape\(StrokeCollection\)

兼容旧调用：等价于 <xref href="Ink_Canvas.Helpers.InkRecognizeHelper.RecognizeShapeIACore(System.Windows.Ink.StrokeCollection)" data-throw-if-not-resolved="false"></xref>。

```csharp
public static ShapeRecognizeResult RecognizeShape(StrokeCollection strokes)
```

#### Parameters

`strokes` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

#### Returns

 [ShapeRecognizeResult](Ink\_Canvas.Helpers.ShapeRecognizeResult.md)

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_RecognizeShapeIACore_System_Windows_Ink_StrokeCollection_"></a> RecognizeShapeIACore\(StrokeCollection\)

IACore / IAWinFX 形状识别（典型用于 32 位进程）。

```csharp
public static ShapeRecognizeResult RecognizeShapeIACore(StrokeCollection strokes)
```

#### Parameters

`strokes` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

#### Returns

 [ShapeRecognizeResult](Ink\_Canvas.Helpers.ShapeRecognizeResult.md)

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_RecognizeShapeUnified_System_Windows_Ink_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> RecognizeShapeUnified\(StrokeCollection, ShapeRecognitionEngineMode\)

按设置选择 WinRT（<xref href="Ink_Canvas.Helpers.InkRecognitionManager" data-throw-if-not-resolved="false"></xref>）或 IACore；WinRT 请用 <xref href="Ink_Canvas.Helpers.InkRecognizeHelper.RecognizeShapeUnifiedAsync(System.Windows.Ink.StrokeCollection%2cInk_Canvas.Helpers.ShapeRecognitionEngineMode)" data-throw-if-not-resolved="false"></xref>。

```csharp
public static InkShapeRecognitionResult RecognizeShapeUnified(StrokeCollection strokes, ShapeRecognitionEngineMode mode)
```

#### Parameters

`strokes` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 [InkShapeRecognitionResult](Ink\_Canvas.Helpers.InkShapeRecognitionResult.md)

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_RecognizeShapeUnifiedAsync_System_Windows_Ink_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> RecognizeShapeUnifiedAsync\(StrokeCollection, ShapeRecognitionEngineMode\)

与 CE 反编译版 <code>InkRecognitionManager.RecognizeShapeAsync</code> 对齐的统一入口。

```csharp
public static Task<InkShapeRecognitionResult> RecognizeShapeUnifiedAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode)
```

#### Parameters

`strokes` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[InkShapeRecognitionResult](Ink\_Canvas.Helpers.InkShapeRecognitionResult.md)\>

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_WarmupShapeRecognition_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> WarmupShapeRecognition\(ShapeRecognitionEngineMode\)

```csharp
public static void WarmupShapeRecognition(ShapeRecognitionEngineMode mode)
```

#### Parameters

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

