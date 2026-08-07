# <a id="Ink_Canvas_Plugins_SecurityVerdict"></a> Class SecurityVerdict

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

评估结果，用于安装前的安全提示。

```csharp
public class SecurityVerdict
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SecurityVerdict](Ink\_Canvas.Plugins.SecurityVerdict.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_SecurityVerdict_DetectedAt"></a> DetectedAt

```csharp
public DateTime DetectedAt { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Ink_Canvas_Plugins_SecurityVerdict_IsOnMarket"></a> IsOnMarket

```csharp
public bool IsOnMarket { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_SecurityVerdict_PackagePath"></a> PackagePath

```csharp
public string PackagePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_SecurityVerdict_PackageSha256"></a> PackageSha256

```csharp
public string PackageSha256 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_SecurityVerdict_Permissions"></a> Permissions

```csharp
public List<string> Permissions { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_SecurityVerdict_PluginId"></a> PluginId

```csharp
public string PluginId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_SecurityVerdict_Reasons"></a> Reasons

```csharp
public List<string> Reasons { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_Plugins_SecurityVerdict_TrustLevel"></a> TrustLevel

```csharp
public PluginTrustLevel TrustLevel { get; set; }
```

#### Property Value

 [PluginTrustLevel](Ink\_Canvas.Plugins.PluginTrustLevel.md)

