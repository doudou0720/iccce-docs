# <a id="Ink_Canvas_WorkflowAutomation_Services_ActionService"></a> Class ActionService

Namespace: [Ink\_Canvas.WorkflowAutomation.Services](Ink\_Canvas.WorkflowAutomation.Services.md)  
Assembly: InkCanvasForClass.dll  

行动服务，负责执行和恢复行动。

```csharp
public class ActionService : IActionService
```

#### Inheritance

object ← 
[ActionService](Ink\_Canvas.WorkflowAutomation.Services.ActionService.md)

#### Implements

[IActionService](Ink\_Canvas.WorkflowAutomation.Abstractions.IActionService.md)

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Services_ActionService_ExistRevertHandler_Ink_Canvas_WorkflowAutomation_Models_Action_"></a> ExistRevertHandler\(Action\)

行动是否有内建的恢复

```csharp
public bool ExistRevertHandler(Action action)
```

#### Parameters

`action` [Action](Ink\_Canvas.WorkflowAutomation.Models.Action.md)

#### Returns

 bool

### <a id="Ink_Canvas_WorkflowAutomation_Services_ActionService_Invoke_Ink_Canvas_WorkflowAutomation_Models_ActionSet_"></a> Invoke\(ActionSet\)

触发行动组

```csharp
public void Invoke(ActionSet actionSet)
```

#### Parameters

`actionSet` [ActionSet](Ink\_Canvas.WorkflowAutomation.Models.ActionSet.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_ActionService_RegisterActionHandler_System_String_Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_HandleDelegate_"></a> RegisterActionHandler\(string, HandleDelegate\)

注册行动处理程序。

```csharp
public void RegisterActionHandler(string id, ActionRegistryInfo.HandleDelegate handler)
```

#### Parameters

`id` string

`handler` [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.HandleDelegate.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_ActionService_RegisterRevertHandler_System_String_Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_HandleDelegate_"></a> RegisterRevertHandler\(string, HandleDelegate\)

注册行动恢复处理程序。

```csharp
public void RegisterRevertHandler(string id, ActionRegistryInfo.HandleDelegate handler)
```

#### Parameters

`id` string

`handler` [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.HandleDelegate.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_ActionService_Revert_Ink_Canvas_WorkflowAutomation_Models_ActionSet_"></a> Revert\(ActionSet\)

恢复行动组

```csharp
public void Revert(ActionSet actionSet)
```

#### Parameters

`actionSet` [ActionSet](Ink\_Canvas.WorkflowAutomation.Models.ActionSet.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_ActionService_UnregisterActionHandler_System_String_Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_HandleDelegate_"></a> UnregisterActionHandler\(string, HandleDelegate\)

取消注册行动处理程序。

```csharp
public void UnregisterActionHandler(string id, ActionRegistryInfo.HandleDelegate handler)
```

#### Parameters

`id` string

`handler` [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.HandleDelegate.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_ActionService_UnregisterRevertHandler_System_String_Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_HandleDelegate_"></a> UnregisterRevertHandler\(string, HandleDelegate\)

取消注册行动恢复处理程序。

```csharp
public void UnregisterRevertHandler(string id, ActionRegistryInfo.HandleDelegate handler)
```

#### Parameters

`id` string

`handler` [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.HandleDelegate.md)

