# <a id="Ink_Canvas_Plugins_PluginScreenInfo"></a> Class PluginScreenInfo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

显示器信息（只读）。

```csharp
public sealed class PluginScreenInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginScreenInfo](Ink\_Canvas.Plugins.PluginScreenInfo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginScreenInfo_Bounds"></a> Bounds

显示器完整边界（设备无关像素，相对虚拟屏幕原点）。

```csharp
public Rect Bounds { get; set; }
```

#### Property Value

 [Rect](https://learn.microsoft.com/dotnet/api/system.windows.rect)

### <a id="Ink_Canvas_Plugins_PluginScreenInfo_DeviceName"></a> DeviceName

显示器设备名（如 "\\.\DISPLAY1"）。

```csharp
public string DeviceName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginScreenInfo_IsPrimary"></a> IsPrimary

是否为主显示器。

```csharp
public bool IsPrimary { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginScreenInfo_WorkingArea"></a> WorkingArea

显示器工作区（扣除任务栏等，设备无关像素）。

```csharp
public Rect WorkingArea { get; set; }
```

#### Property Value

 [Rect](https://learn.microsoft.com/dotnet/api/system.windows.rect)

