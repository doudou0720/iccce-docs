# <a id="Ink_Canvas_Helpers_FloatingBarThemeMarketService"></a> Class FloatingBarThemeMarketService

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Floating-bar theme marketplace. Theme packages are downloaded outside the application assembly.

```csharp
public sealed class FloatingBarThemeMarketService
```

#### Inheritance

object ← 
[FloatingBarThemeMarketService](Ink\_Canvas.Helpers.FloatingBarThemeMarketService.md)

## Fields

### <a id="Ink_Canvas_Helpers_FloatingBarThemeMarketService_OfficialIndexUrl"></a> OfficialIndexUrl

```csharp
public const string OfficialIndexUrl
```

#### Field Value

 string

## Properties

### <a id="Ink_Canvas_Helpers_FloatingBarThemeMarketService_Entries"></a> Entries

```csharp
public List<ThemeMarketEntry> Entries { get; }
```

#### Property Value

 List<[ThemeMarketEntry](Ink\_Canvas.Helpers.ThemeMarketEntry.md)\>

## Methods

### <a id="Ink_Canvas_Helpers_FloatingBarThemeMarketService_InstallAsync_Ink_Canvas_Helpers_ThemeMarketEntry_"></a> InstallAsync\(ThemeMarketEntry\)

```csharp
public Task<bool> InstallAsync(ThemeMarketEntry entry)
```

#### Parameters

`entry` [ThemeMarketEntry](Ink\_Canvas.Helpers.ThemeMarketEntry.md)

#### Returns

 Task<bool\>

### <a id="Ink_Canvas_Helpers_FloatingBarThemeMarketService_IsInstalled_Ink_Canvas_Helpers_ThemeMarketEntry_"></a> IsInstalled\(ThemeMarketEntry\)

```csharp
public bool IsInstalled(ThemeMarketEntry entry)
```

#### Parameters

`entry` [ThemeMarketEntry](Ink\_Canvas.Helpers.ThemeMarketEntry.md)

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_FloatingBarThemeMarketService_RefreshAsync"></a> RefreshAsync\(\)

```csharp
public Task<bool> RefreshAsync()
```

#### Returns

 Task<bool\>

