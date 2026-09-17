# <a id="Ink_Canvas_Plugins_IWindowOverviewService"></a> Interface IWindowOverviewService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

提供主程序窗口读取模型的只读插件接口。

```csharp
public interface IWindowOverviewService
```

## Properties

### <a id="Ink_Canvas_Plugins_IWindowOverviewService_ForegroundWindow"></a> ForegroundWindow

当前前台窗口。若前台窗口不在快照列表中（如已最小化、属于其他桌面）则为 null。

```csharp
PluginWindowInfo ForegroundWindow { get; }
```

#### Property Value

 [PluginWindowInfo](Ink\_Canvas.Plugins.PluginWindowInfo.md)

### <a id="Ink_Canvas_Plugins_IWindowOverviewService_Windows"></a> Windows

当前窗口快照（只读）。仅包含可见且未最小化的窗口，宿主在窗口列表变化时自动刷新。

```csharp
IReadOnlyList<PluginWindowInfo> Windows { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PluginWindowInfo](Ink\_Canvas.Plugins.PluginWindowInfo.md)\>

## Methods

### <a id="Ink_Canvas_Plugins_IWindowOverviewService_Refresh"></a> Refresh\(\)

立即重新枚举窗口并触发 <xref href="Ink_Canvas.Plugins.IWindowOverviewService.WindowsChanged" data-throw-if-not-resolved="false"></xref>。

```csharp
void Refresh()
```

### <a id="Ink_Canvas_Plugins_IWindowOverviewService_WindowsChanged"></a> WindowsChanged

窗口快照更新完成后触发。

```csharp
event Action WindowsChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

