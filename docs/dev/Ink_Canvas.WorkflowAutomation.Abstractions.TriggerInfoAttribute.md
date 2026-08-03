# <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerInfoAttribute"></a> Class TriggerInfoAttribute

Namespace: [Ink\_Canvas.WorkflowAutomation.Abstractions](Ink\_Canvas.WorkflowAutomation.Abstractions.md)  
Assembly: InkCanvasForClass.dll  

自动化触发器信息特性。

```csharp
public class TriggerInfoAttribute : Attribute
```

#### Inheritance

Attribute ← 
[TriggerInfoAttribute](Ink\_Canvas.WorkflowAutomation.Abstractions.TriggerInfoAttribute.md)

## Constructors

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerInfoAttribute__ctor_System_String_System_String_System_String_"></a> TriggerInfoAttribute\(string, string, string\)

```csharp
public TriggerInfoAttribute(string id, string name, string iconKind = "ClockOutline")
```

#### Parameters

`id` string

`name` string

`iconKind` string

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerInfoAttribute_IconKind"></a> IconKind

触发器图标（字符串标识）

```csharp
public string IconKind { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerInfoAttribute_Id"></a> Id

触发器 ID

```csharp
public string Id { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerInfoAttribute_Name"></a> Name

触发器名称

```csharp
public string Name { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerInfoAttribute_SettingsControlType"></a> SettingsControlType

设置界面类型

```csharp
public Type SettingsControlType { get; set; }
```

#### Property Value

 Type

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerInfoAttribute_SettingsType"></a> SettingsType

设置数据类型

```csharp
public Type SettingsType { get; }
```

#### Property Value

 Type

### <a id="Ink_Canvas_WorkflowAutomation_Abstractions_TriggerInfoAttribute_TriggerType"></a> TriggerType

触发器类型（由框架自动设置）

```csharp
public Type TriggerType { get; }
```

#### Property Value

 Type

