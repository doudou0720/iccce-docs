# <a id="Ink_Canvas_Plugins_MergedPluginInfo"></a> Class MergedPluginInfo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

合并后的插件信息（本地 + 市场）。

```csharp
public class MergedPluginInfo : INotifyPropertyChanged
```

#### Inheritance

INotifyPropertyChanged ← 
[MergedPluginInfo](Ink\_Canvas.Plugins.MergedPluginInfo.md)

## Properties

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_Author"></a> Author

```csharp
public string Author { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_Description"></a> Description

```csharp
public string Description { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_DownloadCount"></a> DownloadCount

```csharp
public long DownloadCount { get; set; }
```

#### Property Value

 long

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_DownloadCountText"></a> DownloadCountText

```csharp
public string DownloadCountText { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_DownloadTask"></a> DownloadTask

```csharp
public DownloadTaskInfo DownloadTask { get; set; }
```

#### Property Value

 [DownloadTaskInfo](Ink\_Canvas.Plugins.DownloadTaskInfo.md)

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_DownloadUrl"></a> DownloadUrl

```csharp
public string DownloadUrl { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_IconDisplayPath"></a> IconDisplayPath

```csharp
public string IconDisplayPath { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_IconUrl"></a> IconUrl

```csharp
public string IconUrl { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_Id"></a> Id

```csharp
public string Id { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_IsDownloading"></a> IsDownloading

```csharp
public bool IsDownloading { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_IsLocal"></a> IsLocal

```csharp
public bool IsLocal { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_IsOnMarket"></a> IsOnMarket

```csharp
public bool IsOnMarket { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_IsUpdateAvailable"></a> IsUpdateAvailable

```csharp
public bool IsUpdateAvailable { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_LoadStatus"></a> LoadStatus

```csharp
public PluginLoadStatus LoadStatus { get; set; }
```

#### Property Value

 PluginLoadStatus

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_LocalInfo"></a> LocalInfo

```csharp
public PluginInfo LocalInfo { get; set; }
```

#### Property Value

 PluginInfo

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_MarketEntry"></a> MarketEntry

```csharp
public PluginMarketEntry MarketEntry { get; set; }
```

#### Property Value

 [PluginMarketEntry](Ink\_Canvas.Plugins.PluginMarketEntry.md)

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_MarketVersion"></a> MarketVersion

```csharp
public string MarketVersion { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_PluginConfigFolder"></a> PluginConfigFolder

```csharp
public string PluginConfigFolder { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_PluginFolderPath"></a> PluginFolderPath

```csharp
public string PluginFolderPath { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_ReadmeUrl"></a> ReadmeUrl

```csharp
public string ReadmeUrl { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_RestartRequired"></a> RestartRequired

```csharp
public bool RestartRequired { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_ShowInstallButton"></a> ShowInstallButton

```csharp
public bool ShowInstallButton { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_ShowInstalledBadge"></a> ShowInstalledBadge

```csharp
public bool ShowInstalledBadge { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_StarsCount"></a> StarsCount

```csharp
public long StarsCount { get; set; }
```

#### Property Value

 long

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_Version"></a> Version

```csharp
public string Version { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_VersionText"></a> VersionText

```csharp
public string VersionText { get; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_OnPropertyChanged_System_String_"></a> OnPropertyChanged\(string\)

```csharp
protected void OnPropertyChanged(string propertyName = null)
```

#### Parameters

`propertyName` string

### <a id="Ink_Canvas_Plugins_MergedPluginInfo_PropertyChanged"></a> PropertyChanged

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 PropertyChangedEventHandler

