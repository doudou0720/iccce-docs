# <a id="Ink_Canvas_Helpers_IpcIACoreClient"></a> Class IpcIACoreClient

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class IpcIACoreClient : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IpcIACoreClient](Ink\_Canvas.Helpers.IpcIACoreClient.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_IsHelperExecutableAvailable"></a> IsHelperExecutableAvailable

```csharp
public bool IsHelperExecutableAvailable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_Recognize_System_Windows_Ink_StrokeCollection_"></a> Recognize\(StrokeCollection\)

```csharp
public InkShapeRecognitionResult Recognize(StrokeCollection strokes)
```

#### Parameters

`strokes` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

#### Returns

 [InkShapeRecognitionResult](Ink\_Canvas.Helpers.InkShapeRecognitionResult.md)

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_RecognizeText_System_Windows_Ink_StrokeCollection_Ink_Canvas_Helpers_IacoreTextHint_"></a> RecognizeText\(StrokeCollection, IacoreTextHint\)

通过 IPC 辅助进程执行 IACore 文字识别（IAWinFX InkAnalyzer + AnalysisHintNode）。
返回分词文本/候选/包围框/笔画索引；辅助进程不可用或失败时返回空结果（调用方据此回落 WinRT）。

```csharp
public HandwritingRecognitionResult RecognizeText(StrokeCollection strokes, IacoreTextHint hint = null)
```

#### Parameters

`strokes` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

`hint` [IacoreTextHint](Ink\_Canvas.Helpers.IacoreTextHint.md)

上下文提示（Factoid/WordList/WordMode/CoerceToFactoid/Hint 区域）；传 null 表示无提示。

#### Returns

 [HandwritingRecognitionResult](Ink\_Canvas.Helpers.HandwritingRecognitionResult.md)

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_Start"></a> Start\(\)

```csharp
public bool Start()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

