# <a id="Ink_Canvas_MainWindow"></a> Class MainWindow

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

批注状态点提示：当用户在批注模式下反复点击同一区域时，
在非屏幕边缘区域显示「当前正处于批注状态」的半透明提示，
帮助教师意识到当前处于批注模式而非鼠标模式。
同时支持点击画布即留下可见点状墨迹。

<p>
实现策略：全部逻辑在 <xref href="Ink_Canvas.MainWindow.ProcessCommittedStroke(Stroke)" data-throw-if-not-resolved="false"></xref> 后处理中完成，
不拦截 PreviewMouse 事件，避免干扰 InkCanvas 的墨迹采集与平滑管线。
</p>

```csharp
public class MainWindow : PerformanceTransparentWin, IBoardToolbarHost
```

#### Inheritance

Window ← 
[PerformanceTransparentWin](Ink\_Canvas.Helpers.PerformanceTransparentWin.md) ← 
[MainWindow](Ink\_Canvas.MainWindow.md)

#### Implements

[IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

#### Inherited Members

[PerformanceTransparentWin.IsUsingWindowChromeRendering](Ink\_Canvas.Helpers.PerformanceTransparentWin.md\#Ink\_Canvas\_Helpers\_PerformanceTransparentWin\_IsUsingWindowChromeRendering), 
[PerformanceTransparentWin.TransparentHitTestState](Ink\_Canvas.Helpers.PerformanceTransparentWin.md\#Ink\_Canvas\_Helpers\_PerformanceTransparentWin\_TransparentHitTestState), 
[PerformanceTransparentWin.SetTransparentHitThrough\(\)](Ink\_Canvas.Helpers.PerformanceTransparentWin.md\#Ink\_Canvas\_Helpers\_PerformanceTransparentWin\_SetTransparentHitThrough), 
[PerformanceTransparentWin.SetTransparentNotHitThrough\(\)](Ink\_Canvas.Helpers.PerformanceTransparentWin.md\#Ink\_Canvas\_Helpers\_PerformanceTransparentWin\_SetTransparentNotHitThrough), 
[PerformanceTransparentWin.ShouldHandleWindowChromeHitTest\(Point\)](Ink\_Canvas.Helpers.PerformanceTransparentWin.md\#Ink\_Canvas\_Helpers\_PerformanceTransparentWin\_ShouldHandleWindowChromeHitTest\_Point\_)

## Remarks

本文件主要包含以下功能：
1. 压感模拟：根据输入设备类型和设置模拟不同的压感效果
2. 墨水到形状识别：将手绘墨迹转换为规则形状（直线、圆形、椭圆、三角形、矩形等）
3. 直线自动拉直：将近似直线的墨迹自动拉成直线
4. 端点吸附：将直线端点吸附到其他直线的端点
5. 矩形参考线系统：通过多条直线构成矩形
6. 高级贝塞尔曲线平滑：对墨迹进行平滑处理
7. 异步墨水处理：提高性能的异步墨水处理机制

## Constructors

### <a id="Ink_Canvas_MainWindow__ctor"></a> MainWindow\(\)

初始化主窗口实例，构建并配置界面元素、初始页面和应用程序运行时状态。

```csharp
public MainWindow()
```

#### Remarks

执行 UI 可见性与布局初始设置、浮动栏位置计算与动画、日志文件清理与调试标记、定时器与撤销/重做绑定、输入事件与墨迹管理器初始化、
首页画布创建、左右侧面板的触摸滑动与点击分页交互绑定、无焦点与置顶模式应用、滑块触摸支持以及延迟的首-run OOBE 检查等启动工作。

## Fields

### <a id="Ink_Canvas_MainWindow_BoundsWidth"></a> BoundsWidth

```csharp
public int BoundsWidth
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_MainWindow_CloseIsFromButton"></a> CloseIsFromButton

```csharp
public static bool CloseIsFromButton
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_CompactFloatingBarScaleFactor"></a> CompactFloatingBarScaleFactor

紧凑模式浮动栏整体缩放倍率（相对用户设置的倍率再缩小至此比例，保持纵横比）。

```csharp
public const double CompactFloatingBarScaleFactor = 0.85
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_MainWindow_IsShowingRestoreHiddenSlidesWindow"></a> IsShowingRestoreHiddenSlidesWindow

指示是否正在显示恢复隐藏幻灯片的窗口

```csharp
public static bool IsShowingRestoreHiddenSlidesWindow
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow__floatingWindowInterceptorManager"></a> \_floatingWindowInterceptorManager

```csharp
public FloatingWindowInterceptorManager _floatingWindowInterceptorManager
```

#### Field Value

 [FloatingWindowInterceptorManager](Ink\_Canvas.FloatingWindowInterceptorManager.md)

### <a id="Ink_Canvas_MainWindow__lastAppliedProfileName"></a> \_lastAppliedProfileName

```csharp
public string _lastAppliedProfileName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_MainWindow_dpiChangedDelayAction"></a> dpiChangedDelayAction

响应显示器/分辨率配置变化：在检测启用时显示分辨率变更通知，并在后台检查悬浮工具栏是否位于屏幕之外，若是则在延迟后尝试将其通过动画恢复到可见区域（在演示模式下使用不同的动画偏移）。

```csharp
public DelayAction dpiChangedDelayAction
```

#### Field Value

 [DelayAction](Ink\_Canvas.Helpers.DelayAction.md)

### <a id="Ink_Canvas_MainWindow_eraserWidth"></a> eraserWidth

```csharp
public double eraserWidth
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_MainWindow_isEraserCircleShape"></a> isEraserCircleShape

```csharp
public bool isEraserCircleShape
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_isFloatingBarFolded"></a> isFloatingBarFolded

浮动栏是否折叠的标志。

```csharp
public bool isFloatingBarFolded
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_isFullScreenApplied"></a> isFullScreenApplied

```csharp
public bool isFullScreenApplied
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_isUsingGeometryEraser"></a> isUsingGeometryEraser

```csharp
public bool isUsingGeometryEraser
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_isUsingStrokesEraser"></a> isUsingStrokesEraser

```csharp
public bool isUsingStrokesEraser
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_pptApplication"></a> pptApplication

PowerPoint应用程序实例，用于与PowerPoint进行交互。

```csharp
public static Office.Interop.PowerPoint.Application pptApplication
```

#### Field Value

 Office.Interop.PowerPoint.Application

### <a id="Ink_Canvas_MainWindow_presentation"></a> presentation

当前活动的PowerPoint演示文稿。

```csharp
public static Presentation presentation
```

#### Field Value

 Presentation

### <a id="Ink_Canvas_MainWindow_slide"></a> slide

当前活动的幻灯片。

```csharp
public static Slide slide
```

#### Field Value

 Slide

### <a id="Ink_Canvas_MainWindow_slides"></a> slides

当前演示文稿的幻灯片集合。

```csharp
public static Slides slides
```

#### Field Value

 Slides

### <a id="Ink_Canvas_MainWindow_slidescount"></a> slidescount

当前演示文稿的幻灯片总数。

```csharp
public static int slidescount
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="Ink_Canvas_MainWindow_BoothResolutionHeight"></a> BoothResolutionHeight

```csharp
public int BoothResolutionHeight { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_MainWindow_BoothResolutionWidth"></a> BoothResolutionWidth

```csharp
public int BoothResolutionWidth { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_MainWindow_CanAddNewPage"></a> CanAddNewPage

```csharp
public bool CanAddNewPage { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_CanDeletePage"></a> CanDeletePage

```csharp
public bool CanDeletePage { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_CanRedo"></a> CanRedo

```csharp
public bool CanRedo { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_CanSwitchToNextPage"></a> CanSwitchToNextPage

```csharp
public bool CanSwitchToNextPage { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_CanSwitchToPreviousPage"></a> CanSwitchToPreviousPage

```csharp
public bool CanSwitchToPreviousPage { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_CanUndo"></a> CanUndo

```csharp
public bool CanUndo { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_CurrentPageInfo"></a> CurrentPageInfo

```csharp
public string CurrentPageInfo { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_MainWindow_InkSmoothingManagerInstance"></a> InkSmoothingManagerInstance

墨迹平滑管理器实例（供性能页面读取统计）

```csharp
public InkSmoothingManager InkSmoothingManagerInstance { get; }
```

#### Property Value

 [InkSmoothingManager](Ink\_Canvas.Helpers.InkSmoothingManager.md)

### <a id="Ink_Canvas_MainWindow_PPTManager"></a> PPTManager

获取PPT管理器实例

```csharp
public IPPTLinkManager PPTManager { get; }
```

#### Property Value

 [IPPTLinkManager](Ink\_Canvas.Helpers.IPPTLinkManager.md)

#### Remarks

提供对内部PPT链接管理器的公共访问，用于外部代码与PowerPoint进行交互。

### <a id="Ink_Canvas_MainWindow_PPTUIManager"></a> PPTUIManager

```csharp
public PPTUIManager PPTUIManager { get; }
```

#### Property Value

 [PPTUIManager](Ink\_Canvas.Helpers.PPTUIManager.md)

### <a id="Ink_Canvas_MainWindow_QuickPanelFoldedMargin"></a> QuickPanelFoldedMargin

```csharp
public double QuickPanelFoldedMargin { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_MainWindow_QuickPanelUnfoldedMargin"></a> QuickPanelUnfoldedMargin

```csharp
public double QuickPanelUnfoldedMargin { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_MainWindow_Settings"></a> Settings

```csharp
public static Settings Settings { get; set; }
```

#### Property Value

 [Settings](Ink\_Canvas.Settings.md)

### <a id="Ink_Canvas_MainWindow_WindowOverviewModel"></a> WindowOverviewModel

```csharp
public WindowOverviewModel WindowOverviewModel { get; }
```

#### Property Value

 [WindowOverviewModel](Ink\_Canvas.Helpers.WindowOverviewModel.md)

### <a id="Ink_Canvas_MainWindow_settingsFileName"></a> settingsFileName

```csharp
public static string settingsFileName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_MainWindow_AddWhiteboardPage"></a> AddWhiteboardPage\(\)

```csharp
public void AddWhiteboardPage()
```

### <a id="Ink_Canvas_MainWindow_ApplyAdvancedEraserShape"></a> ApplyAdvancedEraserShape\(\)

应用橡皮擦形状到InkCanvas

```csharp
public void ApplyAdvancedEraserShape()
```

### <a id="Ink_Canvas_MainWindow_ApplyAlwaysOnTop"></a> ApplyAlwaysOnTop\(\)

```csharp
public void ApplyAlwaysOnTop()
```

### <a id="Ink_Canvas_MainWindow_ApplyMultiScreenSettings"></a> ApplyMultiScreenSettings\(\)

应用多屏设置到全局热键管理器。

```csharp
public void ApplyMultiScreenSettings()
```

### <a id="Ink_Canvas_MainWindow_ApplyNoFocusMode"></a> ApplyNoFocusMode\(\)

```csharp
public void ApplyNoFocusMode()
```

### <a id="Ink_Canvas_MainWindow_ApplyQuickPanelLayoutSettings"></a> ApplyQuickPanelLayoutSettings\(\)

```csharp
public void ApplyQuickPanelLayoutSettings()
```

### <a id="Ink_Canvas_MainWindow_ApplySidePanelSettings"></a> ApplySidePanelSettings\(\)

```csharp
public void ApplySidePanelSettings()
```

### <a id="Ink_Canvas_MainWindow_ApplyUIAccessTopMost"></a> ApplyUIAccessTopMost\(\)

应用UIA置顶功能

```csharp
public void ApplyUIAccessTopMost()
```

### <a id="Ink_Canvas_MainWindow_AutoUpdate"></a> AutoUpdate\(\)

```csharp
public void AutoUpdate()
```

### <a id="Ink_Canvas_MainWindow_BtnDrawLine_Click_System_Object_MouseButtonEventArgs_"></a> BtnDrawLine\_Click\(object, MouseButtonEventArgs\)

处理绘制直线按钮点击事件

```csharp
public void BtnDrawLine_Click(object sender, MouseButtonEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

事件发送者

`e` MouseButtonEventArgs

鼠标按钮事件参数

#### Remarks

当绘制直线按钮被点击时：
1. 检查是否在多点触控模式下
2. 如果是长按操作，设置绘制模式为直线
3. 重置鼠标按下发送者
4. 如果是长按选中状态，处理相关逻辑
5. 提示切换到画笔模式

### <a id="Ink_Canvas_MainWindow_BtnResetToSuggestion_Click_System_Object_RoutedEventArgs_"></a> BtnResetToSuggestion\_Click\(object, RoutedEventArgs\)

将应用设置重置为推荐的默认值，并保存与重新加载配置以应用更改。

```csharp
public void BtnResetToSuggestion_Click(object sender, RoutedEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

`e` RoutedEventArgs

#### Remarks

如果配置重置受安全密码保护，则会提示用户输入密码；在验证失败时中止重置。方法会暂时停止加载标志以避免触发事件、将“开机启动”切换置为关闭，并在完成后显示一条通知。任何内部异常将被吞噬以保证流程不中断。

### <a id="Ink_Canvas_MainWindow_BtnRestart_Click_System_Object_RoutedEventArgs_"></a> BtnRestart\_Click\(object, RoutedEventArgs\)

重启按钮点击事件处理

```csharp
public void BtnRestart_Click(object sender, RoutedEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

发送者

`e` RoutedEventArgs

路由事件参数

### <a id="Ink_Canvas_MainWindow_ChangeBackgroundColor"></a> ChangeBackgroundColor\(\)

```csharp
public void ChangeBackgroundColor()
```

### <a id="Ink_Canvas_MainWindow_CheckClipboardImageAndShowPasteNotificationWhenEnteringBoard"></a> CheckClipboardImageAndShowPasteNotificationWhenEnteringBoard\(\)

在进入白板时检查系统剪贴板是否包含图片；如果存在图片且与上次提示间隔超过预设节流时间，则显示粘贴提示。

```csharp
public void CheckClipboardImageAndShowPasteNotificationWhenEnteringBoard()
```

### <a id="Ink_Canvas_MainWindow_CheckEraserTypeTab"></a> CheckEraserTypeTab\(\)

检查并更新橡皮擦类型标签的状态

```csharp
public void CheckEraserTypeTab()
```

### <a id="Ink_Canvas_MainWindow_ClearCustomCursorCache"></a> ClearCustomCursorCache\(\)

```csharp
public static void ClearCustomCursorCache()
```

### <a id="Ink_Canvas_MainWindow_CloseAllPopups"></a> CloseAllPopups\(\)

关闭所有已注册的 Popup 弹窗

```csharp
public void CloseAllPopups()
```

### <a id="Ink_Canvas_MainWindow_DeleteWhiteboardPage"></a> DeleteWhiteboardPage\(\)

```csharp
public void DeleteWhiteboardPage()
```

### <a id="Ink_Canvas_MainWindow_DisableEraserOverlay"></a> DisableEraserOverlay\(\)

禁用橡皮擦覆盖层

```csharp
public void DisableEraserOverlay()
```

### <a id="Ink_Canvas_MainWindow_EnableEraserOverlay"></a> EnableEraserOverlay\(\)

启用橡皮擦覆盖层

```csharp
public void EnableEraserOverlay()
```

### <a id="Ink_Canvas_MainWindow_ExitApplication_System_Object_RoutedEventArgs_"></a> ExitApplication\(object, RoutedEventArgs\)

退出按钮点击事件处理

```csharp
public void ExitApplication(object sender, RoutedEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

发送者

`e` RoutedEventArgs

路由事件参数

### <a id="Ink_Canvas_MainWindow_ExitPPTPresentation"></a> ExitPPTPresentation\(\)

```csharp
public Task ExitPPTPresentation()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_MainWindow_ExitWhiteboard"></a> ExitWhiteboard\(\)

```csharp
public void ExitWhiteboard()
```

### <a id="Ink_Canvas_MainWindow_FindView_System_String_"></a> FindView\(string\)

```csharp
public FrameworkElement FindView(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 FrameworkElement

### <a id="Ink_Canvas_MainWindow_FixPointsDirection_System_Windows_Point_System_Windows_Point_"></a> FixPointsDirection\(Point, Point\)

```csharp
public Point[] FixPointsDirection(Point p1, Point p2)
```

#### Parameters

`p1` Point

`p2` Point

#### Returns

 Point\[\]

### <a id="Ink_Canvas_MainWindow_FoldFloatingBar_System_Object_System_Boolean_"></a> FoldFloatingBar\(object, bool\)

折叠浮动栏，将其收纳到侧边栏。

```csharp
public Task FoldFloatingBar(object sender, bool isAutoFoldCommand = false)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

事件发送者。

`isAutoFoldCommand` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否为自动折叠命令。

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

表示异步操作的任务。

#### Remarks

操作包括：
1. 检查是否应该拒绝操作（如点击了折叠图标但上次鼠标按下的对象不是折叠图标）
2. 设置折叠/展开标志
3. 检查浮动栏是否已经折叠或正在改变隐藏模式，如果是则直接返回
4. 处理墨迹重放相关的UI元素
5. 设置浮动栏状态标志，关闭白板模式（如果当前在白板模式）
6. 如果是用户手动折叠且画布上有较多墨迹，显示通知
7. 清空画布墨迹
8. 隐藏PPT导航面板和浮动栏拖动网格
9. 执行浮动栏和侧边栏的动画
10. 如果开启了彻底隐藏，则隐藏主窗口

### <a id="Ink_Canvas_MainWindow_FoldFloatingBar_MouseUp_System_Object_MouseButtonEventArgs_"></a> FoldFloatingBar\_MouseUp\(object, MouseButtonEventArgs\)

处理折叠浮动栏的鼠标点击事件。

```csharp
public void FoldFloatingBar_MouseUp(object sender, MouseButtonEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

事件发送者。

`e` MouseButtonEventArgs

路由事件参数。

### <a id="Ink_Canvas_MainWindow_GenerateFakePressureRectangle_StylusPointCollection_"></a> GenerateFakePressureRectangle\(StylusPointCollection\)

```csharp
public StylusPointCollection GenerateFakePressureRectangle(StylusPointCollection points)
```

#### Parameters

`points` StylusPointCollection

#### Returns

 StylusPointCollection

### <a id="Ink_Canvas_MainWindow_GenerateFakePressureTriangle_StylusPointCollection_"></a> GenerateFakePressureTriangle\(StylusPointCollection\)

```csharp
public StylusPointCollection GenerateFakePressureTriangle(StylusPointCollection points)
```

#### Parameters

`points` StylusPointCollection

#### Returns

 StylusPointCollection

### <a id="Ink_Canvas_MainWindow_GetCenterPoint_System_Windows_Point_System_Windows_Point_"></a> GetCenterPoint\(Point, Point\)

```csharp
public Point GetCenterPoint(Point point1, Point point2)
```

#### Parameters

`point1` Point

`point2` Point

#### Returns

 Point

### <a id="Ink_Canvas_MainWindow_GetCenterPoint_StylusPoint_StylusPoint_"></a> GetCenterPoint\(StylusPoint, StylusPoint\)

```csharp
public StylusPoint GetCenterPoint(StylusPoint point1, StylusPoint point2)
```

#### Parameters

`point1` StylusPoint

`point2` StylusPoint

#### Returns

 StylusPoint

### <a id="Ink_Canvas_MainWindow_GetCorrectIcon_System_String_System_Boolean_"></a> GetCorrectIcon\(string, bool\)

```csharp
public string GetCorrectIcon(string iconType, bool isSolid = false)
```

#### Parameters

`iconType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isSolid` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_MainWindow_GetCurrentSelectedMode"></a> GetCurrentSelectedMode\(\)

获取当前选中的模式

```csharp
public string GetCurrentSelectedMode()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

当前选中的模式名称

### <a id="Ink_Canvas_MainWindow_GetDistance_System_Windows_Point_System_Windows_Point_"></a> GetDistance\(Point, Point\)

计算两点之间的距离

```csharp
public double GetDistance(Point point1, Point point2)
```

#### Parameters

`point1` Point

第一个点

`point2` Point

第二个点

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

返回两点之间的距离

#### Remarks

使用欧几里得距离公式计算两点之间的距离：
distance = √[(x2 - x1)² + (y2 - y1)²]

### <a id="Ink_Canvas_MainWindow_GetEraserStatusInfo"></a> GetEraserStatusInfo\(\)

获取橡皮擦状态信息

```csharp
public string GetEraserStatusInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_MainWindow_GetPointSpeed_System_Windows_Point_System_Windows_Point_System_Windows_Point_"></a> GetPointSpeed\(Point, Point, Point\)

计算点的速度

```csharp
public double GetPointSpeed(Point point1, Point point2, Point point3)
```

#### Parameters

`point1` Point

第一个点

`point2` Point

第二个点（当前点）

`point3` Point

第三个点

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

返回点的速度

#### Remarks

计算点速度的流程：
1. 计算第一个点到第二个点的距离
2. 计算第三个点到第二个点的距离
3. 将两个距离相加
4. 除以20，得到速度值

### <a id="Ink_Canvas_MainWindow_GetPopupManager"></a> GetPopupManager\(\)

获取 PopupManagerHelper 实例，供插件等外部组件使用

```csharp
public PopupManagerHelper GetPopupManager()
```

#### Returns

 [PopupManagerHelper](Ink\_Canvas.Helpers.PopupManagerHelper.md)

### <a id="Ink_Canvas_MainWindow_HandleUriCommand_System_String_"></a> HandleUriCommand\(string\)

```csharp
public void HandleUriCommand(string uri)
```

#### Parameters

`uri` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_MainWindow_InitializePPTManagers"></a> InitializePPTManagers\(\)

初始化并配置用于 PowerPoint 集成的管理器与相关状态。

```csharp
public void InitializePPTManagers()
```

#### Remarks

清理并释放现有的 PPT 管理器与 COM/Interop 状态，创建并配置新的 PPT 管理器（ROT 或 COM 实现，取决于设置）、单一的 PPT 墨迹管理器及其自动保存行为，以及 PPT UI 管理器与其显示/按钮位置选项。方法内部会订阅必要的 PPT 事件并记录初始化过程中的错误或警告。同时初始化长按页翻页定时器以支持长按翻页功能。

### <a id="Ink_Canvas_MainWindow_InsertImage"></a> InsertImage\(\)

```csharp
public void InsertImage()
```

### <a id="Ink_Canvas_MainWindow_MoveWindow_System_IntPtr_System_Int32_System_Int32_System_Int32_System_Int32_System_Boolean_"></a> MoveWindow\(nint, int, int, int, int, bool\)

```csharp
public static extern bool MoveWindow(nint hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint)
```

#### Parameters

`hWnd` [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

`X` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`Y` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nWidth` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nHeight` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`bRepaint` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_OnClosing_System_ComponentModel_CancelEventArgs_"></a> OnClosing\(CancelEventArgs\)

```csharp
protected override void OnClosing(CancelEventArgs e)
```

#### Parameters

`e` [CancelEventArgs](https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs)

### <a id="Ink_Canvas_MainWindow_OnMouseMove_MouseEventArgs_"></a> OnMouseMove\(MouseEventArgs\)

```csharp
protected override void OnMouseMove(MouseEventArgs e)
```

#### Parameters

`e` MouseEventArgs

### <a id="Ink_Canvas_MainWindow_OpenSingleStrokeFile_System_String_"></a> OpenSingleStrokeFile\(string\)

打开单个墨迹文件

```csharp
public void OpenSingleStrokeFile(string filePath)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

墨迹文件的路径

#### Remarks

该方法会：
1. 打开墨迹文件并加载墨迹
2. 检查文件是否包含墨迹
3. 如果包含墨迹，清空当前墨迹并添加新墨迹
4. 恢复元素信息
5. 如果文件流中没有墨迹，尝试从内存流中加载

### <a id="Ink_Canvas_MainWindow_OpenTools"></a> OpenTools\(\)

```csharp
public void OpenTools()
```

### <a id="Ink_Canvas_MainWindow_OpenXMLStrokeFile_System_String_"></a> OpenXMLStrokeFile\(string\)

打开XML格式的墨迹文件

```csharp
public void OpenXMLStrokeFile(string filePath)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_MainWindow_PauseTopmostMaintenance"></a> PauseTopmostMaintenance\(\)

```csharp
public void PauseTopmostMaintenance()
```

### <a id="Ink_Canvas_MainWindow_PureViewboxFloatingBarMarginAnimationInDesktopMode"></a> PureViewboxFloatingBarMarginAnimationInDesktopMode\(\)

桌面模式下的浮动工具栏边距动画处理

```csharp
public void PureViewboxFloatingBarMarginAnimationInDesktopMode()
```

### <a id="Ink_Canvas_MainWindow_PureViewboxFloatingBarMarginAnimationInPPTMode_System_Boolean_"></a> PureViewboxFloatingBarMarginAnimationInPPTMode\(bool\)

PPT模式下的浮动工具栏边距动画处理

```csharp
public void PureViewboxFloatingBarMarginAnimationInPPTMode(bool isRetry = false)
```

#### Parameters

`isRetry` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否为重试操作

### <a id="Ink_Canvas_MainWindow_Redo"></a> Redo\(\)

```csharp
public void Redo()
```

### <a id="Ink_Canvas_MainWindow_RegisterView_System_String_FrameworkElement_"></a> RegisterView\(string, FrameworkElement\)

```csharp
public void RegisterView(string id, FrameworkElement view)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`view` FrameworkElement

### <a id="Ink_Canvas_MainWindow_ReloadSettingsFromFile"></a> ReloadSettingsFromFile\(\)

从配置文件加载用户设置并将其应用到主窗口和相关控件的状态（包括启动、外观、画布、手势、PPT、自动化等各项配置）。

```csharp
public void ReloadSettingsFromFile()
```

### <a id="Ink_Canvas_MainWindow_ResetPPTStateVariables"></a> ResetPPTStateVariables\(\)

重置PPT相关的状态变量，当PPT自动收纳设置变更时调用

```csharp
public void ResetPPTStateVariables()
```

#### Remarks

将与 PowerPoint 播放和状态追踪相关的内部字段重置为初始默认值。
具体重置的字段包括：
1. 播放结束重入保护标志（isEnteredSlideShowEndEvent）
2. 演示文稿黑边指示（isPresentationHaveBlackSpace）
3. 上次播放页码（_lastPlaybackPage）
4. 导航标志（_shouldNavigateToLastPage）
5. 当前放映位置（_currentSlideShowPosition）
6. 滑动切换处理状态（_isProcessingSlideSwitch）

该方法在执行过程中会：
- 使用线程安全的方式重置滑动切换处理状态
- 成功时记录追踪日志
- 发生异常时记录错误日志并继续执行

### <a id="Ink_Canvas_MainWindow_ResetPPTTimeCapsuleOffset"></a> ResetPPTTimeCapsuleOffset\(\)

重置PPT时间胶囊拖拽偏移量

```csharp
public void ResetPPTTimeCapsuleOffset()
```

### <a id="Ink_Canvas_MainWindow_ResetUpdateCheckRetry"></a> ResetUpdateCheckRetry\(\)

重置更新检查重试状态方法

```csharp
public void ResetUpdateCheckRetry()
```

#### Remarks

重置更新检查的重试状态，包括以下步骤：
1. 停止重试定时器
2. 重置重试计数为0
3. 记录日志
4. 处理异常情况

### <a id="Ink_Canvas_MainWindow_ResumeTopmostMaintenance"></a> ResumeTopmostMaintenance\(\)

```csharp
public void ResumeTopmostMaintenance()
```

### <a id="Ink_Canvas_MainWindow_SaveInkCanvasStrokes_System_Boolean_System_Boolean_"></a> SaveInkCanvasStrokes\(bool, bool\)

保存墨迹画布的墨迹

```csharp
public void SaveInkCanvasStrokes(bool newNotice = true, bool saveByUser = false)
```

#### Parameters

`newNotice` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否显示新的通知

`saveByUser` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否是用户手动保存

#### Remarks

该方法会：
1. 根据保存类型和模式确定保存路径
2. 创建保存目录
3. 根据当前模式生成保存文件名
4. 根据设置选择保存模式：
   - 全页面保存模式：保存为图像或压缩包
   - XML保存模式：保存为XML文件或压缩包
   - 常规保存模式：保存为二进制格式或XML格式
5. 异步上传保存的文件到Dlass
6. 保存元素信息

### <a id="Ink_Canvas_MainWindow_SavePPTTimeCapsuleOffset_System_Double_System_Double_"></a> SavePPTTimeCapsuleOffset\(double, double\)

保存PPT时间胶囊拖拽偏移量

```csharp
public void SavePPTTimeCapsuleOffset(double offsetX, double offsetY)
```

#### Parameters

`offsetX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`offsetY` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_MainWindow_SaveSettingsToFile"></a> SaveSettingsToFile\(\)

将当前内存中的 Settings 序列化为格式化的 JSON 并写入应用程序配置文件（位于 App.RootPath 下的 Configs 目录或根设置文件）。

```csharp
public static void SaveSettingsToFile()
```

#### Remarks

在写入前会确保目标目录/文件具有写入权限（使用 ProcessProtectionManager）。任何写入失败或异常都会被吞掉，调用方不会收到异常抛出。

### <a id="Ink_Canvas_MainWindow_ScrollViewToVerticalTop_FrameworkElement_ScrollViewer_"></a> ScrollViewToVerticalTop\(FrameworkElement, ScrollViewer\)

将指定元素在给定 ScrollViewer 中滚动，使该元素与可视区域的顶部对齐。

```csharp
public static void ScrollViewToVerticalTop(FrameworkElement element, ScrollViewer scrollViewer)
```

#### Parameters

`element` FrameworkElement

要对齐到顶部的元素。

`scrollViewer` ScrollViewer

包含该元素的目标 ScrollViewer。

### <a id="Ink_Canvas_MainWindow_SelectEraser"></a> SelectEraser\(\)

```csharp
public void SelectEraser()
```

### <a id="Ink_Canvas_MainWindow_SelectPen"></a> SelectPen\(\)

```csharp
public void SelectPen()
```

### <a id="Ink_Canvas_MainWindow_SelectRoaming"></a> SelectRoaming\(\)

```csharp
public void SelectRoaming()
```

### <a id="Ink_Canvas_MainWindow_SelectShape"></a> SelectShape\(\)

```csharp
public void SelectShape()
```

### <a id="Ink_Canvas_MainWindow_SelectStrokeEraser"></a> SelectStrokeEraser\(\)

```csharp
public void SelectStrokeEraser()
```

### <a id="Ink_Canvas_MainWindow_SelectTool"></a> SelectTool\(\)

```csharp
public void SelectTool()
```

### <a id="Ink_Canvas_MainWindow_SetBoothPopupPlacementTarget_System_Windows_FrameworkElement_"></a> SetBoothPopupPlacementTarget\(FrameworkElement\)

设置视频展台弹窗的 PlacementTarget。
CustomPopupPlacementCallback 中的 targetSize 来自 PlacementTarget，
若不设置会退化为父级 Grid（充满屏幕）尺寸，导致菜单定位到屏幕顶部中心上方（大部分在屏幕外）。
由视频展台按钮（BoardVideoBoothToolItem / VideoBoothToolItem）在 OnClick 时调用，
把按钮自身作为 PlacementTarget，让菜单出现在按钮上方。

```csharp
public void SetBoothPopupPlacementTarget(FrameworkElement target)
```

#### Parameters

`target` FrameworkElement

### <a id="Ink_Canvas_MainWindow_SetCursorBasedOnEditingMode_InkCanvas_"></a> SetCursorBasedOnEditingMode\(InkCanvas\)

```csharp
public void SetCursorBasedOnEditingMode(InkCanvas canvas)
```

#### Parameters

`canvas` InkCanvas

### <a id="Ink_Canvas_MainWindow_SetInterceptRule_Ink_Canvas_Helpers_FloatingWindowInterceptor_InterceptType_System_Boolean_"></a> SetInterceptRule\(InterceptType, bool\)

```csharp
public void SetInterceptRule(FloatingWindowInterceptor.InterceptType type, bool enabled)
```

#### Parameters

`type` [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptType](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptType.md)

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_SetSettingsToRecommendation"></a> SetSettingsToRecommendation\(\)

将应用设置重置为推荐的默认配置。

```csharp
public static void SetSettingsToRecommendation()
```

#### Remarks

该方法会重新创建全局 Settings 实例并应用推荐值，覆盖大部分子模块配置（如外观、画布、自动化、PPT、手势、高级选项等）。
在重置过程中会保留并恢复当前 Settings.Automation 中的 AutoDelSavedFiles 与 AutoDelSavedFilesDaysThreshold 两项值以避免意外删除策略变化。

### <a id="Ink_Canvas_MainWindow_SetTopmostBasedOnSettings_System_Boolean_"></a> SetTopmostBasedOnSettings\(bool\)

根据窗口置顶设置和当前模式设置窗口的Topmost属性

```csharp
public void SetTopmostBasedOnSettings(bool shouldBeTopmost)
```

#### Parameters

`shouldBeTopmost` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

当前模式是否需要窗口置顶

### <a id="Ink_Canvas_MainWindow_SetWindowMode"></a> SetWindowMode\(\)

根据 Settings.Advanced.WindowMode 切换窗口显示模式。

```csharp
public void SetWindowMode()
```

#### Remarks

如果该设置为 true，将窗口置为普通状态并调整到主屏幕的左上角(0,0)及主屏幕分辨率的宽高，使窗口覆盖整个主屏幕；
否则将窗口设为最大化状态。

### <a id="Ink_Canvas_MainWindow_ShouldHandleWindowChromeHitTest_Point_"></a> ShouldHandleWindowChromeHitTest\(Point\)

```csharp
protected override bool ShouldHandleWindowChromeHitTest(Point windowPoint)
```

#### Parameters

`windowPoint` Point

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_ShowNewMessage_System_String_System_Boolean_"></a> ShowNewMessage\(string, bool\)

```csharp
public static void ShowNewMessage(string notice, bool isShowImmediately = true)
```

#### Parameters

`notice` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isShowImmediately` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_ShowNotification_System_String_System_Boolean_"></a> ShowNotification\(string, bool\)

```csharp
public void ShowNotification(string notice, bool isShowImmediately = true)
```

#### Parameters

`notice` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isShowImmediately` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_ShowPPTModePromptNotification"></a> ShowPPTModePromptNotification\(\)

```csharp
public void ShowPPTModePromptNotification()
```

### <a id="Ink_Canvas_MainWindow_ShowQuickDrawFloatingButton"></a> ShowQuickDrawFloatingButton\(\)

显示快抽悬浮按钮

```csharp
public void ShowQuickDrawFloatingButton()
```

### <a id="Ink_Canvas_MainWindow_StartEraserAutoSwitchBackTimer"></a> StartEraserAutoSwitchBackTimer\(\)

启动橡皮擦自动切换回批注模式计时器

```csharp
public void StartEraserAutoSwitchBackTimer()
```

### <a id="Ink_Canvas_MainWindow_StartOrStoptimerCheckAutoFold"></a> StartOrStoptimerCheckAutoFold\(\)

根据组合框的当前选择更新双曲线渐近线选项（Settings.Canvas.HyperbolaAsymptoteOption），并将更改保存到设置文件。

```csharp
public void StartOrStoptimerCheckAutoFold()
```

### <a id="Ink_Canvas_MainWindow_StartPPTMonitoring"></a> StartPPTMonitoring\(\)

启动PPT监控：当PowerPoint支持功能启用时，启动PPT管理器的监控功能。

```csharp
public void StartPPTMonitoring()
```

#### Remarks

只有当Settings.PowerPointSettings.PowerPointSupport为true时才会启动监控，并记录启动事件日志。

### <a id="Ink_Canvas_MainWindow_StartPowerPointProcessMonitoring"></a> StartPowerPointProcessMonitoring\(\)

启动PowerPoint应用程序守护

```csharp
public void StartPowerPointProcessMonitoring()
```

#### Remarks

启动对本地 PowerPoint 应用实例的守护监控并在需要时创建应用程序实例。
仅在 PowerPoint 增强功能已启用且未使用 ROT 链接时生效；方法将创建 PowerPoint 应用（若不存在）并启动用于定期检查应用状态的定时器。

### <a id="Ink_Canvas_MainWindow_StartSilentUpdateTimer"></a> StartSilentUpdateTimer\(\)

```csharp
public void StartSilentUpdateTimer()
```

### <a id="Ink_Canvas_MainWindow_StopEraserAutoSwitchBackTimer"></a> StopEraserAutoSwitchBackTimer\(\)

停止橡皮擦自动切换回批注模式计时器

```csharp
public void StopEraserAutoSwitchBackTimer()
```

### <a id="Ink_Canvas_MainWindow_StopPPTMonitoring"></a> StopPPTMonitoring\(\)

停止 PowerPoint 相关的监控：停止并清除用于延迟退出 PPT 模式的定时器，并停止 PPT 管理器的监控，同时记录事件日志。

```csharp
public void StopPPTMonitoring()
```

### <a id="Ink_Canvas_MainWindow_StopPowerPointProcessMonitoring_System_Boolean_"></a> StopPowerPointProcessMonitoring\(bool\)

停止PowerPoint应用程序守护

```csharp
public void StopPowerPointProcessMonitoring(bool isShutdown = false)
```

#### Parameters

`isShutdown` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_SwitchToBoardMode"></a> SwitchToBoardMode\(\)

切换到白板模式（用于--board参数和IPC命令）
调用浮动栏上的白板功能

```csharp
public void SwitchToBoardMode()
```

### <a id="Ink_Canvas_MainWindow_SwitchToNextPage"></a> SwitchToNextPage\(\)

```csharp
public void SwitchToNextPage()
```

### <a id="Ink_Canvas_MainWindow_SwitchToPreviousPage"></a> SwitchToPreviousPage\(\)

```csharp
public void SwitchToPreviousPage()
```

### <a id="Ink_Canvas_MainWindow_ToggleEraserMode"></a> ToggleEraserMode\(\)

切换橡皮擦模式

```csharp
public void ToggleEraserMode()
```

### <a id="Ink_Canvas_MainWindow_ToggleEraserShape"></a> ToggleEraserShape\(\)

切换橡皮擦形状

```csharp
public void ToggleEraserShape()
```

### <a id="Ink_Canvas_MainWindow_ToggleFingerDragMode_System_Object_RoutedEventArgs_"></a> ToggleFingerDragMode\(object, RoutedEventArgs\)

手指拖动模式切换按钮点击事件处理

```csharp
public void ToggleFingerDragMode(object sender, RoutedEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

发送者

`e` RoutedEventArgs

路由事件参数

### <a id="Ink_Canvas_MainWindow_ToggleGesture"></a> ToggleGesture\(\)

```csharp
public void ToggleGesture()
```

### <a id="Ink_Canvas_MainWindow_ToggleInkFreeze"></a> ToggleInkFreeze\(\)

```csharp
public void ToggleInkFreeze()
```

### <a id="Ink_Canvas_MainWindow_ToggleVideoPresenterSidebarPublic"></a> ToggleVideoPresenterSidebarPublic\(\)

```csharp
public void ToggleVideoPresenterSidebarPublic()
```

### <a id="Ink_Canvas_MainWindow_UnFoldFloatingBar_System_Object_"></a> UnFoldFloatingBar\(object\)

展开浮动栏，将其从侧边栏恢复到正常状态。

```csharp
public Task UnFoldFloatingBar(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

事件发送者。

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

表示异步操作的任务。

#### Remarks

操作包括：
1. 如果之前彻底隐藏了主窗口，先恢复显示
2. 隐藏左右侧快捷面板
3. 设置展开/折叠标志
4. 检查浮动栏是否正在改变隐藏模式，如果是则直接返回
5. 设置浮动栏状态标志，标记为未折叠
6. 根据设置决定是否自动切换至批注模式
7. 根据PPT放映模式和设置显示或隐藏翻页按钮
8. 在屏幕模式下显示浮动栏并执行动画
9. 执行侧边栏动画
10. 等待UI完全更新后，重新设置当前选中模式的按钮高亮状态

### <a id="Ink_Canvas_MainWindow_UnFoldFloatingBar_MouseUp_System_Object_MouseButtonEventArgs_"></a> UnFoldFloatingBar\_MouseUp\(object, MouseButtonEventArgs\)

处理展开浮动栏的鼠标点击事件。

```csharp
public void UnFoldFloatingBar_MouseUp(object sender, MouseButtonEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

事件发送者。

`e` MouseButtonEventArgs

路由事件参数。

### <a id="Ink_Canvas_MainWindow_Undo"></a> Undo\(\)

```csharp
public void Undo()
```

### <a id="Ink_Canvas_MainWindow_UpdateAutoKillProcessTimer_System_Boolean_"></a> UpdateAutoKillProcessTimer\(bool\)

```csharp
public void UpdateAutoKillProcessTimer(bool shouldRun)
```

#### Parameters

`shouldRun` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_UpdateAutoSaveStrokesTimer"></a> UpdateAutoSaveStrokesTimer\(\)

更新定时保存墨迹定时器状态

```csharp
public void UpdateAutoSaveStrokesTimer()
```

#### Remarks

根据Settings.Automation.IsEnableAutoSaveStrokes设置决定是否启用定时器
如果启用，则根据Settings.Automation.AutoSaveStrokesIntervalMinutes设置定时器间隔
最小间隔为1分钟

### <a id="Ink_Canvas_MainWindow_UpdateCustomIconsInComboBox"></a> UpdateCustomIconsInComboBox\(\)

更新组合框中的自定义图标选项

```csharp
public void UpdateCustomIconsInComboBox()
```

#### Remarks

更新自定义图标选项时：
1. 保留前12个内置图标选项
2. 移除所有现有的自定义图标选项
3. 添加新的自定义图标选项
4. 为自定义图标选项设置字体

### <a id="Ink_Canvas_MainWindow_UpdateEraserSize"></a> UpdateEraserSize\(\)

更新橡皮擦尺寸

```csharp
public void UpdateEraserSize()
```

### <a id="Ink_Canvas_MainWindow_UpdateFloatingBarIcon"></a> UpdateFloatingBarIcon\(\)

根据设置更新浮动栏图标

```csharp
public void UpdateFloatingBarIcon()
```

#### Remarks

根据设置的浮动栏图标索引更新图标：
1. 为不同的图标索引设置不同的图标源
2. 为不同的图标设置不同的边距
3. 支持自定义图标
4. 自定义图标加载失败时使用默认图标

### <a id="Ink_Canvas_MainWindow_UpdateFloatingBarIcons"></a> UpdateFloatingBarIcons\(\)

```csharp
public void UpdateFloatingBarIcons()
```

### <a id="Ink_Canvas_MainWindow_UpdateInkFadeManager_System_Boolean_System_Int32_"></a> UpdateInkFadeManager\(bool, int\)

```csharp
public void UpdateInkFadeManager(bool isEnabled, int fadeTime = 0)
```

#### Parameters

`isEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`fadeTime` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_MainWindow_UpdateInkSmoothingConfig"></a> UpdateInkSmoothingConfig\(\)

```csharp
public void UpdateInkSmoothingConfig()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTQuickPanelVisibility"></a> UpdatePPTQuickPanelVisibility\(\)

更新PPT快捷面板的显示状态

```csharp
public void UpdatePPTQuickPanelVisibility()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTTimeCapsuleOpacity"></a> UpdatePPTTimeCapsuleOpacity\(\)

更新PPT时间胶囊的透明度

```csharp
public void UpdatePPTTimeCapsuleOpacity()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTTimeCapsulePosition"></a> UpdatePPTTimeCapsulePosition\(\)

更新PPT时间胶囊的位置

```csharp
public void UpdatePPTTimeCapsulePosition()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTTimeCapsuleScale"></a> UpdatePPTTimeCapsuleScale\(\)

更新PPT时间胶囊的大小

```csharp
public void UpdatePPTTimeCapsuleScale()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTTimeCapsuleVisibility"></a> UpdatePPTTimeCapsuleVisibility\(\)

更新PPT时间胶囊的显示状态

```csharp
public void UpdatePPTTimeCapsuleVisibility()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTUIManagerSettings"></a> UpdatePPTUIManagerSettings\(\)

更新PPT UI管理器设置的通用方法

```csharp
public void UpdatePPTUIManagerSettings()
```

### <a id="Ink_Canvas_MainWindow_UpdatePageInfo"></a> UpdatePageInfo\(\)

```csharp
public void UpdatePageInfo()
```

### <a id="Ink_Canvas_MainWindow_ViewboxFloatingBarMarginAnimation_System_Int32_System_Boolean_System_Boolean_"></a> ViewboxFloatingBarMarginAnimation\(int, bool, bool\)

浮动工具栏边距动画处理

```csharp
public void ViewboxFloatingBarMarginAnimation(int MarginFromEdge, bool PosXCaculatedWithTaskbarHeight = false, bool skipAnimation = false)
```

#### Parameters

`MarginFromEdge` [int](https://learn.microsoft.com/dotnet/api/system.int32)

边缘边距

`PosXCaculatedWithTaskbarHeight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否考虑任务栏高度计算位置

`skipAnimation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否跳过动画直接定位（用于启动时快速恢复位置）

