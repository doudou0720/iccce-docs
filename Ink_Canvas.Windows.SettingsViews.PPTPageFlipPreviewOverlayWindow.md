# <a id="Ink_Canvas_Windows_SettingsViews_PPTPageFlipPreviewOverlayWindow"></a> Class PPTPageFlipPreviewOverlayWindow

Namespace: [Ink\_Canvas.Windows.SettingsViews](Ink\_Canvas.Windows.SettingsViews.md)  
Assembly: InkCanvasForClass.dll  

全屏预览的顶层浮层窗口：仅承载 4 个翻页按钮控件，浮在 SettingsWindow 之上。
点击穿透（WS_EX_TRANSPARENT）+ 不抢焦点（WS_EX_NOACTIVATE），不影响设置窗口操作。
不注册到 WindowTopmostManager（SettingsWindow 激活会超越其 ZOrder），
改用 DispatcherTimer 周期性 SetWindowPos 确保始终位于 SettingsWindow 之上但低于 Popup。

```csharp
public class PPTPageFlipPreviewOverlayWindow : Window
```

#### Inheritance

Window ← 
[PPTPageFlipPreviewOverlayWindow](Ink\_Canvas.Windows.SettingsViews.PPTPageFlipPreviewOverlayWindow.md)

## Constructors

### <a id="Ink_Canvas_Windows_SettingsViews_PPTPageFlipPreviewOverlayWindow__ctor_Window_"></a> PPTPageFlipPreviewOverlayWindow\(Window\)

```csharp
public PPTPageFlipPreviewOverlayWindow(Window settingsWindow)
```

#### Parameters

`settingsWindow` Window

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_PPTPageFlipPreviewOverlayWindow_ActiveInstance"></a> ActiveInstance

```csharp
public static PPTPageFlipPreviewOverlayWindow ActiveInstance { get; }
```

#### Property Value

 [PPTPageFlipPreviewOverlayWindow](Ink\_Canvas.Windows.SettingsViews.PPTPageFlipPreviewOverlayWindow.md)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_PPTPageFlipPreviewOverlayWindow_OnSourceInitialized_System_EventArgs_"></a> OnSourceInitialized\(EventArgs\)

```csharp
protected override void OnSourceInitialized(EventArgs e)
```

#### Parameters

`e` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### <a id="Ink_Canvas_Windows_SettingsViews_PPTPageFlipPreviewOverlayWindow_UpdatePreview"></a> UpdatePreview\(\)

```csharp
public void UpdatePreview()
```

