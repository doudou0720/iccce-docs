# <a id="Ink_Canvas_Plugins_IWhiteboardDocumentService"></a> Interface IWhiteboardDocumentService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

```csharp
public interface IWhiteboardDocumentService
```

## Properties

### <a id="Ink_Canvas_Plugins_IWhiteboardDocumentService_CurrentPage"></a> CurrentPage

```csharp
WhiteboardPageInfo CurrentPage { get; }
```

#### Property Value

 [WhiteboardPageInfo](Ink\_Canvas.Plugins.WhiteboardPageInfo.md)

## Methods

### <a id="Ink_Canvas_Plugins_IWhiteboardDocumentService_RegisterLegacyStateImporter_System_String_Ink_Canvas_Plugins_IWhiteboardLegacyStateImporter_"></a> RegisterLegacyStateImporter\(string, IWhiteboardLegacyStateImporter\)

```csharp
void RegisterLegacyStateImporter(string pluginId, IWhiteboardLegacyStateImporter importer)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`importer` [IWhiteboardLegacyStateImporter](Ink\_Canvas.Plugins.IWhiteboardLegacyStateImporter.md)

### <a id="Ink_Canvas_Plugins_IWhiteboardDocumentService_RegisterPageStateProvider_System_String_Ink_Canvas_Plugins_IWhiteboardPageStateProvider_"></a> RegisterPageStateProvider\(string, IWhiteboardPageStateProvider\)

```csharp
void RegisterPageStateProvider(string pluginId, IWhiteboardPageStateProvider provider)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`provider` [IWhiteboardPageStateProvider](Ink\_Canvas.Plugins.IWhiteboardPageStateProvider.md)

### <a id="Ink_Canvas_Plugins_IWhiteboardDocumentService_TryBeginMutation_System_String_"></a> TryBeginMutation\(string\)

请求修改当前普通白板页。非白板或冻结页返回 false；冻结页提示由宿主统一处理。

```csharp
bool TryBeginMutation(string action)
```

#### Parameters

`action` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IWhiteboardDocumentService_UnregisterPageStateProvider_System_String_"></a> UnregisterPageStateProvider\(string\)

```csharp
void UnregisterPageStateProvider(string pluginId)
```

#### Parameters

`pluginId` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IWhiteboardDocumentService_PageChanged"></a> PageChanged

```csharp
event EventHandler<WhiteboardPageChangedEventArgs> PageChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[WhiteboardPageChangedEventArgs](Ink\_Canvas.Plugins.WhiteboardPageChangedEventArgs.md)\>

### <a id="Ink_Canvas_Plugins_IWhiteboardDocumentService_PageChanging"></a> PageChanging

```csharp
event EventHandler<WhiteboardPageChangingEventArgs> PageChanging
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[WhiteboardPageChangingEventArgs](Ink\_Canvas.Plugins.WhiteboardPageChangingEventArgs.md)\>

### <a id="Ink_Canvas_Plugins_IWhiteboardDocumentService_PageClearing"></a> PageClearing

用户确认清空当前白板页时触发；代码驱动的切页和加载清理不触发。

```csharp
event EventHandler PageClearing
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### <a id="Ink_Canvas_Plugins_IWhiteboardDocumentService_PageRemoved"></a> PageRemoved

```csharp
event EventHandler<WhiteboardPageRemovedEventArgs> PageRemoved
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[WhiteboardPageRemovedEventArgs](Ink\_Canvas.Plugins.WhiteboardPageRemovedEventArgs.md)\>

