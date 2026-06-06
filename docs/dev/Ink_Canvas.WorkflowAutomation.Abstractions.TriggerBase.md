# <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerBase"></a> Class TriggerBase

Namespace: [Ink\_Canvas.WorkflowAutomation.Abstractions](Ink\_Canvas.WorkflowAutomation.Abstractions.md)  
Assembly: InkCanvasForClass.dll  

自动化触发器基类。

```csharp
public abstract class TriggerBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TriggerBase](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md)

#### Derived

[TriggerBase<T\>](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase\-1.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerBase_AssociatedWorkflow"></a> AssociatedWorkflow

此触发器关联的工作流。

```csharp
public Workflow AssociatedWorkflow { get; }
```

#### Property Value

 [Workflow](Ink\_Canvas.WorkflowAutomation.Models.Workflow.md)

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerBase_Loaded"></a> Loaded\(\)

当此触发器被加载到工作流上时，调用此方法。

```csharp
public abstract void Loaded()
```

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerBase_Trigger"></a> Trigger\(\)

触发这个触发器。

```csharp
protected void Trigger()
```

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerBase_TriggerRevert"></a> TriggerRevert\(\)

触发恢复触发器。

```csharp
protected void TriggerRevert()
```

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerBase_UnLoaded"></a> UnLoaded\(\)

当此触发器被从工作流上卸载时，调用此方法。

```csharp
public abstract void UnLoaded()
```

