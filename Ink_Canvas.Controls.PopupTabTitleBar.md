# <a id="Ink_Canvas_Controls_PopupTabTitleBar"></a> Class PopupTabTitleBar

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvas.Controls.dll  

```csharp
public class PopupTabTitleBar : UserControl
```

#### Inheritance

UserControl ← 
[PopupTabTitleBar](Ink\_Canvas.Controls.PopupTabTitleBar.md)

## Constructors

### <a id="Ink_Canvas_Controls_PopupTabTitleBar__ctor"></a> PopupTabTitleBar\(\)

```csharp
public PopupTabTitleBar()
```

## Fields

### <a id="Ink_Canvas_Controls_PopupTabTitleBar_SelectedIndexProperty"></a> SelectedIndexProperty

```csharp
public static readonly DependencyProperty SelectedIndexProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_Controls_PopupTabTitleBar_CloseButtonControl"></a> CloseButtonControl

```csharp
public Button CloseButtonControl { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_PopupTabTitleBar_SelectedIndex"></a> SelectedIndex

```csharp
public int SelectedIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Controls_PopupTabTitleBar_Tabs"></a> Tabs

```csharp
public ObservableCollection<PopupTabItem> Tabs { get; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<[PopupTabItem](Ink\_Canvas.Controls.PopupTabItem.md)\>

### <a id="Ink_Canvas_Controls_PopupTabTitleBar_SelectedIndexChanged"></a> SelectedIndexChanged

```csharp
public event EventHandler<int> SelectedIndexChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

