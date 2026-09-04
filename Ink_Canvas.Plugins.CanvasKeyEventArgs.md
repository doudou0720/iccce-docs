# <a id="Ink_Canvas_Plugins_CanvasKeyEventArgs"></a> Class CanvasKeyEventArgs

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

与宿主内部键盘路由解耦的画布工具按键事件。

```csharp
public sealed class CanvasKeyEventArgs : EventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[CanvasKeyEventArgs](Ink\_Canvas.Plugins.CanvasKeyEventArgs.md)

#### Inherited Members

[EventArgs.Empty](https://learn.microsoft.com/dotnet/api/system.eventargs.empty), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_CanvasKeyEventArgs_Handled"></a> Handled

```csharp
public bool Handled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_CanvasKeyEventArgs_Key"></a> Key

```csharp
public Key Key { get; set; }
```

#### Property Value

 [Key](https://learn.microsoft.com/dotnet/api/system.windows.input.key)

### <a id="Ink_Canvas_Plugins_CanvasKeyEventArgs_Modifiers"></a> Modifiers

```csharp
public ModifierKeys Modifiers { get; set; }
```

#### Property Value

 [ModifierKeys](https://learn.microsoft.com/dotnet/api/system.windows.input.modifierkeys)

