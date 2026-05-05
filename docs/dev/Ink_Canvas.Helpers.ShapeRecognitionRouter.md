# <a id="Ink_Canvas_Helpers_ShapeRecognitionRouter"></a> Class ShapeRecognitionRouter

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class ShapeRecognitionRouter
```

#### Inheritance

object ← 
[ShapeRecognitionRouter](Ink\_Canvas.Helpers.ShapeRecognitionRouter.md)

## Methods

### <a id="Ink_Canvas_Helpers_ShapeRecognitionRouter_FromSettingsInt_System_Int32_"></a> FromSettingsInt\(int\)

```csharp
public static ShapeRecognitionEngineMode FromSettingsInt(int value)
```

#### Parameters

`value` int

#### Returns

 [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

### <a id="Ink_Canvas_Helpers_ShapeRecognitionRouter_ResolveUseWinRt_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> ResolveUseWinRt\(ShapeRecognitionEngineMode\)

自动模式：在 Windows 10 及以上系统默认使用 WinRT，否则使用 IACore。

```csharp
public static bool ResolveUseWinRt(ShapeRecognitionEngineMode mode)
```

#### Parameters

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_ShapeRecognitionRouter_ShouldRunShapeRecognition_System_Boolean_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> ShouldRunShapeRecognition\(bool, ShapeRecognitionEngineMode\)

```csharp
public static bool ShouldRunShapeRecognition(bool inkToShapeEnabled, ShapeRecognitionEngineMode mode)
```

#### Parameters

`inkToShapeEnabled` bool

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 bool

