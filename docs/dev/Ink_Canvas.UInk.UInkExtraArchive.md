# <a id="Ink_Canvas_UInk_UInkExtraArchive"></a> Class UInkExtraArchive

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

`.uink.extra` 资源包（ZIP）读写。规范约束（uink_media / uink_conf）：
 - Media.path 写入前必须 Unicode NFC、`/` 分隔，不得以 `/` 开头、含 `\`、NUL、控制字符、空路径段、`.` 或 `..`；
 - ZIP 条目路径用相同 NFC 规范化形式，且不得重复；
 - 读取不受信任 ZIP 前必须做资源预算检查（条目数、单条目大小、总解压大小、压缩比），禁止直接解压到工作目录。
路径穿越校验思路与 SafeZipExtractor 一致（拒绝绝对路径/`..`，Combine 后二次确认在目标目录内）。

```csharp
public static class UInkExtraArchive
```

#### Inheritance

object ← 
[UInkExtraArchive](Ink\_Canvas.UInk.UInkExtraArchive.md)

## Fields

### <a id="Ink_Canvas_UInk_UInkExtraArchive_MaxCompressionRatio"></a> MaxCompressionRatio

```csharp
public const double MaxCompressionRatio
```

#### Field Value

 double

### <a id="Ink_Canvas_UInk_UInkExtraArchive_MaxEntries"></a> MaxEntries

```csharp
public const int MaxEntries
```

#### Field Value

 int

### <a id="Ink_Canvas_UInk_UInkExtraArchive_MaxSingleEntryBytes"></a> MaxSingleEntryBytes

```csharp
public const long MaxSingleEntryBytes
```

#### Field Value

 long

### <a id="Ink_Canvas_UInk_UInkExtraArchive_MaxTotalBytes"></a> MaxTotalBytes

```csharp
public const long MaxTotalBytes
```

#### Field Value

 long

## Methods

### <a id="Ink_Canvas_UInk_UInkExtraArchive_ExtractWithBudget_System_String_System_String_"></a> ExtractWithBudget\(string, string\)

预算检查 + 路径安全解压 `.uink.extra`，返回「入口路径(NFC) → 本地文件」映射。
任何预算/路径违规立即返回 null（不部分解压）。目录条目跳过。

```csharp
public static Dictionary<string, string> ExtractWithBudget(string zipPath, string extractDir)
```

#### Parameters

`zipPath` string

`extractDir` string

#### Returns

 Dictionary<string, string\>

### <a id="Ink_Canvas_UInk_UInkExtraArchive_MimeForPath_System_String_"></a> MimeForPath\(string\)

按文件扩展名推断 MIME（UInk Media.mimeType）。未知回退 application/octet-stream。

```csharp
public static string MimeForPath(string path)
```

#### Parameters

`path` string

#### Returns

 string

### <a id="Ink_Canvas_UInk_UInkExtraArchive_NormalizeEntryPath_System_String_"></a> NormalizeEntryPath\(string\)

规范化 ZIP 条目/Media 相对路径。返回 null 表示非法。

```csharp
public static string NormalizeEntryPath(string rawPath)
```

#### Parameters

`rawPath` string

#### Returns

 string

### <a id="Ink_Canvas_UInk_UInkExtraArchive_WriteArchive_System_String_IReadOnlyList_System_ValueTuple_System_String_System_String___"></a> WriteArchive\(string, IReadOnlyList<\(string entryPath, string sourceFile\)\>\)

创建 `.uink.extra` ZIP。重复条目、非法条目跳过；入口路径已 NFC 规范化。

```csharp
public static void WriteArchive(string zipPath, IReadOnlyList<(string entryPath, string sourceFile)> resources)
```

#### Parameters

`zipPath` string

`resources` IReadOnlyList<\(string [entryPath](System.ValueTuple\{System.String,System.String\}.md\#System\_ValueTuple\_System\_String\_System\_String\_\_entryPath), string [sourceFile](System.ValueTuple\{System.String,System.String\}.md\#System\_ValueTuple\_System\_String\_System\_String\_\_sourceFile)\)\>

