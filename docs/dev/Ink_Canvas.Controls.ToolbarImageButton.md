# <a id="Ink_Canvas_Controls_ToolbarImageButton"></a> Class ToolbarImageButton

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvas.Controls.dll  

```csharp
public class ToolbarImageButton : UserControl
```

#### Inheritance

UserControl ← 
[ToolbarImageButton](Ink\_Canvas.Controls.ToolbarImageButton.md)

## Constructors

### <a id="Ink_Canvas_Controls_ToolbarImageButton__ctor"></a> ToolbarImageButton\(\)

```csharp
public ToolbarImageButton()
```

## Fields

### <a id="Ink_Canvas_Controls_ToolbarImageButton_IconBrushProperty"></a> IconBrushProperty

```csharp
public static readonly DependencyProperty IconBrushProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_ToolbarImageButton_IconGeometryDrawingProperty"></a> IconGeometryDrawingProperty

```csharp
public static readonly DependencyProperty IconGeometryDrawingProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_ToolbarImageButton_LabelBrushProperty"></a> LabelBrushProperty

```csharp
public static readonly DependencyProperty LabelBrushProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_ToolbarImageButton_LabelProperty"></a> LabelProperty

```csharp
public static readonly DependencyProperty LabelProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_Controls_ToolbarImageButton_Background"></a> Background

```csharp
public Brush Background { get; set; }
```

#### Property Value

 Brush

### <a id="Ink_Canvas_Controls_ToolbarImageButton_Badge"></a> Badge

```csharp
public GeometryDrawing Badge { get; }
```

#### Property Value

 GeometryDrawing

### <a id="Ink_Canvas_Controls_ToolbarImageButton_GeometryDrawing"></a> GeometryDrawing

```csharp
public GeometryDrawing GeometryDrawing { get; }
```

#### Property Value

 GeometryDrawing

### <a id="Ink_Canvas_Controls_ToolbarImageButton_Icon"></a> Icon

```csharp
public GeometryDrawing Icon { get; }
```

#### Property Value

 GeometryDrawing

### <a id="Ink_Canvas_Controls_ToolbarImageButton_IconBrush"></a> IconBrush

```csharp
public Brush IconBrush { get; set; }
```

#### Property Value

 Brush

### <a id="Ink_Canvas_Controls_ToolbarImageButton_IconGeometryDrawing"></a> IconGeometryDrawing

```csharp
public GeometryDrawing IconGeometryDrawing { get; set; }
```

#### Property Value

 GeometryDrawing

### <a id="Ink_Canvas_Controls_ToolbarImageButton_IconHeight"></a> IconHeight

```csharp
public double IconHeight { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Controls_ToolbarImageButton_Label"></a> Label

```csharp
public string Label { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_ToolbarImageButton_LabelBrush"></a> LabelBrush

```csharp
public Brush LabelBrush { get; set; }
```

#### Property Value

 Brush

### <a id="Ink_Canvas_Controls_ToolbarImageButton_LabelFontSize"></a> LabelFontSize

```csharp
public double LabelFontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="Ink_Canvas_Controls_ToolbarImageButton_ApplyCompactMode_System_Boolean_"></a> ApplyCompactMode\(bool\)

应用紧凑浮动栏模式：开启后隐藏常驻文字标签，并让图标在保持纵横比的前提下拉伸填满空出的区域。

```csharp
public void ApplyCompactMode(bool compact)
```

#### Parameters

`compact` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_ToolbarImageButton_ApplyOrientation_System_Boolean_"></a> ApplyOrientation\(bool\)

```csharp
public void ApplyOrientation(bool isVertical)
```

#### Parameters

`isVertical` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_ToolbarImageButton_SetSelectedVisualOffset_System_Boolean_"></a> SetSelectedVisualOffset\(bool\)

```csharp
public void SetSelectedVisualOffset(bool isSelected)
```

#### Parameters

`isSelected` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_ToolbarImageButton_ButtonMouseDown"></a> ButtonMouseDown

```csharp
public event MouseButtonEventHandler ButtonMouseDown
```

#### Event Type

 MouseButtonEventHandler

### <a id="Ink_Canvas_Controls_ToolbarImageButton_ButtonMouseLeave"></a> ButtonMouseLeave

```csharp
public event MouseEventHandler ButtonMouseLeave
```

#### Event Type

 MouseEventHandler

### <a id="Ink_Canvas_Controls_ToolbarImageButton_ButtonMouseUp"></a> ButtonMouseUp

```csharp
public event MouseButtonEventHandler ButtonMouseUp
```

#### Event Type

 MouseButtonEventHandler

