# <a id="Ink_Canvas_Windows_SettingsViews_Pages_PluginMarketSourcesWindow"></a> Class PluginMarketSourcesWindow

Namespace: [Ink\_Canvas.Windows.SettingsViews.Pages](Ink\_Canvas.Windows.SettingsViews.Pages.md)  
Assembly: InkCanvasForClass.dll  

插件源管理内容。由插件市场页面置于 ContentDialog 中显示。

```csharp
public class PluginMarketSourcesWindow : UserControl
```

#### Inheritance

UserControl ← 
[PluginMarketSourcesWindow](Ink\_Canvas.Windows.SettingsViews.Pages.PluginMarketSourcesWindow.md)

## Constructors

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_PluginMarketSourcesWindow__ctor_Ink_Canvas_Plugins_PluginMarketSourcesService_"></a> PluginMarketSourcesWindow\(PluginMarketSourcesService\)

```csharp
public PluginMarketSourcesWindow(PluginMarketSourcesService service)
```

#### Parameters

`service` [PluginMarketSourcesService](Ink\_Canvas.Plugins.PluginMarketSourcesService.md)

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_PluginMarketSourcesWindow_HasChanges"></a> HasChanges

指示本次对话中是否已保存或删除插件源，供调用方刷新源选择器。

```csharp
public bool HasChanges { get; }
```

#### Property Value

 bool

