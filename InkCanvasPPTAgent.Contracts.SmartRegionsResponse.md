# <a id="InkCanvasPPTAgent_Contracts_SmartRegionsResponse"></a> Class SmartRegionsResponse

Namespace: [InkCanvasPPTAgent.Contracts](InkCanvasPPTAgent.Contracts.md)  
Assembly: InkCanvas.PPTAgent.Contracts.dll  

PPT Agent / COM 返回的智慧模式区域列表及放映窗口信息

```csharp
public sealed class SmartRegionsResponse
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SmartRegionsResponse](InkCanvasPPTAgent.Contracts.SmartRegionsResponse.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="InkCanvasPPTAgent_Contracts_SmartRegionsResponse_Regions"></a> Regions

```csharp
public List<SmartRegion> Regions { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SmartRegion](InkCanvasPPTAgent.Contracts.SmartRegion.md)\>

### <a id="InkCanvasPPTAgent_Contracts_SmartRegionsResponse_SlideHeight"></a> SlideHeight

幻灯片高度（磅）

```csharp
public float SlideHeight { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="InkCanvasPPTAgent_Contracts_SmartRegionsResponse_SlideIndex"></a> SlideIndex

当前幻灯片索引（1-based）

```csharp
public int SlideIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="InkCanvasPPTAgent_Contracts_SmartRegionsResponse_SlideShowWindowHandle"></a> SlideShowWindowHandle

放映窗口句柄（主应用用于坐标转换）

```csharp
public long SlideShowWindowHandle { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="InkCanvasPPTAgent_Contracts_SmartRegionsResponse_SlideWidth"></a> SlideWidth

幻灯片宽度（磅）

```csharp
public float SlideWidth { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

