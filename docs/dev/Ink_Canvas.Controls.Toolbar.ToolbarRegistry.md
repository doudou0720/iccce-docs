# <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry"></a> Class ToolbarRegistry

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

扫描当前程序集里的 IToolbarItem 实现，按用户配置（Settings.Toolbar）排序/过滤后注入到目标容器。

```csharp
public static class ToolbarRegistry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ToolbarRegistry](Ink\_Canvas.Controls.Toolbar.ToolbarRegistry.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_Discover"></a> Discover\(\)

```csharp
public static IReadOnlyList<IToolbarItem> Discover()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IToolbarItem](Ink\_Canvas.Controls.Toolbar.IToolbarItem.md)\>

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarRegistry_Populate_Ink_Canvas_Controls_Toolbar_IToolbarHost_System_Collections_Generic_IDictionary_Ink_Canvas_Controls_Toolbar_ToolbarSlot_System_Windows_Controls_Panel__Ink_Canvas_Controls_Toolbar_ToolbarLayoutSettings_"></a> Populate\(IToolbarHost, IDictionary<ToolbarSlot, Panel\>, ToolbarLayoutSettings\)

按 slot 分配工具栏条目到对应容器。调用者负责清空目标容器里要被接管的旧内容。

```csharp
public static void Populate(IToolbarHost host, IDictionary<ToolbarSlot, Panel> slots, ToolbarLayoutSettings layout)
```

#### Parameters

`host` [IToolbarHost](Ink\_Canvas.Controls.Toolbar.IToolbarHost.md)

`slots` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[ToolbarSlot](Ink\_Canvas.Controls.Toolbar.ToolbarSlot.md), [Panel](https://learn.microsoft.com/dotnet/api/system.windows.controls.panel)\>

`layout` [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolbarLayoutSettings.md)

