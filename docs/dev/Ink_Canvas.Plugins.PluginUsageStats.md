# <a id="Ink_Canvas_Plugins_PluginUsageStats"></a> Class PluginUsageStats

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

宿主使用统计。

```csharp
public sealed class PluginUsageStats
```

#### Inheritance

object ← 
[PluginUsageStats](Ink\_Canvas.Plugins.PluginUsageStats.md)

## Properties

### <a id="Ink_Canvas_Plugins_PluginUsageStats_AvgSessionSeconds"></a> AvgSessionSeconds

平均单次会话时长（秒）。

```csharp
public double AvgSessionSeconds { get; set; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Plugins_PluginUsageStats_LaunchCount"></a> LaunchCount

累计启动次数。

```csharp
public int LaunchCount { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Plugins_PluginUsageStats_TotalSeconds"></a> TotalSeconds

累计使用时长（秒）。

```csharp
public long TotalSeconds { get; set; }
```

#### Property Value

 long

### <a id="Ink_Canvas_Plugins_PluginUsageStats_UpdatePriority"></a> UpdatePriority

更新优先级（int 形式的宿主枚举）。

```csharp
public int UpdatePriority { get; set; }
```

#### Property Value

 int

