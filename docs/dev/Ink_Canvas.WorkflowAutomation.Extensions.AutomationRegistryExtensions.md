# <a id="Ink_Canvas_WorkflowAutomation_Extensions_AutomationRegistryExtensions"></a> Class AutomationRegistryExtensions

Namespace: [Ink\_Canvas.WorkflowAutomation.Extensions](Ink\_Canvas.WorkflowAutomation.Extensions.md)  
Assembly: InkCanvasForClass.dll  

注册触发器的 IServiceCollection 扩展。

```csharp
public static class AutomationRegistryExtensions
```

#### Inheritance

object ← 
[AutomationRegistryExtensions](Ink\_Canvas.WorkflowAutomation.Extensions.AutomationRegistryExtensions.md)

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Extensions_AutomationRegistryExtensions_AddAction_IServiceCollection_System_String_System_String_System_String_Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_HandleDelegate_"></a> AddAction\(IServiceCollection, string, string, string, HandleDelegate\)

注册无设置行动

```csharp
public static IServiceCollection AddAction(this IServiceCollection services, string id, string name = "", string iconKind = "BacteriaOutline", ActionRegistryInfo.HandleDelegate onHandle = null)
```

#### Parameters

`services` IServiceCollection

`id` string

`name` string

`iconKind` string

`onHandle` [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.HandleDelegate.md)

#### Returns

 IServiceCollection

### <a id="Ink_Canvas_WorkflowAutomation_Extensions_AutomationRegistryExtensions_AddAction__1_IServiceCollection_System_String_System_String_System_String_Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_HandleDelegate_"></a> AddAction<TSettings\>\(IServiceCollection, string, string, string, HandleDelegate\)

注册带设置的行动

```csharp
public static IServiceCollection AddAction<TSettings>(this IServiceCollection services, string id, string name = "", string iconKind = "BacteriaOutline", ActionRegistryInfo.HandleDelegate onHandle = null)
```

#### Parameters

`services` IServiceCollection

`id` string

`name` string

`iconKind` string

`onHandle` [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.HandleDelegate.md)

#### Returns

 IServiceCollection

#### Type Parameters

`TSettings` 

### <a id="Ink_Canvas_WorkflowAutomation_Extensions_AutomationRegistryExtensions_AddAction__2_IServiceCollection_System_String_System_String_System_String_Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_HandleDelegate_"></a> AddAction<TSettings, TSettingsControl\>\(IServiceCollection, string, string, string, HandleDelegate\)

注册带设置和设置控件的行动

```csharp
public static IServiceCollection AddAction<TSettings, TSettingsControl>(this IServiceCollection services, string id, string name = "", string iconKind = "BacteriaOutline", ActionRegistryInfo.HandleDelegate onHandle = null) where TSettingsControl : ActionSettingsControlBase
```

#### Parameters

`services` IServiceCollection

`id` string

`name` string

`iconKind` string

`onHandle` [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.HandleDelegate.md)

#### Returns

 IServiceCollection

#### Type Parameters

`TSettings` 

`TSettingsControl` 

### <a id="Ink_Canvas_WorkflowAutomation_Extensions_AutomationRegistryExtensions_AddRule_IServiceCollection_System_String_System_String_System_String_Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_HandleDelegate_"></a> AddRule\(IServiceCollection, string, string, string, HandleDelegate\)

注册无设置规则

```csharp
public static IServiceCollection AddRule(this IServiceCollection services, string id, string name = "", string iconKind = "CogOutline", RuleRegistryInfo.HandleDelegate onHandle = null)
```

#### Parameters

`services` IServiceCollection

`id` string

`name` string

`iconKind` string

`onHandle` [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.HandleDelegate.md)

#### Returns

 IServiceCollection

### <a id="Ink_Canvas_WorkflowAutomation_Extensions_AutomationRegistryExtensions_AddRule__1_IServiceCollection_System_String_System_String_System_String_Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_HandleDelegate_"></a> AddRule<TSettings\>\(IServiceCollection, string, string, string, HandleDelegate\)

注册带设置的规则

```csharp
public static IServiceCollection AddRule<TSettings>(this IServiceCollection services, string id, string name = "", string iconKind = "CogOutline", RuleRegistryInfo.HandleDelegate onHandle = null)
```

#### Parameters

`services` IServiceCollection

`id` string

`name` string

`iconKind` string

`onHandle` [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.HandleDelegate.md)

#### Returns

 IServiceCollection

#### Type Parameters

`TSettings` 

### <a id="Ink_Canvas_WorkflowAutomation_Extensions_AutomationRegistryExtensions_AddRule__2_IServiceCollection_System_String_System_String_System_String_Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_HandleDelegate_"></a> AddRule<TSettings, TSettingsControl\>\(IServiceCollection, string, string, string, HandleDelegate\)

注册带设置和设置控件的规则

```csharp
public static IServiceCollection AddRule<TSettings, TSettingsControl>(this IServiceCollection services, string id, string name = "", string iconKind = "CogOutline", RuleRegistryInfo.HandleDelegate onHandle = null) where TSettingsControl : RuleSettingsControlBase
```

#### Parameters

`services` IServiceCollection

`id` string

`name` string

`iconKind` string

`onHandle` [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.HandleDelegate.md)

#### Returns

 IServiceCollection

#### Type Parameters

`TSettings` 

`TSettingsControl` 

### <a id="Ink_Canvas_WorkflowAutomation_Extensions_AutomationRegistryExtensions_AddTrigger__1_IServiceCollection_"></a> AddTrigger<TTrigger\>\(IServiceCollection\)

注册触发器（从 [TriggerInfo] 特性自动读取元数据）

```csharp
public static IServiceCollection AddTrigger<TTrigger>(this IServiceCollection services) where TTrigger : TriggerBase
```

#### Parameters

`services` IServiceCollection

#### Returns

 IServiceCollection

#### Type Parameters

`TTrigger` 

### <a id="Ink_Canvas_WorkflowAutomation_Extensions_AutomationRegistryExtensions_AddTrigger__2_IServiceCollection_"></a> AddTrigger<TTrigger, TSettingsControl\>\(IServiceCollection\)

注册带设置控件的触发器

```csharp
public static IServiceCollection AddTrigger<TTrigger, TSettingsControl>(this IServiceCollection services) where TTrigger : TriggerBase where TSettingsControl : TriggerSettingsControlBase
```

#### Parameters

`services` IServiceCollection

#### Returns

 IServiceCollection

#### Type Parameters

`TTrigger` 

`TSettingsControl` 

