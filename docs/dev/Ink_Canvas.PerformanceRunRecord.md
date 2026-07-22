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
[JsonProperty("avgCpuPercent", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double AvgCpuPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_AvgMemoryMb"></a> AvgMemoryMb

```csharp
[JsonProperty("avgMemoryMb", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double AvgMemoryMb { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_DurationSeconds"></a> DurationSeconds

```csharp
[JsonProperty("durationSeconds", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double DurationSeconds { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_EndTime"></a> EndTime

```csharp
[JsonProperty("endTime")]
public string EndTime { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_PerformanceRunRecord_PeakCpuPercent"></a> PeakCpuPercent

```csharp
[JsonProperty("peakCpuPercent", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double PeakCpuPercent { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_PeakMemoryMb"></a> PeakMemoryMb

```csharp
[JsonProperty("peakMemoryMb", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double PeakMemoryMb { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkActiveRedrawCount"></a> RealtimeInkActiveRedrawCount

```csharp
[JsonProperty("realtimeInkActiveRedrawCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkActiveRedrawCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkAddedPointCount"></a> RealtimeInkAddedPointCount

```csharp
[JsonProperty("realtimeInkAddedPointCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkAddedPointCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkByInputKind"></a> RealtimeInkByInputKind

```csharp
[JsonProperty("realtimeInkByInputKind", NullValueHandling = NullValueHandling.Ignore)]
public Dictionary<string, RealtimeInkInputPerformanceSnapshot> RealtimeInkByInputKind { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [RealtimeInkInputPerformanceSnapshot](Ink\_Canvas.Helpers.RealtimeInkInputPerformanceSnapshot.md)\>

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkCommitCount"></a> RealtimeInkCommitCount

```csharp
[JsonProperty("realtimeInkCommitCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkCommitCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkForceRedrawCount"></a> RealtimeInkForceRedrawCount

```csharp
[JsonProperty("realtimeInkForceRedrawCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkForceRedrawCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkFrameWaitSampleCount"></a> RealtimeInkFrameWaitSampleCount

```csharp
[JsonProperty("realtimeInkFrameWaitSampleCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkFrameWaitSampleCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkInputEventCount"></a> RealtimeInkInputEventCount

```csharp
[JsonProperty("realtimeInkInputEventCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkInputEventCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxActiveRedrawMs"></a> RealtimeInkMaxActiveRedrawMs

```csharp
[JsonProperty("realtimeInkMaxActiveRedrawMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkMaxActiveRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxCommitRedrawMs"></a> RealtimeInkMaxCommitRedrawMs

```csharp
[JsonProperty("realtimeInkMaxCommitRedrawMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkMaxCommitRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxForceRedrawMs"></a> RealtimeInkMaxForceRedrawMs

```csharp
[JsonProperty("realtimeInkMaxForceRedrawMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkMaxForceRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxFrameWaitMs"></a> RealtimeInkMaxFrameWaitMs

```csharp
[JsonProperty("realtimeInkMaxFrameWaitMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkMaxFrameWaitMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxInputProcessingMs"></a> RealtimeInkMaxInputProcessingMs

```csharp
[JsonProperty("realtimeInkMaxInputProcessingMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkMaxInputProcessingMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxNormalRedrawMs"></a> RealtimeInkMaxNormalRedrawMs

```csharp
[JsonProperty("realtimeInkMaxNormalRedrawMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkMaxNormalRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkMaxRedrawMs"></a> RealtimeInkMaxRedrawMs

```csharp
[JsonProperty("realtimeInkMaxRedrawMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkMaxRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkNormalRedrawCount"></a> RealtimeInkNormalRedrawCount

```csharp
[JsonProperty("realtimeInkNormalRedrawCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkNormalRedrawCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkRawInputPointCount"></a> RealtimeInkRawInputPointCount

```csharp
[JsonProperty("realtimeInkRawInputPointCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkRawInputPointCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkRedrawCount"></a> RealtimeInkRedrawCount

```csharp
[JsonProperty("realtimeInkRedrawCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkRedrawCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkSlowEvents"></a> RealtimeInkSlowEvents

```csharp
[JsonProperty("realtimeInkSlowEvents", NullValueHandling = NullValueHandling.Ignore)]
public List<RealtimeInkSlowEventSnapshot> RealtimeInkSlowEvents { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[RealtimeInkSlowEventSnapshot](Ink\_Canvas.Helpers.RealtimeInkSlowEventSnapshot.md)\>

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkSlowInputOver1MsCount"></a> RealtimeInkSlowInputOver1MsCount

```csharp
[JsonProperty("realtimeInkSlowInputOver1MsCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkSlowInputOver1MsCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkSlowRedrawOver1MsCount"></a> RealtimeInkSlowRedrawOver1MsCount

```csharp
[JsonProperty("realtimeInkSlowRedrawOver1MsCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkSlowRedrawOver1MsCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkSlowRedrawOver3MsCount"></a> RealtimeInkSlowRedrawOver3MsCount

```csharp
[JsonProperty("realtimeInkSlowRedrawOver3MsCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkSlowRedrawOver3MsCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkSlowRedrawOver5MsCount"></a> RealtimeInkSlowRedrawOver5MsCount

```csharp
[JsonProperty("realtimeInkSlowRedrawOver5MsCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkSlowRedrawOver5MsCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkStrokeCount"></a> RealtimeInkStrokeCount

```csharp
[JsonProperty("realtimeInkStrokeCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public long RealtimeInkStrokeCount { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalActiveRedrawMs"></a> RealtimeInkTotalActiveRedrawMs

```csharp
[JsonProperty("realtimeInkTotalActiveRedrawMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkTotalActiveRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalCommitRedrawMs"></a> RealtimeInkTotalCommitRedrawMs

```csharp
[JsonProperty("realtimeInkTotalCommitRedrawMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkTotalCommitRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalForceRedrawMs"></a> RealtimeInkTotalForceRedrawMs

```csharp
[JsonProperty("realtimeInkTotalForceRedrawMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkTotalForceRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalFrameWaitMs"></a> RealtimeInkTotalFrameWaitMs

```csharp
[JsonProperty("realtimeInkTotalFrameWaitMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkTotalFrameWaitMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalInputProcessingMs"></a> RealtimeInkTotalInputProcessingMs

```csharp
[JsonProperty("realtimeInkTotalInputProcessingMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkTotalInputProcessingMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalNormalRedrawMs"></a> RealtimeInkTotalNormalRedrawMs

```csharp
[JsonProperty("realtimeInkTotalNormalRedrawMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkTotalNormalRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_RealtimeInkTotalRedrawMs"></a> RealtimeInkTotalRedrawMs

```csharp
[JsonProperty("realtimeInkTotalRedrawMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double RealtimeInkTotalRedrawMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SampleCount"></a> SampleCount

```csharp
[JsonProperty("sampleCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public int SampleCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingAvgBezierMs"></a> SmoothingAvgBezierMs

```csharp
[JsonProperty("smoothingAvgBezierMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double SmoothingAvgBezierMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingAvgInputPoints"></a> SmoothingAvgInputPoints

```csharp
[JsonProperty("smoothingAvgInputPoints", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double SmoothingAvgInputPoints { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingAvgOutputPoints"></a> SmoothingAvgOutputPoints

```csharp
[JsonProperty("smoothingAvgOutputPoints", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double SmoothingAvgOutputPoints { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingAvgResampleMs"></a> SmoothingAvgResampleMs

```csharp
[JsonProperty("smoothingAvgResampleMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double SmoothingAvgResampleMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingAvgTotalMs"></a> SmoothingAvgTotalMs

```csharp
[JsonProperty("smoothingAvgTotalMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double SmoothingAvgTotalMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingMaxTotalMs"></a> SmoothingMaxTotalMs

```csharp
[JsonProperty("smoothingMaxTotalMs", DefaultValueHandling = DefaultValueHandling.Ignore)]
public double SmoothingMaxTotalMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_PerformanceRunRecord_SmoothingSampleCount"></a> SmoothingSampleCount

```csharp
[JsonProperty("smoothingSampleCount", DefaultValueHandling = DefaultValueHandling.Ignore)]
public int SmoothingSampleCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_PerformanceRunRecord_StartTime"></a> StartTime

```csharp
[JsonProperty("startTime")]
public string StartTime { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

