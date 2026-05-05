# <a id="Ink_Canvas_Controls_PptNavBar"></a> Class PptNavBar

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvasForClass.dll  

PPT 翻页 + 增强预览一体化控件。
通过 <xref href="Ink_Canvas.Controls.PptNavBar.Direction" data-throw-if-not-resolved="false"></xref> 切换底部条 (LB/RB) 与侧边条 (LS/RS) 布局,
预览列表内嵌于同一个 Border,展开时占据按钮组之外的剩余空间。

```csharp
public class PptNavBar : UserControl
```

#### Inheritance

UserControl ← 
[PptNavBar](Ink\_Canvas.Controls.PptNavBar.md)

## Constructors

### <a id="Ink_Canvas_Controls_PptNavBar__ctor"></a> PptNavBar\(\)

```csharp
public PptNavBar()
```

## Fields

### <a id="Ink_Canvas_Controls_PptNavBar_CurrentSlideProperty"></a> CurrentSlideProperty

```csharp
public static readonly DependencyProperty CurrentSlideProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_PptNavBar_DirectionProperty"></a> DirectionProperty

```csharp
public static readonly DependencyProperty DirectionProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_PptNavBar_IsPreviewExpandedProperty"></a> IsPreviewExpandedProperty

```csharp
public static readonly DependencyProperty IsPreviewExpandedProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_PptNavBar_PreviewItemsProperty"></a> PreviewItemsProperty

```csharp
public static readonly DependencyProperty PreviewItemsProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Controls_PptNavBar_TotalSlidesProperty"></a> TotalSlidesProperty

```csharp
public static readonly DependencyProperty TotalSlidesProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_Controls_PptNavBar_CurrentSlide"></a> CurrentSlide

```csharp
public int CurrentSlide { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Controls_PptNavBar_Direction"></a> Direction

```csharp
public PptNavBar.NavDirection Direction { get; set; }
```

#### Property Value

 [PptNavBar](Ink\_Canvas.Controls.PptNavBar.md).[NavDirection](Ink\_Canvas.Controls.PptNavBar.NavDirection.md)

### <a id="Ink_Canvas_Controls_PptNavBar_IsPreviewExpanded"></a> IsPreviewExpanded

```csharp
public bool IsPreviewExpanded { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Controls_PptNavBar_PreviewItems"></a> PreviewItems

```csharp
public IList<PptNavBar.PreviewItem> PreviewItems { get; set; }
```

#### Property Value

 IList<[PptNavBar](Ink\_Canvas.Controls.PptNavBar.md).[PreviewItem](Ink\_Canvas.Controls.PptNavBar.PreviewItem.md)\>

### <a id="Ink_Canvas_Controls_PptNavBar_TotalSlides"></a> TotalSlides

```csharp
public int TotalSlides { get; set; }
```

#### Property Value

 int

## Methods

### <a id="Ink_Canvas_Controls_PptNavBar_ApplyTheme_System_Boolean_"></a> ApplyTheme\(bool\)

```csharp
public void ApplyTheme(bool isDark)
```

#### Parameters

`isDark` bool

### <a id="Ink_Canvas_Controls_PptNavBar_SetBarOpacity_System_Double_"></a> SetBarOpacity\(double\)

```csharp
public void SetBarOpacity(double opacity)
```

#### Parameters

`opacity` double

### <a id="Ink_Canvas_Controls_PptNavBar_SetPageButtonVisibility_Visibility_"></a> SetPageButtonVisibility\(Visibility\)

```csharp
public void SetPageButtonVisibility(Visibility v)
```

#### Parameters

`v` Visibility

### <a id="Ink_Canvas_Controls_PptNavBar_NextClick"></a> NextClick

```csharp
public event EventHandler NextClick
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Controls_PptNavBar_NextPressedDown"></a> NextPressedDown

```csharp
public event EventHandler NextPressedDown
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Controls_PptNavBar_PageClick"></a> PageClick

```csharp
public event EventHandler PageClick
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Controls_PptNavBar_PressEnded"></a> PressEnded

```csharp
public event EventHandler PressEnded
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Controls_PptNavBar_PreviewExpandedChanged"></a> PreviewExpandedChanged

```csharp
public event EventHandler<bool> PreviewExpandedChanged
```

#### Event Type

 EventHandler<bool\>

### <a id="Ink_Canvas_Controls_PptNavBar_PreviousClick"></a> PreviousClick

```csharp
public event EventHandler PreviousClick
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Controls_PptNavBar_PreviousPressedDown"></a> PreviousPressedDown

```csharp
public event EventHandler PreviousPressedDown
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Controls_PptNavBar_SlideSelected"></a> SlideSelected

```csharp
public event EventHandler<int> SlideSelected
```

#### Event Type

 EventHandler<int\>

