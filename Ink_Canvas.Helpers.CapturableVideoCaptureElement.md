# <a id="Ink_Canvas_Helpers_CapturableVideoCaptureElement"></a> Class CapturableVideoCaptureElement

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

继承自 WPFMediaKit 的 VideoCaptureElement，额外暴露从 D3DImage 直接拍照的能力。
参考 EasiCamera.Control.CameraPreviewer：
  public BitmapSource CameraImage =&gt; base.D3DImage.GetBitmapSource();
D3DImage 属性是 protected，只能在子类中访问。

```csharp
public class CapturableVideoCaptureElement : VideoCaptureElement
```

#### Inheritance

VideoCaptureElement ← 
[CapturableVideoCaptureElement](Ink\_Canvas.Helpers.CapturableVideoCaptureElement.md)

## Remarks

拍照路径：CaptureCurrentFrame() —— 直接从 D3DImage.CopyBackBuffer 拿 BitmapSource（GPU 内存拷贝）。
不依赖 NewVideoSample 事件：VMR9 Renderless 模式下 SampleGrabber 无法连入图，事件不触发。
D3DImage.CopyBackBuffer 是 protected virtual 方法，返回 BitmapSource，
反射调用可绕过可见性。WPF 的 D3DImage 在子类中可以通过 D3DImage 属性拿到引用。

## Properties

### <a id="Ink_Canvas_Helpers_CapturableVideoCaptureElement_IsFrontBufferAvailable"></a> IsFrontBufferAvailable

当前 D3DImage 的前端缓冲是否就绪（可用于拍照）。

```csharp
public bool IsFrontBufferAvailable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Helpers_CapturableVideoCaptureElement_CaptureCurrentFrame"></a> CaptureCurrentFrame\(\)

从当前 D3DImage 拷贝一帧为 BitmapSource（线程安全，可跨线程使用）。
返回 null 表示当前没有可用帧（如设备未打开/前端缓冲未就绪）。

```csharp
public BitmapSource CaptureCurrentFrame()
```

#### Returns

 BitmapSource

