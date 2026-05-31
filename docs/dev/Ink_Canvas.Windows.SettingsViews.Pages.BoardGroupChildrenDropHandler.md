# <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardGroupChildrenDropHandler"></a> Class BoardGroupChildrenDropHandler

Namespace: [Ink\_Canvas.Windows.SettingsViews.Pages](Ink\_Canvas.Windows.SettingsViews.Pages.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class BoardGroupChildrenDropHandler : IDropTarget
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BoardGroupChildrenDropHandler](Ink\_Canvas.Windows.SettingsViews.Pages.BoardGroupChildrenDropHandler.md)

#### Implements

IDropTarget

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardGroupChildrenDropHandler__ctor_Ink_Canvas_Windows_SettingsViews_Pages_BoardToolbarPage_"></a> BoardGroupChildrenDropHandler\(BoardToolbarPage\)

```csharp
public BoardGroupChildrenDropHandler(BoardToolbarPage page)
```

#### Parameters

`page` [BoardToolbarPage](Ink\_Canvas.Windows.SettingsViews.Pages.BoardToolbarPage.md)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardGroupChildrenDropHandler_DragOver_GongSolutions_Wpf_DragDrop_IDropInfo_"></a> DragOver\(IDropInfo\)

Notifies the drop handler about the current drag operation state.

```csharp
public void DragOver(IDropInfo dropInfo)
```

#### Parameters

`dropInfo` IDropInfo

Object which contains several drop information.

#### Remarks

To allow a drop at the current drag position, the <xref href="GongSolutions.Wpf.DragDrop.IDropInfo.Effects" data-throw-if-not-resolved="false"></xref> property on
<code class="paramref">dropInfo</code> should be set to a value other than <xref href="System.Windows.DragDropEffects.None" data-throw-if-not-resolved="false"></xref>
and <xref href="GongSolutions.Wpf.DragDrop.IDropInfo.Data" data-throw-if-not-resolved="false"></xref> should be set to a non-null value.

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardGroupChildrenDropHandler_Drop_GongSolutions_Wpf_DragDrop_IDropInfo_"></a> Drop\(IDropInfo\)

Performs a drop on the target.

```csharp
public void Drop(IDropInfo dropInfo)
```

#### Parameters

`dropInfo` IDropInfo

Object which contains several drop information.

