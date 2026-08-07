# <a id="Ink_Canvas_Plugins_PluginScreenInfo"></a> Class PluginScreenInfo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

显示器信息（只读）。

```csharp
public sealed class PluginScreenInfo
```

#### Inheritance

object ← 
[PluginScreenInfo](Ink\_Canvas.Plugins.PluginScreenInfo.md)

## Properties

### <a id="Ink_Canvas_Plugins_PluginScreenInfo_Bounds"></a> Bounds

显示器完整边界（设备无关像素，相对虚拟屏幕原点）。

```csharp
public Rect Bounds { get; set; }
```

#### Property Value

 Rect

### <a id="Ink_Canvas_Plugins_PluginScreenInfo_DeviceName"></a> DeviceName

显示器设备名（如 "\\.\DISPLAY1"）。

```csharp
public string DeviceName { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginScreenInfo_IsPrimary"></a> IsPrimary

是否为主显示器。

```csharp
public bool IsPrimary { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_PluginScreenInfo_WorkingArea"></a> WorkingArea

显示器工作区（扣除任务栏等，设备无关像素）。

```csharp
public Rect WorkingArea { get; set; }
```

#### Property Value

 Rect

