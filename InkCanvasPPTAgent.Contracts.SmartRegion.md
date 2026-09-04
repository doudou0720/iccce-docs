# <a id="InkCanvasPPTAgent_Contracts_SmartRegion"></a> Class SmartRegion

Namespace: [InkCanvasPPTAgent.Contracts](InkCanvasPPTAgent.Contracts.md)  
Assembly: InkCanvas.PPTAgent.Contracts.dll  

PPT 智慧模式：视频控件区域（坐标为原始 Shape 磅值，由主应用端做屏幕像素转换）

```csharp
public sealed class SmartRegion
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SmartRegion](InkCanvasPPTAgent.Contracts.SmartRegion.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="InkCanvasPPTAgent_Contracts_SmartRegion_Height"></a> Height

高度（磅）

```csharp
public double Height { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="InkCanvasPPTAgent_Contracts_SmartRegion_MediaType"></a> MediaType

媒体类型（PpMediaType，视频为 ppMediaTypeMovie = 3；仅作调试信息，不影响行为）

```csharp
public int MediaType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="InkCanvasPPTAgent_Contracts_SmartRegion_ShapeName"></a> ShapeName

Shape 名称（调试用）

```csharp
public string ShapeName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="InkCanvasPPTAgent_Contracts_SmartRegion_Width"></a> Width

宽度（磅）

```csharp
public double Width { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="InkCanvasPPTAgent_Contracts_SmartRegion_X"></a> X

左上角 X（磅）

```csharp
public double X { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="InkCanvasPPTAgent_Contracts_SmartRegion_Y"></a> Y

左上角 Y（磅）

```csharp
public double Y { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

