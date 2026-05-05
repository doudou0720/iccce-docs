# <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel"></a> Class ToolbarPage.ToolbarItemViewModel

Namespace: [Ink\_Canvas.Windows.SettingsViews.Pages](Ink\_Canvas.Windows.SettingsViews.Pages.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ToolbarPage.ToolbarItemViewModel : INotifyPropertyChanged
```

#### Inheritance

INotifyPropertyChanged ← 
[ToolbarPage.ToolbarItemViewModel](Ink\_Canvas.Windows.SettingsViews.Pages.ToolbarPage.ToolbarItemViewModel.md)

## Constructors

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel__ctor_System_String_System_String_System_Int32_System_Boolean_"></a> ToolbarItemViewModel\(string, string, int, bool\)

```csharp
public ToolbarItemViewModel(string id, string displayName, int order, bool isVisible)
```

#### Parameters

`id` string

`displayName` string

`order` int

`isVisible` bool

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel_DisplayName"></a> DisplayName

```csharp
public string DisplayName { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel_Id"></a> Id

```csharp
public string Id { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel_IsVisible"></a> IsVisible

```csharp
public bool IsVisible { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel_Order"></a> Order

```csharp
public int Order { get; set; }
```

#### Property Value

 int

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel_OnPropertyChanged_System_String_"></a> OnPropertyChanged\(string\)

```csharp
protected void OnPropertyChanged(string name)
```

#### Parameters

`name` string

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_ToolbarItemViewModel_PropertyChanged"></a> PropertyChanged

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 PropertyChangedEventHandler

