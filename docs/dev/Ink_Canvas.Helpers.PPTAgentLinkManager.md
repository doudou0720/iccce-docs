# <a id="Ink_Canvas_Helpers_PPTAgentLinkManager"></a> Class PPTAgentLinkManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class PPTAgentLinkManager : IPPTLinkManager, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PPTAgentLinkManager](Ink\_Canvas.Helpers.PPTAgentLinkManager.md)

#### Implements

[IPPTLinkManager](Ink\_Canvas.Helpers.IPPTLinkManager.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_CurrentState"></a> CurrentState

```csharp
public PPTState CurrentState { get; }
```

#### Property Value

 PPTState

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_IsConnected"></a> IsConnected

```csharp
public bool IsConnected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_IsInSlideShow"></a> IsInSlideShow

```csharp
public bool IsInSlideShow { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_IsSupportWPS"></a> IsSupportWPS

```csharp
public bool IsSupportWPS { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_PPTApplication"></a> PPTApplication

```csharp
public object PPTApplication { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_SkipAnimationsWhenNavigating"></a> SkipAnimationsWhenNavigating

```csharp
public bool SkipAnimationsWhenNavigating { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_SlidesCount"></a> SlidesCount

```csharp
public int SlidesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_ExportSlideThumbnails_System_Int32_System_Int32_"></a> ExportSlideThumbnails\(int, int\)

```csharp
public List<PPTSlideThumbnail> ExportSlideThumbnails(int width, int height)
```

#### Parameters

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`height` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PPTSlideThumbnail](Ink\_Canvas.Helpers.PPTSlideThumbnail.md)\>

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_GetCurrentActivePresentation"></a> GetCurrentActivePresentation\(\)

```csharp
public object GetCurrentActivePresentation()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_GetCurrentSlideNumber"></a> GetCurrentSlideNumber\(\)

```csharp
public int GetCurrentSlideNumber()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_GetMediaRegions"></a> GetMediaRegions\(\)

```csharp
public MediaRegionsResponse GetMediaRegions()
```

#### Returns

 MediaRegionsResponse

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_GetPresentationName"></a> GetPresentationName\(\)

```csharp
public string GetPresentationName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_ReloadConnection"></a> ReloadConnection\(\)

重新加载或重建与 PowerPoint 的连接。

```csharp
public void ReloadConnection()
```

#### Remarks

调用后实现应刷新内部连接与状态，必要时重建与 PowerPoint 的会话；此操作可能导致 IsConnected 变化并触发 PPTConnectionChanged 或其他相关事件（例如 SlideShowStateChanged）。

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_StartMonitoring"></a> StartMonitoring\(\)

开始监视与 PowerPoint 的连接以及幻灯片放映相关状态，并在状态变化时触发对应事件。

```csharp
public void StartMonitoring()
```

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_StopMonitoring_System_Boolean_"></a> StopMonitoring\(bool\)

```csharp
public void StopMonitoring(bool isShutdown = false)
```

#### Parameters

`isShutdown` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_TryDisableAutoPlayTimings"></a> TryDisableAutoPlayTimings\(\)

```csharp
public bool TryDisableAutoPlayTimings()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_TryEndSlideShow"></a> TryEndSlideShow\(\)

尝试结束当前正在进行的幻灯片放映。

```csharp
public bool TryEndSlideShow()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> 如果放映已成功结束，<code>false</code> 否则。

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_TryNavigateNext"></a> TryNavigateNext\(\)

```csharp
public bool TryNavigateNext()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_TryNavigatePrevious"></a> TryNavigatePrevious\(\)

```csharp
public bool TryNavigatePrevious()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_TryNavigateToSlide_System_Int32_"></a> TryNavigateToSlide\(int\)

```csharp
public bool TryNavigateToSlide(int slideNumber)
```

#### Parameters

`slideNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_TryShowSlideNavigation"></a> TryShowSlideNavigation\(\)

```csharp
public bool TryShowSlideNavigation()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_TryStartSlideShow"></a> TryStartSlideShow\(\)

尝试启动当前演示文稿的放映模式。

```csharp
public bool TryStartSlideShow()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> 如果放映已成功启动，<code>false</code> 否则。

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_TryUnhideHiddenSlides"></a> TryUnhideHiddenSlides\(\)

```csharp
public bool TryUnhideHiddenSlides()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_PPTConnectionChanged"></a> PPTConnectionChanged

```csharp
public event Action<bool> PPTConnectionChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_PresentationClose"></a> PresentationClose

```csharp
public event Action<object> PresentationClose
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_PresentationOpen"></a> PresentationOpen

```csharp
public event Action<object> PresentationOpen
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_SlideShowBegin"></a> SlideShowBegin

```csharp
public event Action<object> SlideShowBegin
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_SlideShowEnd"></a> SlideShowEnd

```csharp
public event Action<object> SlideShowEnd
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_SlideShowNextSlide"></a> SlideShowNextSlide

```csharp
public event Action<object> SlideShowNextSlide
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Helpers_PPTAgentLinkManager_SlideShowStateChanged"></a> SlideShowStateChanged

```csharp
public event Action<bool> SlideShowStateChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

