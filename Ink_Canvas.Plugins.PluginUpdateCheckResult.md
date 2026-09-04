# <a id="Ink_Canvas_Plugins_PluginUpdateCheckResult"></a> Class PluginUpdateCheckResult

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

更新检查结果。

```csharp
public sealed class PluginUpdateCheckResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginUpdateCheckResult](Ink\_Canvas.Plugins.PluginUpdateCheckResult.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginUpdateCheckResult_LineGroupName"></a> LineGroupName

命中的更新线路组名（用于后续下载/安装）。

```csharp
public string LineGroupName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginUpdateCheckResult_ReleaseNotes"></a> ReleaseNotes

发布说明（UpdateLog 文本）。

```csharp
public string ReleaseNotes { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginUpdateCheckResult_RemoteVersion"></a> RemoteVersion

远程最新版本号。

```csharp
public string RemoteVersion { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

