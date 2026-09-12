# <a id="Ink_Canvas_WorkflowAutomation_Models_TriggerInfo"></a> Class TriggerInfo

Namespace: [Ink\_Canvas.WorkflowAutomation.Models](Ink\_Canvas.WorkflowAutomation.Models.md)  
Assembly: InkCanvasForClass.dll  

自动化触发器注册信息。

```csharp
public class TriggerInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TriggerInfo](Ink\_Canvas.WorkflowAutomation.Models.TriggerInfo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_WorkflowAutomation_Models_TriggerInfo__ctor_System_String_System_String_System_String_"></a> TriggerInfo\(string, string, string\)

```csharp
public TriggerInfo(string id, string name, string iconKind = "ClockOutline")
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`iconKind` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Models_TriggerInfo_IconKind"></a> IconKind

触发器图标（字符串标识，如 Unicode 或图标名）

```csharp
public string IconKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_WorkflowAutomation_Models_TriggerInfo_Id"></a> Id

触发器 ID

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_WorkflowAutomation_Models_TriggerInfo_Name"></a> Name

触发器名称

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_WorkflowAutomation_Models_TriggerInfo_SettingsControlType"></a> SettingsControlType

设置界面类型

```csharp
public Type SettingsControlType { get; set; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="Ink_Canvas_WorkflowAutomation_Models_TriggerInfo_SettingsType"></a> SettingsType

设置数据类型

```csharp
public Type SettingsType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="Ink_Canvas_WorkflowAutomation_Models_TriggerInfo_TriggerType"></a> TriggerType

触发器类型

```csharp
public Type TriggerType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

