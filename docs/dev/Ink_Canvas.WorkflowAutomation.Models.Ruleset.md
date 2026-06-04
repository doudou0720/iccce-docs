# <a id="Ink_Canvas_WorkflowAutomation_Models_Ruleset"></a> Class Ruleset

Namespace: [Ink\_Canvas.WorkflowAutomation.Models](Ink\_Canvas.WorkflowAutomation.Models.md)  
Assembly: InkCanvasForClass.dll  

代表一个包含若干个规则的规则集。

```csharp
public class Ruleset : ObservableObject, INotifyPropertyChanged, INotifyPropertyChanging
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObservableObject](https://learn.microsoft.com/dotnet/api/communitytoolkit.mvvm.componentmodel.observableobject) ← 
[Ruleset](Ink\_Canvas.WorkflowAutomation.Models.Ruleset.md)

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

## Properties

### <a id="Ink_Canvas_WorkflowAutomation_Models_Ruleset_Groups"></a> Groups

规则分组

```csharp
public ObservableCollection<RuleGroup> Groups { get; set; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<[RuleGroup](Ink\_Canvas.WorkflowAutomation.Models.RuleGroup.md)\>

### <a id="Ink_Canvas_WorkflowAutomation_Models_Ruleset_IsReversed"></a> IsReversed

是否反转判断。

```csharp
public bool IsReversed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_WorkflowAutomation_Models_Ruleset_Mode"></a> Mode

逻辑模式。

```csharp
public RulesetLogicalMode Mode { get; set; }
```

#### Property Value

 [RulesetLogicalMode](Ink\_Canvas.WorkflowAutomation.Enums.RulesetLogicalMode.md)

### <a id="Ink_Canvas_WorkflowAutomation_Models_Ruleset_State"></a> State

满足状态

```csharp
[JsonIgnore]
public int State { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

