# <a id="Ink_Canvas_Plugins_IQuoteService"></a> Interface IQuoteService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

名言（鸡汤/一言）服务：供插件读取宿主内置的名言预设、触发白板水印名言刷新。

<p>预设来源：osu 玩家语录、励志名言、高考祝福、Phigros Tips、一言（Hitokoto API）。</p>

```csharp
public interface IQuoteService
```

## Methods

### <a id="Ink_Canvas_Plugins_IQuoteService_GetPresetSchemes"></a> GetPresetSchemes\(\)

列出宿主内置的名言预设方案。

```csharp
IReadOnlyList<PluginQuoteScheme> GetPresetSchemes()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PluginQuoteScheme](Ink\_Canvas.Plugins.PluginQuoteScheme.md)\>

### <a id="Ink_Canvas_Plugins_IQuoteService_GetTipsFromPreset_System_String_"></a> GetTipsFromPreset\(string\)

获取指定预设的全部语录数组。

```csharp
string[] GetTipsFromPreset(string presetId)
```

#### Parameters

`presetId` [string](https://learn.microsoft.com/dotnet/api/system.string)

预设 ID（如 "osu"、"mottos"、"gaokao"、"phigros"）。

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

语录数组；hitokoto 或未知 ID 返回 null。

### <a id="Ink_Canvas_Plugins_IQuoteService_RefreshAsync"></a> RefreshAsync\(\)

触发宿主立即刷新白板水印名言（随机选取一条，异步）。

```csharp
Task RefreshAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

