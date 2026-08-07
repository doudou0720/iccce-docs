# <a id="Ink_Canvas_Plugins_IConfigProfileService"></a> Interface IConfigProfileService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

配置方案服务：供插件管理宿主的「配置方案」（一套 Settings.json 的快照）。
与设置窗口里的配置方案管理共用同一存储目录。

```csharp
public interface IConfigProfileService
```

## Methods

### <a id="Ink_Canvas_Plugins_IConfigProfileService_ApplyProfile_System_String_"></a> ApplyProfile\(string\)

应用指定方案（覆盖当前 Settings.json 并热重载）。返回是否成功。

```csharp
bool ApplyProfile(string profileName)
```

#### Parameters

`profileName` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_IConfigProfileService_DeleteProfile_System_String_"></a> DeleteProfile\(string\)

删除指定方案。返回是否成功。

```csharp
bool DeleteProfile(string profileName)
```

#### Parameters

`profileName` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_IConfigProfileService_GetProfilePath_System_String_"></a> GetProfilePath\(string\)

获取指定方案的存储文件路径。

```csharp
string GetProfilePath(string profileName)
```

#### Parameters

`profileName` string

#### Returns

 string

### <a id="Ink_Canvas_Plugins_IConfigProfileService_ListProfiles"></a> ListProfiles\(\)

列出所有已保存的方案名。

```csharp
IReadOnlyList<string> ListProfiles()
```

#### Returns

 IReadOnlyList<string\>

### <a id="Ink_Canvas_Plugins_IConfigProfileService_SaveAsProfile_System_String_System_String_"></a> SaveAsProfile\(string, string\)

把 settingsJson 内容保存为指定名称的方案。

```csharp
bool SaveAsProfile(string profileName, string settingsJson)
```

#### Parameters

`profileName` string

`settingsJson` string

#### Returns

 bool

