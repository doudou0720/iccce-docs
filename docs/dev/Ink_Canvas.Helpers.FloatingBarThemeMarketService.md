# <a id="Ink_Canvas_Helpers_FloatingBarThemeMarketService"></a> Class FloatingBarThemeMarketService

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Floating-bar theme marketplace. Theme packages are downloaded outside the application assembly.

```csharp
public sealed class FloatingBarThemeMarketService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FloatingBarThemeMarketService](Ink\_Canvas.Helpers.FloatingBarThemeMarketService.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_Helpers_FloatingBarThemeMarketService_OfficialIndexUrl"></a> OfficialIndexUrl

```csharp
public const string OfficialIndexUrl = "https://github.com/InkCanvasForClass/ThemeMarket/releases/download/latest/themes.json"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Ink_Canvas_Helpers_FloatingBarThemeMarketService_Entries"></a> Entries

```csharp
public List<ThemeMarketEntry> Entries { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ThemeMarketEntry](Ink\_Canvas.Helpers.ThemeMarketEntry.md)\>

## Methods

### <a id="Ink_Canvas_Helpers_FloatingBarThemeMarketService_InstallAsync_Ink_Canvas_Helpers_ThemeMarketEntry_"></a> InstallAsync\(ThemeMarketEntry\)

```csharp
public Task<bool> InstallAsync(ThemeMarketEntry entry)
```

#### Parameters

`entry` [ThemeMarketEntry](Ink\_Canvas.Helpers.ThemeMarketEntry.md)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Ink_Canvas_Helpers_FloatingBarThemeMarketService_IsInstalled_Ink_Canvas_Helpers_ThemeMarketEntry_"></a> IsInstalled\(ThemeMarketEntry\)

```csharp
public bool IsInstalled(ThemeMarketEntry entry)
```

#### Parameters

`entry` [ThemeMarketEntry](Ink\_Canvas.Helpers.ThemeMarketEntry.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_FloatingBarThemeMarketService_RefreshAsync"></a> RefreshAsync\(\)

```csharp
public Task<bool> RefreshAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

