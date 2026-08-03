# <a id="Ink_Canvas_Helpers_TimeMachine"></a> Class TimeMachine

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class TimeMachine
```

#### Inheritance

object ← 
[TimeMachine](Ink\_Canvas.Helpers.TimeMachine.md)

## Properties

### <a id="Ink_Canvas_Helpers_TimeMachine_CanRedo"></a> CanRedo

当前历史是否允许重做。

```csharp
public bool CanRedo { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_TimeMachine_CanUndo"></a> CanUndo

当前历史是否允许撤销。

```csharp
public bool CanUndo { get; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_Helpers_TimeMachine_ClearStrokeHistory"></a> ClearStrokeHistory\(\)

```csharp
public void ClearStrokeHistory()
```

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitElementInsertHistory_UIElement_"></a> CommitElementInsertHistory\(UIElement\)

```csharp
public void CommitElementInsertHistory(UIElement element)
```

#### Parameters

`element` UIElement

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitElementRemoveHistory_UIElement_"></a> CommitElementRemoveHistory\(UIElement\)

```csharp
public void CommitElementRemoveHistory(UIElement element)
```

#### Parameters

`element` UIElement

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeDrawingAttributesHistory_Dictionary_Stroke_Tuple_DrawingAttributes_DrawingAttributes___"></a> CommitStrokeDrawingAttributesHistory\(Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes\>\>\)

```csharp
public void CommitStrokeDrawingAttributesHistory(Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes>> drawingAttributes)
```

#### Parameters

`drawingAttributes` Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes\>\>

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeEraseHistory_StrokeCollection_StrokeCollection_"></a> CommitStrokeEraseHistory\(StrokeCollection, StrokeCollection\)

```csharp
public void CommitStrokeEraseHistory(StrokeCollection stroke, StrokeCollection sourceStroke = null)
```

#### Parameters

`stroke` StrokeCollection

`sourceStroke` StrokeCollection

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeManipulationHistory_Dictionary_Stroke_Tuple_StylusPointCollection_StylusPointCollection___"></a> CommitStrokeManipulationHistory\(Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection\>\>\)

```csharp
public void CommitStrokeManipulationHistory(Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection>> stylusPointDictionary)
```

#### Parameters

`stylusPointDictionary` Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection\>\>

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeShapeHistory_StrokeCollection_StrokeCollection_"></a> CommitStrokeShapeHistory\(StrokeCollection, StrokeCollection\)

```csharp
public void CommitStrokeShapeHistory(StrokeCollection strokeToBeReplaced, StrokeCollection generatedStroke)
```

#### Parameters

`strokeToBeReplaced` StrokeCollection

`generatedStroke` StrokeCollection

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeUserInputHistory_StrokeCollection_"></a> CommitStrokeUserInputHistory\(StrokeCollection\)

```csharp
public void CommitStrokeUserInputHistory(StrokeCollection stroke)
```

#### Parameters

`stroke` StrokeCollection

### <a id="Ink_Canvas_Helpers_TimeMachine_ExportTimeMachineHistory"></a> ExportTimeMachineHistory\(\)

```csharp
public TimeMachineHistory[] ExportTimeMachineHistory()
```

#### Returns

 [TimeMachineHistory](Ink\_Canvas.Helpers.TimeMachineHistory.md)\[\]

### <a id="Ink_Canvas_Helpers_TimeMachine_ImportTimeMachineHistory_Ink_Canvas_Helpers_TimeMachineHistory___"></a> ImportTimeMachineHistory\(TimeMachineHistory\[\]\)

```csharp
public bool ImportTimeMachineHistory(TimeMachineHistory[] sourceHistory)
```

#### Parameters

`sourceHistory` [TimeMachineHistory](Ink\_Canvas.Helpers.TimeMachineHistory.md)\[\]

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_TimeMachine_Redo"></a> Redo\(\)

```csharp
public TimeMachineHistory Redo()
```

#### Returns

 [TimeMachineHistory](Ink\_Canvas.Helpers.TimeMachineHistory.md)

### <a id="Ink_Canvas_Helpers_TimeMachine_TransformStrokesInHistory_Matrix_StrokeCollection_"></a> TransformStrokesInHistory\(Matrix, StrokeCollection\)

把历史中保存的墨迹按 matrix 同步变换（撤销/重做时能回到正确几何），
跳过仍在画布上的笔迹（它们由 inkCanvas.Strokes.Transform 直接处理）。

```csharp
public void TransformStrokesInHistory(Matrix matrix, StrokeCollection canvasStrokes)
```

#### Parameters

`matrix` Matrix

`canvasStrokes` StrokeCollection

### <a id="Ink_Canvas_Helpers_TimeMachine_TryReplaceLastUserInputHistory_StrokeCollection_"></a> TryReplaceLastUserInputHistory\(StrokeCollection\)

```csharp
public bool TryReplaceLastUserInputHistory(StrokeCollection stroke)
```

#### Parameters

`stroke` StrokeCollection

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_TimeMachine_Undo"></a> Undo\(\)

```csharp
public TimeMachineHistory Undo()
```

#### Returns

 [TimeMachineHistory](Ink\_Canvas.Helpers.TimeMachineHistory.md)

### <a id="Ink_Canvas_Helpers_TimeMachine_OnRedoStateChanged"></a> OnRedoStateChanged

```csharp
public event TimeMachine.OnRedoStateChange OnRedoStateChanged
```

#### Event Type

 [TimeMachine](Ink\_Canvas.Helpers.TimeMachine.md).[OnRedoStateChange](Ink\_Canvas.Helpers.TimeMachine.OnRedoStateChange.md)

### <a id="Ink_Canvas_Helpers_TimeMachine_OnUndoStateChanged"></a> OnUndoStateChanged

```csharp
public event TimeMachine.OnUndoStateChange OnUndoStateChanged
```

#### Event Type

 [TimeMachine](Ink\_Canvas.Helpers.TimeMachine.md).[OnUndoStateChange](Ink\_Canvas.Helpers.TimeMachine.OnUndoStateChange.md)

