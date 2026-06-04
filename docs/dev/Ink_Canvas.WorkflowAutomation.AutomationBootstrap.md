# <a id="Ink_Canvas_WorkflowAutomation_AutomationBootstrap"></a> Class AutomationBootstrap

Namespace: [Ink\_Canvas.WorkflowAutomation](Ink\_Canvas.WorkflowAutomation.md)  
Assembly: InkCanvasForClass.dll  

自动化系统启动引导，负责注册所有内置触发器、行动和规则，并启动服务。

```csharp
public static class AutomationBootstrap
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AutomationBootstrap](Ink\_Canvas.WorkflowAutomation.AutomationBootstrap.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_AutomationBootstrap_Service"></a> Service

获取自动化服务实例

```csharp
public static AutomationService Service { get; }
```

#### Property Value

 [AutomationService](Ink\_Canvas.WorkflowAutomation.Services.AutomationService.md)

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_AutomationBootstrap_Initialize"></a> Initialize\(\)

初始化自动化系统，注册所有内置组件。

```csharp
public static void Initialize()
```

### <a id="Ink_Canvas_WorkflowAutomation_AutomationBootstrap_Shutdown"></a> Shutdown\(\)

关闭自动化系统

```csharp
public static void Shutdown()
```

