# <a id="Ink_Canvas_Plugins_PresentationSourceDescriptor"></a> Class PresentationSourceDescriptor

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

外部演示源描述。

```csharp
public class PresentationSourceDescriptor
```

#### Inheritance

object ← 
[PresentationSourceDescriptor](Ink\_Canvas.Plugins.PresentationSourceDescriptor.md)

## Properties

### <a id="Ink_Canvas_Plugins_PresentationSourceDescriptor_AllowPageNumberClick"></a> AllowPageNumberClick

是否允许点击页码按钮跳页。外部演示源通常没有缩略图与跳页对话框，
置为 <code>false</code> 时宿主会禁用页码点击与增强预览。

```csharp
public bool AllowPageNumberClick { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_PresentationSourceDescriptor_CurrentPage"></a> CurrentPage

起始页码（从 1 开始）。

```csharp
public int CurrentPage { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Plugins_PresentationSourceDescriptor_Id"></a> Id

演示源唯一标识，建议用插件 Id。<xref href="Ink_Canvas.Plugins.IPresentationSourceService.EndAsync(System.String%2cCancellationToken)" data-throw-if-not-resolved="false"></xref>
按此值校验，避免插件误关掉别人的放映。

```csharp
public string Id { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PresentationSourceDescriptor_Name"></a> Name

显示名称，用于日志与提示。

```csharp
public string Name { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PresentationSourceDescriptor_NavigateAsync"></a> NavigateAsync

翻页回调。宿主翻页条被点击（含长按连续翻页）时调用，插件完成渲染后返回新的页码
（从 1 开始）；返回 0 或负数表示已到边界/翻页失败，宿主不更新页码。

<p>
返回值即宿主用来刷新翻页条的页码，插件无需再调用 <xref href="Ink_Canvas.Plugins.IPresentationSourceService.UpdatePageAsync(System.Int32%2cSystem.Int32%2cCancellationToken)" data-throw-if-not-resolved="false"></xref>。
</p>
<p>回调在 UI 线程之外执行，插件内部若要触碰 WPF 元素需自行切回 Dispatcher。</p>

```csharp
public Func<PresentationNavigation, CancellationToken, Task<int>> NavigateAsync { get; set; }
```

#### Property Value

 Func<[PresentationNavigation](Ink\_Canvas.Plugins.PresentationNavigation.md), CancellationToken, Task<int\>\>

### <a id="Ink_Canvas_Plugins_PresentationSourceDescriptor_PageCount"></a> PageCount

总页数，必须大于 0，否则宿主不会显示翻页条。

```csharp
public int PageCount { get; set; }
```

#### Property Value

 int

