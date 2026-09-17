# <a id="Ink_Canvas_Plugins_PluginConfigIo"></a> Class PluginConfigIo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

插件配置导入导出器。导出的 .plugincfg 文件是一个 zip：

<ul><li>manifest.json —— 插件元数据</li><li>configs/* —— 插件配置目录下所有文件</li></ul>

```csharp
public class PluginConfigIo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginConfigIo](Ink\_Canvas.Plugins.PluginConfigIo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Plugins_PluginConfigIo_Export_Ink_Canvas_Plugins_PluginInfo_System_String_"></a> Export\(PluginInfo, string\)

将指定插件的配置导出为 .plugincfg 文件。返回导出的文件路径。

```csharp
public string Export(PluginInfo plugin, string destinationFilePath = null)
```

#### Parameters

`plugin` PluginInfo

`destinationFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginConfigIo_Import_Ink_Canvas_Plugins_PluginConfigPackage_System_String_System_Boolean_"></a> Import\(PluginConfigPackage, string, bool\)

将 <xref href="Ink_Canvas.Plugins.PluginConfigIo.Inspect(System.String)" data-throw-if-not-resolved="false"></xref> 的 payloads 写入目标插件的配置目录。
<code class="paramref">overwrite</code> 为 true 时覆盖同名文件；为 false 时保留现有文件并跳过。

```csharp
public int Import(PluginConfigPackage package, string targetConfigFolder, bool overwrite = true)
```

#### Parameters

`package` [PluginConfigPackage](Ink\_Canvas.Plugins.PluginConfigPackage.md)

`targetConfigFolder` [string](https://learn.microsoft.com/dotnet/api/system.string)

`overwrite` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_PluginConfigIo_Import_System_String_System_String_System_Boolean_"></a> Import\(string, string, bool\)

一步式导入：直接读取 <code class="paramref">sourcePath</code> 导入到 <code class="paramref">targetConfigFolder</code>。

```csharp
public int Import(string sourcePath, string targetConfigFolder, bool overwrite = true)
```

#### Parameters

`sourcePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`targetConfigFolder` [string](https://learn.microsoft.com/dotnet/api/system.string)

`overwrite` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_PluginConfigIo_Inspect_System_String_"></a> Inspect\(string\)

读取 .plugincfg 文件中的 manifest 与 payloads，但只准备导入，不立即写入磁盘。

```csharp
public PluginConfigPackage Inspect(string sourcePath)
```

#### Parameters

`sourcePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [PluginConfigPackage](Ink\_Canvas.Plugins.PluginConfigPackage.md)

