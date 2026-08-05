# <a id="Ink_Canvas_UInk_UInkSerializer"></a> Class UInkSerializer

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class UInkSerializer
```

#### Inheritance

object ← 
[UInkSerializer](Ink\_Canvas.UInk.UInkSerializer.md)

## Fields

### <a id="Ink_Canvas_UInk_UInkSerializer_Options"></a> Options

```csharp
public static readonly MessagePackSerializerOptions Options
```

#### Field Value

 MessagePackSerializerOptions

## Methods

### <a id="Ink_Canvas_UInk_UInkSerializer_WriteBlock_Stream_System_Object_"></a> WriteBlock\(Stream, object\)

把一个顶层块序列化为一个完整 MessagePack 对象，追加到流末尾。

```csharp
public static void WriteBlock(Stream stream, object block)
```

#### Parameters

`stream` Stream

`block` object

### <a id="Ink_Canvas_UInk_UInkSerializer_WriteBlock_MessagePackWriter__System_Object_"></a> WriteBlock\(ref MessagePackWriter, object\)

把一个顶层块写入 MessagePackWriter（供增量追加在已有写入器上继续）。

```csharp
public static void WriteBlock(ref MessagePackWriter writer, object block)
```

#### Parameters

`writer` MessagePackWriter

`block` object

