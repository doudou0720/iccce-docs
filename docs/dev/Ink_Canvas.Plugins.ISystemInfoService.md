# <a id="Ink_Canvas_Plugins_ISystemInfoService"></a> Interface ISystemInfoService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

系统信息服务：供插件读取宿主设备与系统信息。

```csharp
public interface ISystemInfoService
```

## Properties

### <a id="Ink_Canvas_Plugins_ISystemInfoService_DeviceId"></a> DeviceId

设备唯一 ID（用于诊断/上报）。

```csharp
string DeviceId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_ISystemInfoService_SystemVersion"></a> SystemVersion

Windows 系统版本描述。

```csharp
string SystemVersion { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Plugins_ISystemInfoService_GetUsageStats"></a> GetUsageStats\(\)

宿主使用统计（启动次数、累计时长等）。

```csharp
PluginUsageStats GetUsageStats()
```

#### Returns

 [PluginUsageStats](Ink\_Canvas.Plugins.PluginUsageStats.md)

