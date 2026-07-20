# <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IRulesetService"></a> Interface IRulesetService

Namespace: [Ink\_Canvas.WorkflowAutomation.Abstractions](Ink\_Canvas.WorkflowAutomation.Abstractions.md)  
Assembly: InkCanvasForClass.dll  

规则集服务接口。
对齐 ClassIsland 的 IRulesetService。

```csharp
public interface IRulesetService
```

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IRulesetService_Rules"></a> Rules

已注册的规则字典

```csharp
public static Dictionary<string, RuleRegistryInfo> Rules { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md)\>

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IRulesetService_IsRulesetSatisfied_Ink_Canvas_WorkflowAutomation_Models_Ruleset_"></a> IsRulesetSatisfied\(Ruleset\)

判断指定的规则集是否成立

```csharp
bool IsRulesetSatisfied(Ruleset ruleset)
```

#### Parameters

`ruleset` [Ruleset](Ink\_Canvas.WorkflowAutomation.Models.Ruleset.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IRulesetService_NotifyStatusChanged"></a> NotifyStatusChanged\(\)

手动通知规则状态已更新

```csharp
void NotifyStatusChanged()
```

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IRulesetService_RegisterRuleHandler_System_String_Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_HandleDelegate_"></a> RegisterRuleHandler\(string, HandleDelegate\)

注册规则处理程序。
同一 handler 注册多次将自动去重。

```csharp
void RegisterRuleHandler(string id, RuleRegistryInfo.HandleDelegate handler)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`handler` [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.HandleDelegate.md)

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IRulesetService_UnregisterRuleHandler_System_String_Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_HandleDelegate_"></a> UnregisterRuleHandler\(string, HandleDelegate\)

取消注册规则处理程序。

```csharp
void UnregisterRuleHandler(string id, RuleRegistryInfo.HandleDelegate handler)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`handler` [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.HandleDelegate.md)

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IRulesetService_StatusUpdated"></a> StatusUpdated

规则状态更新事件

```csharp
event EventHandler StatusUpdated
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

