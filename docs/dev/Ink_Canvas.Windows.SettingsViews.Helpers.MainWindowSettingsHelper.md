# <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper"></a> Class MainWindowSettingsHelper

Namespace: [Ink\_Canvas.Windows.SettingsViews.Helpers](Ink\_Canvas.Windows.SettingsViews.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class MainWindowSettingsHelper
```

#### Inheritance

object ← 
[MainWindowSettingsHelper](Ink\_Canvas.Windows.SettingsViews.Helpers.MainWindowSettingsHelper.md)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_EnableTouchSupportForControls_DependencyObject_"></a> EnableTouchSupportForControls\(DependencyObject\)

```csharp
public static void EnableTouchSupportForControls(DependencyObject parent)
```

#### Parameters

`parent` DependencyObject

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_ForceUpdateAllPanelsTheme"></a> ForceUpdateAllPanelsTheme\(\)

```csharp
public static void ForceUpdateAllPanelsTheme()
```

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeCheckBoxCheckedChanged_System_String_System_Boolean_"></a> InvokeCheckBoxCheckedChanged\(string, bool\)

```csharp
public static void InvokeCheckBoxCheckedChanged(string checkBoxName, bool isChecked)
```

#### Parameters

`checkBoxName` string

`isChecked` bool

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeComboBoxSelectionChanged_System_String_System_Object_"></a> InvokeComboBoxSelectionChanged\(string, object\)

```csharp
public static void InvokeComboBoxSelectionChanged(string comboBoxName, object selectedItem)
```

#### Parameters

`comboBoxName` string

`selectedItem` object

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeComboBoxSelectionChangedWithThemeCheck_System_String_System_Object_"></a> InvokeComboBoxSelectionChangedWithThemeCheck\(string, object\)

```csharp
public static void InvokeComboBoxSelectionChangedWithThemeCheck(string comboBoxName, object selectedItem)
```

#### Parameters

`comboBoxName` string

`selectedItem` object

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeMainWindowMethod_System_String_System_Object___"></a> InvokeMainWindowMethod\(string, params object\[\]\)

```csharp
public static void InvokeMainWindowMethod(string methodName, params object[] parameters)
```

#### Parameters

`methodName` string

`parameters` object\[\]

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeSliderValueChanged_System_String_System_Double_"></a> InvokeSliderValueChanged\(string, double\)

```csharp
public static void InvokeSliderValueChanged(string sliderName, double value)
```

#### Parameters

`sliderName` string

`value` double

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeTextBoxTextChanged_System_String_System_String_"></a> InvokeTextBoxTextChanged\(string, string\)

```csharp
public static void InvokeTextBoxTextChanged(string textBoxName, string text)
```

#### Parameters

`textBoxName` string

`text` string

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeToggleSwitchToggled_System_String_System_Boolean_"></a> InvokeToggleSwitchToggled\(string, bool\)

```csharp
public static void InvokeToggleSwitchToggled(string toggleSwitchName, bool isOn)
```

#### Parameters

`toggleSwitchName` string

`isOn` bool

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeToggleSwitchToggledWithThemeCheck_System_String_System_Boolean_"></a> InvokeToggleSwitchToggledWithThemeCheck\(string, bool\)

```csharp
public static void InvokeToggleSwitchToggledWithThemeCheck(string toggleSwitchName, bool isOn)
```

#### Parameters

`toggleSwitchName` string

`isOn` bool

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_NotifySettingsPanelsSyncState_System_String_"></a> NotifySettingsPanelsSyncState\(string\)

```csharp
public static void NotifySettingsPanelsSyncState(string controlName)
```

#### Parameters

`controlName` string

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_NotifyThemeUpdateIfNeeded_System_String_"></a> NotifyThemeUpdateIfNeeded\(string\)

```csharp
public static void NotifyThemeUpdateIfNeeded(string controlName)
```

#### Parameters

`controlName` string

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_UpdateSettingDirectly_Action_System_String_"></a> UpdateSettingDirectly\(Action, string\)

```csharp
public static void UpdateSettingDirectly(Action action, string controlName = null)
```

#### Parameters

`action` Action

`controlName` string

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_UpdateSettingSafely_Action_System_String_System_String_System_Object___"></a> UpdateSettingSafely\(Action, string, string, params object\[\]\)

```csharp
public static void UpdateSettingSafely(Action action, string eventHandlerName = null, string controlName = null, params object[] eventHandlerParams)
```

#### Parameters

`action` Action

`eventHandlerName` string

`controlName` string

`eventHandlerParams` object\[\]

