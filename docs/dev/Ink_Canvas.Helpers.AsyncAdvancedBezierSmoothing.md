# <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing"></a> Class AsyncAdvancedBezierSmoothing

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

改进的异步硬件加速墨迹平滑处理器，使用优化的三次贝塞尔曲线拟合

```csharp
public class AsyncAdvancedBezierSmoothing
```

#### Inheritance

object ← 
[AsyncAdvancedBezierSmoothing](Ink\_Canvas.Helpers.AsyncAdvancedBezierSmoothing.md)

## Constructors

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing__ctor_Dispatcher_"></a> AsyncAdvancedBezierSmoothing\(Dispatcher\)

```csharp
public AsyncAdvancedBezierSmoothing(Dispatcher uiDispatcher)
```

#### Parameters

`uiDispatcher` Dispatcher

## Properties

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_CurveTension"></a> CurveTension

```csharp
public double CurveTension { get; set; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_InterpolationSteps"></a> InterpolationSteps

```csharp
public int InterpolationSteps { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_MaxConcurrentTasks"></a> MaxConcurrentTasks

```csharp
public int MaxConcurrentTasks { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_PerformanceMonitor"></a> PerformanceMonitor

可选的性能监控器，由 InkSmoothingManager 注入

```csharp
public InkSmoothingPerformanceMonitor PerformanceMonitor { get; set; }
```

#### Property Value

 [InkSmoothingPerformanceMonitor](Ink\_Canvas.Helpers.InkSmoothingPerformanceMonitor.md)

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_ResampleInterval"></a> ResampleInterval

```csharp
public double ResampleInterval { get; set; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_SmoothingStrength"></a> SmoothingStrength

```csharp
public double SmoothingStrength { get; set; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_UseAdaptiveInterpolation"></a> UseAdaptiveInterpolation

```csharp
public bool UseAdaptiveInterpolation { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_UseHardwareAcceleration"></a> UseHardwareAcceleration

```csharp
public bool UseHardwareAcceleration { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_CancelAllTasks"></a> CancelAllTasks\(\)

取消所有正在进行的处理任务

```csharp
public void CancelAllTasks()
```

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_Dispose"></a> Dispose\(\)

释放资源

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_SmoothStrokeAsync_Stroke_Action_Stroke_Stroke__CancellationToken_"></a> SmoothStrokeAsync\(Stroke, Action<Stroke, Stroke\>, CancellationToken\)

异步平滑笔画

```csharp
public Task<Stroke> SmoothStrokeAsync(Stroke originalStroke, Action<Stroke, Stroke> onCompleted = null, CancellationToken cancellationToken = null)
```

#### Parameters

`originalStroke` Stroke

`onCompleted` Action<Stroke, Stroke\>

`cancellationToken` CancellationToken

#### Returns

 Task<Stroke\>

