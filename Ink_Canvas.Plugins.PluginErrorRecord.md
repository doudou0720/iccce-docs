# <a id="Ink_Canvas_Plugins_PluginErrorRecord"></a> Class PluginErrorRecord

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

单个插件的错误记录。

```csharp
public class PluginErrorRecord
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginErrorRecord](Ink\_Canvas.Plugins.PluginErrorRecord.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginErrorRecord_AutoDisabled"></a> AutoDisabled

```csharp
public bool AutoDisabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginErrorRecord_AutoDisabledAt"></a> AutoDisabledAt

```csharp
public DateTime? AutoDisabledAt { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

### <a id="Ink_Canvas_Plugins_PluginErrorRecord_FailureTimestamps"></a> FailureTimestamps

```csharp
public List<DateTime> FailureTimestamps { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)\>

### <a id="Ink_Canvas_Plugins_PluginErrorRecord_FirstFailureAt"></a> FirstFailureAt

```csharp
public DateTime FirstFailureAt { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Ink_Canvas_Plugins_PluginErrorRecord_LastErrorMessage"></a> LastErrorMessage

```csharp
public string LastErrorMessage { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginErrorRecord_LastFailureAt"></a> LastFailureAt

```csharp
public DateTime LastFailureAt { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Ink_Canvas_Plugins_PluginErrorRecord_LastStackTrace"></a> LastStackTrace

```csharp
public string LastStackTrace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginErrorRecord_PluginId"></a> PluginId

```csharp
public string PluginId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginErrorRecord_PluginName"></a> PluginName

```csharp
public string PluginName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Plugins_PluginErrorRecord_Clone"></a> Clone\(\)

```csharp
public PluginErrorRecord Clone()
```

#### Returns

 [PluginErrorRecord](Ink\_Canvas.Plugins.PluginErrorRecord.md)

