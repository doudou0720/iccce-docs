# <a id="Ink_Canvas_Plugins_PluginMarketService"></a> Class PluginMarketService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

插件市场服务，负责索引获取、插件下载安装、本地/远程插件合并、镜像管理。

```csharp
public class PluginMarketService : INotifyPropertyChanged
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginMarketService](Ink\_Canvas.Plugins.PluginMarketService.md)

#### Implements

[INotifyPropertyChanged](https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginMarketService_ActiveSource"></a> ActiveSource

当前激活的源（用于 UI 展示）。

```csharp
public PluginMarketSourceInfo ActiveSource { get; }
```

#### Property Value

 [PluginMarketSourceInfo](Ink\_Canvas.Plugins.PluginMarketSourceInfo.md)

### <a id="Ink_Canvas_Plugins_PluginMarketService_AvailableMirrors"></a> AvailableMirrors

当前索引中声明的可选镜像字典（key → root URL）。

```csharp
public IReadOnlyDictionary<string, string> AvailableMirrors { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_PluginMarketService_DownloadTasks"></a> DownloadTasks

获取当前下载任务字典。

```csharp
public IReadOnlyDictionary<string, DownloadTaskInfo> DownloadTasks { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [DownloadTaskInfo](Ink\_Canvas.Plugins.DownloadTaskInfo.md)\>

### <a id="Ink_Canvas_Plugins_PluginMarketService_Instance"></a> Instance

```csharp
public static PluginMarketService Instance { get; }
```

#### Property Value

 [PluginMarketService](Ink\_Canvas.Plugins.PluginMarketService.md)

### <a id="Ink_Canvas_Plugins_PluginMarketService_IsLoading"></a> IsLoading

```csharp
public bool IsLoading { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginMarketService_LoadError"></a> LoadError

```csharp
public string LoadError { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginMarketService_LoadProgress"></a> LoadProgress

```csharp
public double LoadProgress { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Plugins_PluginMarketService_MergedPlugins"></a> MergedPlugins

```csharp
public List<MergedPluginInfo> MergedPlugins { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[MergedPluginInfo](Ink\_Canvas.Plugins.MergedPluginInfo.md)\>

### <a id="Ink_Canvas_Plugins_PluginMarketService_Sources"></a> Sources

源管理服务。注意初始化时若 basePath 不同则会在第一次 RefreshIndexAsync 之前注入。

```csharp
public PluginMarketSourcesService Sources { get; }
```

#### Property Value

 [PluginMarketSourcesService](Ink\_Canvas.Plugins.PluginMarketSourcesService.md)

## Methods

### <a id="Ink_Canvas_Plugins_PluginMarketService_CancelDownload_System_String_"></a> CancelDownload\(string\)

取消指定插件的下载。

```csharp
public void CancelDownload(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginMarketService_GetCachedIconPathAsync_System_String_System_String_"></a> GetCachedIconPathAsync\(string, string\)

获取市场插件的图标本地缓存路径（异步下载）。

```csharp
public Task<string> GetCachedIconPathAsync(string iconUrl, string pluginId)
```

#### Parameters

`iconUrl` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_PluginMarketService_GetLastRefreshTime"></a> GetLastRefreshTime\(\)

获取缓存的索引最后刷新时间。

```csharp
public DateTime? GetLastRefreshTime()
```

#### Returns

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

### <a id="Ink_Canvas_Plugins_PluginMarketService_LoadFromCache"></a> LoadFromCache\(\)

仅从缓存加载索引（不联网）。

```csharp
public void LoadFromCache()
```

### <a id="Ink_Canvas_Plugins_PluginMarketService_OnPropertyChanged_System_String_"></a> OnPropertyChanged\(string\)

```csharp
protected void OnPropertyChanged(string propertyName = null)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginMarketService_RefreshIndexAsync"></a> RefreshIndexAsync\(\)

刷新插件市场索引。优先从网络获取，失败时使用缓存。

```csharp
public Task RefreshIndexAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Plugins_PluginMarketService_RefreshMergedPlugins"></a> RefreshMergedPlugins\(\)

```csharp
public void RefreshMergedPlugins()
```

### <a id="Ink_Canvas_Plugins_PluginMarketService_RequestDownloadPluginAsync_System_String_"></a> RequestDownloadPluginAsync\(string\)

请求下载安装/更新指定插件。

```csharp
public Task<bool> RequestDownloadPluginAsync(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Plugins_PluginMarketService_ResolveDependencies_System_String_"></a> ResolveDependencies\(string\)

解析插件依赖，返回需要一起安装的插件 ID 列表。

```csharp
public List<string> ResolveDependencies(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_PluginMarketService_ResolveMarketPlugin_System_String_"></a> ResolveMarketPlugin\(string\)

获取指定插件的市场条目。

```csharp
public PluginMarketEntry ResolveMarketPlugin(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [PluginMarketEntry](Ink\_Canvas.Plugins.PluginMarketEntry.md)

### <a id="Ink_Canvas_Plugins_PluginMarketService_SelectMirrorAsync_System_String_"></a> SelectMirrorAsync\(string\)

在当前激活源上选择镜像。传入空串表示使用默认。

```csharp
public Task SelectMirrorAsync(string mirrorKey)
```

#### Parameters

`mirrorKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Plugins_PluginMarketService_SwitchSourceAsync_System_String_"></a> SwitchSourceAsync\(string\)

切换当前激活的源并刷新索引。

```csharp
public Task SwitchSourceAsync(string sourceId)
```

#### Parameters

`sourceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Plugins_PluginMarketService_PropertyChanged"></a> PropertyChanged

Occurs when a property value changes.

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 [PropertyChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler)

