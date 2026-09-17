# <a id="Ink_Canvas_Helpers_ScreenDetectionHelper"></a> Class ScreenDetectionHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

屏幕检测帮助类 - 用于检测窗口所在的屏幕和屏幕信息

```csharp
public static class ScreenDetectionHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ScreenDetectionHelper](Ink\_Canvas.Helpers.ScreenDetectionHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_ScreenDetectionHelper_GetAllScreens"></a> GetAllScreens\(\)

获取所有屏幕信息

```csharp
public static Screen[] GetAllScreens()
```

#### Returns

 Screen\[\]

所有屏幕的数组

### <a id="Ink_Canvas_Helpers_ScreenDetectionHelper_GetPrimaryScreen"></a> GetPrimaryScreen\(\)

获取主屏幕

```csharp
public static Screen GetPrimaryScreen()
```

#### Returns

 Screen

主屏幕

### <a id="Ink_Canvas_Helpers_ScreenDetectionHelper_GetWindowScreen_Window_"></a> GetWindowScreen\(Window\)

获取窗口所在的屏幕

```csharp
public static Screen GetWindowScreen(Window window)
```

#### Parameters

`window` Window

要检测的窗口

#### Returns

 Screen

窗口所在的屏幕，如果无法检测则返回主屏幕

### <a id="Ink_Canvas_Helpers_ScreenDetectionHelper_HasMultipleScreens"></a> HasMultipleScreens\(\)

检查是否有多个屏幕

```csharp
public static bool HasMultipleScreens()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

如果有多个屏幕返回true，否则返回false

### <a id="Ink_Canvas_Helpers_ScreenDetectionHelper_IsWindowOnPrimaryScreen_Window_"></a> IsWindowOnPrimaryScreen\(Window\)

检查窗口是否在主屏幕上

```csharp
public static bool IsWindowOnPrimaryScreen(Window window)
```

#### Parameters

`window` Window

要检查的窗口

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

如果窗口在主屏幕上返回true，否则返回false

