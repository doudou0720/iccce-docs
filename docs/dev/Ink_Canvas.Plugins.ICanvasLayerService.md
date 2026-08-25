# <a id="Ink_Canvas_Plugins_ICanvasLayerService"></a> Interface ICanvasLayerService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件画布图层服务。图层 ID 在同一插件内必须唯一；插件卸载时宿主会统一清理。

```csharp
public interface ICanvasLayerService
```

## Methods

### <a id="Ink_Canvas_Plugins_ICanvasLayerService_RegisterLayer_System_String_System_String_Ink_Canvas_Plugins_CanvasLayerPlacement_System_Func_System_Windows_FrameworkElement__System_Boolean_"></a> RegisterLayer\(string, string, CanvasLayerPlacement, Func<FrameworkElement\>, bool\)

注册或替换插件图层。工厂始终在 UI 线程调用。

```csharp
void RegisterLayer(string pluginId, string layerId, CanvasLayerPlacement placement, Func<FrameworkElement> layerFactory, bool isHitTestVisible = false)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`layerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`placement` [CanvasLayerPlacement](Ink\_Canvas.Plugins.CanvasLayerPlacement.md)

`layerFactory` [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)\>

`isHitTestVisible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasLayerService_RemoveLayer_System_String_System_String_"></a> RemoveLayer\(string, string\)

移除插件的指定图层。

```csharp
bool RemoveLayer(string pluginId, string layerId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`layerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasLayerService_RemoveLayers_System_String_"></a> RemoveLayers\(string\)

移除插件注册的全部图层。

```csharp
void RemoveLayers(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

