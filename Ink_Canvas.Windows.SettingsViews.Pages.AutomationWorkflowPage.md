# <a id="Ink_Canvas_Windows_SettingsViews_Pages_AutomationWorkflowPage"></a> Class AutomationWorkflowPage

Namespace: [Ink\_Canvas.Windows.SettingsViews.Pages](Ink\_Canvas.Windows.SettingsViews.Pages.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class AutomationWorkflowPage : iNKORE.UI.WPF.Modern.Controls.Page, INotifyPropertyChanged
```

#### Inheritance

iNKORE.UI.WPF.Modern.Controls.Page ← 
[AutomationWorkflowPage](Ink\_Canvas.Windows.SettingsViews.Pages.AutomationWorkflowPage.md)

#### Implements

[INotifyPropertyChanged](https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged)

## Constructors

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_AutomationWorkflowPage__ctor"></a> AutomationWorkflowPage\(\)

```csharp
public AutomationWorkflowPage()
```

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_AutomationWorkflowPage_RegisteredActionsList"></a> RegisteredActionsList

```csharp
public static List<ActionRegistryInfo> RegisteredActionsList { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ActionRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.ActionRegistryInfo.md)\>

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_AutomationWorkflowPage_RegisteredRulesList"></a> RegisteredRulesList

```csharp
public static List<RuleRegistryInfo> RegisteredRulesList { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md)\>

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_AutomationWorkflowPage_RegisteredTriggersList"></a> RegisteredTriggersList

```csharp
public static List<TriggerInfo> RegisteredTriggersList { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[TriggerInfo](Ink\_Canvas.WorkflowAutomation.Models.TriggerInfo.md)\>

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_AutomationWorkflowPage_SelectedWorkflow"></a> SelectedWorkflow

```csharp
public Workflow SelectedWorkflow { get; }
```

#### Property Value

 [Workflow](Ink\_Canvas.WorkflowAutomation.Models.Workflow.md)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_AutomationWorkflowPage_PropertyChanged"></a> PropertyChanged

Occurs when a property value changes.

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 [PropertyChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler)

