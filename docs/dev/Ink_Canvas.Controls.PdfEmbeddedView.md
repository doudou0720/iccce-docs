# <a id="Ink_Canvas_Controls_PdfEmbeddedView"></a> Class PdfEmbeddedView

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvasForClass.dll  

画布上的多页 PDF：仅显示当前页；翻页与页码由主窗口 PDF 侧栏控制（无 XAML 文件）。

```csharp
public class PdfEmbeddedView : UserControl
```

#### Inheritance

UserControl ← 
[PdfEmbeddedView](Ink\_Canvas.Controls.PdfEmbeddedView.md)

## Constructors

### <a id="Ink_Canvas_Controls_PdfEmbeddedView__ctor"></a> PdfEmbeddedView\(\)

```csharp
public PdfEmbeddedView()
```

## Properties

### <a id="Ink_Canvas_Controls_PdfEmbeddedView_CanGoNext"></a> CanGoNext

```csharp
public bool CanGoNext { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Controls_PdfEmbeddedView_CanGoPrevious"></a> CanGoPrevious

```csharp
public bool CanGoPrevious { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Controls_PdfEmbeddedView_CurrentPageIndex"></a> CurrentPageIndex

```csharp
public uint CurrentPageIndex { get; }
```

#### Property Value

 uint

### <a id="Ink_Canvas_Controls_PdfEmbeddedView_PageCount"></a> PageCount

```csharp
public uint PageCount { get; }
```

#### Property Value

 uint

### <a id="Ink_Canvas_Controls_PdfEmbeddedView_PageLabelText"></a> PageLabelText

```csharp
public string PageLabelText { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Controls_PdfEmbeddedView_PdfPath"></a> PdfPath

```csharp
public string PdfPath { get; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_Controls_PdfEmbeddedView_GoToNextPageAsync"></a> GoToNextPageAsync\(\)

```csharp
public Task GoToNextPageAsync()
```

#### Returns

 Task

### <a id="Ink_Canvas_Controls_PdfEmbeddedView_GoToPreviousPageAsync"></a> GoToPreviousPageAsync\(\)

```csharp
public Task GoToPreviousPageAsync()
```

#### Returns

 Task

### <a id="Ink_Canvas_Controls_PdfEmbeddedView_InitializeAsync_System_String_System_UInt32_System_Boolean_System_UInt32_"></a> InitializeAsync\(string, uint, bool, uint\)

初始化并显示指定页；由 MainWindow 在 UI 线程创建后调用。

```csharp
public Task InitializeAsync(string pdfFilePath, uint pageCount, bool compressLargePictures, uint initialPageIndex = null)
```

#### Parameters

`pdfFilePath` string

`pageCount` uint

`compressLargePictures` bool

`initialPageIndex` uint

从 0 开始的页码，超出范围时夹紧到合法区间。

#### Returns

 Task

### <a id="Ink_Canvas_Controls_PdfEmbeddedView_PageNavigationStateChanged"></a> PageNavigationStateChanged

页码或可翻页状态变化（用于更新侧栏）。

```csharp
public event EventHandler PageNavigationStateChanged
```

#### Event Type

 EventHandler

