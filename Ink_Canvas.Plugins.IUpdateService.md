# <a id="Ink_Canvas_Plugins_IUpdateService"></a> Interface IUpdateService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

更新服务：供插件检查宿主是否有新版本、读取更新日志、触发安装或取消下载。

<p>底层复用宿主 <code>AutoUpdateHelper</code>，与软件内置的检查更新共用同一套更新源与校验。</p>

```csharp
public interface IUpdateService
```

## Properties

### <a id="Ink_Canvas_Plugins_IUpdateService_LastDownloadFailure"></a> LastDownloadFailure

最近一次下载失败的原因描述；无失败时为 null。

```csharp
string LastDownloadFailure { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Plugins_IUpdateService_CheckForUpdatesAsync_Ink_Canvas_Plugins_PluginUpdateChannel_"></a> CheckForUpdatesAsync\(PluginUpdateChannel\)

检查指定通道是否有新版本。

```csharp
Task<PluginUpdateCheckResult> CheckForUpdatesAsync(PluginUpdateChannel channel = PluginUpdateChannel.Release)
```

#### Parameters

`channel` [PluginUpdateChannel](Ink\_Canvas.Plugins.PluginUpdateChannel.md)

更新通道。

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[PluginUpdateCheckResult](Ink\_Canvas.Plugins.PluginUpdateCheckResult.md)\>

检查结果；无新版本时 <xref href="Ink_Canvas.Plugins.PluginUpdateCheckResult.RemoteVersion" data-throw-if-not-resolved="false"></xref> 为空。

### <a id="Ink_Canvas_Plugins_IUpdateService_GetUpdateLogAsync_Ink_Canvas_Plugins_PluginUpdateChannel_"></a> GetUpdateLogAsync\(PluginUpdateChannel\)

获取指定通道的更新日志（UpdateLog 全文）。

```csharp
Task<string> GetUpdateLogAsync(PluginUpdateChannel channel = PluginUpdateChannel.Release)
```

#### Parameters

`channel` [PluginUpdateChannel](Ink\_Canvas.Plugins.PluginUpdateChannel.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_IUpdateService_InstallNewVersion_System_String_System_Boolean_"></a> InstallNewVersion\(string, bool\)

下载并安装指定版本（后台进行，宿主重启时应用更新）。

```csharp
void InstallNewVersion(string version, bool isInSilence)
```

#### Parameters

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)

要安装的版本号（来自 <xref href="Ink_Canvas.Plugins.IUpdateService.CheckForUpdatesAsync(Ink_Canvas.Plugins.PluginUpdateChannel)" data-throw-if-not-resolved="false"></xref>）。

`isInSilence` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否静默安装（无确认提示）。

### <a id="Ink_Canvas_Plugins_IUpdateService_RequestCancelDownload"></a> RequestCancelDownload\(\)

取消正在进行的下载。

```csharp
void RequestCancelDownload()
```

