# <a id="Ink_Canvas_Plugins_PluginQuoteScheme"></a> Class PluginQuoteScheme

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

名言预设方案描述。

```csharp
public sealed class PluginQuoteScheme
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginQuoteScheme](Ink\_Canvas.Plugins.PluginQuoteScheme.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginQuoteScheme_IsEnabled"></a> IsEnabled

当前是否启用。

```csharp
public bool IsEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginQuoteScheme_IsPreset"></a> IsPreset

是否为内置预设（false 为自定义方案）。

```csharp
public bool IsPreset { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginQuoteScheme_Name"></a> Name

预设显示名称。

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginQuoteScheme_PresetId"></a> PresetId

预设 ID，供 <xref href="Ink_Canvas.Plugins.IQuoteService.GetTipsFromPreset(System.String)" data-throw-if-not-resolved="false"></xref> 使用。

```csharp
public string PresetId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

