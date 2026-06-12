# <a id="Ink_Canvas_Plugins_PluginManager"></a> Class PluginManager

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class PluginManager : IPluginHost
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginManager](Ink\_Canvas.Plugins.PluginManager.md)

#### Implements

IPluginHost

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_Plugins_PluginManager_ManifestFileName"></a> ManifestFileName

```csharp
public static readonly string ManifestFileName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManager_PluginPackageExtension"></a> PluginPackageExtension

```csharp
public static readonly string PluginPackageExtension
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Ink_Canvas_Plugins_PluginManager_Instance"></a> Instance

```csharp
public static PluginManager Instance { get; }
```

#### Property Value

 [PluginManager](Ink\_Canvas.Plugins.PluginManager.md)

### <a id="Ink_Canvas_Plugins_PluginManager_Plugins"></a> Plugins

```csharp
public IReadOnlyList<PluginInfo> Plugins { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<PluginInfo\>

## Methods

### <a id="Ink_Canvas_Plugins_PluginManager_GetService__1"></a> GetService<T\>\(\)

```csharp
public T GetService<T>() where T : class
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Plugins_PluginManager_LoadAllAsync"></a> LoadAllAsync\(\)

```csharp
public Task LoadAllAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Plugins_PluginManager_Log_System_String_"></a> Log\(string\)

```csharp
public void Log(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManager_LogError_System_String_System_Exception_"></a> LogError\(string, Exception\)

```csharp
public void LogError(string message, Exception ex = null)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### <a id="Ink_Canvas_Plugins_PluginManager_OnLogMessage_System_String_"></a> OnLogMessage\(string\)

```csharp
protected virtual void OnLogMessage(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginManager_OnPluginLoaded_Ink_Canvas_Plugins_PluginInfo_"></a> OnPluginLoaded\(PluginInfo\)

```csharp
protected virtual void OnPluginLoaded(PluginInfo pluginInfo)
```

#### Parameters

`pluginInfo` PluginInfo

### <a id="Ink_Canvas_Plugins_PluginManager_OnPluginUnloaded_Ink_Canvas_Plugins_PluginInfo_"></a> OnPluginUnloaded\(PluginInfo\)

```csharp
protected virtual void OnPluginUnloaded(PluginInfo pluginInfo)
```

#### Parameters

`pluginInfo` PluginInfo

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterService__1___0_"></a> RegisterService<T\>\(T\)

```csharp
public void RegisterService<T>(T service) where T : class
```

#### Parameters

`service` T

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Plugins_PluginManager_RegisterToolbarItem_Ink_Canvas_Plugins_PluginToolbarItemInfo_"></a> RegisterToolbarItem\(PluginToolbarItemInfo\)

```csharp
public void RegisterToolbarItem(PluginToolbarItemInfo itemInfo)
```

#### Parameters

`itemInfo` PluginToolbarItemInfo

### <a id="Ink_Canvas_Plugins_PluginManager_UnloadAll"></a> UnloadAll\(\)

```csharp
public void UnloadAll()
```

### <a id="Ink_Canvas_Plugins_PluginManager_UnloadPlugin_Ink_Canvas_Plugins_PluginInfo_"></a> UnloadPlugin\(PluginInfo\)

```csharp
public void UnloadPlugin(PluginInfo plugin)
```

#### Parameters

`plugin` PluginInfo

### <a id="Ink_Canvas_Plugins_PluginManager_LogMessage"></a> LogMessage

```csharp
public event EventHandler<string> LogMessage
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_PluginManager_PluginLoaded"></a> PluginLoaded

```csharp
public event EventHandler<PluginInfo> PluginLoaded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<PluginInfo\>

### <a id="Ink_Canvas_Plugins_PluginManager_PluginUnloaded"></a> PluginUnloaded

```csharp
public event EventHandler<PluginInfo> PluginUnloaded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<PluginInfo\>

