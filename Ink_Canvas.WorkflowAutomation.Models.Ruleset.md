# <a id="Ink_Canvas_WorkflowAutomation_Models_Ruleset"></a> Class Ruleset

Namespace: [Ink\_Canvas.WorkflowAutomation.Models](Ink\_Canvas.WorkflowAutomation.Models.md)  
Assembly: InkCanvasForClass.dll  

代表一个包含若干个规则的规则集。

```csharp
public class Ruleset : ObservableObject
```

#### Inheritance

ObservableObject ← 
[Ruleset](Ink\_Canvas.WorkflowAutomation.Models.Ruleset.md)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Models_Ruleset_Groups"></a> Groups

规则分组

```csharp
public ObservableCollection<RuleGroup> Groups { get; set; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<[RuleGroup](Ink\_Canvas.WorkflowAutomation.Models.RuleGroup.md)\>

### <a id="Ink_Canvas_WorkflowAutomation_Models_Ruleset_IsReversed"></a> IsReversed

是否反转判断。

```csharp
public bool IsReversed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_WorkflowAutomation_Models_Ruleset_Mode"></a> Mode

逻辑模式。

```csharp
public RulesetLogicalMode Mode { get; set; }
```

#### Property Value

 [RulesetLogicalMode](Ink\_Canvas.WorkflowAutomation.Enums.RulesetLogicalMode.md)

### <a id="Ink_Canvas_WorkflowAutomation_Models_Ruleset_State"></a> State

满足状态

```csharp
public int State { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

