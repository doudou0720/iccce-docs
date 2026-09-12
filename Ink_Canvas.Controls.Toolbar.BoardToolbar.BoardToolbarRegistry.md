# <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry"></a> Class BoardToolbarRegistry

Namespace: [Ink\_Canvas.Controls.Toolbar.BoardToolbar](Ink\_Canvas.Controls.Toolbar.BoardToolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class BoardToolbarRegistry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BoardToolbarRegistry](Ink\_Canvas.Controls.Toolbar.BoardToolbar.BoardToolbarRegistry.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_BuildGroup_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_System_Collections_Generic_List_Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarComponentEntry__System_String_"></a> BuildGroup\(IBoardToolbarHost, List<BoardToolbarComponentEntry\>, string\)

```csharp
public static List<FrameworkElement> BuildGroup(IBoardToolbarHost host, List<BoardToolbarComponentEntry> components, string areaId = null)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`components` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[BoardToolbarComponentEntry](Ink\_Canvas.Controls.Toolbar.BoardToolbar.BoardToolbarComponentEntry.md)\>

`areaId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<FrameworkElement\>

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_BuildGroup_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_System_String___"></a> BuildGroup\(IBoardToolbarHost, params string\[\]\)

```csharp
public static List<FrameworkElement> BuildGroup(IBoardToolbarHost host, params string[] ids)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`ids` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<FrameworkElement\>

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_BuildView_System_String_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_"></a> BuildView\(string, IBoardToolbarHost\)

```csharp
public static FrameworkElement BuildView(string id, IBoardToolbarHost host)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

#### Returns

 FrameworkElement

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_CreateGroupBorder_System_Collections_Generic_List_FrameworkElement__Orientation_"></a> CreateGroupBorder\(List<FrameworkElement\>, Orientation\)

```csharp
public static Border CreateGroupBorder(List<FrameworkElement> views, Orientation orientation = null)
```

#### Parameters

`views` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<FrameworkElement\>

`orientation` Orientation

#### Returns

 Border

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_DeleteConfigFile_System_String_"></a> DeleteConfigFile\(string\)

```csharp
public static void DeleteConfigFile(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_Discover"></a> Discover\(\)

```csharp
public static IReadOnlyList<IBoardToolbarItem> Discover()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IBoardToolbarItem](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarItem.md)\>

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_EnsureDefaultConfigExists"></a> EnsureDefaultConfigExists\(\)

```csharp
public static void EnsureDefaultConfigExists()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_FindItem_System_String_"></a> FindItem\(string\)

```csharp
public static IBoardToolbarItem FindItem(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IBoardToolbarItem](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarItem.md)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_GetConfigDirectory"></a> GetConfigDirectory\(\)

```csharp
public static string GetConfigDirectory()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_GetConfigFilePath_System_String_"></a> GetConfigFilePath\(string\)

```csharp
public static string GetConfigFilePath(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_GetPluginItems"></a> GetPluginItems\(\)

当前注册到白板工具栏的插件组件列表的只读快照。
PluginManager 卸载前会读取此列表以便从 *.json 配置文件里一并清除残留条目。

```csharp
public static IReadOnlyList<PluginToolbarItemInfo> GetPluginItems()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<PluginToolbarItemInfo\>

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_ListConfigFiles"></a> ListConfigFiles\(\)

```csharp
public static List<string> ListConfigFiles()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_LoadActiveConfig"></a> LoadActiveConfig\(\)

```csharp
public static BoardToolbarLayoutSettings LoadActiveConfig()
```

#### Returns

 [BoardToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.BoardToolbar.BoardToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_LoadConfigFile_System_String_"></a> LoadConfigFile\(string\)

```csharp
public static BoardToolbarLayoutSettings LoadConfigFile(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [BoardToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.BoardToolbar.BoardToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_RebuildCenterToolbar_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_Panel_"></a> RebuildCenterToolbar\(IBoardToolbarHost, Panel\)

```csharp
public static void RebuildCenterToolbar(IBoardToolbarHost host, Panel container)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`container` Panel

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_RebuildLeftToolbar_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_Panel_"></a> RebuildLeftToolbar\(IBoardToolbarHost, Panel\)

```csharp
public static void RebuildLeftToolbar(IBoardToolbarHost host, Panel container)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`container` Panel

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_RebuildRightToolbar_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_Panel_"></a> RebuildRightToolbar\(IBoardToolbarHost, Panel\)

```csharp
public static void RebuildRightToolbar(IBoardToolbarHost host, Panel container)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`container` Panel

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_RebuildToolbar_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_Panel_Panel_Panel_"></a> RebuildToolbar\(IBoardToolbarHost, Panel, Panel, Panel\)

```csharp
public static void RebuildToolbar(IBoardToolbarHost host, Panel leftContainer, Panel centerContainer, Panel rightContainer)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`leftContainer` Panel

`centerContainer` Panel

`rightContainer` Panel

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_RebuildToolbar_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_Panel_Panel_Panel_Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarLayoutSettings_"></a> RebuildToolbar\(IBoardToolbarHost, Panel, Panel, Panel, BoardToolbarLayoutSettings\)

```csharp
public static void RebuildToolbar(IBoardToolbarHost host, Panel leftContainer, Panel centerContainer, Panel rightContainer, BoardToolbarLayoutSettings layout)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`leftContainer` Panel

`centerContainer` Panel

`rightContainer` Panel

`layout` [BoardToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.BoardToolbar.BoardToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_RegisterPluginItem_Ink_Canvas_Plugins_PluginToolbarItemInfo_System_Boolean_"></a> RegisterPluginItem\(PluginToolbarItemInfo, bool\)

注册一个插件白板工具栏组件。首个注册的插件启动时把组件追加进 active 配置（默认 center→tools），
后续启动只加入组件库，避免用户删除组件后重启又被自动加回。

```csharp
public static bool RegisterPluginItem(PluginToolbarItemInfo itemInfo, bool autoAddToActiveConfig = true)
```

#### Parameters

`itemInfo` PluginToolbarItemInfo

`autoAddToActiveConfig` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_RemovePluginEntryFromAllConfigs_System_String_"></a> RemovePluginEntryFromAllConfigs\(string\)

从所有白板工具栏配置文件里移除指定 Id 的组件条目。Area → Group → Components
三层结构下逐层递归剔除，避免 Populate 时刷 "组件 X 构建失败" 警告。

```csharp
public static int RemovePluginEntryFromAllConfigs(string itemId)
```

#### Parameters

`itemId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

被修改的配置文件数量。

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_SaveConfigFile_System_String_Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarLayoutSettings_"></a> SaveConfigFile\(string, BoardToolbarLayoutSettings\)

```csharp
public static void SaveConfigFile(string name, BoardToolbarLayoutSettings layout)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`layout` [BoardToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.BoardToolbar.BoardToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_UnregisterPluginItem_System_String_"></a> UnregisterPluginItem\(string\)

注销插件注册的白板工具栏组件，断开对插件程序集中委托的引用。语义同
<xref href="Ink_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarRegistry.UnregisterPluginItem(System.String)" data-throw-if-not-resolved="false"></xref>：热重载必需，
且不动用户布局配置。

```csharp
public static bool UnregisterPluginItem(string itemId)
```

#### Parameters

`itemId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

