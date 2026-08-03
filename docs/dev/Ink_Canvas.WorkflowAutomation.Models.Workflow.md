# <a id="Ink_Canvas_WorkflowAutomation_Models_Workflow"></a> Class Workflow

Namespace: [Ink\_Canvas.WorkflowAutomation.Models](Ink\_Canvas.WorkflowAutomation.Models.md)  
Assembly: InkCanvasForClass.dll  

代表一个自动化工作流。自动化工作流会被自动触发和恢复。

```csharp
public class Workflow : ObservableObject
```

#### Inheritance

ObservableObject ← 
[Workflow](Ink\_Canvas.WorkflowAutomation.Models.Workflow.md)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Models_Workflow_ActionSet"></a> ActionSet

行动组

```csharp
public ActionSet ActionSet { get; set; }
```

#### Property Value

 [ActionSet](Ink\_Canvas.WorkflowAutomation.Models.ActionSet.md)

### <a id="Ink_Canvas_WorkflowAutomation_Models_Workflow_IsConditionEnabled"></a> IsConditionEnabled

是否启用条件判定

```csharp
public bool IsConditionEnabled { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_WorkflowAutomation_Models_Workflow_Ruleset"></a> Ruleset

规则集

```csharp
public Ruleset Ruleset { get; set; }
```

#### Property Value

 [Ruleset](Ink\_Canvas.WorkflowAutomation.Models.Ruleset.md)

### <a id="Ink_Canvas_WorkflowAutomation_Models_Workflow_Triggers"></a> Triggers

触发此工作流的触发器

```csharp
public ObservableCollection<TriggerSettings> Triggers { get; set; }
```

#### Property Value

 ObservableCollection<[TriggerSettings](Ink\_Canvas.WorkflowAutomation.Models.TriggerSettings.md)\>

