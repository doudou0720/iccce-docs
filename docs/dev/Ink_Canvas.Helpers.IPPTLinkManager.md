# <a id="Ink_Canvas_Helpers_IPPTLinkManager"></a> Interface IPPTLinkManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public interface IPPTLinkManager : IDisposable
```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_IsConnected"></a> IsConnected

```csharp
bool IsConnected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_IsInSlideShow"></a> IsInSlideShow

```csharp
bool IsInSlideShow { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_IsSupportWPS"></a> IsSupportWPS

```csharp
bool IsSupportWPS { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_PPTApplication"></a> PPTApplication

```csharp
object PPTApplication { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_SkipAnimationsWhenNavigating"></a> SkipAnimationsWhenNavigating

```csharp
bool SkipAnimationsWhenNavigating { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_SlidesCount"></a> SlidesCount

```csharp
int SlidesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_ExportSlideThumbnails_System_Int32_System_Int32_"></a> ExportSlideThumbnails\(int, int\)

```csharp
List<PPTSlideThumbnail> ExportSlideThumbnails(int width, int height)
```

#### Parameters

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`height` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PPTSlideThumbnail](Ink\_Canvas.Helpers.PPTSlideThumbnail.md)\>

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_GetCurrentActivePresentation"></a> GetCurrentActivePresentation\(\)

```csharp
object GetCurrentActivePresentation()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_GetCurrentSlideNumber"></a> GetCurrentSlideNumber\(\)

```csharp
int GetCurrentSlideNumber()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_GetPresentationName"></a> GetPresentationName\(\)

```csharp
string GetPresentationName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_ReloadConnection"></a> ReloadConnection\(\)

重新加载或重建与 PowerPoint 的连接。

```csharp
void ReloadConnection()
```

#### Remarks

调用后实现应刷新内部连接与状态，必要时重建与 PowerPoint 的会话；此操作可能导致 IsConnected 变化并触发 PPTConnectionChanged 或其他相关事件（例如 SlideShowStateChanged）。

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_StartMonitoring"></a> StartMonitoring\(\)

开始监视与 PowerPoint 的连接以及幻灯片放映相关状态，并在状态变化时触发对应事件。

```csharp
void StartMonitoring()
```

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_StopMonitoring_System_Boolean_"></a> StopMonitoring\(bool\)

```csharp
void StopMonitoring(bool isShutdown = false)
```

#### Parameters

`isShutdown` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_TryEndSlideShow"></a> TryEndSlideShow\(\)

尝试结束当前正在进行的幻灯片放映。

```csharp
bool TryEndSlideShow()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> 如果放映已成功结束，<code>false</code> 否则。

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_TryNavigateNext"></a> TryNavigateNext\(\)

```csharp
bool TryNavigateNext()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_TryNavigatePrevious"></a> TryNavigatePrevious\(\)

```csharp
bool TryNavigatePrevious()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_TryNavigateToSlide_System_Int32_"></a> TryNavigateToSlide\(int\)

```csharp
bool TryNavigateToSlide(int slideNumber)
```

#### Parameters

`slideNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_TryShowSlideNavigation"></a> TryShowSlideNavigation\(\)

```csharp
bool TryShowSlideNavigation()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_TryStartSlideShow"></a> TryStartSlideShow\(\)

尝试启动当前演示文稿的放映模式。

```csharp
bool TryStartSlideShow()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> 如果放映已成功启动，<code>false</code> 否则。

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_PPTConnectionChanged"></a> PPTConnectionChanged

```csharp
event Action<bool> PPTConnectionChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_PresentationClose"></a> PresentationClose

```csharp
event Action<object> PresentationClose
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_PresentationOpen"></a> PresentationOpen

```csharp
event Action<object> PresentationOpen
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_SlideShowBegin"></a> SlideShowBegin

```csharp
event Action<object> SlideShowBegin
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_SlideShowEnd"></a> SlideShowEnd

```csharp
event Action<object> SlideShowEnd
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_SlideShowNextSlide"></a> SlideShowNextSlide

```csharp
event Action<object> SlideShowNextSlide
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_Helpers_IPPTLinkManager_SlideShowStateChanged"></a> SlideShowStateChanged

```csharp
event Action<bool> SlideShowStateChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

