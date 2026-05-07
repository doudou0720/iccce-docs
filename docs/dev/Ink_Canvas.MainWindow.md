# <a id="Ink_Canvas_MainWindow"></a> Class MainWindow

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

主窗口类的部分类，包含压感模拟和墨水到形状识别的功能

```csharp
public class MainWindow : PerformanceTransparentWin, IAnimatable, ISupportInitialize, IFrameworkInputElement, IInputElement, IQueryAmbient, IAddChild
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DispatcherObject](https://learn.microsoft.com/dotnet/api/system.windows.threading.dispatcherobject) ← 
[DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject) ← 
[Visual](https://learn.microsoft.com/dotnet/api/system.windows.media.visual) ← 
[UIElement](https://learn.microsoft.com/dotnet/api/system.windows.uielement) ← 
[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement) ← 
[Control](https://learn.microsoft.com/dotnet/api/system.windows.controls.control) ← 
[ContentControl](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol) ← 
[Window](https://learn.microsoft.com/dotnet/api/system.windows.window) ← 
[PerformanceTransparentWin](Ink\_Canvas.Helpers.PerformanceTransparentWin.md) ← 
[MainWindow](Ink\_Canvas.MainWindow.md)

#### Implements

[IAnimatable](https://learn.microsoft.com/dotnet/api/system.windows.media.animation.ianimatable), 
[ISupportInitialize](https://learn.microsoft.com/dotnet/api/system.componentmodel.isupportinitialize), 
[IFrameworkInputElement](https://learn.microsoft.com/dotnet/api/system.windows.iframeworkinputelement), 
[IInputElement](https://learn.microsoft.com/dotnet/api/system.windows.iinputelement), 
[IQueryAmbient](https://learn.microsoft.com/dotnet/api/system.windows.markup.iqueryambient), 
[IAddChild](https://learn.microsoft.com/dotnet/api/system.windows.markup.iaddchild)

#### Inherited Members

[PerformanceTransparentWin.IsUsingWindowChromeRendering](Ink\_Canvas.Helpers.PerformanceTransparentWin.md\#Ink\_Canvas\_Helpers\_PerformanceTransparentWin\_IsUsingWindowChromeRendering), 
[PerformanceTransparentWin.SetTransparentHitThrough\(\)](Ink\_Canvas.Helpers.PerformanceTransparentWin.md\#Ink\_Canvas\_Helpers\_PerformanceTransparentWin\_SetTransparentHitThrough), 
[PerformanceTransparentWin.SetTransparentNotHitThrough\(\)](Ink\_Canvas.Helpers.PerformanceTransparentWin.md\#Ink\_Canvas\_Helpers\_PerformanceTransparentWin\_SetTransparentNotHitThrough), 
[PerformanceTransparentWin.ShouldHandleWindowChromeHitTest\(Point\)](Ink\_Canvas.Helpers.PerformanceTransparentWin.md\#Ink\_Canvas\_Helpers\_PerformanceTransparentWin\_ShouldHandleWindowChromeHitTest\_System\_Windows\_Point\_), 
[Window.AllowsTransparencyProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.allowstransparencyproperty), 
[Window.DpiChangedEvent](https://learn.microsoft.com/dotnet/api/system.windows.window.dpichangedevent), 
[Window.IconProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.iconproperty), 
[Window.IsActiveProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.isactiveproperty), 
[Window.LeftProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.leftproperty), 
[Window.ResizeModeProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.resizemodeproperty), 
[Window.ShowActivatedProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.showactivatedproperty), 
[Window.ShowInTaskbarProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.showintaskbarproperty), 
[Window.SizeToContentProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.sizetocontentproperty), 
[Window.TaskbarItemInfoProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.taskbariteminfoproperty), 
[Window.TitleProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.titleproperty), 
[Window.TopmostProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.topmostproperty), 
[Window.TopProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.topproperty), 
[Window.WindowStateProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.windowstateproperty), 
[Window.WindowStyleProperty](https://learn.microsoft.com/dotnet/api/system.windows.window.windowstyleproperty), 
[Window.Activate\(\)](https://learn.microsoft.com/dotnet/api/system.windows.window.activate), 
[Window.ArrangeOverride\(Size\)](https://learn.microsoft.com/dotnet/api/system.windows.window.arrangeoverride), 
[Window.Close\(\)](https://learn.microsoft.com/dotnet/api/system.windows.window.close), 
[Window.DragMove\(\)](https://learn.microsoft.com/dotnet/api/system.windows.window.dragmove), 
[Window.GetWindow\(DependencyObject\)](https://learn.microsoft.com/dotnet/api/system.windows.window.getwindow), 
[Window.Hide\(\)](https://learn.microsoft.com/dotnet/api/system.windows.window.hide), 
[Window.MeasureOverride\(Size\)](https://learn.microsoft.com/dotnet/api/system.windows.window.measureoverride), 
[Window.OnActivated\(EventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.window.onactivated), 
[Window.OnClosed\(EventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.window.onclosed), 
[Window.OnClosing\(CancelEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.window.onclosing), 
[Window.OnContentChanged\(object, object\)](https://learn.microsoft.com/dotnet/api/system.windows.window.oncontentchanged), 
[Window.OnContentRendered\(EventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.window.oncontentrendered), 
[Window.OnCreateAutomationPeer\(\)](https://learn.microsoft.com/dotnet/api/system.windows.window.oncreateautomationpeer), 
[Window.OnDeactivated\(EventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.window.ondeactivated), 
[Window.OnDpiChanged\(DpiScale, DpiScale\)](https://learn.microsoft.com/dotnet/api/system.windows.window.ondpichanged), 
[Window.OnLocationChanged\(EventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.window.onlocationchanged), 
[Window.OnManipulationBoundaryFeedback\(ManipulationBoundaryFeedbackEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.window.onmanipulationboundaryfeedback), 
[Window.OnSourceInitialized\(EventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.window.onsourceinitialized), 
[Window.OnStateChanged\(EventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.window.onstatechanged), 
[Window.OnVisualChildrenChanged\(DependencyObject, DependencyObject\)](https://learn.microsoft.com/dotnet/api/system.windows.window.onvisualchildrenchanged), 
[Window.OnVisualParentChanged\(DependencyObject\)](https://learn.microsoft.com/dotnet/api/system.windows.window.onvisualparentchanged), 
[Window.Show\(\)](https://learn.microsoft.com/dotnet/api/system.windows.window.show), 
[Window.ShowDialog\(\)](https://learn.microsoft.com/dotnet/api/system.windows.window.showdialog), 
[Window.AllowsTransparency](https://learn.microsoft.com/dotnet/api/system.windows.window.allowstransparency), 
[Window.DialogResult](https://learn.microsoft.com/dotnet/api/system.windows.window.dialogresult), 
[Window.Icon](https://learn.microsoft.com/dotnet/api/system.windows.window.icon), 
[Window.IsActive](https://learn.microsoft.com/dotnet/api/system.windows.window.isactive), 
[Window.Left](https://learn.microsoft.com/dotnet/api/system.windows.window.left), 
[Window.LogicalChildren](https://learn.microsoft.com/dotnet/api/system.windows.window.logicalchildren), 
[Window.OwnedWindows](https://learn.microsoft.com/dotnet/api/system.windows.window.ownedwindows), 
[Window.Owner](https://learn.microsoft.com/dotnet/api/system.windows.window.owner), 
[Window.ResizeMode](https://learn.microsoft.com/dotnet/api/system.windows.window.resizemode), 
[Window.RestoreBounds](https://learn.microsoft.com/dotnet/api/system.windows.window.restorebounds), 
[Window.ShowActivated](https://learn.microsoft.com/dotnet/api/system.windows.window.showactivated), 
[Window.ShowInTaskbar](https://learn.microsoft.com/dotnet/api/system.windows.window.showintaskbar), 
[Window.SizeToContent](https://learn.microsoft.com/dotnet/api/system.windows.window.sizetocontent), 
[Window.TaskbarItemInfo](https://learn.microsoft.com/dotnet/api/system.windows.window.taskbariteminfo), 
[Window.Title](https://learn.microsoft.com/dotnet/api/system.windows.window.title), 
[Window.Top](https://learn.microsoft.com/dotnet/api/system.windows.window.top), 
[Window.Topmost](https://learn.microsoft.com/dotnet/api/system.windows.window.topmost), 
[Window.WindowStartupLocation](https://learn.microsoft.com/dotnet/api/system.windows.window.windowstartuplocation), 
[Window.WindowState](https://learn.microsoft.com/dotnet/api/system.windows.window.windowstate), 
[Window.WindowStyle](https://learn.microsoft.com/dotnet/api/system.windows.window.windowstyle), 
[Window.Activated](https://learn.microsoft.com/dotnet/api/system.windows.window.activated), 
[Window.Closed](https://learn.microsoft.com/dotnet/api/system.windows.window.closed), 
[Window.Closing](https://learn.microsoft.com/dotnet/api/system.windows.window.closing), 
[Window.ContentRendered](https://learn.microsoft.com/dotnet/api/system.windows.window.contentrendered), 
[Window.Deactivated](https://learn.microsoft.com/dotnet/api/system.windows.window.deactivated), 
[Window.DpiChanged](https://learn.microsoft.com/dotnet/api/system.windows.window.dpichanged), 
[Window.LocationChanged](https://learn.microsoft.com/dotnet/api/system.windows.window.locationchanged), 
[Window.SourceInitialized](https://learn.microsoft.com/dotnet/api/system.windows.window.sourceinitialized), 
[Window.StateChanged](https://learn.microsoft.com/dotnet/api/system.windows.window.statechanged), 
[ContentControl.ContentProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.contentproperty), 
[ContentControl.ContentStringFormatProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.contentstringformatproperty), 
[ContentControl.ContentTemplateProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.contenttemplateproperty), 
[ContentControl.ContentTemplateSelectorProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.contenttemplateselectorproperty), 
[ContentControl.HasContentProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.hascontentproperty), 
[ContentControl.AddChild\(object\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.addchild), 
[ContentControl.AddText\(string\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.addtext), 
[ContentControl.OnContentChanged\(object, object\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.oncontentchanged), 
[ContentControl.OnContentStringFormatChanged\(string, string\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.oncontentstringformatchanged), 
[ContentControl.OnContentTemplateChanged\(DataTemplate, DataTemplate\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.oncontenttemplatechanged), 
[ContentControl.OnContentTemplateSelectorChanged\(DataTemplateSelector, DataTemplateSelector\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.oncontenttemplateselectorchanged), 
[ContentControl.Content](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.content), 
[ContentControl.ContentStringFormat](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.contentstringformat), 
[ContentControl.ContentTemplate](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.contenttemplate), 
[ContentControl.ContentTemplateSelector](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.contenttemplateselector), 
[ContentControl.HasContent](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.hascontent), 
[ContentControl.LogicalChildren](https://learn.microsoft.com/dotnet/api/system.windows.controls.contentcontrol.logicalchildren), 
[Control.BackgroundProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.backgroundproperty), 
[Control.BorderBrushProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.borderbrushproperty), 
[Control.BorderThicknessProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.borderthicknessproperty), 
[Control.FontFamilyProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.fontfamilyproperty), 
[Control.FontSizeProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.fontsizeproperty), 
[Control.FontStretchProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.fontstretchproperty), 
[Control.FontStyleProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.fontstyleproperty), 
[Control.FontWeightProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.fontweightproperty), 
[Control.ForegroundProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.foregroundproperty), 
[Control.HorizontalContentAlignmentProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.horizontalcontentalignmentproperty), 
[Control.IsTabStopProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.istabstopproperty), 
[Control.MouseDoubleClickEvent](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.mousedoubleclickevent), 
[Control.PaddingProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.paddingproperty), 
[Control.PreviewMouseDoubleClickEvent](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.previewmousedoubleclickevent), 
[Control.TabIndexProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.tabindexproperty), 
[Control.TemplateProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.templateproperty), 
[Control.VerticalContentAlignmentProperty](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.verticalcontentalignmentproperty), 
[Control.ArrangeOverride\(Size\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.arrangeoverride), 
[Control.MeasureOverride\(Size\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.measureoverride), 
[Control.OnMouseDoubleClick\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.onmousedoubleclick), 
[Control.OnPreviewMouseDoubleClick\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.onpreviewmousedoubleclick), 
[Control.OnTemplateChanged\(ControlTemplate, ControlTemplate\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.ontemplatechanged), 
[Control.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.tostring), 
[Control.Background](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.background), 
[Control.BorderBrush](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.borderbrush), 
[Control.BorderThickness](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.borderthickness), 
[Control.FontFamily](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.fontfamily), 
[Control.FontSize](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.fontsize), 
[Control.FontStretch](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.fontstretch), 
[Control.FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.fontstyle), 
[Control.FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.fontweight), 
[Control.Foreground](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.foreground), 
[Control.HandlesScrolling](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.handlesscrolling), 
[Control.HorizontalContentAlignment](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.horizontalcontentalignment), 
[Control.IsTabStop](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.istabstop), 
[Control.Padding](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.padding), 
[Control.TabIndex](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.tabindex), 
[Control.Template](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.template), 
[Control.VerticalContentAlignment](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.verticalcontentalignment), 
[Control.MouseDoubleClick](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.mousedoubleclick), 
[Control.PreviewMouseDoubleClick](https://learn.microsoft.com/dotnet/api/system.windows.controls.control.previewmousedoubleclick), 
[FrameworkElement.ActualHeightProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.actualheightproperty), 
[FrameworkElement.ActualWidthProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.actualwidthproperty), 
[FrameworkElement.BindingGroupProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.bindinggroupproperty), 
[FrameworkElement.ContextMenuClosingEvent](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.contextmenuclosingevent), 
[FrameworkElement.ContextMenuOpeningEvent](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.contextmenuopeningevent), 
[FrameworkElement.ContextMenuProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.contextmenuproperty), 
[FrameworkElement.CursorProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.cursorproperty), 
[FrameworkElement.DataContextProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.datacontextproperty), 
[FrameworkElement.DefaultStyleKeyProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.defaultstylekeyproperty), 
[FrameworkElement.FlowDirectionProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.flowdirectionproperty), 
[FrameworkElement.FocusVisualStyleProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.focusvisualstyleproperty), 
[FrameworkElement.ForceCursorProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.forcecursorproperty), 
[FrameworkElement.HeightProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.heightproperty), 
[FrameworkElement.HorizontalAlignmentProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.horizontalalignmentproperty), 
[FrameworkElement.InputScopeProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.inputscopeproperty), 
[FrameworkElement.LanguageProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.languageproperty), 
[FrameworkElement.LayoutTransformProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.layouttransformproperty), 
[FrameworkElement.LoadedEvent](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.loadedevent), 
[FrameworkElement.MarginProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.marginproperty), 
[FrameworkElement.MaxHeightProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.maxheightproperty), 
[FrameworkElement.MaxWidthProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.maxwidthproperty), 
[FrameworkElement.MinHeightProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.minheightproperty), 
[FrameworkElement.MinWidthProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.minwidthproperty), 
[FrameworkElement.NameProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.nameproperty), 
[FrameworkElement.OverridesDefaultStyleProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.overridesdefaultstyleproperty), 
[FrameworkElement.RequestBringIntoViewEvent](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.requestbringintoviewevent), 
[FrameworkElement.SizeChangedEvent](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.sizechangedevent), 
[FrameworkElement.StyleProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.styleproperty), 
[FrameworkElement.TagProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.tagproperty), 
[FrameworkElement.ToolTipClosingEvent](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.tooltipclosingevent), 
[FrameworkElement.ToolTipOpeningEvent](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.tooltipopeningevent), 
[FrameworkElement.ToolTipProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.tooltipproperty), 
[FrameworkElement.UnloadedEvent](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.unloadedevent), 
[FrameworkElement.UseLayoutRoundingProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.uselayoutroundingproperty), 
[FrameworkElement.VerticalAlignmentProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.verticalalignmentproperty), 
[FrameworkElement.WidthProperty](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.widthproperty), 
[FrameworkElement.AddLogicalChild\(object\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.addlogicalchild), 
[FrameworkElement.ApplyTemplate\(\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.applytemplate), 
[FrameworkElement.ArrangeCore\(Rect\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.arrangecore), 
[FrameworkElement.ArrangeOverride\(Size\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.arrangeoverride), 
[FrameworkElement.BeginInit\(\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.begininit), 
[FrameworkElement.BeginStoryboard\(Storyboard\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.beginstoryboard\#system\-windows\-frameworkelement\-beginstoryboard\(system\-windows\-media\-animation\-storyboard\)), 
[FrameworkElement.BeginStoryboard\(Storyboard, HandoffBehavior\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.beginstoryboard\#system\-windows\-frameworkelement\-beginstoryboard\(system\-windows\-media\-animation\-storyboard\-system\-windows\-media\-animation\-handoffbehavior\)), 
[FrameworkElement.BeginStoryboard\(Storyboard, HandoffBehavior, bool\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.beginstoryboard\#system\-windows\-frameworkelement\-beginstoryboard\(system\-windows\-media\-animation\-storyboard\-system\-windows\-media\-animation\-handoffbehavior\-system\-boolean\)), 
[FrameworkElement.BringIntoView\(\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.bringintoview\#system\-windows\-frameworkelement\-bringintoview), 
[FrameworkElement.BringIntoView\(Rect\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.bringintoview\#system\-windows\-frameworkelement\-bringintoview\(system\-windows\-rect\)), 
[FrameworkElement.EndInit\(\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.endinit), 
[FrameworkElement.FindName\(string\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.findname), 
[FrameworkElement.FindResource\(object\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.findresource), 
[FrameworkElement.GetBindingExpression\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.getbindingexpression), 
[FrameworkElement.GetFlowDirection\(DependencyObject\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.getflowdirection), 
[FrameworkElement.GetLayoutClip\(Size\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.getlayoutclip), 
[FrameworkElement.GetTemplateChild\(string\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.gettemplatechild), 
[FrameworkElement.GetUIParentCore\(\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.getuiparentcore), 
[FrameworkElement.GetVisualChild\(int\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.getvisualchild), 
[FrameworkElement.MeasureCore\(Size\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.measurecore), 
[FrameworkElement.MeasureOverride\(Size\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.measureoverride), 
[FrameworkElement.MoveFocus\(TraversalRequest\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.movefocus), 
[FrameworkElement.OnApplyTemplate\(\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.onapplytemplate), 
[FrameworkElement.OnContextMenuClosing\(ContextMenuEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.oncontextmenuclosing), 
[FrameworkElement.OnContextMenuOpening\(ContextMenuEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.oncontextmenuopening), 
[FrameworkElement.OnGotFocus\(RoutedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.ongotfocus), 
[FrameworkElement.OnInitialized\(EventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.oninitialized), 
[FrameworkElement.OnPropertyChanged\(DependencyPropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.onpropertychanged), 
[FrameworkElement.OnRenderSizeChanged\(SizeChangedInfo\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.onrendersizechanged), 
[FrameworkElement.OnStyleChanged\(Style, Style\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.onstylechanged), 
[FrameworkElement.OnToolTipClosing\(ToolTipEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.ontooltipclosing), 
[FrameworkElement.OnToolTipOpening\(ToolTipEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.ontooltipopening), 
[FrameworkElement.OnVisualParentChanged\(DependencyObject\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.onvisualparentchanged), 
[FrameworkElement.ParentLayoutInvalidated\(UIElement\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.parentlayoutinvalidated), 
[FrameworkElement.PredictFocus\(FocusNavigationDirection\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.predictfocus), 
[FrameworkElement.RegisterName\(string, object\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.registername), 
[FrameworkElement.RemoveLogicalChild\(object\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.removelogicalchild), 
[FrameworkElement.SetBinding\(DependencyProperty, string\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.setbinding\#system\-windows\-frameworkelement\-setbinding\(system\-windows\-dependencyproperty\-system\-string\)), 
[FrameworkElement.SetBinding\(DependencyProperty, BindingBase\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.setbinding\#system\-windows\-frameworkelement\-setbinding\(system\-windows\-dependencyproperty\-system\-windows\-data\-bindingbase\)), 
[FrameworkElement.SetFlowDirection\(DependencyObject, FlowDirection\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.setflowdirection), 
[FrameworkElement.SetResourceReference\(DependencyProperty, object\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.setresourcereference), 
[FrameworkElement.TryFindResource\(object\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.tryfindresource), 
[FrameworkElement.UnregisterName\(string\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.unregistername), 
[FrameworkElement.UpdateDefaultStyle\(\)](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.updatedefaultstyle), 
[FrameworkElement.ActualHeight](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.actualheight), 
[FrameworkElement.ActualWidth](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.actualwidth), 
[FrameworkElement.BindingGroup](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.bindinggroup), 
[FrameworkElement.ContextMenu](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.contextmenu), 
[FrameworkElement.Cursor](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.cursor), 
[FrameworkElement.DataContext](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.datacontext), 
[FrameworkElement.DefaultStyleKey](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.defaultstylekey), 
[FrameworkElement.FlowDirection](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.flowdirection), 
[FrameworkElement.FocusVisualStyle](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.focusvisualstyle), 
[FrameworkElement.ForceCursor](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.forcecursor), 
[FrameworkElement.Height](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.height), 
[FrameworkElement.HorizontalAlignment](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.horizontalalignment), 
[FrameworkElement.InheritanceBehavior](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.inheritancebehavior), 
[FrameworkElement.InputScope](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.inputscope), 
[FrameworkElement.IsInitialized](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.isinitialized), 
[FrameworkElement.IsLoaded](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.isloaded), 
[FrameworkElement.Language](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.language), 
[FrameworkElement.LayoutTransform](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.layouttransform), 
[FrameworkElement.LogicalChildren](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.logicalchildren), 
[FrameworkElement.Margin](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.margin), 
[FrameworkElement.MaxHeight](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.maxheight), 
[FrameworkElement.MaxWidth](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.maxwidth), 
[FrameworkElement.MinHeight](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.minheight), 
[FrameworkElement.MinWidth](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.minwidth), 
[FrameworkElement.Name](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.name), 
[FrameworkElement.OverridesDefaultStyle](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.overridesdefaultstyle), 
[FrameworkElement.Parent](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.parent), 
[FrameworkElement.Resources](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.resources), 
[FrameworkElement.Style](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.style), 
[FrameworkElement.Tag](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.tag), 
[FrameworkElement.TemplatedParent](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.templatedparent), 
[FrameworkElement.ToolTip](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.tooltip), 
[FrameworkElement.Triggers](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.triggers), 
[FrameworkElement.UseLayoutRounding](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.uselayoutrounding), 
[FrameworkElement.VerticalAlignment](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.verticalalignment), 
[FrameworkElement.VisualChildrenCount](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.visualchildrencount), 
[FrameworkElement.Width](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.width), 
[FrameworkElement.ContextMenuClosing](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.contextmenuclosing), 
[FrameworkElement.ContextMenuOpening](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.contextmenuopening), 
[FrameworkElement.DataContextChanged](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.datacontextchanged), 
[FrameworkElement.Initialized](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.initialized), 
[FrameworkElement.Loaded](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.loaded), 
[FrameworkElement.RequestBringIntoView](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.requestbringintoview), 
[FrameworkElement.SizeChanged](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.sizechanged), 
[FrameworkElement.SourceUpdated](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.sourceupdated), 
[FrameworkElement.TargetUpdated](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.targetupdated), 
[FrameworkElement.ToolTipClosing](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.tooltipclosing), 
[FrameworkElement.ToolTipOpening](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.tooltipopening), 
[FrameworkElement.Unloaded](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.unloaded), 
[UIElement.AllowDropProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.allowdropproperty), 
[UIElement.AreAnyTouchesCapturedProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.areanytouchescapturedproperty), 
[UIElement.AreAnyTouchesCapturedWithinProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.areanytouchescapturedwithinproperty), 
[UIElement.AreAnyTouchesDirectlyOverProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.areanytouchesdirectlyoverproperty), 
[UIElement.AreAnyTouchesOverProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.areanytouchesoverproperty), 
[UIElement.BitmapEffectInputProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.bitmapeffectinputproperty), 
[UIElement.BitmapEffectProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.bitmapeffectproperty), 
[UIElement.CacheModeProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.cachemodeproperty), 
[UIElement.ClipProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.clipproperty), 
[UIElement.ClipToBoundsProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.cliptoboundsproperty), 
[UIElement.DragEnterEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.dragenterevent), 
[UIElement.DragLeaveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.dragleaveevent), 
[UIElement.DragOverEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.dragoverevent), 
[UIElement.DropEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.dropevent), 
[UIElement.EffectProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.effectproperty), 
[UIElement.FocusableProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.focusableproperty), 
[UIElement.GiveFeedbackEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.givefeedbackevent), 
[UIElement.GotFocusEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.gotfocusevent), 
[UIElement.GotKeyboardFocusEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.gotkeyboardfocusevent), 
[UIElement.GotMouseCaptureEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.gotmousecaptureevent), 
[UIElement.GotStylusCaptureEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.gotstyluscaptureevent), 
[UIElement.GotTouchCaptureEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.gottouchcaptureevent), 
[UIElement.IsEnabledProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isenabledproperty), 
[UIElement.IsFocusedProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isfocusedproperty), 
[UIElement.IsHitTestVisibleProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ishittestvisibleproperty), 
[UIElement.IsKeyboardFocusedProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.iskeyboardfocusedproperty), 
[UIElement.IsKeyboardFocusWithinProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.iskeyboardfocuswithinproperty), 
[UIElement.IsManipulationEnabledProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismanipulationenabledproperty), 
[UIElement.IsMouseCapturedProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismousecapturedproperty), 
[UIElement.IsMouseCaptureWithinProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismousecapturewithinproperty), 
[UIElement.IsMouseDirectlyOverProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismousedirectlyoverproperty), 
[UIElement.IsMouseOverProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismouseoverproperty), 
[UIElement.IsStylusCapturedProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isstyluscapturedproperty), 
[UIElement.IsStylusCaptureWithinProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isstyluscapturewithinproperty), 
[UIElement.IsStylusDirectlyOverProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isstylusdirectlyoverproperty), 
[UIElement.IsStylusOverProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isstylusoverproperty), 
[UIElement.IsVisibleProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isvisibleproperty), 
[UIElement.KeyDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.keydownevent), 
[UIElement.KeyUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.keyupevent), 
[UIElement.LostFocusEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.lostfocusevent), 
[UIElement.LostKeyboardFocusEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.lostkeyboardfocusevent), 
[UIElement.LostMouseCaptureEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.lostmousecaptureevent), 
[UIElement.LostStylusCaptureEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.loststyluscaptureevent), 
[UIElement.LostTouchCaptureEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.losttouchcaptureevent), 
[UIElement.ManipulationBoundaryFeedbackEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.manipulationboundaryfeedbackevent), 
[UIElement.ManipulationCompletedEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.manipulationcompletedevent), 
[UIElement.ManipulationDeltaEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.manipulationdeltaevent), 
[UIElement.ManipulationInertiaStartingEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.manipulationinertiastartingevent), 
[UIElement.ManipulationStartedEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.manipulationstartedevent), 
[UIElement.ManipulationStartingEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.manipulationstartingevent), 
[UIElement.MouseDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mousedownevent), 
[UIElement.MouseEnterEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouseenterevent), 
[UIElement.MouseLeaveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouseleaveevent), 
[UIElement.MouseLeftButtonDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouseleftbuttondownevent), 
[UIElement.MouseLeftButtonUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouseleftbuttonupevent), 
[UIElement.MouseMoveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mousemoveevent), 
[UIElement.MouseRightButtonDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouserightbuttondownevent), 
[UIElement.MouseRightButtonUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouserightbuttonupevent), 
[UIElement.MouseUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouseupevent), 
[UIElement.MouseWheelEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mousewheelevent), 
[UIElement.OpacityMaskProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.opacitymaskproperty), 
[UIElement.OpacityProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.opacityproperty), 
[UIElement.PreviewDragEnterEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewdragenterevent), 
[UIElement.PreviewDragLeaveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewdragleaveevent), 
[UIElement.PreviewDragOverEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewdragoverevent), 
[UIElement.PreviewDropEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewdropevent), 
[UIElement.PreviewGiveFeedbackEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewgivefeedbackevent), 
[UIElement.PreviewGotKeyboardFocusEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewgotkeyboardfocusevent), 
[UIElement.PreviewKeyDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewkeydownevent), 
[UIElement.PreviewKeyUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewkeyupevent), 
[UIElement.PreviewLostKeyboardFocusEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewlostkeyboardfocusevent), 
[UIElement.PreviewMouseDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmousedownevent), 
[UIElement.PreviewMouseLeftButtonDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmouseleftbuttondownevent), 
[UIElement.PreviewMouseLeftButtonUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmouseleftbuttonupevent), 
[UIElement.PreviewMouseMoveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmousemoveevent), 
[UIElement.PreviewMouseRightButtonDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmouserightbuttondownevent), 
[UIElement.PreviewMouseRightButtonUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmouserightbuttonupevent), 
[UIElement.PreviewMouseUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmouseupevent), 
[UIElement.PreviewMouseWheelEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmousewheelevent), 
[UIElement.PreviewQueryContinueDragEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewquerycontinuedragevent), 
[UIElement.PreviewStylusButtonDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusbuttondownevent), 
[UIElement.PreviewStylusButtonUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusbuttonupevent), 
[UIElement.PreviewStylusDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusdownevent), 
[UIElement.PreviewStylusInAirMoveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusinairmoveevent), 
[UIElement.PreviewStylusInRangeEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusinrangeevent), 
[UIElement.PreviewStylusMoveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusmoveevent), 
[UIElement.PreviewStylusOutOfRangeEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusoutofrangeevent), 
[UIElement.PreviewStylusSystemGestureEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylussystemgestureevent), 
[UIElement.PreviewStylusUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusupevent), 
[UIElement.PreviewTextInputEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewtextinputevent), 
[UIElement.PreviewTouchDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewtouchdownevent), 
[UIElement.PreviewTouchMoveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewtouchmoveevent), 
[UIElement.PreviewTouchUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewtouchupevent), 
[UIElement.QueryContinueDragEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.querycontinuedragevent), 
[UIElement.QueryCursorEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.querycursorevent), 
[UIElement.RenderTransformOriginProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.rendertransformoriginproperty), 
[UIElement.RenderTransformProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.rendertransformproperty), 
[UIElement.SnapsToDevicePixelsProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.snapstodevicepixelsproperty), 
[UIElement.StylusButtonDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusbuttondownevent), 
[UIElement.StylusButtonUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusbuttonupevent), 
[UIElement.StylusDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusdownevent), 
[UIElement.StylusEnterEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusenterevent), 
[UIElement.StylusInAirMoveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusinairmoveevent), 
[UIElement.StylusInRangeEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusinrangeevent), 
[UIElement.StylusLeaveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusleaveevent), 
[UIElement.StylusMoveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusmoveevent), 
[UIElement.StylusOutOfRangeEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusoutofrangeevent), 
[UIElement.StylusSystemGestureEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylussystemgestureevent), 
[UIElement.StylusUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusupevent), 
[UIElement.TextInputEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.textinputevent), 
[UIElement.TouchDownEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchdownevent), 
[UIElement.TouchEnterEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchenterevent), 
[UIElement.TouchLeaveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchleaveevent), 
[UIElement.TouchMoveEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchmoveevent), 
[UIElement.TouchUpEvent](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchupevent), 
[UIElement.UidProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.uidproperty), 
[UIElement.VisibilityProperty](https://learn.microsoft.com/dotnet/api/system.windows.uielement.visibilityproperty), 
[UIElement.AddHandler\(RoutedEvent, Delegate\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.addhandler\#system\-windows\-uielement\-addhandler\(system\-windows\-routedevent\-system\-delegate\)), 
[UIElement.AddHandler\(RoutedEvent, Delegate, bool\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.addhandler\#system\-windows\-uielement\-addhandler\(system\-windows\-routedevent\-system\-delegate\-system\-boolean\)), 
[UIElement.AddToEventRoute\(EventRoute, RoutedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.addtoeventroute), 
[UIElement.ApplyAnimationClock\(DependencyProperty, AnimationClock\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.applyanimationclock\#system\-windows\-uielement\-applyanimationclock\(system\-windows\-dependencyproperty\-system\-windows\-media\-animation\-animationclock\)), 
[UIElement.ApplyAnimationClock\(DependencyProperty, AnimationClock, HandoffBehavior\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.applyanimationclock\#system\-windows\-uielement\-applyanimationclock\(system\-windows\-dependencyproperty\-system\-windows\-media\-animation\-animationclock\-system\-windows\-media\-animation\-handoffbehavior\)), 
[UIElement.Arrange\(Rect\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.arrange), 
[UIElement.ArrangeCore\(Rect\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.arrangecore), 
[UIElement.BeginAnimation\(DependencyProperty, AnimationTimeline\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.beginanimation\#system\-windows\-uielement\-beginanimation\(system\-windows\-dependencyproperty\-system\-windows\-media\-animation\-animationtimeline\)), 
[UIElement.BeginAnimation\(DependencyProperty, AnimationTimeline, HandoffBehavior\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.beginanimation\#system\-windows\-uielement\-beginanimation\(system\-windows\-dependencyproperty\-system\-windows\-media\-animation\-animationtimeline\-system\-windows\-media\-animation\-handoffbehavior\)), 
[UIElement.CaptureMouse\(\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.capturemouse), 
[UIElement.CaptureStylus\(\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.capturestylus), 
[UIElement.CaptureTouch\(TouchDevice\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.capturetouch), 
[UIElement.Focus\(\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.focus), 
[UIElement.GetAnimationBaseValue\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.getanimationbasevalue), 
[UIElement.GetLayoutClip\(Size\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.getlayoutclip), 
[UIElement.GetUIParentCore\(\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.getuiparentcore), 
[UIElement.HitTestCore\(GeometryHitTestParameters\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.hittestcore\#system\-windows\-uielement\-hittestcore\(system\-windows\-media\-geometryhittestparameters\)), 
[UIElement.HitTestCore\(PointHitTestParameters\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.hittestcore\#system\-windows\-uielement\-hittestcore\(system\-windows\-media\-pointhittestparameters\)), 
[UIElement.InputHitTest\(Point\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.inputhittest), 
[UIElement.InvalidateArrange\(\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.invalidatearrange), 
[UIElement.InvalidateMeasure\(\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.invalidatemeasure), 
[UIElement.InvalidateVisual\(\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.invalidatevisual), 
[UIElement.Measure\(Size\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.measure), 
[UIElement.MeasureCore\(Size\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.measurecore), 
[UIElement.MoveFocus\(TraversalRequest\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.movefocus), 
[UIElement.OnAccessKey\(AccessKeyEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onaccesskey), 
[UIElement.OnChildDesiredSizeChanged\(UIElement\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onchilddesiredsizechanged), 
[UIElement.OnCreateAutomationPeer\(\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.oncreateautomationpeer), 
[UIElement.OnDragEnter\(DragEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ondragenter), 
[UIElement.OnDragLeave\(DragEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ondragleave), 
[UIElement.OnDragOver\(DragEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ondragover), 
[UIElement.OnDrop\(DragEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ondrop), 
[UIElement.OnGiveFeedback\(GiveFeedbackEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ongivefeedback), 
[UIElement.OnGotFocus\(RoutedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ongotfocus), 
[UIElement.OnGotKeyboardFocus\(KeyboardFocusChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ongotkeyboardfocus), 
[UIElement.OnGotMouseCapture\(MouseEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ongotmousecapture), 
[UIElement.OnGotStylusCapture\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ongotstyluscapture), 
[UIElement.OnGotTouchCapture\(TouchEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ongottouchcapture), 
[UIElement.OnIsKeyboardFocusedChanged\(DependencyPropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.oniskeyboardfocusedchanged), 
[UIElement.OnIsKeyboardFocusWithinChanged\(DependencyPropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.oniskeyboardfocuswithinchanged), 
[UIElement.OnIsMouseCapturedChanged\(DependencyPropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onismousecapturedchanged), 
[UIElement.OnIsMouseCaptureWithinChanged\(DependencyPropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onismousecapturewithinchanged), 
[UIElement.OnIsMouseDirectlyOverChanged\(DependencyPropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onismousedirectlyoverchanged), 
[UIElement.OnIsStylusCapturedChanged\(DependencyPropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onisstyluscapturedchanged), 
[UIElement.OnIsStylusCaptureWithinChanged\(DependencyPropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onisstyluscapturewithinchanged), 
[UIElement.OnIsStylusDirectlyOverChanged\(DependencyPropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onisstylusdirectlyoverchanged), 
[UIElement.OnKeyDown\(KeyEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onkeydown), 
[UIElement.OnKeyUp\(KeyEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onkeyup), 
[UIElement.OnLostFocus\(RoutedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onlostfocus), 
[UIElement.OnLostKeyboardFocus\(KeyboardFocusChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onlostkeyboardfocus), 
[UIElement.OnLostMouseCapture\(MouseEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onlostmousecapture), 
[UIElement.OnLostStylusCapture\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onloststyluscapture), 
[UIElement.OnLostTouchCapture\(TouchEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onlosttouchcapture), 
[UIElement.OnManipulationBoundaryFeedback\(ManipulationBoundaryFeedbackEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmanipulationboundaryfeedback), 
[UIElement.OnManipulationCompleted\(ManipulationCompletedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmanipulationcompleted), 
[UIElement.OnManipulationDelta\(ManipulationDeltaEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmanipulationdelta), 
[UIElement.OnManipulationInertiaStarting\(ManipulationInertiaStartingEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmanipulationinertiastarting), 
[UIElement.OnManipulationStarted\(ManipulationStartedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmanipulationstarted), 
[UIElement.OnManipulationStarting\(ManipulationStartingEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmanipulationstarting), 
[UIElement.OnMouseDown\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmousedown), 
[UIElement.OnMouseEnter\(MouseEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmouseenter), 
[UIElement.OnMouseLeave\(MouseEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmouseleave), 
[UIElement.OnMouseLeftButtonDown\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmouseleftbuttondown), 
[UIElement.OnMouseLeftButtonUp\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmouseleftbuttonup), 
[UIElement.OnMouseMove\(MouseEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmousemove), 
[UIElement.OnMouseRightButtonDown\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmouserightbuttondown), 
[UIElement.OnMouseRightButtonUp\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmouserightbuttonup), 
[UIElement.OnMouseUp\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmouseup), 
[UIElement.OnMouseWheel\(MouseWheelEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onmousewheel), 
[UIElement.OnPreviewDragEnter\(DragEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewdragenter), 
[UIElement.OnPreviewDragLeave\(DragEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewdragleave), 
[UIElement.OnPreviewDragOver\(DragEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewdragover), 
[UIElement.OnPreviewDrop\(DragEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewdrop), 
[UIElement.OnPreviewGiveFeedback\(GiveFeedbackEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewgivefeedback), 
[UIElement.OnPreviewGotKeyboardFocus\(KeyboardFocusChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewgotkeyboardfocus), 
[UIElement.OnPreviewKeyDown\(KeyEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewkeydown), 
[UIElement.OnPreviewKeyUp\(KeyEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewkeyup), 
[UIElement.OnPreviewLostKeyboardFocus\(KeyboardFocusChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewlostkeyboardfocus), 
[UIElement.OnPreviewMouseDown\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewmousedown), 
[UIElement.OnPreviewMouseLeftButtonDown\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewmouseleftbuttondown), 
[UIElement.OnPreviewMouseLeftButtonUp\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewmouseleftbuttonup), 
[UIElement.OnPreviewMouseMove\(MouseEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewmousemove), 
[UIElement.OnPreviewMouseRightButtonDown\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewmouserightbuttondown), 
[UIElement.OnPreviewMouseRightButtonUp\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewmouserightbuttonup), 
[UIElement.OnPreviewMouseUp\(MouseButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewmouseup), 
[UIElement.OnPreviewMouseWheel\(MouseWheelEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewmousewheel), 
[UIElement.OnPreviewQueryContinueDrag\(QueryContinueDragEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewquerycontinuedrag), 
[UIElement.OnPreviewStylusButtonDown\(StylusButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewstylusbuttondown), 
[UIElement.OnPreviewStylusButtonUp\(StylusButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewstylusbuttonup), 
[UIElement.OnPreviewStylusDown\(StylusDownEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewstylusdown), 
[UIElement.OnPreviewStylusInAirMove\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewstylusinairmove), 
[UIElement.OnPreviewStylusInRange\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewstylusinrange), 
[UIElement.OnPreviewStylusMove\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewstylusmove), 
[UIElement.OnPreviewStylusOutOfRange\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewstylusoutofrange), 
[UIElement.OnPreviewStylusSystemGesture\(StylusSystemGestureEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewstylussystemgesture), 
[UIElement.OnPreviewStylusUp\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewstylusup), 
[UIElement.OnPreviewTextInput\(TextCompositionEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewtextinput), 
[UIElement.OnPreviewTouchDown\(TouchEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewtouchdown), 
[UIElement.OnPreviewTouchMove\(TouchEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewtouchmove), 
[UIElement.OnPreviewTouchUp\(TouchEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onpreviewtouchup), 
[UIElement.OnQueryContinueDrag\(QueryContinueDragEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onquerycontinuedrag), 
[UIElement.OnQueryCursor\(QueryCursorEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onquerycursor), 
[UIElement.OnRender\(DrawingContext\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onrender), 
[UIElement.OnRenderSizeChanged\(SizeChangedInfo\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onrendersizechanged), 
[UIElement.OnStylusButtonDown\(StylusButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onstylusbuttondown), 
[UIElement.OnStylusButtonUp\(StylusButtonEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onstylusbuttonup), 
[UIElement.OnStylusDown\(StylusDownEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onstylusdown), 
[UIElement.OnStylusEnter\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onstylusenter), 
[UIElement.OnStylusInAirMove\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onstylusinairmove), 
[UIElement.OnStylusInRange\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onstylusinrange), 
[UIElement.OnStylusLeave\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onstylusleave), 
[UIElement.OnStylusMove\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onstylusmove), 
[UIElement.OnStylusOutOfRange\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onstylusoutofrange), 
[UIElement.OnStylusSystemGesture\(StylusSystemGestureEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onstylussystemgesture), 
[UIElement.OnStylusUp\(StylusEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onstylusup), 
[UIElement.OnTextInput\(TextCompositionEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ontextinput), 
[UIElement.OnTouchDown\(TouchEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ontouchdown), 
[UIElement.OnTouchEnter\(TouchEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ontouchenter), 
[UIElement.OnTouchLeave\(TouchEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ontouchleave), 
[UIElement.OnTouchMove\(TouchEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ontouchmove), 
[UIElement.OnTouchUp\(TouchEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ontouchup), 
[UIElement.OnVisualParentChanged\(DependencyObject\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.onvisualparentchanged), 
[UIElement.PredictFocus\(FocusNavigationDirection\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.predictfocus), 
[UIElement.RaiseEvent\(RoutedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.raiseevent), 
[UIElement.ReleaseAllTouchCaptures\(\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.releasealltouchcaptures), 
[UIElement.ReleaseMouseCapture\(\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.releasemousecapture), 
[UIElement.ReleaseStylusCapture\(\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.releasestyluscapture), 
[UIElement.ReleaseTouchCapture\(TouchDevice\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.releasetouchcapture), 
[UIElement.RemoveHandler\(RoutedEvent, Delegate\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.removehandler), 
[UIElement.TranslatePoint\(Point, UIElement\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.translatepoint), 
[UIElement.UpdateLayout\(\)](https://learn.microsoft.com/dotnet/api/system.windows.uielement.updatelayout), 
[UIElement.AllowDrop](https://learn.microsoft.com/dotnet/api/system.windows.uielement.allowdrop), 
[UIElement.AreAnyTouchesCaptured](https://learn.microsoft.com/dotnet/api/system.windows.uielement.areanytouchescaptured), 
[UIElement.AreAnyTouchesCapturedWithin](https://learn.microsoft.com/dotnet/api/system.windows.uielement.areanytouchescapturedwithin), 
[UIElement.AreAnyTouchesDirectlyOver](https://learn.microsoft.com/dotnet/api/system.windows.uielement.areanytouchesdirectlyover), 
[UIElement.AreAnyTouchesOver](https://learn.microsoft.com/dotnet/api/system.windows.uielement.areanytouchesover), 
[UIElement.BitmapEffect](https://learn.microsoft.com/dotnet/api/system.windows.uielement.bitmapeffect), 
[UIElement.BitmapEffectInput](https://learn.microsoft.com/dotnet/api/system.windows.uielement.bitmapeffectinput), 
[UIElement.CacheMode](https://learn.microsoft.com/dotnet/api/system.windows.uielement.cachemode), 
[UIElement.Clip](https://learn.microsoft.com/dotnet/api/system.windows.uielement.clip), 
[UIElement.ClipToBounds](https://learn.microsoft.com/dotnet/api/system.windows.uielement.cliptobounds), 
[UIElement.CommandBindings](https://learn.microsoft.com/dotnet/api/system.windows.uielement.commandbindings), 
[UIElement.DesiredSize](https://learn.microsoft.com/dotnet/api/system.windows.uielement.desiredsize), 
[UIElement.Effect](https://learn.microsoft.com/dotnet/api/system.windows.uielement.effect), 
[UIElement.Focusable](https://learn.microsoft.com/dotnet/api/system.windows.uielement.focusable), 
[UIElement.HasAnimatedProperties](https://learn.microsoft.com/dotnet/api/system.windows.uielement.hasanimatedproperties), 
[UIElement.HasEffectiveKeyboardFocus](https://learn.microsoft.com/dotnet/api/system.windows.uielement.haseffectivekeyboardfocus), 
[UIElement.InputBindings](https://learn.microsoft.com/dotnet/api/system.windows.uielement.inputbindings), 
[UIElement.IsArrangeValid](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isarrangevalid), 
[UIElement.IsEnabled](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isenabled), 
[UIElement.IsEnabledCore](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isenabledcore), 
[UIElement.IsFocused](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isfocused), 
[UIElement.IsHitTestVisible](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ishittestvisible), 
[UIElement.IsInputMethodEnabled](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isinputmethodenabled), 
[UIElement.IsKeyboardFocused](https://learn.microsoft.com/dotnet/api/system.windows.uielement.iskeyboardfocused), 
[UIElement.IsKeyboardFocusWithin](https://learn.microsoft.com/dotnet/api/system.windows.uielement.iskeyboardfocuswithin), 
[UIElement.IsManipulationEnabled](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismanipulationenabled), 
[UIElement.IsMeasureValid](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismeasurevalid), 
[UIElement.IsMouseCaptured](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismousecaptured), 
[UIElement.IsMouseCaptureWithin](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismousecapturewithin), 
[UIElement.IsMouseDirectlyOver](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismousedirectlyover), 
[UIElement.IsMouseOver](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismouseover), 
[UIElement.IsStylusCaptured](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isstyluscaptured), 
[UIElement.IsStylusCaptureWithin](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isstyluscapturewithin), 
[UIElement.IsStylusDirectlyOver](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isstylusdirectlyover), 
[UIElement.IsStylusOver](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isstylusover), 
[UIElement.IsVisible](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isvisible), 
[UIElement.Opacity](https://learn.microsoft.com/dotnet/api/system.windows.uielement.opacity), 
[UIElement.OpacityMask](https://learn.microsoft.com/dotnet/api/system.windows.uielement.opacitymask), 
[UIElement.PersistId](https://learn.microsoft.com/dotnet/api/system.windows.uielement.persistid), 
[UIElement.RenderSize](https://learn.microsoft.com/dotnet/api/system.windows.uielement.rendersize), 
[UIElement.RenderTransform](https://learn.microsoft.com/dotnet/api/system.windows.uielement.rendertransform), 
[UIElement.RenderTransformOrigin](https://learn.microsoft.com/dotnet/api/system.windows.uielement.rendertransformorigin), 
[UIElement.SnapsToDevicePixels](https://learn.microsoft.com/dotnet/api/system.windows.uielement.snapstodevicepixels), 
[UIElement.StylusPlugIns](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusplugins), 
[UIElement.TouchesCaptured](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchescaptured), 
[UIElement.TouchesCapturedWithin](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchescapturedwithin), 
[UIElement.TouchesDirectlyOver](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchesdirectlyover), 
[UIElement.TouchesOver](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchesover), 
[UIElement.Uid](https://learn.microsoft.com/dotnet/api/system.windows.uielement.uid), 
[UIElement.Visibility](https://learn.microsoft.com/dotnet/api/system.windows.uielement.visibility), 
[UIElement.DragEnter](https://learn.microsoft.com/dotnet/api/system.windows.uielement.dragenter), 
[UIElement.DragLeave](https://learn.microsoft.com/dotnet/api/system.windows.uielement.dragleave), 
[UIElement.DragOver](https://learn.microsoft.com/dotnet/api/system.windows.uielement.dragover), 
[UIElement.Drop](https://learn.microsoft.com/dotnet/api/system.windows.uielement.drop), 
[UIElement.FocusableChanged](https://learn.microsoft.com/dotnet/api/system.windows.uielement.focusablechanged), 
[UIElement.GiveFeedback](https://learn.microsoft.com/dotnet/api/system.windows.uielement.givefeedback), 
[UIElement.GotFocus](https://learn.microsoft.com/dotnet/api/system.windows.uielement.gotfocus), 
[UIElement.GotKeyboardFocus](https://learn.microsoft.com/dotnet/api/system.windows.uielement.gotkeyboardfocus), 
[UIElement.GotMouseCapture](https://learn.microsoft.com/dotnet/api/system.windows.uielement.gotmousecapture), 
[UIElement.GotStylusCapture](https://learn.microsoft.com/dotnet/api/system.windows.uielement.gotstyluscapture), 
[UIElement.GotTouchCapture](https://learn.microsoft.com/dotnet/api/system.windows.uielement.gottouchcapture), 
[UIElement.IsEnabledChanged](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isenabledchanged), 
[UIElement.IsHitTestVisibleChanged](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ishittestvisiblechanged), 
[UIElement.IsKeyboardFocusedChanged](https://learn.microsoft.com/dotnet/api/system.windows.uielement.iskeyboardfocusedchanged), 
[UIElement.IsKeyboardFocusWithinChanged](https://learn.microsoft.com/dotnet/api/system.windows.uielement.iskeyboardfocuswithinchanged), 
[UIElement.IsMouseCapturedChanged](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismousecapturedchanged), 
[UIElement.IsMouseCaptureWithinChanged](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismousecapturewithinchanged), 
[UIElement.IsMouseDirectlyOverChanged](https://learn.microsoft.com/dotnet/api/system.windows.uielement.ismousedirectlyoverchanged), 
[UIElement.IsStylusCapturedChanged](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isstyluscapturedchanged), 
[UIElement.IsStylusCaptureWithinChanged](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isstyluscapturewithinchanged), 
[UIElement.IsStylusDirectlyOverChanged](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isstylusdirectlyoverchanged), 
[UIElement.IsVisibleChanged](https://learn.microsoft.com/dotnet/api/system.windows.uielement.isvisiblechanged), 
[UIElement.KeyDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.keydown), 
[UIElement.KeyUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.keyup), 
[UIElement.LayoutUpdated](https://learn.microsoft.com/dotnet/api/system.windows.uielement.layoutupdated), 
[UIElement.LostFocus](https://learn.microsoft.com/dotnet/api/system.windows.uielement.lostfocus), 
[UIElement.LostKeyboardFocus](https://learn.microsoft.com/dotnet/api/system.windows.uielement.lostkeyboardfocus), 
[UIElement.LostMouseCapture](https://learn.microsoft.com/dotnet/api/system.windows.uielement.lostmousecapture), 
[UIElement.LostStylusCapture](https://learn.microsoft.com/dotnet/api/system.windows.uielement.loststyluscapture), 
[UIElement.LostTouchCapture](https://learn.microsoft.com/dotnet/api/system.windows.uielement.losttouchcapture), 
[UIElement.ManipulationBoundaryFeedback](https://learn.microsoft.com/dotnet/api/system.windows.uielement.manipulationboundaryfeedback), 
[UIElement.ManipulationCompleted](https://learn.microsoft.com/dotnet/api/system.windows.uielement.manipulationcompleted), 
[UIElement.ManipulationDelta](https://learn.microsoft.com/dotnet/api/system.windows.uielement.manipulationdelta), 
[UIElement.ManipulationInertiaStarting](https://learn.microsoft.com/dotnet/api/system.windows.uielement.manipulationinertiastarting), 
[UIElement.ManipulationStarted](https://learn.microsoft.com/dotnet/api/system.windows.uielement.manipulationstarted), 
[UIElement.ManipulationStarting](https://learn.microsoft.com/dotnet/api/system.windows.uielement.manipulationstarting), 
[UIElement.MouseDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mousedown), 
[UIElement.MouseEnter](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouseenter), 
[UIElement.MouseLeave](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouseleave), 
[UIElement.MouseLeftButtonDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouseleftbuttondown), 
[UIElement.MouseLeftButtonUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouseleftbuttonup), 
[UIElement.MouseMove](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mousemove), 
[UIElement.MouseRightButtonDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouserightbuttondown), 
[UIElement.MouseRightButtonUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouserightbuttonup), 
[UIElement.MouseUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mouseup), 
[UIElement.MouseWheel](https://learn.microsoft.com/dotnet/api/system.windows.uielement.mousewheel), 
[UIElement.PreviewDragEnter](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewdragenter), 
[UIElement.PreviewDragLeave](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewdragleave), 
[UIElement.PreviewDragOver](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewdragover), 
[UIElement.PreviewDrop](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewdrop), 
[UIElement.PreviewGiveFeedback](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewgivefeedback), 
[UIElement.PreviewGotKeyboardFocus](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewgotkeyboardfocus), 
[UIElement.PreviewKeyDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewkeydown), 
[UIElement.PreviewKeyUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewkeyup), 
[UIElement.PreviewLostKeyboardFocus](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewlostkeyboardfocus), 
[UIElement.PreviewMouseDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmousedown), 
[UIElement.PreviewMouseLeftButtonDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmouseleftbuttondown), 
[UIElement.PreviewMouseLeftButtonUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmouseleftbuttonup), 
[UIElement.PreviewMouseMove](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmousemove), 
[UIElement.PreviewMouseRightButtonDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmouserightbuttondown), 
[UIElement.PreviewMouseRightButtonUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmouserightbuttonup), 
[UIElement.PreviewMouseUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmouseup), 
[UIElement.PreviewMouseWheel](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewmousewheel), 
[UIElement.PreviewQueryContinueDrag](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewquerycontinuedrag), 
[UIElement.PreviewStylusButtonDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusbuttondown), 
[UIElement.PreviewStylusButtonUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusbuttonup), 
[UIElement.PreviewStylusDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusdown), 
[UIElement.PreviewStylusInAirMove](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusinairmove), 
[UIElement.PreviewStylusInRange](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusinrange), 
[UIElement.PreviewStylusMove](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusmove), 
[UIElement.PreviewStylusOutOfRange](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusoutofrange), 
[UIElement.PreviewStylusSystemGesture](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylussystemgesture), 
[UIElement.PreviewStylusUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewstylusup), 
[UIElement.PreviewTextInput](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewtextinput), 
[UIElement.PreviewTouchDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewtouchdown), 
[UIElement.PreviewTouchMove](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewtouchmove), 
[UIElement.PreviewTouchUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.previewtouchup), 
[UIElement.QueryContinueDrag](https://learn.microsoft.com/dotnet/api/system.windows.uielement.querycontinuedrag), 
[UIElement.QueryCursor](https://learn.microsoft.com/dotnet/api/system.windows.uielement.querycursor), 
[UIElement.StylusButtonDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusbuttondown), 
[UIElement.StylusButtonUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusbuttonup), 
[UIElement.StylusDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusdown), 
[UIElement.StylusEnter](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusenter), 
[UIElement.StylusInAirMove](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusinairmove), 
[UIElement.StylusInRange](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusinrange), 
[UIElement.StylusLeave](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusleave), 
[UIElement.StylusMove](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusmove), 
[UIElement.StylusOutOfRange](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusoutofrange), 
[UIElement.StylusSystemGesture](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylussystemgesture), 
[UIElement.StylusUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.stylusup), 
[UIElement.TextInput](https://learn.microsoft.com/dotnet/api/system.windows.uielement.textinput), 
[UIElement.TouchDown](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchdown), 
[UIElement.TouchEnter](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchenter), 
[UIElement.TouchLeave](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchleave), 
[UIElement.TouchMove](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchmove), 
[UIElement.TouchUp](https://learn.microsoft.com/dotnet/api/system.windows.uielement.touchup), 
[Visual.AddVisualChild\(Visual\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.addvisualchild), 
[Visual.FindCommonVisualAncestor\(DependencyObject\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.findcommonvisualancestor), 
[Visual.GetVisualChild\(int\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.getvisualchild), 
[Visual.HitTestCore\(GeometryHitTestParameters\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.hittestcore\#system\-windows\-media\-visual\-hittestcore\(system\-windows\-media\-geometryhittestparameters\)), 
[Visual.HitTestCore\(PointHitTestParameters\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.hittestcore\#system\-windows\-media\-visual\-hittestcore\(system\-windows\-media\-pointhittestparameters\)), 
[Visual.IsAncestorOf\(DependencyObject\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.isancestorof), 
[Visual.IsDescendantOf\(DependencyObject\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.isdescendantof), 
[Visual.OnDpiChanged\(DpiScale, DpiScale\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.ondpichanged), 
[Visual.OnVisualChildrenChanged\(DependencyObject, DependencyObject\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.onvisualchildrenchanged), 
[Visual.OnVisualParentChanged\(DependencyObject\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.onvisualparentchanged), 
[Visual.PointFromScreen\(Point\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.pointfromscreen), 
[Visual.PointToScreen\(Point\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.pointtoscreen), 
[Visual.RemoveVisualChild\(Visual\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.removevisualchild), 
[Visual.TransformToAncestor\(Visual3D\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.transformtoancestor\#system\-windows\-media\-visual\-transformtoancestor\(system\-windows\-media\-media3d\-visual3d\)), 
[Visual.TransformToAncestor\(Visual\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.transformtoancestor\#system\-windows\-media\-visual\-transformtoancestor\(system\-windows\-media\-visual\)), 
[Visual.TransformToDescendant\(Visual\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.transformtodescendant), 
[Visual.TransformToVisual\(Visual\)](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.transformtovisual), 
[Visual.VisualBitmapEffect](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualbitmapeffect), 
[Visual.VisualBitmapEffectInput](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualbitmapeffectinput), 
[Visual.VisualBitmapScalingMode](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualbitmapscalingmode), 
[Visual.VisualCacheMode](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualcachemode), 
[Visual.VisualChildrenCount](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualchildrencount), 
[Visual.VisualClearTypeHint](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualcleartypehint), 
[Visual.VisualClip](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualclip), 
[Visual.VisualEdgeMode](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualedgemode), 
[Visual.VisualEffect](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualeffect), 
[Visual.VisualOffset](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualoffset), 
[Visual.VisualOpacity](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualopacity), 
[Visual.VisualOpacityMask](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualopacitymask), 
[Visual.VisualParent](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualparent), 
[Visual.VisualScrollableAreaClip](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualscrollableareaclip), 
[Visual.VisualTextHintingMode](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualtexthintingmode), 
[Visual.VisualTextRenderingMode](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualtextrenderingmode), 
[Visual.VisualTransform](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualtransform), 
[Visual.VisualXSnappingGuidelines](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualxsnappingguidelines), 
[Visual.VisualYSnappingGuidelines](https://learn.microsoft.com/dotnet/api/system.windows.media.visual.visualysnappingguidelines), 
[DependencyObject.ClearValue\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.clearvalue\#system\-windows\-dependencyobject\-clearvalue\(system\-windows\-dependencyproperty\)), 
[DependencyObject.ClearValue\(DependencyPropertyKey\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.clearvalue\#system\-windows\-dependencyobject\-clearvalue\(system\-windows\-dependencypropertykey\)), 
[DependencyObject.CoerceValue\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.coercevalue), 
[DependencyObject.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.equals), 
[DependencyObject.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.gethashcode), 
[DependencyObject.GetLocalValueEnumerator\(\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.getlocalvalueenumerator), 
[DependencyObject.GetValue\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.getvalue), 
[DependencyObject.InvalidateProperty\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.invalidateproperty), 
[DependencyObject.OnPropertyChanged\(DependencyPropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.onpropertychanged), 
[DependencyObject.ReadLocalValue\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.readlocalvalue), 
[DependencyObject.SetCurrentValue\(DependencyProperty, object\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.setcurrentvalue), 
[DependencyObject.SetValue\(DependencyProperty, object\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.setvalue\#system\-windows\-dependencyobject\-setvalue\(system\-windows\-dependencyproperty\-system\-object\)), 
[DependencyObject.SetValue\(DependencyPropertyKey, object\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.setvalue\#system\-windows\-dependencyobject\-setvalue\(system\-windows\-dependencypropertykey\-system\-object\)), 
[DependencyObject.ShouldSerializeProperty\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.shouldserializeproperty), 
[DependencyObject.DependencyObjectType](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.dependencyobjecttype), 
[DependencyObject.IsSealed](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.issealed), 
[DispatcherObject.Dispatcher](https://learn.microsoft.com/dotnet/api/system.windows.threading.dispatcherobject.dispatcher), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

本文件主要包含以下功能：
1. 压感模拟：根据输入设备类型和设置模拟不同的压感效果
2. 墨水到形状识别：将手绘墨迹转换为规则形状（直线、圆形、椭圆、三角形、矩形等）
3. 直线自动拉直：将近似直线的墨迹自动拉成直线
4. 端点吸附：将直线端点吸附到其他直线的端点
5. 矩形参考线系统：通过多条直线构成矩形
6. 高级贝塞尔曲线平滑：对墨迹进行平滑处理
7. 异步墨水处理：提高性能的异步墨水处理机制

## Constructors

### <a id="Ink_Canvas_MainWindow__ctor"></a> MainWindow\(\)

初始化主窗口实例，构建并配置界面元素、初始页面和应用程序运行时状态。

```csharp
public MainWindow()
```

#### Remarks

执行 UI 可见性与布局初始设置、浮动栏位置计算与动画、日志文件清理与调试标记、定时器与撤销/重做绑定、输入事件与墨迹管理器初始化、
首页画布创建、左右侧面板的触摸滑动与点击分页交互绑定、无焦点与置顶模式应用、滑块触摸支持以及延迟的首-run OOBE 检查等启动工作。

## Fields

### <a id="Ink_Canvas_MainWindow_BoundsWidth"></a> BoundsWidth

```csharp
public int BoundsWidth
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_MainWindow_CloseIsFromButton"></a> CloseIsFromButton

