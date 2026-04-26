# <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper"></a> Class WindowSettingsHelper

Namespace: [Ink\_Canvas.Windows.SettingsViews.Helpers](Ink\_Canvas.Windows.SettingsViews.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class WindowSettingsHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WindowSettingsHelper](Ink\_Canvas.Windows.SettingsViews.Helpers.WindowSettingsHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_IsTemporarilyDisablingNoFocusMode"></a> IsTemporarilyDisablingNoFocusMode

```csharp
public static bool IsTemporarilyDisablingNoFocusMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_OnPptOnlyModeChanged"></a> OnPptOnlyModeChanged

```csharp
public static Action<bool> OnPptOnlyModeChanged { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_OnStartKillProcessTimer"></a> OnStartKillProcessTimer

```csharp
public static Action OnStartKillProcessTimer { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_OnStopKillProcessTimer"></a> OnStopKillProcessTimer

```csharp
public static Action OnStopKillProcessTimer { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_ApplyAlwaysOnTop_System_Windows_Window_"></a> ApplyAlwaysOnTop\(Window\)

```csharp
public static void ApplyAlwaysOnTop(Window window)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_ApplyNoFocusMode_System_Windows_Window_"></a> ApplyNoFocusMode\(Window\)

```csharp
public static void ApplyNoFocusMode(Window window)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_ApplyPptOnlyMode_System_Windows_Window_System_Boolean_"></a> ApplyPptOnlyMode\(Window, bool\)

```csharp
public static void ApplyPptOnlyMode(Window window, bool isEnabled)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

`isEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_ApplyUIAccessTopMost_System_Windows_Window_"></a> ApplyUIAccessTopMost\(Window\)

```csharp
public static void ApplyUIAccessTopMost(Window window)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_InstallKeyboardHook"></a> InstallKeyboardHook\(\)

```csharp
public static void InstallKeyboardHook()
```

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_PauseTopmostMaintenance"></a> PauseTopmostMaintenance\(\)

```csharp
public static void PauseTopmostMaintenance()
```

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_ResumeTopmostMaintenance_System_Windows_Window_"></a> ResumeTopmostMaintenance\(Window\)

```csharp
public static void ResumeTopmostMaintenance(Window window)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_SetTopmostBasedOnSettings_System_Windows_Window_System_Boolean_"></a> SetTopmostBasedOnSettings\(Window, bool\)

```csharp
public static void SetTopmostBasedOnSettings(Window window, bool shouldBeTopmost)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

`shouldBeTopmost` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_SetWindowMode_System_Windows_Window_"></a> SetWindowMode\(Window\)

```csharp
public static void SetWindowMode(Window window)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_UninstallKeyboardHook"></a> UninstallKeyboardHook\(\)

```csharp
public static void UninstallKeyboardHook()
```

