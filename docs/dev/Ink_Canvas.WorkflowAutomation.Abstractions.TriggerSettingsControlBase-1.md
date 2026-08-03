# <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerSettingsControlBase_1"></a> Class TriggerSettingsControlBase<T\>

Namespace: [Ink\_Canvas.WorkflowAutomation.Abstractions](Ink\_Canvas.WorkflowAutomation.Abstractions.md)  
Assembly: InkCanvasForClass.dll  

带强类型设置的触发器设置控件基类。

```csharp
public abstract class TriggerSettingsControlBase<T> : TriggerSettingsControlBase where T : class, new()
```

#### Type Parameters

`T` 

#### Inheritance

UserControl ← 
[TriggerSettingsControlBase](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerSettingsControlBase.md) ← 
[TriggerSettingsControlBase<T\>](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerSettingsControlBase\-1.md)

#### Inherited Members

[TriggerSettingsControlBase.Settings](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerSettingsControlBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_TriggerSettingsControlBase\_Settings)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerSettingsControlBase_1_Settings"></a> Settings

触发器设置数据

```csharp
public override object Settings { get; set; }
```

#### Property Value

 object

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerSettingsControlBase_1_TypedSettings"></a> TypedSettings

```csharp
protected T TypedSettings { get; }
```

#### Property Value

 T

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerSettingsControlBase_1_OnSettingsChanged__0_"></a> OnSettingsChanged\(T\)

```csharp
protected virtual void OnSettingsChanged(T settings)
```

#### Parameters

`settings` T

