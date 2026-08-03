# <a id="Ink_Canvas_Plugins_PluginDependencyResolver"></a> Class PluginDependencyResolver

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

插件依赖冲突检测器。在加载前对一组 <xref href="Ink_Canvas.Plugins.PluginInfo" data-throw-if-not-resolved="false"></xref> 做以下检查：

<ol><li>重复 id（同一目录扫描两次或市场提供重复条目）</li><li>循环依赖（LoadStatus 已被 <xref href="Ink_Canvas.Plugins.PluginManager.ResolveLoadOrder" data-throw-if-not-resolved="false"></xref> 检测，本类只做静态补充检查）</li><li>版本冲突：插件 A 要求 dep 1.0.0，插件 B 要求 dep 1.5.0 但不可同时满足</li><li>缺失的必需依赖</li><li>缺失的可选依赖（仅告警，不阻塞加载）</li></ol>

```csharp
public class PluginDependencyResolver
```

#### Inheritance

object ← 
[PluginDependencyResolver](Ink\_Canvas.Plugins.PluginDependencyResolver.md)

## Methods

### <a id="Ink_Canvas_Plugins_PluginDependencyResolver_Analyze_IEnumerable_Ink_Canvas_Plugins_PluginInfo__"></a> Analyze\(IEnumerable<PluginInfo\>\)

在一组候选插件之间检测冲突并返回信息。

```csharp
public DependencyAnalysis Analyze(IEnumerable<PluginInfo> candidates)
```

#### Parameters

`candidates` IEnumerable<PluginInfo\>

#### Returns

 [DependencyAnalysis](Ink\_Canvas.Plugins.DependencyAnalysis.md)

