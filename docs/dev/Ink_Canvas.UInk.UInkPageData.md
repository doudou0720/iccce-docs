# <a id="Ink_Canvas_UInk_UInkPageData"></a> Class UInkPageData

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

一个页面的映射结果（加载方向）：Canvas + 最终墨迹 + 撤回链 + 媒体 + Shape。

```csharp
public sealed class UInkPageData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UInkPageData](Ink\_Canvas.UInk.UInkPageData.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_UInk_UInkPageData_Canvas"></a> Canvas

```csharp
public UInkCanvas Canvas
```

#### Field Value

 [UInkCanvas](Ink\_Canvas.UInk.UInkCanvas.md)

### <a id="Ink_Canvas_UInk_UInkPageData_FinalStrokes"></a> FinalStrokes

```csharp
public StrokeCollection FinalStrokes
```

#### Field Value

 StrokeCollection

### <a id="Ink_Canvas_UInk_UInkPageData_History"></a> History

```csharp
public TimeMachineHistory[] History
```

#### Field Value

 [TimeMachineHistory](Ink\_Canvas.Helpers.TimeMachineHistory.md)\[\]

### <a id="Ink_Canvas_UInk_UInkPageData_Media"></a> Media

```csharp
public List<UInkMedia> Media
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UInkMedia](Ink\_Canvas.UInk.UInkMedia.md)\>

### <a id="Ink_Canvas_UInk_UInkPageData_Shapes"></a> Shapes

```csharp
public List<UInkShape> Shapes
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UInkShape](Ink\_Canvas.UInk.UInkShape.md)\>

