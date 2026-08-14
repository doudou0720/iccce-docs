# <a id="Ink_Canvas_Helpers_TimeMachineHistory"></a> Class TimeMachineHistory

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class TimeMachineHistory
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TimeMachineHistory](Ink\_Canvas.Helpers.TimeMachineHistory.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_TimeMachineHistory__ctor_StrokeCollection_Ink_Canvas_Helpers_TimeMachineHistoryType_System_Boolean_"></a> TimeMachineHistory\(StrokeCollection, TimeMachineHistoryType, bool\)

```csharp
public TimeMachineHistory(StrokeCollection currentStroke, TimeMachineHistoryType commitType, bool strokeHasBeenCleared)
```

#### Parameters

`currentStroke` StrokeCollection

`commitType` [TimeMachineHistoryType](Ink\_Canvas.Helpers.TimeMachineHistoryType.md)

`strokeHasBeenCleared` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_TimeMachineHistory__ctor_System_Collections_Generic_Dictionary_Stroke_System_Tuple_StylusPointCollection_StylusPointCollection___Ink_Canvas_Helpers_TimeMachineHistoryType_"></a> TimeMachineHistory\(Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection\>\>, TimeMachineHistoryType\)

```csharp
public TimeMachineHistory(Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection>> stylusPointDictionary, TimeMachineHistoryType commitType)
```

#### Parameters

`stylusPointDictionary` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<Stroke, [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<StylusPointCollection, StylusPointCollection\>\>

`commitType` [TimeMachineHistoryType](Ink\_Canvas.Helpers.TimeMachineHistoryType.md)

### <a id="Ink_Canvas_Helpers_TimeMachineHistory__ctor_System_Collections_Generic_Dictionary_Stroke_System_Tuple_DrawingAttributes_DrawingAttributes___Ink_Canvas_Helpers_TimeMachineHistoryType_"></a> TimeMachineHistory\(Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes\>\>, TimeMachineHistoryType\)

```csharp
public TimeMachineHistory(Dictionary<Stroke, Tuple<DrawingAttributes, DrawingAttributes>> drawingAttributes, TimeMachineHistoryType commitType)
```

#### Parameters

`drawingAttributes` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<Stroke, [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<DrawingAttributes, DrawingAttributes\>\>

`commitType` [TimeMachineHistoryType](Ink\_Canvas.Helpers.TimeMachineHistoryType.md)

### <a id="Ink_Canvas_Helpers_TimeMachineHistory__ctor_UIElement_System_String_System_String_"></a> TimeMachineHistory\(UIElement, string, string\)

```csharp
public TimeMachineHistory(UIElement element, string previousState, string currentState)
```

#### Parameters

`element` UIElement

`previousState` [string](https://learn.microsoft.com/dotnet/api/system.string)

`currentState` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_TimeMachineHistory__ctor_StrokeCollection_Ink_Canvas_Helpers_TimeMachineHistoryType_System_Boolean_StrokeCollection_"></a> TimeMachineHistory\(StrokeCollection, TimeMachineHistoryType, bool, StrokeCollection\)

```csharp
public TimeMachineHistory(StrokeCollection currentStroke, TimeMachineHistoryType commitType, bool strokeHasBeenCleared, StrokeCollection replacedStroke)
```

#### Parameters

`currentStroke` StrokeCollection

`commitType` [TimeMachineHistoryType](Ink\_Canvas.Helpers.TimeMachineHistoryType.md)

`strokeHasBeenCleared` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

### <a id="Ink_Canvas_Helpers_TimeMachineHistory_CurrentElementState"></a> CurrentElementState

```csharp
public string CurrentElementState
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

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

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<Stroke, [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<DrawingAttributes, DrawingAttributes\>\>

### <a id="Ink_Canvas_Helpers_TimeMachineHistory_EditedElement"></a> EditedElement

```csharp
public UIElement EditedElement
```

#### Field Value

 UIElement

### <a id="Ink_Canvas_Helpers_TimeMachineHistory_InsertedElement"></a> InsertedElement

```csharp
public UIElement InsertedElement
```

#### Field Value

 UIElement

### <a id="Ink_Canvas_Helpers_TimeMachineHistory_PreviousElementState"></a> PreviousElementState

```csharp
public string PreviousElementState
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_TimeMachineHistory_StylusPointDictionary"></a> StylusPointDictionary

```csharp
public Dictionary<Stroke, Tuple<StylusPointCollection, StylusPointCollection>> StylusPointDictionary
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<Stroke, [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<StylusPointCollection, StylusPointCollection\>\>

