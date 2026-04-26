# <a id="Ink_Canvas_Helpers_UploadQueueItemData"></a> Class UploadQueueItemData

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

上传队列项数据（用于序列化）

```csharp
public class UploadQueueItemData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UploadQueueItemData](Ink\_Canvas.Helpers.UploadQueueItemData.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Helpers_UploadQueueItemData_AddedTime"></a> AddedTime

```csharp
[JsonProperty("added_time")]
public DateTime AddedTime { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Ink_Canvas_Helpers_UploadQueueItemData_FilePath"></a> FilePath

```csharp
[JsonProperty("file_path")]
public string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_UploadQueueItemData_RetryCount"></a> RetryCount

```csharp
[JsonProperty("retry_count")]
public int RetryCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

