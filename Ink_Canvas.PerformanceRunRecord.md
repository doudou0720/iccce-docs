# <a id="Ink_Canvas_PerformanceRunRecord"></a> Class PerformanceRunRecord

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

One session record in Configs/PerformanceHistory.json.
Default serialization omits zeros/nulls so normal CPU history stays compact.
Super-detailed realtime-ink fields are only populated when Debug 页开关开启.

```csharp
public class PerformanceRunRecord
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PerformanceRunRecord](Ink\_Canvas.PerformanceRunRecord.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_PerformanceRunRecord_AvgCpuPercent"></a> AvgCpuPercent

```csharp
public double AvgCpuPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_AvgMemoryMb"></a> AvgMemoryMb

```csharp
public double AvgMemoryMb { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_DurationSeconds"></a> DurationSeconds

```csharp
public double DurationSeconds { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_EndTime"></a> EndTime

```csharp
public string EndTime { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_PerformanceRunRecord_PeakCpuPercent"></a> PeakCpuPercent

```csharp
public double PeakCpuPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_PeakMemoryMb"></a> PeakMemoryMb

```csharp
public double PeakMemoryMb { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkActiveRedrawCount"></a> RealtimeInkActiveRedrawCount

```csharp
public long RealtimeInkActiveRedrawCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkAddedPointCount"></a> RealtimeInkAddedPointCount

```csharp
public long RealtimeInkAddedPointCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkByInputKind"></a> RealtimeInkByInputKind

```csharp
public Dictionary<string, RealtimeInkInputPerformanceSnapshot> RealtimeInkByInputKind { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [RealtimeInkInputPerformanceSnapshot](Ink\_Canvas.Helpers.RealtimeInkInputPerformanceSnapshot.md)\>

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkCommitCount"></a> RealtimeInkCommitCount

```csharp
public long RealtimeInkCommitCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkForceRedrawCount"></a> RealtimeInkForceRedrawCount

```csharp
public long RealtimeInkForceRedrawCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkFrameWaitSampleCount"></a> RealtimeInkFrameWaitSampleCount

```csharp
public long RealtimeInkFrameWaitSampleCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkInputEventCount"></a> RealtimeInkInputEventCount

```csharp
public long RealtimeInkInputEventCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxActiveRedrawMs"></a> RealtimeInkMaxActiveRedrawMs

```csharp
public double RealtimeInkMaxActiveRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxCommitRedrawMs"></a> RealtimeInkMaxCommitRedrawMs

```csharp
public double RealtimeInkMaxCommitRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxForceRedrawMs"></a> RealtimeInkMaxForceRedrawMs

```csharp
public double RealtimeInkMaxForceRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxFrameWaitMs"></a> RealtimeInkMaxFrameWaitMs

```csharp
public double RealtimeInkMaxFrameWaitMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxInputProcessingMs"></a> RealtimeInkMaxInputProcessingMs

```csharp
public double RealtimeInkMaxInputProcessingMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxNormalRedrawMs"></a> RealtimeInkMaxNormalRedrawMs

```csharp
public double RealtimeInkMaxNormalRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxRedrawMs"></a> RealtimeInkMaxRedrawMs

```csharp
public double RealtimeInkMaxRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkNormalRedrawCount"></a> RealtimeInkNormalRedrawCount

```csharp
public long RealtimeInkNormalRedrawCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkRawInputPointCount"></a> RealtimeInkRawInputPointCount

```csharp
public long RealtimeInkRawInputPointCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkRedrawCount"></a> RealtimeInkRedrawCount

```csharp
public long RealtimeInkRedrawCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkSlowEvents"></a> RealtimeInkSlowEvents

```csharp
public List<RealtimeInkSlowEventSnapshot> RealtimeInkSlowEvents { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[RealtimeInkSlowEventSnapshot](Ink\_Canvas.Helpers.RealtimeInkSlowEventSnapshot.md)\>

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkSlowInputOver1MsCount"></a> RealtimeInkSlowInputOver1MsCount

```csharp
public long RealtimeInkSlowInputOver1MsCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkSlowRedrawOver1MsCount"></a> RealtimeInkSlowRedrawOver1MsCount

```csharp
public long RealtimeInkSlowRedrawOver1MsCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkSlowRedrawOver3MsCount"></a> RealtimeInkSlowRedrawOver3MsCount

```csharp
public long RealtimeInkSlowRedrawOver3MsCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkSlowRedrawOver5MsCount"></a> RealtimeInkSlowRedrawOver5MsCount

```csharp
public long RealtimeInkSlowRedrawOver5MsCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkStrokeCount"></a> RealtimeInkStrokeCount

```csharp
public long RealtimeInkStrokeCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalActiveRedrawMs"></a> RealtimeInkTotalActiveRedrawMs

```csharp
public double RealtimeInkTotalActiveRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalCommitRedrawMs"></a> RealtimeInkTotalCommitRedrawMs

```csharp
public double RealtimeInkTotalCommitRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalForceRedrawMs"></a> RealtimeInkTotalForceRedrawMs

```csharp
public double RealtimeInkTotalForceRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalFrameWaitMs"></a> RealtimeInkTotalFrameWaitMs

```csharp
public double RealtimeInkTotalFrameWaitMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalInputProcessingMs"></a> RealtimeInkTotalInputProcessingMs

```csharp
public double RealtimeInkTotalInputProcessingMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalNormalRedrawMs"></a> RealtimeInkTotalNormalRedrawMs

```csharp
public double RealtimeInkTotalNormalRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalRedrawMs"></a> RealtimeInkTotalRedrawMs

```csharp
public double RealtimeInkTotalRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SampleCount"></a> SampleCount

```csharp
public int SampleCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingAvgBezierMs"></a> SmoothingAvgBezierMs

```csharp
public double SmoothingAvgBezierMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingAvgInputPoints"></a> SmoothingAvgInputPoints

```csharp
public double SmoothingAvgInputPoints { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingAvgOutputPoints"></a> SmoothingAvgOutputPoints

```csharp
public double SmoothingAvgOutputPoints { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingAvgResampleMs"></a> SmoothingAvgResampleMs

```csharp
public double SmoothingAvgResampleMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingAvgTotalMs"></a> SmoothingAvgTotalMs

```csharp
public double SmoothingAvgTotalMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingMaxTotalMs"></a> SmoothingMaxTotalMs

```csharp
public double SmoothingMaxTotalMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingSampleCount"></a> SmoothingSampleCount

```csharp
public int SmoothingSampleCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_PerformanceRunRecord_StartTime"></a> StartTime

```csharp
public string StartTime { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

