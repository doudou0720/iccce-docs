# <a id="Ink_Canvas_Plugins_ICanvasAppearanceService"></a> Interface ICanvasAppearanceService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

Exposes presentation-neutral canvas appearance information to plugins.

```csharp
public interface ICanvasAppearanceService
```

## Methods

### <a id="Ink_Canvas_Plugins_ICanvasAppearanceService_GetContrastingForegroundColor"></a> GetContrastingForegroundColor\(\)

Returns an ARGB hex color suitable for foreground content on the current canvas background.

```csharp
string GetContrastingForegroundColor()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

