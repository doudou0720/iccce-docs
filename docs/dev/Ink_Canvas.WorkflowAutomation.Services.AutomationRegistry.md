# <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry"></a> Class AutomationRegistry

Namespace: [Ink\_Canvas.WorkflowAutomation.Services](Ink\_Canvas.WorkflowAutomation.Services.md)  
Assembly: InkCanvasForClass.dll  

自动化注册中心，管理所有已注册的触发器、行动和规则。
对齐 ClassIsland：行动和规则分别存储在 IActionService.Actions 和 IRulesetService.Rules 中，
触发器存储在此处并通过 DI 容器解析实例。

```csharp
public static class AutomationRegistry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AutomationRegistry](Ink\_Canvas.WorkflowAutomation.Services.AutomationRegistry.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry_RegisteredActions"></a> RegisteredActions

已注册的行动字典（兼容 UI 引用）

```csharp
public static Dictionary<string, ActionRegistryInfo> RegisteredActions { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md)\>

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry_RegisteredRules"></a> RegisteredRules

已注册的规则字典（兼容 UI 引用）

```csharp
public static Dictionary<string, RuleRegistryInfo> RegisteredRules { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md)\>

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry_RegisteredTriggers"></a> RegisteredTriggers

已注册的触发器列表

```csharp
public static List<TriggerInfo> RegisteredTriggers { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[TriggerInfo](Ink\_Canvas.WorkflowAutomation.Models.TriggerInfo.md)\>

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry_RegisterAction_Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_"></a> RegisterAction\(ActionRegistryInfo\)

注册行动（已迁移到 IActionService.Actions，保留此方法作为兼容入口）

```csharp
public static void RegisterAction(ActionRegistryInfo info)
```

#### Parameters

`info` [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry_RegisterRule_Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_"></a> RegisterRule\(RuleRegistryInfo\)

注册规则（已迁移到 IRulesetService.Rules，保留此方法作为兼容入口）

```csharp
public static void RegisterRule(RuleRegistryInfo info)
```

#### Parameters

`info` [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry_RegisterTrigger_Ink_Canvas_WorkflowAutomation_Models_TriggerInfo_"></a> RegisterTrigger\(TriggerInfo\)

注册触发器（仅元数据，实例通过 DI 容器解析）

```csharp
public static void RegisterTrigger(TriggerInfo info)
```

#### Parameters

`info` [TriggerInfo](Ink\_Canvas.WorkflowAutomation.Models.TriggerInfo.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry_ResolveTrigger_System_IServiceProvider_System_String_"></a> ResolveTrigger\(IServiceProvider, string\)

通过 DI 容器解析触发器实例。
对齐 ClassIsland 的 GetKeyedService&lt;TriggerBase&gt;(id)。

```csharp
public static TriggerBase ResolveTrigger(IServiceProvider serviceProvider, string id)
```

#### Parameters

`serviceProvider` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [TriggerBase](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md)

