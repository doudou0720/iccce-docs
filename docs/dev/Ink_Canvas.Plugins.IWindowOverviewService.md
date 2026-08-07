# <a id="Ink_Canvas_Plugins_IWindowOverviewService"></a> Interface IWindowOverviewService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

提供主程序窗口读取模型的只读插件接口。

```csharp
public interface IWindowOverviewService
```

## Properties

### <a id="Ink_Canvas_Plugins_IWindowOverviewService_ForegroundWindow"></a> ForegroundWindow

```csharp
PluginWindowInfo ForegroundWindow { get; }
```

#### Property Value

 [PluginWindowInfo](Ink\_Canvas.Plugins.PluginWindowInfo.md)

### <a id="Ink_Canvas_Plugins_IWindowOverviewService_Windows"></a> Windows

```csharp
IReadOnlyList<PluginWindowInfo> Windows { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PluginWindowInfo](Ink\_Canvas.Plugins.PluginWindowInfo.md)\>

## Methods

### <a id="Ink_Canvas_Plugins_IWindowOverviewService_Refresh"></a> Refresh\(\)

```csharp
void Refresh()
```

### <a id="Ink_Canvas_Plugins_IWindowOverviewService_WindowsChanged"></a> WindowsChanged

```csharp
event Action WindowsChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

