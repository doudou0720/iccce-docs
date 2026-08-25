# <a id="Ink_Canvas_Helpers_LogHelper"></a> Class LogHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvas.PluginSdk.Tests.dll  

Lightweight LogHelper stub for the SDK test harness. The test project links
host plugin files such as PluginCompatibility, which only need a logging sink;
this avoids pulling the full host logging pipeline into the test project.

```csharp
public static class LogHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LogHelper](Ink\_Canvas.Helpers.LogHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_LogHelper_WriteLogToFile_System_String_Ink_Canvas_Helpers_LogHelper_LogType_"></a> WriteLogToFile\(string, LogType\)

```csharp
public static void WriteLogToFile(string message, LogHelper.LogType type = LogType.Info)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`type` [LogHelper](Ink\_Canvas.Helpers.LogHelper.md).[LogType](Ink\_Canvas.Helpers.LogHelper.LogType.md)

