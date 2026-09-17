# <a id="Ink_Canvas_Plugins_IBackupService"></a> Interface IBackupService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

自动备份服务：供插件控制宿主的设置文件自动备份（复制 Settings.json 到备份目录）。

```csharp
public interface IBackupService
```

## Methods

### <a id="Ink_Canvas_Plugins_IBackupService_CleanupOldBackups"></a> CleanupOldBackups\(\)

清理过期备份。

```csharp
void CleanupOldBackups()
```

### <a id="Ink_Canvas_Plugins_IBackupService_PerformAutoBackup"></a> PerformAutoBackup\(\)

执行一次备份。返回是否成功。

```csharp
bool PerformAutoBackup()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IBackupService_ShouldPerformAutoBackup"></a> ShouldPerformAutoBackup\(\)

是否已到达自动备份时机（由宿主备份间隔设置决定）。

```csharp
bool ShouldPerformAutoBackup()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IBackupService_TryRestoreFromBackup"></a> TryRestoreFromBackup\(\)

从最近一次备份恢复设置文件。返回是否成功。

```csharp
bool TryRestoreFromBackup()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

