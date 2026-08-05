# <a id="Ink_Canvas_UInk_UInkConversion"></a> Class UInkConversion

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

ICC WPF 墨迹模型 ⇄ UInk Ink 块 的双向转换。
语义（对应方案决策）：
 - inkType 统一 = Pen(1)；
 - 块级 opacity 承载 ICC 的 alpha（AARRGGBB 的 A）：写 opacity = A / 255f，读回 A = (byte)(opacity * 255f)；
 - 剩余 DrawingAttributes（Width/Height/FitToCurve/IsHighlighter/IgnorePressure/StylusTip）经 extra["icc:da"]
   私有键无损往返；读取端有 icc:da 用 icc:da，否则从块级字段推导（外部文件回退，透明度仍尊重块级 opacity）。

```csharp
public static class UInkConversion
```

#### Inheritance

object ← 
[UInkConversion](Ink\_Canvas.UInk.UInkConversion.md)

## Fields

### <a id="Ink_Canvas_UInk_UInkConversion_IccDaKey"></a> IccDaKey

私有扩展键：序列化的 ICC DrawingAttributes 字符串。

```csharp
public const string IccDaKey
```

#### Field Value

 string

## Methods

### <a id="Ink_Canvas_UInk_UInkConversion_BlockToStroke_Ink_Canvas_UInk_IUInkContentBlock_"></a> BlockToStroke\(IUInkContentBlock\)

内容块 → Stroke 分发（Ink→InkToStroke，Shape→ShapeToStroke，Media→null）。供撤回适配/映射器使用。

```csharp
public static Stroke BlockToStroke(IUInkContentBlock block)
```

#### Parameters

`block` [IUInkContentBlock](Ink\_Canvas.UInk.IUInkContentBlock.md)

#### Returns

 Stroke

### <a id="Ink_Canvas_UInk_UInkConversion_InkToStroke_Ink_Canvas_UInk_UInkInk_"></a> InkToStroke\(UInkInk\)

```csharp
public static Stroke InkToStroke(UInkInk ink)
```

#### Parameters

`ink` [UInkInk](Ink\_Canvas.UInk.UInkInk.md)

#### Returns

 Stroke

### <a id="Ink_Canvas_UInk_UInkConversion_InksToStrokes_IEnumerable_Ink_Canvas_UInk_UInkInk__"></a> InksToStrokes\(IEnumerable<UInkInk\>\)

```csharp
public static StrokeCollection InksToStrokes(IEnumerable<UInkInk> inks)
```

#### Parameters

`inks` IEnumerable<[UInkInk](Ink\_Canvas.UInk.UInkInk.md)\>

#### Returns

 StrokeCollection

### <a id="Ink_Canvas_UInk_UInkConversion_ShapeToStroke_Ink_Canvas_UInk_UInkShape_"></a> ShapeToStroke\(UInkShape\)

把 UInkShape 渲染为一条 Stroke：按几何生成轮廓点列（闭合图形回绕首点），
用 stroke 样式（color/opacity/width）着色；仅 fill 时用 fill 颜色描轮廓近似。
dashArray/markers 目前按实线近似（规范允许渲染差异）。

```csharp
public static Stroke ShapeToStroke(UInkShape shape)
```

#### Parameters

`shape` [UInkShape](Ink\_Canvas.UInk.UInkShape.md)

#### Returns

 Stroke

### <a id="Ink_Canvas_UInk_UInkConversion_StrokeToInk_Stroke_System_UInt32_System_UInt32_"></a> StrokeToInk\(Stroke, uint, uint\)

```csharp
public static UInkInk StrokeToInk(Stroke stroke, uint contentId = null, uint undoId = null)
```

#### Parameters

`stroke` Stroke

`contentId` uint

`undoId` uint

#### Returns

 [UInkInk](Ink\_Canvas.UInk.UInkInk.md)

### <a id="Ink_Canvas_UInk_UInkConversion_StrokesToInks_StrokeCollection_System_UInt32_System_UInt32_"></a> StrokesToInks\(StrokeCollection, uint, uint\)

```csharp
public static List<UInkInk> StrokesToInks(StrokeCollection strokes, uint startContentId = null, uint undoId = null)
```

#### Parameters

`strokes` StrokeCollection

`startContentId` uint

`undoId` uint

#### Returns

 List<[UInkInk](Ink\_Canvas.UInk.UInkInk.md)\>

