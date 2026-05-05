# <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper"></a> Class WindowSettingsHelper

Namespace: [Ink\_Canvas.Windows.SettingsViews.Helpers](Ink\_Canvas.Windows.SettingsViews.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class WindowSettingsHelper
```

#### Inheritance

object ← 
[WindowSettingsHelper](Ink\_Canvas.Windows.SettingsViews.Helpers.WindowSettingsHelper.md)

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_IsTemporarilyDisablingNoFocusMode"></a> IsTemporarilyDisablingNoFocusMode

```csharp
public static bool IsTemporarilyDisablingNoFocusMode { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_OnPptOnlyModeChanged"></a> OnPptOnlyModeChanged

```csharp
public static Action<bool> OnPptOnlyModeChanged { get; set; }
```

#### Property Value

 Action<bool\>

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_OnStartKillProcessTimer"></a> OnStartKillProcessTimer

```csharp
public static Action OnStartKillProcessTimer { get; set; }
```

#### Property Value

 Action

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_OnStopKillProcessTimer"></a> OnStopKillProcessTimer

```csharp
public static Action OnStopKillProcessTimer { get; set; }
```

#### Property Value

 Action

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_ApplyAlwaysOnTop_Window_"></a> ApplyAlwaysOnTop\(Window\)

```csharp
public static void ApplyAlwaysOnTop(Window window)
```

#### Parameters

`window` Window

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_ApplyNoFocusMode_Window_"></a> ApplyNoFocusMode\(Window\)

```csharp
public static void ApplyNoFocusMode(Window window)
```

#### Parameters

`window` Window

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_ApplyPptOnlyMode_Window_System_Boolean_"></a> ApplyPptOnlyMode\(Window, bool\)

```csharp
public static void ApplyPptOnlyMode(Window window, bool isEnabled)
```

#### Parameters

`window` Window

`isEnabled` bool

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_ApplyUIAccessTopMost_Window_"></a> ApplyUIAccessTopMost\(Window\)

```csharp
public static void ApplyUIAccessTopMost(Window window)
```

#### Parameters

`window` Window

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_InstallKeyboardHook"></a> InstallKeyboardHook\(\)

```csharp
public static void InstallKeyboardHook()
```

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_PauseTopmostMaintenance"></a> PauseTopmostMaintenance\(\)

```csharp
public static void PauseTopmostMaintenance()
```

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_ResumeTopmostMaintenance_Window_"></a> ResumeTopmostMaintenance\(Window\)

```csharp
public static void ResumeTopmostMaintenance(Window window)
```

#### Parameters

`window` Window

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_SetTopmostBasedOnSettings_Window_System_Boolean_"></a> SetTopmostBasedOnSettings\(Window, bool\)

```csharp
public static void SetTopmostBasedOnSettings(Window window, bool shouldBeTopmost)
```

#### Parameters

`window` Window

`shouldBeTopmost` bool

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_SetWindowMode_Window_"></a> SetWindowMode\(Window\)

```csharp
public static void SetWindowMode(Window window)
```

#### Parameters

`window` Window

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_WindowSettingsHelper_UninstallKeyboardHook"></a> UninstallKeyboardHook\(\)

```csharp
public static void UninstallKeyboardHook()
```

