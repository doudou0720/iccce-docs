# <a id="Ink_Canvas_Windows_SettingsViews_Helpers_UriSchemeShortcutHelper"></a> Class UriSchemeShortcutHelper

Namespace: [Ink\_Canvas.Windows.SettingsViews.Helpers](Ink\_Canvas.Windows.SettingsViews.Helpers.md)  
Assembly: InkCanvasForClass.dll  

创建指向 icc:// 外部协议命令的桌面快捷方式。
快捷方式以主程序为目标并携带 icc:// 参数：已有实例运行时由 App 通过 IPC 转发命令，
无实例时启动应用后按启动 URI 参数执行命令。
快捷方式图标为按需生成的 .ico：半透明圆角矩形底 + 程序内图标 + 右下角半透明 ICC 文字，
与设置页徽章按钮使用同一套绘制参数。

```csharp
public static class UriSchemeShortcutHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UriSchemeShortcutHelper](Ink\_Canvas.Windows.SettingsViews.Helpers.UriSchemeShortcutHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_UriSchemeShortcutHelper_FeatureAnnotate"></a> FeatureAnnotate

```csharp
public const string FeatureAnnotate = "annotate"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_UriSchemeShortcutHelper_FeatureBoard"></a> FeatureBoard

```csharp
public const string FeatureBoard = "board"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_UriSchemeShortcutHelper_FeatureBooth"></a> FeatureBooth

```csharp
public const string FeatureBooth = "booth"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_UriSchemeShortcutHelper_FeatureRandom"></a> FeatureRandom

```csharp
public const string FeatureRandom = "rand"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_UriSchemeShortcutHelper_FeatureSettings"></a> FeatureSettings

```csharp
public const string FeatureSettings = "settings"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_UriSchemeShortcutHelper_CreateBadgeElement_System_String_System_Double_"></a> CreateBadgeElement\(string, double\)

构建徽章视觉元素（半透明圆角矩形底 + 程序内图标 + 右下角半透明 ICC/CE 文字）。
用于设置页快捷方式按钮内容。

```csharp
public static FrameworkElement CreateBadgeElement(string feature, double size)
```

#### Parameters

`feature` [string](https://learn.microsoft.com/dotnet/api/system.string)

`size` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 FrameworkElement

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_UriSchemeShortcutHelper_CreateDesktopShortcut_System_String_"></a> CreateDesktopShortcut\(string\)

创建桌面快捷方式（已存在则覆盖），返回是否成功。

```csharp
public static bool CreateDesktopShortcut(string feature)
```

#### Parameters

`feature` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_UriSchemeShortcutHelper_GetFeatureLabel_System_String_"></a> GetFeatureLabel\(string\)

获取功能的本地化名称（同时用于快捷方式文件名）。

```csharp
public static string GetFeatureLabel(string feature)
```

#### Parameters

`feature` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_UriSchemeShortcutHelper_GetFeatureUri_System_String_"></a> GetFeatureUri\(string\)

获取功能对应的 icc:// 命令路径（不含协议头）。

```csharp
public static string GetFeatureUri(string feature)
```

#### Parameters

`feature` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

