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

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)\>

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_BuildGroup_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_System_String___"></a> BuildGroup\(IBoardToolbarHost, params string\[\]\)

```csharp
public static List<FrameworkElement> BuildGroup(IBoardToolbarHost host, params string[] ids)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`ids` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)\>

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_BuildView_System_String_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_"></a> BuildView\(string, IBoardToolbarHost\)

```csharp
public static FrameworkElement BuildView(string id, IBoardToolbarHost host)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

#### Returns

 [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_CreateGroupBorder_System_Collections_Generic_List_System_Windows_FrameworkElement__System_Windows_Controls_Orientation_"></a> CreateGroupBorder\(List<FrameworkElement\>, Orientation\)

```csharp
public static Border CreateGroupBorder(List<FrameworkElement> views, Orientation orientation = Orientation.Horizontal)
```

#### Parameters

`views` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)\>

`orientation` [Orientation](https://learn.microsoft.com/dotnet/api/system.windows.controls.orientation)

#### Returns

 [Border](https://learn.microsoft.com/dotnet/api/system.windows.controls.border)

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

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_RebuildCenterToolbar_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_System_Windows_Controls_Panel_"></a> RebuildCenterToolbar\(IBoardToolbarHost, Panel\)

```csharp
public static void RebuildCenterToolbar(IBoardToolbarHost host, Panel container)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`container` [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_RebuildLeftToolbar_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_System_Windows_Controls_Panel_"></a> RebuildLeftToolbar\(IBoardToolbarHost, Panel\)

```csharp
public static void RebuildLeftToolbar(IBoardToolbarHost host, Panel container)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`container` [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_RebuildRightToolbar_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_System_Windows_Controls_Panel_"></a> RebuildRightToolbar\(IBoardToolbarHost, Panel\)

```csharp
public static void RebuildRightToolbar(IBoardToolbarHost host, Panel container)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`container` [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_RebuildToolbar_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_System_Windows_Controls_Panel_System_Windows_Controls_Panel_System_Windows_Controls_Panel_"></a> RebuildToolbar\(IBoardToolbarHost, Panel, Panel, Panel\)

```csharp
public static void RebuildToolbar(IBoardToolbarHost host, Panel leftContainer, Panel centerContainer, Panel rightContainer)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`leftContainer` [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)

`centerContainer` [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)

`rightContainer` [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_RebuildToolbar_Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_System_Windows_Controls_Panel_System_Windows_Controls_Panel_System_Windows_Controls_Panel_Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarLayoutSettings_"></a> RebuildToolbar\(IBoardToolbarHost, Panel, Panel, Panel, BoardToolbarLayoutSettings\)

```csharp
public static void RebuildToolbar(IBoardToolbarHost host, Panel leftContainer, Panel centerContainer, Panel rightContainer, BoardToolbarLayoutSettings layout)
```

#### Parameters

`host` [IBoardToolbarHost](Ink\_Canvas.Controls.Toolbar.BoardToolbar.IBoardToolbarHost.md)

`leftContainer` [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)

`centerContainer` [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)

`rightContainer` [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)

`layout` [BoardToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.BoardToolbar.BoardToolbarLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarRegistry_SaveConfigFile_System_String_Ink_Canvas_Controls_Toolbar_BoardToolbar_BoardToolbarLayoutSettings_"></a> SaveConfigFile\(string, BoardToolbarLayoutSettings\)

```csharp
public static void SaveConfigFile(string name, BoardToolbarLayoutSettings layout)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`layout` [BoardToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.BoardToolbar.BoardToolbarLayoutSettings.md)

