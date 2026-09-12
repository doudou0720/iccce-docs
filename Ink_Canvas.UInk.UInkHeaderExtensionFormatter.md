# <a id="Ink_Canvas_UInk_UInkHeaderExtensionFormatter"></a> Class UInkHeaderExtensionFormatter

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class UInkHeaderExtensionFormatter : IMessagePackFormatter<UInkHeaderExtension>
```

#### Inheritance

IMessagePackFormatter<UInkHeaderExtension\> ← 
[UInkHeaderExtensionFormatter](Ink\_Canvas.UInk.UInkHeaderExtensionFormatter.md)

## Fields

### <a id="Ink_Canvas_UInk_UInkHeaderExtensionFormatter_Instance"></a> Instance

```csharp
public static readonly UInkHeaderExtensionFormatter Instance
```

#### Field Value

 [UInkHeaderExtensionFormatter](Ink\_Canvas.UInk.UInkHeaderExtensionFormatter.md)

## Methods

### <a id="Ink_Canvas_UInk_UInkHeaderExtensionFormatter_Deserialize_MessagePackReader__MessagePackSerializerOptions_"></a> Deserialize\(ref MessagePackReader, MessagePackSerializerOptions\)

```csharp
public UInkHeaderExtension Deserialize(ref MessagePackReader reader, MessagePackSerializerOptions options)
```

#### Parameters

`reader` MessagePackReader

`options` MessagePackSerializerOptions

#### Returns

 [UInkHeaderExtension](Ink\_Canvas.UInk.UInkHeaderExtension.md)

### <a id="Ink_Canvas_UInk_UInkHeaderExtensionFormatter_Serialize_MessagePackWriter__Ink_Canvas_UInk_UInkHeaderExtension_MessagePackSerializerOptions_"></a> Serialize\(ref MessagePackWriter, UInkHeaderExtension, MessagePackSerializerOptions\)

```csharp
public void Serialize(ref MessagePackWriter writer, UInkHeaderExtension value, MessagePackSerializerOptions options)
```

#### Parameters

`writer` MessagePackWriter

`value` [UInkHeaderExtension](Ink\_Canvas.UInk.UInkHeaderExtension.md)

`options` MessagePackSerializerOptions

