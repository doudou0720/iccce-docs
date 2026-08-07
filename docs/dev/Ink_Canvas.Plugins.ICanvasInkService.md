# <a id="Ink_Canvas_Plugins_ICanvasInkService"></a> Interface ICanvasInkService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

画布墨迹服务：允许插件读取、插入、清除主画布墨迹，切换工具，
控制白板分页、撤销/重做与墨迹冻结。

<p>
所有方法都可以从任意线程调用，宿主内部会切换到 UI 线程。
插入/清除会写入 TimeMachine 历史（可按 Ctrl+Z 撤销），
当前页处于墨迹冻结状态时，变更类操作会被拒绝并返回 <code>false</code>。
</p>

```csharp
public interface ICanvasInkService
```

## Properties

### <a id="Ink_Canvas_Plugins_ICanvasInkService_CanRedo"></a> CanRedo

是否可以重做。

```csharp
bool CanRedo { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_ICanvasInkService_CanUndo"></a> CanUndo

是否可以撤销。

```csharp
bool CanUndo { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_ICanvasInkService_CanvasSize"></a> CanvasSize

主画布的实际尺寸（设备无关像素），供坐标换算/居中插入。

```csharp
Size CanvasSize { get; }
```

#### Property Value

 Size

### <a id="Ink_Canvas_Plugins_ICanvasInkService_CurrentWhiteboardPage"></a> CurrentWhiteboardPage

当前白板页索引（从 1 开始）；非白板模式返回 0。

```csharp
int CurrentWhiteboardPage { get; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Plugins_ICanvasInkService_IsPageFrozen"></a> IsPageFrozen

当前页是否已冻结（墨迹锁定，禁止变更）。

```csharp
bool IsPageFrozen { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_ICanvasInkService_IsPenMode"></a> IsPenMode

当前是否处于画笔/墨迹模式。

```csharp
bool IsPenMode { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_ICanvasInkService_WhiteboardPageCount"></a> WhiteboardPageCount

白板总页数；非白板模式返回 0。

```csharp
int WhiteboardPageCount { get; }
```

#### Property Value

 int

## Methods

### <a id="Ink_Canvas_Plugins_ICanvasInkService_AddWhiteboardPage"></a> AddWhiteboardPage\(\)

新增一页白板。

```csharp
void AddWhiteboardPage()
```

### <a id="Ink_Canvas_Plugins_ICanvasInkService_ChangeBackgroundColor"></a> ChangeBackgroundColor\(\)

更换当前画布背景色（打开颜色选择）。

```csharp
void ChangeBackgroundColor()
```

### <a id="Ink_Canvas_Plugins_ICanvasInkService_DeleteWhiteboardPage"></a> DeleteWhiteboardPage\(\)

删除当前白板页（仅剩一页时无效）。

```csharp
void DeleteWhiteboardPage()
```

### <a id="Ink_Canvas_Plugins_ICanvasInkService_ExitWhiteboard"></a> ExitWhiteboard\(\)

退出白板模式（回到浮动栏）。

```csharp
void ExitWhiteboard()
```

### <a id="Ink_Canvas_Plugins_ICanvasInkService_ExportCurrentPageAsPng_System_String_"></a> ExportCurrentPageAsPng\(string\)

把当前画布页（墨迹 + 背景色）导出为 PNG 文件。

```csharp
bool ExportCurrentPageAsPng(string filePath)
```

#### Parameters

`filePath` string

输出 PNG 路径（目录需已存在）。

#### Returns

 bool

是否导出成功。

### <a id="Ink_Canvas_Plugins_ICanvasInkService_ExportStrokesAsPng_System_Windows_Ink_StrokeCollection_System_String_"></a> ExportStrokesAsPng\(StrokeCollection, string\)

把指定墨迹集合渲染为 PNG 文件。

```csharp
bool ExportStrokesAsPng(System.Windows.Ink.StrokeCollection strokes, string filePath)
```

#### Parameters

`strokes` System.Windows.Ink.StrokeCollection

要导出的墨迹。

`filePath` string

输出 PNG 路径（目录需已存在）。

#### Returns

 bool

是否导出成功。

### <a id="Ink_Canvas_Plugins_ICanvasInkService_GetDefaultDrawingAttributes"></a> GetDefaultDrawingAttributes\(\)

当前默认笔触属性（颜色/粗细/荧光笔）。返回克隆副本，修改不影响宿主。

```csharp
DrawingAttributes GetDefaultDrawingAttributes()
```

#### Returns

 DrawingAttributes

### <a id="Ink_Canvas_Plugins_ICanvasInkService_GetStrokes"></a> GetStrokes\(\)

当前画布上全部墨迹的克隆副本（画布坐标）。返回的集合不共享内部引用，
修改不会影响宿主画布。

```csharp
StrokeCollection GetStrokes()
```

#### Returns

 StrokeCollection

### <a id="Ink_Canvas_Plugins_ICanvasInkService_InsertBitmap_System_Windows_Media_Imaging_BitmapSource_"></a> InsertBitmap\(BitmapSource\)

把图片插入当前画布（居中缩放、进入撤销历史、切换到选择模式）。

```csharp
bool InsertBitmap(System.Windows.Media.Imaging.BitmapSource bitmapSource)
```

#### Parameters

`bitmapSource` System.Windows.Media.Imaging.BitmapSource

要插入的图片。

#### Returns

 bool

是否已触发插入流程。

### <a id="Ink_Canvas_Plugins_ICanvasInkService_InsertImage"></a> InsertImage\(\)

打开「从文件插入图片」流程（文件对话框 + 插入画布）。
返回是否成功触发流程；当前页冻结或不可插入时返回 false。

```csharp
bool InsertImage()
```

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_ICanvasInkService_PasteClipboardImageAsync_System_Nullable_System_Windows_Point__"></a> PasteClipboardImageAsync\(Point?\)

把剪贴板图片粘贴到画布（可选指定坐标）。

```csharp
System.Threading.Tasks.Task<bool> PasteClipboardImageAsync(System.Windows.Point? position = null)
```

#### Parameters

`position` System.Windows.Point?

插入位置（画布坐标）；null 表示居中。

#### Returns

 System.Threading.Tasks.Task<bool\>

是否已触发粘贴流程。

### <a id="Ink_Canvas_Plugins_ICanvasInkService_Redo"></a> Redo\(\)

重做下一步操作。

```csharp
void Redo()
```

### <a id="Ink_Canvas_Plugins_ICanvasInkService_SelectTool_Ink_Canvas_Plugins_PluginInkTool_"></a> SelectTool\(PluginInkTool\)

切换画布工具。当前页冻结时，编辑类工具（笔/橡皮/选择）会被拒绝并返回 <code>false</code>。

```csharp
bool SelectTool(PluginInkTool tool)
```

#### Parameters

`tool` [PluginInkTool](Ink\_Canvas.Plugins.PluginInkTool.md)

#### Returns

 bool

是否切换成功。

### <a id="Ink_Canvas_Plugins_ICanvasInkService_SwitchToNextPage"></a> SwitchToNextPage\(\)

翻到下一白板页（已在末页时新增一页）。

```csharp
void SwitchToNextPage()
```

### <a id="Ink_Canvas_Plugins_ICanvasInkService_SwitchToPreviousPage"></a> SwitchToPreviousPage\(\)

翻到上一白板页。

```csharp
void SwitchToPreviousPage()
```

### <a id="Ink_Canvas_Plugins_ICanvasInkService_ToggleGesture"></a> ToggleGesture\(\)

切换双指手势（画布平移/缩放）开关。

```csharp
void ToggleGesture()
```

### <a id="Ink_Canvas_Plugins_ICanvasInkService_ToggleInkFreeze"></a> ToggleInkFreeze\(\)

切换当前页的墨迹冻结状态。

```csharp
void ToggleInkFreeze()
```

### <a id="Ink_Canvas_Plugins_ICanvasInkService_TryAddStrokes_StrokeCollection_"></a> TryAddStrokes\(StrokeCollection\)

把墨迹插入当前画布（保持原坐标），并写入 TimeMachine 历史（可按 Ctrl+Z 撤销）。
当前页冻结时返回 <code>false</code>；传入空集合返回 <code>false</code>。

```csharp
bool TryAddStrokes(StrokeCollection strokes)
```

#### Parameters

`strokes` StrokeCollection

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_ICanvasInkService_TryAddStrokes_StrokeCollection_Point_"></a> TryAddStrokes\(StrokeCollection, Point\)

把墨迹插入当前画布，并使墨迹包围盒中心对齐到 <code class="paramref">center</code>（画布坐标）。
其余行为同 <xref href="Ink_Canvas.Plugins.ICanvasInkService.TryAddStrokes(StrokeCollection)" data-throw-if-not-resolved="false"></xref>。

```csharp
bool TryAddStrokes(StrokeCollection strokes, Point center)
```

#### Parameters

`strokes` StrokeCollection

`center` Point

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_ICanvasInkService_TryClearStrokes"></a> TryClearStrokes\(\)

清空当前画布墨迹，并写入 TimeMachine 历史（可按 Ctrl+Z 撤销）。
当前页冻结时返回 <code>false</code>。

```csharp
bool TryClearStrokes()
```

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_ICanvasInkService_Undo"></a> Undo\(\)

撤销上一步操作。

```csharp
void Undo()
```

