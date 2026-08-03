# <a id="Ink_Canvas_Plugins_PluginMarketIndex"></a> Class PluginMarketIndex

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

插件市场索引，对应 index.json 的顶层结构。

```csharp
public class PluginMarketIndex
```

#### Inheritance

object ← 
[PluginMarketIndex](Ink\_Canvas.Plugins.PluginMarketIndex.md)

## Properties

### <a id="Ink_Canvas_Plugins_PluginMarketIndex_DownloadMirrors"></a> DownloadMirrors

下载镜像列表，键为镜像名，值为镜像根 URL。
下载链接中的 {root} 会被替换为所选镜像的值。

```csharp
public Dictionary<string, string> DownloadMirrors { get; set; }
```

#### Property Value

 Dictionary<string, string\>

### <a id="Ink_Canvas_Plugins_PluginMarketIndex_Plugins"></a> Plugins

插件列表

```csharp
public List<PluginMarketEntry> Plugins { get; set; }
```

#### Property Value

 List<[PluginMarketEntry](Ink\_Canvas.Plugins.PluginMarketEntry.md)\>

