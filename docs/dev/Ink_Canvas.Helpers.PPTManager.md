# <a id="Ink_Canvas_Helpers_PPTManager"></a> Class PPTManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

PPT联动管理器 - 统一管理PPT和WPS的连接、事件处理和进程管理

```csharp
public class PPTManager : IDisposable
```

#### Inheritance

IDisposable ← 
[PPTManager](Ink\_Canvas.Helpers.PPTManager.md)

## Constructors

### <a id="Ink_Canvas_Helpers_PPTManager__ctor"></a> PPTManager\(\)

```csharp
public PPTManager()
```

## Properties

### <a id="Ink_Canvas_Helpers_PPTManager_CurrentPresentation"></a> CurrentPresentation

```csharp
public Presentation CurrentPresentation { get; }
```

#### Property Value

 Presentation

### <a id="Ink_Canvas_Helpers_PPTManager_CurrentSlide"></a> CurrentSlide

```csharp
public Slide CurrentSlide { get; }
```

#### Property Value

 Slide

### <a id="Ink_Canvas_Helpers_PPTManager_CurrentSlides"></a> CurrentSlides

```csharp
public Slides CurrentSlides { get; }
```

#### Property Value

 Slides

### <a id="Ink_Canvas_Helpers_PPTManager_IsConnected"></a> IsConnected

```csharp
public bool IsConnected { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_PPTManager_IsInSlideShow"></a> IsInSlideShow

```csharp
public bool IsInSlideShow { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_PPTManager_IsSupportWPS"></a> IsSupportWPS

```csharp
public bool IsSupportWPS { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_PPTManager_PPTApplication"></a> PPTApplication

```csharp
public Microsoft.Office.Interop.PowerPoint.Application PPTApplication { get; }
```

#### Property Value

 Microsoft.Office.Interop.PowerPoint.Application

### <a id="Ink_Canvas_Helpers_PPTManager_SkipAnimationsWhenNavigating"></a> SkipAnimationsWhenNavigating

```csharp
public bool SkipAnimationsWhenNavigating { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_PPTManager_SlidesCount"></a> SlidesCount

```csharp
public int SlidesCount { get; }
```

#### Property Value

 int

## Methods

### <a id="Ink_Canvas_Helpers_PPTManager_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_PPTManager_ExportSlideThumbnails_System_Int32_System_Int32_IProgress_System_Double__"></a> ExportSlideThumbnails\(int, int, IProgress<double\>\)

```csharp
public List<PPTSlideThumbnail> ExportSlideThumbnails(int width, int height, IProgress<double> progress = null)
```

#### Parameters

`width` int

`height` int

`progress` IProgress<double\>

#### Returns

 List<[PPTSlideThumbnail](Ink\_Canvas.Helpers.PPTSlideThumbnail.md)\>

### <a id="Ink_Canvas_Helpers_PPTManager_GetCurrentActivePresentation"></a> GetCurrentActivePresentation\(\)

获取当前活跃的演示文稿

```csharp
public Presentation GetCurrentActivePresentation()
```

#### Returns

 Presentation

### <a id="Ink_Canvas_Helpers_PPTManager_GetCurrentSlideNumber"></a> GetCurrentSlideNumber\(\)

获取当前幻灯片编号

```csharp
public int GetCurrentSlideNumber()
```

#### Returns

 int

### <a id="Ink_Canvas_Helpers_PPTManager_GetPresentationName"></a> GetPresentationName\(\)

```csharp
public string GetPresentationName()
```

#### Returns

 string

### <a id="Ink_Canvas_Helpers_PPTManager_GetPresentationPath"></a> GetPresentationPath\(\)

```csharp
public string GetPresentationPath()
```

#### Returns

 string

### <a id="Ink_Canvas_Helpers_PPTManager_StartMonitoring"></a> StartMonitoring\(\)

```csharp
public void StartMonitoring()
```

### <a id="Ink_Canvas_Helpers_PPTManager_StopMonitoring_System_Boolean_"></a> StopMonitoring\(bool\)

```csharp
public void StopMonitoring(bool isShutdown = false)
```

#### Parameters

`isShutdown` bool

### <a id="Ink_Canvas_Helpers_PPTManager_TryEndSlideShow"></a> TryEndSlideShow\(\)

```csharp
public bool TryEndSlideShow()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_PPTManager_TryNavigateNext"></a> TryNavigateNext\(\)

```csharp
public bool TryNavigateNext()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_PPTManager_TryNavigatePrevious"></a> TryNavigatePrevious\(\)

```csharp
public bool TryNavigatePrevious()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_PPTManager_TryNavigateToSlide_System_Int32_"></a> TryNavigateToSlide\(int\)

```csharp
public bool TryNavigateToSlide(int slideNumber)
```

#### Parameters

`slideNumber` int

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_PPTManager_TryShowSlideNavigation"></a> TryShowSlideNavigation\(\)

```csharp
public bool TryShowSlideNavigation()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_PPTManager_TryStartSlideShow"></a> TryStartSlideShow\(\)

```csharp
public bool TryStartSlideShow()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_PPTManager_PPTConnectionChanged"></a> PPTConnectionChanged

```csharp
public event Action<bool> PPTConnectionChanged
```

#### Event Type

 Action<bool\>

### <a id="Ink_Canvas_Helpers_PPTManager_PresentationClose"></a> PresentationClose

```csharp
public event Action<Presentation> PresentationClose
```

#### Event Type

 Action<Presentation\>

### <a id="Ink_Canvas_Helpers_PPTManager_PresentationOpen"></a> PresentationOpen

```csharp
public event Action<Presentation> PresentationOpen
```

#### Event Type

 Action<Presentation\>

### <a id="Ink_Canvas_Helpers_PPTManager_SlideShowBegin"></a> SlideShowBegin

```csharp
public event Action<SlideShowWindow> SlideShowBegin
```

#### Event Type

 Action<SlideShowWindow\>

### <a id="Ink_Canvas_Helpers_PPTManager_SlideShowEnd"></a> SlideShowEnd

```csharp
public event Action<Presentation> SlideShowEnd
```

#### Event Type

 Action<Presentation\>

### <a id="Ink_Canvas_Helpers_PPTManager_SlideShowNextSlide"></a> SlideShowNextSlide

```csharp
public event Action<SlideShowWindow> SlideShowNextSlide
```

#### Event Type

 Action<SlideShowWindow\>

### <a id="Ink_Canvas_Helpers_PPTManager_SlideShowStateChanged"></a> SlideShowStateChanged

```csharp
public event Action<bool> SlideShowStateChanged
```

#### Event Type

 Action<bool\>

