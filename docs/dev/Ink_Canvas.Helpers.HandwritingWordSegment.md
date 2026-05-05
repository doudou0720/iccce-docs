# <a id="Ink_Canvas_Helpers_HandwritingWordSegment"></a> Class HandwritingWordSegment

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

单个手写词片段的识别结果。

```csharp
public sealed class HandwritingWordSegment
```

#### Inheritance

object ← 
[HandwritingWordSegment](Ink\_Canvas.Helpers.HandwritingWordSegment.md)

## Constructors

### <a id="Ink_Canvas_Helpers_HandwritingWordSegment__ctor_System_String_IReadOnlyList_System_String__Rect_IReadOnlyList_Stroke__"></a> HandwritingWordSegment\(string, IReadOnlyList<string\>, Rect, IReadOnlyList<Stroke\>\)

```csharp
public HandwritingWordSegment(string text, IReadOnlyList<string> textCandidates, Rect boundingRectangle, IReadOnlyList<Stroke> strokes)
```

#### Parameters

`text` string

`textCandidates` IReadOnlyList<string\>

`boundingRectangle` Rect

`strokes` IReadOnlyList<Stroke\>

## Properties

### <a id="Ink_Canvas_Helpers_HandwritingWordSegment_BoundingRectangle"></a> BoundingRectangle

```csharp
public Rect BoundingRectangle { get; }
```

#### Property Value

 Rect

### <a id="Ink_Canvas_Helpers_HandwritingWordSegment_Strokes"></a> Strokes

```csharp
public IReadOnlyList<Stroke> Strokes { get; }
```

#### Property Value

 IReadOnlyList<Stroke\>

### <a id="Ink_Canvas_Helpers_HandwritingWordSegment_Text"></a> Text

```csharp
public string Text { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Helpers_HandwritingWordSegment_TextCandidates"></a> TextCandidates

```csharp
public IReadOnlyList<string> TextCandidates { get; }
```

#### Property Value

 IReadOnlyList<string\>

