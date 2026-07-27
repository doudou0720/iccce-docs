# <a id="Ink_Canvas_Helpers_HardwareAcceleratedInkProcessor"></a> Class HardwareAcceleratedInkProcessor

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

硬件加速的墨迹处理器，利用WPF的GPU渲染能力

```csharp
public class HardwareAcceleratedInkProcessor : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HardwareAcceleratedInkProcessor](Ink\_Canvas.Helpers.HardwareAcceleratedInkProcessor.md)

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

### <a id="Ink_Canvas_Helpers_HardwareAcceleratedInkProcessor__ctor_System_Int32_System_Int32_"></a> HardwareAcceleratedInkProcessor\(int, int\)

```csharp
public HardwareAcceleratedInkProcessor(int width = 1920, int height = 1080)
```

#### Parameters

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`height` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Helpers_HardwareAcceleratedInkProcessor_Dispose"></a> Dispose\(\)

释放GPU相关资源。
先冻结 RenderTargetBitmap 让 WPF 停止依赖 GPU surface，再主动 Dispose 释放底层 GPU 句柄。
DrawingVisual 仅在 WeakReference 由 GC 回收，无显式释放 API，依靠 GC。

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_HardwareAcceleratedInkProcessor_ParallelBezierInterpolation_System_Windows_Input_StylusPoint___System_Int32_"></a> ParallelBezierInterpolation\(StylusPoint\[\], int\)

使用GPU加速的并行贝塞尔计算

```csharp
public static StylusPoint[] ParallelBezierInterpolation(StylusPoint[] controlPoints, int segments = 32)
```

#### Parameters

`controlPoints` [StylusPoint](https://learn.microsoft.com/dotnet/api/system.windows.input.styluspoint)\[\]

`segments` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [StylusPoint](https://learn.microsoft.com/dotnet/api/system.windows.input.styluspoint)\[\]

### <a id="Ink_Canvas_Helpers_HardwareAcceleratedInkProcessor_SmoothStrokeWithGPU_System_Windows_Ink_Stroke_"></a> SmoothStrokeWithGPU\(Stroke\)

使用GPU加速的贝塞尔曲线平滑

```csharp
public Task<Stroke> SmoothStrokeWithGPU(Stroke originalStroke)
```

#### Parameters

`originalStroke` [Stroke](https://learn.microsoft.com/dotnet/api/system.windows.ink.stroke)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[Stroke](https://learn.microsoft.com/dotnet/api/system.windows.ink.stroke)\>

