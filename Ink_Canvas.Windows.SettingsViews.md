# <a id="Ink_Canvas_Windows_SettingsViews"></a> Namespace Ink\_Canvas.Windows.SettingsViews

### Namespaces

 [Ink\_Canvas.Windows.SettingsViews.Helpers](Ink\_Canvas.Windows.SettingsViews.Helpers.md)

 [Ink\_Canvas.Windows.SettingsViews.Pages](Ink\_Canvas.Windows.SettingsViews.Pages.md)

### Classes

 [PPTPageFlipPreviewOverlayWindow](Ink\_Canvas.Windows.SettingsViews.PPTPageFlipPreviewOverlayWindow.md)

全屏预览的顶层浮层窗口：仅承载 4 个翻页按钮控件，浮在 SettingsWindow 之上。
点击穿透（WS_EX_TRANSPARENT）+ 不抢焦点（WS_EX_NOACTIVATE），不影响设置窗口操作。
不注册到 WindowTopmostManager（SettingsWindow 激活会超越其 ZOrder），
改用 DispatcherTimer 周期性 SetWindowPos 确保始终位于 SettingsWindow 之上但低于 Popup。

 [PPTPageFlipPreviewWindow](Ink\_Canvas.Windows.SettingsViews.PPTPageFlipPreviewWindow.md)

全屏预览的背景窗口：仅承载 PPT 背景图，位于 SettingsWindow 之下、MainWindow 之上。
4 个翻页按钮已拆分到 <xref href="Ink_Canvas.Windows.SettingsViews.PPTPageFlipPreviewOverlayWindow" data-throw-if-not-resolved="false"></xref>（顶层，浮在 SettingsWindow 之上）。

 [SettingsWindow](Ink\_Canvas.Windows.SettingsViews.SettingsWindow.md)

