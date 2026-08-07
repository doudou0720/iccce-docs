# <a id="Ink_Canvas_Plugins_IPluginCanvasGestureHandler"></a> Interface IPluginCanvasGestureHandler

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

画布双指手势处理器：宿主把 InkCanvas 上的操作（Manipulation）事件转发给插件，
用于实现插件背景层的双指缩放/平移，并让墨迹与背景同步。

<p>
宿主在以下时机回调（均发生在 UI 线程）：

<ol><li><xref href="Ink_Canvas.Plugins.IPluginCanvasGestureHandler.OnCanvasGestureStarting(ManipulationStartingEventArgs)" data-throw-if-not-resolved="false"></xref> — 操作即将开始，返回 <code>true</code> 表示插件接管，
    此时插件应在 ManipulationStartingEventArgs.Mode 里声明需要的手势类型
    （如 ManipulationModes.Scale | ManipulationModes.Translate）；</li><li><xref href="Ink_Canvas.Plugins.IPluginCanvasGestureHandler.OnCanvasGestureDelta(ManipulationDeltaEventArgs)" data-throw-if-not-resolved="false"></xref> — 操作增量，返回 <code>true</code> 表示插件已处理，
    宿主将跳过默认的墨迹/画布变换；</li><li><xref href="Ink_Canvas.Plugins.IPluginCanvasGestureHandler.OnCanvasGestureCompleted(ManipulationCompletedEventArgs)" data-throw-if-not-resolved="false"></xref> — 操作结束，宿主的编辑模式恢复由宿主照常处理。</li></ol>

不参与手势时应返回 <code>false</code>，让宿主走默认行为（书写/选择/橡皮擦等）。
</p>

```csharp
public interface IPluginCanvasGestureHandler
```

## Methods

### <a id="Ink_Canvas_Plugins_IPluginCanvasGestureHandler_OnCanvasGestureCompleted_ManipulationCompletedEventArgs_"></a> OnCanvasGestureCompleted\(ManipulationCompletedEventArgs\)

操作结束。宿主清理照常进行，这里只做插件自身的收尾。

```csharp
void OnCanvasGestureCompleted(ManipulationCompletedEventArgs e)
```

#### Parameters

`e` ManipulationCompletedEventArgs

### <a id="Ink_Canvas_Plugins_IPluginCanvasGestureHandler_OnCanvasGestureDelta_ManipulationDeltaEventArgs_"></a> OnCanvasGestureDelta\(ManipulationDeltaEventArgs\)

操作增量。返回 <code>true</code> 表示插件已处理，宿主跳过默认变换。

```csharp
bool OnCanvasGestureDelta(ManipulationDeltaEventArgs e)
```

#### Parameters

`e` ManipulationDeltaEventArgs

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_IPluginCanvasGestureHandler_OnCanvasGestureStarting_ManipulationStartingEventArgs_"></a> OnCanvasGestureStarting\(ManipulationStartingEventArgs\)

操作即将开始。返回 <code>true</code> 表示插件接管该次操作。

```csharp
bool OnCanvasGestureStarting(ManipulationStartingEventArgs e)
```

#### Parameters

`e` ManipulationStartingEventArgs

#### Returns

 bool

