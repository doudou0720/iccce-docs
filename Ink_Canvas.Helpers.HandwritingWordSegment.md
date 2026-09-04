# <a id="Ink_Canvas_Helpers_HandwritingWordSegment"></a> Class HandwritingWordSegment

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

单个手写词片段的识别结果。

```csharp
public sealed class HandwritingWordSegment
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HandwritingWordSegment](Ink\_Canvas.Helpers.HandwritingWordSegment.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_HandwritingWordSegment__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__Rect_System_Collections_Generic_IReadOnlyList_Stroke__"></a> HandwritingWordSegment\(string, IReadOnlyList<string\>, Rect, IReadOnlyList<Stroke\>\)

```csharp
public HandwritingWordSegment(string text, IReadOnlyList<string> textCandidates, Rect boundingRectangle, IReadOnlyList<Stroke> strokes)
```

#### Parameters

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

`textCandidates` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`boundingRectangle` Rect

`strokes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<Stroke\>

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

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<Stroke\>

### <a id="Ink_Canvas_Helpers_HandwritingWordSegment_Text"></a> Text

```csharp
public string Text { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_HandwritingWordSegment_TextCandidates"></a> TextCandidates

```csharp
public IReadOnlyList<string> TextCandidates { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

