# <a id="Ink_Canvas_Plugins_INotificationService"></a> Interface INotificationService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

通知服务，供插件发送应用内通知。

```csharp
public interface INotificationService
```

## Methods

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

```csharp
void Show(string title, string message, NotificationLevel level, Action onClicked)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`level` [NotificationLevel](Ink\_Canvas.Plugins.NotificationLevel.md)

`onClicked` [Action](https://learn.microsoft.com/dotnet/api/system.action)