```csharp
public static bool CloseIsFromButton
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_IsShowingRestoreHiddenSlidesWindow"></a> IsShowingRestoreHiddenSlidesWindow

指示是否正在显示恢复隐藏幻灯片的窗口

```csharp
public static bool IsShowingRestoreHiddenSlidesWindow
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow__floatingWindowInterceptorManager"></a> \_floatingWindowInterceptorManager

```csharp
public FloatingWindowInterceptorManager _floatingWindowInterceptorManager
```

#### Field Value

 [FloatingWindowInterceptorManager](Ink\_Canvas.FloatingWindowInterceptorManager.md)

### <a id="Ink_Canvas_MainWindow__lastAppliedProfileName"></a> \_lastAppliedProfileName

```csharp
public string _lastAppliedProfileName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_MainWindow_dpiChangedDelayAction"></a> dpiChangedDelayAction

```csharp
public DelayAction dpiChangedDelayAction
```

#### Field Value

 [DelayAction](Ink\_Canvas.Helpers.DelayAction.md)

### <a id="Ink_Canvas_MainWindow_eraserWidth"></a> eraserWidth

```csharp
public double eraserWidth
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_MainWindow_isEraserCircleShape"></a> isEraserCircleShape

```csharp
public bool isEraserCircleShape
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_isFloatingBarFolded"></a> isFloatingBarFolded

浮动栏是否折叠的标志。

```csharp
public bool isFloatingBarFolded
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_isFullScreenApplied"></a> isFullScreenApplied

