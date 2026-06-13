# <a id="Ink_Canvas_Helpers_LrcParser"></a> Class LrcParser

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Parses standard LRC and translated LRC files.

```csharp
public static class LrcParser
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LrcParser](Ink\_Canvas.Helpers.LrcParser.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_LrcParser_GetCurrentLineIndex_System_Collections_Generic_List_Ink_Canvas_Helpers_LrcLine__System_TimeSpan_"></a> GetCurrentLineIndex\(List<LrcLine\>, TimeSpan\)

Gets the index of the current lyric line for the given playback position.
Returns -1 if no line matches.

```csharp
public static int GetCurrentLineIndex(List<LrcLine> lines, TimeSpan position)
```

#### Parameters

`lines` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LrcLine](Ink\_Canvas.Helpers.LrcLine.md)\>

`position` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_LrcParser_ParseFile_System_String_"></a> ParseFile\(string\)

Parses an LRC file from the given path.
Returns null if the file does not exist or cannot be parsed.

```csharp
public static LrcData ParseFile(string lrcPath)
```

#### Parameters

`lrcPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [LrcData](Ink\_Canvas.Helpers.LrcData.md)

### <a id="Ink_Canvas_Helpers_LrcParser_ParseLines_System_String___"></a> ParseLines\(string\[\]\)

Parses LRC content from an array of lines.
Uses Dictionary to ensure first-encounter-is-main, second-encounter-is-translation.

```csharp
public static LrcData ParseLines(string[] lines)
```

#### Parameters

`lines` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [LrcData](Ink\_Canvas.Helpers.LrcData.md)

