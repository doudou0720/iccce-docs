# <a id="Ink_Canvas_Plugins_IEventService"></a> Interface IEventService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

事件服务，供插件订阅主程序事件。

```csharp
public interface IEventService
```

## Properties

### <a id="Ink_Canvas_Plugins_IEventService_IsWhiteboardMode"></a> IsWhiteboardMode

当前是否处于普通白板模式。

```csharp
bool IsWhiteboardMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IEventService_AppExiting"></a> AppExiting

应用即将退出时触发

```csharp
event Action AppExiting
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="Ink_Canvas_Plugins_IEventService_PenModeChanged"></a> PenModeChanged

画笔模式切换时触发（true=画笔模式，false=鼠标模式）

```csharp
event Action<bool> PenModeChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Plugins_IEventService_SlideChanged"></a> SlideChanged

PPT 翻页时触发（当前页码）

```csharp
event Action<int> SlideChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Ink_Canvas_Plugins_IEventService_SlideShowEnded"></a> SlideShowEnded

PPT 结束放映时触发

```csharp
event Action SlideShowEnded
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="Ink_Canvas_Plugins_IEventService_SlideShowStarted"></a> SlideShowStarted

PPT 开始放映时触发

```csharp
event Action SlideShowStarted
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="Ink_Canvas_Plugins_IEventService_StrokesChanged"></a> StrokesChanged

画布墨迹集合变化时触发（added, removed）。
冻结页回滚等宿主内部程序性回滚不触发；插件自身通过
<xref href="Ink_Canvas.Plugins.ICanvasInkService" data-throw-if-not-resolved="false"></xref> 插入/清除也会触发，注意避免在处理器内再次写入造成循环。

```csharp
event Action<StrokeCollection, StrokeCollection> StrokesChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection), [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)\>

### <a id="Ink_Canvas_Plugins_IEventService_TopMostChanged"></a> TopMostChanged

窗口置顶状态变化时触发

```csharp
event Action<bool> TopMostChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Plugins_IEventService_UndoRedoStateChanged"></a> UndoRedoStateChanged

撤销/重做可用状态变化时触发（canUndo, canRedo）。

```csharp
event Action<bool, bool> UndoRedoStateChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Plugins_IEventService_WhiteboardModeChanged"></a> WhiteboardModeChanged

白板模式切换时触发（true=进入白板，false=退出白板）

```csharp
event Action<bool> WhiteboardModeChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Plugins_IEventService_WhiteboardPageChanged"></a> WhiteboardPageChanged

白板当前页/总页数变化时触发（pageIndex 从 1 开始，pageCount 总页数）。

```csharp
event Action<int, int> WhiteboardPageChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

