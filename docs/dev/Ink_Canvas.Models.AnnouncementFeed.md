# <a id="Ink_Canvas_Models_AnnouncementFeed"></a> Class AnnouncementFeed

Namespace: [Ink\_Canvas.Models](Ink\_Canvas.Models.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class AnnouncementFeed
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnnouncementFeed](Ink\_Canvas.Models.AnnouncementFeed.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Models_AnnouncementFeed_Items"></a> Items

```csharp
[JsonProperty("items")]
public List<AnnouncementItem> Items { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AnnouncementItem](Ink\_Canvas.Models.AnnouncementItem.md)\>

### <a id="Ink_Canvas_Models_AnnouncementFeed_SchemaVersion"></a> SchemaVersion

```csharp
[JsonProperty("schemaVersion")]
public int SchemaVersion { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Models_AnnouncementFeed_UpdatedAt"></a> UpdatedAt

```csharp
[JsonProperty("updatedAt")]
public DateTimeOffset? UpdatedAt { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

