# <a id="Ink_Canvas_Properties_Strings"></a> Class Strings

Namespace: [Ink\_Canvas.Properties](Ink\_Canvas.Properties.md)  
Assembly: InkCanvasForClass.dll  

本地化字符串资源，用于 i18n。当前 UI 语言由 Thread.CurrentThread.CurrentUICulture 决定。

```csharp
public static class Strings
```

#### Inheritance

object ← 
[Strings](Ink\_Canvas.Properties.Strings.md)

## Properties

### <a id="Ink_Canvas_Properties_Strings_App_Title"></a> App\_Title

```csharp
public static string App_Title { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Booth_Resolution_Tooltip"></a> Booth\_Resolution\_Tooltip

```csharp
public static string Booth_Resolution_Tooltip { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Culture"></a> Culture

重写当前线程的 CurrentUICulture，以在此强类型资源类中进行资源查找。
若不设置，则使用 Thread.CurrentThread.CurrentUICulture。

```csharp
public static CultureInfo Culture { get; set; }
```

#### Property Value

 CultureInfo

### <a id="Ink_Canvas_Properties_Strings_Nav_About"></a> Nav\_About

```csharp
public static string Nav_About { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Nav_Advanced"></a> Nav\_Advanced

```csharp
public static string Nav_Advanced { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Nav_Automation"></a> Nav\_Automation

```csharp
public static string Nav_Automation { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Nav_Canvas"></a> Nav\_Canvas

```csharp
public static string Nav_Canvas { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Nav_CrashAction"></a> Nav\_CrashAction

```csharp
public static string Nav_CrashAction { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Nav_Gesture"></a> Nav\_Gesture

```csharp
public static string Nav_Gesture { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Nav_InkRecognition"></a> Nav\_InkRecognition

```csharp
public static string Nav_InkRecognition { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Nav_PPT"></a> Nav\_PPT

```csharp
public static string Nav_PPT { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Nav_Plugins"></a> Nav\_Plugins

```csharp
public static string Nav_Plugins { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Nav_RandomWindow"></a> Nav\_RandomWindow

```csharp
public static string Nav_RandomWindow { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Nav_Shortcuts"></a> Nav\_Shortcuts

```csharp
public static string Nav_Shortcuts { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Nav_Startup"></a> Nav\_Startup

```csharp
public static string Nav_Startup { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Nav_Theme"></a> Nav\_Theme

```csharp
public static string Nav_Theme { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_ResourceManager"></a> ResourceManager

用于此类资源查找的 ResourceManager。

```csharp
public static ResourceManager ResourceManager { get; }
```

#### Property Value

 ResourceManager

### <a id="Ink_Canvas_Properties_Strings_Tray_OpenSettings"></a> Tray\_OpenSettings

```csharp
public static string Tray_OpenSettings { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Properties_Strings_Tray_TempShowMainWindow"></a> Tray\_TempShowMainWindow

```csharp
public static string Tray_TempShowMainWindow { get; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_Properties_Strings_GetString_System_String_"></a> GetString\(string\)

根据键获取本地化字符串；若未设置 Culture 则使用当前线程 CurrentUICulture。

```csharp
public static string GetString(string key)
```

#### Parameters

`key` string

#### Returns

 string

