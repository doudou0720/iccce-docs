# <a id="Ink_Canvas_Helpers_DirectShowCameraService"></a> Class DirectShowCameraService

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

基于 DirectShow (DirectShowLib) FilterGraph + SampleGrabber 的摄像头服务实现。
纯 DirectShow + GDI+，兼容 Win7 SP1+。
ScreenshotSelectorWindow 使用此实现（不创建 UI 控件，纯帧事件路径）。
视频展台特殊模式（全屏预览）仍走 MainWindow.VideoPresenterFullCanvasImage (WPFMediaKit VideoCaptureElement)。

```csharp
public sealed class DirectShowCameraService : ICameraService, IDisposable, ISampleGrabberCB
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DirectShowCameraService](Ink\_Canvas.Helpers.DirectShowCameraService.md)

#### Implements

[ICameraService](Ink\_Canvas.Helpers.ICameraService.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable), 
ISampleGrabberCB

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_DirectShowCameraService__ctor"></a> DirectShowCameraService\(\)

```csharp
public DirectShowCameraService()
```

## Properties

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_AllResolutionFpsCombos"></a> AllResolutionFpsCombos

所有有效的 (W, H, FPS) 组合（去重）。
排序：先按分辨率降序（像素数从大到小），同分辨率内按帧率降序。
用于单 ComboBox 填充"分辨率@帧数"组合选项。

```csharp
public IReadOnlyList<ResolutionInfo> AllResolutionFpsCombos { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ResolutionInfo](Ink\_Canvas.Helpers.ResolutionInfo.md)\>

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_AvailableCameras"></a> AvailableCameras

```csharp
public IReadOnlyList<CameraInfo> AvailableCameras { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CameraInfo](Ink\_Canvas.Helpers.CameraInfo.md)\>

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_CurrentCamera"></a> CurrentCamera

```csharp
public CameraInfo CurrentCamera { get; }
```

#### Property Value

 [CameraInfo](Ink\_Canvas.Helpers.CameraInfo.md)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_IsCapturing"></a> IsCapturing

```csharp
public bool IsCapturing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_NativeResolutions"></a> NativeResolutions

当前摄像头支持的 native 分辨率列表（W,H,FPS 组合；可能为空）。

```csharp
public IReadOnlyList<ResolutionInfo> NativeResolutions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ResolutionInfo](Ink\_Canvas.Helpers.ResolutionInfo.md)\>

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_RotationAngle"></a> RotationAngle

0=0°, 1=90°, 2=180°, 3=270°。

```csharp
public int RotationAngle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_SelectedComboIndex"></a> SelectedComboIndex

当前在 AllResolutionFpsCombos 中的选中索引；-1 表示未选中。

```csharp
public int SelectedComboIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_SelectedFramerateIndex"></a> SelectedFramerateIndex

当前分辨率下的帧率索引（GetFrameratesFor 返回列表的索引）；-1 表示未选中。

```csharp
public int SelectedFramerateIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_SelectedResolutionIndex"></a> SelectedResolutionIndex

当前选中的 native 分辨率索引（NativeResolutions 的索引）；-1 表示未选中。

```csharp
public int SelectedResolutionIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_SelectedUniqueResolutionIndex"></a> SelectedUniqueResolutionIndex

当前选中的"去重分辨率索引"；-1 表示未选中。

```csharp
public int SelectedUniqueResolutionIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_UniqueResolutions"></a> UniqueResolutions

去重后的分辨率列表（按 W,H 分组，FrameRate 取最大值，便于 ComboBox 显示）。

