# <a id="Ink_Canvas_Helpers_ComPPTLinkManager"></a> Class ComPPTLinkManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ComPPTLinkManager : IPPTLinkManager, IDisposable
```

#### Inheritance

object ← 
[ComPPTLinkManager](Ink\_Canvas.Helpers.ComPPTLinkManager.md)

#### Implements

[IPPTLinkManager](Ink\_Canvas.Helpers.IPPTLinkManager.md), 
IDisposable

## Constructors

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager__ctor"></a> ComPPTLinkManager\(\)

```csharp
public ComPPTLinkManager()
```

## Properties

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_IsConnected"></a> IsConnected

```csharp
public bool IsConnected { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_IsInSlideShow"></a> IsInSlideShow

```csharp
public bool IsInSlideShow { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_IsSupportWPS"></a> IsSupportWPS

```csharp
public bool IsSupportWPS { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_PPTApplication"></a> PPTApplication

```csharp
public object PPTApplication { get; }
```

#### Property Value

 object

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_SkipAnimationsWhenNavigating"></a> SkipAnimationsWhenNavigating

```csharp
public bool SkipAnimationsWhenNavigating { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_SlidesCount"></a> SlidesCount

```csharp
public int SlidesCount { get; }
```

#### Property Value

 int

## Methods

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_ExportSlideThumbnails_System_Int32_System_Int32_IProgress_System_Double__"></a> ExportSlideThumbnails\(int, int, IProgress<double\>\)

```csharp
public List<PPTSlideThumbnail> ExportSlideThumbnails(int width, int height, IProgress<double> progress = null)
```

#### Parameters

`width` int

`height` int

`progress` IProgress<double\>

#### Returns

 List<[PPTSlideThumbnail](Ink\_Canvas.Helpers.PPTSlideThumbnail.md)\>

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_GetCurrentActivePresentation"></a> GetCurrentActivePresentation\(\)

```csharp
public object GetCurrentActivePresentation()
```

#### Returns

 object

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_GetCurrentSlideNumber"></a> GetCurrentSlideNumber\(\)

```csharp
public int GetCurrentSlideNumber()
```

#### Returns

 int

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_GetPresentationName"></a> GetPresentationName\(\)

```csharp
public string GetPresentationName()
```

#### Returns

 string

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_GetPresentationPath"></a> GetPresentationPath\(\)

```csharp
public string GetPresentationPath()
```

#### Returns

 string

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_ReloadConnection"></a> ReloadConnection\(\)

强制断开当前 COM PPT 连接并停止对其监控，同时写入事件日志。

```csharp
public void ReloadConnection()
```

#### Remarks

会向日志记录一条事件信息并调用内部管理器停止监控；该方法不会重新启动监控或重新初始化内部管理器实例。

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_StartMonitoring"></a> StartMonitoring\(\)

开始监控本地 PowerPoint 的连接与运行状态，并在状态变化时触发相应事件。

```csharp
public void StartMonitoring()
```

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_StopMonitoring_System_Boolean_"></a> StopMonitoring\(bool\)

停止对 PowerPoint 的监控，断开当前连接并停止触发相关事件。

```csharp
public void StopMonitoring(bool isShutdown = false)
```

#### Parameters

`isShutdown` bool

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_TryEndSlideShow"></a> TryEndSlideShow\(\)

尝试结束当前正在进行的幻灯片放映。

```csharp
public bool TryEndSlideShow()
```

#### Returns

 bool

<code>true</code> 如果放映已成功结束，<code>false</code> 否则。

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_TryNavigateNext"></a> TryNavigateNext\(\)

```csharp
public bool TryNavigateNext()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_TryNavigatePrevious"></a> TryNavigatePrevious\(\)

```csharp
public bool TryNavigatePrevious()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_TryNavigateToSlide_System_Int32_"></a> TryNavigateToSlide\(int\)

```csharp
public bool TryNavigateToSlide(int slideNumber)
```

#### Parameters

`slideNumber` int

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_TryShowSlideNavigation"></a> TryShowSlideNavigation\(\)

```csharp
public bool TryShowSlideNavigation()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_TryStartSlideShow"></a> TryStartSlideShow\(\)

尝试启动当前演示文稿的放映模式。

```csharp
public bool TryStartSlideShow()
```

#### Returns

 bool

<code>true</code> 如果放映已成功启动，<code>false</code> 否则。

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_PPTConnectionChanged"></a> PPTConnectionChanged

```csharp
public event Action<bool> PPTConnectionChanged
```

#### Event Type

 Action<bool\>

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_PresentationClose"></a> PresentationClose

```csharp
public event Action<object> PresentationClose
```

#### Event Type

 Action<object\>

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_PresentationOpen"></a> PresentationOpen

```csharp
public event Action<object> PresentationOpen
```

#### Event Type

 Action<object\>

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_SlideShowBegin"></a> SlideShowBegin

```csharp
public event Action<object> SlideShowBegin
```

#### Event Type

 Action<object\>

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_SlideShowEnd"></a> SlideShowEnd

```csharp
public event Action<object> SlideShowEnd
```

#### Event Type

 Action<object\>

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_SlideShowNextSlide"></a> SlideShowNextSlide

```csharp
public event Action<object> SlideShowNextSlide
```

#### Event Type

 Action<object\>

### <a id="Ink_Canvas_Helpers_ComPPTLinkManager_SlideShowStateChanged"></a> SlideShowStateChanged

```csharp
public event Action<bool> SlideShowStateChanged
```

#### Event Type

 Action<bool\>

