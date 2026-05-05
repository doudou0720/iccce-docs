# <a id="Ink_Canvas_Controls_Toolbar_ToolbarHost"></a> Class ToolbarHost

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

MainWindow 版的 IToolbarHost 实现。Phase 1 直接把 MainWindow 引用暴露给插件，
插件可通过 host.Window 访问私有/内部成员（partial class 扩展或 internal 字段）。
后续阶段逐步把具体行为抽成 Host 上的方法/事件，收窄这个接口。

```csharp
public sealed class ToolbarHost : IToolbarHost
```

#### Inheritance

object ← 
[ToolbarHost](Ink\_Canvas.Controls.Toolbar.ToolbarHost.md)

#### Implements

[IToolbarHost](Ink\_Canvas.Controls.Toolbar.IToolbarHost.md)

## Constructors

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarHost__ctor_Ink_Canvas_MainWindow_"></a> ToolbarHost\(MainWindow\)

```csharp
public ToolbarHost(MainWindow window)
```

#### Parameters

`window` [MainWindow](Ink\_Canvas.MainWindow.md)

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarHost_Window"></a> Window

```csharp
public MainWindow Window { get; }
```

#### Property Value

 [MainWindow](Ink\_Canvas.MainWindow.md)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarHost_FindView_System_String_"></a> FindView\(string\)

按 id 获取之前注册的 view。不存在返回 null。

```csharp
public FrameworkElement FindView(string id)
```

#### Parameters

`id` string

#### Returns

 FrameworkElement

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarHost_RegisterView_System_String_FrameworkElement_"></a> RegisterView\(string, FrameworkElement\)

按 id 登记按钮的 view 实例（供 MainWindow 字段回填和互相查找）。

```csharp
public void RegisterView(string id, FrameworkElement view)
```

#### Parameters

`id` string

`view` FrameworkElement

