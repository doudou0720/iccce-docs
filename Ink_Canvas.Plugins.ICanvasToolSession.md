# <a id="Ink_Canvas_Plugins_ICanvasToolSession"></a> Interface ICanvasToolSession

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件工具的独占输入会话。释放后宿主恢复进入工具前的普通墨迹模式。

```csharp
public interface ICanvasToolSession : IDisposable
```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### <a id="Ink_Canvas_Plugins_ICanvasToolSession_IsActive"></a> IsActive

```csharp
bool IsActive { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasToolSession_PluginId"></a> PluginId

```csharp
string PluginId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_ICanvasToolSession_ToolId"></a> ToolId

```csharp
string ToolId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Plugins_ICanvasToolSession_CapturePointer_System_Int32_"></a> CapturePointer\(int\)

```csharp
bool CapturePointer(int pointerId)
```

#### Parameters

`pointerId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ICanvasToolSession_ReleasePointer_System_Int32_"></a> ReleasePointer\(int\)

```csharp
void ReleasePointer(int pointerId)
```

#### Parameters

`pointerId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_ICanvasToolSession_KeyDown"></a> KeyDown

```csharp
event EventHandler<CanvasKeyEventArgs> KeyDown
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[CanvasKeyEventArgs](Ink\_Canvas.Plugins.CanvasKeyEventArgs.md)\>

### <a id="Ink_Canvas_Plugins_ICanvasToolSession_Pointer"></a> Pointer

```csharp
event EventHandler<CanvasPointerEventArgs> Pointer
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[CanvasPointerEventArgs](Ink\_Canvas.Plugins.CanvasPointerEventArgs.md)\>

