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

```csharp
public Action<FrameworkElement, Orientation> ApplyOrientation { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement), [Orientation](https://learn.microsoft.com/dotnet/api/system.windows.controls.orientation)\>

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_ApplySettings"></a> ApplySettings

```csharp
public Action<FrameworkElement, Dictionary<string, object>> ApplySettings { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement), [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)\>\>

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_CustomSettings"></a> CustomSettings

```csharp
public List<PluginToolbarSettingInfo> CustomSettings { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PluginToolbarSettingInfo](Ink\_Canvas.Plugins.PluginToolbarSettingInfo.md)\>

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_Description"></a> Description

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_DisplayName"></a> DisplayName

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginToolbarItemInfo_Id"></a> Id

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

```csharp
public Func<FrameworkElement> ViewFactory { get; set; }
```

#### Property Value

 [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)\>

