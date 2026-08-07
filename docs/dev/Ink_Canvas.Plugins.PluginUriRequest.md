# <a id="Ink_Canvas_Plugins_PluginUriRequest"></a> Class PluginUriRequest

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件 URI 请求。宿主解析 <code>icc://plugin/&lt;pluginId&gt;/&lt;path&gt;</code> 后构造，传递给注册的处理器。

```csharp
public class PluginUriRequest
```

#### Inheritance

object ← 
[PluginUriRequest](Ink\_Canvas.Plugins.PluginUriRequest.md)

## Properties

### <a id="Ink_Canvas_Plugins_PluginUriRequest_Path"></a> Path

插件子路径（去除 <code>/plugin/&lt;id&gt;/</code> 前缀，小写）。

```csharp
public string Path { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginUriRequest_PluginId"></a> PluginId

目标插件 ID（来自 URI，忽略大小写匹配）。

```csharp
public string PluginId { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginUriRequest_Query"></a> Query

查询参数（键忽略大小写，值已 URL 解码）。

```csharp
public IReadOnlyDictionary<string, string> Query { get; set; }
```

#### Property Value

 IReadOnlyDictionary<string, string\>

### <a id="Ink_Canvas_Plugins_PluginUriRequest_RawUri"></a> RawUri

原始 URI 字符串。

```csharp
public string RawUri { get; set; }
```

#### Property Value

 string

