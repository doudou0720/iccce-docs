# <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem"></a> Interface IBoardToolbarItem

Namespace: [Ink\_Canvas.Controls.Toolbar.BoardToolbar](Ink\_Canvas.Controls.Toolbar.BoardToolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public interface IBoardToolbarItem
```

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_CustomSettingsPanelFactory"></a> CustomSettingsPanelFactory

自定义设置面板工厂。若提供此属性，设置页面将在"组件设置"中附加此工厂返回的 UI。
适用于需要完全自定义 UI 或读写全局设置（非 per-component 设置）的组件。

```csharp
Func<FrameworkElement> CustomSettingsPanelFactory { get; }
```

#### Property Value

 [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<FrameworkElement\>

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_DefaultPosition"></a> DefaultPosition

```csharp
ButtonPosition DefaultPosition { get; }
```

#### Property Value

 [ButtonPosition](Ink\_Canvas.Controls.ButtonPosition.md)

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

 FontIconData?

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_Id"></a> Id

```csharp
string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_ApplyPosition_FrameworkElement_Ink_Canvas_Controls_ButtonPosition_"></a> ApplyPosition\(FrameworkElement, ButtonPosition\)

```csharp
void ApplyPosition(FrameworkElement view, ButtonPosition position)
```

#### Parameters

`view` FrameworkElement

`position` [ButtonPosition](Ink\_Canvas.Controls.ButtonPosition.md)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarItem_BuildView_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_"></a> BuildView\(IBoardToolbarHost\)

```csharp
FrameworkElement BuildView(IBoardToolbarHost host)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

#### Returns

 FrameworkElement

