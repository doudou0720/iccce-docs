# <a id="Ink_Canvas_Plugins_IWhiteboardLegacyStateImporter"></a> Interface IWhiteboardLegacyStateImporter

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

Optional importer for page state written by a feature before it became a plugin.
Returning null means that no compatible legacy state exists at the supplied location.

```csharp
public interface IWhiteboardLegacyStateImporter
```

## Methods

### <a id="Ink_Canvas_Plugins_IWhiteboardLegacyStateImporter_TryImportPackagePage_System_String_System_Int32_"></a> TryImportPackagePage\(string, int\)

```csharp
string TryImportPackagePage(string extractedDirectory, int pageIndex)
```

#### Parameters

`extractedDirectory` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pageIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IWhiteboardLegacyStateImporter_TryImportPageSidecar_System_String_"></a> TryImportPageSidecar\(string\)

```csharp
string TryImportPageSidecar(string contentFilePath)
```

#### Parameters

`contentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

