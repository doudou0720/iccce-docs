# <a id="Ink_Canvas_Helpers_ShapeRecognitionRouter"></a> Class ShapeRecognitionRouter

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class ShapeRecognitionRouter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ShapeRecognitionRouter](Ink\_Canvas.Helpers.ShapeRecognitionRouter.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_ShapeRecognitionRouter_FromSettingsInt_System_Int32_"></a> FromSettingsInt\(int\)

```csharp
public static ShapeRecognitionEngineMode FromSettingsInt(int value)
```

#### Parameters

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_ShapeRecognitionRouter_ShouldRunShapeRecognition_System_Boolean_Ink_Canvas_Helpers_ShapeRecognitionEngineMode_"></a> ShouldRunShapeRecognition\(bool, ShapeRecognitionEngineMode\)

```csharp
public static bool ShouldRunShapeRecognition(bool inkToShapeEnabled, ShapeRecognitionEngineMode mode)
```

#### Parameters

`inkToShapeEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`mode` [ShapeRecognitionEngineMode](Ink\_Canvas.Helpers.ShapeRecognitionEngineMode.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

