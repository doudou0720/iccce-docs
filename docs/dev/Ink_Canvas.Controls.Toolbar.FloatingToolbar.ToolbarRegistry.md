# <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry"></a> Class ToolbarRegistry

Namespace: [Ink\_Canvas.Controls.Toolbar.FloatingToolbar](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class ToolbarRegistry
```

#### Inheritance

object ← 
[ToolbarRegistry](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarRegistry.md)

## Fields

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_HidingRulesetProperty"></a> HidingRulesetProperty

```csharp
public static readonly DependencyProperty HidingRulesetProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_IsContentCollapsedByUserProperty"></a> IsContentCollapsedByUserProperty

```csharp
public static readonly DependencyProperty IsContentCollapsedByUserProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_PreventHideOnDragClickProperty"></a> PreventHideOnDragClickProperty

```csharp
public static readonly DependencyProperty PreventHideOnDragClickProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_UseRedStyleProperty"></a> UseRedStyleProperty

```csharp
public static readonly DependencyProperty UseRedStyleProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_AvailableConditions"></a> AvailableConditions

```csharp
public static List<KeyValuePair<string, string>> AvailableConditions { get; }
```

#### Property Value

 List<KeyValuePair<string, string\>\>

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_IsContentCollapsedByUser"></a> IsContentCollapsedByUser

```csharp
public static bool IsContentCollapsedByUser { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_ClearInjected_Panel_"></a> ClearInjected\(Panel\)

```csharp
public static void ClearInjected(Panel container)
```

#### Parameters

`container` Panel

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_CreateDefaultLayout"></a> CreateDefaultLayout\(\)

```csharp
public static ToolbarLayoutSettings CreateDefaultLayout()
```

#### Returns

 [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_DeleteConfigFile_System_String_"></a> DeleteConfigFile\(string\)

```csharp
public static void DeleteConfigFile(string name)
```

#### Parameters

`name` string

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_Discover"></a> Discover\(\)

```csharp
public static IReadOnlyList<IToolbarItem> Discover()
```

#### Returns

 IReadOnlyList<[IToolbarItem](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.IToolbarItem.md)\>

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_EnsureDefaultConfigExists"></a> EnsureDefaultConfigExists\(\)

```csharp
public static void EnsureDefaultConfigExists()
```

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_EvaluateRuleset_Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRuleset_Dictionary_System_String_System_Boolean__"></a> EvaluateRuleset\(ToolbarRuleset, Dictionary<string, bool\>\)

```csharp
public static bool EvaluateRuleset(ToolbarRuleset ruleset, Dictionary<string, bool> context)
```

#### Parameters

`ruleset` [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarRuleset.md)

`context` Dictionary<string, bool\>

#### Returns

 bool

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_GetConfigDirectory"></a> GetConfigDirectory\(\)

```csharp
public static string GetConfigDirectory()
```

#### Returns

 string

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_GetConfigFilePath_System_String_"></a> GetConfigFilePath\(string\)

```csharp
public static string GetConfigFilePath(string name)
```

#### Parameters

`name` string

#### Returns

 string

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_GetHidingRuleset_FrameworkElement_"></a> GetHidingRuleset\(FrameworkElement\)

```csharp
public static ToolbarRuleset GetHidingRuleset(FrameworkElement element)
```

#### Parameters

`element` FrameworkElement

#### Returns

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_GetIsContentCollapsedByUser_FrameworkElement_"></a> GetIsContentCollapsedByUser\(FrameworkElement\)

```csharp
public static bool GetIsContentCollapsedByUser(FrameworkElement element)
```

#### Parameters

`element` FrameworkElement

#### Returns

 bool

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_GetPluginItems"></a> GetPluginItems\(\)

```csharp
public static IReadOnlyList<PluginToolbarItemInfo> GetPluginItems()
```

#### Returns

 IReadOnlyList<PluginToolbarItemInfo\>

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_GetPreventHideOnDragClick_FrameworkElement_"></a> GetPreventHideOnDragClick\(FrameworkElement\)

```csharp
public static bool GetPreventHideOnDragClick(FrameworkElement element)
```

#### Parameters

`element` FrameworkElement

#### Returns

 bool

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_GetUseRedStyle_FrameworkElement_"></a> GetUseRedStyle\(FrameworkElement\)

```csharp
public static bool GetUseRedStyle(FrameworkElement element)
```

#### Parameters

`element` FrameworkElement

#### Returns

 bool

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_ListConfigFiles"></a> ListConfigFiles\(\)

```csharp
public static List<string> ListConfigFiles()
```

#### Returns

 List<string\>

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_LoadActiveConfig"></a> LoadActiveConfig\(\)

```csharp
public static ToolbarLayoutSettings LoadActiveConfig()
```

#### Returns

 [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_LoadConfigFile_System_String_"></a> LoadConfigFile\(string\)

```csharp
public static ToolbarLayoutSettings LoadConfigFile(string name)
```

#### Parameters

`name` string

#### Returns

 [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_Populate_Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarHost_Panel_Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarLayoutSettings_Orientation_"></a> Populate\(IToolbarHost, Panel, ToolbarLayoutSettings, Orientation\)

```csharp
public static void Populate(IToolbarHost host, Panel rootPanel, ToolbarLayoutSettings layout, Orientation orientation = null)
```

#### Parameters

`host` [IToolbarHost](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.IToolbarHost.md)

`rootPanel` Panel

`layout` [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarLayoutSettings.md)

`orientation` Orientation

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_RegisterPluginItem_Ink_Canvas_Plugins_PluginToolbarItemInfo_System_Boolean_"></a> RegisterPluginItem\(PluginToolbarItemInfo, bool\)

```csharp
public static void RegisterPluginItem(PluginToolbarItemInfo itemInfo, bool autoAddToActiveConfig = true)
```

#### Parameters

`itemInfo` PluginToolbarItemInfo

`autoAddToActiveConfig` bool

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_RemovePluginEntryFromAllConfigs_System_String_"></a> RemovePluginEntryFromAllConfigs\(string\)

从所有浮动工具栏配置文件里移除指定 Id 的组件条目（递归处理组合子项）。
插件卸载时调用：用户把插件组件拖进了工具栏，卸载后该组件已不存在，
不清理会导致 Populate 反复刷 "未找到条目" 警告，且工具栏持续保留空白位。

```csharp
public static int RemovePluginEntryFromAllConfigs(string itemId)
```

#### Parameters

`itemId` string

#### Returns

 int

被修改的配置文件数量。

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_SaveConfigFile_System_String_Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarLayoutSettings_"></a> SaveConfigFile\(string, ToolbarLayoutSettings\)

```csharp
public static void SaveConfigFile(string name, ToolbarLayoutSettings layout)
```

#### Parameters

`name` string

`layout` [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_SetHidingRuleset_FrameworkElement_Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRuleset_"></a> SetHidingRuleset\(FrameworkElement, ToolbarRuleset\)

```csharp
public static void SetHidingRuleset(FrameworkElement element, ToolbarRuleset value)
```

#### Parameters

`element` FrameworkElement

`value` [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_SetIsContentCollapsedByUser_FrameworkElement_System_Boolean_"></a> SetIsContentCollapsedByUser\(FrameworkElement, bool\)

```csharp
public static void SetIsContentCollapsedByUser(FrameworkElement element, bool value)
```

#### Parameters

`element` FrameworkElement

`value` bool

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_SetPreventHideOnDragClick_FrameworkElement_System_Boolean_"></a> SetPreventHideOnDragClick\(FrameworkElement, bool\)

```csharp
public static void SetPreventHideOnDragClick(FrameworkElement element, bool value)
```

#### Parameters

`element` FrameworkElement

`value` bool

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_SetUseRedStyle_FrameworkElement_System_Boolean_"></a> SetUseRedStyle\(FrameworkElement, bool\)

```csharp
public static void SetUseRedStyle(FrameworkElement element, bool value)
```

#### Parameters

`element` FrameworkElement

`value` bool

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_UnregisterPluginItem_System_String_"></a> UnregisterPluginItem\(string\)

注销插件注册的工具栏组件，断开对插件程序集中委托（ViewFactory 等）的引用。
热重载必需：这些委托只要还留在静态表里，插件 ALC 就永远卸载不掉。
只清注册表与已构建的 <xref href="Ink_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarRegistry._items" data-throw-if-not-resolved="false"></xref> 缓存，不动用户的布局配置文件——
重载后同 Id 组件会重新注册，用户摆好的位置得以保留。

```csharp
public static bool UnregisterPluginItem(string itemId)
```

#### Parameters

`itemId` string

#### Returns

 bool

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarRegistry_UpdateVisibilityByMode_Panel_System_Boolean_System_Boolean_"></a> UpdateVisibilityByMode\(Panel, bool, bool\)

```csharp
public static void UpdateVisibilityByMode(Panel rootPanel, bool isAnnotating, bool isPPTMode)
```

#### Parameters

`rootPanel` Panel

`isAnnotating` bool

`isPPTMode` bool

