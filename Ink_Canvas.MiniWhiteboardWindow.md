# <a id="Ink_Canvas_MiniWhiteboardWindow"></a> Class MiniWhiteboardWindow

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

MiniWhiteboardWindow.xaml 的交互逻辑
浮窗小白板，提供简易的书写和绘图功能，支持多页管理和PPT联动

```csharp
public class MiniWhiteboardWindow : Window
```

#### Inheritance

Window ← 
[MiniWhiteboardWindow](Ink\_Canvas.MiniWhiteboardWindow.md)

## Constructors

### <a id="Ink_Canvas_MiniWhiteboardWindow__ctor"></a> MiniWhiteboardWindow\(\)

```csharp
public MiniWhiteboardWindow()
```

## Properties

### <a id="Ink_Canvas_MiniWhiteboardWindow_CurrentPageIndex"></a> CurrentPageIndex

获取当前页面索引（0-based）

```csharp
public int CurrentPageIndex { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_MiniWhiteboardWindow_TotalPageCount"></a> TotalPageCount

获取总页数

```csharp
public int TotalPageCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_MiniWhiteboardWindow_InsertStrokes_StrokeCollection_"></a> InsertStrokes\(StrokeCollection\)

外部调用：将墨迹插入当前小白板页面，自动缩放至可见范围内

```csharp
public void InsertStrokes(StrokeCollection strokes)
```

#### Parameters

`strokes` StrokeCollection

要插入的墨迹集合（坐标基于主画布全屏坐标系，会被克隆并缩放）

### <a id="Ink_Canvas_MiniWhiteboardWindow_OnPPTSlideChangedExternal_System_Int32_"></a> OnPPTSlideChangedExternal\(int\)

外部调用：PPT页面切换时通知小白板（由 MainWindow 转发）

```csharp
public void OnPPTSlideChangedExternal(int slideIndex)
```

#### Parameters

`slideIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

