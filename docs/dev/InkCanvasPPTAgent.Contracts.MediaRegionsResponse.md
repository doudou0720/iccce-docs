# <a id="InkCanvasPPTAgent_Contracts_MediaRegionsResponse"></a> Class MediaRegionsResponse

Namespace: [InkCanvasPPTAgent.Contracts](InkCanvasPPTAgent.Contracts.md)  
Assembly: InkCanvas.PPTAgent.Contracts.dll  

VSTO 端返回的媒体区域列表及当前放映窗口句柄

```csharp
public sealed class MediaRegionsResponse
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MediaRegionsResponse](InkCanvasPPTAgent.Contracts.MediaRegionsResponse.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="InkCanvasPPTAgent_Contracts_MediaRegionsResponse_Regions"></a> Regions

```csharp
public List<MediaRegion> Regions { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[MediaRegion](InkCanvasPPTAgent.Contracts.MediaRegion.md)\>

### <a id="InkCanvasPPTAgent_Contracts_MediaRegionsResponse_SlideHeight"></a> SlideHeight

幻灯片高度（磅）

```csharp
public float SlideHeight { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="InkCanvasPPTAgent_Contracts_MediaRegionsResponse_SlideIndex"></a> SlideIndex

```csharp
public int SlideIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="InkCanvasPPTAgent_Contracts_MediaRegionsResponse_SlideShowWindowHandle"></a> SlideShowWindowHandle

放映窗口句柄（主应用用于直接转发点击）

```csharp
public long SlideShowWindowHandle { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="InkCanvasPPTAgent_Contracts_MediaRegionsResponse_SlideWidth"></a> SlideWidth

幻灯片宽度（磅）

```csharp
public float SlideWidth { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

