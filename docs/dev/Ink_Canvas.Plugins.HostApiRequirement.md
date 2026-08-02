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

当前宿主提供的插件 API 版本。插件在 manifest 中声明 <code>ApiVersion</code>，
主版本相同且不高于此值即为兼容。

<p>
维护规则：<b>每次向 SDK 新增对外接口或在既有接口上追加成员，都必须抬升次版本号</b>
（1.1.0 → 1.2.0），插件才有办法声明自己需要的能力下限。
发生破坏性变更（删除/改签名）时抬主版本号，这会使所有声明旧主版本的插件停止加载。
仅修复实现、不动接口时不需要改动。
</p>

```csharp
public static readonly string CurrentApiVersion
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_HostApiRequirement_HostVersion"></a> HostVersion

当前宿主编译版本号，由 Nerdbank.GitVersioning 依据 <code>version.json</code> 与 git 状态自动生成，
随构建自动更新，不再手动维护。

<p>
必须是 <code>static readonly</code> 而非 <code>const</code>：<code>const</code> 会在引用方编译期内联成字面量，
导致通过 NuGet 引用本 SDK 的插件/宿主在只更新 SDK 程序集、未重新编译时仍读到旧版本号。
</p>

```csharp
public static readonly string HostVersion
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

