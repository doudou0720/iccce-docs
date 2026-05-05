# <a id="Ink_Canvas_Controls_Toolbar_IToolbarHost"></a> Interface IToolbarHost

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

工具栏按钮插件与宿主之间的桥梁。Phase 1 粗粒度暴露 MainWindow，后续收窄。

```csharp
public interface IToolbarHost
```

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarHost_Window"></a> Window

```csharp
MainWindow Window { get; }
```

#### Property Value

 [MainWindow](Ink\_Canvas.MainWindow.md)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarHost_FindView_System_String_"></a> FindView\(string\)

按 id 获取之前注册的 view。不存在返回 null。

```csharp
FrameworkElement FindView(string id)
```

#### Parameters

`id` string

#### Returns

 FrameworkElement

### <a id="Ink_Canvas_Controls_Toolbar_IToolbarHost_RegisterView_System_String_FrameworkElement_"></a> RegisterView\(string, FrameworkElement\)

按 id 登记按钮的 view 实例（供 MainWindow 字段回填和互相查找）。

```csharp
void RegisterView(string id, FrameworkElement view)
```

#### Parameters

`id` string

`view` FrameworkElement

