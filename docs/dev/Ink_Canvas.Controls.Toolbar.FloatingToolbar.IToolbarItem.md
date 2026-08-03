# <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem"></a> Interface IToolbarItem

Namespace: [Ink\_Canvas.Controls.Toolbar.FloatingToolbar](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public interface IToolbarItem
```

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem_CustomSettings"></a> CustomSettings

组件自定义设置声明。内置组件和插件组件均可通过此属性声明需要在设置页面动态生成的配置项。
默认为空列表，表示无自定义设置。

```csharp
IReadOnlyList<PluginToolbarSettingInfo> CustomSettings { get; }
```

#### Property Value

 IReadOnlyList<PluginToolbarSettingInfo\>

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem_CustomSettingsPanelFactory"></a> CustomSettingsPanelFactory

自定义设置面板工厂。若提供此属性，设置页面将使用此工厂返回的 UI 而非通过 CustomSettings 声明式生成。
适用于需要完全自定义 UI 或读写全局设置（非 per-component 设置）的组件。

```csharp
Func<FrameworkElement> CustomSettingsPanelFactory { get; }
```

#### Property Value

 Func<FrameworkElement\>

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem_DefaultHidingRuleset"></a> DefaultHidingRuleset

```csharp
ToolbarRuleset DefaultHidingRuleset { get; }
```

#### Property Value

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarRuleset.md)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem_DefaultPreventHideOnDragClick"></a> DefaultPreventHideOnDragClick

```csharp
bool DefaultPreventHideOnDragClick { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem_DefaultShowSeparateBorder"></a> DefaultShowSeparateBorder

```csharp
bool DefaultShowSeparateBorder { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem_Description"></a> Description

```csharp
string Description { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem_DisplayName"></a> DisplayName

```csharp
string DisplayName { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem_IconGeometry"></a> IconGeometry

```csharp
string IconGeometry { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem_IconKey"></a> IconKey

```csharp
FontIconData? IconKey { get; }
```

#### Property Value

 FontIconData?

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem_Id"></a> Id

```csharp
string Id { get; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem_ApplyOrientation_FrameworkElement_Orientation_"></a> ApplyOrientation\(FrameworkElement, Orientation\)

```csharp
void ApplyOrientation(FrameworkElement view, Orientation orientation)
```

#### Parameters

`view` FrameworkElement

`orientation` Orientation

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarItem_BuildView_Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarHost_"></a> BuildView\(IToolbarHost\)

```csharp
FrameworkElement BuildView(IToolbarHost host)
```

#### Parameters

`host` [IToolbarHost](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.IToolbarHost.md)

#### Returns

 FrameworkElement

