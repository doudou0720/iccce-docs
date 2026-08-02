# <a id="Ink_Canvas_Plugins_IScreenInfoService"></a> Interface IScreenInfoService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

屏幕信息服务：供插件读取系统显示器信息。

```csharp
public interface IScreenInfoService
```

## Methods

### <a id="Ink_Canvas_Plugins_IScreenInfoService_GetAllScreens"></a> GetAllScreens\(\)

所有显示器的列表。

```csharp
IReadOnlyList<PluginScreenInfo> GetAllScreens()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PluginScreenInfo](Ink\_Canvas.Plugins.PluginScreenInfo.md)\>

### <a id="Ink_Canvas_Plugins_IScreenInfoService_GetPrimaryScreen"></a> GetPrimaryScreen\(\)

主显示器。

```csharp
PluginScreenInfo GetPrimaryScreen()
```

#### Returns

 [PluginScreenInfo](Ink\_Canvas.Plugins.PluginScreenInfo.md)

### <a id="Ink_Canvas_Plugins_IScreenInfoService_HasMultipleScreens"></a> HasMultipleScreens\(\)

是否存在多显示器。

```csharp
bool HasMultipleScreens()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

