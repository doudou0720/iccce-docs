# <a id="Ink_Canvas_Helpers_IpcIACoreClient"></a> Class IpcIACoreClient

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class IpcIACoreClient : IDisposable
```

#### Inheritance

IDisposable ← 
[IpcIACoreClient](Ink\_Canvas.Helpers.IpcIACoreClient.md)

## Properties

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_Instance"></a> Instance

```csharp
public static IpcIACoreClient Instance { get; }
```

#### Property Value

 [IpcIACoreClient](Ink\_Canvas.Helpers.IpcIACoreClient.md)

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_IsAvailable"></a> IsAvailable

```csharp
public bool IsAvailable { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_IsHelperExecutableAvailable"></a> IsHelperExecutableAvailable

```csharp
public bool IsHelperExecutableAvailable { get; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_Recognize_StrokeCollection_"></a> Recognize\(StrokeCollection\)

```csharp
public InkShapeRecognitionResult Recognize(StrokeCollection strokes)
```

#### Parameters

`strokes` StrokeCollection

#### Returns

 [InkShapeRecognitionResult](Ink\_Canvas.Helpers.InkShapeRecognitionResult.md)

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_RecognizeText_StrokeCollection_Ink_Canvas_Helpers_IacoreTextHint_"></a> RecognizeText\(StrokeCollection, IacoreTextHint\)

通过 IPC 辅助进程执行 IACore 文字识别（IAWinFX InkAnalyzer + AnalysisHintNode）。
返回分词文本/候选/包围框/笔画索引；辅助进程不可用或失败时返回空结果（调用方据此回落 WinRT）。

```csharp
public HandwritingRecognitionResult RecognizeText(StrokeCollection strokes, IacoreTextHint hint = null)
```

#### Parameters

`strokes` StrokeCollection

`hint` [IacoreTextHint](Ink\_Canvas.Helpers.IacoreTextHint.md)

上下文提示（Factoid/WordList/WordMode/CoerceToFactoid/Hint 区域）；传 null 表示无提示。

#### Returns

 [HandwritingRecognitionResult](Ink\_Canvas.Helpers.HandwritingRecognitionResult.md)

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_Start"></a> Start\(\)

```csharp
public bool Start()
```

#### Returns

 bool

