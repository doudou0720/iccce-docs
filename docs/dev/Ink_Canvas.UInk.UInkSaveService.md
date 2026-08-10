# <a id="Ink_Canvas_UInk_UInkSaveService"></a> Class UInkSaveService

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

UInk 完整保存编排（两阶段原子提交）。提交顺序对应规范 uink_inc / uink_conf：
 1. 确定完整对象流 + 新主文件引用的资源集合；
 2. 生成并校验临时 `.uink.extra`（**必须包含旧主文件仍引用的资源与新主文件将引用资源的并集**）；
 3. 生成并校验临时 `.uink` 主文件（暂不替换）；
 4. 先用临时资源包替换目标资源包，然后原子替换 `.uink` 主文件（主文件最后提交）；
 5. 主文件提交成功后才清理多余 ZIP 条目或整个无用资源包。
任一步失败：删除临时文件，旧文件保持原样。

```csharp
public static class UInkSaveService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UInkSaveService](Ink\_Canvas.UInk.UInkSaveService.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_UInk_UInkSaveService_SaveFull_Ink_Canvas_UInk_UInkDocument_System_String_System_Collections_Generic_IReadOnlyList_System_ValueTuple_System_String_System_String___"></a> SaveFull\(UInkDocument, string, IReadOnlyList<\(string entryPath, string sourceFile\)\>\)

完整保存：把 doc 写入 mainPath，资源打包进 mainPath + ".extra"。
resources 为「新主文件引用的资源」（入口路径 NFC 规范化在 WriteArchive 内完成）。

```csharp
public static void SaveFull(UInkDocument doc, string mainPath, IReadOnlyList<(string entryPath, string sourceFile)> resources)
```

#### Parameters

`doc` [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

`mainPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`resources` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<\([string](https://learn.microsoft.com/dotnet/api/system.string) [entryPath](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string\-.entrypath), [string](https://learn.microsoft.com/dotnet/api/system.string) [sourceFile](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string\-.sourcefile)\)\>

### <a id="Ink_Canvas_UInk_UInkSaveService_TempExtraPath_System_String_"></a> TempExtraPath\(string\)

```csharp
public static string TempExtraPath(string mainPath)
```

#### Parameters

`mainPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_UInk_UInkSaveService_TempMainPath_System_String_"></a> TempMainPath\(string\)

临时文件可被崩溃恢复发现（记录残留路径日志由调用方处理）。

```csharp
public static string TempMainPath(string mainPath)
```

#### Parameters

`mainPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

