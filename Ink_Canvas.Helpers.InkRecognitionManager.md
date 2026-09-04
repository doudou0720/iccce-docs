# <a id="Ink_Canvas_Helpers_InkRecognitionManager"></a> Class InkRecognitionManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class InkRecognitionManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InkRecognitionManager](Ink\_Canvas.Helpers.InkRecognitionManager.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

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

`applyHandwritingBeautify` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

为 true 时，将识别成功的词替换为手写风格字体的轮廓墨迹（见设置中的字体列表）。

`handwritingFontFamilyList` [string](https://learn.microsoft.com/dotnet/api/system.string)

逗号分隔的字体回退列表（WPF FontFamily）；null 时使用内置默认。

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<StrokeCollection\>

### <a id="Ink_Canvas_Helpers_InkRecognitionManager_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_InkRecognitionManager_GetSystemInfo"></a> GetSystemInfo\(\)

```csharp
public string GetSystemInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_InkRecognitionManager_IsValidShapeType_System_String_"></a> IsValidShapeType\(string\)

```csharp
public bool IsValidShapeType(string shapeName)
```

#### Parameters

`shapeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_InkRecognitionManager_RecognizeHandwritingAsync_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> RecognizeHandwritingAsync\(StrokeCollection, ShapeRecognitionEngineMode\)

手写体识别（需 Windows 10+ 及系统手写识别组件，或 IACore IPC 辅助进程）。返回分词候选与包围框，供剪贴板或插件使用。
文字识别引擎跟随形状识别引擎（传入的 <code class="paramref">mode</code>）：IACore 走 IPC 辅助进程（可注入 Factoid/WordList/WordMode
等上下文层，UWP WinRT 无法访问）；WinRT 在本进程跑 Windows.UI.Input.Inking.Analysis.InkAnalyzer。

```csharp
public Task<HandwritingRecognitionResult> RecognizeHandwritingAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode)
```

#### Parameters

`strokes` StrokeCollection

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[HandwritingRecognitionResult](Ink\_Canvas.Helpers.HandwritingRecognitionResult.md)\>

### <a id="Ink_Canvas_Helpers_InkRecognitionManager_RecognizeShapeAsync_StrokeCollection_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> RecognizeShapeAsync\(StrokeCollection, ShapeRecognitionEngineMode\)

```csharp
public Task<InkShapeRecognitionResult> RecognizeShapeAsync(StrokeCollection strokes, ShapeRecognitionEngineMode mode)
```

#### Parameters

`strokes` StrokeCollection

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[InkShapeRecognitionResult](Ink\_Canvas.Helpers.InkShapeRecognitionResult.md)\>

