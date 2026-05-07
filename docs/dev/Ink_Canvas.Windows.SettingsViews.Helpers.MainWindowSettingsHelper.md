# <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper"></a> Class MainWindowSettingsHelper

Namespace: [Ink\_Canvas.Windows.SettingsViews.Helpers](Ink\_Canvas.Windows.SettingsViews.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class MainWindowSettingsHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MainWindowSettingsHelper](Ink\_Canvas.Windows.SettingsViews.Helpers.MainWindowSettingsHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_EnableTouchSupportForControls_System_Windows_DependencyObject_"></a> EnableTouchSupportForControls\(DependencyObject\)

```csharp
public static void EnableTouchSupportForControls(DependencyObject parent)
```

#### Parameters

`parent` [DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_ForceUpdateAllPanelsTheme"></a> ForceUpdateAllPanelsTheme\(\)

```csharp
public static void ForceUpdateAllPanelsTheme()
```

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeCheckBoxCheckedChanged_System_String_System_Boolean_"></a> InvokeCheckBoxCheckedChanged\(string, bool\)

```csharp
public static void InvokeCheckBoxCheckedChanged(string checkBoxName, bool isChecked)
```

#### Parameters

`checkBoxName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isChecked` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeComboBoxSelectionChanged_System_String_System_Object_"></a> InvokeComboBoxSelectionChanged\(string, object\)

```csharp
public static void InvokeComboBoxSelectionChanged(string comboBoxName, object selectedItem)
```

#### Parameters

`comboBoxName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`selectedItem` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeComboBoxSelectionChangedWithThemeCheck_System_String_System_Object_"></a> InvokeComboBoxSelectionChangedWithThemeCheck\(string, object\)

```csharp
public static void InvokeComboBoxSelectionChangedWithThemeCheck(string comboBoxName, object selectedItem)
```

#### Parameters

`comboBoxName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`selectedItem` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeMainWindowMethod_System_String_System_Object___"></a> InvokeMainWindowMethod\(string, params object\[\]\)

```csharp
public static void InvokeMainWindowMethod(string methodName, params object[] parameters)
```

#### Parameters

`methodName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`parameters` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeSliderValueChanged_System_String_System_Double_"></a> InvokeSliderValueChanged\(string, double\)

```csharp
public static void InvokeSliderValueChanged(string sliderName, double value)
```

#### Parameters

`sliderName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeTextBoxTextChanged_System_String_System_String_"></a> InvokeTextBoxTextChanged\(string, string\)

```csharp
public static void InvokeTextBoxTextChanged(string textBoxName, string text)
```

#### Parameters

`textBoxName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeToggleSwitchToggled_System_String_System_Boolean_"></a> InvokeToggleSwitchToggled\(string, bool\)

```csharp
public static void InvokeToggleSwitchToggled(string toggleSwitchName, bool isOn)
```

#### Parameters

`toggleSwitchName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isOn` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_InvokeToggleSwitchToggledWithThemeCheck_System_String_System_Boolean_"></a> InvokeToggleSwitchToggledWithThemeCheck\(string, bool\)

```csharp
public static void InvokeToggleSwitchToggledWithThemeCheck(string toggleSwitchName, bool isOn)
```

#### Parameters

`toggleSwitchName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isOn` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_NotifySettingsPanelsSyncState_System_String_"></a> NotifySettingsPanelsSyncState\(string\)

```csharp
public static void NotifySettingsPanelsSyncState(string controlName)
```

#### Parameters

`controlName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_NotifyThemeUpdateIfNeeded_System_String_"></a> NotifyThemeUpdateIfNeeded\(string\)

```csharp
public static void NotifyThemeUpdateIfNeeded(string controlName)
```

#### Parameters

`controlName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_UpdateSettingDirectly_System_Action_System_String_"></a> UpdateSettingDirectly\(Action, string\)

```csharp
public static void UpdateSettingDirectly(Action action, string controlName = null)
```

#### Parameters

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

`controlName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_MainWindowSettingsHelper_UpdateSettingSafely_System_Action_System_String_System_String_System_Object___"></a> UpdateSettingSafely\(Action, string, string, params object\[\]\)

```csharp
public static void UpdateSettingSafely(Action action, string eventHandlerName = null, string controlName = null, params object[] eventHandlerParams)
```

#### Parameters

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

`eventHandlerName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`controlName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`eventHandlerParams` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

