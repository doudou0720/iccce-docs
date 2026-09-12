# <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing"></a> Class AsyncAdvancedBezierSmoothing

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

改进的异步硬件加速墨迹平滑处理器，使用优化的三次贝塞尔曲线拟合

```csharp
public class AsyncAdvancedBezierSmoothing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AsyncAdvancedBezierSmoothing](Ink\_Canvas.Helpers.AsyncAdvancedBezierSmoothing.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

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

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_InterpolationSteps"></a> InterpolationSteps

```csharp
public int InterpolationSteps { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_MaxConcurrentTasks"></a> MaxConcurrentTasks

```csharp
public int MaxConcurrentTasks { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

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

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_SmoothingStrength"></a> SmoothingStrength

```csharp
public double SmoothingStrength { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_UseAdaptiveInterpolation"></a> UseAdaptiveInterpolation

```csharp
public bool UseAdaptiveInterpolation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_UseHardwareAcceleration"></a> UseHardwareAcceleration

```csharp
public bool UseHardwareAcceleration { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

### <a id="Ink_Canvas_Helpers_AsyncAdvancedBezierSmoothing_SmoothStrokeAsync_Stroke_System_Action_Stroke_Stroke__System_Threading_CancellationToken_"></a> SmoothStrokeAsync\(Stroke, Action<Stroke, Stroke\>, CancellationToken\)

异步平滑笔画

```csharp
public Task<Stroke> SmoothStrokeAsync(Stroke originalStroke, Action<Stroke, Stroke> onCompleted = null, CancellationToken cancellationToken = default)
```

#### Parameters

`originalStroke` Stroke

`onCompleted` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<Stroke, Stroke\>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<Stroke\>

