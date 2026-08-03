# <a id="Ink_Canvas_WorkflowAutomation_Abstractions_RuleSettingsControlBase_1"></a> Class RuleSettingsControlBase<T\>

Namespace: [Ink\_Canvas.WorkflowAutomation.Abstractions](Ink\_Canvas.WorkflowAutomation.Abstractions.md)  
Assembly: InkCanvasForClass.dll  

带强类型设置的规则设置控件基类。

```csharp
public abstract class RuleSettingsControlBase<T> : RuleSettingsControlBase where T : class, new()
```

#### Type Parameters

`T` 

#### Inheritance

UserControl ← 
[RuleSettingsControlBase](Ink\_Canvas.WorkflowAutomation.Abstractions.RuleSettingsControlBase.md) ← 
[RuleSettingsControlBase<T\>](Ink\_Canvas.WorkflowAutomation.Abstractions.RuleSettingsControlBase\-1.md)

#### Inherited Members

[RuleSettingsControlBase.Settings](Ink\_Canvas.WorkflowAutomation.Abstractions.RuleSettingsControlBase.md\#Ink\_Canvas\_WorkflowAutomation\_Abstractions\_RuleSettingsControlBase\_Settings)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_RuleSettingsControlBase_1_Settings"></a> Settings

规则设置数据

```csharp
public override object Settings { get; set; }
```

#### Property Value

 object

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_RuleSettingsControlBase_1_TypedSettings"></a> TypedSettings

```csharp
protected T TypedSettings { get; }
```

#### Property Value

 T

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_RuleSettingsControlBase_1_OnSettingsChanged__0_"></a> OnSettingsChanged\(T\)

```csharp
protected virtual void OnSettingsChanged(T settings)
```

#### Parameters

`settings` T

