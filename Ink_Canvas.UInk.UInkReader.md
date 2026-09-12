# <a id="Ink_Canvas_UInk_UInkReader"></a> Class UInkReader

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

UInk 主文件读取器。读取连续 MessagePack 对象流，重建 <xref href="Ink_Canvas.UInk.UInkDocument" data-throw-if-not-resolved="false"></xref>。
容错规则（对应规范 uink_conf / uink_inc）：
 - 首块必须是 array(7) Header（type=0, version=10），否则视为非 UInk 文件（返回 null）；
 - 未知 Type ID 跳过（作为完整对象已消费）；
 - EOF 处不完整尾块丢弃（保留此前完整对象）；
 - 解码失败停止读取，不重新同步。

```csharp
public static class UInkReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UInkReader](Ink\_Canvas.UInk.UInkReader.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_UInk_UInkReader_Load_System_String_"></a> Load\(string\)

```csharp
public static UInkDocument Load(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

### <a id="Ink_Canvas_UInk_UInkReader_Load_System_IO_Stream_"></a> Load\(Stream\)

```csharp
public static UInkDocument Load(Stream stream)
```

#### Parameters

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

#### Returns

 [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

