# <a id="Ink_Canvas_Helpers_CameraService"></a> Class CameraService

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class CameraService : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CameraService](Ink\_Canvas.Helpers.CameraService.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

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

`rotationAngle` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`resolutionWidth` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`resolutionHeight` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="Ink_Canvas_Helpers_CameraService_AvailableCameras"></a> AvailableCameras

```csharp
public List<FilterInfo> AvailableCameras { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<FilterInfo\>

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_CameraService_ResolutionHeight"></a> ResolutionHeight

```csharp
public int ResolutionHeight { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_CameraService_ResolutionWidth"></a> ResolutionWidth

```csharp
public int ResolutionWidth { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_CameraService_RotationAngle"></a> RotationAngle

```csharp
public int RotationAngle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Helpers_CameraService_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_CameraService_GetCameraNames"></a> GetCameraNames\(\)

获取摄像头名称列表

```csharp
public List<string> GetCameraNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Helpers_CameraService_GetCurrentFrameAsBitmapSource"></a> GetCurrentFrameAsBitmapSource\(\)

获取当前帧的BitmapSource（WPF格式），直接返回可用的WPF位图

```csharp
public BitmapSource GetCurrentFrameAsBitmapSource()
```

#### Returns

 [BitmapSource](https://learn.microsoft.com/dotnet/api/system.windows.media.imaging.bitmapsource)

### <a id="Ink_Canvas_Helpers_CameraService_HasAvailableCameras"></a> HasAvailableCameras\(\)

检查是否有可用摄像头

```csharp
public bool HasAvailableCameras()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`cameraIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

摄像头索引

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`cameraIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

摄像头索引

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_CameraService_ErrorOccurred"></a> ErrorOccurred

```csharp
public event EventHandler<string> ErrorOccurred
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Helpers_CameraService_FrameReceived"></a> FrameReceived

```csharp
public event EventHandler<Bitmap> FrameReceived
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[Bitmap](https://learn.microsoft.com/dotnet/api/system.drawing.bitmap)\>

