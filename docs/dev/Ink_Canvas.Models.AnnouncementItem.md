# <a id="Ink_Canvas_Models_AnnouncementItem"></a> Class AnnouncementItem

Namespace: [Ink\_Canvas.Models](Ink\_Canvas.Models.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class AnnouncementItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnnouncementItem](Ink\_Canvas.Models.AnnouncementItem.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Models_AnnouncementItem_ActionText"></a> ActionText

```csharp
[JsonProperty("actionText")]
public object ActionText { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Models_AnnouncementItem_ActionUrl"></a> ActionUrl

```csharp
[JsonProperty("actionUrl")]
public string ActionUrl { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_AnnouncementItem_AnnouncementType"></a> AnnouncementType

```csharp
[JsonProperty("announcement_type")]
public string AnnouncementType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_AnnouncementItem_Channels"></a> Channels

```csharp
[JsonProperty("channels")]
public List<string> Channels { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Models_AnnouncementItem_Content"></a> Content

```csharp
[JsonProperty("content")]
public object Content { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Models_AnnouncementItem_CreatedAt"></a> CreatedAt

```csharp
[JsonProperty("created_at")]
public DateTimeOffset? CreatedAt { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Ink_Canvas_Models_AnnouncementItem_DisplaySeconds"></a> DisplaySeconds

```csharp
[JsonProperty("displaySeconds")]
public int DisplaySeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Models_AnnouncementItem_EndAt"></a> EndAt

```csharp
[JsonProperty("endAt")]
public DateTimeOffset? EndAt { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Ink_Canvas_Models_AnnouncementItem_ExpiresAt"></a> ExpiresAt

```csharp
[JsonProperty("expires_at")]
public DateTimeOffset? ExpiresAt { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Ink_Canvas_Models_AnnouncementItem_FilterChannels"></a> FilterChannels

```csharp
[JsonProperty("filter_channels")]
public List<string> FilterChannels { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Models_AnnouncementItem_FilterType"></a> FilterType

```csharp
[JsonProperty("filter_type")]
public string FilterType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_AnnouncementItem_FilterVersions"></a> FilterVersions

```csharp
[JsonProperty("filter_versions")]
public List<string> FilterVersions { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Models_AnnouncementItem_ForcePopup"></a> ForcePopup

```csharp
[JsonProperty("forcePopup")]
public bool ForcePopup { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Models_AnnouncementItem_Icon"></a> Icon

```csharp
[JsonProperty("icon")]
public string Icon { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_AnnouncementItem_Id"></a> Id

```csharp
[JsonProperty("id")]
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_AnnouncementItem_Level"></a> Level

```csharp
[JsonProperty("level")]
public string Level { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_AnnouncementItem_MaxVersion"></a> MaxVersion

```csharp
[JsonProperty("maxVersion")]
public string MaxVersion { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_AnnouncementItem_MinVersion"></a> MinVersion

```csharp
[JsonProperty("minVersion")]
public string MinVersion { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_AnnouncementItem_Priority"></a> Priority

```csharp
[JsonProperty("priority")]
public int Priority { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Models_AnnouncementItem_PublishedAt"></a> PublishedAt

```csharp
[JsonProperty("published_at")]
public DateTimeOffset? PublishedAt { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Ink_Canvas_Models_AnnouncementItem_Software"></a> Software

```csharp
[JsonProperty("software")]
public string Software { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_AnnouncementItem_SoftwareName"></a> SoftwareName

```csharp
[JsonProperty("software_name")]
public string SoftwareName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_AnnouncementItem_StartAt"></a> StartAt

```csharp
[JsonProperty("startAt")]
public DateTimeOffset? StartAt { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Ink_Canvas_Models_AnnouncementItem_Status"></a> Status

```csharp
[JsonProperty("status")]
public string Status { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_AnnouncementItem_Summary"></a> Summary

```csharp
[JsonProperty("summary")]
public object Summary { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Models_AnnouncementItem_Title"></a> Title

```csharp
[JsonProperty("title")]
public object Title { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Models_AnnouncementItem_Type"></a> Type

```csharp
[JsonProperty("type")]
public string Type { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Models_AnnouncementItem_UpdatedAt"></a> UpdatedAt

```csharp
[JsonProperty("updated_at")]
public DateTimeOffset? UpdatedAt { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

