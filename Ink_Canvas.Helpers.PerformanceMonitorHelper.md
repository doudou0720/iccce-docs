# <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper"></a> Class PerformanceMonitorHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Monitors CPU/memory usage during app runtime and manages performance history.

```csharp
public static class PerformanceMonitorHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PerformanceMonitorHelper](Ink\_Canvas.Helpers.PerformanceMonitorHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_CurrentAvgCpu"></a> CurrentAvgCpu

Current session's average CPU percent (updated on each sample).

```csharp
public static double CurrentAvgCpu { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_CurrentMemoryMb"></a> CurrentMemoryMb

Current session's current memory in MB.

```csharp
public static double CurrentMemoryMb { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_CurrentSystemCpuPercent"></a> CurrentSystemCpuPercent

Current system-wide CPU usage percent.

```csharp
public static double CurrentSystemCpuPercent { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_IsMonitoring"></a> IsMonitoring

Whether monitoring is active.

```csharp
public static bool IsMonitoring { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_SampleCount"></a> SampleCount

Number of samples collected this session.

```csharp
public static int SampleCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_ClearHistory"></a> ClearHistory\(\)

Clears all history records.

```csharp
public static void ClearHistory()
```

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_LoadHistory"></a> LoadHistory\(\)

Loads run history from disk.

```csharp
public static List<PerformanceRunRecord> LoadHistory()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PerformanceRunRecord](Ink\_Canvas.PerformanceRunRecord.md)\>

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_RunDeviceEvaluationAsync"></a> RunDeviceEvaluationAsync\(\)

Runs device performance evaluation asynchronously.
Returns (overallScore, cpuScore, memoryScore, diskScore).

```csharp
public static Task<(int overall, int cpu, int memory, int disk)> RunDeviceEvaluationAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<\([int](https://learn.microsoft.com/dotnet/api/system.int32) [overall](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32,system.int32,system.int32\-.overall), [int](https://learn.microsoft.com/dotnet/api/system.int32) [cpu](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32,system.int32,system.int32\-.cpu), [int](https://learn.microsoft.com/dotnet/api/system.int32) [memory](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32,system.int32,system.int32\-.memory), [int](https://learn.microsoft.com/dotnet/api/system.int32) [disk](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32,system.int32,system.int32\-.disk)\)\>

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_SaveHistory_System_Collections_Generic_List_Ink_Canvas_PerformanceRunRecord__"></a> SaveHistory\(List<PerformanceRunRecord\>\)

Saves history list to disk.

```csharp
public static void SaveHistory(List<PerformanceRunRecord> history)
```

#### Parameters

`history` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PerformanceRunRecord](Ink\_Canvas.PerformanceRunRecord.md)\>

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_Start"></a> Start\(\)

Starts the monitoring loop.

```csharp
public static void Start()
```

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_StartIfEnabled"></a> StartIfEnabled\(\)

Starts monitoring if enabled in settings. Call once at app startup.

```csharp
public static void StartIfEnabled()
```

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_StopAndSave"></a> StopAndSave\(\)

Stops monitoring and saves the run record. Call at app shutdown.

```csharp
public static void StopAndSave()
```

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_StopWithoutSaving"></a> StopWithoutSaving\(\)

Stops monitoring without saving (e.g., when user disables monitoring).

```csharp
public static void StopWithoutSaving()
```

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_UpdateSmoothingStats_Ink_Canvas_Helpers_InkSmoothingDetailedStats_"></a> UpdateSmoothingStats\(InkSmoothingDetailedStats\)

Called by InkSmoothingManager after each smoothing operation to cache the latest stats.

```csharp
public static void UpdateSmoothingStats(InkSmoothingDetailedStats stats)
```

#### Parameters

`stats` [InkSmoothingDetailedStats](Ink\_Canvas.Helpers.InkSmoothingDetailedStats.md)

### <a id="Ink_Canvas_Helpers_PerformanceMonitorHelper_SampleCollected"></a> SampleCollected

Fired when a new sample is collected. Args: (cpuPercent, memoryMb).

```csharp
public static event Action<double, double> SampleCollected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[double](https://learn.microsoft.com/dotnet/api/system.double), [double](https://learn.microsoft.com/dotnet/api/system.double)\>

