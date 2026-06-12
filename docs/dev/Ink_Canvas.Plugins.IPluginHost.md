# <a id="Ink_Canvas_Plugins_IPluginHost"></a> Interface IPluginHost

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

```csharp
public interface IPluginHost
```

## Methods

### <a id="Ink_Canvas_Plugins_IPluginHost_GetService__1"></a> GetService<T\>\(\)

```csharp
T GetService<T>() where T : class
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Plugins_IPluginHost_Log_System_String_"></a> Log\(string\)

```csharp
void Log(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IPluginHost_LogError_System_String_System_Exception_"></a> LogError\(string, Exception\)

```csharp
void LogError(string message, Exception ex = null)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### <a id="Ink_Canvas_Plugins_IPluginHost_RegisterService__1___0_"></a> RegisterService<T\>\(T\)

```csharp
void RegisterService<T>(T service) where T : class
```

#### Parameters

`service` T

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Plugins_IPluginHost_RegisterToolbarItem_Ink_Canvas_Plugins_PluginToolbarItemInfo_"></a> RegisterToolbarItem\(PluginToolbarItemInfo\)

```csharp
void RegisterToolbarItem(PluginToolbarItemInfo itemInfo)
```

#### Parameters

`itemInfo` [PluginToolbarItemInfo](Ink\_Canvas.Plugins.PluginToolbarItemInfo.md)

