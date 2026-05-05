# <a id="Ink_Canvas_Helpers_StrokeVisual"></a> Class StrokeVisual

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

用于显示笔迹的类

```csharp
public class StrokeVisual
```

#### Inheritance

object ← 
[StrokeVisual](Ink\_Canvas.Helpers.StrokeVisual.md)

## Constructors

### <a id="Ink_Canvas_Helpers_StrokeVisual__ctor"></a> StrokeVisual\(\)

创建显示笔迹的类

```csharp
public StrokeVisual()
```

### <a id="Ink_Canvas_Helpers_StrokeVisual__ctor_DrawingAttributes_"></a> StrokeVisual\(DrawingAttributes\)

创建显示笔迹的类

```csharp
public StrokeVisual(DrawingAttributes drawingAttributes)
```

#### Parameters

`drawingAttributes` DrawingAttributes

## Properties

### <a id="Ink_Canvas_Helpers_StrokeVisual_Stroke"></a> Stroke

设置或获取显示的笔迹

```csharp
public Stroke Stroke { get; set; }
```

#### Property Value

 Stroke

## Methods

### <a id="Ink_Canvas_Helpers_StrokeVisual_Add_StylusPoint_"></a> Add\(StylusPoint\)

在笔迹中添加点

```csharp
public void Add(StylusPoint point)
```

#### Parameters

`point` StylusPoint

### <a id="Ink_Canvas_Helpers_StrokeVisual_ForceRedraw"></a> ForceRedraw\(\)

强制重绘

```csharp
public void ForceRedraw()
```

### <a id="Ink_Canvas_Helpers_StrokeVisual_Redraw"></a> Redraw\(\)

重新画出笔迹

```csharp
public void Redraw()
```

### <a id="Ink_Canvas_Helpers_StrokeVisual_SetVisualCanvas_Ink_Canvas_Helpers_VisualCanvas_"></a> SetVisualCanvas\(VisualCanvas\)

设置关联的VisualCanvas

```csharp
public void SetVisualCanvas(VisualCanvas visualCanvas)
```

#### Parameters

`visualCanvas` [VisualCanvas](Ink\_Canvas.Helpers.VisualCanvas.md)

