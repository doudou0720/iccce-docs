# <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IActionService"></a> Interface IActionService

Namespace: [Ink\_Canvas.WorkflowAutomation.Abstractions](Ink\_Canvas.WorkflowAutomation.Abstractions.md)  
Assembly: InkCanvasForClass.dll  

行动服务接口。
对齐 ClassIsland 的 IActionService。

```csharp
public interface IActionService
```

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IActionService_Actions"></a> Actions

已注册的行动字典

```csharp
public static Dictionary<string, ActionRegistryInfo> Actions { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md)\>

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IActionService_ExistRevertHandler_Ink_Canvas_WorkflowAutomation_Models_Action_"></a> ExistRevertHandler\(Action\)

行动是否有内建的恢复

```csharp
bool ExistRevertHandler(Action action)
```

#### Parameters

`action` [Action](Ink\_Canvas.WorkflowAutomation.Models.Action.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IActionService_Invoke_Ink_Canvas_WorkflowAutomation_Models_ActionSet_"></a> Invoke\(ActionSet\)

触发行动组

```csharp
void Invoke(ActionSet actionSet)
```

#### Parameters

`actionSet` [ActionSet](Ink\_Canvas.WorkflowAutomation.Models.ActionSet.md)

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IActionService_RegisterActionHandler_System_String_Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_HandleDelegate_"></a> RegisterActionHandler\(string, HandleDelegate\)

注册行动处理程序

```csharp
void RegisterActionHandler(string id, ActionRegistryInfo.HandleDelegate handler)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`handler` [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.HandleDelegate.md)

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IActionService_RegisterRevertHandler_System_String_Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_HandleDelegate_"></a> RegisterRevertHandler\(string, HandleDelegate\)

注册行动恢复处理程序

```csharp
void RegisterRevertHandler(string id, ActionRegistryInfo.HandleDelegate handler)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`handler` [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.HandleDelegate.md)

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_IActionService_Revert_Ink_Canvas_WorkflowAutomation_Models_ActionSet_"></a> Revert\(ActionSet\)

恢复行动组

```csharp
void Revert(ActionSet actionSet)
```

#### Parameters

`actionSet` [ActionSet](Ink\_Canvas.WorkflowAutomation.Models.ActionSet.md)

