# <a id="Ink_Canvas_UInk_UInkSerializer"></a> Class UInkSerializer

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class UInkSerializer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UInkSerializer](Ink\_Canvas.UInk.UInkSerializer.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_UInk_UInkSerializer_Options"></a> Options

```csharp
public static readonly MessagePackSerializerOptions Options
```

#### Field Value

 MessagePackSerializerOptions

## Methods

### <a id="Ink_Canvas_UInk_UInkSerializer_WriteBlock_System_IO_Stream_System_Object_"></a> WriteBlock\(Stream, object\)

把一个顶层块序列化为一个完整 MessagePack 对象，追加到流末尾。

```csharp
public static void WriteBlock(Stream stream, object block)
```

#### Parameters

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

`block` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_UInk_UInkSerializer_WriteBlock_MessagePackWriter__System_Object_"></a> WriteBlock\(ref MessagePackWriter, object\)

把一个顶层块写入 MessagePackWriter（供增量追加在已有写入器上继续）。

```csharp
public static void WriteBlock(ref MessagePackWriter writer, object block)
```

#### Parameters

`writer` MessagePackWriter

`block` [object](https://learn.microsoft.com/dotnet/api/system.object)

