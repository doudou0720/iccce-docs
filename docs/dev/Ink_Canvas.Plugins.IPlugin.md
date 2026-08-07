# <a id="Ink_Canvas_Plugins_IPlugin"></a> Interface IPlugin

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

```csharp
public interface IPlugin
```

## Properties

### <a id="Ink_Canvas_Plugins_IPlugin_Author"></a> Author

```csharp
string Author { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IPlugin_Description"></a> Description

```csharp
string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IPlugin_Id"></a> Id

```csharp
string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IPlugin_Name"></a> Name

```csharp
string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IPlugin_Order"></a> Order

```csharp
int Order { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_IPlugin_Version"></a> Version

```csharp
string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Plugins_IPlugin_GetMainView"></a> GetMainView\(\)

```csharp
object GetMainView()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Plugins_IPlugin_GetSettingsView"></a> GetSettingsView\(\)

```csharp
object GetSettingsView()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Plugins_IPlugin_Initialize_Ink_Canvas_Plugins_IPluginHost_"></a> Initialize\(IPluginHost\)

```csharp
void Initialize(IPluginHost host)
```

#### Parameters

`host` [IPluginHost](Ink\_Canvas.Plugins.IPluginHost.md)

### <a id="Ink_Canvas_Plugins_IPlugin_Shutdown"></a> Shutdown\(\)

```csharp
void Shutdown()
```

