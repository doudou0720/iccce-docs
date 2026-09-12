# <a id="Ink_Canvas_WorkflowAutomation_Abstractions_ActionSettingsControlBase_1"></a> Class ActionSettingsControlBase<T\>

Namespace: [Ink\_Canvas.WorkflowAutomation.Abstractions](Ink\_Canvas.WorkflowAutomation.Abstractions.md)  
Assembly: InkCanvasForClass.dll  

带强类型设置的行动设置控件基类。

```csharp
public abstract class ActionSettingsControlBase<T> : ActionSettingsControlBase where T : class, new()
```

#### Type Parameters

`T` 

#### Inheritance

UserControl ← 
[ActionSettingsControlBase](Ink\_Canvas.WorkflowAutomation.Abstractions.ActionSettingsControlBase.md) ← 
[ActionSettingsControlBase<T\>](Ink\_Canvas.WorkflowAutomation.Abstractions.ActionSettingsControlBase\-1.md)

#### Inherited Members

[ActionSettingsControlBase.Settings](Ink\_Canvas.WorkflowAutomation.Abstractions.ActionSettingsControlBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_ActionSettingsControlBase\_Settings)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_ActionSettingsControlBase_1_Settings"></a> Settings

行动设置数据

```csharp
public override object Settings { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_ActionSettingsControlBase_1_TypedSettings"></a> TypedSettings

```csharp
protected T TypedSettings { get; }
```

#### Property Value

 T

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_ActionSettingsControlBase_1_OnSettingsChanged__0_"></a> OnSettingsChanged\(T\)

```csharp
protected virtual void OnSettingsChanged(T settings)
```

#### Parameters

`settings` T

