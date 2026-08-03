# <a id="Ink_Canvas_Plugins_PluginMarketEntry"></a> Class PluginMarketEntry

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

市场中的单个插件条目。

```csharp
public class PluginMarketEntry
```

#### Inheritance

object ← 
[PluginMarketEntry](Ink\_Canvas.Plugins.PluginMarketEntry.md)

## Properties

### <a id="Ink_Canvas_Plugins_PluginMarketEntry_DownloadCount"></a> DownloadCount

下载量

```csharp
public long DownloadCount { get; set; }
```

#### Property Value

 long

### <a id="Ink_Canvas_Plugins_PluginMarketEntry_DownloadSha256"></a> DownloadSha256

下载文件的 SHA256 校验值（可选）

```csharp
public string DownloadSha256 { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginMarketEntry_DownloadUrl"></a> DownloadUrl

插件包下载 URL（可含 {root} 模板）

```csharp
public string DownloadUrl { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginMarketEntry_IconUrl"></a> IconUrl

插件图标 URL（可含 {root} 模板）

```csharp
public string IconUrl { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginMarketEntry_Manifest"></a> Manifest

插件元数据

```csharp
public PluginManifest Manifest { get; set; }
```

#### Property Value

 PluginManifest

### <a id="Ink_Canvas_Plugins_PluginMarketEntry_ReadmeUrl"></a> ReadmeUrl

README 文档 URL（可含 {root} 模板）

```csharp
public string ReadmeUrl { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginMarketEntry_StarsCount"></a> StarsCount

点赞/收藏数

```csharp
public long StarsCount { get; set; }
```

#### Property Value

 long

