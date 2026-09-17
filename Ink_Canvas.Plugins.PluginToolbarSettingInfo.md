# <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo"></a> Class PluginToolbarSettingInfo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件工具栏项的自定义设置描述。

```csharp
public class PluginToolbarSettingInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginToolbarSettingInfo](Ink\_Canvas.Plugins.PluginToolbarSettingInfo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_DefaultValue"></a> DefaultValue

设置项默认值（字符串形式）。

```csharp
public string DefaultValue { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_Description"></a> Description

设置项的说明文本。

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_DisplayName"></a> DisplayName

设置项在设置界面显示的名称。

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_Key"></a> Key

设置项键名，用于持久化与 <xref href="Ink_Canvas.Plugins.PluginToolbarItemInfo.ApplySettings" data-throw-if-not-resolved="false"></xref> 回调。

```csharp
public string Key { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_MaxValue"></a> MaxValue

Slider 类型的最大值。默认 100。仅对 <xref href="Ink_Canvas.Plugins.PluginToolbarSettingType.Slider" data-throw-if-not-resolved="false"></xref> 生效。

```csharp
public double? MaxValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_MinValue"></a> MinValue

Slider 类型的最小值。默认 0。仅对 <xref href="Ink_Canvas.Plugins.PluginToolbarSettingType.Slider" data-throw-if-not-resolved="false"></xref> 生效。

```csharp
public double? MinValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_OptionValues"></a> OptionValues

ComboBox 选项的保存值。若数量与 Options 一致，则 Options 用作显示文本、OptionValues 用作保存值；
否则 Options 同时用作显示文本和保存值。

```csharp
public List<string> OptionValues { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_Options"></a> Options

ComboBox 选项的显示文本。未提供 <xref href="Ink_Canvas.Plugins.PluginToolbarSettingInfo.OptionValues" data-throw-if-not-resolved="false"></xref> 时同时用作保存值。

```csharp
public List<string> Options { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_StepSize"></a> StepSize

Slider 类型的步长。设置后滑块吸附到该步长（含鼠标拖动/键盘/点击）。默认 1。
仅对 <xref href="Ink_Canvas.Plugins.PluginToolbarSettingType.Slider" data-throw-if-not-resolved="false"></xref> 生效。

```csharp
public double? StepSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_Type"></a> Type

设置项类型（ComboBox/Slider/Toggle），决定宿主生成的控件。

```csharp
public PluginToolbarSettingType Type { get; set; }
```

#### Property Value

 [PluginToolbarSettingType](Ink\_Canvas.Plugins.PluginToolbarSettingType.md)

