# <a id="Ink_Canvas_Helpers_ConfigProfileManager"></a> Class ConfigProfileManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

提供多配置文件保存、切换与热重载支持。
方案保存在 Configs/Profiles 目录下，当前生效的配置仍为 Configs/Settings.json。

```csharp
public static class ConfigProfileManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ConfigProfileManager](Ink\_Canvas.Helpers.ConfigProfileManager.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_ConfigProfileManager_ApplyProfile_System_String_"></a> ApplyProfile\(string\)

将指定配置文件应用到当前配置（覆盖 Configs/Settings.json），供主窗口随后热重载。

```csharp
public static bool ApplyProfile(string profileName)
```

#### Parameters

`profileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

配置文件名称（与 ListProfileNames 中一致，或与保存时使用的显示名一致）。

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

成功返回 true；文件不存在或复制失败返回 false。

### <a id="Ink_Canvas_Helpers_ConfigProfileManager_DeleteProfile_System_String_"></a> DeleteProfile\(string\)

删除指定名称的配置文件。

```csharp
public static bool DeleteProfile(string profileName)
```

#### Parameters

`profileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_ConfigProfileManager_EnsureProfilesDirectory"></a> EnsureProfilesDirectory\(\)

确保配置文件目录存在。

```csharp
public static void EnsureProfilesDirectory()
```

### <a id="Ink_Canvas_Helpers_ConfigProfileManager_GetProfilePath_System_String_"></a> GetProfilePath\(string\)

获取某配置文件对应的文件路径。

```csharp
public static string GetProfilePath(string profileName)
```

#### Parameters

`profileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_ConfigProfileManager_ListProfileNames"></a> ListProfileNames\(\)

获取所有配置文件名称（不含扩展名），按名称排序。

```csharp
public static IReadOnlyList<string> ListProfileNames()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Helpers_ConfigProfileManager_SaveAsProfile_System_String_System_String_"></a> SaveAsProfile\(string, string\)

将当前配置的 JSON 内容保存为指定名称的配置文件。

```csharp
public static bool SaveAsProfile(string profileName, string settingsJson)
```

#### Parameters

`profileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

配置文件显示名称（会转为安全文件名）。

`settingsJson` [string](https://learn.microsoft.com/dotnet/api/system.string)

已序列化好的 Settings JSON 字符串。

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

成功返回 true。

