# <a id="Ink_Canvas_Plugins_PluginHandwritingResult"></a> Class PluginHandwritingResult

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

一次手写识别批次的汇总结果。

```csharp
public sealed class PluginHandwritingResult
```

#### Inheritance

object ← 
[PluginHandwritingResult](Ink\_Canvas.Plugins.PluginHandwritingResult.md)

## Properties

### <a id="Ink_Canvas_Plugins_PluginHandwritingResult_CombinedText"></a> CombinedText

全部词拼接后的文本。

```csharp
public string CombinedText { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginHandwritingResult_IsSuccess"></a> IsSuccess

是否识别成功（有词结果）。

```csharp
public bool IsSuccess { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_PluginHandwritingResult_Words"></a> Words

分词列表。

```csharp
public List<PluginHandwritingWord> Words { get; set; }
```

#### Property Value

 List<[PluginHandwritingWord](Ink\_Canvas.Plugins.PluginHandwritingWord.md)\>

