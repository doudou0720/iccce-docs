# <a id="Ink_Canvas_Plugins_IThemeService"></a> Interface IThemeService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

主题服务：供插件检测系统/宿主当前主题，并把主题应用到自己的控件。

```csharp
public interface IThemeService
```

## Methods

### <a id="Ink_Canvas_Plugins_IThemeService_ApplyThemeToElement_System_Windows_FrameworkElement_"></a> ApplyThemeToElement\(FrameworkElement\)

把宿主当前主题应用到指定元素（调用方需持有该元素在可视树中的引用）。

```csharp
void ApplyThemeToElement(FrameworkElement element)
```

#### Parameters

`element` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

### <a id="Ink_Canvas_Plugins_IThemeService_GetEffectiveTheme"></a> GetEffectiveTheme\(\)

宿主当前生效的主题（按宿主设置：浅色/深色/跟随系统）。

```csharp
PluginTheme GetEffectiveTheme()
```

#### Returns

 [PluginTheme](Ink\_Canvas.Plugins.PluginTheme.md)

### <a id="Ink_Canvas_Plugins_IThemeService_IsSystemThemeLight"></a> IsSystemThemeLight\(\)

系统当前是否为浅色主题（注册表 AppsUseLightTheme）。

```csharp
bool IsSystemThemeLight()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

