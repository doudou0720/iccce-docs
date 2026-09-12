# <a id="Ink_Canvas_Plugins_IFocusInteractionService"></a> Interface IFocusInteractionService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

让插件的临时交互界面在宿主无焦点模式下仍可接收输入。
同一插件重复设置为 active 不会重复计数；关闭或卸载时必须设置为 false。

```csharp
public interface IFocusInteractionService
```

## Methods

### <a id="Ink_Canvas_Plugins_IFocusInteractionService_SetActive_System_String_System_Boolean_"></a> SetActive\(string, bool\)

```csharp
void SetActive(string pluginId, bool active)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`active` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

