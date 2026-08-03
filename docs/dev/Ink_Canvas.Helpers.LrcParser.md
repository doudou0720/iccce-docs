# <a id="Ink_Canvas_Helpers_LrcParser"></a> Class LrcParser

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Parses standard LRC and translated LRC files.

```csharp
public static class LrcParser
```

#### Inheritance

object ← 
[LrcParser](Ink\_Canvas.Helpers.LrcParser.md)

## Methods

### <a id="Ink_Canvas_Helpers_LrcParser_EnsureCharTimings_Ink_Canvas_Helpers_LrcLine_System_Nullable_TimeSpan__TimeSpan_"></a> EnsureCharTimings\(LrcLine, TimeSpan?, TimeSpan\)

Returns per-character timings for a line, evenly distributing across the next line's
start (or <code class="paramref">defaultDuration</code> if no neighbour is available). Use when the
LRC body itself does not provide inline "&lt;...&gt;" timestamps.

```csharp
public static void EnsureCharTimings(LrcLine line, TimeSpan? nextLineStart, TimeSpan defaultDuration)
```

#### Parameters

`line` [LrcLine](Ink\_Canvas.Helpers.LrcLine.md)

`nextLineStart` TimeSpan?

`defaultDuration` TimeSpan

### <a id="Ink_Canvas_Helpers_LrcParser_GetCurrentLineIndex_List_Ink_Canvas_Helpers_LrcLine__TimeSpan_"></a> GetCurrentLineIndex\(List<LrcLine\>, TimeSpan\)

Gets the index of the current lyric line for the given playback position.
Returns -1 if no line matches.

```csharp
public static int GetCurrentLineIndex(List<LrcLine> lines, TimeSpan position)
```

#### Parameters

`lines` List<[LrcLine](Ink\_Canvas.Helpers.LrcLine.md)\>

`position` TimeSpan

#### Returns

 int

### <a id="Ink_Canvas_Helpers_LrcParser_GetLineProgress_Ink_Canvas_Helpers_LrcLine_TimeSpan_"></a> GetLineProgress\(LrcLine, TimeSpan\)

Computes the per-character highlight progress for the current playback position.
Returns a value in [0, 1] where 0 means "no chars sung yet" and 1 means "all chars sung".
Useful for animating a sweep gradient inside the active line.

```csharp
public static double GetLineProgress(LrcLine line, TimeSpan position)
```

#### Parameters

`line` [LrcLine](Ink\_Canvas.Helpers.LrcLine.md)

`position` TimeSpan

#### Returns

 double

### <a id="Ink_Canvas_Helpers_LrcParser_ParseCharTimings_System_String_"></a> ParseCharTimings\(string\)

Parses inline per-character timestamps embedded in the lyric body.
Expected format: literal text with optional "&lt;mm:ss.xx&gt;" tags interleaved before each
character/segment, e.g. "&lt;00:00.50&gt;你&lt;00:01.20&gt;好 世&lt;00:01.80&gt;界".
Returns an empty list when the body does not contain any inline timestamp tags
(caller can then fall back to evenly-distributed timings).

```csharp
public static List<LrcChar> ParseCharTimings(string body)
```

#### Parameters

`body` string

#### Returns

 List<[LrcChar](Ink\_Canvas.Helpers.LrcChar.md)\>

### <a id="Ink_Canvas_Helpers_LrcParser_ParseFile_System_String_"></a> ParseFile\(string\)

Parses an LRC file from the given path.
Returns null if the file does not exist or cannot be parsed.

```csharp
public static LrcData ParseFile(string lrcPath)
```

#### Parameters

`lrcPath` string

#### Returns

 [LrcData](Ink\_Canvas.Helpers.LrcData.md)

### <a id="Ink_Canvas_Helpers_LrcParser_ParseLines_System_String___"></a> ParseLines\(string\[\]\)

Parses LRC content from an array of lines.
Uses Dictionary to ensure first-encounter-is-main, second-encounter-is-translation.

```csharp
public static LrcData ParseLines(string[] lines)
```

#### Parameters

`lines` string\[\]

#### Returns

 [LrcData](Ink\_Canvas.Helpers.LrcData.md)

