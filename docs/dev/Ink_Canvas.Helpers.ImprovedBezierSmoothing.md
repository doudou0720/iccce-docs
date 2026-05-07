# <a id="Ink_Canvas_Helpers_ImprovedBezierSmoothing"></a> Class ImprovedBezierSmoothing

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

改进的三次贝塞尔曲线平滑算法

```csharp
public class ImprovedBezierSmoothing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ImprovedBezierSmoothing](Ink\_Canvas.Helpers.ImprovedBezierSmoothing.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_ImprovedBezierSmoothing__ctor_Ink_Canvas_Helpers_InkSmoothingConfig_"></a> ImprovedBezierSmoothing\(InkSmoothingConfig\)

```csharp
public ImprovedBezierSmoothing(InkSmoothingConfig config = null)
```

#### Parameters

`config` [InkSmoothingConfig](Ink\_Canvas.Helpers.InkSmoothingConfig.md)

## Methods

### <a id="Ink_Canvas_Helpers_ImprovedBezierSmoothing_SmoothStroke_System_Windows_Ink_Stroke_"></a> SmoothStroke\(Stroke\)

使用改进的贝塞尔曲线算法平滑笔画

```csharp
public Stroke SmoothStroke(Stroke originalStroke)
```

#### Parameters

`originalStroke` [Stroke](https://learn.microsoft.com/dotnet/api/system.windows.ink.stroke)

#### Returns

 [Stroke](https://learn.microsoft.com/dotnet/api/system.windows.ink.stroke)

