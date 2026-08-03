# <a id="Ink_Canvas_WorkflowAutomation_Triggers_PPTSlideShowEnterTrigger"></a> Class PPTSlideShowEnterTrigger

Namespace: [Ink\_Canvas.WorkflowAutomation.Triggers](Ink\_Canvas.WorkflowAutomation.Triggers.md)  
Assembly: InkCanvasForClass.dll  

进入PPT放映模式时触发的触发器。
通过 SystemEventMonitor 的进程和窗口事件驱动，无需独立轮询。

```csharp
[TriggerInfoAttribute]
public class PPTSlideShowEnterTrigger : TriggerBase<PPTSlideShowEnterSettings>
```

#### Inheritance

object ← 
[TriggerBase](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md) ← 
[TriggerBase<PPTSlideShowEnterSettings\>](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase\-1.md) ← 
[PPTSlideShowEnterTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.PPTSlideShowEnterTrigger.md)

#### Inherited Members

[TriggerBase<PPTSlideShowEnterSettings\>.Settings](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase\-1.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_1\_Settings), 
[TriggerBase.Trigger\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_Trigger), 
[TriggerBase.TriggerRevert\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_TriggerRevert), 
[TriggerBase.Loaded\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_Loaded), 
[TriggerBase.UnLoaded\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_UnLoaded), 
[TriggerBase.AssociatedWorkflow](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_AssociatedWorkflow)

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Triggers_PPTSlideShowEnterTrigger_Loaded"></a> Loaded\(\)

当此触发器被加载到工作流上时，调用此方法。

```csharp
public override void Loaded()
```

### <a id="Ink_Canvas_WorkflowAutomation_Triggers_PPTSlideShowEnterTrigger_UnLoaded"></a> UnLoaded\(\)

当此触发器被从工作流上卸载时，调用此方法。

```csharp
public override void UnLoaded()
```

