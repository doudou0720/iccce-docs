# <a id="Ink_Canvas_Helpers_CameraServiceFactory"></a> Class CameraServiceFactory

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

摄像头服务工厂。
统一返回 <xref href="Ink_Canvas.Helpers.DirectShowCameraService" data-throw-if-not-resolved="false"></xref>（基于 DirectShowLib + SampleGrabber），
不再依赖 AForge.Video / WinRT MediaFrameReader。
视频展台特殊模式（全屏预览）走 MainWindow.VideoPresenterFullCanvasImage（WPFMediaKit VideoCaptureElement）。

```csharp
public static class CameraServiceFactory
```

#### Inheritance

object ← 
[CameraServiceFactory](Ink\_Canvas.Helpers.CameraServiceFactory.md)

## Methods

### <a id="Ink_Canvas_Helpers_CameraServiceFactory_Create"></a> Create\(\)

创建一个新的摄像头服务实例。调用方负责 Dispose。

```csharp
public static ICameraService Create()
```

#### Returns

 [ICameraService](Ink\_Canvas.Helpers.ICameraService.md)

