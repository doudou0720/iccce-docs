# <a id="Ink_Canvas_Helpers_ICameraService"></a> Interface ICameraService

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

视频展台摄像头服务的抽象接口。
当前实现：<xref href="Ink_Canvas.Helpers.DirectShowCameraService" data-throw-if-not-resolved="false"></xref>（基于 DirectShowLib FilterGraph + SampleGrabber）。

```csharp
public interface ICameraService : IDisposable
```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### <a id="Ink_Canvas_Helpers_ICameraService_AllResolutionFpsCombos"></a> AllResolutionFpsCombos

所有有效的 (W, H, FPS) 组合（去重）。
排序：先按分辨率降序（像素数从大到小），同分辨率内按帧率降序。
用于单 ComboBox 填充"分辨率@帧数"组合选项。

```csharp
IReadOnlyList<ResolutionInfo> AllResolutionFpsCombos { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ResolutionInfo](Ink\_Canvas.Helpers.ResolutionInfo.md)\>

### <a id="Ink_Canvas_Helpers_ICameraService_AvailableCameras"></a> AvailableCameras

```csharp
IReadOnlyList<CameraInfo> AvailableCameras { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CameraInfo](Ink\_Canvas.Helpers.CameraInfo.md)\>

### <a id="Ink_Canvas_Helpers_ICameraService_Brightness"></a> Brightness

亮度（曝光度）归一化值，范围 -100..100，0 表示摄像头默认值。
等价于 <xref href="Ink_Canvas.Helpers.ICameraService.GetCameraPropertyValue(Ink_Canvas.Helpers.BoothCameraProperty)" data-throw-if-not-resolved="false"></xref>(<xref href="Ink_Canvas.Helpers.BoothCameraProperty.Brightness" data-throw-if-not-resolved="false"></xref>)，
保留是为了与早期代码兼容。setter 会异步把值应用到硬件。
摄像头不支持时 setter 静默忽略。

