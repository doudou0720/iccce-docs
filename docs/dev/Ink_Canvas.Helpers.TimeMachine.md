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

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitElementInsertHistory_System_Windows_UIElement_"></a> CommitElementInsertHistory\(UIElement\)

```csharp
public void CommitElementInsertHistory(UIElement element)
```

#### Parameters

`element` [UIElement](https://learn.microsoft.com/dotnet/api/system.windows.uielement)

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitElementRemoveHistory_System_Windows_UIElement_"></a> CommitElementRemoveHistory\(UIElement\)

```csharp
public void CommitElementRemoveHistory(UIElement element)
```

#### Parameters

`element` [UIElement](https://learn.microsoft.com/dotnet/api/system.windows.uielement)

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeDrawingAttributesHistory_System_Collections_Generic_Dictionary_System_Windows_Ink_Stroke_System_Tuple_System_Windows_Ink_DrawingAttributes_System_Windows_Ink_DrawingAttributes___"></a> CommitStrokeDrawingAttributesHistory\(Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes\>\>\)

```csharp
public void CommitStrokeDrawingAttributesHistory(Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes>> drawingAttributes)
```

#### Parameters

`drawingAttributes` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[Stroke](https://learn.microsoft.com/dotnet/api/system.windows.ink.stroke), [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[DrawingAttributes](https://learn.microsoft.com/dotnet/api/system.windows.ink.drawingattributes), [DrawingAttributes](https://learn.microsoft.com/dotnet/api/system.windows.ink.drawingattributes)\>\>

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeEraseHistory_System_Windows_Ink_StrokeCollection_System_Windows_Ink_StrokeCollection_"></a> CommitStrokeEraseHistory\(StrokeCollection, StrokeCollection\)

```csharp
public void CommitStrokeEraseHistory(StrokeCollection stroke, StrokeCollection sourceStroke = null)
```

#### Parameters

`stroke` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

`sourceStroke` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeManipulationHistory_System_Collections_Generic_Dictionary_System_Windows_Ink_Stroke_System_Tuple_System_Windows_Input_StylusPointCollection_System_Windows_Input_StylusPointCollection___"></a> CommitStrokeManipulationHistory\(Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection\>\>\)

```csharp
public void CommitStrokeManipulationHistory(Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection>> stylusPointDictionary)
```

#### Parameters

`stylusPointDictionary` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[Stroke](https://learn.microsoft.com/dotnet/api/system.windows.ink.stroke), [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[StylusPointCollection](https://learn.microsoft.com/dotnet/api/system.windows.input.styluspointcollection), [StylusPointCollection](https://learn.microsoft.com/dotnet/api/system.windows.input.styluspointcollection)\>\>

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeShapeHistory_System_Windows_Ink_StrokeCollection_System_Windows_Ink_StrokeCollection_"></a> CommitStrokeShapeHistory\(StrokeCollection, StrokeCollection\)

```csharp
public void CommitStrokeShapeHistory(StrokeCollection strokeToBeReplaced, StrokeCollection generatedStroke)
```

#### Parameters

`strokeToBeReplaced` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

`generatedStroke` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

### <a id="Ink_Canvas_Helpers_TimeMachine_CommitStrokeUserInputHistory_System_Windows_Ink_StrokeCollection_"></a> CommitStrokeUserInputHistory\(StrokeCollection\)

```csharp
public void CommitStrokeUserInputHistory(StrokeCollection stroke)
```

#### Parameters

`stroke` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

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

### <a id="Ink_Canvas_Helpers_TimeMachine_TransformStrokesInHistory_System_Windows_Media_Matrix_System_Windows_Ink_StrokeCollection_"></a> TransformStrokesInHistory\(Matrix, StrokeCollection\)

把历史中保存的墨迹按 matrix 同步变换（撤销/重做时能回到正确几何），
跳过仍在画布上的笔迹（它们由 inkCanvas.Strokes.Transform 直接处理）。

```csharp
public void TransformStrokesInHistory(Matrix matrix, StrokeCollection canvasStrokes)
```

#### Parameters

`matrix` [Matrix](https://learn.microsoft.com/dotnet/api/system.windows.media.matrix)

`canvasStrokes` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

### <a id="Ink_Canvas_Helpers_TimeMachine_TryReplaceLastUserInputHistory_System_Windows_Ink_StrokeCollection_"></a> TryReplaceLastUserInputHistory\(StrokeCollection\)

```csharp
public bool TryReplaceLastUserInputHistory(StrokeCollection stroke)
```

#### Parameters

`stroke` [StrokeCollection](https://learn.microsoft.com/dotnet/api/system.windows.ink.strokecollection)

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

