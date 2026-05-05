# <a id="Ink_Canvas_Plugins_PluginManager"></a> Class PluginManager

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class PluginManager : IPluginHost
```

#### Inheritance

object ← 
[PluginManager](Ink\_Canvas.Plugins.PluginManager.md)

#### Implements

IPluginHost

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

 IReadOnlyList<PluginInfo\>

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

 Task

### <a id="Ink_Canvas_Plugins_PluginManager_Log_System_String_"></a> Log\(string\)

```csharp
public void Log(string message)
```

#### Parameters

`message` string

### <a id="Ink_Canvas_Plugins_PluginManager_LogError_System_String_Exception_"></a> LogError\(string, Exception\)

```csharp
public void LogError(string message, Exception ex = null)
```

#### Parameters

`message` string

`ex` Exception

### <a id="Ink_Canvas_Plugins_PluginManager_OnLogMessage_System_String_"></a> OnLogMessage\(string\)

```csharp
protected virtual void OnLogMessage(string message)
```

#### Parameters

`message` string

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

 EventHandler<string\>

### <a id="Ink_Canvas_Plugins_PluginManager_PluginLoaded"></a> PluginLoaded

```csharp
public event EventHandler<PluginInfo> PluginLoaded
```

#### Event Type

 EventHandler<PluginInfo\>

### <a id="Ink_Canvas_Plugins_PluginManager_PluginUnloaded"></a> PluginUnloaded

```csharp
public event EventHandler<PluginInfo> PluginUnloaded
```

#### Event Type

 EventHandler<PluginInfo\>

