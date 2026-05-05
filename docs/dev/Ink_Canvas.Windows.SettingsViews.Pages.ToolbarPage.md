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

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_CanvasItems"></a> CanvasItems

```csharp
public ObservableCollection<ToolbarPage.ToolbarItemViewModel> CanvasItems { get; }
```

#### Property Value

 ObservableCollection<[ToolbarPage](Ink\_Canvas.Windows.SettingsViews.Pages.ToolbarPage.md).[ToolbarItemViewModel](Ink\_Canvas.Windows.SettingsViews.Pages.ToolbarPage.ToolbarItemViewModel.md)\>

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_EndItems"></a> EndItems

```csharp
public ObservableCollection<ToolbarPage.ToolbarItemViewModel> EndItems { get; }
```

#### Property Value

 ObservableCollection<[ToolbarPage](Ink\_Canvas.Windows.SettingsViews.Pages.ToolbarPage.md).[ToolbarItemViewModel](Ink\_Canvas.Windows.SettingsViews.Pages.ToolbarPage.ToolbarItemViewModel.md)\>

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_ToolbarPage_MainItems"></a> MainItems

```csharp
public ObservableCollection<ToolbarPage.ToolbarItemViewModel> MainItems { get; }
```

#### Property Value

 ObservableCollection<[ToolbarPage](Ink\_Canvas.Windows.SettingsViews.Pages.ToolbarPage.md).[ToolbarItemViewModel](Ink\_Canvas.Windows.SettingsViews.Pages.ToolbarPage.ToolbarItemViewModel.md)\>

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

