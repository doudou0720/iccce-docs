# <a id="Ink_Canvas_Plugins_PluginUriRequest"></a> Class PluginUriRequest

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件 URI 请求。宿主解析 <code>icc://plugin/&lt;pluginId&gt;/&lt;path&gt;</code> 后构造，传递给注册的处理器。

```csharp
public class PluginUriRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginUriRequest](Ink\_Canvas.Plugins.PluginUriRequest.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginUriRequest_Path"></a> Path

插件子路径（去除 <code>/plugin/&lt;id&gt;/</code> 前缀，小写）。

```csharp
public string Path { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginUriRequest_PluginId"></a> PluginId

目标插件 ID（来自 URI，忽略大小写匹配）。

```csharp
public string PluginId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginUriRequest_Query"></a> Query

查询参数（键忽略大小写，值已 URL 解码）。

```csharp
public IReadOnlyDictionary<string, string> Query { get; set; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_PluginUriRequest_RawUri"></a> RawUri

原始 URI 字符串。

```csharp
public string RawUri { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

