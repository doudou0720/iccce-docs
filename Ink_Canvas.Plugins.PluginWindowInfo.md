# <a id="Ink_Canvas_Plugins_PluginWindowInfo"></a> Class PluginWindowInfo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

主程序窗口概览的插件安全视图。插件只能读取窗口元数据，不能操作目标窗口。

```csharp
public sealed class PluginWindowInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginWindowInfo](Ink\_Canvas.Plugins.PluginWindowInfo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginWindowInfo_ClassName"></a> ClassName

窗口类名。

```csharp
public string ClassName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginWindowInfo_Handle"></a> Handle

窗口句柄（HWND）。

```csharp
public nint Handle { get; set; }
```

#### Property Value

 [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### <a id="Ink_Canvas_Plugins_PluginWindowInfo_IsMinimized"></a> IsMinimized

窗口是否最小化（当前快照仅包含可见且未最小化的窗口）。

```csharp
public bool IsMinimized { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginWindowInfo_IsVisible"></a> IsVisible

窗口是否可见（当前快照仅包含可见且未最小化的窗口）。

```csharp
public bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginWindowInfo_ProcessId"></a> ProcessId

所属进程 ID。

```csharp
public uint ProcessId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="Ink_Canvas_Plugins_PluginWindowInfo_ProcessName"></a> ProcessName

所属进程名（不含扩展名）。

```csharp
public string ProcessName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginWindowInfo_ProcessPath"></a> ProcessPath

所属进程的可执行文件路径。

```csharp
public string ProcessPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginWindowInfo_Title"></a> Title

窗口标题。

```csharp
public string Title { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

