# <a id="Ink_Canvas_Helpers_FillImage"></a> Class FillImage

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

继承自 FrameworkElement，自行管理 Source + Stretch 渲染。
行为与 WPFMediaKit 的 VideoCaptureElement 一致：
  MeasureOverride / ArrangeOverride 都返回可用空间本身（填满容器），
  OnRender 在 RenderSize 内按 Stretch=Uniform 居中绘制图像（有黑边但居中）。
不继承 Image：Image.ArrangeOverride 返回按图像比例 fit 后的尺寸（小于容器），
且内部 _arrangedSize 在 LayoutTransform 旋转后会与实际不匹配导致拉伸。
用于拍照后的照片预览，使其与实时画面走完全相同的变换管线。

```csharp
public class FillImage : FrameworkElement
```

#### Inheritance

FrameworkElement ← 
[FillImage](Ink\_Canvas.Helpers.FillImage.md)

## Fields

### <a id="Ink_Canvas_Helpers_FillImage_SourceProperty"></a> SourceProperty

```csharp
public static readonly DependencyProperty SourceProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Helpers_FillImage_StretchProperty"></a> StretchProperty

```csharp
public static readonly DependencyProperty StretchProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_Helpers_FillImage_Source"></a> Source

```csharp
public ImageSource Source { get; set; }
```

#### Property Value

 ImageSource

### <a id="Ink_Canvas_Helpers_FillImage_Stretch"></a> Stretch

```csharp
public Stretch Stretch { get; set; }
```

#### Property Value

 Stretch

## Methods

### <a id="Ink_Canvas_Helpers_FillImage_ArrangeOverride_Size_"></a> ArrangeOverride\(Size\)

```csharp
protected override Size ArrangeOverride(Size finalSize)
```

#### Parameters

`finalSize` Size

#### Returns

 Size

### <a id="Ink_Canvas_Helpers_FillImage_MeasureOverride_Size_"></a> MeasureOverride\(Size\)

```csharp
protected override Size MeasureOverride(Size availableSize)
```

#### Parameters

`availableSize` Size

#### Returns

 Size

### <a id="Ink_Canvas_Helpers_FillImage_OnRender_DrawingContext_"></a> OnRender\(DrawingContext\)

```csharp
protected override void OnRender(DrawingContext drawingContext)
```

#### Parameters

`drawingContext` DrawingContext

