# <a id="Ink_Canvas_Plugins_ISettingsService"></a> Interface ISettingsService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

设置服务，供插件读写主程序设置。

```csharp
public interface ISettingsService
```

## Methods

### <a id="Ink_Canvas_Plugins_ISettingsService_Get__1_System_String_"></a> Get<T\>\(string\)

获取设置值。

```csharp
T Get<T>(string key)
```

#### Parameters

`key` string

设置键，使用 "." 分隔层级，如 "appearance.theme"

#### Returns

 T

设置值，不存在返回 default

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Plugins_ISettingsService_Has_System_String_"></a> Has\(string\)

检查设置键是否存在。

```csharp
bool Has(string key)
```

#### Parameters

`key` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_ISettingsService_Set__1_System_String___0_"></a> Set<T\>\(string, T\)

设置值。

```csharp
void Set<T>(string key, T value)
```

#### Parameters

`key` string

设置键

`value` T

值

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Plugins_ISettingsService_SettingChanged"></a> SettingChanged

设置变更时触发。

```csharp
event System.Action<string, object> SettingChanged
```

#### Event Type

 System.Action<string, object\>

