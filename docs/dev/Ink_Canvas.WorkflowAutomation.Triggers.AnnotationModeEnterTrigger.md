# <a id="Ink_Canvas_WorkflowAutomation_Triggers_AnnotationModeEnterTrigger"></a> Class AnnotationModeEnterTrigger

Namespace: [Ink\_Canvas.WorkflowAutomation.Triggers](Ink\_Canvas.WorkflowAutomation.Triggers.md)  
Assembly: InkCanvasForClass.dll  

浮动工具栏进入批注模式时触发的触发器。
通过订阅 inkCanvas.EditingModeChanged 事件驱动，无需轮询。

```csharp
[TriggerInfoAttribute]
public class AnnotationModeEnterTrigger : TriggerBase<AnnotationModeEnterSettings>
```

#### Inheritance

object ← 
[TriggerBase](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md) ← 
[TriggerBase<AnnotationModeEnterSettings\>](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase\-1.md) ← 
[AnnotationModeEnterTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.AnnotationModeEnterTrigger.md)

#### Inherited Members

[TriggerBase<AnnotationModeEnterSettings\>.Settings](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase\-1.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_1\_Settings), 
[TriggerBase.Trigger\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_Trigger), 
[TriggerBase.TriggerRevert\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_TriggerRevert), 
[TriggerBase.Loaded\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_Loaded), 
[TriggerBase.UnLoaded\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_UnLoaded), 
[TriggerBase.AssociatedWorkflow](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_AssociatedWorkflow)

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Triggers_AnnotationModeEnterTrigger_Loaded"></a> Loaded\(\)

当此触发器被加载到工作流上时，调用此方法。

```csharp
public override void Loaded()
```

### <a id="Ink_Canvas_WorkflowAutomation_Triggers_AnnotationModeEnterTrigger_UnLoaded"></a> UnLoaded\(\)

当此触发器被从工作流上卸载时，调用此方法。

```csharp
public override void UnLoaded()
```

