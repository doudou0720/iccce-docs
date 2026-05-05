# <a id="Ink_Canvas_Helpers_PPTUIManager"></a> Class PPTUIManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

PPT UI管理器 - 统一管理PPT相关的UI更新和样式设置

```csharp
public class PPTUIManager
```

#### Inheritance

object ← 
[PPTUIManager](Ink\_Canvas.Helpers.PPTUIManager.md)

## Constructors

### <a id="Ink_Canvas_Helpers_PPTUIManager__ctor_Ink_Canvas_MainWindow_"></a> PPTUIManager\(MainWindow\)

```csharp
public PPTUIManager(MainWindow mainWindow)
```

#### Parameters

`mainWindow` [MainWindow](Ink\_Canvas.MainWindow.md)

## Properties

### <a id="Ink_Canvas_Helpers_PPTUIManager_EnablePPTButtonLongPressPageTurn"></a> EnablePPTButtonLongPressPageTurn

```csharp
public bool EnablePPTButtonLongPressPageTurn { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_PPTUIManager_EnablePPTButtonPageClickable"></a> EnablePPTButtonPageClickable

```csharp
public bool EnablePPTButtonPageClickable { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_PPTUIManager_PPTBButtonsOption"></a> PPTBButtonsOption

```csharp
public int PPTBButtonsOption { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_PPTUIManager_PPTButtonsDisplayOption"></a> PPTButtonsDisplayOption

```csharp
public int PPTButtonsDisplayOption { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_PPTUIManager_PPTLBButtonOpacity"></a> PPTLBButtonOpacity

```csharp
public double PPTLBButtonOpacity { get; set; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Helpers_PPTUIManager_PPTLBButtonPosition"></a> PPTLBButtonPosition

```csharp
public int PPTLBButtonPosition { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_PPTUIManager_PPTLSButtonOpacity"></a> PPTLSButtonOpacity

```csharp
public double PPTLSButtonOpacity { get; set; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Helpers_PPTUIManager_PPTLSButtonPosition"></a> PPTLSButtonPosition

```csharp
public int PPTLSButtonPosition { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_PPTUIManager_PPTRBButtonOpacity"></a> PPTRBButtonOpacity

```csharp
public double PPTRBButtonOpacity { get; set; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Helpers_PPTUIManager_PPTRBButtonPosition"></a> PPTRBButtonPosition

```csharp
public int PPTRBButtonPosition { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_PPTUIManager_PPTRSButtonOpacity"></a> PPTRSButtonOpacity

```csharp
public double PPTRSButtonOpacity { get; set; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Helpers_PPTUIManager_PPTRSButtonPosition"></a> PPTRSButtonPosition

```csharp
public int PPTRSButtonPosition { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_PPTUIManager_PPTSButtonsOption"></a> PPTSButtonsOption

```csharp
public int PPTSButtonsOption { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_PPTUIManager_ShowPPTButton"></a> ShowPPTButton

```csharp
public bool ShowPPTButton { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_Helpers_PPTUIManager_HideAllNavigationPanels"></a> HideAllNavigationPanels\(\)

隐藏所有导航面板

```csharp
public void HideAllNavigationPanels()
```

### <a id="Ink_Canvas_Helpers_PPTUIManager_OnSlideShowStateChanged_System_Boolean_"></a> OnSlideShowStateChanged\(bool\)

处理PPT放映状态变化

```csharp
public void OnSlideShowStateChanged(bool isInSlideShow)
```

#### Parameters

`isInSlideShow` bool

### <a id="Ink_Canvas_Helpers_PPTUIManager_SetFloatingBarOpacity_System_Double_"></a> SetFloatingBarOpacity\(double\)

设置浮动栏透明度

```csharp
public void SetFloatingBarOpacity(double opacity)
```

#### Parameters

`opacity` double

### <a id="Ink_Canvas_Helpers_PPTUIManager_SetMainPanelMargin_Thickness_"></a> SetMainPanelMargin\(Thickness\)

设置主面板边距

```csharp
public void SetMainPanelMargin(Thickness margin)
```

#### Parameters

`margin` Thickness

### <a id="Ink_Canvas_Helpers_PPTUIManager_UpdateConnectionStatus_System_Boolean_"></a> UpdateConnectionStatus\(bool\)

更新PPT连接状态UI

```csharp
public void UpdateConnectionStatus(bool isConnected)
```

#### Parameters

`isConnected` bool

### <a id="Ink_Canvas_Helpers_PPTUIManager_UpdateCurrentSlideNumber_System_Int32_System_Int32_"></a> UpdateCurrentSlideNumber\(int, int\)

更新当前页码显示

```csharp
public void UpdateCurrentSlideNumber(int currentSlide, int totalSlides)
```

#### Parameters

`currentSlide` int

`totalSlides` int

### <a id="Ink_Canvas_Helpers_PPTUIManager_UpdateNavigationButtonStyles"></a> UpdateNavigationButtonStyles\(\)

更新导航按钮样式

```csharp
public void UpdateNavigationButtonStyles()
```

### <a id="Ink_Canvas_Helpers_PPTUIManager_UpdateNavigationPanelsVisibility"></a> UpdateNavigationPanelsVisibility\(\)

更新导航面板显示状态

```csharp
public void UpdateNavigationPanelsVisibility()
```

### <a id="Ink_Canvas_Helpers_PPTUIManager_UpdateSidebarExitButtons_System_Boolean_"></a> UpdateSidebarExitButtons\(bool\)

显示/隐藏侧边栏退出按钮

```csharp
public void UpdateSidebarExitButtons(bool show)
```

#### Parameters

`show` bool

### <a id="Ink_Canvas_Helpers_PPTUIManager_UpdateSlideShowStatus_System_Boolean_System_Int32_System_Int32_"></a> UpdateSlideShowStatus\(bool, int, int\)

更新幻灯片放映状态UI

```csharp
public void UpdateSlideShowStatus(bool isInSlideShow, int currentSlide = 0, int totalSlides = 0)
```

#### Parameters

`isInSlideShow` bool

`currentSlide` int

`totalSlides` int

