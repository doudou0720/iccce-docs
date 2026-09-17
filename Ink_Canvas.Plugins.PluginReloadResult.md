# <a id="Ink_Canvas_Plugins_PluginReloadResult"></a> Class PluginReloadResult

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

<xref href="Ink_Canvas.Plugins.PluginManager.ReloadPlugin(System.String)" data-throw-if-not-resolved="false"></xref> 的结果。

```csharp
public class PluginReloadResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginReloadResult](Ink\_Canvas.Plugins.PluginReloadResult.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginReloadResult_ErrorMessage"></a> ErrorMessage

失败原因，仅在 <xref href="Ink_Canvas.Plugins.PluginReloadResult.Success" data-throw-if-not-resolved="false"></xref> 为 false 时有值。

```csharp
public string ErrorMessage { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginReloadResult_FullyUnloaded"></a> FullyUnloaded

旧版本的 AssemblyLoadContext 是否已被 GC 真正回收。

<p>
为 false 时插件仍能正常工作（新程序集已加载），但旧程序集滞留在内存中，
说明宿主某处还持有插件对象的引用。反复重载会累积内存占用，
建议提示用户重启以彻底清理。
</p>

```csharp
public bool FullyUnloaded { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginReloadResult_Success"></a> Success

插件是否已重新加载并进入 Loaded 状态。

```csharp
public bool Success { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginReloadResult_WasRemoved"></a> WasRemoved

插件目录已不存在，本次操作实际是卸载而非重载。

```csharp
public bool WasRemoved { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Plugins_PluginReloadResult_Failed_System_String_"></a> Failed\(string\)

```csharp
public static PluginReloadResult Failed(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [PluginReloadResult](Ink\_Canvas.Plugins.PluginReloadResult.md)

