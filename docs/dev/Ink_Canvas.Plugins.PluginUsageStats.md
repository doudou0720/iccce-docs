# <a id="Ink_Canvas_Plugins_PluginUsageStats"></a> Class PluginUsageStats

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

宿主使用统计。

```csharp
public sealed class PluginUsageStats
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginUsageStats](Ink\_Canvas.Plugins.PluginUsageStats.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginUsageStats_AvgSessionSeconds"></a> AvgSessionSeconds

平均单次会话时长（秒）。

```csharp
public double AvgSessionSeconds { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Plugins_PluginUsageStats_LaunchCount"></a> LaunchCount

累计启动次数。

```csharp
public int LaunchCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_PluginUsageStats_TotalSeconds"></a> TotalSeconds

累计使用时长（秒）。

```csharp
public long TotalSeconds { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Ink_Canvas_Plugins_PluginUsageStats_UpdatePriority"></a> UpdatePriority

更新优先级（int 形式的宿主枚举）。

```csharp
public int UpdatePriority { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

