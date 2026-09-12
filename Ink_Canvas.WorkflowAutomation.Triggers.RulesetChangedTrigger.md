# <a id="Ink_Canvas_WorkflowAutomation_Triggers_RulesetChangedTrigger"></a> Class RulesetChangedTrigger

Namespace: [Ink\_Canvas.WorkflowAutomation.Triggers](Ink\_Canvas.WorkflowAutomation.Triggers.md)  
Assembly: InkCanvasForClass.dll  

规则集状态更新时触发的触发器。
当任何规则条件可能发生变化时触发。

```csharp
[TriggerInfo("inkcanvas.rulesetchanged", "规则集更新", "Refresh")]
public class RulesetChangedTrigger : TriggerBase<RulesetChangedSettings>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TriggerBase](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md) ← 
[TriggerBase<RulesetChangedSettings\>](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase\-1.md) ← 
[RulesetChangedTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.RulesetChangedTrigger.md)

#### Inherited Members

[TriggerBase<RulesetChangedSettings\>.Settings](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase\-1.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_1\_Settings), 
[TriggerBase.Trigger\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_Trigger), 
[TriggerBase.TriggerRevert\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_TriggerRevert), 
[TriggerBase.Loaded\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_Loaded), 
[TriggerBase.UnLoaded\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_UnLoaded), 
[TriggerBase.AssociatedWorkflow](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_AssociatedWorkflow), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Triggers_RulesetChangedTrigger_Loaded"></a> Loaded\(\)

当此触发器被加载到工作流上时，调用此方法。

```csharp
public override void Loaded()
```

### <a id="Ink_Canvas_WorkflowAutomation_Triggers_RulesetChangedTrigger_UnLoaded"></a> UnLoaded\(\)

当此触发器被从工作流上卸载时，调用此方法。

```csharp
public override void UnLoaded()
```

