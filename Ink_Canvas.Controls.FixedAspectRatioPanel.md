# <a id="Ink_Canvas_Controls_FixedAspectRatioPanel"></a> Class FixedAspectRatioPanel

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvasForClass.dll  

在父容器可用空间内计算最大的固定宽高比矩形，
子元素按真实布局尺寸排列（无任何缩放变换），多余空间居中留白。

```csharp
public class FixedAspectRatioPanel : Panel
```

#### Inheritance

Panel ← 
[FixedAspectRatioPanel](Ink\_Canvas.Controls.FixedAspectRatioPanel.md)

## Fields

### <a id="Ink_Canvas_Controls_FixedAspectRatioPanel_AspectRatioProperty"></a> AspectRatioProperty

```csharp
public static readonly DependencyProperty AspectRatioProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_Controls_FixedAspectRatioPanel_AspectRatio"></a> AspectRatio

```csharp
public double AspectRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="Ink_Canvas_Controls_FixedAspectRatioPanel_ArrangeOverride_Size_"></a> ArrangeOverride\(Size\)

```csharp
protected override Size ArrangeOverride(Size finalSize)
```

#### Parameters

`finalSize` Size

#### Returns

 Size

### <a id="Ink_Canvas_Controls_FixedAspectRatioPanel_MeasureOverride_Size_"></a> MeasureOverride\(Size\)

```csharp
protected override Size MeasureOverride(Size availableSize)
```

#### Parameters

`availableSize` Size

#### Returns

 Size