```csharp
int Brightness { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_ICameraService_BrightnessSupported"></a> BrightnessSupported

当前摄像头是否支持亮度（曝光度）调节。等价于 IsCameraPropertySupported(Brightness)。

```csharp
bool BrightnessSupported { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_ICameraService_CameraProperties"></a> CameraProperties

当前摄像头所有属性的支持状态与归一化值（-100..100，0=默认）。需先 ProbeCameraPropertiesAsync。

```csharp
IReadOnlyDictionary<BoothCameraProperty, CameraPropState> CameraProperties { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[BoothCameraProperty](Ink\_Canvas.Helpers.BoothCameraProperty.md), [CameraPropState](Ink\_Canvas.Helpers.CameraPropState.md)\>

### <a id="Ink_Canvas_Helpers_ICameraService_CurrentCamera"></a> CurrentCamera

```csharp
CameraInfo CurrentCamera { get; }
```

#### Property Value

 [CameraInfo](Ink\_Canvas.Helpers.CameraInfo.md)

### <a id="Ink_Canvas_Helpers_ICameraService_IsCapturing"></a> IsCapturing

```csharp
bool IsCapturing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_ICameraService_NativeResolutions"></a> NativeResolutions

当前摄像头支持的 native 分辨率列表（W,H,FPS 组合；可能为空）。

```csharp
IReadOnlyList<ResolutionInfo> NativeResolutions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ResolutionInfo](Ink\_Canvas.Helpers.ResolutionInfo.md)\>

### <a id="Ink_Canvas_Helpers_ICameraService_RotationAngle"></a> RotationAngle

0=0°, 1=90°, 2=180°, 3=270°。

```csharp
int RotationAngle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_ICameraService_SelectedComboIndex"></a> SelectedComboIndex

当前在 AllResolutionFpsCombos 中的选中索引；-1 表示未选中。

```csharp
int SelectedComboIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_ICameraService_SelectedFramerateIndex"></a> SelectedFramerateIndex

当前分辨率下的帧率索引（GetFrameratesFor 返回列表的索引）；-1 表示未选中。

```csharp
int SelectedFramerateIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_ICameraService_SelectedResolutionIndex"></a> SelectedResolutionIndex

当前选中的 native 分辨率索引（NativeResolutions 的索引）；-1 表示未选中。

```csharp
int SelectedResolutionIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_ICameraService_SelectedUniqueResolutionIndex"></a> SelectedUniqueResolutionIndex

当前选中的"去重分辨率索引"；-1 表示未选中。

```csharp
int SelectedUniqueResolutionIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_ICameraService_UniqueResolutions"></a> UniqueResolutions

去重后的分辨率列表（同 W,H 合并；FrameRate 取该分辨率下最大值）。
用于分辨率 ComboBox 填充。

```csharp
IReadOnlyList<ResolutionInfo> UniqueResolutions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ResolutionInfo](Ink\_Canvas.Helpers.ResolutionInfo.md)\>

## Methods

### <a id="Ink_Canvas_Helpers_ICameraService_ApplyBrightnessAsync"></a> ApplyBrightnessAsync\(\)

立即把当前 Brightness 应用到摄像头硬件。等价于 ApplyCameraPropertyAsync(Brightness)。

```csharp
Task<bool> ApplyBrightnessAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Helpers_ICameraService_ApplyCameraPropertyAsync_Ink_Canvas_Helpers_BoothCameraProperty_"></a> ApplyCameraPropertyAsync\(BoothCameraProperty\)

立即把指定属性的当前值应用到摄像头硬件。通常由 SetCameraPropertyValue 自动触发。

```csharp
Task<bool> ApplyCameraPropertyAsync(BoothCameraProperty prop)
```

#### Parameters

`prop` [BoothCameraProperty](Ink\_Canvas.Helpers.BoothCameraProperty.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Helpers_ICameraService_EnumerateResolutionsAsync_System_Int32_"></a> EnumerateResolutionsAsync\(int\)

独立枚举指定摄像头的 native 分辨率（不启动预览，不抢占设备）。
用 FilterGraphNoThread + ICaptureGraphBuilder2 + AddSourceFilterForMoniker
枚举 IAMStreamConfig.GetStreamCaps，不调用 IMediaControl.Run()。
用于特殊模式下：先用此方法填充分辨率 ComboBox，再启动 VideoCaptureElement 预览。
调用完成后 NativeResolutions / UniqueResolutions / SelectedResolutionIndex /
SelectedUniqueResolutionIndex / SelectedFramerateIndex / CurrentCamera 均已就绪。

```csharp
Task EnumerateResolutionsAsync(int cameraIndex)
```

#### Parameters

`cameraIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Helpers_ICameraService_FindCapabilityIndex_System_Int32_System_Int32_System_Int32_"></a> FindCapabilityIndex\(int, int, int\)

在 NativeResolutions 中查找匹配 (W, H, FPS) 的 capability 索引。
若找不到精确匹配，退回到同 (W, H) 下最接近的 FPS。

```csharp
int FindCapabilityIndex(int width, int height, int framerate)
```

#### Parameters

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`height` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`framerate` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_ICameraService_GetCameraPropertyValue_Ink_Canvas_Helpers_BoothCameraProperty_"></a> GetCameraPropertyValue\(BoothCameraProperty\)

读取指定属性的归一化值（-100..100，0=默认）。未支持/未探测时返回 0。

```csharp
int GetCameraPropertyValue(BoothCameraProperty prop)
```

#### Parameters

`prop` [BoothCameraProperty](Ink\_Canvas.Helpers.BoothCameraProperty.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_ICameraService_GetCurrentFrameAsBitmap"></a> GetCurrentFrameAsBitmap\(\)

获取当前帧的 GDI+ Bitmap（用于拍照后的图像处理，调用方负责 Dispose）。

```csharp
Bitmap GetCurrentFrameAsBitmap()
```

#### Returns

 Bitmap

### <a id="Ink_Canvas_Helpers_ICameraService_GetCurrentFrameAsBitmapSource"></a> GetCurrentFrameAsBitmapSource\(\)

获取当前帧的 WPF 位图（已 Freeze）。

```csharp
BitmapSource GetCurrentFrameAsBitmapSource()
```

#### Returns

 BitmapSource

### <a id="Ink_Canvas_Helpers_ICameraService_GetFrameratesFor_System_Int32_System_Int32_"></a> GetFrameratesFor\(int, int\)

获取指定分辨率下支持的帧率列表（去重、降序）。

```csharp
IReadOnlyList<int> GetFrameratesFor(int width, int height)
```

#### Parameters

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`height` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Ink_Canvas_Helpers_ICameraService_IsCameraPropertySupported_Ink_Canvas_Helpers_BoothCameraProperty_"></a> IsCameraPropertySupported\(BoothCameraProperty\)

当前摄像头是否支持指定属性。需先 ProbeCameraPropertiesAsync。

```csharp
bool IsCameraPropertySupported(BoothCameraProperty prop)
```

#### Parameters

`prop` [BoothCameraProperty](Ink\_Canvas.Helpers.BoothCameraProperty.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_ICameraService_ProbeBrightnessSupportAsync"></a> ProbeBrightnessSupportAsync\(\)

探测当前摄像头支持的全部属性（亮度/对比度/饱和度/色温/增益/焦距/快门），
并构建常驻"不抢占设备"的图同时持有 IAMVideoProcAmp 与 IAMCameraControl。
探测后 <xref href="Ink_Canvas.Helpers.ICameraService.CameraProperties" data-throw-if-not-resolved="false"></xref> 已就绪，并会立即把当前所有值应用一次。
等价于 <xref href="Ink_Canvas.Helpers.ICameraService.ProbeCameraPropertiesAsync" data-throw-if-not-resolved="false"></xref>，保留是为了兼容。

```csharp
Task ProbeBrightnessSupportAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Helpers_ICameraService_ProbeCameraPropertiesAsync"></a> ProbeCameraPropertiesAsync\(\)

探测当前摄像头支持的全部属性，构建常驻"不抢占设备"的图同时持有 IAMVideoProcAmp 与 IAMCameraControl。
内部用 FilterGraphNoThread + AddSourceFilterForMoniker，不调用 Run()，可与 VideoCaptureElement 流式预览共存。
探测后 <xref href="Ink_Canvas.Helpers.ICameraService.CameraProperties" data-throw-if-not-resolved="false"></xref> 已就绪，并会立即把当前所有属性值应用一次。

```csharp
Task ProbeCameraPropertiesAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Helpers_ICameraService_RefreshCameraListAsync"></a> RefreshCameraListAsync\(\)

刷新可用摄像头列表。返回 Task 以便调用方 await。
调用完成后 <xref href="Ink_Canvas.Helpers.ICameraService.AvailableCameras" data-throw-if-not-resolved="false"></xref> 已就绪。

```csharp
Task RefreshCameraListAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Helpers_ICameraService_ReleaseBrightnessControl"></a> ReleaseBrightnessControl\(\)

释放属性控制占用的常驻 FilterGraphNoThread 资源。等价于 ReleaseCameraPropertyControl()。

```csharp
void ReleaseBrightnessControl()
```

### <a id="Ink_Canvas_Helpers_ICameraService_ReleaseCameraPropertyControl"></a> ReleaseCameraPropertyControl\(\)

释放属性控制占用的常驻 FilterGraphNoThread 资源（切换摄像头/停止预览/退出展台时调用）。

```csharp
void ReleaseCameraPropertyControl()
```

### <a id="Ink_Canvas_Helpers_ICameraService_SetCameraPropertyValue_Ink_Canvas_Helpers_BoothCameraProperty_System_Int32_"></a> SetCameraPropertyValue\(BoothCameraProperty, int\)

设置指定属性的归一化值（-100..100，自动 clamp）。setter 会异步应用到硬件，不阻塞 UI。
摄像头不支持时静默忽略。

```csharp
void SetCameraPropertyValue(BoothCameraProperty prop, int value)
```

#### Parameters

`prop` [BoothCameraProperty](Ink\_Canvas.Helpers.BoothCameraProperty.md)

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_ICameraService_SetSelectedResolutionIndexSilent_System_Int32_"></a> SetSelectedResolutionIndexSilent\(int\)

静默更新 SelectedResolutionIndex（不触发 RestartWithNewResolutionAsync）。
用于特殊模式下 VideoCaptureElement 接管预览时，_cameraService 不应抢占摄像头设备。
调用者负责后续重新启动 VideoCaptureElement 预览。

```csharp
void SetSelectedResolutionIndexSilent(int value)
```

#### Parameters

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_ICameraService_StartPreviewAsync_System_Int32_"></a> StartPreviewAsync\(int\)

启动指定摄像头的预览。会刷新 NativeResolutions。

```csharp
Task<bool> StartPreviewAsync(int cameraIndex)
```

#### Parameters

`cameraIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Helpers_ICameraService_StopPreview"></a> StopPreview\(\)

停止预览。

```csharp
void StopPreview()
```

### <a id="Ink_Canvas_Helpers_ICameraService_ErrorOccurred"></a> ErrorOccurred

发生错误时触发，参数为错误描述。

```csharp
event EventHandler<string> ErrorOccurred
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Helpers_ICameraService_FrameReceived"></a> FrameReceived

每收到一帧时触发（参数为已 Freeze 的 BitmapSource，或复用的 WriteableBitmap）。

```csharp
event EventHandler<FrameEventArgs> FrameReceived
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[FrameEventArgs](Ink\_Canvas.Helpers.FrameEventArgs.md)\>

