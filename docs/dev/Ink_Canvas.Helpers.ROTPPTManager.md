# <a id="Ink_Canvas_Helpers_ROTPPTManager"></a> Class ROTPPTManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ROTPPTManager : IPPTLinkManager, IDisposable
```

#### Inheritance

object ← 
[ROTPPTManager](Ink\_Canvas.Helpers.ROTPPTManager.md)

#### Implements

[IPPTLinkManager](Ink\_Canvas.Helpers.IPPTLinkManager.md), 
IDisposable

## Constructors

### <a id="Ink_Canvas_Helpers_ROTPPTManager__ctor"></a> ROTPPTManager\(\)

```csharp
public ROTPPTManager()
```

## Properties

### <a id="Ink_Canvas_Helpers_ROTPPTManager_CurrentPresentation"></a> CurrentPresentation

```csharp
public dynamic CurrentPresentation { get; }
```

#### Property Value

 dynamic

### <a id="Ink_Canvas_Helpers_ROTPPTManager_CurrentSlide"></a> CurrentSlide

```csharp
public dynamic CurrentSlide { get; }
```

#### Property Value

 dynamic

### <a id="Ink_Canvas_Helpers_ROTPPTManager_CurrentSlides"></a> CurrentSlides

```csharp
public dynamic CurrentSlides { get; }
```

#### Property Value

 dynamic

### <a id="Ink_Canvas_Helpers_ROTPPTManager_IsConnected"></a> IsConnected

```csharp
public bool IsConnected { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_ROTPPTManager_IsInSlideShow"></a> IsInSlideShow

```csharp
public bool IsInSlideShow { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_ROTPPTManager_IsSupportWPS"></a> IsSupportWPS

```csharp
public bool IsSupportWPS { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_ROTPPTManager_PPTApplication"></a> PPTApplication

```csharp
public dynamic PPTApplication { get; }
```

#### Property Value

 dynamic

### <a id="Ink_Canvas_Helpers_ROTPPTManager_SkipAnimationsWhenNavigating"></a> SkipAnimationsWhenNavigating

```csharp
public bool SkipAnimationsWhenNavigating { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_ROTPPTManager_SlidesCount"></a> SlidesCount

```csharp
public int SlidesCount { get; }
```

#### Property Value

 int

## Methods

### <a id="Ink_Canvas_Helpers_ROTPPTManager_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_ROTPPTManager_ExportSlideThumbnails_System_Int32_System_Int32_IProgress_System_Double__"></a> ExportSlideThumbnails\(int, int, IProgress<double\>\)

```csharp
public List<PPTSlideThumbnail> ExportSlideThumbnails(int width, int height, IProgress<double> progress = null)
```

#### Parameters

`width` int

`height` int

`progress` IProgress<double\>

#### Returns

 List<[PPTSlideThumbnail](Ink\_Canvas.Helpers.PPTSlideThumbnail.md)\>

### <a id="Ink_Canvas_Helpers_ROTPPTManager_GetCurrentActivePresentation"></a> GetCurrentActivePresentation\(\)

获取当前活跃的演示文稿

```csharp
public object GetCurrentActivePresentation()
```

#### Returns

 object

### <a id="Ink_Canvas_Helpers_ROTPPTManager_GetCurrentSlideNumber"></a> GetCurrentSlideNumber\(\)

```csharp
public int GetCurrentSlideNumber()
```

#### Returns

 int

### <a id="Ink_Canvas_Helpers_ROTPPTManager_GetPPTHwnd"></a> GetPPTHwnd\(\)

获取PPT窗口句柄

```csharp
public IntPtr GetPPTHwnd()
```

#### Returns

 IntPtr

窗口句柄，如果获取失败返回 IntPtr.Zero

### <a id="Ink_Canvas_Helpers_ROTPPTManager_GetPresentationName"></a> GetPresentationName\(\)

```csharp
public string GetPresentationName()
```

#### Returns

 string

### <a id="Ink_Canvas_Helpers_ROTPPTManager_GetPresentationPath"></a> GetPresentationPath\(\)

```csharp
public string GetPresentationPath()
```

#### Returns

 string

### <a id="Ink_Canvas_Helpers_ROTPPTManager_ReloadConnection"></a> ReloadConnection\(\)

重新加载或重建与 PowerPoint 的连接。

```csharp
public void ReloadConnection()
```

#### Remarks

调用后实现应刷新内部连接与状态，必要时重建与 PowerPoint 的会话；此操作可能导致 IsConnected 变化并触发 PPTConnectionChanged 或其他相关事件（例如 SlideShowStateChanged）。

### <a id="Ink_Canvas_Helpers_ROTPPTManager_StartMonitoring"></a> StartMonitoring\(\)

开始监视与 PowerPoint 的连接以及幻灯片放映相关状态，并在状态变化时触发对应事件。

```csharp
public void StartMonitoring()
```

### <a id="Ink_Canvas_Helpers_ROTPPTManager_StopMonitoring_System_Boolean_"></a> StopMonitoring\(bool\)

```csharp
public void StopMonitoring(bool isShutdown = false)
```

#### Parameters

`isShutdown` bool

### <a id="Ink_Canvas_Helpers_ROTPPTManager_TryEndSlideShow"></a> TryEndSlideShow\(\)

尝试结束当前正在进行的幻灯片放映。

```csharp
public bool TryEndSlideShow()
```

#### Returns

 bool

<code>true</code> 如果放映已成功结束，<code>false</code> 否则。

### <a id="Ink_Canvas_Helpers_ROTPPTManager_TryNavigateNext"></a> TryNavigateNext\(\)

```csharp
public bool TryNavigateNext()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_ROTPPTManager_TryNavigatePrevious"></a> TryNavigatePrevious\(\)

```csharp
public bool TryNavigatePrevious()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_ROTPPTManager_TryNavigateToSlide_System_Int32_"></a> TryNavigateToSlide\(int\)

```csharp
public bool TryNavigateToSlide(int slideNumber)
```

#### Parameters

`slideNumber` int

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_ROTPPTManager_TryShowSlideNavigation"></a> TryShowSlideNavigation\(\)

```csharp
public bool TryShowSlideNavigation()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_ROTPPTManager_TryStartSlideShow"></a> TryStartSlideShow\(\)

尝试启动当前演示文稿的放映模式。

```csharp
public bool TryStartSlideShow()
```

#### Returns

 bool

<code>true</code> 如果放映已成功启动，<code>false</code> 否则。

### <a id="Ink_Canvas_Helpers_ROTPPTManager_PPTConnectionChanged"></a> PPTConnectionChanged

```csharp
public event Action<bool> PPTConnectionChanged
```

#### Event Type

 Action<bool\>

### <a id="Ink_Canvas_Helpers_ROTPPTManager_PresentationClose"></a> PresentationClose

```csharp
public event Action<object> PresentationClose
```

#### Event Type

 Action<object\>

### <a id="Ink_Canvas_Helpers_ROTPPTManager_PresentationOpen"></a> PresentationOpen

```csharp
public event Action<object> PresentationOpen
```

#### Event Type

 Action<object\>

### <a id="Ink_Canvas_Helpers_ROTPPTManager_SlideShowBegin"></a> SlideShowBegin

```csharp
public event Action<object> SlideShowBegin
```

#### Event Type

 Action<object\>

### <a id="Ink_Canvas_Helpers_ROTPPTManager_SlideShowEnd"></a> SlideShowEnd

```csharp
public event Action<object> SlideShowEnd
```

#### Event Type

 Action<object\>

### <a id="Ink_Canvas_Helpers_ROTPPTManager_SlideShowNextSlide"></a> SlideShowNextSlide

```csharp
public event Action<object> SlideShowNextSlide
```

#### Event Type

 Action<object\>

### <a id="Ink_Canvas_Helpers_ROTPPTManager_SlideShowStateChanged"></a> SlideShowStateChanged

```csharp
public event Action<bool> SlideShowStateChanged
```

#### Event Type

 Action<bool\>

