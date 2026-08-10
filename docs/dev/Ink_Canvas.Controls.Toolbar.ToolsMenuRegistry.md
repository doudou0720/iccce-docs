# <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry"></a> Class ToolsMenuRegistry

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class ToolsMenuRegistry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ToolsMenuRegistry](Ink\_Canvas.Controls.Toolbar.ToolsMenuRegistry.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_AllItems"></a> AllItems

```csharp
public static readonly List<ToolsMenuItemInfo> AllItems
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ToolsMenuItemInfo](Ink\_Canvas.Controls.Toolbar.ToolsMenuItemInfo.md)\>

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_BoardAvailableItems"></a> BoardAvailableItems

```csharp
public static List<ToolsMenuItemInfo> BoardAvailableItems { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ToolsMenuItemInfo](Ink\_Canvas.Controls.Toolbar.ToolsMenuItemInfo.md)\>

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_FloatingBarAvailableItems"></a> FloatingBarAvailableItems

```csharp
public static List<ToolsMenuItemInfo> FloatingBarAvailableItems { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ToolsMenuItemInfo](Ink\_Canvas.Controls.Toolbar.ToolsMenuItemInfo.md)\>

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_CreateDefaultBoardLayout"></a> CreateDefaultBoardLayout\(\)

```csharp
public static ToolsMenuLayoutSettings CreateDefaultBoardLayout()
```

#### Returns

 [ToolsMenuLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolsMenuLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_CreateDefaultFloatingBarLayout"></a> CreateDefaultFloatingBarLayout\(\)

```csharp
public static ToolsMenuLayoutSettings CreateDefaultFloatingBarLayout()
```

#### Returns

 [ToolsMenuLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolsMenuLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_FindItem_System_String_"></a> FindItem\(string\)

```csharp
public static ToolsMenuItemInfo FindItem(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ToolsMenuItemInfo](Ink\_Canvas.Controls.Toolbar.ToolsMenuItemInfo.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_GetBoardConfigPath"></a> GetBoardConfigPath\(\)

```csharp
public static string GetBoardConfigPath()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_GetConfigDirectory"></a> GetConfigDirectory\(\)

```csharp
public static string GetConfigDirectory()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_GetFloatingBarConfigPath"></a> GetFloatingBarConfigPath\(\)

```csharp
public static string GetFloatingBarConfigPath()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_LoadBoardConfig"></a> LoadBoardConfig\(\)

```csharp
public static ToolsMenuLayoutSettings LoadBoardConfig()
```

#### Returns

 [ToolsMenuLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolsMenuLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_LoadFloatingBarConfig"></a> LoadFloatingBarConfig\(\)

```csharp
public static ToolsMenuLayoutSettings LoadFloatingBarConfig()
```

#### Returns

 [ToolsMenuLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolsMenuLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_SaveBoardConfig_Ink_Canvas_Controls_Toolbar_ToolsMenuLayoutSettings_"></a> SaveBoardConfig\(ToolsMenuLayoutSettings\)

```csharp
public static void SaveBoardConfig(ToolsMenuLayoutSettings layout)
```

#### Parameters

`layout` [ToolsMenuLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolsMenuLayoutSettings.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuRegistry_SaveFloatingBarConfig_Ink_Canvas_Controls_Toolbar_ToolsMenuLayoutSettings_"></a> SaveFloatingBarConfig\(ToolsMenuLayoutSettings\)

```csharp
public static void SaveFloatingBarConfig(ToolsMenuLayoutSettings layout)
```

#### Parameters

`layout` [ToolsMenuLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolsMenuLayoutSettings.md)

