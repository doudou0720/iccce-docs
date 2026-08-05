# <a id="Ink_Canvas_UInk_UInkDocument"></a> Class UInkDocument

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class UInkDocument
```

#### Inheritance

object ← 
[UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

## Fields

### <a id="Ink_Canvas_UInk_UInkDocument_Canvases"></a> Canvases

```csharp
public List<UInkCanvasRecord> Canvases
```

#### Field Value

 List<[UInkCanvasRecord](Ink\_Canvas.UInk.UInkCanvasRecord.md)\>

### <a id="Ink_Canvas_UInk_UInkDocument_Header"></a> Header

```csharp
public UInkHeader Header
```

#### Field Value

 [UInkHeader](Ink\_Canvas.UInk.UInkHeader.md)

### <a id="Ink_Canvas_UInk_UInkDocument_HeaderExtension"></a> HeaderExtension

```csharp
public UInkHeaderExtension HeaderExtension
```

#### Field Value

 [UInkHeaderExtension](Ink\_Canvas.UInk.UInkHeaderExtension.md)

## Methods

### <a id="Ink_Canvas_UInk_UInkDocument_AllBlocks"></a> AllBlocks\(\)

按流顺序展开所有内容块（含所属 Canvas 的引用），供撤回适配使用。

```csharp
public List<(UInkCanvasRecord record, IUInkContentBlock block)> AllBlocks()
```

#### Returns

 List<\([UInkCanvasRecord](Ink\_Canvas.UInk.UInkCanvasRecord.md) [record](System.ValueTuple\{Ink\_Canvas.UInk.UInkCanvasRecord,Ink\_Canvas.UInk.IUInkContentBlock\}.md\#System\_ValueTuple\_Ink\_Canvas\_UInk\_UInkCanvasRecord\_Ink\_Canvas\_UInk\_IUInkContentBlock\_\_record), [IUInkContentBlock](Ink\_Canvas.UInk.IUInkContentBlock.md) [block](System.ValueTuple\{Ink\_Canvas.UInk.UInkCanvasRecord,Ink\_Canvas.UInk.IUInkContentBlock\}.md\#System\_ValueTuple\_Ink\_Canvas\_UInk\_UInkCanvasRecord\_Ink\_Canvas\_UInk\_IUInkContentBlock\_\_block)\)\>

