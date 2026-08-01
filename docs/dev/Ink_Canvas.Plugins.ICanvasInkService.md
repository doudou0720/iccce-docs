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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasInkService_CanUndo"></a> CanUndo

是否可以撤销。

```csharp
bool CanUndo { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasInkService_CanvasSize"></a> CanvasSize

主画布的实际尺寸（设备无关像素），供坐标换算/居中插入。

```csharp
Size CanvasSize { get; }
```

#### Property Value

 [Size](https://learn.microsoft.com/dotnet/api/system.windows.size)

### <a id="Ink_Canvas_Plugins_ICanvasInkService_CurrentWhiteboardPage"></a> CurrentWhiteboardPage

当前白板页索引（从 1 开始）；非白板模式返回 0。

```csharp
int CurrentWhiteboardPage { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_ICanvasInkService_IsPageFrozen"></a> IsPageFrozen

当前页是否已冻结（墨迹锁定，禁止变更）。

```csharp
bool IsPageFrozen { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasInkService_IsPenMode"></a> IsPenMode

当前是否处于画笔/墨迹模式。

```csharp
bool IsPenMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasInkService_WhiteboardPageCount"></a> WhiteboardPageCount

白板总页数；非白板模式返回 0。

```csharp
int WhiteboardPageCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

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

### <a id="Ink_Canvas_Plugins_ICanvasInkService_GetDefaultDrawingAttributes"></a> GetDefaultDrawingAttributes\(\)

当前默认笔触属性（颜色/粗细/荧光笔）。返回克隆副本，修改不影响宿主。

```csharp
DrawingAttributes GetDefaultDrawingAttributes()
```

#### Returns

 [DrawingAttributes](https://learn.microsoft.com/dotnet/api/system.windows.ink.drawingattributes)

### <a id="Ink_Canvas_Plugins_ICanvasInkService_GetStrokes"></a> GetStrokes\(\)

当前画布上全部墨迹的克隆副本（画布坐标）。返回的集合不共享内部引用，
修改不会影响宿主画布。

```csharp
StrokeCollection GetStrokes()
```

#### Returns

 [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

### <a id="Ink_Canvas_Plugins_ICanvasInkService_InsertImage"></a> InsertImage\(\)

打开「从文件插入图片」流程（文件对话框 + 插入画布）。
返回是否成功触发流程；当前页冻结或不可插入时返回 false。

```csharp
bool InsertImage()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

### <a id="Ink_Canvas_Plugins_ICanvasInkService_TryAddStrokes_System_Windows_Ink_StrokeCollection_"></a> TryAddStrokes\(StrokeCollection\)

把墨迹插入当前画布（保持原坐标），并写入 TimeMachine 历史（可按 Ctrl+Z 撤销）。
当前页冻结时返回 <code>false</code>；传入空集合返回 <code>false</code>。

```csharp
bool TryAddStrokes(StrokeCollection strokes)
```

#### Parameters

`strokes` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasInkService_TryAddStrokes_System_Windows_Ink_StrokeCollection_System_Windows_Point_"></a> TryAddStrokes\(StrokeCollection, Point\)

把墨迹插入当前画布，并使墨迹包围盒中心对齐到 <code class="paramref">center</code>（画布坐标）。
其余行为同 <xref href="Ink_Canvas.Plugins.ICanvasInkService.TryAddStrokes(System.Windows.Ink.StrokeCollection)" data-throw-if-not-resolved="false"></xref>。

```csharp
bool TryAddStrokes(StrokeCollection strokes, Point center)
```

#### Parameters

`strokes` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

`center` [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasInkService_TryClearStrokes"></a> TryClearStrokes\(\)

清空当前画布墨迹，并写入 TimeMachine 历史（可按 Ctrl+Z 撤销）。
当前页冻结时返回 <code>false</code>。

```csharp
bool TryClearStrokes()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasInkService_Undo"></a> Undo\(\)

撤销上一步操作。

```csharp
void Undo()
```

