# <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardToolbarPage"></a> Class BoardToolbarPage

Namespace: [Ink\_Canvas.Windows.SettingsViews.Pages](Ink\_Canvas.Windows.SettingsViews.Pages.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class BoardToolbarPage : iNKORE.UI.WPF.Modern.Controls.Page
```

#### Inheritance

iNKORE.UI.WPF.Modern.Controls.Page ← 
[BoardToolbarPage](Ink\_Canvas.Windows.SettingsViews.Pages.BoardToolbarPage.md)

## Constructors

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardToolbarPage__ctor"></a> BoardToolbarPage\(\)

```csharp
public BoardToolbarPage()
```

## Fields

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardToolbarPage_SelectedEntryProperty"></a> SelectedEntryProperty

```csharp
public static readonly DependencyProperty SelectedEntryProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardToolbarPage_SettingsTabIndexProperty"></a> SettingsTabIndexProperty

```csharp
public static readonly DependencyProperty SettingsTabIndexProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardToolbarPage_AreaGroups"></a> AreaGroups

```csharp
public ObservableCollection<BoardToolbarGroupEntry> AreaGroups { get; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<[BoardToolbarGroupEntry](Ink\_Canvas.Controls.Toolbar.BoardToolbar.BoardToolbarGroupEntry.md)\>

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardToolbarPage_AvailableItems"></a> AvailableItems

```csharp
public IReadOnlyList<IBoardToolbarItem> AvailableItems { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IBoardToolbarItem](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarItem.md)\>

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardToolbarPage_GroupDropHandler"></a> GroupDropHandler

```csharp
public BoardGroupChildrenDropHandler GroupDropHandler { get; }
```

#### Property Value

 [BoardGroupChildrenDropHandler](Ink\_Canvas.Windows.SettingsViews.Pages.BoardGroupChildrenDropHandler.md)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardToolbarPage_GroupListDropHandler"></a> GroupListDropHandler

```csharp
public BoardGroupListDropHandler GroupListDropHandler { get; }
```

#### Property Value

 [BoardGroupListDropHandler](Ink\_Canvas.Windows.SettingsViews.Pages.BoardGroupListDropHandler.md)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardToolbarPage_SelectedEntry"></a> SelectedEntry

```csharp
public BoardToolbarComponentEntry SelectedEntry { get; set; }
```

#### Property Value

 [BoardToolbarComponentEntry](Ink\_Canvas.Controls.Toolbar.BoardToolbar.BoardToolbarComponentEntry.md)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardToolbarPage_SettingsTabIndex"></a> SettingsTabIndex

```csharp
public int SettingsTabIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

