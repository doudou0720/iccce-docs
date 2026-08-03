# <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService"></a> Class PluginErrorRecoveryService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

插件错误恢复服务，当某插件多次加载失败或连续抛异常时。
自动将其标记为"自动禁用"并写入恢复令牌文件。用户可在插件列表上手动重置。

```csharp
public class PluginErrorRecoveryService
```

#### Inheritance

object ← 
[PluginErrorRecoveryService](Ink\_Canvas.Plugins.PluginErrorRecoveryService.md)

## Constructors

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService__ctor_System_String_"></a> PluginErrorRecoveryService\(string\)

当插件被自动禁用后，用户仍能在 UI 上看到错误信息，需手动重置才能再次加载。

```csharp
public PluginErrorRecoveryService(string basePath)
```

#### Parameters

`basePath` string

## Fields

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_FailureThreshold"></a> FailureThreshold

在最近 <xref href="Ink_Canvas.Plugins.PluginErrorRecoveryService.FailureWindowMinutes" data-throw-if-not-resolved="false"></xref> 分钟内连续发生 <xref href="Ink_Canvas.Plugins.PluginErrorRecoveryService.FailureThreshold" data-throw-if-not-resolved="false"></xref> 次失败，自动禁用插件。

```csharp
public const int FailureThreshold
```

#### Field Value

 int

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_FailureWindowMinutes"></a> FailureWindowMinutes

```csharp
public const int FailureWindowMinutes
```

#### Field Value

 int

## Properties

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_Records"></a> Records

```csharp
public IReadOnlyDictionary<string, PluginErrorRecord> Records { get; }
```

#### Property Value

 IReadOnlyDictionary<string, [PluginErrorRecord](Ink\_Canvas.Plugins.PluginErrorRecord.md)\>

## Methods

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_GetRecord_System_String_"></a> GetRecord\(string\)

获取某个插件的错误摘要，用于 UI 展示。

```csharp
public PluginErrorRecord GetRecord(string pluginId)
```

#### Parameters

`pluginId` string

#### Returns

 [PluginErrorRecord](Ink\_Canvas.Plugins.PluginErrorRecord.md)

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_IsAutoDisabled_System_String_"></a> IsAutoDisabled\(string\)

查询插件是否已被自动禁用。

```csharp
public bool IsAutoDisabled(string pluginId)
```

#### Parameters

`pluginId` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_ReportFailure_System_String_System_String_Exception_"></a> ReportFailure\(string, string, Exception\)

报告一次加载失败。如果触达阈值，自动禁用插件。

```csharp
public PluginErrorReport ReportFailure(string pluginId, string pluginName, Exception ex)
```

#### Parameters

`pluginId` string

`pluginName` string

`ex` Exception

#### Returns

 [PluginErrorReport](Ink\_Canvas.Plugins.PluginErrorReport.md)

### <a id="Ink_Canvas_Plugins_PluginErrorRecoveryService_Reset_System_String_"></a> Reset\(string\)

重置插件的错误记录并清除自动禁用标记，下一次启动会重新尝试加载。

```csharp
public bool Reset(string pluginId)
```

#### Parameters

`pluginId` string

#### Returns

 bool

