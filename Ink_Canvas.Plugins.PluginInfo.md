# <a id="Ink_Canvas_Plugins_PluginInfo"></a> Class PluginInfo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件运行时信息。宿主加载插件时创建，记录插件元数据与加载状态。

```csharp
public class PluginInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginInfo](Ink\_Canvas.Plugins.PluginInfo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginInfo_Author"></a> Author

插件作者。

```csharp
public string Author { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginInfo_Description"></a> Description

插件描述。

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginInfo_Exception"></a> Exception

加载失败时的异常信息

```csharp
public Exception Exception { get; set; }
```

#### Property Value

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### <a id="Ink_Canvas_Plugins_PluginInfo_Id"></a> Id

插件唯一标识，如 "com.example.myplugin"。

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginInfo_Instance"></a> Instance

已创建的插件实例；初始化失败时也会保留，是否成功看 <xref href="Ink_Canvas.Plugins.PluginInfo.LoadStatus" data-throw-if-not-resolved="false"></xref>。

```csharp
public IPlugin Instance { get; set; }
```

#### Property Value

 [IPlugin](Ink\_Canvas.Plugins.IPlugin.md)

### <a id="Ink_Canvas_Plugins_PluginInfo_IsLoaded"></a> IsLoaded

实例是否已创建（Initialize 前即置 true，不代表初始化成功）。

```csharp
public bool IsLoaded { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginInfo_LoadStatus"></a> LoadStatus

插件加载状态

```csharp
public PluginLoadStatus LoadStatus { get; set; }
```

#### Property Value

 [PluginLoadStatus](Ink\_Canvas.Plugins.PluginLoadStatus.md)

### <a id="Ink_Canvas_Plugins_PluginInfo_Manifest"></a> Manifest

插件清单信息

```csharp
public PluginManifest Manifest { get; set; }
```

#### Property Value

 [PluginManifest](Ink\_Canvas.Plugins.PluginManifest.md)

### <a id="Ink_Canvas_Plugins_PluginInfo_Name"></a> Name

插件显示名称。

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginInfo_Order"></a> Order

插件列表排序（数值越小越靠前；实际加载顺序由依赖解析决定）。旧式 DLL 插件从插件实例读取，其余默认 0。

```csharp
public int Order { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_PluginInfo_PluginConfigFolder"></a> PluginConfigFolder

插件配置目录路径

```csharp
public string PluginConfigFolder { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginInfo_PluginFolderPath"></a> PluginFolderPath

插件所在目录路径

```csharp
public string PluginFolderPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginInfo_Version"></a> Version

插件版本号。

```csharp
public string Version { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

