# <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo"></a> Class PluginToolbarItemInfo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件工具栏项信息，用于向主程序注册工具栏组件。

```csharp
public class PluginToolbarItemInfo
```

#### Inheritance

object ← 
[PluginToolbarItemInfo](Ink\_Canvas.Plugins.PluginToolbarItemInfo.md)

## Properties

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_ApplyOrientation"></a> ApplyOrientation

```csharp
public Action<FrameworkElement, Orientation> ApplyOrientation { get; set; }
```

#### Property Value

 Action<FrameworkElement, Orientation\>

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_ApplySettings"></a> ApplySettings

```csharp
public Action<FrameworkElement, Dictionary<string, object>> ApplySettings { get; set; }
```

#### Property Value

 Action<FrameworkElement, Dictionary<string, object\>\>

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_CustomSettings"></a> CustomSettings

```csharp
public List<PluginToolbarSettingInfo> CustomSettings { get; set; }
```

#### Property Value

 List<[PluginToolbarSettingInfo](Ink\_Canvas.Plugins.PluginToolbarSettingInfo.md)\>

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_Description"></a> Description

```csharp
public string Description { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_DisplayName"></a> DisplayName

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_IconGeometry"></a> IconGeometry

```csharp
public string IconGeometry { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_Id"></a> Id

```csharp
public string Id { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_PopupContentFactory"></a> PopupContentFactory

弹窗内容工厂。若提供此属性，点击按钮时将自动打开包含此内容的弹窗菜单。
返回的 FrameworkElement 将作为 Popup 的 Child 显示。

```csharp
public Func<FrameworkElement> PopupContentFactory { get; set; }
```

#### Property Value

 Func<FrameworkElement\>

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_ViewFactory"></a> ViewFactory

```csharp
public Func<FrameworkElement> ViewFactory { get; set; }
```

#### Property Value

 Func<FrameworkElement\>

