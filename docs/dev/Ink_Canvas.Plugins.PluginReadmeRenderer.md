# <a id="Ink_Canvas_Plugins_PluginReadmeRenderer"></a> Class PluginReadmeRenderer

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

轻量级 Markdown → FlowDocument 渲染器。专为插件说明文档设计，
不引入任何第三方依赖，支持：标题、加粗、斜体、行内代码、代码块、列表、
链接、引用、分隔线与简单表格。

```csharp
public class PluginReadmeRenderer
```

#### Inheritance

object ← 
[PluginReadmeRenderer](Ink\_Canvas.Plugins.PluginReadmeRenderer.md)

## Methods

### <a id="Ink_Canvas_Plugins_PluginReadmeRenderer_Render_System_String_"></a> Render\(string\)

将 Markdown 文本渲染为 FlowDocument。

```csharp
public FlowDocument Render(string markdown)
```

#### Parameters

`markdown` string

#### Returns

 FlowDocument

