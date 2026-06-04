# <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerBase_1"></a> Class TriggerBase<T\>

Namespace: [Ink\_Canvas.WorkflowAutomation.Abstractions](Ink\_Canvas.WorkflowAutomation.Abstractions.md)  
Assembly: InkCanvasForClass.dll  

带强类型设置的触发器基类。

```csharp
public abstract class TriggerBase<T> : TriggerBase where T : class
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TriggerBase](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md) ← 
[TriggerBase<T\>](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase\-1.md)

#### Inherited Members

[TriggerBase.Trigger\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_Trigger), 
[TriggerBase.TriggerRevert\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_TriggerRevert), 
[TriggerBase.Loaded\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_Loaded), 
[TriggerBase.UnLoaded\(\)](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_UnLoaded), 
[TriggerBase.AssociatedWorkflow](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerBase\_AssociatedWorkflow), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerBase_1_Settings"></a> Settings

当前触发器的设置

```csharp
protected T Settings { get; }
```

#### Property Value

 T

