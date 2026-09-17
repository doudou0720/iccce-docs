# <a id="Ink_Canvas_Helpers_BoothCameraProperty"></a> Enum BoothCameraProperty

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

视频展台可调摄像头属性枚举。映射到 DirectShow IAMVideoProcAmp / IAMCameraControl 的对应 property。

```csharp
public enum BoothCameraProperty
```

## Fields

`Brightness = 0` 

亮度（曝光度）- IAMVideoProcAmp.Brightness。绝大多数摄像头支持。



`Contrast = 1` 

对比度 - IAMVideoProcAmp.Contrast。



`Exposure = 6` 

快门（曝光时间）- IAMCameraControl.Exposure。多数 USB 摄像头仅 Auto；非手机绝对快门速度。



`Focus = 5` 

焦距（手动对焦）- IAMCameraControl.Focus。需有马达的镜头；定焦摄像头不支持。



`Gain = 4` 

增益（最接近手机 ISO 的概念）- IAMVideoProcAmp.Gain。DirectShow 无 ISO 概念。



`Saturation = 2` 

饱和度 - IAMVideoProcAmp.Saturation。



`WhiteBalance = 3` 

色温（白平衡）- IAMVideoProcAmp.WhiteBalance。需摄像头支持 Manual，否则只能 Auto。



