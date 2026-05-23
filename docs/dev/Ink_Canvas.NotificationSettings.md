# <a id="Ink_Canvas_NotificationSettings"></a> Class NotificationSettings

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class NotificationSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NotificationSettings](Ink\_Canvas.NotificationSettings.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_NotificationSettings_BuiltInSoftwareToken"></a> BuiltInSoftwareToken

```csharp
public const string BuiltInSoftwareToken = "492e41ea8eb61fc9a1d336b3852a4478"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Ink_Canvas_NotificationSettings_AnimationMode"></a> AnimationMode

```csharp
[JsonProperty("animationMode")]
public string AnimationMode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_NotificationSettings_AnnouncementApiBaseUrl"></a> AnnouncementApiBaseUrl

```csharp
[JsonIgnore]
public string AnnouncementApiBaseUrl { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_NotificationSettings_AnnouncementSoftwareToken"></a> AnnouncementSoftwareToken

```csharp
[JsonIgnore]
public string AnnouncementSoftwareToken { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_NotificationSettings_AnnouncementWebSocketUrl"></a> AnnouncementWebSocketUrl

```csharp
[JsonIgnore]
public string AnnouncementWebSocketUrl { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_NotificationSettings_ImportantDurationSeconds"></a> ImportantDurationSeconds

```csharp
[JsonProperty("importantDurationSeconds")]
public int ImportantDurationSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_NotificationSettings_IsAnnouncementEnabled"></a> IsAnnouncementEnabled

```csharp
[JsonProperty("isAnnouncementEnabled")]
public bool IsAnnouncementEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_NotificationSettings_IsDictationDoNotDisturbEnabled"></a> IsDictationDoNotDisturbEnabled

```csharp
[JsonProperty("isDictationDoNotDisturbEnabled")]
public bool IsDictationDoNotDisturbEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_NotificationSettings_IsDictationDoNotDisturbInPptEnabled"></a> IsDictationDoNotDisturbInPptEnabled

```csharp
[JsonProperty("isDictationDoNotDisturbInPptEnabled")]
public bool IsDictationDoNotDisturbInPptEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_NotificationSettings_IsDictationDoNotDisturbInWhiteboardEnabled"></a> IsDictationDoNotDisturbInWhiteboardEnabled

```csharp
[JsonProperty("isDictationDoNotDisturbInWhiteboardEnabled")]
public bool IsDictationDoNotDisturbInWhiteboardEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_NotificationSettings_IsDynamicNotificationEnabled"></a> IsDynamicNotificationEnabled

```csharp
[JsonProperty("isDynamicNotificationEnabled")]
public bool IsDynamicNotificationEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_NotificationSettings_IsForcePopupEnabled"></a> IsForcePopupEnabled

```csharp
[JsonProperty("isForcePopupEnabled")]
public bool IsForcePopupEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_NotificationSettings_IsWindowsToastEnabled"></a> IsWindowsToastEnabled

```csharp
[JsonProperty("isWindowsToastEnabled")]
public bool IsWindowsToastEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_NotificationSettings_OtherDurationSeconds"></a> OtherDurationSeconds

```csharp
[JsonProperty("otherDurationSeconds")]
public int OtherDurationSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_NotificationSettings_Placement"></a> Placement

```csharp
[JsonProperty("placement")]
public string Placement { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_NotificationSettings_ReadAnnouncementIds"></a> ReadAnnouncementIds

```csharp
[JsonProperty("readAnnouncementIds")]
public List<string> ReadAnnouncementIds { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_NotificationSettings_ReminderDurationSeconds"></a> ReminderDurationSeconds

```csharp
[JsonProperty("reminderDurationSeconds")]
public int ReminderDurationSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_NotificationSettings_UpdateDurationSeconds"></a> UpdateDurationSeconds

```csharp
[JsonProperty("updateDurationSeconds")]
public int UpdateDurationSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_NotificationSettings_UrgentDurationSeconds"></a> UrgentDurationSeconds

```csharp
[JsonProperty("urgentDurationSeconds")]
public int UrgentDurationSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

