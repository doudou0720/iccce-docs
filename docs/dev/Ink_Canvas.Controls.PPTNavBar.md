# <a id="Ink_Canvas_Controls_PPTNavBar"></a> Class PPTNavBar

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvasForClass.dll  

PPT 翻页 + 增强预览一体化控件。
通过 <xref href="Ink_Canvas.Controls.PPTNavBar.Direction" data-throw-if-not-resolved="false"></xref> 切换底部条 (LB/RB) 与侧边条 (LS/RS) 布局,
预览列表内嵌于同一个 Border,展开时占据按钮组之外的剩余空间。

```csharp
public class PPTNavBar : UserControl
```

#### Inheritance

UserControl ← 
[PPTNavBar](Ink\_Canvas.Controls.PPTNavBar.md)

## Constructors

### <a id="Ink_Canvas_Controls_PPTNavBar__ctor"></a> PPTNavBar\(\)

```csharp
public PPTNavBar()
```

## Fields

### <a id="Ink_Canvas_Controls_PPTNavBar_CurrentSlideProperty"></a> CurrentSlideProperty

```csharp
public static readonly DependencyProperty CurrentSlideProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_PPTNavBar_DirectionProperty"></a> DirectionProperty

```csharp
public static readonly DependencyProperty DirectionProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_PPTNavBar_IsPreviewExpandedProperty"></a> IsPreviewExpandedProperty

```csharp
public static readonly DependencyProperty IsPreviewExpandedProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_PPTNavBar_PreviewItemsProperty"></a> PreviewItemsProperty

```csharp
public static readonly DependencyProperty PreviewItemsProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_PPTNavBar_TotalSlidesProperty"></a> TotalSlidesProperty

```csharp
public static readonly DependencyProperty TotalSlidesProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_Controls_PPTNavBar_CurrentSlide"></a> CurrentSlide

```csharp
public int CurrentSlide { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Controls_PPTNavBar_Direction"></a> Direction

```csharp
public PPTNavBar.NavDirection Direction { get; set; }
```

#### Property Value

 [PPTNavBar](Ink\_Canvas.Controls.PPTNavBar.md).[NavDirection](Ink\_Canvas.Controls.PPTNavBar.NavDirection.md)

### <a id="Ink_Canvas_Controls_PPTNavBar_IsPreviewExpanded"></a> IsPreviewExpanded

```csharp
public bool IsPreviewExpanded { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Controls_PPTNavBar_PreviewItems"></a> PreviewItems

```csharp
public IList<PPTNavBar.PreviewItem> PreviewItems { get; set; }
```

#### Property Value

 IList<[PPTNavBar](Ink\_Canvas.Controls.PPTNavBar.md).[PreviewItem](Ink\_Canvas.Controls.PPTNavBar.PreviewItem.md)\>

### <a id="Ink_Canvas_Controls_PPTNavBar_TotalSlides"></a> TotalSlides

```csharp
public int TotalSlides { get; set; }
```

#### Property Value

 int

## Methods

### <a id="Ink_Canvas_Controls_PPTNavBar_ApplyTheme_System_Boolean_"></a> ApplyTheme\(bool\)

```csharp
public void ApplyTheme(bool isDark)
```

#### Parameters

`isDark` bool

### <a id="Ink_Canvas_Controls_PPTNavBar_SetBarOpacity_System_Double_"></a> SetBarOpacity\(double\)

```csharp
public void SetBarOpacity(double opacity)
```

#### Parameters

`opacity` double

### <a id="Ink_Canvas_Controls_PPTNavBar_SetBarScale_System_Double_"></a> SetBarScale\(double\)

```csharp
public void SetBarScale(double scale)
```

#### Parameters

`scale` double

### <a id="Ink_Canvas_Controls_PPTNavBar_SetPageButtonVisibility_Visibility_"></a> SetPageButtonVisibility\(Visibility\)

```csharp
public void SetPageButtonVisibility(Visibility v)
```

#### Parameters

`v` Visibility

### <a id="Ink_Canvas_Controls_PPTNavBar_NextClick"></a> NextClick

```csharp
public event EventHandler NextClick
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Controls_PPTNavBar_NextPressedDown"></a> NextPressedDown

```csharp
public event EventHandler NextPressedDown
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Controls_PPTNavBar_PageClick"></a> PageClick

```csharp
public event EventHandler PageClick
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Controls_PPTNavBar_PressEnded"></a> PressEnded

```csharp
public event EventHandler PressEnded
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Controls_PPTNavBar_PreviewExpandedChanged"></a> PreviewExpandedChanged

```csharp
public event EventHandler<bool> PreviewExpandedChanged
```

#### Event Type

 EventHandler<bool\>

### <a id="Ink_Canvas_Controls_PPTNavBar_PreviousClick"></a> PreviousClick

```csharp
public event EventHandler PreviousClick
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Controls_PPTNavBar_PreviousPressedDown"></a> PreviousPressedDown

```csharp
public event EventHandler PreviousPressedDown
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Controls_PPTNavBar_SlideSelected"></a> SlideSelected

```csharp
public event EventHandler<int> SlideSelected
```

#### Event Type

 EventHandler<int\>

