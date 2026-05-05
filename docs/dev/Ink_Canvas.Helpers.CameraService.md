# <a id="Ink_Canvas_Helpers_CameraService"></a> Class CameraService

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class CameraService : IDisposable
```

#### Inheritance

IDisposable ← 
[CameraService](Ink\_Canvas.Helpers.CameraService.md)

## Constructors

### <a id="Ink_Canvas_Helpers_CameraService__ctor"></a> CameraService\(\)

```csharp
public CameraService()
```

### <a id="Ink_Canvas_Helpers_CameraService__ctor_System_Int32_System_Int32_System_Int32_"></a> CameraService\(int, int, int\)

```csharp
public CameraService(int rotationAngle, int resolutionWidth, int resolutionHeight)
```

#### Parameters

`rotationAngle` int

`resolutionWidth` int

`resolutionHeight` int

## Properties

### <a id="Ink_Canvas_Helpers_CameraService_AvailableCameras"></a> AvailableCameras

```csharp
public List<FilterInfo> AvailableCameras { get; }
```

#### Property Value

 List<FilterInfo\>

### <a id="Ink_Canvas_Helpers_CameraService_CurrentCamera"></a> CurrentCamera

```csharp
public FilterInfo CurrentCamera { get; }
```

#### Property Value

 FilterInfo

### <a id="Ink_Canvas_Helpers_CameraService_IsCapturing"></a> IsCapturing

```csharp
public bool IsCapturing { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_CameraService_ResolutionHeight"></a> ResolutionHeight

```csharp
public int ResolutionHeight { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_CameraService_ResolutionWidth"></a> ResolutionWidth

```csharp
public int ResolutionWidth { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_CameraService_RotationAngle"></a> RotationAngle

```csharp
public int RotationAngle { get; set; }
```

#### Property Value

 int

## Methods

### <a id="Ink_Canvas_Helpers_CameraService_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_CameraService_GetCameraNames"></a> GetCameraNames\(\)

获取摄像头名称列表

```csharp
public List<string> GetCameraNames()
```

#### Returns

 List<string\>

### <a id="Ink_Canvas_Helpers_CameraService_GetCurrentFrameAsBitmapSource"></a> GetCurrentFrameAsBitmapSource\(\)

获取当前帧的BitmapSource（WPF格式），直接返回可用的WPF位图

```csharp
public BitmapSource GetCurrentFrameAsBitmapSource()
```

#### Returns

 BitmapSource

### <a id="Ink_Canvas_Helpers_CameraService_HasAvailableCameras"></a> HasAvailableCameras\(\)

检查是否有可用摄像头

```csharp
public bool HasAvailableCameras()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_CameraService_RefreshCameraList"></a> RefreshCameraList\(\)

刷新可用摄像头列表

```csharp
public void RefreshCameraList()
```

### <a id="Ink_Canvas_Helpers_CameraService_StartPreview_System_Int32_"></a> StartPreview\(int\)

开始摄像头预览

```csharp
public bool StartPreview(int cameraIndex = 0)
```

#### Parameters

`cameraIndex` int

摄像头索引

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_CameraService_StopPreview"></a> StopPreview\(\)

停止摄像头预览

```csharp
public void StopPreview()
```

### <a id="Ink_Canvas_Helpers_CameraService_SwitchCamera_System_Int32_"></a> SwitchCamera\(int\)

切换到指定摄像头

```csharp
public bool SwitchCamera(int cameraIndex)
```

#### Parameters

`cameraIndex` int

摄像头索引

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_CameraService_ErrorOccurred"></a> ErrorOccurred

```csharp
public event EventHandler<string> ErrorOccurred
```

#### Event Type

 EventHandler<string\>

### <a id="Ink_Canvas_Helpers_CameraService_FrameReceived"></a> FrameReceived

```csharp
public event EventHandler<Bitmap> FrameReceived
```

#### Event Type

 EventHandler<Bitmap\>

