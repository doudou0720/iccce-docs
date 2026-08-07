# <a id="Ink_Canvas_Plugins_PluginManifest"></a> Class PluginManifest

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件清单元数据，从 manifest.json 文件加载。

```csharp
public class PluginManifest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginManifest](Ink\_Canvas.Plugins.PluginManifest.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginManifest_ApiVersion"></a> ApiVersion

目标 InkCanvas API 版本

```csharp
public string ApiVersion { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManifest_Author"></a> Author

插件作者

```csharp
public string Author { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManifest_Dependencies"></a> Dependencies

插件依赖列表

```csharp
public List<PluginDependency> Dependencies { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PluginDependency](Ink\_Canvas.Plugins.PluginDependency.md)\>

### <a id="Ink_Canvas_Plugins_PluginManifest_Description"></a> Description

插件描述

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManifest_EntranceAssembly"></a> EntranceAssembly

入口程序集文件名，例如 "MyPlugin.dll"

```csharp
public string EntranceAssembly { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManifest_Icon"></a> Icon

插件图标路径，默认为 "icon.png"

```csharp
public string Icon { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManifest_Id"></a> Id

插件唯一标识符，例如 "com.example.myplugin"

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManifest_License"></a> License

许可协议，例如 "MIT"、"Apache-2.0"。

```csharp
public string License { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManifest_MinHostVersion"></a> MinHostVersion

最低宿主版本要求，例如 "1.7.19"。宿主编译版本低于此值时拒绝加载本插件。
留空表示不限制。比较对象为宿主实际编译版本
（<xref href="Ink_Canvas.Plugins.HostApiRequirement.HostVersion" data-throw-if-not-resolved="false"></xref>），不是某个固定下限。

```csharp
public string MinHostVersion { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManifest_Name"></a> Name

插件显示名称

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManifest_Permissions"></a> Permissions

插件申请的权限列表，例如 "Settings", "Hotkeys", "Network", "FileSystem"。
主机在加载插件时可向用户提示。

```csharp
public List<string> Permissions { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_PluginManifest_SourceUrl"></a> SourceUrl

源码仓库 URL。

```csharp
public string SourceUrl { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManifest_Tags"></a> Tags

标签列表。

```csharp
public List<string> Tags { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_PluginManifest_Url"></a> Url

插件项目 URL

```csharp
public string Url { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManifest_Version"></a> Version

插件版本号，例如 "1.0.0"

```csharp
public string Version { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManifest_VersionRange"></a> VersionRange

本插件要求的宿主版本范围，例如 "^1.7.0"、"&gt;=1.7.18,&lt;2.0.0"。留空表示不限制。
与 <xref href="Ink_Canvas.Plugins.PluginManifest.MinHostVersion" data-throw-if-not-resolved="false"></xref> 的区别是这里可以同时表达上界，
用于插件明确知道自己在某个大版本之后会失效的场景；两者都填时需同时满足。

```csharp
public string VersionRange { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

