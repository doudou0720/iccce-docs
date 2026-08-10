# <a id="Ink_Canvas_WorkflowAutomation_AutomationBootstrap"></a> Class AutomationBootstrap

Namespace: [Ink\_Canvas.WorkflowAutomation](Ink\_Canvas.WorkflowAutomation.md)  
Assembly: InkCanvasForClass.dll  

自动化系统启动引导，使用 DI 容器注册所有组件。

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

### <a id="Ink_Canvas_WorkflowAutomation_AutomationBootstrap_ActionService"></a> ActionService

获取行动服务实例

```csharp
public static IActionService ActionService { get; }
```

#### Property Value

 [IActionService](Ink\_Canvas.WorkflowAutomation.Abstractions.IActionService.md)

### <a id="Ink_Canvas_WorkflowAutomation_AutomationBootstrap_Monitor"></a> Monitor

获取系统事件监控器实例

```csharp
public static SystemEventMonitor Monitor { get; }
```

#### Property Value

 [SystemEventMonitor](Ink\_Canvas.WorkflowAutomation.Services.SystemEventMonitor.md)

### <a id="Ink_Canvas_WorkflowAutomation_AutomationBootstrap_RulesetService"></a> RulesetService

获取规则集服务实例

```csharp
public static IRulesetService RulesetService { get; }
```

#### Property Value

 [IRulesetService](Ink\_Canvas.WorkflowAutomation.Abstractions.IRulesetService.md)

### <a id="Ink_Canvas_WorkflowAutomation_AutomationBootstrap_Service"></a> Service

获取自动化服务实例

```csharp
public static AutomationService Service { get; }
```

#### Property Value

 [AutomationService](Ink\_Canvas.WorkflowAutomation.Services.AutomationService.md)

### <a id="Ink_Canvas_WorkflowAutomation_AutomationBootstrap_ServiceProvider"></a> ServiceProvider

获取 DI 服务提供者

```csharp
public static IServiceProvider ServiceProvider { get; }
```

#### Property Value

 [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_AutomationBootstrap_Initialize"></a> Initialize\(\)

初始化自动化系统。
通过 IServiceCollection 注册所有触发器、行动和规则，然后通过 DI 容器解析。

```csharp
public static void Initialize()
```

### <a id="Ink_Canvas_WorkflowAutomation_AutomationBootstrap_Shutdown"></a> Shutdown\(\)

关闭自动化系统

```csharp
public static void Shutdown()
```

