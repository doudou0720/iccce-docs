# <a id="Ink_Canvas_UInk_UInkMediaFormatter"></a> Class UInkMediaFormatter

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class UInkMediaFormatter : IMessagePackFormatter<UInkMedia>
```

#### Inheritance

IMessagePackFormatter<UInkMedia\> ← 
[UInkMediaFormatter](Ink\_Canvas.UInk.UInkMediaFormatter.md)

## Fields

### <a id="Ink_Canvas_UInk_UInkMediaFormatter_Instance"></a> Instance

```csharp
public static readonly UInkMediaFormatter Instance
```

#### Field Value

 [UInkMediaFormatter](Ink\_Canvas.UInk.UInkMediaFormatter.md)

## Methods

### <a id="Ink_Canvas_UInk_UInkMediaFormatter_Deserialize_MessagePackReader__MessagePackSerializerOptions_"></a> Deserialize\(ref MessagePackReader, MessagePackSerializerOptions\)

```csharp
public UInkMedia Deserialize(ref MessagePackReader reader, MessagePackSerializerOptions options)
```

#### Parameters

`reader` MessagePackReader

`options` MessagePackSerializerOptions

#### Returns

 [UInkMedia](Ink\_Canvas.UInk.UInkMedia.md)

### <a id="Ink_Canvas_UInk_UInkMediaFormatter_Serialize_MessagePackWriter__Ink_Canvas_UInk_UInkMedia_MessagePackSerializerOptions_"></a> Serialize\(ref MessagePackWriter, UInkMedia, MessagePackSerializerOptions\)

```csharp
public void Serialize(ref MessagePackWriter writer, UInkMedia value, MessagePackSerializerOptions options)
```

#### Parameters

`writer` MessagePackWriter

`value` [UInkMedia](Ink\_Canvas.UInk.UInkMedia.md)

`options` MessagePackSerializerOptions

