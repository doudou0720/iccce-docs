# <a id="Ink_Canvas_WorkflowAutomation_Models_ActionSet"></a> Class ActionSet

Namespace: [Ink\_Canvas.WorkflowAutomation.Models](Ink\_Canvas.WorkflowAutomation.Models.md)  
Assembly: InkCanvasForClass.dll  

代表一个行动组。

```csharp
public class ActionSet : ObservableObject
```

#### Inheritance

ObservableObject ← 
[ActionSet](Ink\_Canvas.WorkflowAutomation.Models.ActionSet.md)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionSet_Actions"></a> Actions

行动组中的所有行动。

```csharp
public ObservableCollection<Action> Actions { get; set; }
```

#### Property Value

 ObservableCollection<[Action](Ink\_Canvas.WorkflowAutomation.Models.Action.md)\>

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionSet_Guid"></a> Guid

行动组Guid，仅用于标识设置叠层。

```csharp
public string Guid { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionSet_IsEnabled"></a> IsEnabled

是否启用

```csharp
public bool IsEnabled { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionSet_IsOn"></a> IsOn

行动组被触发后还未恢复。

```csharp
public bool IsOn { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionSet_IsRevertEnabled"></a> IsRevertEnabled

是否启用恢复

```csharp
public bool IsRevertEnabled { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionSet_Name"></a> Name

名称

```csharp
public string Name { get; set; }
```

#### Property Value

 string

