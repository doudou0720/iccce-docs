# <a id="Ink_Canvas_Plugins_PluginCompatibility"></a> Class PluginCompatibility

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll, InkCanvas.PluginSdk.Tests.dll  

```csharp
public static class PluginCompatibility
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginCompatibility](Ink\_Canvas.Plugins.PluginCompatibility.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Plugins_PluginCompatibility_Check_Ink_Canvas_Plugins_PluginManifest_"></a> Check\(PluginManifest\)

返回符合结果，包含 <code>IsCompatible</code> 与可读 <code>Reason</code>。

```csharp
public static CompatibilityResult Check(PluginManifest manifest)
```

#### Parameters

`manifest` PluginManifest

#### Returns

 [CompatibilityResult](Ink\_Canvas.Plugins.CompatibilityResult.md)

### <a id="Ink_Canvas_Plugins_PluginCompatibility_Check_Ink_Canvas_Plugins_PluginManifest_"></a> Check\(PluginManifest\)

返回符合结果，包含 <code>IsCompatible</code> 与可读 <code>Reason</code>。

```csharp
public static CompatibilityResult Check(PluginManifest manifest)
```

#### Parameters

`manifest` [PluginManifest](Ink\_Canvas.Plugins.PluginManifest.md)

#### Returns

 [CompatibilityResult](Ink\_Canvas.Plugins.CompatibilityResult.md)

### <a id="Ink_Canvas_Plugins_PluginCompatibility_IsApiVersionCompatible_System_String_"></a> IsApiVersionCompatible\(string\)

判断指定版本字符串 <code class="paramref">required</code> 是否满足主版本相同 + 次版本不超过当前。

```csharp
public static bool IsApiVersionCompatible(string required)
```

#### Parameters

`required` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginCompatibility_IsApiVersionCompatible_System_String_"></a> IsApiVersionCompatible\(string\)

判断指定版本字符串 <code class="paramref">required</code> 是否满足主版本相同 + 次版本不超过当前。

```csharp
public static bool IsApiVersionCompatible(string required)
```

#### Parameters

`required` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginCompatibility_IsVersionAtLeast_System_String_System_String_"></a> IsVersionAtLeast\(string, string\)

判断 <code class="paramref">hostVersion</code> 是否 ≥ <code class="paramref">requiredMinVersion</code>。

```csharp
public static bool IsVersionAtLeast(string hostVersion, string requiredMinVersion)
```

#### Parameters

`hostVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)

`requiredMinVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginCompatibility_IsVersionAtLeast_System_String_System_String_"></a> IsVersionAtLeast\(string, string\)

判断 <code class="paramref">hostVersion</code> 是否 ≥ <code class="paramref">requiredMinVersion</code>。

```csharp
public static bool IsVersionAtLeast(string hostVersion, string requiredMinVersion)
```

#### Parameters

`hostVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)

`requiredMinVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginCompatibility_IsVersionInRange_System_String_System_String_"></a> IsVersionInRange\(string, string\)

判断 <code class="paramref">version</code> 是否满足 <code class="paramref">range</code>（npm 风格）。

```csharp
public static bool IsVersionInRange(string version, string range)
```

#### Parameters

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)

`range` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginCompatibility_IsVersionInRange_System_String_System_String_"></a> IsVersionInRange\(string, string\)

判断 <code class="paramref">version</code> 是否满足 <code class="paramref">range</code>（npm 风格）。

```csharp
public static bool IsVersionInRange(string version, string range)
```

#### Parameters

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)

`range` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_PluginCompatibility_NormalizeVersion_System_String_"></a> NormalizeVersion\(string\)

将 "v1.2"、"1.2" 这种短写法补齐为 "x.y.z" 以便 <xref href="System.Version.TryParse(System.ReadOnlySpan%7bSystem.Byte%7d%2cSystem.Version%40)" data-throw-if-not-resolved="false"></xref> 解析。

```csharp
public static string NormalizeVersion(string v)
```

#### Parameters

`v` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginCompatibility_NormalizeVersion_System_String_"></a> NormalizeVersion\(string\)

将 "v1.2"、"1.2" 这种短写法补齐为 "x.y.z" 以便 <xref href="System.Version.TryParse(System.ReadOnlySpan%7bSystem.Byte%7d%2cSystem.Version%40)" data-throw-if-not-resolved="false"></xref> 解析。

```csharp
public static string NormalizeVersion(string v)
```

#### Parameters

`v` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

