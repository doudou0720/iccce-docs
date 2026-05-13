# <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleset"></a> Class ToolbarRuleset

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ToolbarRuleset
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleset_Groups"></a> Groups

```csharp
[JsonProperty("groups")]
public List<ToolbarRuleGroup> Groups { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ToolbarRuleGroup](Ink\_Canvas.Controls.Toolbar.ToolbarRuleGroup.md)\>

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleset_IsReversed"></a> IsReversed

```csharp
[JsonProperty("isReversed")]
public bool IsReversed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleset_Mode"></a> Mode

```csharp
[JsonProperty("mode")]
public ToolbarLogicalMode Mode { get; set; }
```

#### Property Value

 [ToolbarLogicalMode](Ink\_Canvas.Controls.Toolbar.ToolbarLogicalMode.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleset_State"></a> State

```csharp
[JsonIgnore]
public int State { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleset_AlwaysShow"></a> AlwaysShow\(\)

```csharp
public static ToolbarRuleset AlwaysShow()
```

#### Returns

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleset_AnnotationOnly"></a> AnnotationOnly\(\)

```csharp
public static ToolbarRuleset AnnotationOnly()
```

#### Returns

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleset_Clone"></a> Clone\(\)

```csharp
public ToolbarRuleset Clone()
```

#### Returns

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleset_PptAnnotationOnly"></a> PptAnnotationOnly\(\)

```csharp
public static ToolbarRuleset PptAnnotationOnly()
```

#### Returns

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleset_PptOnly"></a> PptOnly\(\)

```csharp
public static ToolbarRuleset PptOnly()
```

#### Returns

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleset_WithHideOnCollapsed"></a> WithHideOnCollapsed\(\)

```csharp
public ToolbarRuleset WithHideOnCollapsed()
```

#### Returns

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRuleset_WithPreventHideOnCollapsed"></a> WithPreventHideOnCollapsed\(\)

```csharp
public ToolbarRuleset WithPreventHideOnCollapsed()
```

#### Returns

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

