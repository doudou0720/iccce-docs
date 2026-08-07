# <a id="Ink_Canvas_Plugins_ICanvasCompositionService"></a> Interface ICanvasCompositionService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

画布合成服务：允许插件向宿主画布下方注入全屏背景层，并把「背景 + 墨迹」按页导出。

<p>
典型用法（以 PDF 阅读器为例）：

<ol><li>调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.InjectBackgroundLayer(Func%7bFrameworkElement%7d)" data-throw-if-not-resolved="false"></xref> 把自己的页面视图放到 InkCanvas 下方；</li><li>调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.ConfigurePages(System.UInt32%2cSystem.UInt32%2cFunc%7bSystem.UInt32%2cCancellationToken%2cTask%7bBitmapSource%7d%7d)" data-throw-if-not-resolved="false"></xref> 告知总页数、当前页与离屏渲染回调；</li><li>自己翻页后调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.SetCurrentPageAsync(System.UInt32%2cCancellationToken)" data-throw-if-not-resolved="false"></xref>，宿主会自动保存/恢复每页墨迹；</li><li>需要成品时调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.ExportWithInkAsync(System.String%2cSystem.UInt32%2cCancellationToken)" data-throw-if-not-resolved="false"></xref>。</li></ol>
</p>

所有方法都可以从任意线程调用，宿主内部会切换到 UI 线程。

```csharp
public interface ICanvasCompositionService
```

## Properties

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_CurrentPageIndex"></a> CurrentPageIndex

背景层当前页索引（从 0 开始）。

```csharp
uint CurrentPageIndex { get; }
```

#### Property Value

 uint

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_HasBackgroundLayer"></a> HasBackgroundLayer

当前是否已注入背景层。

