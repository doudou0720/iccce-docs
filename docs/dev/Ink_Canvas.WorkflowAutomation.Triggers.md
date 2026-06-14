# <a id="Ink_Canvas_WorkflowAutomation_Triggers"></a> Namespace Ink\_Canvas.WorkflowAutomation.Triggers

### Classes

 [AnnotationModeEnterSettings](Ink\_Canvas.WorkflowAutomation.Triggers.AnnotationModeEnterSettings.md)

批注模式进入触发器设置

 [AnnotationModeEnterTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.AnnotationModeEnterTrigger.md)

浮动工具栏进入批注模式时触发的触发器。
通过订阅 inkCanvas.EditingModeChanged 事件驱动，无需轮询。

 [AnnotationModeExitSettings](Ink\_Canvas.WorkflowAutomation.Triggers.AnnotationModeExitSettings.md)

批注模式退出触发器设置

 [AnnotationModeExitTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.AnnotationModeExitTrigger.md)

浮动工具栏退出批注模式时触发的触发器。
通过订阅 inkCanvas.EditingModeChanged 事件驱动，无需轮询。

 [PptSlideShowEnterSettings](Ink\_Canvas.WorkflowAutomation.Triggers.PptSlideShowEnterSettings.md)

PPT放映进入触发器设置

 [PptSlideShowEnterTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.PptSlideShowEnterTrigger.md)

进入PPT放映模式时触发的触发器。
通过 SystemEventMonitor 的进程和窗口事件驱动，无需独立轮询。

 [PptSlideShowExitSettings](Ink\_Canvas.WorkflowAutomation.Triggers.PptSlideShowExitSettings.md)

PPT放映退出触发器设置

 [PptSlideShowExitTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.PptSlideShowExitTrigger.md)

退出PPT放映模式时触发的触发器。
通过 SystemEventMonitor 的进程和窗口事件驱动，无需独立轮询。

 [PptSlideShowSettings](Ink\_Canvas.WorkflowAutomation.Triggers.PptSlideShowSettings.md)

PPT 放映检测触发器的设置

 [PptSlideShowTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.PptSlideShowTrigger.md)

当 PPT 进入放映模式时触发的触发器。
通过 SystemEventMonitor 的进程和窗口事件驱动，无需独立轮询。

 [ProcessDetectedSettings](Ink\_Canvas.WorkflowAutomation.Triggers.ProcessDetectedSettings.md)

进程检测触发器的设置

 [ProcessDetectedTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.ProcessDetectedTrigger.md)

当指定进程启动时触发的触发器。
通过 SystemEventMonitor 的进程监控驱动，无需独立轮询。

 [RulesetChangedSettings](Ink\_Canvas.WorkflowAutomation.Triggers.RulesetChangedSettings.md)

规则集更新触发器设置

 [RulesetChangedTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.RulesetChangedTrigger.md)

规则集状态更新时触发的触发器。
当任何规则条件可能发生变化时触发。

 [TimerTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.TimerTrigger.md)

定时触发器。

 [TimerTriggerSettings](Ink\_Canvas.WorkflowAutomation.Triggers.TimerTriggerSettings.md)

定时触发器设置

 [WhiteboardEnterSettings](Ink\_Canvas.WorkflowAutomation.Triggers.WhiteboardEnterSettings.md)

进入白板模式触发器设置

 [WhiteboardEnterTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.WhiteboardEnterTrigger.md)

进入白板/黑板模式时触发的触发器。
通过订阅 SystemEventMonitor.InternalStateChanged 事件驱动，检测 currentMode 从 0 变为 1。

 [WhiteboardExitSettings](Ink\_Canvas.WorkflowAutomation.Triggers.WhiteboardExitSettings.md)

退出白板模式触发器设置

 [WhiteboardExitTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.WhiteboardExitTrigger.md)

退出白板/黑板模式时触发的触发器。
通过订阅 SystemEventMonitor.InternalStateChanged 事件驱动，检测 currentMode 从 1 变为 0。

 [WindowFocusChangedSettings](Ink\_Canvas.WorkflowAutomation.Triggers.WindowFocusChangedSettings.md)

前台窗口变化触发器设置

 [WindowFocusChangedTrigger](Ink\_Canvas.WorkflowAutomation.Triggers.WindowFocusChangedTrigger.md)

前台窗口焦点变化时触发的触发器。
通过 SystemEventMonitor 的 WinEvent 钩子驱动，无需轮询。

