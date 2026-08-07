# <a id="Ink_Canvas_Plugins_IAnnouncementService"></a> Interface IAnnouncementService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

公告服务：供插件读取宿主公告中心的未读数、历史与标记已读。

```csharp
public interface IAnnouncementService
```

## Methods

### <a id="Ink_Canvas_Plugins_IAnnouncementService_ClearHistory"></a> ClearHistory\(\)

清空公告历史。

```csharp
void ClearHistory()
```

### <a id="Ink_Canvas_Plugins_IAnnouncementService_GetHistory"></a> GetHistory\(\)

公告历史列表。

```csharp
IReadOnlyList<PluginAnnouncement> GetHistory()
```

#### Returns

 IReadOnlyList<[PluginAnnouncement](Ink\_Canvas.Plugins.PluginAnnouncement.md)\>

### <a id="Ink_Canvas_Plugins_IAnnouncementService_GetUnreadCount"></a> GetUnreadCount\(\)

未读公告数。

```csharp
int GetUnreadCount()
```

#### Returns

 int

### <a id="Ink_Canvas_Plugins_IAnnouncementService_MarkAllAsRead"></a> MarkAllAsRead\(\)

全部标记为已读。

```csharp
void MarkAllAsRead()
```

### <a id="Ink_Canvas_Plugins_IAnnouncementService_MarkAsRead_System_String_"></a> MarkAsRead\(string\)

把指定公告标记为已读。

```csharp
void MarkAsRead(string announcementId)
```

#### Parameters

`announcementId` string

### <a id="Ink_Canvas_Plugins_IAnnouncementService_UnreadCountChanged"></a> UnreadCountChanged

未读数变化时触发。

```csharp
event Action UnreadCountChanged
```

#### Event Type

 Action

