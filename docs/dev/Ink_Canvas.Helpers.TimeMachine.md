# <a id="Ink_Canvas_Helpers_TimeMachine"></a> Class TimeMachine

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class TimeMachine
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TimeMachine](Ink\_Canvas.Helpers.TimeMachine.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Helpers_TimeMachine_CanRedo"></a> CanRedo

当前历史是否允许重做。

```csharp
public bool CanRedo { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_TimeMachine_CanUndo"></a> CanUndo

当前历史是否允许撤销。

```csharp
public bool CanUndo { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeDrawingAttributesHistory_System_Collections_Generic_Dictionary_Stroke_System_Tuple_DrawingAttributes_DrawingAttributes___"></a> CommitStrokeDrawingAttributesHistory\(Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes\>\>\)

```csharp
public void CommitStrokeDrawingAttributesHistory(Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes>> drawingAttributes)
```

#### Parameters

`drawingAttributes` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<Stroke, [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<DrawingAttributes, DrawingAttributes\>\>

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeEraseHistory_StrokeCollection_StrokeCollection_"></a> CommitStrokeEraseHistory\(StrokeCollection, StrokeCollection\)

```csharp
public void CommitStrokeEraseHistory(StrokeCollection stroke, StrokeCollection sourceStroke = null)
```

#### Parameters

`stroke` StrokeCollection

`sourceStroke` StrokeCollection

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeManipulationHistory_System_Collections_Generic_Dictionary_Stroke_System_Tuple_StylusPointCollection_StylusPointCollection___"></a> CommitStrokeManipulationHistory\(Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection\>\>\)

```csharp
public void CommitStrokeManipulationHistory(Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection>> stylusPointDictionary)
```

#### Parameters

`stylusPointDictionary` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<Stroke, [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<StylusPointCollection, StylusPointCollection\>\>

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_TimeMachine_Redo"></a> Redo\(\)

```csharp
public TimeMachineHistory Redo()
```

#### Returns

 [TimeMachineHistory](Ink\_Canvas.Helpers.TimeMachineHistory.md)

### <a id="Ink_Canvas_Helpers_TimeMachine_TransformStrokesInHistory_Matrix_StrokeCollection_"></a> TransformStrokesInHistory\(Matrix, StrokeCollection\)

对当前页历史中所有不在画布上的 Stroke 应用变换矩阵。
用于视频展台模式：旋转/移动/缩放摄像头预览时，画布上的笔画已被
inkCanvas.Strokes.Transform 变换，但历史中已移出画布的 Stroke
（如形状识别的 ReplacedStroke、已撤销的 CurrentStroke）不会被变换。
撤销/重做时这些 Stroke 加回画布会出现在旧位置，因此需要同步变换。
注意：同一个 Stroke 可能出现在多个历史条目中（如条目1的 CurrentStroke
和条目2的 ReplacedStroke 是同一引用），用 HashSet 去重避免双重变换。

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

