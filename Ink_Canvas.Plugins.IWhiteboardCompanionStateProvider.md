# <a id="Ink_Canvas_Plugins_IWhiteboardCompanionStateProvider"></a> Interface IWhiteboardCompanionStateProvider

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

可选契约：把某页已捕获的插件状态导出为与宿主文档并列的兼容文件。
扩展名必须是无目录部分的复合扩展名，例如 ".feature.json"。

```csharp
public interface IWhiteboardCompanionStateProvider
```

## Properties

### <a id="Ink_Canvas_Plugins_IWhiteboardCompanionStateProvider_CompanionFileExtension"></a> CompanionFileExtension

```csharp
string CompanionFileExtension { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Plugins_IWhiteboardCompanionStateProvider_ExportCompanionState_System_String_"></a> ExportCompanionState\(string\)

```csharp
string ExportCompanionState(string state)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

