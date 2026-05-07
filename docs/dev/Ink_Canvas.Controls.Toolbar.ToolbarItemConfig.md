# <a id="Ink_Canvas_Controls_Toolbar_ToolbarItemConfig"></a> Class ToolbarItemConfig

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

单个工具栏按钮的用户配置（可见性、顺序、所属 slot、插入位置）。
由 Settings.Toolbar 持久化。

```csharp
public class ToolbarItemConfig
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ToolbarItemConfig](Ink\_Canvas.Controls.Toolbar.ToolbarItemConfig.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarItemConfig_AnchorName"></a> AnchorName

```csharp
[JsonProperty("anchorName")]
public string AnchorName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarItemConfig_Order"></a> Order

```csharp
[JsonProperty("order")]
public int Order { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarItemConfig_Position"></a> Position

```csharp
[JsonProperty("position")]
public ToolbarInsertPosition Position { get; set; }
```

#### Property Value

 [ToolbarInsertPosition](Ink\_Canvas.Controls.Toolbar.ToolbarInsertPosition.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarItemConfig_Slot"></a> Slot

```csharp
[JsonProperty("slot")]
public ToolbarSlot Slot { get; set; }
```

#### Property Value

 [ToolbarSlot](Ink\_Canvas.Controls.Toolbar.ToolbarSlot.md)

### <a id="Ink_Canvas_Controls_Toolbar_ToolbarItemConfig_Visible"></a> Visible

```csharp
[JsonProperty("visible")]
public bool Visible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

