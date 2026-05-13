# <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem"></a> Interface IToolbarItem

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public interface IToolbarItem
```

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_DefaultHidingRuleset"></a> DefaultHidingRuleset

```csharp
ToolbarRuleset DefaultHidingRuleset { get; }
```

#### Property Value

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_DefaultPreventHideOnDragClick"></a> DefaultPreventHideOnDragClick

```csharp
bool DefaultPreventHideOnDragClick { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_DefaultShowSeparateBorder"></a> DefaultShowSeparateBorder

```csharp
bool DefaultShowSeparateBorder { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_Description"></a> Description

```csharp
string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_DisplayName"></a> DisplayName

```csharp
string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_Id"></a> Id

```csharp
string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_BuildView_Ink_Canvas_Controls_Toolbar_IToolbarHost_"></a> BuildView\(IToolbarHost\)

```csharp
FrameworkElement BuildView(IToolbarHost host)
```

#### Parameters

`host` [IToolbarHost](Ink\_Canvas.Controls.Toolbar.IToolbarHost.md)

#### Returns

 [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

