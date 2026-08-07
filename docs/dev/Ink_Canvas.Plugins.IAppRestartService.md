# <a id="Ink_Canvas_Plugins_IAppRestartService"></a> Interface IAppRestartService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

```csharp
public interface IAppRestartService
```

## Properties

### <a id="Ink_Canvas_Plugins_IAppRestartService_IsRunningAsAdmin"></a> IsRunningAsAdmin

```csharp
bool IsRunningAsAdmin { get; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_Plugins_IAppRestartService_RestartApp_System_Boolean_"></a> RestartApp\(bool\)

```csharp
void RestartApp(bool asAdmin)
```

#### Parameters

`asAdmin` bool

### <a id="Ink_Canvas_Plugins_IAppRestartService_RestartAsAdmin"></a> RestartAsAdmin\(\)

```csharp
void RestartAsAdmin()
```

### <a id="Ink_Canvas_Plugins_IAppRestartService_RestartAsNormal"></a> RestartAsNormal\(\)

```csharp
void RestartAsNormal()
```

### <a id="Ink_Canvas_Plugins_IAppRestartService_RestartWithCurrentPrivileges"></a> RestartWithCurrentPrivileges\(\)

```csharp
void RestartWithCurrentPrivileges()
```

### <a id="Ink_Canvas_Plugins_IAppRestartService_SwitchToNormalTopMostAndRestart"></a> SwitchToNormalTopMostAndRestart\(\)

```csharp
void SwitchToNormalTopMostAndRestart()
```

### <a id="Ink_Canvas_Plugins_IAppRestartService_SwitchToUIATopMostAndRestart"></a> SwitchToUIATopMostAndRestart\(\)

```csharp
void SwitchToUIATopMostAndRestart()
```

