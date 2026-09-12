# <a id="Ink_Canvas_Plugins_PluginHandwritingWord"></a> Class PluginHandwritingWord

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

手写识别结果中的单个分词：候选文本与包围框。

```csharp
public sealed class PluginHandwritingWord
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginHandwritingWord](Ink\_Canvas.Plugins.PluginHandwritingWord.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginHandwritingWord_BoundingRectangle"></a> BoundingRectangle

该词在画布上的包围框。

```csharp
public Rect BoundingRectangle { get; set; }
```

#### Property Value

 [Rect](https://learn.microsoft.com/dotnet/api/system.windows.rect)

### <a id="Ink_Canvas_Plugins_PluginHandwritingWord_TextCandidates"></a> TextCandidates

候选文本，按置信度降序。

```csharp
public List<string> TextCandidates { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

