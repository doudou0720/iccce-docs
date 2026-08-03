# <a id="Ink_Canvas_Helpers_FloatingBarThemeService"></a> Class FloatingBarThemeService

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

加载浮动工具栏的本地 XAML 主题。
Each theme is a folder containing manifest.json and Theme.xaml.

```csharp
public sealed class FloatingBarThemeService
```

#### Inheritance

object ← 
[FloatingBarThemeService](Ink\_Canvas.Helpers.FloatingBarThemeService.md)

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

 ObservableCollection<[FloatingBarThemeService](Ink\_Canvas.Helpers.FloatingBarThemeService.md).[ThemeInfo](Ink\_Canvas.Helpers.FloatingBarThemeService.ThemeInfo.md)\>

## Methods

### <a id="Ink_Canvas_Helpers_FloatingBarThemeService_ApplySavedTheme"></a> ApplySavedTheme\(\)

```csharp
public void ApplySavedTheme()
```

### <a id="Ink_Canvas_Helpers_FloatingBarThemeService_ApplyTheme_System_String_"></a> ApplyTheme\(string\)

```csharp
public bool ApplyTheme(string themeId)
```

#### Parameters

`themeId` string

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_FloatingBarThemeService_DeleteTheme_System_String_"></a> DeleteTheme\(string\)

```csharp
public bool DeleteTheme(string themeId)
```

#### Parameters

`themeId` string

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_FloatingBarThemeService_LoadThemes"></a> LoadThemes\(\)

```csharp
public void LoadThemes()
```

