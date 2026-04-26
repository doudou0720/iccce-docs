# <a id="Ink_Canvas_Helpers_ExternalCallerLauncher"></a> Class ExternalCallerLauncher

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class ExternalCallerLauncher
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExternalCallerLauncher](Ink\_Canvas.Helpers.ExternalCallerLauncher.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_ExternalCallerLauncher_GetProtocolsByName_System_String_"></a> GetProtocolsByName\(string\)

```csharp
public static string[] GetProtocolsByName(string externalCallerName)
```

#### Parameters

`externalCallerName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="Ink_Canvas_Helpers_ExternalCallerLauncher_GetProtocolsByType_System_Int32_"></a> GetProtocolsByType\(int\)

```csharp
public static string[] GetProtocolsByType(int externalCallerType)
```

#### Parameters

`externalCallerType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="Ink_Canvas_Helpers_ExternalCallerLauncher_TryLaunch_System_Collections_Generic_IEnumerable_System_String__System_Exception__"></a> TryLaunch\(IEnumerable<string\>, out Exception\)

```csharp
public static bool TryLaunch(IEnumerable<string> protocols, out Exception lastException)
```

#### Parameters

`protocols` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`lastException` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

