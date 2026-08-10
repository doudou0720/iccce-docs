# <a id="Ink_Canvas_UInk_UInkWriter"></a> Class UInkWriter

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

UInk 主文件写入器。按对象流顺序写出 Header → HeaderExtension → (Canvas → 内容块)*。
完整保存走 <xref href="Ink_Canvas.UInk.UInkWriter.Save(Ink_Canvas.UInk.UInkDocument%2cSystem.String)" data-throw-if-not-resolved="false"></xref>；增量追加走 <xref href="Ink_Canvas.UInk.UInkWriter.AppendBlocks(System.String%2cSystem.Collections.Generic.IEnumerable%7bSystem.Object%7d)" data-throw-if-not-resolved="false"></xref>。
两阶段提交（先 .uink.extra 后主文件）由 UInkSaveService 编排。

```csharp
public static class UInkWriter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UInkWriter](Ink\_Canvas.UInk.UInkWriter.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_UInk_UInkWriter_AppendBlocks_System_String_System_Collections_Generic_IEnumerable_System_Object__"></a> AppendBlocks\(string, IEnumerable<object\>\)

增量追加：把已完成的 Ink/Shape/Media 块追加到文件末尾最后一个 Canvas 之后。
不更新 Header（增量语义：Header 统计可暂时落后，读取端按对象流重算）。

```csharp
public static void AppendBlocks(string path, IEnumerable<object> blocks)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`blocks` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="Ink_Canvas_UInk_UInkWriter_ComputeStats_Ink_Canvas_UInk_UInkDocument_"></a> ComputeStats\(UInkDocument\)

按对象流统计 deviceNum / workspaceNum / pageNum（供完整保存重算 Header）。

```csharp
public static (uint deviceNum, uint workspaceNum, uint pageNum) ComputeStats(UInkDocument doc)
```

#### Parameters

`doc` [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

#### Returns

 \([uint](https://learn.microsoft.com/dotnet/api/system.uint32) [deviceNum](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint32,system.uint32,system.uint32\-.devicenum), [uint](https://learn.microsoft.com/dotnet/api/system.uint32) [workspaceNum](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint32,system.uint32,system.uint32\-.workspacenum), [uint](https://learn.microsoft.com/dotnet/api/system.uint32) [pageNum](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint32,system.uint32,system.uint32\-.pagenum)\)

### <a id="Ink_Canvas_UInk_UInkWriter_Save_Ink_Canvas_UInk_UInkDocument_System_String_"></a> Save\(UInkDocument, string\)

```csharp
public static void Save(UInkDocument doc, string path)
```

#### Parameters

`doc` [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_UInk_UInkWriter_Save_Ink_Canvas_UInk_UInkDocument_System_IO_Stream_"></a> Save\(UInkDocument, Stream\)

```csharp
public static void Save(UInkDocument doc, Stream stream)
```

#### Parameters

`doc` [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

### <a id="Ink_Canvas_UInk_UInkWriter_WriteDocument_Ink_Canvas_UInk_UInkDocument_System_String_"></a> WriteDocument\(UInkDocument, string\)

纯写入（无原子替换），供两阶段提交写临时文件使用。

```csharp
public static void WriteDocument(UInkDocument doc, string path)
```

#### Parameters

`doc` [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

