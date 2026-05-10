# <a id="Ink_Canvas_Controls_Toolbar_ToolbarComponentEntry"></a> Class ToolbarComponentEntry

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ToolbarComponentEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ToolbarComponentEntry](Ink\_Canvas.Controls.Toolbar.ToolbarComponentEntry.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarComponentEntry_Children"></a> Children

```csharp
[JsonProperty("children")]
public List<ToolbarComponentEntry> Children { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ToolbarComponentEntry](Ink\_Canvas.Controls.Toolbar.ToolbarComponentEntry.md)\>

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarComponentEntry_HidingRule"></a> HidingRule

```csharp
[JsonProperty("hidingRule")]
public ToolbarHidingRule HidingRule { get; set; }
```

#### Property Value

 [ToolbarHidingRule](Ink\_Canvas.Controls.Toolbar.ToolbarHidingRule.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarComponentEntry_HidingRuleset"></a> HidingRuleset

```csharp
[JsonProperty("hidingRuleset")]
public ToolbarRuleset HidingRuleset { get; set; }
```

#### Property Value

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarComponentEntry_Id"></a> Id

```csharp
[JsonProperty("id")]
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarComponentEntry_IsGroup"></a> IsGroup

```csharp
public bool IsGroup { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarComponentEntry_Settings"></a> Settings

```csharp
[JsonProperty("settings")]
public Dictionary<string, object> Settings { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarComponentEntry_ShowSeparateBorder"></a> ShowSeparateBorder

```csharp
[JsonProperty("showSeparateBorder")]
public bool ShowSeparateBorder { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

