# <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry"></a> Class ToolbarRegistry

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class ToolbarRegistry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ToolbarRegistry](Ink\_Canvas.Controls.Toolbar.ToolbarRegistry.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_HidingRulesetProperty"></a> HidingRulesetProperty

```csharp
public static readonly DependencyProperty HidingRulesetProperty
```

#### Field Value

 [DependencyProperty](https://learn.microsoft.com/dotnet/api/system.windows.dependencyproperty)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_IsContentCollapsedByUserProperty"></a> IsContentCollapsedByUserProperty

```csharp
public static readonly DependencyProperty IsContentCollapsedByUserProperty
```

#### Field Value

 [DependencyProperty](https://learn.microsoft.com/dotnet/api/system.windows.dependencyproperty)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_PreventHideOnDragClickProperty"></a> PreventHideOnDragClickProperty

```csharp
public static readonly DependencyProperty PreventHideOnDragClickProperty
```

#### Field Value

 [DependencyProperty](https://learn.microsoft.com/dotnet/api/system.windows.dependencyproperty)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_UseRedStyleProperty"></a> UseRedStyleProperty

```csharp
public static readonly DependencyProperty UseRedStyleProperty
```

#### Field Value

 [DependencyProperty](https://learn.microsoft.com/dotnet/api/system.windows.dependencyproperty)

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_AvailableConditions"></a> AvailableConditions

```csharp
public static List<KeyValuePair<string, string>> AvailableConditions { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_IsContentCollapsedByUser"></a> IsContentCollapsedByUser

```csharp
public static bool IsContentCollapsedByUser { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_ClearInjected_System_Windows_Controls_Panel_"></a> ClearInjected\(Panel\)

```csharp
public static void ClearInjected(Panel container)
```

#### Parameters

`container` [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_CreateDefaultLayout"></a> CreateDefaultLayout\(\)

```csharp
public static ToolbarLayoutSettings CreateDefaultLayout()
```

#### Returns

 [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_DeleteConfigFile_System_String_"></a> DeleteConfigFile\(string\)

```csharp
public static void DeleteConfigFile(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_Discover"></a> Discover\(\)

```csharp
public static IReadOnlyList<IToolbarItem> Discover()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IToolbarItem](Ink\_Canvas.Controls.Toolbar.IToolbarItem.md)\>

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_EnsureDefaultConfigExists"></a> EnsureDefaultConfigExists\(\)

```csharp
public static void EnsureDefaultConfigExists()
```

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_EvaluateRuleset_Ink_Canvas_Controls_Toolbar_ToolbarRuleset_System_Collections_Generic_Dictionary_System_String_System_Boolean__"></a> EvaluateRuleset\(ToolbarRuleset, Dictionary<string, bool\>\)

```csharp
public static bool EvaluateRuleset(ToolbarRuleset ruleset, Dictionary<string, bool> context)
```

#### Parameters

`ruleset` [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

`context` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_GetConfigDirectory"></a> GetConfigDirectory\(\)

```csharp
public static string GetConfigDirectory()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_GetConfigFilePath_System_String_"></a> GetConfigFilePath\(string\)

```csharp
public static string GetConfigFilePath(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_GetHidingRuleset_System_Windows_FrameworkElement_"></a> GetHidingRuleset\(FrameworkElement\)

```csharp
public static ToolbarRuleset GetHidingRuleset(FrameworkElement element)
```

#### Parameters

`element` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

#### Returns

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_GetIsContentCollapsedByUser_System_Windows_FrameworkElement_"></a> GetIsContentCollapsedByUser\(FrameworkElement\)

```csharp
public static bool GetIsContentCollapsedByUser(FrameworkElement element)
```

#### Parameters

`element` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_GetPreventHideOnDragClick_System_Windows_FrameworkElement_"></a> GetPreventHideOnDragClick\(FrameworkElement\)

```csharp
public static bool GetPreventHideOnDragClick(FrameworkElement element)
```

#### Parameters

`element` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_GetUseRedStyle_System_Windows_FrameworkElement_"></a> GetUseRedStyle\(FrameworkElement\)

```csharp
public static bool GetUseRedStyle(FrameworkElement element)
```

#### Parameters

`element` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_ListConfigFiles"></a> ListConfigFiles\(\)

```csharp
public static List<string> ListConfigFiles()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_LoadActiveConfig"></a> LoadActiveConfig\(\)

```csharp
public static ToolbarLayoutSettings LoadActiveConfig()
```

#### Returns

 [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_LoadConfigFile_System_String_"></a> LoadConfigFile\(string\)

```csharp
public static ToolbarLayoutSettings LoadConfigFile(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_Populate_Ink_Canvas_Controls_Toolbar_IToolbarHost_System_Windows_Controls_Panel_Ink_Canvas_Controls_Toolbar_ToolbarLayoutSettings_"></a> Populate\(IToolbarHost, Panel, ToolbarLayoutSettings\)

```csharp
public static void Populate(IToolbarHost host, Panel rootPanel, ToolbarLayoutSettings layout)
```

#### Parameters

`host` [IToolbarHost](Ink\_Canvas.Controls.Toolbar.IToolbarHost.md)

`rootPanel` [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)

`layout` [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_SaveConfigFile_System_String_Ink_Canvas_Controls_Toolbar_ToolbarLayoutSettings_"></a> SaveConfigFile\(string, ToolbarLayoutSettings\)

```csharp
public static void SaveConfigFile(string name, ToolbarLayoutSettings layout)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`layout` [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_SetHidingRuleset_System_Windows_FrameworkElement_Ink_Canvas_Controls_Toolbar_ToolbarRuleset_"></a> SetHidingRuleset\(FrameworkElement, ToolbarRuleset\)

```csharp
public static void SetHidingRuleset(FrameworkElement element, ToolbarRuleset value)
```

#### Parameters

`element` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

`value` [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_SetIsContentCollapsedByUser_System_Windows_FrameworkElement_System_Boolean_"></a> SetIsContentCollapsedByUser\(FrameworkElement, bool\)

```csharp
public static void SetIsContentCollapsedByUser(FrameworkElement element, bool value)
```

#### Parameters

`element` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

`value` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_SetPreventHideOnDragClick_System_Windows_FrameworkElement_System_Boolean_"></a> SetPreventHideOnDragClick\(FrameworkElement, bool\)

```csharp
public static void SetPreventHideOnDragClick(FrameworkElement element, bool value)
```

#### Parameters

`element` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

`value` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_SetUseRedStyle_System_Windows_FrameworkElement_System_Boolean_"></a> SetUseRedStyle\(FrameworkElement, bool\)

```csharp
public static void SetUseRedStyle(FrameworkElement element, bool value)
```

#### Parameters

`element` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

`value` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_UpdateVisibilityByMode_System_Windows_Controls_Panel_System_Boolean_System_Boolean_"></a> UpdateVisibilityByMode\(Panel, bool, bool\)

```csharp
public static void UpdateVisibilityByMode(Panel rootPanel, bool isAnnotating, bool isPptMode)
```

#### Parameters

`rootPanel` [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)

`isAnnotating` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`isPptMode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

