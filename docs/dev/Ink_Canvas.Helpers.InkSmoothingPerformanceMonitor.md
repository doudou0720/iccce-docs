# <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor"></a> Class InkSmoothingPerformanceMonitor

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

性能监控器（含分阶段计时）

```csharp
public class InkSmoothingPerformanceMonitor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InkSmoothingPerformanceMonitor](Ink\_Canvas.Helpers.InkSmoothingPerformanceMonitor.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageBezierTimeMs"></a> GetAverageBezierTimeMs\(\)

```csharp
public double GetAverageBezierTimeMs()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageInputPointCount"></a> GetAverageInputPointCount\(\)

```csharp
public double GetAverageInputPointCount()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageOutputPointCount"></a> GetAverageOutputPointCount\(\)

```csharp
public double GetAverageOutputPointCount()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageProcessingTimeMs"></a> GetAverageProcessingTimeMs\(\)

```csharp
public double GetAverageProcessingTimeMs()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetAverageResampleTimeMs"></a> GetAverageResampleTimeMs\(\)

```csharp
public double GetAverageResampleTimeMs()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetMaxProcessingTimeMs"></a> GetMaxProcessingTimeMs\(\)

```csharp
public double GetMaxProcessingTimeMs()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_GetSampleCount"></a> GetSampleCount\(\)

```csharp
public int GetSampleCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_RecordBezierTime_System_TimeSpan_"></a> RecordBezierTime\(TimeSpan\)

```csharp
public void RecordBezierTime(TimeSpan time)
```

#### Parameters

`time` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_RecordPointCounts_System_Int32_System_Int32_"></a> RecordPointCounts\(int, int\)

```csharp
public void RecordPointCounts(int inputCount, int outputCount)
```

#### Parameters

`inputCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`outputCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_RecordProcessingTime_System_TimeSpan_"></a> RecordProcessingTime\(TimeSpan\)

```csharp
public void RecordProcessingTime(TimeSpan time)
```

#### Parameters

`time` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

### <a id="Ink_Canvas_Helpers_InkSmoothingPerformanceMonitor_RecordResampleTime_System_TimeSpan_"></a> RecordResampleTime\(TimeSpan\)

```csharp
public void RecordResampleTime(TimeSpan time)
```

#### Parameters

`time` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

