# <a id="Ink_Canvas_Helpers_MemoryBreakdownHelper"></a> Class MemoryBreakdownHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Builds a detailed memory snapshot of the current process for diagnostics
(relates to issue #546). The snapshot is plain text — it lists:
  1) Process-level working set / private usage / page-file usage
  2) .NET GC heap stats (per-generation size, fragmentation, pinned objects)
  3) WPF UI counts (Windows, SettingsWindow page cache, Visual tree size)
  4) In-app caches that are known to grow (PerformanceMonitorHelper samples,
     Automation / plugin manager registry if accessible via reflection)
  5) Loaded assemblies count
The caller can persist the report to Logs/MemoryBreakdown_*.txt and/or
emit a short summary through <xref href="Ink_Canvas.Helpers.LogHelper.WriteLogToFile(System.String%2cInk_Canvas.Helpers.LogHelper.LogType)" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class MemoryBreakdownHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MemoryBreakdownHelper](Ink\_Canvas.Helpers.MemoryBreakdownHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_MemoryBreakdownHelper_BuildReport"></a> BuildReport\(\)

Build the report. Does NOT mutate process state (no GC, no file IO).

```csharp
public static string BuildReport()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_MemoryBreakdownHelper_DumpToFile"></a> DumpToFile\(\)

Write the report to Logs/MemoryBreakdown_yyyyMMdd_HHmmss.txt and return the path.
Also logs a one-line summary through LogHelper.

```csharp
public static string DumpToFile()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_MemoryBreakdownHelper_ForceFullGc"></a> ForceFullGc\(\)

Forces a full GC pass for diagnostics. The detailed report is generated separately
by DumpToFile; this action intentionally does not create a second GcDiff file.

```csharp
public static string ForceFullGc()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

