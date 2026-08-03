# <a id="Ink_Canvas_Plugins_PluginLogger"></a> Class PluginLogger

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class PluginLogger
```

#### Inheritance

object ← 
[PluginLogger](Ink\_Canvas.Plugins.PluginLogger.md)

## Constructors

### <a id="Ink_Canvas_Plugins_PluginLogger__ctor_System_String_System_String_"></a> PluginLogger\(string, string\)

```csharp
public PluginLogger(string logsRoot, string pluginId)
```

#### Parameters

`logsRoot` string

`pluginId` string

## Properties

### <a id="Ink_Canvas_Plugins_PluginLogger_MaxFileSizeBytes"></a> MaxFileSizeBytes

单文件最大字节数（默认 1MB），超过后会重命名为 <code>.1.log</code> 并新建。

```csharp
public long MaxFileSizeBytes { get; set; }
```

#### Property Value

 long

### <a id="Ink_Canvas_Plugins_PluginLogger_RetainedFiles"></a> RetainedFiles

同目录下允许保留的轮转文件数。

```csharp
public int RetainedFiles { get; set; }
```

#### Property Value

 int

## Methods

### <a id="Ink_Canvas_Plugins_PluginLogger_Debug_System_String_System_String_"></a> Debug\(string, string\)

写入 Debug 级别日志。

```csharp
public void Debug(string source, string message)
```

#### Parameters

`source` string

`message` string

### <a id="Ink_Canvas_Plugins_PluginLogger_EnumerateLogFiles"></a> EnumerateLogFiles\(\)

列出该插件对应的所有日志文件（含轮转备份）。

```csharp
public IEnumerable<string> EnumerateLogFiles()
```

#### Returns

 IEnumerable<string\>

### <a id="Ink_Canvas_Plugins_PluginLogger_Error_System_String_System_String_Exception_"></a> Error\(string, string, Exception\)

写入 Error 级别日志。

```csharp
public void Error(string source, string message, Exception ex = null)
```

#### Parameters

`source` string

`message` string

`ex` Exception

### <a id="Ink_Canvas_Plugins_PluginLogger_GetCurrentLogFilePath"></a> GetCurrentLogFilePath\(\)

获取今日日志文件路径。

```csharp
public string GetCurrentLogFilePath()
```

#### Returns

 string

### <a id="Ink_Canvas_Plugins_PluginLogger_GetCurrentLogSize"></a> GetCurrentLogSize\(\)

取出当日全部插件日志大小（字节），便于 UI 显示。

```csharp
public long GetCurrentLogSize()
```

#### Returns

 long

### <a id="Ink_Canvas_Plugins_PluginLogger_Info_System_String_System_String_"></a> Info\(string, string\)

写入 Info 级别日志。

```csharp
public void Info(string source, string message)
```

#### Parameters

`source` string

`message` string

### <a id="Ink_Canvas_Plugins_PluginLogger_ReadAll"></a> ReadAll\(\)

读取今日日志文件全部内容（用于 UI 调试器）。

```csharp
public string ReadAll()
```

#### Returns

 string

### <a id="Ink_Canvas_Plugins_PluginLogger_Warn_System_String_System_String_Exception_"></a> Warn\(string, string, Exception\)

写入 Warn 级别日志。

```csharp
public void Warn(string source, string message, Exception ex = null)
```

#### Parameters

`source` string

`message` string

`ex` Exception

