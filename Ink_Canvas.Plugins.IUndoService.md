# <a id="Ink_Canvas_Plugins_IUndoService"></a> Interface IUndoService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

将插件的结构化状态快照接入宿主统一撤销/重做链路。

```csharp
public interface IUndoService
```

## Methods

### <a id="Ink_Canvas_Plugins_IUndoService_CommitState_System_String_System_String_System_String_"></a> CommitState\(string, string, string\)

提交一次结构化状态变化。冻结页面会拒绝提交；相同快照不会生成历史项。

```csharp
bool CommitState(string pluginId, string beforeState, string afterState)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`beforeState` [string](https://learn.microsoft.com/dotnet/api/system.string)

`afterState` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IUndoService_RegisterStateHandler_System_String_System_Action_System_String__"></a> RegisterStateHandler\(string, Action<string\>\)

注册插件状态恢复处理器。每个插件只能注册一个处理器。

```csharp
void RegisterStateHandler(string pluginId, Action<string> restoreState)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`restoreState` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_IUndoService_UnregisterStateHandler_System_String_"></a> UnregisterStateHandler\(string\)

移除插件状态恢复处理器。

```csharp
void UnregisterStateHandler(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

