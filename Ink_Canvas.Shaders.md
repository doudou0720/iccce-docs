# <a id="Ink_Canvas_Shaders"></a> Namespace Ink\_Canvas.Shaders

### Classes

 [LiquidGlassEffect](Ink\_Canvas.Shaders.LiquidGlassEffect.md)

液态玻璃折射着色器（ps_3_0）。移植自 AndroidLiquidGlass（Apache-2.0）：
SDF 圆角矩形只在边缘带（<xref href="Ink_Canvas.Shaders.LiquidGlassEffect.RefractionHeight" data-throw-if-not-resolved="false"></xref>）内做折射，中心区域原样
透出桌面截图；可选 7 采样色散；最后叠一层沿圆角法线分布的高光。
着色器源码见 Shaders/LiquidGlassEffect.hlsl（用 d3dcompiler_47 的 D3DCompile 编译）。

