# <a id="Ink_Canvas_Helpers_ImprovedBezierSmoothing"></a> Class ImprovedBezierSmoothing

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

改进的三次贝塞尔曲线平滑算法

```csharp
public class ImprovedBezierSmoothing
```

#### Inheritance

object ← 
[ImprovedBezierSmoothing](Ink\_Canvas.Helpers.ImprovedBezierSmoothing.md)

## Constructors

### <a id="Ink_Canvas_Helpers_ImprovedBezierSmoothing__ctor_Ink_Canvas_Helpers_InkSmoothingConfig_"></a> ImprovedBezierSmoothing\(InkSmoothingConfig\)

```csharp
public ImprovedBezierSmoothing(InkSmoothingConfig config = null)
```

#### Parameters

`config` [InkSmoothingConfig](Ink\_Canvas.Helpers.InkSmoothingConfig.md)

## Methods

### <a id="Ink_Canvas_Helpers_ImprovedBezierSmoothing_SmoothStroke_Stroke_"></a> SmoothStroke\(Stroke\)

使用改进的贝塞尔曲线算法平滑笔画

```csharp
public Stroke SmoothStroke(Stroke originalStroke)
```

#### Parameters

`originalStroke` Stroke

#### Returns

 Stroke

