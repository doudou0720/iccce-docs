# <a id="Ink_Canvas_FloatingWindowInterceptorSettings"></a> Class FloatingWindowInterceptorSettings

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class FloatingWindowInterceptorSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FloatingWindowInterceptorSettings](Ink\_Canvas.FloatingWindowInterceptorSettings.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_FloatingWindowInterceptorSettings_AutoStart"></a> AutoStart

```csharp
[JsonProperty("autoStart")]
public bool AutoStart { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_FloatingWindowInterceptorSettings_InterceptRules"></a> InterceptRules

```csharp
[JsonProperty("interceptRules")]
public Dictionary<string, bool> InterceptRules { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_FloatingWindowInterceptorSettings_IsEnabled"></a> IsEnabled

```csharp
[JsonProperty("isEnabled")]
public bool IsEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_FloatingWindowInterceptorSettings_ScanIntervalMs"></a> ScanIntervalMs

```csharp
[JsonProperty("scanIntervalMs")]
public int ScanIntervalMs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_FloatingWindowInterceptorSettings_ShowNotifications"></a> ShowNotifications

```csharp
[JsonProperty("showNotifications")]
public bool ShowNotifications { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

