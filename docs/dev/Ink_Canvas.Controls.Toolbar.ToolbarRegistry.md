# <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry"></a> Class ToolbarRegistry

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class ToolbarRegistry
```

#### Inheritance

object ← 
[ToolbarRegistry](Ink\_Canvas.Controls.Toolbar.ToolbarRegistry.md)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_ApplyMenuVisibility_Ink_Canvas_Controls_Toolbar_IToolbarHost_Ink_Canvas_Controls_Toolbar_ToolbarLayoutSettings_"></a> ApplyMenuVisibility\(IToolbarHost, ToolbarLayoutSettings\)

```csharp
public static void ApplyMenuVisibility(IToolbarHost host, ToolbarLayoutSettings layout)
```

#### Parameters

`host` [IToolbarHost](Ink\_Canvas.Controls.Toolbar.IToolbarHost.md)

`layout` [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_ClearInjected_Panel_"></a> ClearInjected\(Panel\)

```csharp
public static void ClearInjected(Panel container)
```

#### Parameters

`container` Panel

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_Discover"></a> Discover\(\)

```csharp
public static IReadOnlyList<IToolbarItem> Discover()
```

#### Returns

 IReadOnlyList<[IToolbarItem](Ink\_Canvas.Controls.Toolbar.IToolbarItem.md)\>

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_Populate_Ink_Canvas_Controls_Toolbar_IToolbarHost_IDictionary_Ink_Canvas_Controls_Toolbar_ToolbarSlot_Panel__Ink_Canvas_Controls_Toolbar_ToolbarLayoutSettings_"></a> Populate\(IToolbarHost, IDictionary<ToolbarSlot, Panel\>, ToolbarLayoutSettings\)

```csharp
public static void Populate(IToolbarHost host, IDictionary<ToolbarSlot, Panel> slots, ToolbarLayoutSettings layout)
```

#### Parameters

`host` [IToolbarHost](Ink\_Canvas.Controls.Toolbar.IToolbarHost.md)

`slots` IDictionary<[ToolbarSlot](Ink\_Canvas.Controls.Toolbar.ToolbarSlot.md), Panel\>

`layout` [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolbarLayoutSettings.md)

