# <a id="Ink_Canvas_Helpers_StrokeVisual"></a> Class StrokeVisual

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

用于显示笔迹的类

```csharp
public class StrokeVisual
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StrokeVisual](Ink\_Canvas.Helpers.StrokeVisual.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_StrokeVisual__ctor"></a> StrokeVisual\(\)

创建显示笔迹的类

```csharp
public StrokeVisual()
```

### <a id="Ink_Canvas_Helpers_StrokeVisual__ctor_System_Windows_Ink_DrawingAttributes_"></a> StrokeVisual\(DrawingAttributes\)

创建显示笔迹的类

```csharp
public StrokeVisual(DrawingAttributes drawingAttributes)
```

#### Parameters

`drawingAttributes` [DrawingAttributes](https://learn.microsoft.com/dotnet/api/system.windows.ink.drawingattributes)

## Properties

### <a id="Ink_Canvas_Helpers_StrokeVisual_Stroke"></a> Stroke

设置或获取显示的笔迹

```csharp
public Stroke Stroke { get; set; }
```

#### Property Value

 [Stroke](https://learn.microsoft.com/dotnet/api/system.windows.ink.stroke)

## Methods

### <a id="Ink_Canvas_Helpers_StrokeVisual_Add_System_Windows_Input_StylusPoint_"></a> Add\(StylusPoint\)

```csharp
public void Add(StylusPoint point)
```

#### Parameters

`point` [StylusPoint](https://learn.microsoft.com/dotnet/api/system.windows.input.styluspoint)

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

