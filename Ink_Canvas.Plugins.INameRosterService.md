# <a id="Ink_Canvas_Plugins_INameRosterService"></a> Interface INameRosterService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

点名花名册服务：供插件管理宿主「随机点名」功能的学生花名册。
与宿主设置里的花名册管理共用同一存储（Names.txt / Replace.txt / 方案目录）。

```csharp
public interface INameRosterService
```

## Methods

### <a id="Ink_Canvas_Plugins_INameRosterService_AddRoster_System_String_"></a> AddRoster\(string\)

新建一个花名册，返回其 guid。

```csharp
string AddRoster(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_INameRosterService_ApplyRoster_Ink_Canvas_Plugins_PluginNameRoster_"></a> ApplyRoster\(PluginNameRoster\)

把给定花名册内容应用为当前生效名单。返回是否成功。

```csharp
bool ApplyRoster(PluginNameRoster roster)
```

#### Parameters

`roster` [PluginNameRoster](Ink\_Canvas.Plugins.PluginNameRoster.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_INameRosterService_DeleteRoster_System_String_"></a> DeleteRoster\(string\)

删除指定花名册。返回是否成功。

```csharp
bool DeleteRoster(string guid)
```

#### Parameters

`guid` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_INameRosterService_GetSelectedRoster"></a> GetSelectedRoster\(\)

当前选中的花名册（含名单内容与替换规则）。

```csharp
PluginNameRoster GetSelectedRoster()
```

#### Returns

 [PluginNameRoster](Ink\_Canvas.Plugins.PluginNameRoster.md)

### <a id="Ink_Canvas_Plugins_INameRosterService_ReadCurrentFiles"></a> ReadCurrentFiles\(\)

读取当前生效的 Names.txt / Replace.txt 原始内容。

```csharp
(string NamesContent, string ReplaceContent) ReadCurrentFiles()
```

#### Returns

 \([string](https://learn.microsoft.com/dotnet/api/system.string) [NamesContent](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string\-.namescontent), [string](https://learn.microsoft.com/dotnet/api/system.string) [ReplaceContent](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string\-.replacecontent)\)

### <a id="Ink_Canvas_Plugins_INameRosterService_RenameRoster_System_String_System_String_"></a> RenameRoster\(string, string\)

重命名指定花名册。返回是否成功。

```csharp
bool RenameRoster(string guid, string newName)
```

#### Parameters

`guid` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_INameRosterService_SaveCurrentFilesToRoster_System_String_"></a> SaveCurrentFilesToRoster\(string\)

把当前生效名单内容保存到指定 guid 的花名册。返回是否成功。

```csharp
bool SaveCurrentFilesToRoster(string guid)
```

#### Parameters

`guid` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_INameRosterService_SelectAndApply_System_String_"></a> SelectAndApply\(string\)

按 guid 选中并应用对应花名册。返回是否成功。

```csharp
bool SelectAndApply(string guid)
```

#### Parameters

`guid` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_INameRosterService_WriteCurrentFiles_System_String_System_String_"></a> WriteCurrentFiles\(string, string\)

写入当前生效的 Names.txt / Replace.txt。

```csharp
void WriteCurrentFiles(string namesContent, string replaceContent)
```

#### Parameters

`namesContent` [string](https://learn.microsoft.com/dotnet/api/system.string)

`replaceContent` [string](https://learn.microsoft.com/dotnet/api/system.string)

