# <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleGroup"></a> Class ToolbarRuleGroup

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ToolbarRuleGroup
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ToolbarRuleGroup](Ink\_Canvas.Controls.Toolbar.ToolbarRuleGroup.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleGroup_IsEnabled"></a> IsEnabled

```csharp
[JsonProperty("isEnabled")]
public bool IsEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleGroup_IsReversed"></a> IsReversed

```csharp
[JsonProperty("isReversed")]
public bool IsReversed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleGroup_Mode"></a> Mode

```csharp
[JsonProperty("mode")]
public ToolbarLogicalMode Mode { get; set; }
```

#### Property Value

 [ToolbarLogicalMode](Ink\_Canvas.Controls.Toolbar.ToolbarLogicalMode.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleGroup_Rules"></a> Rules

```csharp
[JsonProperty("rules")]
public List<ToolbarRule> Rules { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ToolbarRule](Ink\_Canvas.Controls.Toolbar.ToolbarRule.md)\>

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleGroup_State"></a> State

```csharp
[JsonIgnore]
public int State { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleGroup_Clone"></a> Clone\(\)

```csharp
public ToolbarRuleGroup Clone()
```

#### Returns

 [ToolbarRuleGroup](Ink\_Canvas.Controls.Toolbar.ToolbarRuleGroup.md)

