# <a id="Ink_Canvas_WorkflowAutomation_Services_RulesetService"></a> Class RulesetService

Namespace: [Ink\_Canvas.WorkflowAutomation.Services](Ink\_Canvas.WorkflowAutomation.Services.md)  
Assembly: InkCanvasForClass.dll  

规则集服务，负责评估规则集是否满足。

```csharp
public class RulesetService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RulesetService](Ink\_Canvas.WorkflowAutomation.Services.RulesetService.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Services_RulesetService_IsRulesetSatisfied_Ink_Canvas_WorkflowAutomation_Models_Ruleset_"></a> IsRulesetSatisfied\(Ruleset\)

判断指定的规则集是否成立。

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

### <a id="Ink_Canvas_WorkflowAutomation_Services_RulesetService_StatusUpdated"></a> StatusUpdated

规则状态更新事件，当规则条件可能发生变化时触发。

```csharp
public event EventHandler? StatusUpdated
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)?