```csharp
public bool isFullScreenApplied
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_isUsingGeometryEraser"></a> isUsingGeometryEraser

```csharp
public bool isUsingGeometryEraser
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_isUsingStrokesEraser"></a> isUsingStrokesEraser

```csharp
public bool isUsingStrokesEraser
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_pptApplication"></a> pptApplication

PowerPoint应用程序实例，用于与PowerPoint进行交互。

```csharp
public static Application pptApplication
```

#### Field Value

 Application

### <a id="Ink_Canvas_MainWindow_presentation"></a> presentation

当前活动的PowerPoint演示文稿。

```csharp
public static Presentation presentation
```

#### Field Value

 Presentation

### <a id="Ink_Canvas_MainWindow_slide"></a> slide

当前活动的幻灯片。

```csharp
public static Slide slide
```

#### Field Value

 Slide

### <a id="Ink_Canvas_MainWindow_slides"></a> slides

当前演示文稿的幻灯片集合。

```csharp
public static Slides slides
```

#### Field Value

 Slides

### <a id="Ink_Canvas_MainWindow_slidescount"></a> slidescount

当前演示文稿的幻灯片总数。

```csharp
public static int slidescount
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="Ink_Canvas_MainWindow_BoothResolutionHeight"></a> BoothResolutionHeight

