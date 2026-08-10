# <a id="Ink_Canvas_Helpers_InkRecognizeHelper"></a> Class InkRecognizeHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

墨迹形状/手写识别的对外门面。
IACore 路径通过 IPC 调用 x86 辅助进程；WinRT 路径在主进程内直接调用。
主进程 (.NET 6 x64) 不再直接引用 IAWinFX 类型。

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

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_CorrectHandwritingStrokesUnifiedAsync_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> CorrectHandwritingStrokesUnifiedAsync\(StrokeCollection, ShapeRecognitionEngineMode\)

```csharp
public static Task<StrokeCollection> CorrectHandwritingStrokesUnifiedAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode)
```

#### Parameters

`strokes` StrokeCollection

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<StrokeCollection\>

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_CorrectHandwritingStrokesUnifiedAsync_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_System_Boolean_"></a> CorrectHandwritingStrokesUnifiedAsync\(StrokeCollection, ShapeRecognitionEngineMode, bool\)

```csharp
public static Task<StrokeCollection> CorrectHandwritingStrokesUnifiedAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode, bool applyHandwritingBeautify)
```

#### Parameters

`strokes` StrokeCollection

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

`applyHandwritingBeautify` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<StrokeCollection\>

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_IsContainShapeType_System_String_"></a> IsContainShapeType\(string\)

```csharp
public static bool IsContainShapeType(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_RecognizeHandwritingUnifiedAsync_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> RecognizeHandwritingUnifiedAsync\(StrokeCollection, ShapeRecognitionEngineMode\)

```csharp
public static Task<HandwritingRecognitionResult> RecognizeHandwritingUnifiedAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode)
```

#### Parameters

`strokes` StrokeCollection

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[HandwritingRecognitionResult](Ink\_Canvas.Helpers.HandwritingRecognitionResult.md)\>

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_RecognizeShapeUnified_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> RecognizeShapeUnified\(StrokeCollection, ShapeRecognitionEngineMode\)

```csharp
public static InkShapeRecognitionResult RecognizeShapeUnified(StrokeCollection strokes, ShapeRecognitionEngineMode mode)
```

#### Parameters

`strokes` StrokeCollection

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 [InkShapeRecognitionResult](Ink\_Canvas.Helpers.InkShapeRecognitionResult.md)

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_RecognizeShapeUnifiedAsync_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> RecognizeShapeUnifiedAsync\(StrokeCollection, ShapeRecognitionEngineMode\)

```csharp
public static Task<InkShapeRecognitionResult> RecognizeShapeUnifiedAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode)
```

#### Parameters

`strokes` StrokeCollection

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[InkShapeRecognitionResult](Ink\_Canvas.Helpers.InkShapeRecognitionResult.md)\>

### <a id="Ink_Canvas_Helpers_InkRecognizeHelper_WarmupShapeRecognition_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> WarmupShapeRecognition\(ShapeRecognitionEngineMode\)

```csharp
public static void WarmupShapeRecognition(ShapeRecognitionEngineMode mode)
```

#### Parameters

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

