# <a id="Ink_Canvas_Helpers_AutoBackupManager"></a> Class AutoBackupManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

自动备份管理器
负责管理配置文件的自动备份功能

```csharp
public static class AutoBackupManager
```

#### Inheritance

object ← 
[AutoBackupManager](Ink\_Canvas.Helpers.AutoBackupManager.md)

## Methods

### <a id="Ink_Canvas_Helpers_AutoBackupManager_CleanupOldBackups"></a> CleanupOldBackups\(\)

清理过期的备份文件
保留最近30天的备份文件

```csharp
public static void CleanupOldBackups()
```

#### Remarks

删除备份目录中按“备份前缀”匹配且创建时间早于 30 天的自动备份文件（即自动备份文件的命名前缀），不会删除诸如 Settings_Corrupted_*.json 之类的其他备份或错误状态文件。
如果备份目录不存在则不执行任何操作；删除操作在受写入保护的上下文中执行，任何错误会被记录但不会抛出异常。

### <a id="Ink_Canvas_Helpers_AutoBackupManager_Initialize_Ink_Canvas_Settings_"></a> Initialize\(Settings\)

初始化自动备份功能
在应用程序启动时调用

```csharp
public static void Initialize(Settings settings)
```

#### Parameters

`settings` [Settings](Ink\_Canvas.Settings.md)

设置对象

### <a id="Ink_Canvas_Helpers_AutoBackupManager_PerformAutoBackup_Ink_Canvas_Settings_"></a> PerformAutoBackup\(Settings\)

执行自动备份

```csharp
public static bool PerformAutoBackup(Settings settings)
```

#### Parameters

`settings` [Settings](Ink\_Canvas.Settings.md)

应用的设置对象；在成功备份后会更新 settings.Advanced.LastAutoBackupTime 并调用保存操作。

#### Returns

 bool

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> 表示备份成功，<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> 表示备份失败或被跳过。

#### Remarks

为主配置文件创建一次自动备份并在成功后更新并保存设置中的最后备份时间。

### <a id="Ink_Canvas_Helpers_AutoBackupManager_ShouldPerformAutoBackup_Ink_Canvas_Settings_"></a> ShouldPerformAutoBackup\(Settings\)

检查是否需要执行自动备份

```csharp
public static bool ShouldPerformAutoBackup(Settings settings)
```

#### Parameters

`settings` [Settings](Ink\_Canvas.Settings.md)

设置对象

#### Returns

 bool

如果需要备份返回<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>，否则返回<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>

### <a id="Ink_Canvas_Helpers_AutoBackupManager_TryRestoreFromBackup"></a> TryRestoreFromBackup\(\)

尝试从备份恢复配置文件

```csharp
public static bool TryRestoreFromBackup()
```

#### Returns

 bool

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> 如果恢复成功，<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> 否则。

#### Remarks

从最新可用的自动备份恢复主设置文件（Settings.json）。如果当前设置文件存在，会先将其复制到备份目录并加上时间戳作为“损坏”的备份副本，然后用最新备份覆盖原文件。

