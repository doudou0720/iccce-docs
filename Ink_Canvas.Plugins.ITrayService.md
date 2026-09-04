# <a id="Ink_Canvas_Plugins_ITrayService"></a> Interface ITrayService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

系统托盘服务：允许插件控制宿主托盘图标的显隐、主窗口的显隐、
打开托盘右键菜单，以及向托盘右键菜单注入/移除自己的菜单项。

<p>
所有方法都可以从任意线程调用，宿主内部会切换到 UI 线程。
注入的菜单项会插入到宿主固定菜单区（隐藏窗口/重启/关闭等）之间，
不会破坏宿主菜单的动态状态更新。
</p>

```csharp
public interface ITrayService
```

## Properties

### <a id="Ink_Canvas_Plugins_ITrayService_IsIconVisible"></a> IsIconVisible

托盘图标是否可见。写入时直接控制宿主托盘图标显隐；
注意宿主自身有「启用托盘图标」设置（<code>Settings.Appearance.EnableTrayIcon</code>），
宿主设置关闭时会再次隐藏图标，插件显隐只作为叠加控制。

```csharp
bool IsIconVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ITrayService_IsMainWindowVisible"></a> IsMainWindowVisible

主窗口是否可见（写入时同步托盘菜单里「隐藏主窗口」的勾选状态）。

```csharp
bool IsMainWindowVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Plugins_ITrayService_AddMenuItem_System_String_System_String_System_Action_"></a> AddMenuItem\(string, string, Action\)

向托盘右键菜单注入一个菜单项，插入到宿主固定菜单区之间。

```csharp
bool AddMenuItem(string id, string text, Action onClicked)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

菜单项唯一标识，用于后续移除/查重。

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

菜单项显示文本。

`onClicked` [Action](https://learn.microsoft.com/dotnet/api/system.action)

点击回调（在 UI 线程触发）。

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否成功；<code class="paramref">id</code> 已存在或参数无效时返回 false。

### <a id="Ink_Canvas_Plugins_ITrayService_HasMenuItem_System_String_"></a> HasMenuItem\(string\)

检查指定 id 的托盘菜单项是否存在。

```csharp
bool HasMenuItem(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_ITrayService_RemoveMenuItem_System_String_"></a> RemoveMenuItem\(string\)

移除之前注入的托盘菜单项。

```csharp
bool RemoveMenuItem(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否移除成功。

### <a id="Ink_Canvas_Plugins_ITrayService_ShowContextMenu"></a> ShowContextMenu\(\)

打开托盘右键菜单。

```csharp
void ShowContextMenu()
```

### <a id="Ink_Canvas_Plugins_ITrayService_LeftClicked"></a> LeftClicked

托盘图标左键按下时触发（宿主按用户设置的左键行为执行默认动作后触发）。

```csharp
event Action LeftClicked
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="Ink_Canvas_Plugins_ITrayService_RightClicked"></a> RightClicked

托盘图标右键按下时触发（宿主按用户设置的右键行为执行默认动作后触发）。

```csharp
event Action RightClicked
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

