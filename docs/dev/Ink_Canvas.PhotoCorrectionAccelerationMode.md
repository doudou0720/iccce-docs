# <a id="Ink_Canvas_PhotoCorrectionAccelerationMode"></a> Enum PhotoCorrectionAccelerationMode

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

照片矫正加速模式。CPU：纯 CPU 计算，兼容性最好。
OpenCL：GPU 通用加速（NVIDIA/AMD/Intel 集显均可，需驱动支持）。
CUDA：仅 NVIDIA 显卡，需 OpenCvSharp4WithCuda 包 + 本地 CUDA runtime，否则自动回退到 OpenCL。

```csharp
public enum PhotoCorrectionAccelerationMode
```

## Fields

`CUDA = 2` 

`Cpu = 0` 

`OpenCL = 1` 

