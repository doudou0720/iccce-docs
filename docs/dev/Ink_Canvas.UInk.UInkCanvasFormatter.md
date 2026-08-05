# <a id="Ink_Canvas_UInk_UInkCanvasFormatter"></a> Class UInkCanvasFormatter

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class UInkCanvasFormatter : IMessagePackFormatter<UInkCanvas>
```

#### Inheritance

IMessagePackFormatter<UInkCanvas\> ← 
[UInkCanvasFormatter](Ink\_Canvas.UInk.UInkCanvasFormatter.md)

## Fields

### <a id="Ink_Canvas_UInk_UInkCanvasFormatter_Instance"></a> Instance

```csharp
public static readonly UInkCanvasFormatter Instance
```

#### Field Value

 [UInkCanvasFormatter](Ink\_Canvas.UInk.UInkCanvasFormatter.md)

## Methods

### <a id="Ink_Canvas_UInk_UInkCanvasFormatter_Deserialize_MessagePackReader__MessagePackSerializerOptions_"></a> Deserialize\(ref MessagePackReader, MessagePackSerializerOptions\)

```csharp
public UInkCanvas Deserialize(ref MessagePackReader reader, MessagePackSerializerOptions options)
```

#### Parameters

`reader` MessagePackReader

`options` MessagePackSerializerOptions

#### Returns

 [UInkCanvas](Ink\_Canvas.UInk.UInkCanvas.md)

### <a id="Ink_Canvas_UInk_UInkCanvasFormatter_Serialize_MessagePackWriter__Ink_Canvas_UInk_UInkCanvas_MessagePackSerializerOptions_"></a> Serialize\(ref MessagePackWriter, UInkCanvas, MessagePackSerializerOptions\)

```csharp
public void Serialize(ref MessagePackWriter writer, UInkCanvas value, MessagePackSerializerOptions options)
```

#### Parameters

`writer` MessagePackWriter

`value` [UInkCanvas](Ink\_Canvas.UInk.UInkCanvas.md)

`options` MessagePackSerializerOptions

