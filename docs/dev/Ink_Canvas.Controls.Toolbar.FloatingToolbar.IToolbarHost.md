# <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarHost"></a> Interface IToolbarHost

Namespace: [Ink\_Canvas.Controls.Toolbar.FloatingToolbar](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.md)  
Assembly: InkCanvasForClass.dll  

工具栏按钮插件与宿主之间的桥梁。Phase 1 粗粒度暴露 MainWindow，后续收窄。

```csharp
public interface IToolbarHost
```

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarHost_Window"></a> Window

```csharp
MainWindow Window { get; }
```

#### Property Value

 [MainWindow](Ink\_Canvas.MainWindow.md)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarHost_FindView_System_String_"></a> FindView\(string\)

按 id 获取之前注册的 view。不存在返回 null。

```csharp
FrameworkElement FindView(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

### <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar_IToolbarHost_RegisterView_System_String_System_Windows_FrameworkElement_"></a> RegisterView\(string, FrameworkElement\)

按 id 登记按钮的 view 实例（供 MainWindow 字段回填和互相查找）。

```csharp
void RegisterView(string id, FrameworkElement view)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`view` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

