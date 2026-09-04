# <a id="Ink_Canvas_Helpers_NameRosterManager"></a> Class NameRosterManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

随机点名"选择方案"（学生档案）管理器。
把 Names.txt / Replace.txt 当作"当前生效的方案"，把各方案内容持久化到 Settings.json，
切换方案时把对应方案内容写回 Names.txt / Replace.txt。

```csharp
public static class NameRosterManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NameRosterManager](Ink\_Canvas.Helpers.NameRosterManager.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Helpers_NameRosterManager_NamesFilePath"></a> NamesFilePath

```csharp
public static string NamesFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_NameRosterManager_ReplaceFilePath"></a> ReplaceFilePath

```csharp
public static string ReplaceFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Helpers_NameRosterManager_AddRoster_System_String_"></a> AddRoster\(string\)

新建一个方案，内容取自当前 Names.txt / Replace.txt（若为空则留空）。
返回新方案的 Guid。

```csharp
public static string AddRoster(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_NameRosterManager_ApplyRoster_Ink_Canvas_NameRoster_"></a> ApplyRoster\(NameRoster\)

把指定方案的内容写回 Names.txt / Replace.txt，使其成为当前生效名单。

```csharp
public static void ApplyRoster(NameRoster roster)
```

#### Parameters

`roster` [NameRoster](Ink\_Canvas.NameRoster.md)

### <a id="Ink_Canvas_Helpers_NameRosterManager_DeleteRoster_System_String_"></a> DeleteRoster\(string\)

删除方案。若删除的是当前方案，清空选中状态（保留当前 Names.txt 内容）。

```csharp
public static void DeleteRoster(string guid)
```

#### Parameters

`guid` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_NameRosterManager_GetSelectedRoster"></a> GetSelectedRoster\(\)

当前选中的方案，若未配置或找不到则返回 null。

```csharp
public static NameRoster GetSelectedRoster()
```

#### Returns

 [NameRoster](Ink\_Canvas.NameRoster.md)

### <a id="Ink_Canvas_Helpers_NameRosterManager_ReadCurrentFiles"></a> ReadCurrentFiles\(\)

读取当前 Names.txt / Replace.txt 的内容（用于"保存为方案"）。

```csharp
public static (string namesContent, string replaceContent) ReadCurrentFiles()
```

#### Returns

 \([string](https://learn.microsoft.com/dotnet/api/system.string) [namesContent](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string\-.namescontent), [string](https://learn.microsoft.com/dotnet/api/system.string) [replaceContent](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string\-.replacecontent)\)

### <a id="Ink_Canvas_Helpers_NameRosterManager_RenameRoster_System_String_System_String_"></a> RenameRoster\(string, string\)

重命名方案。

```csharp
public static void RenameRoster(string guid, string newName)
```

#### Parameters

`guid` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_NameRosterManager_SaveCurrentFilesToRoster_System_String_"></a> SaveCurrentFilesToRoster\(string\)

把当前 Names.txt / Replace.txt 保存到指定方案（覆盖该方案内容）。

```csharp
public static void SaveCurrentFilesToRoster(string guid)
```

#### Parameters

`guid` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_NameRosterManager_SelectAndApply_System_String_"></a> SelectAndApply\(string\)

选中方案并应用到当前名单文件。

```csharp
public static void SelectAndApply(string guid)
```

#### Parameters

`guid` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_NameRosterManager_WriteCurrentFiles_System_String_System_String_"></a> WriteCurrentFiles\(string, string\)

直接写入 Names.txt / Replace.txt（用于临时切换或恢复快照）。

```csharp
public static void WriteCurrentFiles(string namesContent, string replaceContent)
```

#### Parameters

`namesContent` [string](https://learn.microsoft.com/dotnet/api/system.string)

`replaceContent` [string](https://learn.microsoft.com/dotnet/api/system.string)

