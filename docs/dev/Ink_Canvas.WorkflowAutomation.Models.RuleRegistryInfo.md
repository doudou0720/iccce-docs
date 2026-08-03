# <a id="Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo"></a> Class RuleRegistryInfo

Namespace: [Ink\_Canvas.WorkflowAutomation.Models](Ink\_Canvas.WorkflowAutomation.Models.md)  
Assembly: InkCanvasForClass.dll  

代表一个规则的注册信息。

```csharp
public class RuleRegistryInfo
```

#### Inheritance

object ← 
[RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md)

## Constructors

### <a id="Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo__ctor_System_String_System_String_System_String_"></a> RuleRegistryInfo\(string, string, string\)

```csharp
public RuleRegistryInfo(string id, string name = "", string iconKind = "CogOutline")
```

#### Parameters

`id` string

`name` string

`iconKind` string

## Fields

### <a id="Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_Handle"></a> Handle

规则判断处理程序

```csharp
public RuleRegistryInfo.HandleDelegate Handle
```

#### Field Value

 [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.HandleDelegate.md)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_IconKind"></a> IconKind

规则显示图标。

```csharp
public string IconKind { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_Id"></a> Id

规则 ID。

```csharp
public string Id { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_Name"></a> Name

规则显示名称。

```csharp
public string Name { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_SettingsControlType"></a> SettingsControlType

设置控件类型。

```csharp
public Type SettingsControlType { get; }
```

#### Property Value

 Type

### <a id="Ink_Canvas_WorkflowAutomation_Models_RuleRegistryInfo_SettingsType"></a> SettingsType

设置类型。

```csharp
public Type SettingsType { get; }
```

#### Property Value

 Type

