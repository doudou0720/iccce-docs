# <a id="Ink_Canvas_Helpers_IpcIACoreClient"></a> Class IpcIACoreClient

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class IpcIACoreClient : IDisposable
```

#### Inheritance

IDisposable ← 
[IpcIACoreClient](Ink\_Canvas.Helpers.IpcIACoreClient.md)

## Properties

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_Instance"></a> Instance

```csharp
public static IpcIACoreClient Instance { get; }
```

#### Property Value

 [IpcIACoreClient](Ink\_Canvas.Helpers.IpcIACoreClient.md)

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_IsAvailable"></a> IsAvailable

```csharp
public bool IsAvailable { get; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_Recognize_StrokeCollection_"></a> Recognize\(StrokeCollection\)

```csharp
public InkShapeRecognitionResult Recognize(StrokeCollection strokes)
```

#### Parameters

`strokes` StrokeCollection

#### Returns

 [InkShapeRecognitionResult](Ink\_Canvas.Helpers.InkShapeRecognitionResult.md)

### <a id="Ink_Canvas_Helpers_IpcIACoreClient_Start"></a> Start\(\)

```csharp
public bool Start()
```

#### Returns

 bool

