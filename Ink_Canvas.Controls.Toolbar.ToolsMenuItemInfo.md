# <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuItemInfo"></a> Class ToolsMenuItemInfo

Namespace: [Ink\_Canvas.Controls.Toolbar](Ink\_Canvas.Controls.Toolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class ToolsMenuItemInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ToolsMenuItemInfo](Ink\_Canvas.Controls.Toolbar.ToolsMenuItemInfo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuItemInfo_CustomSettingsPanelFactory"></a> CustomSettingsPanelFactory

自定义设置面板工厂。若提供，菜单页面将在"组件设置"中显示此工厂返回的 UI。
适用于需要呈现全局设置的菜单项（如截图）。

```csharp
public Func<FrameworkElement> CustomSettingsPanelFactory { get; set; }
```

#### Property Value

 [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<FrameworkElement\>

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuItemInfo_Description"></a> Description

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuItemInfo_DisplayName"></a> DisplayName

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuItemInfo_IconGeometry"></a> IconGeometry

```csharp
public string IconGeometry { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuItemInfo_Id"></a> Id

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_ToolsMenuItemInfo_LocalizationKey"></a> LocalizationKey

```csharp
public string LocalizationKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