```csharp
bool HasBackgroundLayer { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_PageCount"></a> PageCount

背景层的总页数，未配置时为 0。

```csharp
uint PageCount { get; }
```

#### Property Value

 uint

## Methods

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_ConfigurePages_System_UInt32_System_UInt32_Func_System_UInt32_CancellationToken_Task_BitmapSource___"></a> ConfigurePages\(uint, uint, Func<uint, CancellationToken, Task<BitmapSource\>\>\)

配置分页信息。<code class="paramref">pageRenderer</code> 用于导出非当前页时离屏渲染背景，
参数为从 0 开始的页索引，返回已 Freeze 的位图；为 <code>null</code> 时只能导出当前页。

```csharp
void ConfigurePages(uint pageCount, uint currentPageIndex, Func<uint, CancellationToken, Task<BitmapSource>> pageRenderer)
```

#### Parameters

`pageCount` uint

`currentPageIndex` uint

`pageRenderer` Func<uint, CancellationToken, Task<BitmapSource\>\>

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_ExportWithInkAsync_System_String_System_UInt32_CancellationToken_"></a> ExportWithInkAsync\(string, uint, CancellationToken\)

把「背景 + 墨迹」合成后导出为 PDF：从 <code class="paramref">pageIndex</code> 起直到末页，
每页先合成一张图片再组装成新 PDF。返回实际写入的文件路径。

```csharp
Task<string> ExportWithInkAsync(string outputPath, uint pageIndex, CancellationToken cancellationToken = null)
```

#### Parameters

`outputPath` string

输出 PDF 路径；所在目录不存在时会被创建。

`pageIndex` uint

起始页索引（从 0 开始）。

`cancellationToken` CancellationToken

#### Returns

 Task<string\>

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_GetStrokesForPageAsync_System_UInt32_CancellationToken_"></a> GetStrokesForPageAsync\(uint, CancellationToken\)

读取指定页的墨迹副本，坐标已绑定到背景层页面坐标系
（原点为背景元素左上角，单位为设备无关像素，与 FrameworkElement.ActualWidth 同尺度）。
该页没有墨迹时返回空集合。

```csharp
Task<StrokeCollection> GetStrokesForPageAsync(uint pageIndex, CancellationToken cancellationToken = null)
```

#### Parameters

`pageIndex` uint

`cancellationToken` CancellationToken

#### Returns

 Task<StrokeCollection\>

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_InjectBackgroundLayer_Func_FrameworkElement__"></a> InjectBackgroundLayer\(Func<FrameworkElement\>\)

给插件注入全屏背景层。<code class="paramref">backgroundFactory</code> 在 UI 线程被调用一次，
返回的元素会被放到 InkCanvas 下方并铺满画布，不参与命中测试（不会抢走书写事件）。
重复调用会替换掉上一次注入的背景层。传入 <code>null</code> 等价于 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.RemoveBackgroundLayer" data-throw-if-not-resolved="false"></xref>。

```csharp
void InjectBackgroundLayer(Func<FrameworkElement> backgroundFactory)
```

#### Parameters

`backgroundFactory` Func<FrameworkElement\>

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_RemoveBackgroundLayer"></a> RemoveBackgroundLayer\(\)

移除已注入的背景层，并清空按页墨迹缓存与分页配置。

```csharp
void RemoveBackgroundLayer()
```

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_ScrollOffsetAsync_System_Double_CancellationToken_"></a> ScrollOffsetAsync\(double, CancellationToken\)

连续滚动：把当前画布墨迹整体平移 <code class="paramref">deltaY</code>（DIP），
与插件背景长条的滚动保持一致。插件应在滚动背景层后立即调用，使墨迹实时跟随。

```csharp
Task ScrollOffsetAsync(double deltaY, CancellationToken cancellationToken = null)
```

#### Parameters

`deltaY` double

`cancellationToken` CancellationToken

#### Returns

 Task

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_SetCanvasContentAnchor_FrameworkElement_"></a> SetCanvasContentAnchor\(FrameworkElement\)

声明背景层内的「内容锚点」：墨迹换算（TransformToVisual）的目标元素。
当插件把页面内容放在一个会缩放/平移的容器里、而容器之外还有固定背景时，
必须把锚点指向该内容容器，宿主才能把缩放正确纳入墨迹的按页存取换算。
传 <code>null</code> 表示使用注入的背景层根节点（默认）。

```csharp
void SetCanvasContentAnchor(FrameworkElement contentLayer)
```

#### Parameters

`contentLayer` FrameworkElement

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_SetCanvasGestureHandler_Ink_Canvas_Plugins_IPluginCanvasGestureHandler_"></a> SetCanvasGestureHandler\(IPluginCanvasGestureHandler\)

注册/注销画布双指手势处理器。宿主在检测到画布上的双指操作
（捏合/平移，见 <xref href="Ink_Canvas.Plugins.IPluginCanvasGestureHandler" data-throw-if-not-resolved="false"></xref>）时，会优先转发给该处理器；
处理器返回 <code>true</code> 表示插件接管该事件，宿主跳过默认的墨迹/画布变换。
传 <code>null</code> 表示注销。同一时刻只允许一个处理器。

```csharp
void SetCanvasGestureHandler(IPluginCanvasGestureHandler handler)
```

#### Parameters

`handler` [IPluginCanvasGestureHandler](Ink\_Canvas.Plugins.IPluginCanvasGestureHandler.md)

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_SetCurrentPageAsync_System_UInt32_CancellationToken_"></a> SetCurrentPageAsync\(uint, CancellationToken\)

通知宿主背景层已切换到 <code class="paramref">pageIndex</code>：
宿主会先把画布上的墨迹存入原页，清空画布，再恢复目标页此前的墨迹。
插件应在自己完成翻页渲染后调用。

```csharp
Task SetCurrentPageAsync(uint pageIndex, CancellationToken cancellationToken = null)
```

#### Parameters

`pageIndex` uint

`cancellationToken` CancellationToken

#### Returns

 Task

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_SetPageContentRect_System_Nullable_Rect__"></a> SetPageContentRect\(Rect?\)

声明背景层内真正承载页面内容的矩形（背景元素坐标系，DIP）。

<p>
背景以 Uniform 等方式居中留边时必须调用：导出会只取该矩形作为 PDF 页面，
从而保持页面原始宽高比，并把墨迹按同一矩形换算，避免被拉伸成画布比例。
矩形外的墨迹（画在留边上的）导出时会被裁掉。
</p>

传 <code>null</code> 表示整个背景层都是页面内容（默认行为）。

```csharp
void SetPageContentRect(Rect? contentRect)
```

#### Parameters

`contentRect` Rect?

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_SetVisiblePagesAsync_IReadOnlyList_Ink_Canvas_Plugins_PluginVisiblePage__CancellationToken_"></a> SetVisiblePagesAsync\(IReadOnlyList<PluginVisiblePage\>, CancellationToken\)

以「多可见页」方式切换背景层内容（双页等）。宿主会：

<ol><li>把画布墨迹按 <code>ContentRect</code> 逐个裁剪，存入对应 <code>PageIndex</code>；</li><li>清空画布；</li><li>把新可见页各自的墨迹恢复到画布。</li></ol>

与 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.SetCurrentPageAsync(System.UInt32%2cCancellationToken)" data-throw-if-not-resolved="false"></xref> 的区别：一次显示多页时，墨迹必须按矩形切分到各物理页，
否则左右页笔迹会混进同一个页索引。列表里的页索引需按从 0 开始、升序给出。

```csharp
Task SetVisiblePagesAsync(IReadOnlyList<PluginVisiblePage> visiblePages, CancellationToken cancellationToken = null)
```

#### Parameters

`visiblePages` IReadOnlyList<[PluginVisiblePage](Ink\_Canvas.Plugins.PluginVisiblePage.md)\>

`cancellationToken` CancellationToken

#### Returns

 Task

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_TransformInkAsync_Matrix_CancellationToken_"></a> TransformInkAsync\(Matrix, CancellationToken\)

按 <code class="paramref">matrix</code> 变换当前画布上的全部墨迹（仅变换笔画坐标，
保留笔尖宽度），用于双指缩放/平移时让墨迹与插件背景层实时同步。
变换作用于画布坐标（与背景层 RenderTransform 同一坐标系）。

```csharp
Task TransformInkAsync(Matrix matrix, CancellationToken cancellationToken = null)
```

#### Parameters

`matrix` Matrix

`cancellationToken` CancellationToken

#### Returns

 Task

