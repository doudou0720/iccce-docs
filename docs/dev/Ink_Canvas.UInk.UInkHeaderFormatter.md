# <a id="Ink_Canvas_UInk_UInkHeaderFormatter"></a> Class UInkHeaderFormatter

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class UInkHeaderFormatter : IMessagePackFormatter<UInkHeader>
```

#### Inheritance

IMessagePackFormatter<UInkHeader\> ← 
[UInkHeaderFormatter](Ink\_Canvas.UInk.UInkHeaderFormatter.md)

## Fields

### <a id="Ink_Canvas_UInk_UInkHeaderFormatter_Instance"></a> Instance

```csharp
public static readonly UInkHeaderFormatter Instance
```

#### Field Value

 [UInkHeaderFormatter](Ink\_Canvas.UInk.UInkHeaderFormatter.md)

## Methods

### <a id="Ink_Canvas_UInk_UInkHeaderFormatter_Deserialize_MessagePackReader__MessagePackSerializerOptions_"></a> Deserialize\(ref MessagePackReader, MessagePackSerializerOptions\)

```csharp
public UInkHeader Deserialize(ref MessagePackReader reader, MessagePackSerializerOptions options)
```

#### Parameters

`reader` MessagePackReader

`options` MessagePackSerializerOptions

#### Returns

 [UInkHeader](Ink\_Canvas.UInk.UInkHeader.md)

### <a id="Ink_Canvas_UInk_UInkHeaderFormatter_Serialize_MessagePackWriter__Ink_Canvas_UInk_UInkHeader_MessagePackSerializerOptions_"></a> Serialize\(ref MessagePackWriter, UInkHeader, MessagePackSerializerOptions\)

```csharp
public void Serialize(ref MessagePackWriter writer, UInkHeader value, MessagePackSerializerOptions options)
```

#### Parameters

`writer` MessagePackWriter

`value` [UInkHeader](Ink\_Canvas.UInk.UInkHeader.md)

`options` MessagePackSerializerOptions

