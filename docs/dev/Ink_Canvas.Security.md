# <a id="Ink_Canvas_Security"></a> Class Security

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class Security
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Security](Ink\_Canvas.Security.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Security_EnableProcessProtection"></a> EnableProcessProtection

```csharp
[JsonProperty("enableProcessProtection")]
public bool EnableProcessProtection { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Security_PasswordEnabled"></a> PasswordEnabled

```csharp
[JsonProperty("passwordEnabled")]
public bool PasswordEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Security_PasswordHash"></a> PasswordHash

```csharp
[JsonProperty("passwordHash")]
public string PasswordHash { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Security_PasswordSalt"></a> PasswordSalt

```csharp
[JsonProperty("passwordSalt")]
public string PasswordSalt { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Security_RequirePasswordOnEnterSettings"></a> RequirePasswordOnEnterSettings

```csharp
[JsonProperty("requirePasswordOnEnterSettings")]
public bool RequirePasswordOnEnterSettings { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Security_RequirePasswordOnExit"></a> RequirePasswordOnExit

```csharp
[JsonProperty("requirePasswordOnExit")]
public bool RequirePasswordOnExit { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Security_RequirePasswordOnModifyOrClearNameList"></a> RequirePasswordOnModifyOrClearNameList

```csharp
[JsonProperty("requirePasswordOnModifyOrClearNameList")]
public bool RequirePasswordOnModifyOrClearNameList { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Security_RequirePasswordOnResetConfig"></a> RequirePasswordOnResetConfig

```csharp
[JsonProperty("requirePasswordOnResetConfig")]
public bool RequirePasswordOnResetConfig { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Security_TotpEnabled"></a> TotpEnabled

```csharp
[JsonProperty("totpEnabled")]
public bool TotpEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Security_TotpOnlyMode"></a> TotpOnlyMode

```csharp
[JsonProperty("totpOnlyMode")]
public bool TotpOnlyMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Security_TotpSecret"></a> TotpSecret

```csharp
[JsonProperty("totpSecret")]
public string TotpSecret { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

