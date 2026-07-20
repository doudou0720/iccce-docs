# <a id="Ink_Canvas_Helpers_ICameraService"></a> Interface ICameraService

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

视频展台摄像头服务的抽象接口，AForge (Win7+) 和 WinRT (Win10+) 各自实现。

```csharp
public interface ICameraService : IDisposable
```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### <a id="Ink_Canvas_Helpers_ICameraService_AvailableCameras"></a> AvailableCameras

```csharp
IReadOnlyList<CameraInfo> AvailableCameras { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CameraInfo](Ink\_Canvas.Helpers.CameraInfo.md)\>

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

当前摄像头支持的 native 分辨率列表（可能为空，表示设备未提供）。

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

### <a id="Ink_Canvas_Helpers_ICameraService_SelectedResolutionIndex"></a> SelectedResolutionIndex

当前选中的 native 分辨率索引；-1 表示未选中。

```csharp
int SelectedResolutionIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Helpers_ICameraService_GetCurrentFrameAsBitmap"></a> GetCurrentFrameAsBitmap\(\)

获取当前帧的 GDI+ Bitmap（用于拍照后的图像处理，调用方负责 Dispose）。

```csharp
Bitmap GetCurrentFrameAsBitmap()
```

#### Returns

 [Bitmap](https://learn.microsoft.com/dotnet/api/system.drawing.bitmap)

### <a id="Ink_Canvas_Helpers_ICameraService_GetCurrentFrameAsBitmapSource"></a> GetCurrentFrameAsBitmapSource\(\)

获取当前帧的 WPF 位图（已 Freeze）。

```csharp
BitmapSource GetCurrentFrameAsBitmapSource()
```

#### Returns

 [BitmapSource](https://learn.microsoft.com/dotnet/api/system.windows.media.imaging.bitmapsource)

### <a id="Ink_Canvas_Helpers_ICameraService_RefreshCameraListAsync"></a> RefreshCameraListAsync\(\)

刷新可用摄像头列表。返回 Task 以便调用方 await（AForge 同步完成，WinRT 异步完成）。
调用完成后 <xref href="Ink_Canvas.Helpers.ICameraService.AvailableCameras" data-throw-if-not-resolved="false"></xref> 已就绪。

```csharp
Task RefreshCameraListAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Helpers_ICameraService_StartPreviewAsync_System_Int32_"></a> StartPreviewAsync\(int\)

启动指定摄像头的预览。会刷新 NativeResolutions。返回 Task 以避免阻塞 UI 线程（WinRT 实现是异步的）。

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

每收到一帧时触发（参数为已 Freeze 的 BitmapSource，可跨线程）。

```csharp
event EventHandler<FrameEventArgs> FrameReceived
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[FrameEventArgs](Ink\_Canvas.Helpers.FrameEventArgs.md)\>

