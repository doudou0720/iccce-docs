# <a id="Ink_Canvas_Windows_SettingsViews_PPTPageFlipPreviewWindow"></a> Class PPTPageFlipPreviewWindow

Namespace: [Ink\_Canvas.Windows.SettingsViews](Ink\_Canvas.Windows.SettingsViews.md)  
Assembly: InkCanvasForClass.dll  

全屏预览的背景窗口：仅承载 PPT 背景图，位于 SettingsWindow 之下、MainWindow 之上。
4 个翻页按钮已拆分到 <xref href="Ink_Canvas.Windows.SettingsViews.PPTPageFlipPreviewOverlayWindow" data-throw-if-not-resolved="false"></xref>（顶层，浮在 SettingsWindow 之上）。

```csharp
public class PPTPageFlipPreviewWindow : Window
```

#### Inheritance

Window ← 
[PPTPageFlipPreviewWindow](Ink\_Canvas.Windows.SettingsViews.PPTPageFlipPreviewWindow.md)

## Constructors

### <a id="Ink_Canvas_Windows_SettingsViews_PPTPageFlipPreviewWindow__ctor"></a> PPTPageFlipPreviewWindow\(\)

```csharp
public PPTPageFlipPreviewWindow()
```

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_PPTPageFlipPreviewWindow_ActiveInstance"></a> ActiveInstance

```csharp
public static PPTPageFlipPreviewWindow ActiveInstance { get; }
```

#### Property Value

 [PPTPageFlipPreviewWindow](Ink\_Canvas.Windows.SettingsViews.PPTPageFlipPreviewWindow.md)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_PPTPageFlipPreviewWindow_OnSourceInitialized_System_EventArgs_"></a> OnSourceInitialized\(EventArgs\)

```csharp
protected override void OnSourceInitialized(EventArgs e)
```

#### Parameters

`e` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### <a id="Ink_Canvas_Windows_SettingsViews_PPTPageFlipPreviewWindow_UpdatePreview"></a> UpdatePreview\(\)

刷新预览：4 个翻页按钮的状态更新已委托给顶层 Overlay 窗口。

```csharp
public void UpdatePreview()
```

