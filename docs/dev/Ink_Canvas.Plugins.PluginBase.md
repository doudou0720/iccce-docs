# <a id="Ink_Canvas_Plugins_PluginBase"></a> Class PluginBase

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

```csharp
public abstract class PluginBase : IPlugin
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginBase](Ink\_Canvas.Plugins.PluginBase.md)

#### Implements

[IPlugin](Ink\_Canvas.Plugins.IPlugin.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginBase_Author"></a> Author

```csharp
public abstract string Author { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginBase_Description"></a> Description

```csharp
public abstract string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginBase_Host"></a> Host

```csharp
protected IPluginHost Host { get; }
```

#### Property Value

 [IPluginHost](Ink\_Canvas.Plugins.IPluginHost.md)

### <a id="Ink_Canvas_Plugins_PluginBase_Id"></a> Id

```csharp
public abstract string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginBase_Name"></a> Name

```csharp
public abstract string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginBase_Order"></a> Order

```csharp
public abstract int Order { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_PluginBase_Version"></a> Version

```csharp
public abstract string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Plugins_PluginBase_GetMainView"></a> GetMainView\(\)

```csharp
public virtual object GetMainView()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Plugins_PluginBase_GetService__1"></a> GetService<T\>\(\)

```csharp
protected T GetService<T>() where T : class
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Plugins_PluginBase_GetSettingsView"></a> GetSettingsView\(\)

```csharp
public virtual object GetSettingsView()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Plugins_PluginBase_Initialize_Ink_Canvas_Plugins_IPluginHost_"></a> Initialize\(IPluginHost\)

```csharp
public virtual void Initialize(IPluginHost host)
```

#### Parameters

`host` [IPluginHost](Ink\_Canvas.Plugins.IPluginHost.md)

### <a id="Ink_Canvas_Plugins_PluginBase_Log_System_String_"></a> Log\(string\)

```csharp
protected void Log(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginBase_LogError_System_String_System_Exception_"></a> LogError\(string, Exception\)

```csharp
protected void LogError(string message, Exception ex = null)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### <a id="Ink_Canvas_Plugins_PluginBase_Shutdown"></a> Shutdown\(\)

```csharp
public virtual void Shutdown()
```

