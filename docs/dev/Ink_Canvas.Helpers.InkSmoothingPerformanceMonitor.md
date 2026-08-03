# <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor"></a> Class InkSmoothingPerformanceMonitor

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

性能监控器（含分阶段计时）

```csharp
public class InkSmoothingPerformanceMonitor
```

#### Inheritance

object ← 
[InkSmoothingPerformanceMonitor](Ink\_Canvas.Helpers.InkSmoothingPerformanceMonitor.md)

## Methods

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageBezierTimeMs"></a> GetAverageBezierTimeMs\(\)

```csharp
public double GetAverageBezierTimeMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageComputeMs"></a> GetAverageComputeMs\(\)

```csharp
public double GetAverageComputeMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageDispatcherWaitMs"></a> GetAverageDispatcherWaitMs\(\)

```csharp
public double GetAverageDispatcherWaitMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageInputPointCount"></a> GetAverageInputPointCount\(\)

```csharp
public double GetAverageInputPointCount()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageOutputPointCount"></a> GetAverageOutputPointCount\(\)

```csharp
public double GetAverageOutputPointCount()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAveragePointCopyMs"></a> GetAveragePointCopyMs\(\)

```csharp
public double GetAveragePointCopyMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageProcessingTimeMs"></a> GetAverageProcessingTimeMs\(\)

```csharp
public double GetAverageProcessingTimeMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageResampleTimeMs"></a> GetAverageResampleTimeMs\(\)

```csharp
public double GetAverageResampleTimeMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageSemaphoreWaitMs"></a> GetAverageSemaphoreWaitMs\(\)

```csharp
public double GetAverageSemaphoreWaitMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageStrokeConstructionMs"></a> GetAverageStrokeConstructionMs\(\)

```csharp
public double GetAverageStrokeConstructionMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageThreadPoolQueueMs"></a> GetAverageThreadPoolQueueMs\(\)

```csharp
public double GetAverageThreadPoolQueueMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageUiCallbackMs"></a> GetAverageUiCallbackMs\(\)

```csharp
public double GetAverageUiCallbackMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetMaxComputeMs"></a> GetMaxComputeMs\(\)

```csharp
public double GetMaxComputeMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetMaxDispatcherWaitMs"></a> GetMaxDispatcherWaitMs\(\)

```csharp
public double GetMaxDispatcherWaitMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetMaxPointCopyMs"></a> GetMaxPointCopyMs\(\)

```csharp
public double GetMaxPointCopyMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetMaxProcessingTimeMs"></a> GetMaxProcessingTimeMs\(\)

```csharp
public double GetMaxProcessingTimeMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetMaxSemaphoreWaitMs"></a> GetMaxSemaphoreWaitMs\(\)

```csharp
public double GetMaxSemaphoreWaitMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetMaxStrokeConstructionMs"></a> GetMaxStrokeConstructionMs\(\)

```csharp
public double GetMaxStrokeConstructionMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetMaxThreadPoolQueueMs"></a> GetMaxThreadPoolQueueMs\(\)

```csharp
public double GetMaxThreadPoolQueueMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetMaxUiCallbackMs"></a> GetMaxUiCallbackMs\(\)

```csharp
public double GetMaxUiCallbackMs()
```

#### Returns

 double

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetSampleCount"></a> GetSampleCount\(\)

```csharp
public int GetSampleCount()
```

#### Returns

 int

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetSamples"></a> GetSamples\(\)

```csharp
public List<InkSmoothingPipelineSample> GetSamples()
```

#### Returns

 List<[InkSmoothingPipelineSample](Ink\_Canvas.Helpers.InkSmoothingPipelineSample.md)\>

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_RecordPipelineSample_Ink_Canvas_Helpers_InkSmoothingPipelineSample_"></a> RecordPipelineSample\(InkSmoothingPipelineSample\)

```csharp
public void RecordPipelineSample(InkSmoothingPipelineSample sample)
```

#### Parameters

`sample` [InkSmoothingPipelineSample](Ink\_Canvas.Helpers.InkSmoothingPipelineSample.md)

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_RecordProcessingTime_TimeSpan_"></a> RecordProcessingTime\(TimeSpan\)

```csharp
public void RecordProcessingTime(TimeSpan time)
```

#### Parameters

`time` TimeSpan

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_Reset"></a> Reset\(\)

```csharp
public void Reset()
```

