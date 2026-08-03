# <a id="Ink_Canvas_Helpers_LrcLine"></a> Class LrcLine

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Represents a single lyric line with timing information.

```csharp
public class LrcLine
```

#### Inheritance

object ← 
[LrcLine](Ink\_Canvas.Helpers.LrcLine.md)

## Properties

### <a id="Ink_Canvas_Helpers_LrcLine_Chars"></a> Chars

Per-character timing inside this line. Empty when the LRC only provides line-level
timestamps; an evenly-distributed fallback can be computed on demand.

```csharp
public List<LrcChar> Chars { get; set; }
```

#### Property Value

 List<[LrcChar](Ink\_Canvas.Helpers.LrcChar.md)\>

### <a id="Ink_Canvas_Helpers_LrcLine_Text"></a> Text

Primary lyric text.

```csharp
public string Text { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Helpers_LrcLine_Time"></a> Time

Timestamp when this line should be displayed.

```csharp
public TimeSpan Time { get; set; }
```

#### Property Value

 TimeSpan

### <a id="Ink_Canvas_Helpers_LrcLine_Translation"></a> Translation

Translated lyric text (if available).

```csharp
public string Translation { get; set; }
```

#### Property Value

 string

