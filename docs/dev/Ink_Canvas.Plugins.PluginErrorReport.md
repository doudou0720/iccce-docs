# <a id="Ink_Canvas_Plugins_PluginErrorReport"></a> Class PluginErrorReport

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

错误报告——记录 <xref href="Ink_Canvas.Plugins.PluginErrorRecoveryService.ReportFailure(System.String%2cSystem.String%2cSystem.Exception)" data-throw-if-not-resolved="false"></xref> 的处置结果。

```csharp
public class PluginErrorReport
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginErrorReport](Ink\_Canvas.Plugins.PluginErrorReport.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginErrorReport_AutoDisabled"></a> AutoDisabled

```csharp
public bool AutoDisabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginErrorReport_Record"></a> Record

```csharp
public PluginErrorRecord Record { get; set; }
```

#### Property Value

 [PluginErrorRecord](Ink\_Canvas.Plugins.PluginErrorRecord.md)

### <a id="Ink_Canvas_Plugins_PluginErrorReport_Warned"></a> Warned

```csharp
public bool Warned { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Plugins_PluginErrorReport_CreateAutoDisabled_Ink_Canvas_Plugins_PluginErrorRecord_"></a> CreateAutoDisabled\(PluginErrorRecord\)

```csharp
public static PluginErrorReport CreateAutoDisabled(PluginErrorRecord r)
```

#### Parameters

`r` [PluginErrorRecord](Ink\_Canvas.Plugins.PluginErrorRecord.md)

#### Returns

 [PluginErrorReport](Ink\_Canvas.Plugins.PluginErrorReport.md)

### <a id="Ink_Canvas_Plugins_PluginErrorReport_CreateWarned_Ink_Canvas_Plugins_PluginErrorRecord_"></a> CreateWarned\(PluginErrorRecord\)

```csharp
public static PluginErrorReport CreateWarned(PluginErrorRecord r)
```

#### Parameters

`r` [PluginErrorRecord](Ink\_Canvas.Plugins.PluginErrorRecord.md)

#### Returns

 [PluginErrorReport](Ink\_Canvas.Plugins.PluginErrorReport.md)

### <a id="Ink_Canvas_Plugins_PluginErrorReport_NoneResult"></a> NoneResult\(\)

```csharp
public static PluginErrorReport NoneResult()
```

#### Returns

 [PluginErrorReport](Ink\_Canvas.Plugins.PluginErrorReport.md)

