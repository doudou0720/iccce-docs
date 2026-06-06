# <a id="Ink_Canvas_WorkflowAutomation_Services"></a> Namespace Ink\_Canvas.WorkflowAutomation.Services

### Classes

 [ActionService](Ink\_Canvas.WorkflowAutomation.Services.ActionService.md)

行动服务，负责执行和恢复行动。
对齐 ClassIsland 的 ActionService，实现 IActionService 接口。

 [AutomationRegistry](Ink\_Canvas.WorkflowAutomation.Services.AutomationRegistry.md)

自动化注册中心，管理所有已注册的触发器、行动和规则。
对齐 ClassIsland：行动和规则分别存储在 IActionService.Actions 和 IRulesetService.Rules 中，
触发器存储在此处并通过 DI 容器解析实例。

 [AutomationService](Ink\_Canvas.WorkflowAutomation.Services.AutomationService.md)

自动化服务，负责管理工作流的生命周期、触发和恢复。
对齐 ClassIsland 的 AutomationService，通过 DI 容器解析触发器实例。

 [RulesetService](Ink\_Canvas.WorkflowAutomation.Services.RulesetService.md)

规则集服务，负责评估规则集是否满足。
对齐 ClassIsland 的 RulesetService，实现 IRulesetService 接口。
事件驱动模式：订阅 SystemEventMonitor 的系统事件，仅在状态可能变化时重新评估。
保留 5s 兜底轮询防止遗漏。

 [SystemEventMonitor](Ink\_Canvas.WorkflowAutomation.Services.SystemEventMonitor.md)

集中式系统事件监控服务。
使用 WinEvent 钩子监听前台窗口变化，使用单一计时器监控进程状态，
替代各触发器和 RulesetService 各自轮询的方式。

