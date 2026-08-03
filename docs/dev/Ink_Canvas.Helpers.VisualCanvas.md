# <a id="Ink_Canvas_Helpers_VisualCanvas"></a> Class VisualCanvas

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class VisualCanvas : FrameworkElement
```

#### Inheritance

FrameworkElement ← 
[VisualCanvas](Ink\_Canvas.Helpers.VisualCanvas.md)

## Constructors

### <a id="Ink_Canvas_Helpers_VisualCanvas__ctor"></a> VisualCanvas\(\)

```csharp
public VisualCanvas()
```

## Properties

### <a id="Ink_Canvas_Helpers_VisualCanvas_VisualChildrenCount"></a> VisualChildrenCount

```csharp
protected override int VisualChildrenCount { get; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_VisualCanvas_Visuals"></a> Visuals

```csharp
public IReadOnlyList<DrawingVisual> Visuals { get; }
```

#### Property Value

 IReadOnlyList<DrawingVisual\>

## Methods

### <a id="Ink_Canvas_Helpers_VisualCanvas_AddVisual_DrawingVisual_"></a> AddVisual\(DrawingVisual\)

```csharp
public void AddVisual(DrawingVisual visual)
```

#### Parameters

`visual` DrawingVisual

### <a id="Ink_Canvas_Helpers_VisualCanvas_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="Ink_Canvas_Helpers_VisualCanvas_GetVisualChild_System_Int32_"></a> GetVisualChild\(int\)

```csharp
protected override Visual GetVisualChild(int index)
```

#### Parameters

`index` int

#### Returns

 Visual

### <a id="Ink_Canvas_Helpers_VisualCanvas_RemoveVisual_DrawingVisual_"></a> RemoveVisual\(DrawingVisual\)

```csharp
public void RemoveVisual(DrawingVisual visual)
```

#### Parameters

`visual` DrawingVisual

