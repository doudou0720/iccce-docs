# <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService"></a> Class AutomationService

Namespace: [Ink\_Canvas.WorkflowAutomation.Services](Ink\_Canvas.WorkflowAutomation.Services.md)  
Assembly: InkCanvasForClass.dll  

自动化服务，负责管理工作流的生命周期、触发和恢复。

```csharp
public class AutomationService : ObservableObject
```

#### Inheritance

ObservableObject ← 
[AutomationService](Ink\_Canvas.WorkflowAutomation.Services.AutomationService.md)

## Constructors

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService__ctor_System_String_IServiceProvider_"></a> AutomationService\(string, IServiceProvider\)

```csharp
public AutomationService(string configsFolderPath, IServiceProvider serviceProvider = null)
```

#### Parameters

`configsFolderPath` string

`serviceProvider` IServiceProvider

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_ActionService"></a> ActionService

```csharp
public ActionService ActionService { get; }
```

#### Property Value

 [ActionService](Ink\_Canvas.WorkflowAutomation.Services.ActionService.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_Configs"></a> Configs

```csharp
public List<string> Configs { get; set; }
```

#### Property Value

 List<string\>

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_CurrentConfig"></a> CurrentConfig

```csharp
public string CurrentConfig { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_CurrentConfigPath"></a> CurrentConfigPath

```csharp
public string CurrentConfigPath { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_IsAutomationEnabled"></a> IsAutomationEnabled

```csharp
public bool IsAutomationEnabled { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_RulesetService"></a> RulesetService

```csharp
public RulesetService RulesetService { get; }
```

#### Property Value

 [RulesetService](Ink\_Canvas.WorkflowAutomation.Services.RulesetService.md)

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_Workflows"></a> Workflows

```csharp
public ObservableCollection<Workflow> Workflows { get; set; }
```

#### Property Value

 ObservableCollection<[Workflow](Ink\_Canvas.WorkflowAutomation.Models.Workflow.md)\>

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_LoadConfig"></a> LoadConfig\(\)

加载当前配置

```csharp
public void LoadConfig()
```

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_RefreshConfigs"></a> RefreshConfigs\(\)

刷新配置文件列表

```csharp
public void RefreshConfigs()
```

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_SaveConfig_System_String_"></a> SaveConfig\(string\)

保存当前配置

```csharp
public void SaveConfig(string note = "")
```

#### Parameters

`note` string

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_UnloadWorkflow_Ink_Canvas_WorkflowAutomation_Models_Workflow_"></a> UnloadWorkflow\(Workflow\)

```csharp
public void UnloadWorkflow(Workflow workflow)
```

#### Parameters

`workflow` [Workflow](Ink\_Canvas.WorkflowAutomation.Models.Workflow.md)

