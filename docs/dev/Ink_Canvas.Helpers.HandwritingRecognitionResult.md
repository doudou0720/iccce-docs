# <a id="Ink_Canvas_Helpers_HandwritingRecognitionResult"></a> Class HandwritingRecognitionResult

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

一次手写识别批次的汇总结果。

```csharp
public sealed class HandwritingRecognitionResult
```

#### Inheritance

object ← 
[HandwritingRecognitionResult](Ink\_Canvas.Helpers.HandwritingRecognitionResult.md)

## Constructors

### <a id="Ink_Canvas_Helpers_HandwritingRecognitionResult__ctor_IReadOnlyList_Ink_Canvas_Helpers_HandwritingWordSegment__"></a> HandwritingRecognitionResult\(IReadOnlyList<HandwritingWordSegment\>\)

```csharp
public HandwritingRecognitionResult(IReadOnlyList<HandwritingWordSegment> words)
```

#### Parameters

`words` IReadOnlyList<[HandwritingWordSegment](Ink\_Canvas.Helpers.HandwritingWordSegment.md)\>

## Fields

### <a id="Ink_Canvas_Helpers_HandwritingRecognitionResult_Empty"></a> Empty

```csharp
public static readonly HandwritingRecognitionResult Empty
```

#### Field Value

 [HandwritingRecognitionResult](Ink\_Canvas.Helpers.HandwritingRecognitionResult.md)

## Properties

### <a id="Ink_Canvas_Helpers_HandwritingRecognitionResult_CombinedText"></a> CombinedText

```csharp
public string CombinedText { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Helpers_HandwritingRecognitionResult_IsSuccess"></a> IsSuccess

```csharp
public bool IsSuccess { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_HandwritingRecognitionResult_Words"></a> Words

```csharp
public IReadOnlyList<HandwritingWordSegment> Words { get; }
```

#### Property Value

 IReadOnlyList<[HandwritingWordSegment](Ink\_Canvas.Helpers.HandwritingWordSegment.md)\>

