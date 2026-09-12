# <a id="Ink_Canvas_Plugins_PluginHotkeyInfo"></a> Class PluginHotkeyInfo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

热键信息（只读描述，不含回调）。

```csharp
public sealed class PluginHotkeyInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginHotkeyInfo](Ink\_Canvas.Plugins.PluginHotkeyInfo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginHotkeyInfo_Key"></a> Key

主键。

```csharp
public Key Key { get; set; }
```

#### Property Value

 [Key](https://learn.microsoft.com/dotnet/api/system.windows.input.key)

### <a id="Ink_Canvas_Plugins_PluginHotkeyInfo_Modifiers"></a> Modifiers

修饰键组合。

```csharp
public ModifierKeys Modifiers { get; set; }
```

#### Property Value

 [ModifierKeys](https://learn.microsoft.com/dotnet/api/system.windows.input.modifierkeys)

### <a id="Ink_Canvas_Plugins_PluginHotkeyInfo_Name"></a> Name

热键名称（如 "Undo"）。

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

