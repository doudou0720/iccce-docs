# <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo"></a> Class PluginToolbarItemInfo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件工具栏项信息，用于向主程序注册工具栏组件。

```csharp
public class PluginToolbarItemInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginToolbarItemInfo](Ink\_Canvas.Plugins.PluginToolbarItemInfo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_ApplyOrientation"></a> ApplyOrientation

工具栏横竖排切换时回调，用于让视图自适应方向。

```csharp
public Action<FrameworkElement, Orientation> ApplyOrientation { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement), [Orientation](https://learn.microsoft.com/dotnet/api/system.windows.controls.orientation)\>

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_ApplySettings"></a> ApplySettings

把持久化的组件设置字典应用到视图。宿主在构建视图后调用。

```csharp
public Action<FrameworkElement, Dictionary<string, object>> ApplySettings { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement), [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)\>\>

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_CustomSettings"></a> CustomSettings

声明式自定义设置列表，宿主据此在设置界面生成设置面板（ComboBox/Slider/Toggle）。

```csharp
public List<PluginToolbarSettingInfo> CustomSettings { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PluginToolbarSettingInfo](Ink\_Canvas.Plugins.PluginToolbarSettingInfo.md)\>

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_Description"></a> Description

组件的描述文本，用于组件库与设置界面。

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_DisplayName"></a> DisplayName

组件在工具栏上显示的名称。

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_IconGeometry"></a> IconGeometry

组件图标（SVG Path 几何数据字符串）。为空时使用默认图标。

```csharp
public string IconGeometry { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_Id"></a> Id

组件唯一标识（在目标工具栏内必须唯一，建议用反域名风格如 "com.example.tool"）。

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_PopupContentFactory"></a> PopupContentFactory

弹窗内容工厂。若提供此属性，点击按钮时将自动打开包含此内容的弹窗菜单。
返回的 FrameworkElement 将作为 Popup 的 Child 显示。

```csharp
public Func<FrameworkElement> PopupContentFactory { get; set; }
```

#### Property Value

 [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)\>

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_ViewFactory"></a> ViewFactory

创建组件视图（FrameworkElement）的工厂。返回 null 时该组件不显示。

```csharp
public Func<FrameworkElement> ViewFactory { get; set; }
```

#### Property Value

 [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)\>

