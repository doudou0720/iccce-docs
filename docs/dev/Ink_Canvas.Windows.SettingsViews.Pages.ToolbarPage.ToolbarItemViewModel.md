# <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel"></a> Class ToolbarPage.ToolbarItemViewModel

Namespace: [Ink\_Canvas.Windows.SettingsViews.Pages](Ink\_Canvas.Windows.SettingsViews.Pages.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ToolbarPage.ToolbarItemViewModel : INotifyPropertyChanged
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ToolbarPage.ToolbarItemViewModel](Ink\_Canvas.Windows.SettingsViews.Pages.ToolbarPage.ToolbarItemViewModel.md)

#### Implements

[INotifyPropertyChanged](https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel__ctor_System_String_System_String_System_Int32_System_Boolean_"></a> ToolbarItemViewModel\(string, string, int, bool\)

```csharp
public ToolbarItemViewModel(string id, string displayName, int order, bool isVisible)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`order` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`isVisible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel_DisplayName"></a> DisplayName

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel_Id"></a> Id

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel_IsVisible"></a> IsVisible

```csharp
public bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel_Order"></a> Order

```csharp
public int Order { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel_OnPropertyChanged_System_String_"></a> OnPropertyChanged\(string\)

```csharp
protected void OnPropertyChanged(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel_PropertyChanged"></a> PropertyChanged

Occurs when a property value changes.

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 [PropertyChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler)

