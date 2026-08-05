# <a id="Ink_Canvas_UInk_UInkWriter"></a> Class UInkWriter

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

UInk 主文件写入器。按对象流顺序写出 Header → HeaderExtension → (Canvas → 内容块)*。
完整保存走 <xref href="Ink_Canvas.UInk.UInkWriter.Save(Ink_Canvas.UInk.UInkDocument%2cSystem.String)" data-throw-if-not-resolved="false"></xref>；增量追加走 <xref href="Ink_Canvas.UInk.UInkWriter.AppendBlocks(System.String%2cIEnumerable%7bSystem.Object%7d)" data-throw-if-not-resolved="false"></xref>。
两阶段提交（先 .uink.extra 后主文件）由 UInkSaveService 编排。

```csharp
public static class UInkWriter
```

#### Inheritance

object ← 
[UInkWriter](Ink\_Canvas.UInk.UInkWriter.md)

## Methods

### <a id="Ink_Canvas_UInk_UInkWriter_AppendBlocks_System_String_IEnumerable_System_Object__"></a> AppendBlocks\(string, IEnumerable<object\>\)

增量追加：把已完成的 Ink/Shape/Media 块追加到文件末尾最后一个 Canvas 之后。
不更新 Header（增量语义：Header 统计可暂时落后，读取端按对象流重算）。

```csharp
public static void AppendBlocks(string path, IEnumerable<object> blocks)
```

#### Parameters

`path` string

`blocks` IEnumerable<object\>

### <a id="Ink_Canvas_UInk_UInkWriter_ComputeStats_Ink_Canvas_UInk_UInkDocument_"></a> ComputeStats\(UInkDocument\)

按对象流统计 deviceNum / workspaceNum / pageNum（供完整保存重算 Header）。

```csharp
public static (uint deviceNum, uint workspaceNum, uint pageNum) ComputeStats(UInkDocument doc)
```

#### Parameters

`doc` [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

#### Returns

 \(uint [deviceNum](System.ValueTuple\{System.UInt32,System.UInt32,System.UInt32\}.md\#System\_ValueTuple\_System\_UInt32\_System\_UInt32\_System\_UInt32\_\_deviceNum), uint [workspaceNum](System.ValueTuple\{System.UInt32,System.UInt32,System.UInt32\}.md\#System\_ValueTuple\_System\_UInt32\_System\_UInt32\_System\_UInt32\_\_workspaceNum), uint [pageNum](System.ValueTuple\{System.UInt32,System.UInt32,System.UInt32\}.md\#System\_ValueTuple\_System\_UInt32\_System\_UInt32\_System\_UInt32\_\_pageNum)\)

### <a id="Ink_Canvas_UInk_UInkWriter_Save_Ink_Canvas_UInk_UInkDocument_System_String_"></a> Save\(UInkDocument, string\)

```csharp
public static void Save(UInkDocument doc, string path)
```

#### Parameters

`doc` [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

`path` string

### <a id="Ink_Canvas_UInk_UInkWriter_Save_Ink_Canvas_UInk_UInkDocument_Stream_"></a> Save\(UInkDocument, Stream\)

```csharp
public static void Save(UInkDocument doc, Stream stream)
```

#### Parameters

`doc` [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

`stream` Stream

### <a id="Ink_Canvas_UInk_UInkWriter_WriteDocument_Ink_Canvas_UInk_UInkDocument_System_String_"></a> WriteDocument\(UInkDocument, string\)

纯写入（无原子替换），供两阶段提交写临时文件使用。

```csharp
public static void WriteDocument(UInkDocument doc, string path)
```

#### Parameters

`doc` [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

`path` string

