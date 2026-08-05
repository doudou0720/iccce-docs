# <a id="Ink_Canvas_UInk_UInkUndoAdapter"></a> Class UInkUndoAdapter

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

加载方向撤回语义适配（UInk → ICC TimeMachine）。
UInk 用 undoId 分组 + renderOnlyWhenLatest 末尾最新组表达撤回；ICC TimeMachine 是增量栈
（ApplyHistoryToCanvas 对 UserInput：cleared=false 添加 CurrentStroke，true 移除）。
适配算法：
 1. 按 undoId 分组（连续同值 = 一次撤回操作）；
 2. 对每个前缀应用末尾最新组规则得到可见集 visibleSet(i)；
 3. 相邻边界差集得 added/removed，生成 UserInput 历史项；
 4. 最终可见集 = 载入画布的墨迹。此后 ICC 的 Undo 沿链逐步把「隐藏但未撤回的原稿」展现出来。
Media 块不参与墨迹撤回链（其 undoId 分组语义由元素恢复管线处理，见 UInkIccMapper）。

```csharp
public static class UInkUndoAdapter
```

#### Inheritance

object ← 
[UInkUndoAdapter](Ink\_Canvas.UInk.UInkUndoAdapter.md)

## Methods

### <a id="Ink_Canvas_UInk_UInkUndoAdapter_Adapt_Ink_Canvas_UInk_UInkCanvasRecord_Func_Ink_Canvas_UInk_IUInkContentBlock_Stroke__"></a> Adapt\(UInkCanvasRecord, Func<IUInkContentBlock, Stroke\>\)

```csharp
public static UInkUndoAdaptation Adapt(UInkCanvasRecord record, Func<IUInkContentBlock, Stroke> toStroke)
```

#### Parameters

`record` [UInkCanvasRecord](Ink\_Canvas.UInk.UInkCanvasRecord.md)

`toStroke` Func<[IUInkContentBlock](Ink\_Canvas.UInk.IUInkContentBlock.md), Stroke\>

#### Returns

 [UInkUndoAdaptation](Ink\_Canvas.UInk.UInkUndoAdaptation.md)

