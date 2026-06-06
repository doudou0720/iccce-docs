# <a id="Ink_Canvas_WorkflowAutomation_Services_RulesetService"></a> Class RulesetService

Namespace: [Ink\_Canvas.WorkflowAutomation.Services](Ink\_Canvas.WorkflowAutomation.Services.md)  
Assembly: InkCanvasForClass.dll  

规则集服务，负责评估规则集是否满足。
对齐 ClassIsland 的 RulesetService，实现 IRulesetService 接口。
事件驱动模式：订阅 SystemEventMonitor 的系统事件，仅在状态可能变化时重新评估。
保留 5s 兜底轮询防止遗漏。

```csharp
public class RulesetService : IRulesetService, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RulesetService](Ink\_Canvas.WorkflowAutomation.Services.RulesetService.md)

#### Implements

[IRulesetService](Ink\_Canvas.WorkflowAutomation.Abstractions.IRulesetService.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_WorkflowAutomation_Services_RulesetService__ctor"></a> RulesetService\(\)

```csharp
public RulesetService()
```

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Services_RulesetService_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_WorkflowAutomation_Services_RulesetService_IsRulesetSatisfied_Ink_Canvas_WorkflowAutomation_Models_Ruleset_"></a> IsRulesetSatisfied\(Ruleset\)

判断指定的规则集是否成立，同时更新所有层级的 State。

```csharp
public bool IsRulesetSatisfied(Ruleset ruleset)
```

#### Parameters

`ruleset` [Ruleset](Ink\_Canvas.WorkflowAutomation.Models.Ruleset.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_WorkflowAutomation_Services_RulesetService_NotifyStatusChanged"></a> NotifyStatusChanged\(\)

手动通知规则状态已更新，触发所有订阅者重新评估规则。

```csharp
public void NotifyStatusChanged()
```

### <a id="Ink_Canvas_WorkflowAutomation_Services_RulesetService_RegisterRuleHandler_System_String_Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_HandleDelegate_"></a> RegisterRuleHandler\(string, HandleDelegate\)

注册规则处理程序。
对齐 ClassIsland 的 RegisterRuleHandler。

```csharp
public void RegisterRuleHandler(string id, RuleRegistryInfo.HandleDelegate handler)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`handler` [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.HandleDelegate.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_RulesetService_StatusUpdated"></a> StatusUpdated

规则状态更新事件，当规则条件可能发生变化时触发。

```csharp
public event EventHandler StatusUpdated
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

