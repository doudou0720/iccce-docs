# <a id="Ink_Canvas_UInk_UInkDocument"></a> Class UInkDocument

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public sealed class UInkDocument
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_UInk_UInkDocument_Canvases"></a> Canvases

```csharp
public List<UInkCanvasRecord> Canvases
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UInkCanvasRecord](Ink\_Canvas.UInk.UInkCanvasRecord.md)\>

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

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<\([UInkCanvasRecord](Ink\_Canvas.UInk.UInkCanvasRecord.md) [record](https://learn.microsoft.com/dotnet/api/system.valuetuple\-ink\_canvas.uink.uinkcanvasrecord,ink\_canvas.uink.iuinkcontentblock\-.record), [IUInkContentBlock](Ink\_Canvas.UInk.IUInkContentBlock.md) [block](https://learn.microsoft.com/dotnet/api/system.valuetuple\-ink\_canvas.uink.uinkcanvasrecord,ink\_canvas.uink.iuinkcontentblock\-.block)\)\>

