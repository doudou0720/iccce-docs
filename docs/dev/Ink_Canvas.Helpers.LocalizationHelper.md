# <a id="Ink_Canvas_Helpers_LocalizationHelper"></a> Class LocalizationHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

i18n 本地化辅助：设置/获取当前 UI 语言，便于后续从配置切换语言。

```csharp
public static class LocalizationHelper
```

#### Inheritance

object ← 
[LocalizationHelper](Ink\_Canvas.Helpers.LocalizationHelper.md)

## Properties

### <a id="Ink_Canvas_Helpers_LocalizationHelper_CurrentCulture"></a> CurrentCulture

当前 UI 语言（如 "zh-CN", "en-US"）。未设置时使用系统当前 UI 语言。

```csharp
public static CultureInfo CurrentCulture { get; set; }
```

#### Property Value

 CultureInfo

## Methods

### <a id="Ink_Canvas_Helpers_LocalizationHelper_GetString_System_String_"></a> GetString\(string\)

获取本地化字符串。优先使用强类型属性，未知键时用此方法。

```csharp
public static string GetString(string key)
```

#### Parameters

`key` string

#### Returns

 string

### <a id="Ink_Canvas_Helpers_LocalizationHelper_TrySetCulture_System_String_"></a> TrySetCulture\(string\)

使用指定语言名称设置当前 UI 语言（如 "zh-CN", "en-US"）。
若名称无效则保持当前语言不变。

```csharp
public static bool TrySetCulture(string cultureName)
```

#### Parameters

`cultureName` string

#### Returns

 bool

