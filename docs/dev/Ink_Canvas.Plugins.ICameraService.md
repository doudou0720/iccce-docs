# <a id="Ink_Canvas_Plugins_ICameraService"></a> Interface ICameraService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

摄像头服务：供插件枚举摄像头、启动预览、接收帧回调与拍照。

<p>底层复用宿主视频展台的 DirectShow 采集（<code>CameraServiceFactory.Create()</code>），
与展台共用摄像头设备——插件启动预览可能抢占展台正在使用的设备。</p>
<p>帧回调在后台线程触发，返回的 <xref href="System.Windows.Media.Imaging.BitmapSource" data-throw-if-not-resolved="false"></xref> 已 Freeze。</p>

```csharp
public interface ICameraService
```

## Properties

### <a id="Ink_Canvas_Plugins_ICameraService_AvailableCameras"></a> AvailableCameras

可用摄像头列表。

```csharp
IReadOnlyList<PluginCameraInfo> AvailableCameras { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PluginCameraInfo](Ink\_Canvas.Plugins.PluginCameraInfo.md)\>

### <a id="Ink_Canvas_Plugins_ICameraService_IsCapturing"></a> IsCapturing

当前是否正在预览。

```csharp
bool IsCapturing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICameraService_NativeResolutions"></a> NativeResolutions

当前摄像头支持的 native 分辨率列表。

```csharp
IReadOnlyList<PluginResolutionInfo> NativeResolutions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PluginResolutionInfo](Ink\_Canvas.Plugins.PluginResolutionInfo.md)\>

### <a id="Ink_Canvas_Plugins_ICameraService_RotationAngle"></a> RotationAngle

旋转角度（0=0°, 1=90°, 2=180°, 3=270°）。

```csharp
int RotationAngle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_ICameraService_SelectedResolutionIndex"></a> SelectedResolutionIndex

当前选中的 native 分辨率索引（<xref href="Ink_Canvas.Plugins.ICameraService.NativeResolutions" data-throw-if-not-resolved="false"></xref> 的索引）；-1 未选中。

```csharp
int SelectedResolutionIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Plugins_ICameraService_GetCurrentFrame"></a> GetCurrentFrame\(\)

获取当前帧位图（已 Freeze），用于拍照。

```csharp
BitmapSource GetCurrentFrame()
```

#### Returns

 [BitmapSource](https://learn.microsoft.com/dotnet/api/system.windows.media.imaging.bitmapsource)

### <a id="Ink_Canvas_Plugins_ICameraService_RefreshCameraListAsync"></a> RefreshCameraListAsync\(\)

刷新可用摄像头列表。

```csharp
Task RefreshCameraListAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Plugins_ICameraService_StartPreviewAsync_System_Int32_"></a> StartPreviewAsync\(int\)

启动指定摄像头（索引来自 <xref href="Ink_Canvas.Plugins.ICameraService.AvailableCameras" data-throw-if-not-resolved="false"></xref>）的预览。返回是否成功。

```csharp
Task<bool> StartPreviewAsync(int cameraIndex)
```

#### Parameters

`cameraIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Plugins_ICameraService_StopPreview"></a> StopPreview\(\)

停止预览。

```csharp
void StopPreview()
```

### <a id="Ink_Canvas_Plugins_ICameraService_FrameReceived"></a> FrameReceived

每收到一帧时触发（参数为已 Freeze 的位图）。

```csharp
event Action<BitmapSource> FrameReceived
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[BitmapSource](https://learn.microsoft.com/dotnet/api/system.windows.media.imaging.bitmapsource)\>

