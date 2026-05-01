# <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem"></a> Interface IToolbarItem

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

一个工具栏按钮（或任意浮动栏/白板栏条目）的插件化契约。
实现类必须有无参构造函数，启动时会被 ToolbarRegistry 反射实例化。

```csharp
public interface IToolbarItem
```

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_DefaultAnchorName"></a> DefaultAnchorName

仅当 Position 为 BeforeAnchor/AfterAnchor 时有意义，对应 XAML 里 x:Name。

```csharp
string DefaultAnchorName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_DefaultOrder"></a> DefaultOrder

同一 slot 内的默认顺序，小的在前。

```csharp
int DefaultOrder { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_DefaultPosition"></a> DefaultPosition

```csharp
ToolbarInsertPosition DefaultPosition { get; }
```

#### Property Value

 [ToolbarInsertPosition](Ink\_Canvas.Controls.Toolbar.ToolbarInsertPosition.md)

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_DefaultSlot"></a> DefaultSlot

```csharp
ToolbarSlot DefaultSlot { get; }
```

#### Property Value

 [ToolbarSlot](Ink\_Canvas.Controls.Toolbar.ToolbarSlot.md)

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_DefaultVisible"></a> DefaultVisible

```csharp
bool DefaultVisible { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_Id"></a> Id

稳定、唯一的 id，用于持久化用户配置。不要随便改。

```csharp
string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarItem_BuildView_Ink_Canvas_Controls_Toolbar_IToolbarHost_"></a> BuildView\(IToolbarHost\)

构造 UI 元素并接线所有行为。

```csharp
FrameworkElement BuildView(IToolbarHost host)
```

#### Parameters

`host` [IToolbarHost](Ink\_Canvas.Controls.Toolbar.IToolbarHost.md)

#### Returns

 [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

