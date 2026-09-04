# <a id="Ink_Canvas_WorkflowAutomation_Rules"></a> Namespace Ink\_Canvas.WorkflowAutomation.Rules

### Classes

 [ForegroundWindowProcessRule](Ink\_Canvas.WorkflowAutomation.Rules.ForegroundWindowProcessRule.md)

判断前台窗口的进程名是否匹配指定名称的规则。

 [ForegroundWindowProcessRuleSettings](Ink\_Canvas.WorkflowAutomation.Rules.ForegroundWindowProcessRuleSettings.md)

前台窗口进程名规则设置

 [IsAnnotationModeRule](Ink\_Canvas.WorkflowAutomation.Rules.IsAnnotationModeRule.md)

判断浮动工具栏是否处于批注模式的规则。

 [IsAnnotationModeRuleSettings](Ink\_Canvas.WorkflowAutomation.Rules.IsAnnotationModeRuleSettings.md)

批注模式规则设置

 [IsFloatingBarFoldedRule](Ink\_Canvas.WorkflowAutomation.Rules.IsFloatingBarFoldedRule.md)

判断浮动工具栏是否已折叠的规则。

 [IsFloatingBarFoldedRuleSettings](Ink\_Canvas.WorkflowAutomation.Rules.IsFloatingBarFoldedRuleSettings.md)

浮动栏已折叠规则设置

 [IsForegroundWhiteboardRule](Ink\_Canvas.WorkflowAutomation.Rules.IsForegroundWhiteboardRule.md)

判断前台窗口是否为 ICC-CE 白板的规则。
当 ICC-CE 处于白板模式（currentMode == 1）且主窗口可见时返回真。
此规则不依赖 GetForegroundWindow()，因此在无焦点模式（WS_EX_NOACTIVATE）下也能正常工作。

 [IsForegroundWhiteboardRuleSettings](Ink\_Canvas.WorkflowAutomation.Rules.IsForegroundWhiteboardRuleSettings.md)

前台窗口是 ICC-CE 白板规则设置

 [IsPPTSlideshowRule](Ink\_Canvas.WorkflowAutomation.Rules.IsPPTSlideshowRule.md)

判断当前是否处于PPT放映模式的规则。

 [IsPPTSlideshowRuleSettings](Ink\_Canvas.WorkflowAutomation.Rules.IsPPTSlideshowRuleSettings.md)

PPT放映中规则设置

 [ProcessRunningRule](Ink\_Canvas.WorkflowAutomation.Rules.ProcessRunningRule.md)

判断指定进程是否正在运行的规则。

 [ProcessRunningRuleSettings](Ink\_Canvas.WorkflowAutomation.Rules.ProcessRunningRuleSettings.md)

进程运行规则设置

 [WindowTitleContainsRule](Ink\_Canvas.WorkflowAutomation.Rules.WindowTitleContainsRule.md)

判断前台窗口标题是否包含指定文本的规则。

 [WindowTitleContainsRuleSettings](Ink\_Canvas.WorkflowAutomation.Rules.WindowTitleContainsRuleSettings.md)

窗口标题包含规则设置

