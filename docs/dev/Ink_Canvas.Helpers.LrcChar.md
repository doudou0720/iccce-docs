# <a id="Ink_Canvas_Helpers_LrcChar"></a> Class LrcChar

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Represents a single timed character within a lyric line.
Used for per-character highlight animation (already-sung / pending chars).

```csharp
public class LrcChar
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LrcChar](Ink\_Canvas.Helpers.LrcChar.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Helpers_LrcChar_Duration"></a> Duration

Duration the character is held; <code>null</code> means the line end is used.

```csharp
public TimeSpan? Duration { get; set; }
```

#### Property Value

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

### <a id="Ink_Canvas_Helpers_LrcChar_StartOffset"></a> StartOffset

Offset from the line start when this character starts being sung.

```csharp
public TimeSpan StartOffset { get; set; }
```

#### Property Value

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

### <a id="Ink_Canvas_Helpers_LrcChar_Text"></a> Text

Character glyph (may be a single Han character, Latin letter, or punctuation).

```csharp
public string Text { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

