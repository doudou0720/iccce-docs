# <a id="Ink_Canvas_WorkflowAutomation_Triggers_WindowFocusChangedTrigger"></a> Class WindowFocusChangedTrigger

Namespace: [Ink\_Canvas.WorkflowAutomation.Triggers](Ink\_Canvas.WorkflowAutomation.Triggers.md)  
Assembly: InkCanvasForClass.dll  

前台窗口焦点变化时触发的触发器。
通过 SystemEventMonitor 的 WinEvent 钩子驱动，无需轮询。

```csharp
[TriggerInfoAttribute]
public class WindowFocusChangedTrigger : TriggerBase<WindowFocusChangedSettings>
```

#### Inheritance

object ← 
[TriggerBase](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md) ← 
[TriggerBase<WindowFocusChangedSettings\>](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase\-1.md) ← 
[WindowFocusChangedTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.WindowFocusChangedTrigger.md)

#### Inherited Members

[TriggerBase<WindowFocusChangedSettings\>.Settings](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase\-1.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_1\_Settings), 
[TriggerBase.Trigger\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_Trigger), 
[TriggerBase.TriggerRevert\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_TriggerRevert), 
[TriggerBase.Loaded\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_Loaded), 
[TriggerBase.UnLoaded\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_UnLoaded), 
[TriggerBase.AssociatedWorkflow](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_AssociatedWorkflow)

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Triggers_WindowFocusChangedTrigger_Loaded"></a> Loaded\(\)

当此触发器被加载到工作流上时，调用此方法。

```csharp
public override void Loaded()
```

### <a id="Ink_Canvas_WorkflowAutomation_Triggers_WindowFocusChangedTrigger_UnLoaded"></a> UnLoaded\(\)

当此触发器被从工作流上卸载时，调用此方法。

```csharp
public override void UnLoaded()
```

