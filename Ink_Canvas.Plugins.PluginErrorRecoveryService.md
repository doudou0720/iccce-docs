# <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService"></a> Class PluginErrorRecoveryService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

插件错误恢复服务，当某插件多次加载失败或连续抛异常时。
自动将其标记为"自动禁用"并写入恢复令牌文件。用户可在插件列表上手动重置。

```csharp
public class PluginErrorRecoveryService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginErrorRecoveryService](Ink\_Canvas.Plugins.PluginErrorRecoveryService.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService__ctor_System_String_"></a> PluginErrorRecoveryService\(string\)

当插件被自动禁用后，用户仍能在 UI 上看到错误信息，需手动重置才能再次加载。

```csharp
public PluginErrorRecoveryService(string basePath)
```

#### Parameters

`basePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Fields

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_FailureThreshold"></a> FailureThreshold

在最近 <xref href="Ink_Canvas.Plugins.PluginErrorRecoveryService.FailureWindowMinutes" data-throw-if-not-resolved="false"></xref> 分钟内连续发生 <xref href="Ink_Canvas.Plugins.PluginErrorRecoveryService.FailureThreshold" data-throw-if-not-resolved="false"></xref> 次失败，自动禁用插件。

```csharp
public const int FailureThreshold = 3
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_FailureWindowMinutes"></a> FailureWindowMinutes

```csharp
public const int FailureWindowMinutes = 30
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_Records"></a> Records

```csharp
public IReadOnlyDictionary<string, PluginErrorRecord> Records { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [PluginErrorRecord](Ink\_Canvas.Plugins.PluginErrorRecord.md)\>

## Methods

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_GetRecord_System_String_"></a> GetRecord\(string\)

获取某个插件的错误摘要，用于 UI 展示。

```csharp
public PluginErrorRecord GetRecord(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [PluginErrorRecord](Ink\_Canvas.Plugins.PluginErrorRecord.md)

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_IsAutoDisabled_System_String_"></a> IsAutoDisabled\(string\)

查询插件是否已被自动禁用。

```csharp
public bool IsAutoDisabled(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_ReportFailure_System_String_System_String_System_Exception_"></a> ReportFailure\(string, string, Exception\)

报告一次加载失败。如果触达阈值，自动禁用插件。

```csharp
public PluginErrorReport ReportFailure(string pluginId, string pluginName, Exception ex)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pluginName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

#### Returns

 [PluginErrorReport](Ink\_Canvas.Plugins.PluginErrorReport.md)

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_Reset_System_String_"></a> Reset\(string\)

重置插件的错误记录并清除自动禁用标记，下一次启动会重新尝试加载。

```csharp
public bool Reset(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

