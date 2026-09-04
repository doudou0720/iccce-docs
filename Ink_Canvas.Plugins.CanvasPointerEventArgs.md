# <a id="Ink_Canvas_Plugins_CanvasPointerEventArgs"></a> Class CanvasPointerEventArgs

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

与宿主内部输入类型解耦的画布指针事件。

```csharp
public sealed class CanvasPointerEventArgs : EventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[CanvasPointerEventArgs](Ink\_Canvas.Plugins.CanvasPointerEventArgs.md)

#### Inherited Members

[EventArgs.Empty](https://learn.microsoft.com/dotnet/api/system.eventargs.empty), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_CanvasPointerEventArgs_Action"></a> Action

```csharp
public CanvasPointerAction Action { get; set; }
```

#### Property Value

 [CanvasPointerAction](Ink\_Canvas.Plugins.CanvasPointerAction.md)

### <a id="Ink_Canvas_Plugins_CanvasPointerEventArgs_DeviceKind"></a> DeviceKind

```csharp
public CanvasPointerDeviceKind DeviceKind { get; set; }
```

#### Property Value

 [CanvasPointerDeviceKind](Ink\_Canvas.Plugins.CanvasPointerDeviceKind.md)

### <a id="Ink_Canvas_Plugins_CanvasPointerEventArgs_Handled"></a> Handled

```csharp
public bool Handled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_CanvasPointerEventArgs_IsPrimary"></a> IsPrimary

```csharp
public bool IsPrimary { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_CanvasPointerEventArgs_LeftButton"></a> LeftButton

```csharp
public MouseButtonState LeftButton { get; set; }
```

#### Property Value

 [MouseButtonState](https://learn.microsoft.com/dotnet/api/system.windows.input.mousebuttonstate)

### <a id="Ink_Canvas_Plugins_CanvasPointerEventArgs_Modifiers"></a> Modifiers

```csharp
public ModifierKeys Modifiers { get; set; }
```

#### Property Value

 [ModifierKeys](https://learn.microsoft.com/dotnet/api/system.windows.input.modifierkeys)

### <a id="Ink_Canvas_Plugins_CanvasPointerEventArgs_PointerId"></a> PointerId

```csharp
public int PointerId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_CanvasPointerEventArgs_Position"></a> Position

```csharp
public Point Position { get; set; }
```

#### Property Value

 [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

### <a id="Ink_Canvas_Plugins_CanvasPointerEventArgs_Pressure"></a> Pressure

```csharp
public float Pressure { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="Ink_Canvas_Plugins_CanvasPointerEventArgs_RightButton"></a> RightButton

```csharp
public MouseButtonState RightButton { get; set; }
```

#### Property Value

 [MouseButtonState](https://learn.microsoft.com/dotnet/api/system.windows.input.mousebuttonstate)

### <a id="Ink_Canvas_Plugins_CanvasPointerEventArgs_WheelDelta"></a> WheelDelta

```csharp
public int WheelDelta { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

