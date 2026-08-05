# <a id="Ink_Canvas_UInk_UInkInkFormatter"></a> Class UInkInkFormatter

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class UInkInkFormatter : IMessagePackFormatter<UInkInk>
```

#### Inheritance

IMessagePackFormatter<UInkInk\> ← 
[UInkInkFormatter](Ink\_Canvas.UInk.UInkInkFormatter.md)

## Fields

### <a id="Ink_Canvas_UInk_UInkInkFormatter_Instance"></a> Instance

```csharp
public static readonly UInkInkFormatter Instance
```

#### Field Value

 [UInkInkFormatter](Ink\_Canvas.UInk.UInkInkFormatter.md)

## Methods

### <a id="Ink_Canvas_UInk_UInkInkFormatter_Deserialize_MessagePackReader__MessagePackSerializerOptions_"></a> Deserialize\(ref MessagePackReader, MessagePackSerializerOptions\)

```csharp
public UInkInk Deserialize(ref MessagePackReader reader, MessagePackSerializerOptions options)
```

#### Parameters

`reader` MessagePackReader

`options` MessagePackSerializerOptions

#### Returns

 [UInkInk](Ink\_Canvas.UInk.UInkInk.md)

### <a id="Ink_Canvas_UInk_UInkInkFormatter_Serialize_MessagePackWriter__Ink_Canvas_UInk_UInkInk_MessagePackSerializerOptions_"></a> Serialize\(ref MessagePackWriter, UInkInk, MessagePackSerializerOptions\)

```csharp
public void Serialize(ref MessagePackWriter writer, UInkInk value, MessagePackSerializerOptions options)
```

#### Parameters

`writer` MessagePackWriter

`value` [UInkInk](Ink\_Canvas.UInk.UInkInk.md)

`options` MessagePackSerializerOptions

