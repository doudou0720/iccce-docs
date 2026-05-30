# <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry"></a> Class ToolbarComponentEntry

Namespace: [Ink\_Canvas.Controls.Toolbar.FloatingToolbar](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ToolbarComponentEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ToolbarComponentEntry](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarComponentEntry.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_Children"></a> Children

```csharp
[JsonProperty("children")]
public List<ToolbarComponentEntry> Children { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ToolbarComponentEntry](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarComponentEntry.md)\>

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_HidingRule"></a> HidingRule

```csharp
[JsonProperty("hidingRule")]
public ToolbarHidingRule HidingRule { get; set; }
```

#### Property Value

 [ToolbarHidingRule](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarHidingRule.md)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_HidingRuleset"></a> HidingRuleset

```csharp
[JsonProperty("hidingRuleset")]
public ToolbarRuleset HidingRuleset { get; set; }
```

#### Property Value

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_Id"></a> Id

```csharp
[JsonProperty("id")]
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_InstanceId"></a> InstanceId

```csharp
[JsonProperty("instanceId")]
public string InstanceId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_IsGroup"></a> IsGroup

```csharp
public bool IsGroup { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_PreventHideOnDragClick"></a> PreventHideOnDragClick

```csharp
[JsonProperty("preventHideOnDragClick")]
public bool PreventHideOnDragClick { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_Settings"></a> Settings

```csharp
[JsonProperty("settings")]
public Dictionary<string, object> Settings { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_ShowSeparateBorder"></a> ShowSeparateBorder

```csharp
[JsonProperty("showSeparateBorder")]
public bool ShowSeparateBorder { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_GetSettingBool_System_String_"></a> GetSettingBool\(string\)

```csharp
public bool GetSettingBool(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_GetSettingDouble_System_String_"></a> GetSettingDouble\(string\)

```csharp
public double? GetSettingDouble(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_GetSettingString_System_String_"></a> GetSettingString\(string\)

```csharp
public string GetSettingString(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_ToolbarComponentEntry_SetSetting_System_String_System_Object_"></a> SetSetting\(string, object\)

```csharp
public void SetSetting(string key, object value)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

