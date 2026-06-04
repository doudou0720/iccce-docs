# <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry"></a> Class AutomationRegistry

Namespace: [Ink\_Canvas.WorkflowAutomation.Services](Ink\_Canvas.WorkflowAutomation.Services.md)  
Assembly: InkCanvasForClass.dll  

自动化注册中心，管理所有已注册的触发器、行动和规则。

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

已注册的行动字典

```csharp
public static Dictionary<string, ActionRegistryInfo> RegisteredActions { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md)\>

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry_RegisteredRules"></a> RegisteredRules

已注册的规则字典

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

注册行动

```csharp
public static void RegisterAction(ActionRegistryInfo info)
```

#### Parameters

`info` [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry_RegisterRule_Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_"></a> RegisterRule\(RuleRegistryInfo\)

注册规则

```csharp
public static void RegisterRule(RuleRegistryInfo info)
```

#### Parameters

`info` [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry_RegisterTrigger_Ink_Canvas_WorkflowAutomation_Models_TriggerInfo_System_Func_Ink_Canvas_WorkflowAutomation_Abstractions_TriggerBase__"></a> RegisterTrigger\(TriggerInfo, Func<TriggerBase\>\)

注册触发器

```csharp
public static void RegisterTrigger(TriggerInfo info, Func<TriggerBase> factory)
```

#### Parameters

`info` [TriggerInfo](Ink\_Canvas.WorkflowAutomation.Models.TriggerInfo.md)

`factory` [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[TriggerBase](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md)\>

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationRegistry_ResolveTrigger_System_String_"></a> ResolveTrigger\(string\)

解析触发器实例

```csharp
public static TriggerBase? ResolveTrigger(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [TriggerBase](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md)?

