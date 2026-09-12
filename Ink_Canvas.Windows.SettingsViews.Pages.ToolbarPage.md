# <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage"></a> Class ToolbarPage

Namespace: [Ink\_Canvas.Windows.SettingsViews.Pages](Ink\_Canvas.Windows.SettingsViews.Pages.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ToolbarPage : iNKORE.UI.WPF.Modern.Controls.Page, IDropTarget
```

#### Inheritance

iNKORE.UI.WPF.Modern.Controls.Page ← 
[ToolbarPage](Ink\_Canvas.Windows.SettingsViews.Pages.ToolbarPage.md)

#### Implements

IDropTarget

## Constructors

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage__ctor"></a> ToolbarPage\(\)

```csharp
public ToolbarPage()
```

## Fields

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_IsGroupChildrenVisibleProperty"></a> IsGroupChildrenVisibleProperty

```csharp
public static readonly DependencyProperty IsGroupChildrenVisibleProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_SelectedEntryProperty"></a> SelectedEntryProperty

```csharp
public static readonly DependencyProperty SelectedEntryProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_SelectedGroupChildProperty"></a> SelectedGroupChildProperty

```csharp
public static readonly DependencyProperty SelectedGroupChildProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_SettingsTabIndexProperty"></a> SettingsTabIndexProperty

```csharp
public static readonly DependencyProperty SettingsTabIndexProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_AddedComponents"></a> AddedComponents

```csharp
public ObservableCollection<ToolbarComponentEntry> AddedComponents { get; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<[ToolbarComponentEntry](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarComponentEntry.md)\>

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_AvailableItems"></a> AvailableItems

```csharp
public IReadOnlyList<IToolbarItem> AvailableItems { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IToolbarItem](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.IToolbarItem.md)\>

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_GroupChildren"></a> GroupChildren

```csharp
public ObservableCollection<ToolbarComponentEntry> GroupChildren { get; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<[ToolbarComponentEntry](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarComponentEntry.md)\>

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_GroupDropHandler"></a> GroupDropHandler

```csharp
public GroupChildrenDropHandler GroupDropHandler { get; }
```

#### Property Value

 [GroupChildrenDropHandler](Ink\_Canvas.Windows.SettingsViews.Pages.GroupChildrenDropHandler.md)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_IsGroupChildrenVisible"></a> IsGroupChildrenVisible

```csharp
public bool IsGroupChildrenVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_SelectedEntry"></a> SelectedEntry

```csharp
public ToolbarComponentEntry SelectedEntry { get; set; }
```

#### Property Value

 [ToolbarComponentEntry](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarComponentEntry.md)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_SelectedGroupChild"></a> SelectedGroupChild

```csharp
public ToolbarComponentEntry SelectedGroupChild { get; set; }
```

#### Property Value

 [ToolbarComponentEntry](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarComponentEntry.md)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_SettingsTabIndex"></a> SettingsTabIndex

```csharp
public int SettingsTabIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_DragOver_IDropInfo_"></a> DragOver\(IDropInfo\)

```csharp
public void DragOver(IDropInfo dropInfo)
```

#### Parameters

`dropInfo` IDropInfo

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_Drop_IDropInfo_"></a> Drop\(IDropInfo\)

```csharp
public void Drop(IDropInfo dropInfo)
```

#### Parameters

`dropInfo` IDropInfo

