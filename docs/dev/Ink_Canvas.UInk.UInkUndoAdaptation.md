# <a id="Ink_Canvas_UInk_UInkUndoAdaptation"></a> Class UInkUndoAdaptation

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

一个 Canvas 的撤回适配结果：最终可见墨迹 + 可导入 ICC TimeMachine 的 delta 链。

```csharp
public sealed class UInkUndoAdaptation
```

#### Inheritance

object ← 
[UInkUndoAdaptation](Ink\_Canvas.UInk.UInkUndoAdaptation.md)

## Fields

### <a id="Ink_Canvas_UInk_UInkUndoAdaptation_FinalStrokes"></a> FinalStrokes

最终可见墨迹（与 History 共享 Stroke 引用）。

```csharp
public StrokeCollection FinalStrokes
```

#### Field Value

 StrokeCollection

### <a id="Ink_Canvas_UInk_UInkUndoAdaptation_History"></a> History

delta 链：每 undoId 边界的 added→UserInput(false) / removed→UserInput(true)。

```csharp
public TimeMachineHistory[] History
```

#### Field Value

 [TimeMachineHistory](Ink\_Canvas.Helpers.TimeMachineHistory.md)\[\]

