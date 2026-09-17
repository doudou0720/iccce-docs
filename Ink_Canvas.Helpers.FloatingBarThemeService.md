# <a id="Ink_Canvas_Helpers_FloatingBarThemeService"></a> Class FloatingBarThemeService

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

加载浮动工具栏的本地 XAML 主题。
Each theme is a folder containing manifest.json and Theme.xaml.

```csharp
public sealed class FloatingBarThemeService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FloatingBarThemeService](Ink\_Canvas.Helpers.FloatingBarThemeService.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_FloatingBarThemeService__ctor_Ink_Canvas_MainWindow_"></a> FloatingBarThemeService\(MainWindow\)

```csharp
public FloatingBarThemeService(MainWindow mainWindow)
```

#### Parameters

`mainWindow` [MainWindow](Ink\_Canvas.MainWindow.md)

## Properties

### <a id="Ink_Canvas_Helpers_FloatingBarThemeService_Themes"></a> Themes

```csharp
public ObservableCollection<FloatingBarThemeService.ThemeInfo> Themes { get; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<[FloatingBarThemeService](Ink\_Canvas.Helpers.FloatingBarThemeService.md).[ThemeInfo](Ink\_Canvas.Helpers.FloatingBarThemeService.ThemeInfo.md)\>

## Methods

### <a id="Ink_Canvas_Helpers_FloatingBarThemeService_ApplyColorfulOverlay"></a> ApplyColorfulOverlay\(\)

根据 IsColorfulViewboxFloatingBar 设置应用或移除彩色浮动栏背景覆盖。
开启时在合并字典末尾追加只含 FloatingBarBackgroundBrush 的覆盖字典
（历史蓝→绿对角半透明渐变 #9580B0FF → #95C0FFC0），
其余前景/边框/悬停色继续沿用当前浮动栏主题；关闭时移除，回落到主题背景。
覆盖字典始终位于 _themeDictionary 之后，主题切换后需重新调用本方法保持优先级。

```csharp
public void ApplyColorfulOverlay()
```

### <a id="Ink_Canvas_Helpers_FloatingBarThemeService_ApplySavedTheme"></a> ApplySavedTheme\(\)

```csharp
public void ApplySavedTheme()
```

### <a id="Ink_Canvas_Helpers_FloatingBarThemeService_ApplyTheme_System_String_"></a> ApplyTheme\(string\)

```csharp
public bool ApplyTheme(string themeId)
```

#### Parameters

`themeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_FloatingBarThemeService_DeleteTheme_System_String_"></a> DeleteTheme\(string\)

```csharp
public bool DeleteTheme(string themeId)
```

#### Parameters

`themeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_FloatingBarThemeService_LoadThemes"></a> LoadThemes\(\)

```csharp
public void LoadThemes()
```

