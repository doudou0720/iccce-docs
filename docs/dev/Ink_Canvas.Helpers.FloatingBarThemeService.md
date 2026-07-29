# <a id="Ink_Canvas_Helpers_FloatingBarThemeService"></a> Class FloatingBarThemeService

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Loads ClassIsland-style local XAML themes for the floating toolbar.
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

