# <a id="Ink_Canvas_Plugins_ICanvasCompositionService"></a> Interface ICanvasCompositionService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

画布合成服务：允许插件向宿主画布下方注入全屏背景层，并把「背景 + 墨迹」按页导出。

<p>
典型用法（以 PDF 阅读器为例）：

<ol><li>调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.InjectBackgroundLayer(System.Func%7bSystem.Windows.FrameworkElement%7d)" data-throw-if-not-resolved="false"></xref> 把自己的页面视图放到 InkCanvas 下方；</li><li>调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.ConfigurePages(System.UInt32%2cSystem.UInt32%2cSystem.Func%7bSystem.UInt32%2cSystem.Threading.CancellationToken%2cSystem.Threading.Tasks.Task%7bSystem.Windows.Media.Imaging.BitmapSource%7d%7d)" data-throw-if-not-resolved="false"></xref> 告知总页数、当前页与离屏渲染回调；</li><li>自己翻页后调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.SetCurrentPageAsync(System.UInt32%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref>，宿主会自动保存/恢复每页墨迹；</li><li>需要成品时调用 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.ExportWithInkAsync(System.String%2cSystem.UInt32%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref>。</li></ol>
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

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_HasBackgroundLayer"></a> HasBackgroundLayer

当前是否已注入背景层。

```csharp
bool HasBackgroundLayer { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_PageCount"></a> PageCount

背景层的总页数，未配置时为 0。

```csharp
uint PageCount { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_ConfigurePages_System_UInt32_System_UInt32_System_Func_System_UInt32_System_Threading_CancellationToken_System_Threading_Tasks_Task_System_Windows_Media_Imaging_BitmapSource___"></a> ConfigurePages\(uint, uint, Func<uint, CancellationToken, Task<BitmapSource\>\>\)

配置分页信息。<code class="paramref">pageRenderer</code> 用于导出非当前页时离屏渲染背景，
参数为从 0 开始的页索引，返回已 Freeze 的位图；为 <code>null</code> 时只能导出当前页。

```csharp
void ConfigurePages(uint pageCount, uint currentPageIndex, Func<uint, CancellationToken, Task<BitmapSource>> pageRenderer)
```

#### Parameters

`pageCount` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`currentPageIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`pageRenderer` [Func](https://learn.microsoft.com/dotnet/api/system.func\-3)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken), [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[BitmapSource](https://learn.microsoft.com/dotnet/api/system.windows.media.imaging.bitmapsource)\>\>

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_ExportWithInkAsync_System_String_System_UInt32_System_Threading_CancellationToken_"></a> ExportWithInkAsync\(string, uint, CancellationToken\)

把「背景 + 墨迹」合成后导出为 PDF：从 <code class="paramref">pageIndex</code> 起直到末页，
每页先合成一张图片再组装成新 PDF。返回实际写入的文件路径。

```csharp
Task<string> ExportWithInkAsync(string outputPath, uint pageIndex, CancellationToken cancellationToken = default)
```

#### Parameters

`outputPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

输出 PDF 路径；所在目录不存在时会被创建。

`pageIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

起始页索引（从 0 开始）。

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_GetStrokesForPageAsync_System_UInt32_System_Threading_CancellationToken_"></a> GetStrokesForPageAsync\(uint, CancellationToken\)

读取指定页的墨迹副本，坐标已绑定到背景层页面坐标系
（原点为背景元素左上角，单位为设备无关像素，与 <xref href="System.Windows.FrameworkElement.ActualWidth" data-throw-if-not-resolved="false"></xref> 同尺度）。
该页没有墨迹时返回空集合。

```csharp
Task<StrokeCollection> GetStrokesForPageAsync(uint pageIndex, CancellationToken cancellationToken = default)
```

#### Parameters

`pageIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)\>

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_InjectBackgroundLayer_System_Func_System_Windows_FrameworkElement__"></a> InjectBackgroundLayer\(Func<FrameworkElement\>\)

给插件注入全屏背景层。<code class="paramref">backgroundFactory</code> 在 UI 线程被调用一次，
返回的元素会被放到 InkCanvas 下方并铺满画布，不参与命中测试（不会抢走书写事件）。
重复调用会替换掉上一次注入的背景层。传入 <code>null</code> 等价于 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.RemoveBackgroundLayer" data-throw-if-not-resolved="false"></xref>。

```csharp
void InjectBackgroundLayer(Func<FrameworkElement> backgroundFactory)
```

#### Parameters

`backgroundFactory` [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)\>

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_RemoveBackgroundLayer"></a> RemoveBackgroundLayer\(\)

移除已注入的背景层，并清空按页墨迹缓存与分页配置。

```csharp
void RemoveBackgroundLayer()
```

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_SetCurrentPageAsync_System_UInt32_System_Threading_CancellationToken_"></a> SetCurrentPageAsync\(uint, CancellationToken\)

通知宿主背景层已切换到 <code class="paramref">pageIndex</code>：
宿主会先把画布上的墨迹存入原页，清空画布，再恢复目标页此前的墨迹。
插件应在自己完成翻页渲染后调用。

```csharp
Task SetCurrentPageAsync(uint pageIndex, CancellationToken cancellationToken = default)
```

#### Parameters

`pageIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_SetPageContentRect_System_Nullable_System_Windows_Rect__"></a> SetPageContentRect\(Rect?\)

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

`contentRect` [Rect](https://learn.microsoft.com/dotnet/api/system.windows.rect)?

### <a id="Ink_Canvas_Plugins_ICanvasCompositionService_SetVisiblePagesAsync_System_Collections_Generic_IReadOnlyList_Ink_Canvas_Plugins_PluginVisiblePage__System_Threading_CancellationToken_"></a> SetVisiblePagesAsync\(IReadOnlyList<PluginVisiblePage\>, CancellationToken\)

以「多可见页」方式切换背景层内容（双页等）。宿主会：

<ol><li>把画布墨迹按 <code>ContentRect</code> 逐个裁剪，存入对应 <code>PageIndex</code>；</li><li>清空画布；</li><li>把新可见页各自的墨迹恢复到画布。</li></ol>

与 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.SetCurrentPageAsync(System.UInt32%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref> 的区别：一次显示多页时，墨迹必须按矩形切分到各物理页，
否则左右页笔迹会混进同一个页索引。列表里的页索引需按从 0 开始、升序给出。

```csharp
Task SetVisiblePagesAsync(IReadOnlyList<PluginVisiblePage> visiblePages, CancellationToken cancellationToken = default)
```

#### Parameters

`visiblePages` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PluginVisiblePage](Ink\_Canvas.Plugins.PluginVisiblePage.md)\>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

