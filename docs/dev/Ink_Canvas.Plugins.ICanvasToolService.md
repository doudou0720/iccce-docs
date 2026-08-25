# <a id="Ink_Canvas_Plugins_ICanvasToolService"></a> Interface ICanvasToolService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

```csharp
public interface ICanvasToolService
```

## Methods

### <a id="Ink_Canvas_Plugins_ICanvasToolService_DeactivateTools_System_String_"></a> DeactivateTools\(string\)

结束插件当前拥有的工具会话；插件卸载时宿主会调用。

```csharp
void DeactivateTools(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_ICanvasToolService_TryActivateTool_System_String_System_String_Ink_Canvas_Plugins_ICanvasToolSession__"></a> TryActivateTool\(string, string, out ICanvasToolSession\)

尝试激活插件工具。同一时间只允许一个插件工具拥有画布输入。
冻结页面拒绝激活可修改画布的插件工具。

```csharp
bool TryActivateTool(string pluginId, string toolId, out ICanvasToolSession session)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`toolId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`session` [ICanvasToolSession](Ink\_Canvas.Plugins.ICanvasToolSession.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

