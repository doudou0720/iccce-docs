# <a id="Ink_Canvas_Plugins_HostApiRequirement"></a> Class HostApiRequirement

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

宿主的 API 兼容性要求，由 PluginManager 在加载前对所有插件生效。

```csharp
public static class HostApiRequirement
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HostApiRequirement](Ink\_Canvas.Plugins.HostApiRequirement.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_Plugins_HostApiRequirement_CurrentApiVersion"></a> CurrentApiVersion

当前宿主支持的最大 API 版本。主版本相同即为兼容。

```csharp
public static readonly string CurrentApiVersion
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_HostApiRequirement_HostVersion"></a> HostVersion

当前宿主编译版本号，由 Nerdbank.GitVersioning 依据 <code>version.json</code> 与 git 状态自动生成，
随构建自动更新，不再手动维护。

```csharp
public const string HostVersion = "1.7.19.9"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_HostApiRequirement_MinSupportedHostVersion"></a> MinSupportedHostVersion

当前宿主最小受支持的插件宿主版本（例如 "1.7.18"）。低于该版本的插件会被拒绝。

```csharp
public static readonly string MinSupportedHostVersion
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

