# <a id="Ink_Canvas_Plugins_IFileDialogService"></a> Interface IFileDialogService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

文件对话框服务：供插件弹出标准的 Windows 打开/保存文件对话框。

<p>宿主内部切到 UI 线程展示对话框，以宿主主窗口为所有者。</p>

```csharp
public interface IFileDialogService
```

## Methods

### <a id="Ink_Canvas_Plugins_IFileDialogService_OpenFile_System_String_System_String_System_String_"></a> OpenFile\(string, string, string\)

弹出「打开文件」对话框。

```csharp
string OpenFile(string title, string filter = null, string initialDirectory = null)
```

#### Parameters

`title` string

对话框标题。

`filter` string

文件过滤器，如 "文本文件 (*.txt)|*.txt|所有文件 (*.*)|*.*"；null 用默认。

`initialDirectory` string

初始目录；null 用上次目录。

#### Returns

 string

选中的文件路径；用户取消返回 null。

### <a id="Ink_Canvas_Plugins_IFileDialogService_OpenFiles_System_String_System_String_System_String_"></a> OpenFiles\(string, string, string\)

弹出「打开文件」对话框，允许多选。

```csharp
string[] OpenFiles(string title, string filter = null, string initialDirectory = null)
```

#### Parameters

`title` string

`filter` string

`initialDirectory` string

#### Returns

 string\[\]

选中的文件路径列表；用户取消返回空数组。

### <a id="Ink_Canvas_Plugins_IFileDialogService_SaveFile_System_String_System_String_System_String_System_String_"></a> SaveFile\(string, string, string, string\)

弹出「另存为」对话框。

```csharp
string SaveFile(string title, string filter = null, string defaultFileName = null, string initialDirectory = null)
```

#### Parameters

`title` string

`filter` string

`defaultFileName` string

默认文件名。

`initialDirectory` string

#### Returns

 string

选中的保存路径；用户取消返回 null。

