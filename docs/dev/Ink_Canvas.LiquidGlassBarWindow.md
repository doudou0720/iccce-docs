# <a id="Ink_Canvas_LiquidGlassBarWindow"></a> Class LiquidGlassBarWindow

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

液态玻璃浮动栏：独立的置顶、不可激活胶囊窗口，把桌面截图经折射着色器处理后作为自身背景，
呈现一块厚玻璃压在桌面上的效果。工具按钮转发到 <xref href="Ink_Canvas.MainWindow" data-throw-if-not-resolved="false"></xref> 的既有处理器。
参考 wpf-liquid-glass-window（MIT）的三层结构：截图背景 → 折射 → 半透明内容。

```csharp
public class LiquidGlassBarWindow : Window
```

#### Inheritance

Window ← 
[LiquidGlassBarWindow](Ink\_Canvas.LiquidGlassBarWindow.md)

## Methods

### <a id="Ink_Canvas_LiquidGlassBarWindow_OnLocationChanged_EventArgs_"></a> OnLocationChanged\(EventArgs\)

```csharp
protected override void OnLocationChanged(EventArgs e)
```

#### Parameters

`e` EventArgs

### <a id="Ink_Canvas_LiquidGlassBarWindow_OnRenderSizeChanged_SizeChangedInfo_"></a> OnRenderSizeChanged\(SizeChangedInfo\)

```csharp
protected override void OnRenderSizeChanged(SizeChangedInfo info)
```

#### Parameters

`info` SizeChangedInfo

### <a id="Ink_Canvas_LiquidGlassBarWindow_OnSourceInitialized_EventArgs_"></a> OnSourceInitialized\(EventArgs\)

```csharp
protected override void OnSourceInitialized(EventArgs e)
```

#### Parameters

`e` EventArgs

