# <a id="Ink_Canvas_Helpers_ExternalCallerLauncher"></a> Class ExternalCallerLauncher

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class ExternalCallerLauncher
```

#### Inheritance

object ← 
[ExternalCallerLauncher](Ink\_Canvas.Helpers.ExternalCallerLauncher.md)

## Methods

### <a id="Ink_Canvas_Helpers_ExternalCallerLauncher_GetProtocolsByName_System_String_"></a> GetProtocolsByName\(string\)

```csharp
public static string[] GetProtocolsByName(string externalCallerName)
```

#### Parameters

`externalCallerName` string

#### Returns

 string\[\]

### <a id="Ink_Canvas_Helpers_ExternalCallerLauncher_GetProtocolsByType_System_Int32_"></a> GetProtocolsByType\(int\)

```csharp
public static string[] GetProtocolsByType(int externalCallerType)
```

#### Parameters

`externalCallerType` int

#### Returns

 string\[\]

### <a id="Ink_Canvas_Helpers_ExternalCallerLauncher_TryLaunch_IEnumerable_System_String__Exception__"></a> TryLaunch\(IEnumerable<string\>, out Exception\)

```csharp
public static bool TryLaunch(IEnumerable<string> protocols, out Exception lastException)
```

#### Parameters

`protocols` IEnumerable<string\>

`lastException` Exception

#### Returns

 bool

