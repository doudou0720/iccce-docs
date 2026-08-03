# <a id="Ink_Canvas_Shaders_LiquidGlassEffect"></a> Class LiquidGlassEffect

Namespace: [Ink\_Canvas.Shaders](Ink\_Canvas.Shaders.md)  
Assembly: InkCanvasForClass.dll  

液态玻璃折射着色器（ps_3_0）。移植自 AndroidLiquidGlass（Apache-2.0）：
SDF 圆角矩形只在边缘带（<xref href="Ink_Canvas.Shaders.LiquidGlassEffect.RefractionHeight" data-throw-if-not-resolved="false"></xref>）内做折射，中心区域原样
透出桌面截图；可选 7 采样色散；最后叠一层沿圆角法线分布的高光。
着色器源码见 Shaders/LiquidGlassEffect.hlsl（用 d3dcompiler_47 的 D3DCompile 编译）。

```csharp
public sealed class LiquidGlassEffect : ShaderEffect
```

#### Inheritance

ShaderEffect ← 
[LiquidGlassEffect](Ink\_Canvas.Shaders.LiquidGlassEffect.md)

## Constructors

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect__ctor"></a> LiquidGlassEffect\(\)

```csharp
public LiquidGlassEffect()
```

## Fields

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_BlurRadiusProperty"></a> BlurRadiusProperty

```csharp
public static readonly DependencyProperty BlurRadiusProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_ChromaticAberrationProperty"></a> ChromaticAberrationProperty

```csharp
public static readonly DependencyProperty ChromaticAberrationProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_CornerRadiusProperty"></a> CornerRadiusProperty

```csharp
public static readonly DependencyProperty CornerRadiusProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_DepthEffectProperty"></a> DepthEffectProperty

```csharp
public static readonly DependencyProperty DepthEffectProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_HighlightAngleProperty"></a> HighlightAngleProperty

```csharp
public static readonly DependencyProperty HighlightAngleProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_HighlightFalloffProperty"></a> HighlightFalloffProperty

```csharp
public static readonly DependencyProperty HighlightFalloffProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_HighlightStrengthProperty"></a> HighlightStrengthProperty

```csharp
public static readonly DependencyProperty HighlightStrengthProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_HighlightWidthProperty"></a> HighlightWidthProperty

```csharp
public static readonly DependencyProperty HighlightWidthProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_InputProperty"></a> InputProperty

```csharp
public static readonly DependencyProperty InputProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_RefractionAmountProperty"></a> RefractionAmountProperty

```csharp
public static readonly DependencyProperty RefractionAmountProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_RefractionHeightProperty"></a> RefractionHeightProperty

```csharp
public static readonly DependencyProperty RefractionHeightProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_TextureSizeProperty"></a> TextureSizeProperty

```csharp
public static readonly DependencyProperty TextureSizeProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_BlurRadius"></a> BlurRadius

内部连续高斯模糊半径（px）。着色器对清晰截图模糊，玻璃的磨砂感。

```csharp
public float BlurRadius { get; set; }
```

#### Property Value

 float

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_ChromaticAberration"></a> ChromaticAberration

0 关闭色散；&gt;0 打开 7 采样色差（强度系数）。

```csharp
public float ChromaticAberration { get; set; }
```

#### Property Value

 float

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_CornerRadius"></a> CornerRadius

圆角半径，DIP（胶囊=高度一半）。

```csharp
public float CornerRadius { get; set; }
```

#### Property Value

 float

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_DepthEffect"></a> DepthEffect

0 或 1：叠加径向分量，增强边缘立体感。

```csharp
public float DepthEffect { get; set; }
```

#### Property Value

 float

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_HighlightAngle"></a> HighlightAngle

高光方向（弧度）。

```csharp
public float HighlightAngle { get; set; }
```

#### Property Value

 float

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_HighlightFalloff"></a> HighlightFalloff

高光衰减指数。

```csharp
public float HighlightFalloff { get; set; }
```

#### Property Value

 float

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_HighlightStrength"></a> HighlightStrength

高光强度 0..1。

```csharp
public float HighlightStrength { get; set; }
```

#### Property Value

 float

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_HighlightWidth"></a> HighlightWidth

高光带宽（px）。高光只出现在距边界这个距离内，中心不加白。
铺满整面会让扁胶囊整体发雾（梯度是单位法线、不随深度衰减）。

```csharp
public float HighlightWidth { get; set; }
```

#### Property Value

 float

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_Input"></a> Input

```csharp
public Brush Input { get; set; }
```

#### Property Value

 Brush

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_IsShaderAvailable"></a> IsShaderAvailable

着色器二进制是否成功加载。失败时调用方应退回纯色/亚克力背景。

```csharp
public static bool IsShaderAvailable { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_RefractionAmount"></a> RefractionAmount

折射位移幅度（px）。负值=向内侧采样（边缘透镜放大）。

```csharp
public float RefractionAmount { get; set; }
```

#### Property Value

 float

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_RefractionHeight"></a> RefractionHeight

边缘折射带宽（px）。中心区域不折射，原样透出桌面。

```csharp
public float RefractionHeight { get; set; }
```

#### Property Value

 float

### <a id="Ink_Canvas_Shaders_LiquidGlassEffect_TextureSize"></a> TextureSize

输入纹理（折射层）尺寸，DIP。

```csharp
public Point TextureSize { get; set; }
```

#### Property Value

 Point

