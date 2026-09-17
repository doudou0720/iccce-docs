# <a id="Ink_Canvas_Helpers_ThemeHelper"></a> Class ThemeHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class ThemeHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ThemeHelper](Ink\_Canvas.Helpers.ThemeHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_ThemeHelper_ApplySystemAccentColor"></a> ApplySystemAccentColor\(\)

将 Windows 系统强调色应用到 ModernWPF 全局主题管理器。
这将使所有 AccentButtonStyle（强调按钮、弹窗确认按钮等）自动使用系统强调色。

```csharp
public static void ApplySystemAccentColor()
```

### <a id="Ink_Canvas_Helpers_ThemeHelper_ApplyTheme_FrameworkElement_Ink_Canvas_Settings_"></a> ApplyTheme\(FrameworkElement, Settings\)

```csharp
public static void ApplyTheme(FrameworkElement element, Settings settings)
```

#### Parameters

`element` FrameworkElement

`settings` [Settings](Ink\_Canvas.Settings.md)

### <a id="Ink_Canvas_Helpers_ThemeHelper_ApplyTheme_FrameworkElement_Ink_Canvas_Settings_System_Action_System_String__"></a> ApplyTheme\(FrameworkElement, Settings, Action<string\>\)

```csharp
public static void ApplyTheme(FrameworkElement element, Settings settings, Action<string> onThemeApplied)
```

#### Parameters

`element` FrameworkElement

`settings` [Settings](Ink\_Canvas.Settings.md)

`onThemeApplied` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Helpers_ThemeHelper_GetEffectiveTheme_Ink_Canvas_Settings_"></a> GetEffectiveTheme\(Settings\)

```csharp
public static ElementTheme GetEffectiveTheme(Settings settings)
```

#### Parameters

`settings` [Settings](Ink\_Canvas.Settings.md)

#### Returns

 ElementTheme

### <a id="Ink_Canvas_Helpers_ThemeHelper_GetSystemAccentColor"></a> GetSystemAccentColor\(\)

获取 Windows 系统的个性化强调色 (System Accent Color)。

```csharp
public static Color GetSystemAccentColor()
```

#### Returns

 Color

### <a id="Ink_Canvas_Helpers_ThemeHelper_IsSystemThemeLight"></a> IsSystemThemeLight\(\)

```csharp
public static bool IsSystemThemeLight()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_ThemeHelper_IsSystemThemeLightLegacy"></a> IsSystemThemeLightLegacy\(\)

```csharp
public static bool IsSystemThemeLightLegacy()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

