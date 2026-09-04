# <a id="Ink_Canvas_UInk_UInkAppend"></a> Class UInkAppend

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

UInk 增量追加（可选崩溃保护路径）。只向既有对象流末尾最后一个 Canvas 追加已完整结束的
Ink/Shape/Media，不更新 Header（读取端按对象流重算状态）。不满足追加条件时调用方应回退完整保存。

```csharp
public static class UInkAppend
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UInkAppend](Ink\_Canvas.UInk.UInkAppend.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_UInk_UInkAppend_TryAppend_System_String_System_Collections_Generic_IReadOnlyList_Ink_Canvas_UInk_IUInkContentBlock__"></a> TryAppend\(string, IReadOnlyList<IUInkContentBlock\>\)

尝试增量追加。成功返回 true；文件不存在/非 UInk/无 Canvas 时返回 false。
contentId 承接末尾 Canvas 序列（max+1 起）；undoId 从 max+1 起，每个块独立一次撤回操作。

```csharp
public static bool TryAppend(string path, IReadOnlyList<IUInkContentBlock> newBlocks)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newBlocks` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IUInkContentBlock](Ink\_Canvas.UInk.IUInkContentBlock.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

