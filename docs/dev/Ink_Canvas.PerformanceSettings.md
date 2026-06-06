# <a id="Ink_Canvas_PerformanceSettings"></a> Class PerformanceSettings

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class PerformanceSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PerformanceSettings](Ink\_Canvas.PerformanceSettings.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_PerformanceSettings_CpuScore"></a> CpuScore

```csharp
[JsonProperty("cpuScore")]
public int CpuScore { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_PerformanceSettings_DeviceScore"></a> DeviceScore

```csharp
[JsonProperty("deviceScore")]
public int DeviceScore { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_PerformanceSettings_DiskScore"></a> DiskScore

```csharp
[JsonProperty("diskScore")]
public int DiskScore { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_PerformanceSettings_History"></a> History

```csharp
[JsonProperty("history")]
public List<PerformanceRunRecord> History { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PerformanceRunRecord](Ink\_Canvas.PerformanceRunRecord.md)\>

### <a id="Ink_Canvas_PerformanceSettings_IsMonitoringEnabled"></a> IsMonitoringEnabled

```csharp
[JsonProperty("isMonitoringEnabled")]
public bool IsMonitoringEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_PerformanceSettings_LastTestTime"></a> LastTestTime

```csharp
[JsonProperty("lastTestTime")]
public string LastTestTime { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_PerformanceSettings_MemoryScore"></a> MemoryScore

```csharp
[JsonProperty("memoryScore")]
public int MemoryScore { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

