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

### <a id="Ink_Canvas_Plugins_PluginManifest_Name"></a> Name

插件显示名称

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

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

