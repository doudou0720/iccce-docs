# <a id="Ink_Canvas_Plugins_PluginMarketSourcesService"></a> Class PluginMarketSourcesService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

插件市场源配置管理，支持添加多个第三方插件源并选择镜像。

```csharp
public class PluginMarketSourcesService
```

#### Inheritance

object ← 
[PluginMarketSourcesService](Ink\_Canvas.Plugins.PluginMarketSourcesService.md)

## Constructors

### <a id="Ink_Canvas_Plugins_PluginMarketSourcesService__ctor_System_String_"></a> PluginMarketSourcesService\(string\)

```csharp
public PluginMarketSourcesService(string basePath)
```

#### Parameters

`basePath` string

## Fields

### <a id="Ink_Canvas_Plugins_PluginMarketSourcesService_OfficialSource"></a> OfficialSource

```csharp
public static readonly PluginMarketSourceInfo OfficialSource
```

#### Field Value

 [PluginMarketSourceInfo](Ink\_Canvas.Plugins.PluginMarketSourceInfo.md)

## Properties

### <a id="Ink_Canvas_Plugins_PluginMarketSourcesService_ActiveSourceId"></a> ActiveSourceId

当前激活的源 id。

```csharp
public string ActiveSourceId { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginMarketSourcesService_Sources"></a> Sources

当前所有源（含官方源）。官方源不可删除或编辑，固定在列表首位。

```csharp
public IReadOnlyList<PluginMarketSourceInfo> Sources { get; }
```

#### Property Value

 IReadOnlyList<[PluginMarketSourceInfo](Ink\_Canvas.Plugins.PluginMarketSourceInfo.md)\>

## Methods

### <a id="Ink_Canvas_Plugins_PluginMarketSourcesService_DisplayNameOf_Ink_Canvas_Plugins_PluginMarketSourceInfo_"></a> DisplayNameOf\(PluginMarketSourceInfo\)

提供给 UI 的活跃源展示名称。无自定义名时显示 host。

```csharp
public static string DisplayNameOf(PluginMarketSourceInfo source)
```

#### Parameters

`source` [PluginMarketSourceInfo](Ink\_Canvas.Plugins.PluginMarketSourceInfo.md)

#### Returns

 string

### <a id="Ink_Canvas_Plugins_PluginMarketSourcesService_GetActiveSource"></a> GetActiveSource\(\)

获取当前激活源对象（找不到则回退到官方源）。

```csharp
public PluginMarketSourceInfo GetActiveSource()
```

#### Returns

 [PluginMarketSourceInfo](Ink\_Canvas.Plugins.PluginMarketSourceInfo.md)

### <a id="Ink_Canvas_Plugins_PluginMarketSourcesService_Remove_System_String_"></a> Remove\(string\)

删除一个用户自定义源。官方源不可删除。

```csharp
public bool Remove(string sourceId)
```

#### Parameters

`sourceId` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_PluginMarketSourcesService_SelectMirror_System_String_System_String_"></a> SelectMirror\(string, string\)

设置当前源的自选镜像名。仅在该源的 <code>DownloadMirrors</code> 字典里存在的 key 才允许保存。

```csharp
public bool SelectMirror(string sourceId, string mirrorKey)
```

#### Parameters

`sourceId` string

`mirrorKey` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_PluginMarketSourcesService_TryAdd_Ink_Canvas_Plugins_PluginMarketSourceInfo_System_String__"></a> TryAdd\(PluginMarketSourceInfo, out string\)

添加一个新源。会校验 URL 必须以 http(s):// 开头。

```csharp
public bool TryAdd(PluginMarketSourceInfo source, out string error)
```

#### Parameters

`source` [PluginMarketSourceInfo](Ink\_Canvas.Plugins.PluginMarketSourceInfo.md)

`error` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_PluginMarketSourcesService_Update_Ink_Canvas_Plugins_PluginMarketSourceInfo_System_String__"></a> Update\(PluginMarketSourceInfo, out string\)

更新一个已存在源。注意官方源不可编辑。

```csharp
public bool Update(PluginMarketSourceInfo source, out string error)
```

#### Parameters

`source` [PluginMarketSourceInfo](Ink\_Canvas.Plugins.PluginMarketSourceInfo.md)

`error` string

#### Returns

 bool

