# <a id="Ink_Canvas_Helpers_HandwritingRecognitionResult"></a> Class HandwritingRecognitionResult

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

一次手写识别批次的汇总结果。

```csharp
public sealed class HandwritingRecognitionResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HandwritingRecognitionResult](Ink\_Canvas.Helpers.HandwritingRecognitionResult.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_HandwritingRecognitionResult__ctor_System_Collections_Generic_IReadOnlyList_Ink_Canvas_Helpers_HandwritingWordSegment__"></a> HandwritingRecognitionResult\(IReadOnlyList<HandwritingWordSegment\>\)

```csharp
public HandwritingRecognitionResult(IReadOnlyList<HandwritingWordSegment> words)
```

#### Parameters

`words` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[HandwritingWordSegment](Ink\_Canvas.Helpers.HandwritingWordSegment.md)\>

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

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_HandwritingRecognitionResult_IsSuccess"></a> IsSuccess

```csharp
public bool IsSuccess { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_HandwritingRecognitionResult_Words"></a> Words

```csharp
public IReadOnlyList<HandwritingWordSegment> Words { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[HandwritingWordSegment](Ink\_Canvas.Helpers.HandwritingWordSegment.md)\>

