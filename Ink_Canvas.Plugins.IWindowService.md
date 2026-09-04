# <a id="Ink_Canvas_Plugins_IWindowService"></a> Interface IWindowService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

窗口控制服务，供插件操控主窗口状态。

```csharp
public interface IWindowService
```

## Properties

### <a id="Ink_Canvas_Plugins_IWindowService_IsCollapsed"></a> IsCollapsed

窗口是否处于收纳（隐藏）状态

```csharp
bool IsCollapsed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IWindowService_IsFullscreen"></a> IsFullscreen

窗口是否全屏

```csharp
bool IsFullscreen { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IWindowService_IsTopMost"></a> IsTopMost

窗口是否置顶

```csharp
bool IsTopMost { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IWindowService_IsWhiteboardMode"></a> IsWhiteboardMode

当前是否处于白板模式

```csharp
bool IsWhiteboardMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Plugins_IWindowService_Collapse"></a> Collapse\(\)

收纳浮动栏（隐藏到屏幕边缘）。

```csharp
void Collapse()
```

### <a id="Ink_Canvas_Plugins_IWindowService_EnterWhiteboard"></a> EnterWhiteboard\(\)

进入白板模式。

```csharp
void EnterWhiteboard()
```

### <a id="Ink_Canvas_Plugins_IWindowService_ExitWhiteboard"></a> ExitWhiteboard\(\)

退出白板模式（回到浮动栏）。

```csharp
void ExitWhiteboard()
```

### <a id="Ink_Canvas_Plugins_IWindowService_Expand"></a> Expand\(\)

展开浮动栏。

```csharp
void Expand()
```

### <a id="Ink_Canvas_Plugins_IWindowService_SetFullscreen_System_Boolean_"></a> SetFullscreen\(bool\)

设置窗口全屏状态（进入/退出全屏）。

```csharp
void SetFullscreen(bool fullscreen)
```

#### Parameters

`fullscreen` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IWindowService_SetTopMost_System_Boolean_"></a> SetTopMost\(bool\)

设置窗口置顶状态。

```csharp
void SetTopMost(bool topMost)
```

#### Parameters

`topMost` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IWindowService_ToggleCollapse"></a> ToggleCollapse\(\)

切换收纳/展开。

```csharp
void ToggleCollapse()
```

### <a id="Ink_Canvas_Plugins_IWindowService_ToggleFullscreen"></a> ToggleFullscreen\(\)

切换窗口全屏状态。

```csharp
void ToggleFullscreen()
```

### <a id="Ink_Canvas_Plugins_IWindowService_ToggleTopMost"></a> ToggleTopMost\(\)

切换置顶状态。

```csharp
void ToggleTopMost()
```

### <a id="Ink_Canvas_Plugins_IWindowService_CollapseChanged"></a> CollapseChanged

收纳状态变化事件。

```csharp
event Action<bool> CollapseChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Plugins_IWindowService_TopMostChanged"></a> TopMostChanged

窗口置顶状态变化事件。

```csharp
event Action<bool> TopMostChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