```csharp
public int BoothResolutionHeight { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_MainWindow_BoothResolutionWidth"></a> BoothResolutionWidth

```csharp
public int BoothResolutionWidth { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_MainWindow_PPTManager"></a> PPTManager

获取PPT管理器实例

```csharp
public IPPTLinkManager PPTManager { get; }
```

#### Property Value

 [IPPTLinkManager](Ink\_Canvas.Helpers.IPPTLinkManager.md)

#### Remarks

提供对内部PPT链接管理器的公共访问，用于外部代码与PowerPoint进行交互。

### <a id="Ink_Canvas_MainWindow_PPTUIManager"></a> PPTUIManager

```csharp
public PPTUIManager PPTUIManager { get; }
```

#### Property Value

 [PPTUIManager](Ink\_Canvas.Helpers.PPTUIManager.md)

### <a id="Ink_Canvas_MainWindow_Settings"></a> Settings

```csharp
public static Settings Settings { get; set; }
```

#### Property Value

 [Settings](Ink\_Canvas.Settings.md)

### <a id="Ink_Canvas_MainWindow_settingsFileName"></a> settingsFileName

```csharp
public static string settingsFileName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_MainWindow_AdjustTimerContainerSize"></a> AdjustTimerContainerSize\(\)

根据DPI缩放因子调整TimerContainer的尺寸

```csharp
public void AdjustTimerContainerSize()
```

### <a id="Ink_Canvas_MainWindow_ApplyAdvancedEraserShape"></a> ApplyAdvancedEraserShape\(\)

应用橡皮擦形状到InkCanvas

```csharp
public void ApplyAdvancedEraserShape()
```

### <a id="Ink_Canvas_MainWindow_ApplyAlwaysOnTop"></a> ApplyAlwaysOnTop\(\)

```csharp
public void ApplyAlwaysOnTop()
```

### <a id="Ink_Canvas_MainWindow_ApplyMultiScreenSettings"></a> ApplyMultiScreenSettings\(\)

应用多屏设置到全局热键管理器。

```csharp
public void ApplyMultiScreenSettings()
```

### <a id="Ink_Canvas_MainWindow_ApplyNoFocusMode"></a> ApplyNoFocusMode\(\)

```csharp
public void ApplyNoFocusMode()
```

### <a id="Ink_Canvas_MainWindow_ApplyUIAccessTopMost"></a> ApplyUIAccessTopMost\(\)

应用UIA置顶功能

```csharp
public void ApplyUIAccessTopMost()
```

### <a id="Ink_Canvas_MainWindow_AutoUpdate"></a> AutoUpdate\(\)

```csharp
public void AutoUpdate()
```

### <a id="Ink_Canvas_MainWindow_BtnDrawLine_Click_System_Object_System_Windows_Input_MouseButtonEventArgs_"></a> BtnDrawLine\_Click\(object, MouseButtonEventArgs\)

处理绘制直线按钮点击事件

```csharp
public void BtnDrawLine_Click(object sender, MouseButtonEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

事件发送者

`e` [MouseButtonEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mousebuttoneventargs)

鼠标按钮事件参数

#### Remarks

当绘制直线按钮被点击时：
1. 检查是否在多点触控模式下
2. 如果是长按操作，设置绘制模式为直线
3. 重置鼠标按下发送者
4. 如果是长按选中状态，处理相关逻辑
5. 提示切换到画笔模式

### <a id="Ink_Canvas_MainWindow_BtnResetToSuggestion_Click_System_Object_System_Windows_RoutedEventArgs_"></a> BtnResetToSuggestion\_Click\(object, RoutedEventArgs\)

将应用设置重置为推荐的默认值，并保存与重新加载配置以应用更改。

```csharp
public void BtnResetToSuggestion_Click(object sender, RoutedEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

`e` [RoutedEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.routedeventargs)

#### Remarks

如果配置重置受安全密码保护，则会提示用户输入密码；在验证失败时中止重置。方法会暂时停止加载标志以避免触发事件、将“开机启动”切换置为关闭，并在完成后显示一条通知。任何内部异常将被吞噬以保证流程不中断。

### <a id="Ink_Canvas_MainWindow_BtnRestart_Click_System_Object_System_Windows_RoutedEventArgs_"></a> BtnRestart\_Click\(object, RoutedEventArgs\)

重启按钮点击事件处理

```csharp
public void BtnRestart_Click(object sender, RoutedEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

发送者

`e` [RoutedEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.routedeventargs)

路由事件参数

### <a id="Ink_Canvas_MainWindow_CheckClipboardImageAndShowPasteNotificationWhenEnteringBoard"></a> CheckClipboardImageAndShowPasteNotificationWhenEnteringBoard\(\)

在进入白板时检查系统剪贴板是否包含图片；如果存在图片且与上次提示间隔超过预设节流时间，则显示粘贴提示。

```csharp
public void CheckClipboardImageAndShowPasteNotificationWhenEnteringBoard()
```

### <a id="Ink_Canvas_MainWindow_CheckEraserTypeTab"></a> CheckEraserTypeTab\(\)

检查并更新橡皮擦类型标签的状态

```csharp
public void CheckEraserTypeTab()
```

### <a id="Ink_Canvas_MainWindow_DisableEraserOverlay"></a> DisableEraserOverlay\(\)

禁用橡皮擦覆盖层

```csharp
public void DisableEraserOverlay()
```

### <a id="Ink_Canvas_MainWindow_EnableEraserOverlay"></a> EnableEraserOverlay\(\)

启用橡皮擦覆盖层

```csharp
public void EnableEraserOverlay()
```

### <a id="Ink_Canvas_MainWindow_ExitApplication_System_Object_System_Windows_RoutedEventArgs_"></a> ExitApplication\(object, RoutedEventArgs\)

退出按钮点击事件处理

```csharp
public void ExitApplication(object sender, RoutedEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

发送者

`e` [RoutedEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.routedeventargs)

路由事件参数

### <a id="Ink_Canvas_MainWindow_ExitPptPresentation"></a> ExitPptPresentation\(\)

```csharp
public Task ExitPptPresentation()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_MainWindow_FixPointsDirection_System_Windows_Point_System_Windows_Point_"></a> FixPointsDirection\(Point, Point\)

```csharp
public Point[] FixPointsDirection(Point p1, Point p2)
```

#### Parameters

`p1` [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

`p2` [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

#### Returns

 [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)\[\]

### <a id="Ink_Canvas_MainWindow_FoldFloatingBar_System_Object_System_Boolean_"></a> FoldFloatingBar\(object, bool\)

折叠浮动栏，将其收纳到侧边栏。

```csharp
public Task FoldFloatingBar(object sender, bool isAutoFoldCommand = false)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

事件发送者。

`isAutoFoldCommand` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否为自动折叠命令。

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

表示异步操作的任务。

#### Remarks

操作包括：
1. 检查是否应该拒绝操作（如点击了折叠图标但上次鼠标按下的对象不是折叠图标）
2. 设置折叠/展开标志
3. 检查浮动栏是否已经折叠或正在改变隐藏模式，如果是则直接返回
4. 处理墨迹重放相关的UI元素
5. 设置浮动栏状态标志，关闭白板模式（如果当前在白板模式）
6. 如果是用户手动折叠且画布上有较多墨迹，显示通知
7. 清空画布墨迹
8. 隐藏PPT导航面板和浮动栏拖动网格
9. 执行浮动栏和侧边栏的动画
10. 如果开启了彻底隐藏，则隐藏主窗口

### <a id="Ink_Canvas_MainWindow_FoldFloatingBar_MouseUp_System_Object_System_Windows_Input_MouseButtonEventArgs_"></a> FoldFloatingBar\_MouseUp\(object, MouseButtonEventArgs\)

处理折叠浮动栏的鼠标点击事件。

```csharp
public void FoldFloatingBar_MouseUp(object sender, MouseButtonEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

事件发送者。

`e` [MouseButtonEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mousebuttoneventargs)

路由事件参数。

### <a id="Ink_Canvas_MainWindow_GenerateFakePressureRectangle_System_Windows_Input_StylusPointCollection_"></a> GenerateFakePressureRectangle\(StylusPointCollection\)

```csharp
public StylusPointCollection GenerateFakePressureRectangle(StylusPointCollection points)
```

#### Parameters

`points` [StylusPointCollection](https://learn.microsoft.com/dotnet/api/system.windows.input.styluspointcollection)

#### Returns

 [StylusPointCollection](https://learn.microsoft.com/dotnet/api/system.windows.input.styluspointcollection)

### <a id="Ink_Canvas_MainWindow_GenerateFakePressureTriangle_System_Windows_Input_StylusPointCollection_"></a> GenerateFakePressureTriangle\(StylusPointCollection\)

```csharp
public StylusPointCollection GenerateFakePressureTriangle(StylusPointCollection points)
```

#### Parameters

`points` [StylusPointCollection](https://learn.microsoft.com/dotnet/api/system.windows.input.styluspointcollection)

#### Returns

 [StylusPointCollection](https://learn.microsoft.com/dotnet/api/system.windows.input.styluspointcollection)

### <a id="Ink_Canvas_MainWindow_GetCenterPoint_System_Windows_Point_System_Windows_Point_"></a> GetCenterPoint\(Point, Point\)

```csharp
public Point GetCenterPoint(Point point1, Point point2)
```

#### Parameters

`point1` [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

`point2` [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

#### Returns

 [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

### <a id="Ink_Canvas_MainWindow_GetCenterPoint_System_Windows_Input_StylusPoint_System_Windows_Input_StylusPoint_"></a> GetCenterPoint\(StylusPoint, StylusPoint\)

```csharp
public StylusPoint GetCenterPoint(StylusPoint point1, StylusPoint point2)
```

#### Parameters

`point1` [StylusPoint](https://learn.microsoft.com/dotnet/api/system.windows.input.styluspoint)

`point2` [StylusPoint](https://learn.microsoft.com/dotnet/api/system.windows.input.styluspoint)

#### Returns

 [StylusPoint](https://learn.microsoft.com/dotnet/api/system.windows.input.styluspoint)

### <a id="Ink_Canvas_MainWindow_GetCorrectIcon_System_String_System_Boolean_"></a> GetCorrectIcon\(string, bool\)

```csharp
public string GetCorrectIcon(string iconType, bool isSolid = false)
```

#### Parameters

`iconType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isSolid` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_MainWindow_GetCurrentSelectedMode"></a> GetCurrentSelectedMode\(\)

获取当前选中的模式

```csharp
public string GetCurrentSelectedMode()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

当前选中的模式名称

### <a id="Ink_Canvas_MainWindow_GetDistance_System_Windows_Point_System_Windows_Point_"></a> GetDistance\(Point, Point\)

计算两点之间的距离

```csharp
public double GetDistance(Point point1, Point point2)
```

#### Parameters

`point1` [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

第一个点

`point2` [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

第二个点

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

返回两点之间的距离

#### Remarks

使用欧几里得距离公式计算两点之间的距离：
distance = √[(x2 - x1)² + (y2 - y1)²]

### <a id="Ink_Canvas_MainWindow_GetEraserStatusInfo"></a> GetEraserStatusInfo\(\)

获取橡皮擦状态信息

```csharp
public string GetEraserStatusInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_MainWindow_GetPointSpeed_System_Windows_Point_System_Windows_Point_System_Windows_Point_"></a> GetPointSpeed\(Point, Point, Point\)

计算点的速度

```csharp
public double GetPointSpeed(Point point1, Point point2, Point point3)
```

#### Parameters

`point1` [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

第一个点

`point2` [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

第二个点（当前点）

`point3` [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

第三个点

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

返回点的速度

#### Remarks

计算点速度的流程：
1. 计算第一个点到第二个点的距离
2. 计算第三个点到第二个点的距离
3. 将两个距离相加
4. 除以20，得到速度值

### <a id="Ink_Canvas_MainWindow_GetTouchBoundWidth_System_Windows_Input_TouchEventArgs_"></a> GetTouchBoundWidth\(TouchEventArgs\)

获取触摸边界宽度方法

```csharp
public double GetTouchBoundWidth(TouchEventArgs e)
```

#### Parameters

`e` [TouchEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.toucheventargs)

触摸事件参数

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

返回触摸边界宽度

#### Remarks

手掌擦阈值与特殊屏 <code>TouchMultiplier</code> 在激活逻辑中单独参与计算，此处仅返回几何接触尺寸。

### <a id="Ink_Canvas_MainWindow_HandleUriCommand_System_String_"></a> HandleUriCommand\(string\)

```csharp
public void HandleUriCommand(string uri)
```

#### Parameters

`uri` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_MainWindow_InitializePPTManagers"></a> InitializePPTManagers\(\)

初始化并配置用于 PowerPoint 集成的管理器与相关状态。

```csharp
public void InitializePPTManagers()
```

#### Remarks

清理并释放现有的 PPT 管理器与 COM/Interop 状态，创建并配置新的 PPT 管理器（ROT 或 COM 实现，取决于设置）、单一的 PPT 墨迹管理器及其自动保存行为，以及 PPT UI 管理器与其显示/按钮位置选项。方法内部会订阅必要的 PPT 事件并记录初始化过程中的错误或警告。同时初始化长按页翻页定时器以支持长按翻页功能。

### <a id="Ink_Canvas_MainWindow_MoveWindow_System_IntPtr_System_Int32_System_Int32_System_Int32_System_Int32_System_Boolean_"></a> MoveWindow\(IntPtr, int, int, int, int, bool\)

```csharp
public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint)
```

#### Parameters

`hWnd` [IntPtr](https://learn.microsoft.com/dotnet/api/system.intptr)

`X` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`Y` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nWidth` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nHeight` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`bRepaint` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_OnClosing_System_ComponentModel_CancelEventArgs_"></a> OnClosing\(CancelEventArgs\)

Raises the <xref href="System.Windows.Window.Closing" data-throw-if-not-resolved="false"></xref> event.

```csharp
protected override void OnClosing(CancelEventArgs e)
```

#### Parameters

`e` [CancelEventArgs](https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs)

A <xref href="System.ComponentModel.CancelEventArgs" data-throw-if-not-resolved="false"></xref> that contains the event data.

### <a id="Ink_Canvas_MainWindow_OpenSingleStrokeFile_System_String_"></a> OpenSingleStrokeFile\(string\)

打开单个墨迹文件

```csharp
public void OpenSingleStrokeFile(string filePath)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

墨迹文件的路径

#### Remarks

该方法会：
1. 打开墨迹文件并加载墨迹
2. 检查文件是否包含墨迹
3. 如果包含墨迹，清空当前墨迹并添加新墨迹
4. 恢复元素信息
5. 如果文件流中没有墨迹，尝试从内存流中加载

### <a id="Ink_Canvas_MainWindow_OpenXMLStrokeFile_System_String_"></a> OpenXMLStrokeFile\(string\)

打开XML格式的墨迹文件

```csharp
public void OpenXMLStrokeFile(string filePath)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_MainWindow_PauseTopmostMaintenance"></a> PauseTopmostMaintenance\(\)

```csharp
public void PauseTopmostMaintenance()
```

### <a id="Ink_Canvas_MainWindow_PureViewboxFloatingBarMarginAnimationInDesktopMode"></a> PureViewboxFloatingBarMarginAnimationInDesktopMode\(\)

桌面模式下的浮动工具栏边距动画处理

```csharp
public void PureViewboxFloatingBarMarginAnimationInDesktopMode()
```

### <a id="Ink_Canvas_MainWindow_PureViewboxFloatingBarMarginAnimationInPPTMode_System_Boolean_"></a> PureViewboxFloatingBarMarginAnimationInPPTMode\(bool\)

PPT模式下的浮动工具栏边距动画处理

```csharp
public void PureViewboxFloatingBarMarginAnimationInPPTMode(bool isRetry = false)
```

#### Parameters

`isRetry` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否为重试操作

### <a id="Ink_Canvas_MainWindow_ReloadSettingsFromFile"></a> ReloadSettingsFromFile\(\)

从配置文件加载用户设置并将其应用到主窗口和相关控件的状态（包括启动、外观、画布、手势、PPT、自动化等各项配置）。

```csharp
public void ReloadSettingsFromFile()
```

### <a id="Ink_Canvas_MainWindow_ResetPPTStateVariables"></a> ResetPPTStateVariables\(\)

重置PPT相关的状态变量，当PPT自动收纳设置变更时调用

```csharp
public void ResetPPTStateVariables()
```

#### Remarks

将与 PowerPoint 播放和状态追踪相关的内部字段重置为初始默认值。
具体重置的字段包括：
1. 播放结束重入保护标志（isEnteredSlideShowEndEvent）
2. 演示文稿黑边指示（isPresentationHaveBlackSpace）
3. 上次播放页码（_lastPlaybackPage）
4. 导航标志（_shouldNavigateToLastPage）
5. 当前放映位置（_currentSlideShowPosition）
6. 滑动切换处理状态（_isProcessingSlideSwitch）

该方法在执行过程中会：
- 使用线程安全的方式重置滑动切换处理状态
- 成功时记录追踪日志
- 发生异常时记录错误日志并继续执行

### <a id="Ink_Canvas_MainWindow_ResetPPTTimeCapsuleOffset"></a> ResetPPTTimeCapsuleOffset\(\)

重置PPT时间胶囊拖拽偏移量

```csharp
public void ResetPPTTimeCapsuleOffset()
```

### <a id="Ink_Canvas_MainWindow_ResetUpdateCheckRetry"></a> ResetUpdateCheckRetry\(\)

重置更新检查重试状态方法

```csharp
public void ResetUpdateCheckRetry()
```

#### Remarks

重置更新检查的重试状态，包括以下步骤：
1. 停止重试定时器
2. 重置重试计数为0
3. 记录日志
4. 处理异常情况

### <a id="Ink_Canvas_MainWindow_ResumeTopmostMaintenance"></a> ResumeTopmostMaintenance\(\)

```csharp
public void ResumeTopmostMaintenance()
```

### <a id="Ink_Canvas_MainWindow_SavePPTTimeCapsuleOffset_System_Double_System_Double_"></a> SavePPTTimeCapsuleOffset\(double, double\)

保存PPT时间胶囊拖拽偏移量

```csharp
public void SavePPTTimeCapsuleOffset(double offsetX, double offsetY)
```

#### Parameters

`offsetX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`offsetY` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_MainWindow_SaveSettingsToFile"></a> SaveSettingsToFile\(\)

将当前内存中的 Settings 序列化为格式化的 JSON 并写入应用程序配置文件（位于 App.RootPath 下的 Configs 目录或根设置文件）。

```csharp
public static void SaveSettingsToFile()
```

#### Remarks

在写入前会确保目标目录/文件具有写入权限（使用 ProcessProtectionManager）。任何写入失败或异常都会被吞掉，调用方不会收到异常抛出。

### <a id="Ink_Canvas_MainWindow_ScrollViewToVerticalTop_System_Windows_FrameworkElement_System_Windows_Controls_ScrollViewer_"></a> ScrollViewToVerticalTop\(FrameworkElement, ScrollViewer\)

将指定元素在给定 ScrollViewer 中滚动，使该元素与可视区域的顶部对齐。

```csharp
public static void ScrollViewToVerticalTop(FrameworkElement element, ScrollViewer scrollViewer)
```

#### Parameters

`element` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

要对齐到顶部的元素。

`scrollViewer` [ScrollViewer](https://learn.microsoft.com/dotnet/api/system.windows.controls.scrollviewer)

包含该元素的目标 ScrollViewer。

### <a id="Ink_Canvas_MainWindow_SetCursorBasedOnEditingMode_System_Windows_Controls_InkCanvas_"></a> SetCursorBasedOnEditingMode\(InkCanvas\)

```csharp
public void SetCursorBasedOnEditingMode(InkCanvas canvas)
```

#### Parameters

`canvas` [InkCanvas](https://learn.microsoft.com/dotnet/api/system.windows.controls.inkcanvas)

### <a id="Ink_Canvas_MainWindow_SetInterceptRule_Ink_Canvas_Helpers_FloatingWindowInterceptor_InterceptType_System_Boolean_"></a> SetInterceptRule\(InterceptType, bool\)

```csharp
public void SetInterceptRule(FloatingWindowInterceptor.InterceptType type, bool enabled)
```

#### Parameters

`type` [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptType](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptType.md)

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_SetSettingsToRecommendation"></a> SetSettingsToRecommendation\(\)

将应用设置重置为推荐的默认配置。

```csharp
public static void SetSettingsToRecommendation()
```

#### Remarks

该方法会重新创建全局 Settings 实例并应用推荐值，覆盖大部分子模块配置（如外观、画布、自动化、PPT、手势、高级选项等）。
在重置过程中会保留并恢复当前 Settings.Automation 中的 AutoDelSavedFiles 与 AutoDelSavedFilesDaysThreshold 两项值以避免意外删除策略变化。

### <a id="Ink_Canvas_MainWindow_SetTopmostBasedOnSettings_System_Boolean_"></a> SetTopmostBasedOnSettings\(bool\)

根据窗口置顶设置和当前模式设置窗口的Topmost属性

```csharp
public void SetTopmostBasedOnSettings(bool shouldBeTopmost)
```

#### Parameters

`shouldBeTopmost` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

当前模式是否需要窗口置顶

### <a id="Ink_Canvas_MainWindow_SetWindowMode"></a> SetWindowMode\(\)

根据 Settings.Advanced.WindowMode 切换窗口显示模式。

```csharp
public void SetWindowMode()
```

#### Remarks

如果该设置为 true，将窗口置为普通状态并调整到主屏幕的左上角(0,0)及主屏幕分辨率的宽高，使窗口覆盖整个主屏幕；
否则将窗口设为最大化状态。

### <a id="Ink_Canvas_MainWindow_ShouldHandleWindowChromeHitTest_System_Windows_Point_"></a> ShouldHandleWindowChromeHitTest\(Point\)

```csharp
protected override bool ShouldHandleWindowChromeHitTest(Point windowPoint)
```

#### Parameters

`windowPoint` [Point](https://learn.microsoft.com/dotnet/api/system.windows.point)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_ShowNewMessage_System_String_System_Boolean_"></a> ShowNewMessage\(string, bool\)

静态方法，用于在主窗口中显示通知

```csharp
public static void ShowNewMessage(string notice, bool isShowImmediately = true)
```

#### Parameters

`notice` [string](https://learn.microsoft.com/dotnet/api/system.string)

要显示的通知文本

`isShowImmediately` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

指示是否应立即显示通知

#### Remarks

该方法会：
1. 获取应用程序中的主窗口实例
2. 调用主窗口的ShowNotification方法显示通知

### <a id="Ink_Canvas_MainWindow_ShowNotification_System_String_System_Boolean_"></a> ShowNotification\(string, bool\)

在窗口中显示带从底部滑入并淡入的通知文本，并在配置的时长后自动隐藏（若未被新通知覆盖）。

```csharp
public void ShowNotification(string notice, bool isShowImmediately = true)
```

#### Parameters

`notice` [string](https://learn.microsoft.com/dotnet/api/system.string)

要显示的通知文本。

`isShowImmediately` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

指示是否应立即显示通知；当前实现默认立即显示。

### <a id="Ink_Canvas_MainWindow_ShowQuickDrawFloatingButton"></a> ShowQuickDrawFloatingButton\(\)

显示快抽悬浮按钮

```csharp
public void ShowQuickDrawFloatingButton()
```

### <a id="Ink_Canvas_MainWindow_StartEraserAutoSwitchBackTimer"></a> StartEraserAutoSwitchBackTimer\(\)

启动橡皮擦自动切换回批注模式计时器

```csharp
public void StartEraserAutoSwitchBackTimer()
```

### <a id="Ink_Canvas_MainWindow_StartOrStoptimerCheckAutoFold"></a> StartOrStoptimerCheckAutoFold\(\)

根据组合框的当前选择更新双曲线渐近线选项（Settings.Canvas.HyperbolaAsymptoteOption），并将更改保存到设置文件。

```csharp
public void StartOrStoptimerCheckAutoFold()
```

### <a id="Ink_Canvas_MainWindow_StartPPTMonitoring"></a> StartPPTMonitoring\(\)

启动PPT监控：当PowerPoint支持功能启用时，启动PPT管理器的监控功能。

```csharp
public void StartPPTMonitoring()
```

#### Remarks

只有当Settings.PowerPointSettings.PowerPointSupport为true时才会启动监控，并记录启动事件日志。

### <a id="Ink_Canvas_MainWindow_StartPowerPointProcessMonitoring"></a> StartPowerPointProcessMonitoring\(\)

启动PowerPoint应用程序守护

```csharp
public void StartPowerPointProcessMonitoring()
```

#### Remarks

启动对本地 PowerPoint 应用实例的守护监控并在需要时创建应用程序实例。
仅在 PowerPoint 增强功能已启用且未使用 ROT 链接时生效；方法将创建 PowerPoint 应用（若不存在）并启动用于定期检查应用状态的定时器。

### <a id="Ink_Canvas_MainWindow_StartSilentUpdateTimer"></a> StartSilentUpdateTimer\(\)

```csharp
public void StartSilentUpdateTimer()
```

### <a id="Ink_Canvas_MainWindow_StopEraserAutoSwitchBackTimer"></a> StopEraserAutoSwitchBackTimer\(\)

停止橡皮擦自动切换回批注模式计时器

```csharp
public void StopEraserAutoSwitchBackTimer()
```

### <a id="Ink_Canvas_MainWindow_StopPPTMonitoring"></a> StopPPTMonitoring\(\)

停止 PowerPoint 相关的监控：停止并清除用于延迟退出 PPT 模式的定时器，并停止 PPT 管理器的监控，同时记录事件日志。

```csharp
public void StopPPTMonitoring()
```

### <a id="Ink_Canvas_MainWindow_StopPowerPointProcessMonitoring"></a> StopPowerPointProcessMonitoring\(\)

停止PowerPoint应用程序守护

```csharp
public void StopPowerPointProcessMonitoring()
```

### <a id="Ink_Canvas_MainWindow_SwitchToBoardMode"></a> SwitchToBoardMode\(\)

切换到白板模式（用于--board参数和IPC命令）
调用浮动栏上的白板功能

```csharp
public void SwitchToBoardMode()
```

### <a id="Ink_Canvas_MainWindow_ToggleEraserMode"></a> ToggleEraserMode\(\)

切换橡皮擦模式

```csharp
public void ToggleEraserMode()
```

### <a id="Ink_Canvas_MainWindow_ToggleEraserShape"></a> ToggleEraserShape\(\)

切换橡皮擦形状

```csharp
public void ToggleEraserShape()
```

### <a id="Ink_Canvas_MainWindow_ToggleFingerDragMode_System_Object_System_Windows_RoutedEventArgs_"></a> ToggleFingerDragMode\(object, RoutedEventArgs\)

手指拖动模式切换按钮点击事件处理

```csharp
public void ToggleFingerDragMode(object sender, RoutedEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

发送者

`e` [RoutedEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.routedeventargs)

路由事件参数

### <a id="Ink_Canvas_MainWindow_UnFoldFloatingBar_System_Object_"></a> UnFoldFloatingBar\(object\)

展开浮动栏，将其从侧边栏恢复到正常状态。

```csharp
public Task UnFoldFloatingBar(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

事件发送者。

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

表示异步操作的任务。

#### Remarks

操作包括：
1. 如果之前彻底隐藏了主窗口，先恢复显示
2. 隐藏左右侧快捷面板
3. 设置展开/折叠标志
4. 检查浮动栏是否正在改变隐藏模式，如果是则直接返回
5. 设置浮动栏状态标志，标记为未折叠
6. 根据设置决定是否自动切换至批注模式
7. 根据PPT放映模式和设置显示或隐藏翻页按钮
8. 在屏幕模式下显示浮动栏并执行动画
9. 执行侧边栏动画
10. 等待UI完全更新后，重新设置当前选中模式的按钮高亮状态

### <a id="Ink_Canvas_MainWindow_UnFoldFloatingBar_MouseUp_System_Object_System_Windows_Input_MouseButtonEventArgs_"></a> UnFoldFloatingBar\_MouseUp\(object, MouseButtonEventArgs\)

处理展开浮动栏的鼠标点击事件。

```csharp
public void UnFoldFloatingBar_MouseUp(object sender, MouseButtonEventArgs e)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

事件发送者。

`e` [MouseButtonEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mousebuttoneventargs)

路由事件参数。

### <a id="Ink_Canvas_MainWindow_UpdateAutoKillProcessTimer_System_Boolean_"></a> UpdateAutoKillProcessTimer\(bool\)

```csharp
public void UpdateAutoKillProcessTimer(bool shouldRun)
```

#### Parameters

`shouldRun` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_MainWindow_UpdateAutoSaveStrokesTimer"></a> UpdateAutoSaveStrokesTimer\(\)

更新定时保存墨迹定时器状态

```csharp
public void UpdateAutoSaveStrokesTimer()
```

#### Remarks

根据Settings.Automation.IsEnableAutoSaveStrokes设置决定是否启用定时器
如果启用，则根据Settings.Automation.AutoSaveStrokesIntervalMinutes设置定时器间隔
最小间隔为1分钟

### <a id="Ink_Canvas_MainWindow_UpdateCustomIconsInComboBox"></a> UpdateCustomIconsInComboBox\(\)

更新组合框中的自定义图标选项

```csharp
public void UpdateCustomIconsInComboBox()
```

#### Remarks

更新自定义图标选项时：
1. 保留前12个内置图标选项
2. 移除所有现有的自定义图标选项
3. 添加新的自定义图标选项
4. 为自定义图标选项设置字体

### <a id="Ink_Canvas_MainWindow_UpdateEraserSize"></a> UpdateEraserSize\(\)

更新橡皮擦尺寸

```csharp
public void UpdateEraserSize()
```

### <a id="Ink_Canvas_MainWindow_UpdateFloatingBarIcon"></a> UpdateFloatingBarIcon\(\)

根据设置更新浮动栏图标

```csharp
public void UpdateFloatingBarIcon()
```

#### Remarks

根据设置的浮动栏图标索引更新图标：
1. 为不同的图标索引设置不同的图标源
2. 为不同的图标设置不同的边距
3. 支持自定义图标
4. 自定义图标加载失败时使用默认图标

### <a id="Ink_Canvas_MainWindow_UpdateFloatingBarIcons"></a> UpdateFloatingBarIcons\(\)

```csharp
public void UpdateFloatingBarIcons()
```

### <a id="Ink_Canvas_MainWindow_UpdateGestureButtonVisibilityInPPTMode"></a> UpdateGestureButtonVisibilityInPPTMode\(\)

更新PPT模式下手势按钮的显示状态

```csharp
public void UpdateGestureButtonVisibilityInPPTMode()
```

### <a id="Ink_Canvas_MainWindow_UpdateInkFadeManager_System_Boolean_System_Int32_"></a> UpdateInkFadeManager\(bool, int\)

```csharp
public void UpdateInkFadeManager(bool isEnabled, int fadeTime = 0)
```

#### Parameters

`isEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`fadeTime` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_MainWindow_UpdateInkSmoothingConfig"></a> UpdateInkSmoothingConfig\(\)

```csharp
public void UpdateInkSmoothingConfig()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTBtnPreview"></a> UpdatePPTBtnPreview\(\)

```csharp
public void UpdatePPTBtnPreview()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTBtnSlidersStatus"></a> UpdatePPTBtnSlidersStatus\(\)

```csharp
public void UpdatePPTBtnSlidersStatus()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTQuickPanelVisibility"></a> UpdatePPTQuickPanelVisibility\(\)

更新PPT快捷面板的显示状态

```csharp
public void UpdatePPTQuickPanelVisibility()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTTimeCapsuleOpacity"></a> UpdatePPTTimeCapsuleOpacity\(\)

更新PPT时间胶囊的透明度

```csharp
public void UpdatePPTTimeCapsuleOpacity()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTTimeCapsulePosition"></a> UpdatePPTTimeCapsulePosition\(\)

更新PPT时间胶囊的位置

```csharp
public void UpdatePPTTimeCapsulePosition()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTTimeCapsuleScale"></a> UpdatePPTTimeCapsuleScale\(\)

更新PPT时间胶囊的大小

```csharp
public void UpdatePPTTimeCapsuleScale()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTTimeCapsuleVisibility"></a> UpdatePPTTimeCapsuleVisibility\(\)

更新PPT时间胶囊的显示状态

```csharp
public void UpdatePPTTimeCapsuleVisibility()
```

### <a id="Ink_Canvas_MainWindow_UpdatePPTUIManagerSettings"></a> UpdatePPTUIManagerSettings\(\)

更新PPT UI管理器设置的通用方法

```csharp
public void UpdatePPTUIManagerSettings()
```

### <a id="Ink_Canvas_MainWindow_UpdatePickNameBackgroundDisplay"></a> UpdatePickNameBackgroundDisplay\(\)

```csharp
public void UpdatePickNameBackgroundDisplay()
```

### <a id="Ink_Canvas_MainWindow_UpdatePickNameBackgroundsInComboBox"></a> UpdatePickNameBackgroundsInComboBox\(\)

```csharp
public void UpdatePickNameBackgroundsInComboBox()
```

### <a id="Ink_Canvas_MainWindow_ViewboxFloatingBarMarginAnimation_System_Int32_System_Boolean_"></a> ViewboxFloatingBarMarginAnimation\(int, bool\)

浮动工具栏边距动画处理

```csharp
public void ViewboxFloatingBarMarginAnimation(int MarginFromEdge, bool PosXCaculatedWithTaskbarHeight = false)
```

#### Parameters

`MarginFromEdge` [int](https://learn.microsoft.com/dotnet/api/system.int32)

边缘边距

`PosXCaculatedWithTaskbarHeight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否考虑任务栏高度计算位置

