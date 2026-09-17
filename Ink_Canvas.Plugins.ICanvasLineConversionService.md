# <a id="Ink_Canvas_Plugins_ICanvasLineConversionService"></a> Interface ICanvasLineConversionService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

允许插件把宿主最终直线与自己的结构化状态作为一个撤销项进行原子转换。

```csharp
public interface ICanvasLineConversionService
```

## Methods

### <a id="Ink_Canvas_Plugins_ICanvasLineConversionService_TryConvertToPluginState_System_String_System_String_System_String_System_String_"></a> TryConvertToPluginState\(string, string, string, string\)

消费候选直线并提交一个复合历史项。非白板、冻结页、过期或重复令牌返回 false。
调用前插件应已应用 afterState；返回 false 时插件负责恢复 beforeState。

```csharp
bool TryConvertToPluginState(string pluginId, string candidateToken, string beforeState, string afterState)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`candidateToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

`beforeState` [string](https://learn.microsoft.com/dotnet/api/system.string)

`afterState` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasLineConversionService_LineFinalized"></a> LineFinalized

```csharp
event EventHandler<CanvasLineFinalizedEventArgs> LineFinalized
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[CanvasLineFinalizedEventArgs](Ink\_Canvas.Plugins.CanvasLineFinalizedEventArgs.md)\>

