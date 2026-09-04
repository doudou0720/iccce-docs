# <a id="Ink_Canvas_UInk_UInkShapeFormatter"></a> Class UInkShapeFormatter

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class UInkShapeFormatter : IMessagePackFormatter<UInkShape>
```

#### Inheritance

IMessagePackFormatter<UInkShape\> ← 
[UInkShapeFormatter](Ink\_Canvas.UInk.UInkShapeFormatter.md)

## Fields

### <a id="Ink_Canvas_UInk_UInkShapeFormatter_Instance"></a> Instance

```csharp
public static readonly UInkShapeFormatter Instance
```

#### Field Value

 [UInkShapeFormatter](Ink\_Canvas.UInk.UInkShapeFormatter.md)

## Methods

### <a id="Ink_Canvas_UInk_UInkShapeFormatter_Deserialize_MessagePackReader__MessagePackSerializerOptions_"></a> Deserialize\(ref MessagePackReader, MessagePackSerializerOptions\)

```csharp
public UInkShape Deserialize(ref MessagePackReader reader, MessagePackSerializerOptions options)
```

#### Parameters

`reader` MessagePackReader

`options` MessagePackSerializerOptions

#### Returns

 [UInkShape](Ink\_Canvas.UInk.UInkShape.md)

### <a id="Ink_Canvas_UInk_UInkShapeFormatter_Serialize_MessagePackWriter__Ink_Canvas_UInk_UInkShape_MessagePackSerializerOptions_"></a> Serialize\(ref MessagePackWriter, UInkShape, MessagePackSerializerOptions\)

```csharp
public void Serialize(ref MessagePackWriter writer, UInkShape value, MessagePackSerializerOptions options)
```

#### Parameters

`writer` MessagePackWriter

`value` [UInkShape](Ink\_Canvas.UInk.UInkShape.md)

`options` MessagePackSerializerOptions