```csharp
public IReadOnlyList<ResolutionInfo> UniqueResolutions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ResolutionInfo](Ink\_Canvas.Helpers.ResolutionInfo.md)\>

## Methods

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_BufferCB_System_Double_System_IntPtr_System_Int32_"></a> BufferCB\(double, nint, int\)

BufferCB：每帧由 DirectShow 在流线程上回调，buffer 指向 RGB24 像素数据。

```csharp
public int BufferCB(double sampleTime, nint buffer, int bufferLen)
```

#### Parameters

`sampleTime` [double](https://learn.microsoft.com/dotnet/api/system.double)

`buffer` [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

`bufferLen` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_EnumerateResolutionsAsync_System_Int32_"></a> EnumerateResolutionsAsync\(int\)

独立枚举指定摄像头的 native 分辨率（不启动预览，不抢占设备）。
参考 EasiCamera Cvte.MediaDevice.VideoInputService.GetAllAvailableResolution：
用 FilterGraphNoThread（无消息泵）+ ICaptureGraphBuilder2 + AddSourceFilterForMoniker
枚举 IAMStreamConfig.GetStreamCaps，不调用 IMediaControl.Run()，因此不会与
VideoCaptureElement（特殊模式）或另一个 FilterGraph（_cameraService.StartPreviewAsync）抢占设备。
用于特殊模式下：先用此方法填充分辨率 ComboBox，再启动 VideoCaptureElement 预览。
调用后 AvailableCameras / NativeResolutions / UniqueResolutions / SelectedResolutionIndex
/ SelectedUniqueResolutionIndex / SelectedFramerateIndex / CurrentCamera 均已就绪。

```csharp
public Task EnumerateResolutionsAsync(int cameraIndex)
```

#### Parameters

`cameraIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_FindCapabilityIndex_System_Int32_System_Int32_System_Int32_"></a> FindCapabilityIndex\(int, int, int\)

在 NativeResolutions 中查找匹配 (W, H, FPS) 的 capability 索引。

```csharp
public int FindCapabilityIndex(int width, int height, int framerate)
```

#### Parameters

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`height` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`framerate` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_GetCurrentFrameAsBitmap"></a> GetCurrentFrameAsBitmap\(\)

获取当前帧的 GDI+ Bitmap 副本（调用方负责 Dispose）。

```csharp
public Bitmap GetCurrentFrameAsBitmap()
```

#### Returns

 Bitmap

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_GetCurrentFrameAsBitmapSource"></a> GetCurrentFrameAsBitmapSource\(\)

获取当前帧的 WPF 位图（已 Freeze，可跨线程）。

```csharp
public BitmapSource GetCurrentFrameAsBitmapSource()
```

#### Returns

 BitmapSource

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_GetFrameratesFor_System_Int32_System_Int32_"></a> GetFrameratesFor\(int, int\)

获取指定分辨率下支持的帧率列表（去重、降序）。

```csharp
public IReadOnlyList<int> GetFrameratesFor(int width, int height)
```

#### Parameters

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`height` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_RefreshCameraListAsync"></a> RefreshCameraListAsync\(\)

刷新可用摄像头列表（DirectShow 同步完成）。

```csharp
public Task RefreshCameraListAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_SampleCB_System_Double_IMediaSample_"></a> SampleCB\(double, IMediaSample\)

SampleCB 不会被调用（SetCallback 用了 1，走 BufferCB 路径）。

```csharp
public int SampleCB(double sampleTime, IMediaSample sample)
```

#### Parameters

`sampleTime` [double](https://learn.microsoft.com/dotnet/api/system.double)

`sample` IMediaSample

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_SetSelectedResolutionIndexSilent_System_Int32_"></a> SetSelectedResolutionIndexSilent\(int\)

静默更新 SelectedResolutionIndex（不触发 RestartWithNewResolutionAsync）。
用于特殊模式下 VideoCaptureElement 接管预览时，_cameraService 不应抢占摄像头设备，
调用者（MainWindow）会直接重新启动 VideoCaptureElement 应用新分辨率。

```csharp
public void SetSelectedResolutionIndexSilent(int value)
```

#### Parameters

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_StartPreviewAsync_System_Int32_"></a> StartPreviewAsync\(int\)

启动指定摄像头的预览。DirectShow 同步实现，但返回 Task 以保持接口一致。

```csharp
public Task<bool> StartPreviewAsync(int cameraIndex = 0)
```

#### Parameters

`cameraIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_StopPreview"></a> StopPreview\(\)

停止预览并清理 DirectShow 图。

```csharp
public void StopPreview()
```

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_ErrorOccurred"></a> ErrorOccurred

发生错误时触发，参数为错误描述。

```csharp
public event EventHandler<string> ErrorOccurred
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Helpers_DirectShowCameraService_FrameReceived"></a> FrameReceived

每收到一帧时触发（参数为已 Freeze 的 BitmapSource，或复用的 WriteableBitmap）。

```csharp
public event EventHandler<FrameEventArgs> FrameReceived
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[FrameEventArgs](Ink\_Canvas.Helpers.FrameEventArgs.md)\>

