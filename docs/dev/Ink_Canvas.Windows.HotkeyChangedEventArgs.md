# <a id="Ink_Canvas_Windows_HotkeyChangedEventArgs"></a> Class HotkeyChangedEventArgs

Namespace: [Ink\_Canvas.Windows](Ink\_Canvas.Windows.md)  
Assembly: InkCanvasForClass.dll  

快捷键变更事件参数

```csharp
public class HotkeyChangedEventArgs : EventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[HotkeyChangedEventArgs](Ink\_Canvas.Windows.HotkeyChangedEventArgs.md)

#### Inherited Members

[EventArgs.Empty](https://learn.microsoft.com/dotnet/api/system.eventargs.empty), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Windows_HotkeyChangedEventArgs_HotkeyName"></a> HotkeyName

```csharp
public string HotkeyName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_HotkeyChangedEventArgs_Key"></a> Key

```csharp
public Key Key { get; set; }
```

#### Property Value

 [Key](https://learn.microsoft.com/dotnet/api/system.windows.input.key)

### <a id="Ink_Canvas_Windows_HotkeyChangedEventArgs_Modifiers"></a> Modifiers

```csharp
public ModifierKeys Modifiers { get; set; }
```

#### Property Value

 [ModifierKeys](https://learn.microsoft.com/dotnet/api/system.windows.input.modifierkeys)

