# <a id="Ink_Canvas_Helpers_WinRtCameraService"></a> Class WinRtCameraService

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

基于 WinRT MediaFrameReader 的摄像头服务实现，Win10 1607+ 可用。
相比 AForge DirectShow 性能更高（SoftwareBitmap 路径，无 GDI+ 中转）。

```csharp
public sealed class WinRtCameraService : ICameraService, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WinRtCameraService](Ink\_Canvas.Helpers.WinRtCameraService.md)

#### Implements

[ICameraService](Ink\_Canvas.Helpers.ICameraService.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_WinRtCameraService__ctor"></a> WinRtCameraService\(\)

```csharp
public WinRtCameraService()
```

## Properties

### <a id="Ink_Canvas_Helpers_WinRtCameraService_AvailableCameras"></a> AvailableCameras

```csharp
public IReadOnlyList<CameraInfo> AvailableCameras { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CameraInfo](Ink\_Canvas.Helpers.CameraInfo.md)\>

### <a id="Ink_Canvas_Helpers_WinRtCameraService_CurrentCamera"></a> CurrentCamera

```csharp
public CameraInfo CurrentCamera { get; }
```

#### Property Value

 [CameraInfo](Ink\_Canvas.Helpers.CameraInfo.md)

### <a id="Ink_Canvas_Helpers_WinRtCameraService_IsCapturing"></a> IsCapturing

```csharp
public bool IsCapturing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_WinRtCameraService_NativeResolutions"></a> NativeResolutions

当前摄像头支持的 native 分辨率列表（可能为空，表示设备未提供）。

```csharp
public IReadOnlyList<ResolutionInfo> NativeResolutions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ResolutionInfo](Ink\_Canvas.Helpers.ResolutionInfo.md)\>

### <a id="Ink_Canvas_Helpers_WinRtCameraService_RotationAngle"></a> RotationAngle

0=0°, 1=90°, 2=180°, 3=270°。

```csharp
public int RotationAngle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_WinRtCameraService_SelectedResolutionIndex"></a> SelectedResolutionIndex

当前选中的 native 分辨率索引；-1 表示未选中。

```csharp
public int SelectedResolutionIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Helpers_WinRtCameraService_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_WinRtCameraService_GetCurrentFrameAsBitmap"></a> GetCurrentFrameAsBitmap\(\)

获取当前帧的 GDI+ Bitmap（用于拍照后的图像处理，调用方负责 Dispose）。

```csharp
public Bitmap GetCurrentFrameAsBitmap()
```

#### Returns

 [Bitmap](https://learn.microsoft.com/dotnet/api/system.drawing.bitmap)

### <a id="Ink_Canvas_Helpers_WinRtCameraService_GetCurrentFrameAsBitmapSource"></a> GetCurrentFrameAsBitmapSource\(\)

获取当前帧的 WPF 位图（已 Freeze）。

```csharp
public BitmapSource GetCurrentFrameAsBitmapSource()
```

#### Returns

 [BitmapSource](https://learn.microsoft.com/dotnet/api/system.windows.media.imaging.bitmapsource)

### <a id="Ink_Canvas_Helpers_WinRtCameraService_RefreshCameraListAsync"></a> RefreshCameraListAsync\(\)

刷新可用摄像头列表（WinRT 异步实现，调用方应 await）。

```csharp
public Task RefreshCameraListAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Helpers_WinRtCameraService_StartPreviewAsync_System_Int32_"></a> StartPreviewAsync\(int\)

启动指定摄像头的预览。会刷新 NativeResolutions。返回 Task 以避免阻塞 UI 线程（WinRT 实现是异步的）。

```csharp
public Task<bool> StartPreviewAsync(int cameraIndex = 0)
```

#### Parameters

`cameraIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Helpers_WinRtCameraService_StopPreview"></a> StopPreview\(\)

同步停止预览：立即清理本地字段（避免阻塞 UI 线程），异步等待 reader.StopAsync 在后台进行。

```csharp
public void StopPreview()
```

### <a id="Ink_Canvas_Helpers_WinRtCameraService_ErrorOccurred"></a> ErrorOccurred

发生错误时触发，参数为错误描述。

```csharp
public event EventHandler<string> ErrorOccurred
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Helpers_WinRtCameraService_FrameReceived"></a> FrameReceived

每收到一帧时触发（参数为已 Freeze 的 BitmapSource，可跨线程）。

```csharp
public event EventHandler<FrameEventArgs> FrameReceived
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[FrameEventArgs](Ink\_Canvas.Helpers.FrameEventArgs.md)\>

