# <a id="Ink_Canvas_Helpers_HardwareAcceleratedInkProcessor"></a> Class HardwareAcceleratedInkProcessor

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

硬件加速的墨迹处理器，利用WPF的GPU渲染能力

```csharp
public class HardwareAcceleratedInkProcessor
```

#### Inheritance

object ← 
[HardwareAcceleratedInkProcessor](Ink\_Canvas.Helpers.HardwareAcceleratedInkProcessor.md)

## Constructors

### <a id="Ink_Canvas_Helpers_HardwareAcceleratedInkProcessor__ctor_System_Int32_System_Int32_"></a> HardwareAcceleratedInkProcessor\(int, int\)

```csharp
public HardwareAcceleratedInkProcessor(int width = 1920, int height = 1080)
```

#### Parameters

`width` int

`height` int

## Methods

### <a id="Ink_Canvas_Helpers_HardwareAcceleratedInkProcessor_Dispose"></a> Dispose\(\)

释放GPU相关资源标记

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_HardwareAcceleratedInkProcessor_ParallelBezierInterpolation_StylusPoint___System_Int32_"></a> ParallelBezierInterpolation\(StylusPoint\[\], int\)

使用GPU加速的并行贝塞尔计算

```csharp
public static StylusPoint[] ParallelBezierInterpolation(StylusPoint[] controlPoints, int segments = 32)
```

#### Parameters

`controlPoints` StylusPoint\[\]

`segments` int

#### Returns

 StylusPoint\[\]

### <a id="Ink_Canvas_Helpers_HardwareAcceleratedInkProcessor_SmoothStrokeWithGPU_Stroke_"></a> SmoothStrokeWithGPU\(Stroke\)

使用GPU加速的贝塞尔曲线平滑

```csharp
public Task<Stroke> SmoothStrokeWithGPU(Stroke originalStroke)
```

#### Parameters

`originalStroke` Stroke

#### Returns

 Task<Stroke\>

