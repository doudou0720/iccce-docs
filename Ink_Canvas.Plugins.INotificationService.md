# <a id="Ink_Canvas_Plugins_INotificationService"></a> Interface INotificationService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

通知服务，供插件发送应用内通知。

```csharp
public interface INotificationService
```

## Methods

### <a id="Ink_Canvas_Plugins_INotificationService_ClearHistory_System_String_"></a> ClearHistory\(string\)

清空通知历史（按来源过滤；null 清空全部）。

```csharp
void ClearHistory(string source = null)
```

#### Parameters

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_INotificationService_GetHistory_System_String_"></a> GetHistory\(string\)

读取通知历史（宿主通知中心保留最近 100 条）。

```csharp
IReadOnlyList<PluginNotification> GetHistory(string source = null)
```

#### Parameters

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

按来源过滤；null 表示全部。

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PluginNotification](Ink\_Canvas.Plugins.PluginNotification.md)\>

### <a id="Ink_Canvas_Plugins_INotificationService_Show_System_String_System_String_Ink_Canvas_Plugins_NotificationLevel_"></a> Show\(string, string, NotificationLevel\)

发送一条通知消息。

```csharp
void Show(string title, string message, NotificationLevel level = NotificationLevel.Info)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

通知标题

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

通知内容

`level` [NotificationLevel](Ink\_Canvas.Plugins.NotificationLevel.md)

通知级别

### <a id="Ink_Canvas_Plugins_INotificationService_Show_System_String_System_String_Ink_Canvas_Plugins_NotificationLevel_System_Action_"></a> Show\(string, string, NotificationLevel, Action\)

发送一条带点击回调的通知。
灵动通知会显示操作按钮，用户点击后触发 <code class="paramref">onClicked</code>。

```csharp
void Show(string title, string message, NotificationLevel level, Action onClicked)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`level` [NotificationLevel](Ink\_Canvas.Plugins.NotificationLevel.md)

`onClicked` [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="Ink_Canvas_Plugins_INotificationService_ShowWindowsToast_System_String_System_String_"></a> ShowWindowsToast\(string, string\)

发送一条 Windows 系统通知中心 toast（Win7 自动降级为托盘气球通知）。

```csharp
void ShowWindowsToast(string title, string message)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

