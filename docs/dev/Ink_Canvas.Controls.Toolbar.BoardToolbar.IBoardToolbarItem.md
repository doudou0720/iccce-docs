# <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem"></a> Interface IBoardToolbarItem

Namespace: [Ink\_Canvas.Controls.Toolbar.BoardToolbar](Ink\_Canvas.Controls.Toolbar.BoardToolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public interface IBoardToolbarItem
```

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_DefaultPosition"></a> DefaultPosition

```csharp
ButtonPosition DefaultPosition { get; }
```

#### Property Value

 ButtonPosition

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_Description"></a> Description

```csharp
string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_DisplayName"></a> DisplayName

```csharp
string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_IconGeometry"></a> IconGeometry

```csharp
string IconGeometry { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_IconKey"></a> IconKey

```csharp
FontIconData? IconKey { get; }
```

#### Property Value

 [FontIconData](https://github.com/iNKORE\-NET/UI.WPF.Modern/blob/v2/source/Inkore.UI.WPF.Modern/Common/IconKeys/FontDictionary.cs)?

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_Id"></a> Id

```csharp
string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_ApplyPosition_System_Windows_FrameworkElement_Ink_Canvas_Controls_ButtonPosition_"></a> ApplyPosition\(FrameworkElement, ButtonPosition\)

```csharp
void ApplyPosition(FrameworkElement view, ButtonPosition position)
```

#### Parameters

`view` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

`position` ButtonPosition

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_BuildView_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_"></a> BuildView\(IBoardToolbarHost\)

```csharp
FrameworkElement BuildView(IBoardToolbarHost host)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

#### Returns

 [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

