# <a id="Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo"></a> Class ActionRegistryInfo

Namespace: [Ink\_Canvas.WorkflowAutomation.Models](Ink\_Canvas.WorkflowAutomation.Models.md)  
Assembly: InkCanvasForClass.dll  

代表一个行动的注册信息。
对齐 ClassIsland 的 ActionRegistryInfo，Handle 和 RevertHandle 分离注册。

```csharp
public class ActionRegistryInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo__ctor_System_String_System_String_System_String_"></a> ActionRegistryInfo\(string, string, string\)

```csharp
public ActionRegistryInfo(string id, string name = "", string iconKind = "BacteriaOutline")
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`iconKind` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Fields

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_Handle"></a> Handle

行动处理程序

```csharp
public ActionRegistryInfo.HandleDelegate Handle
```

#### Field Value

 [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.HandleDelegate.md)

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_RevertHandle"></a> RevertHandle

行动恢复处理程序

```csharp
public ActionRegistryInfo.HandleDelegate RevertHandle
```

#### Field Value

 [ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md).[HandleDelegate](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.HandleDelegate.md)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_IconKind"></a> IconKind

行动显示图标。

```csharp
public string IconKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_Id"></a> Id

行动 ID。

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_Name"></a> Name

行动显示名称。

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_SettingsControlType"></a> SettingsControlType

设置控件类型。

```csharp
public Type SettingsControlType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="Ink_Canvas_WorkflowAutomation_Models_ActionRegistryInfo_SettingsType"></a> SettingsType

设置类型。

```csharp
public Type SettingsType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

