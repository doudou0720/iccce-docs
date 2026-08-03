# <a id="Ink_Canvas_Helpers_FileAssociationManager"></a> Class FileAssociationManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

文件关联管理器，用于注册和处理.icstk文件的关联

```csharp
public static class FileAssociationManager
```

#### Inheritance

object ← 
[FileAssociationManager](Ink\_Canvas.Helpers.FileAssociationManager.md)

## Methods

### <a id="Ink_Canvas_Helpers_FileAssociationManager_GetIcstkFileFromArgs_System_String___"></a> GetIcstkFileFromArgs\(string\[\]\)

处理命令行参数中的文件路径

```csharp
public static string GetIcstkFileFromArgs(string[] args)
```

#### Parameters

`args` string\[\]

命令行参数

#### Returns

 string

找到的.icstk文件路径，如果没有找到则返回null

### <a id="Ink_Canvas_Helpers_FileAssociationManager_IsFileAssociationRegistered"></a> IsFileAssociationRegistered\(\)

检查文件关联是否已注册

```csharp
public static bool IsFileAssociationRegistered()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_FileAssociationManager_IsFileAssociationRegistered_System_String_System_String_"></a> IsFileAssociationRegistered\(string, string\)

检查自定义文件扩展名关联是否已注册且指向宿主 exe（供插件使用）。

```csharp
public static bool IsFileAssociationRegistered(string extension, string progId = null)
```

#### Parameters

`extension` string

`progId` string

可选的 ProgId；非空时校验扩展名指向的 ProgId 是否与之匹配。

#### Returns

 bool

已注册且命令指向宿主 exe 时返回 true。

### <a id="Ink_Canvas_Helpers_FileAssociationManager_RegisterFileAssociation"></a> RegisterFileAssociation\(\)

注册.icstk文件关联

```csharp
public static bool RegisterFileAssociation()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_FileAssociationManager_RegisterFileAssociation_System_String_System_String_System_String_System_String_"></a> RegisterFileAssociation\(string, string, string, string\)

注册自定义文件扩展名关联（供插件使用）。
写入 <code>HKCU\Software\Classes</code>（无需管理员权限），把该扩展名的打开命令指向宿主 exe。

```csharp
public static bool RegisterFileAssociation(string extension, string progId, string description, string iconPath = null)
```

#### Parameters

`extension` string

`progId` string

`description` string

`iconPath` string

#### Returns

 bool

是否注册成功；扩展名/ProgId 无效或扩展名受保护时返回 false。

### <a id="Ink_Canvas_Helpers_FileAssociationManager_ShowFileAssociationStatus"></a> ShowFileAssociationStatus\(\)

显示文件关联状态

```csharp
public static void ShowFileAssociationStatus()
```

### <a id="Ink_Canvas_Helpers_FileAssociationManager_StartIpcListener"></a> StartIpcListener\(\)

启动IPC监听器，等待其他实例发送文件路径

```csharp
public static void StartIpcListener()
```

### <a id="Ink_Canvas_Helpers_FileAssociationManager_TrySendBoardModeCommandToExistingInstance"></a> TrySendBoardModeCommandToExistingInstance\(\)

尝试通过IPC将白板模式命令发送给已运行的实例

```csharp
public static bool TrySendBoardModeCommandToExistingInstance()
```

#### Returns

 bool

是否成功发送

### <a id="Ink_Canvas_Helpers_FileAssociationManager_TrySendFileToExistingInstance_System_String_"></a> TrySendFileToExistingInstance\(string\)

尝试通过IPC将文件路径发送给已运行的实例

```csharp
public static bool TrySendFileToExistingInstance(string filePath)
```

#### Parameters

`filePath` string

要打开的文件路径

#### Returns

 bool

是否成功发送

### <a id="Ink_Canvas_Helpers_FileAssociationManager_TrySendShowModeCommandToExistingInstance"></a> TrySendShowModeCommandToExistingInstance\(\)

尝试通过IPC将展开浮动栏命令发送给已运行的实例

```csharp
public static bool TrySendShowModeCommandToExistingInstance()
```

#### Returns

 bool

是否成功发送

### <a id="Ink_Canvas_Helpers_FileAssociationManager_TrySendUriCommandToExistingInstance_System_String_"></a> TrySendUriCommandToExistingInstance\(string\)

尝试通过IPC将URI命令发送给已运行的实例

```csharp
public static bool TrySendUriCommandToExistingInstance(string uri)
```

#### Parameters

`uri` string

URI命令

#### Returns

 bool

是否成功发送

### <a id="Ink_Canvas_Helpers_FileAssociationManager_UnregisterFileAssociation"></a> UnregisterFileAssociation\(\)

注销.icstk文件关联

```csharp
public static bool UnregisterFileAssociation()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_FileAssociationManager_UnregisterFileAssociation_System_String_"></a> UnregisterFileAssociation\(string\)

注销自定义文件扩展名关联（供插件使用）。
自动读取扩展名当前指向的 ProgId 并一并清理，无需调用方提供。

```csharp
public static bool UnregisterFileAssociation(string extension)
```

#### Parameters

`extension` string

#### Returns

 bool

是否注销成功。

