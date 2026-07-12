# <a id="Ink_Canvas_Plugins_IPowerPointService"></a> Interface IPowerPointService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

PowerPoint 控制服务，供插件操控 PPT 联动。

```csharp
public interface IPowerPointService
```

## Properties

### <a id="Ink_Canvas_Plugins_IPowerPointService_CurrentFileName"></a> CurrentFileName

当前 PPT 文件名（不含路径），未打开时返回 null。

```csharp
string CurrentFileName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IPowerPointService_CurrentSlide"></a> CurrentSlide

当前幻灯片页码（从 1 开始），未放映时返回 0。

```csharp
int CurrentSlide { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_IPowerPointService_IsSlideshowActive"></a> IsSlideshowActive

PPT 是否正在放映。

```csharp
bool IsSlideshowActive { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IPowerPointService_TotalSlides"></a> TotalSlides

幻灯片总数，未打开时返回 0。

```csharp
int TotalSlides { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Plugins_IPowerPointService_GoToSlide_System_Int32_"></a> GoToSlide\(int\)

跳转到指定页。

```csharp
void GoToSlide(int slideNumber)
```

#### Parameters

`slideNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_IPowerPointService_NextSlide"></a> NextSlide\(\)

下一页。

```csharp
void NextSlide()
```

### <a id="Ink_Canvas_Plugins_IPowerPointService_PreviousSlide"></a> PreviousSlide\(\)

上一页。

```csharp
void PreviousSlide()
```

### <a id="Ink_Canvas_Plugins_IPowerPointService_StartSlideshow"></a> StartSlideshow\(\)

开始放映。

```csharp
void StartSlideshow()
```

### <a id="Ink_Canvas_Plugins_IPowerPointService_StopSlideshow"></a> StopSlideshow\(\)

结束放映。

```csharp
void StopSlideshow()
```

### <a id="Ink_Canvas_Plugins_IPowerPointService_SlideChanged"></a> SlideChanged

翻页事件（页码）。

```csharp
event Action<int> SlideChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Ink_Canvas_Plugins_IPowerPointService_SlideshowEnded"></a> SlideshowEnded

放映结束事件。

```csharp
event Action SlideshowEnded
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="Ink_Canvas_Plugins_IPowerPointService_SlideshowStarted"></a> SlideshowStarted

放映开始事件。

```csharp
event Action SlideshowStarted
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

