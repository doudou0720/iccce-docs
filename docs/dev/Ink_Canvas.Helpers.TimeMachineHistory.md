# <a id="Ink_Canvas_Helpers_TimeMachineHistory"></a> Class TimeMachineHistory

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class TimeMachineHistory
```

#### Inheritance

object ← 
[TimeMachineHistory](Ink\_Canvas.Helpers.TimeMachineHistory.md)

## Constructors

### <a id="Ink_Canvas_Helpers_TimeMachineHistory__ctor_StrokeCollection_Ink_Canvas_Helpers_TimeMachineHistoryType_System_Boolean_"></a> TimeMachineHistory\(StrokeCollection, TimeMachineHistoryType, bool\)

```csharp
public TimeMachineHistory(StrokeCollection currentStroke, TimeMachineHistoryType commitType, bool strokeHasBeenCleared)
```

#### Parameters

`currentStroke` StrokeCollection

`commitType` [TimeMachineHistoryType](Ink\_Canvas.Helpers.TimeMachineHistoryType.md)

`strokeHasBeenCleared` bool

### <a id="Ink_Canvas_Helpers_TimeMachineHistory__ctor_Dictionary_Stroke_Tuple_StylusPointCollection_StylusPointCollection___Ink_Canvas_Helpers_TimeMachineHistoryType_"></a> TimeMachineHistory\(Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection\>\>, TimeMachineHistoryType\)

```csharp
public TimeMachineHistory(Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection>> stylusPointDictionary, TimeMachineHistoryType commitType)
```

#### Parameters

`stylusPointDictionary` Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection\>\>

`commitType` [TimeMachineHistoryType](Ink\_Canvas.Helpers.TimeMachineHistoryType.md)

### <a id="Ink_Canvas_Helpers_TimeMachineHistory__ctor_Dictionary_Stroke_Tuple_DrawingAttributes_DrawingAttributes___Ink_Canvas_Helpers_TimeMachineHistoryType_"></a> TimeMachineHistory\(Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes\>\>, TimeMachineHistoryType\)

```csharp
public TimeMachineHistory(Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes>> drawingAttributes, TimeMachineHistoryType commitType)
```

#### Parameters

`drawingAttributes` Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes\>\>

`commitType` [TimeMachineHistoryType](Ink\_Canvas.Helpers.TimeMachineHistoryType.md)

### <a id="Ink_Canvas_Helpers_TimeMachineHistory__ctor_StrokeCollection_Ink_Canvas_Helpers_TimeMachineHistoryType_System_Boolean_StrokeCollection_"></a> TimeMachineHistory\(StrokeCollection, TimeMachineHistoryType, bool, StrokeCollection\)

```csharp
public TimeMachineHistory(StrokeCollection currentStroke, TimeMachineHistoryType commitType, bool strokeHasBeenCleared, StrokeCollection replacedStroke)
```

#### Parameters

`currentStroke` StrokeCollection

`commitType` [TimeMachineHistoryType](Ink\_Canvas.Helpers.TimeMachineHistoryType.md)

`strokeHasBeenCleared` bool

`replacedStroke` StrokeCollection

### <a id="Ink_Canvas_Helpers_TimeMachineHistory__ctor_UIElement_Ink_Canvas_Helpers_TimeMachineHistoryType_"></a> TimeMachineHistory\(UIElement, TimeMachineHistoryType\)

```csharp
public TimeMachineHistory(UIElement element, TimeMachineHistoryType commitType)
```

#### Parameters

`element` UIElement

`commitType` [TimeMachineHistoryType](Ink\_Canvas.Helpers.TimeMachineHistoryType.md)

## Fields

### <a id="Ink_Canvas_Helpers_TimeMachineHistory_CommitType"></a> CommitType

```csharp
public TimeMachineHistoryType CommitType
```

#### Field Value

 [TimeMachineHistoryType](Ink\_Canvas.Helpers.TimeMachineHistoryType.md)

### <a id="Ink_Canvas_Helpers_TimeMachineHistory_CurrentStroke"></a> CurrentStroke

```csharp
public StrokeCollection CurrentStroke
```

#### Field Value

 StrokeCollection

### <a id="Ink_Canvas_Helpers_TimeMachineHistory_DrawingAttributes"></a> DrawingAttributes

```csharp
public Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes>> DrawingAttributes
```

#### Field Value

 Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes\>\>

### <a id="Ink_Canvas_Helpers_TimeMachineHistory_InsertedElement"></a> InsertedElement

```csharp
public UIElement InsertedElement
```

#### Field Value

 UIElement

### <a id="Ink_Canvas_Helpers_TimeMachineHistory_ReplacedStroke"></a> ReplacedStroke

```csharp
public StrokeCollection ReplacedStroke
```

#### Field Value

 StrokeCollection

### <a id="Ink_Canvas_Helpers_TimeMachineHistory_StrokeHasBeenCleared"></a> StrokeHasBeenCleared

```csharp
public bool StrokeHasBeenCleared
```

#### Field Value

 bool

### <a id="Ink_Canvas_Helpers_TimeMachineHistory_StylusPointDictionary"></a> StylusPointDictionary

```csharp
public Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection>> StylusPointDictionary
```

#### Field Value

 Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection\>\>

