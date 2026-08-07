# <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo"></a> Class PluginToolbarSettingInfo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件工具栏项的自定义设置描述。

```csharp
public class PluginToolbarSettingInfo
```

#### Inheritance

object ← 
[PluginToolbarSettingInfo](Ink\_Canvas.Plugins.PluginToolbarSettingInfo.md)

## Properties

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_DefaultValue"></a> DefaultValue

```csharp
public string DefaultValue { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_Description"></a> Description

```csharp
public string Description { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_DisplayName"></a> DisplayName

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_Key"></a> Key

```csharp
public string Key { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_MaxValue"></a> MaxValue

Slider 类型的最大值。默认 100。仅对 <xref href="Ink_Canvas.Plugins.PluginToolbarSettingType.Slider" data-throw-if-not-resolved="false"></xref> 生效。

```csharp
public double? MaxValue { get; set; }
```

#### Property Value

 double?

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_MinValue"></a> MinValue

Slider 类型的最小值。默认 0。仅对 <xref href="Ink_Canvas.Plugins.PluginToolbarSettingType.Slider" data-throw-if-not-resolved="false"></xref> 生效。

```csharp
public double? MinValue { get; set; }
```

#### Property Value

 double?

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_OptionValues"></a> OptionValues

ComboBox 选项的保存值。若数量与 Options 一致，则 Options 用作显示文本、OptionValues 用作保存值；
否则 Options 同时用作显示文本和保存值。

```csharp
public List<string> OptionValues { get; set; }
```

#### Property Value

 List<string\>

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_Options"></a> Options

```csharp
public List<string> Options { get; set; }
```

#### Property Value

 List<string\>

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_StepSize"></a> StepSize

Slider 类型的步长。设置后滑块吸附到该步长（含鼠标拖动/键盘/点击）。默认 1。
仅对 <xref href="Ink_Canvas.Plugins.PluginToolbarSettingType.Slider" data-throw-if-not-resolved="false"></xref> 生效。

```csharp
public double? StepSize { get; set; }
```

#### Property Value

 double?

### <a id="Ink_Canvas_Plugins_PluginToolbarSettingInfo_Type"></a> Type

```csharp
public PluginToolbarSettingType Type { get; set; }
```

#### Property Value

 [PluginToolbarSettingType](Ink\_Canvas.Plugins.PluginToolbarSettingType.md)

