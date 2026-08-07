# <a id="Ink_Canvas_Plugins_PluginHandwritingWord"></a> Class PluginHandwritingWord

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

手写识别结果中的单个分词：候选文本与包围框。

```csharp
public sealed class PluginHandwritingWord
```

#### Inheritance

object ← 
[PluginHandwritingWord](Ink\_Canvas.Plugins.PluginHandwritingWord.md)

## Properties

### <a id="Ink_Canvas_Plugins_PluginHandwritingWord_BoundingRectangle"></a> BoundingRectangle

该词在画布上的包围框。

```csharp
public Rect BoundingRectangle { get; set; }
```

#### Property Value

 Rect

### <a id="Ink_Canvas_Plugins_PluginHandwritingWord_TextCandidates"></a> TextCandidates

候选文本，按置信度降序。

```csharp
public List<string> TextCandidates { get; set; }
```

#### Property Value

 List<string\>

