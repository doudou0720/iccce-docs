# <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService"></a> Class AutomationService

Namespace: [Ink\_Canvas.WorkflowAutomation.Services](Ink\_Canvas.WorkflowAutomation.Services.md)  
Assembly: InkCanvasForClass.dll  

自动化服务，负责管理工作流的生命周期、触发和恢复。

```csharp
public class AutomationService : ObservableObject, INotifyPropertyChanged, INotifyPropertyChanging
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObservableObject](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject) ← 
[AutomationService](Ink\_Canvas.WorkflowAutomation.Services.AutomationService.md)

#### Implements

[INotifyPropertyChanged](https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged), 
[INotifyPropertyChanging](https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanging)

#### Inherited Members

[ObservableObject.OnPropertyChanged\(PropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.onpropertychanged\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-onpropertychanged\(system\-componentmodel\-propertychangedeventargs\)), 
[ObservableObject.OnPropertyChanging\(PropertyChangingEventArgs\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.onpropertychanging\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-onpropertychanging\(system\-componentmodel\-propertychangingeventargs\)), 
[ObservableObject.OnPropertyChanged\(string?\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.onpropertychanged\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-onpropertychanged\(system\-string\)), 
[ObservableObject.OnPropertyChanging\(string?\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.onpropertychanging\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-onpropertychanging\(system\-string\)), 
[ObservableObject.SetProperty<T\>\(ref T, T, string?\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.setproperty\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-setproperty\-1\(\-0@\-0\-system\-string\)), 
[ObservableObject.SetProperty<T\>\(ref T, T, IEqualityComparer<T\>, string?\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.setproperty\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-setproperty\-1\(\-0@\-0\-system\-collections\-generic\-iequalitycomparer\(\(\-0\)\)\-system\-string\)), 
[ObservableObject.SetProperty<T\>\(T, T, Action<T\>, string?\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.setproperty\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-setproperty\-1\(\-0\-0\-system\-action\(\(\-0\)\)\-system\-string\)), 
[ObservableObject.SetProperty<T\>\(T, T, IEqualityComparer<T\>, Action<T\>, string?\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.setproperty\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-setproperty\-1\(\-0\-0\-system\-collections\-generic\-iequalitycomparer\(\(\-0\)\)\-system\-action\(\(\-0\)\)\-system\-string\)), 
[ObservableObject.SetProperty<TModel, T\>\(T, T, TModel, Action<TModel, T\>, string?\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.setproperty\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-setproperty\-2\(\-1\-1\-0\-system\-action\(\(\-0\-1\)\)\-system\-string\)), 
[ObservableObject.SetProperty<TModel, T\>\(T, T, IEqualityComparer<T\>, TModel, Action<TModel, T\>, string?\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.setproperty\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-setproperty\-2\(\-1\-1\-system\-collections\-generic\-iequalitycomparer\(\(\-1\)\)\-0\-system\-action\(\(\-0\-1\)\)\-system\-string\)), 
[ObservableObject.SetPropertyAndNotifyOnCompletion\(ref ObservableObject.TaskNotifier?, Task?, string?\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.setpropertyandnotifyoncompletion\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-setpropertyandnotifyoncompletion\(communitytoolkit\-mvvm\-componentmodel\-observableobject\-tasknotifier@\-system\-threading\-tasks\-task\-system\-string\)), 
[ObservableObject.SetPropertyAndNotifyOnCompletion\(ref ObservableObject.TaskNotifier?, Task?, Action<Task?\>, string?\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.setpropertyandnotifyoncompletion\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-setpropertyandnotifyoncompletion\(communitytoolkit\-mvvm\-componentmodel\-observableobject\-tasknotifier@\-system\-threading\-tasks\-task\-system\-action\(\(system\-threading\-tasks\-task\)\)\-system\-string\)), 
[ObservableObject.SetPropertyAndNotifyOnCompletion<T\>\(ref ObservableObject.TaskNotifier<T\>?, Task<T\>?, string?\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.setpropertyandnotifyoncompletion\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-setpropertyandnotifyoncompletion\-1\(communitytoolkit\-mvvm\-componentmodel\-observableobject\-tasknotifier\(\(\-0\)\)@\-system\-threading\-tasks\-task\(\(\-0\)\)\-system\-string\)), 
[ObservableObject.SetPropertyAndNotifyOnCompletion<T\>\(ref ObservableObject.TaskNotifier<T\>?, Task<T\>?, Action<Task<T\>?\>, string?\)](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.setpropertyandnotifyoncompletion\#communitytoolkit\-mvvm\-componentmodel\-observableobject\-setpropertyandnotifyoncompletion\-1\(communitytoolkit\-mvvm\-componentmodel\-observableobject\-tasknotifier\(\(\-0\)\)@\-system\-threading\-tasks\-task\(\(\-0\)\)\-system\-action\(\(system\-threading\-tasks\-task\(\(\-0\)\)\)\)\-system\-string\)), 
[ObservableObject.PropertyChanged](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.propertychanged), 
[ObservableObject.PropertyChanging](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject.propertychanging), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService__ctor_System_String_"></a> AutomationService\(string\)

```csharp
public AutomationService(string configsFolderPath)
```

#### Parameters

`configsFolderPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

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

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_CurrentConfig"></a> CurrentConfig

```csharp
public string CurrentConfig { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_CurrentConfigPath"></a> CurrentConfigPath

```csharp
public string CurrentConfigPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_IsAutomationEnabled"></a> IsAutomationEnabled

```csharp
public bool IsAutomationEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<[Workflow](Ink\_Canvas.WorkflowAutomation.Models.Workflow.md)\>

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

`note` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_WorkflowAutomation_Services_AutomationService_UnloadWorkflow_Ink_Canvas_WorkflowAutomation_Models_Workflow_"></a> UnloadWorkflow\(Workflow\)

```csharp
public void UnloadWorkflow(Workflow workflow)
```

#### Parameters

`workflow` [Workflow](Ink\_Canvas.WorkflowAutomation.Models.Workflow.md)

