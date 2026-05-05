# <a id="Ink_Canvas_Helpers_InkRecognitionManager"></a> Class InkRecognitionManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class InkRecognitionManager
```

#### Inheritance

object ← 
[InkRecognitionManager](Ink\_Canvas.Helpers.InkRecognitionManager.md)

## Properties

### <a id="Ink_Canvas_Helpers_InkRecognitionManager_Instance"></a> Instance

```csharp
public static InkRecognitionManager Instance { get; }
```

#### Property Value

 [InkRecognitionManager](Ink\_Canvas.Helpers.InkRecognitionManager.md)

## Methods

### <a id="Ink_Canvas_Helpers_InkRecognitionManager_CorrectInkAsync_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_System_Boolean_System_String_"></a> CorrectInkAsync\(StrokeCollection, ShapeRecognitionEngineMode, bool, string\)

```csharp
public Task<StrokeCollection> CorrectInkAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode, bool applyHandwritingBeautify = false, string handwritingFontFamilyList = null)
```

#### Parameters

`strokes` StrokeCollection

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

`applyHandwritingBeautify` bool

为 true 且走 WinRT 时，将识别成功的词替换为手写风格字体的轮廓墨迹（见设置中的字体列表）。

`handwritingFontFamilyList` string

逗号分隔的字体回退列表（WPF FontFamily）；null 时使用内置默认。

#### Returns

 Task<StrokeCollection\>

### <a id="Ink_Canvas_Helpers_InkRecognitionManager_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_InkRecognitionManager_GetSystemInfo"></a> GetSystemInfo\(\)

```csharp
public string GetSystemInfo()
```

#### Returns

 string

### <a id="Ink_Canvas_Helpers_InkRecognitionManager_IsValidShapeType_System_String_"></a> IsValidShapeType\(string\)

```csharp
public bool IsValidShapeType(string shapeName)
```

#### Parameters

`shapeName` string

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_InkRecognitionManager_RecognizeHandwritingAsync_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> RecognizeHandwritingAsync\(StrokeCollection, ShapeRecognitionEngineMode\)

WinRT 手写体识别（需 Windows 10+ 及系统手写识别组件）。返回分词候选与包围框，供剪贴板或插件使用。

```csharp
public Task<HandwritingRecognitionResult> RecognizeHandwritingAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode)
```

#### Parameters

`strokes` StrokeCollection

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 Task<[HandwritingRecognitionResult](Ink\_Canvas.Helpers.HandwritingRecognitionResult.md)\>

### <a id="Ink_Canvas_Helpers_InkRecognitionManager_RecognizeShapeAsync_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> RecognizeShapeAsync\(StrokeCollection, ShapeRecognitionEngineMode\)

```csharp
public Task<InkShapeRecognitionResult> RecognizeShapeAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode)
```

#### Parameters

`strokes` StrokeCollection

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 Task<[InkShapeRecognitionResult](Ink\_Canvas.Helpers.InkShapeRecognitionResult.md)\>

