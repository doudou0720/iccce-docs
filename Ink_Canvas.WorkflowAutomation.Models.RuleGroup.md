# <a id="Ink_Canvas_WorkflowAutomation_Models_RuleGroup"></a> Class RuleGroup

Namespace: [Ink\_Canvas.WorkflowAutomation.Models](Ink\_Canvas.WorkflowAutomation.Models.md)  
Assembly: InkCanvasForClass.dll  

代表一个规则组。

```csharp
public class RuleGroup : ObservableObject
```

#### Inheritance

ObservableObject ← 
[RuleGroup](Ink\_Canvas.WorkflowAutomation.Models.RuleGroup.md)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Models_RuleGroup_IsEnabled"></a> IsEnabled

是否启用。

```csharp
public bool IsEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_WorkflowAutomation_Models_RuleGroup_IsReversed"></a> IsReversed

是否反转判断。

```csharp
public bool IsReversed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_WorkflowAutomation_Models_RuleGroup_Mode"></a> Mode

判断模式。

```csharp
public RulesetLogicalMode Mode { get; set; }
```

#### Property Value

 [RulesetLogicalMode](Ink\_Canvas.WorkflowAutomation.Enums.RulesetLogicalMode.md)

### <a id="Ink_Canvas_WorkflowAutomation_Models_RuleGroup_Rules"></a> Rules

规则条目。

```csharp
public ObservableCollection<Rule> Rules { get; set; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<[Rule](Ink\_Canvas.WorkflowAutomation.Models.Rule.md)\>

### <a id="Ink_Canvas_WorkflowAutomation_Models_RuleGroup_State"></a> State

满足状态

```csharp
public int State { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

