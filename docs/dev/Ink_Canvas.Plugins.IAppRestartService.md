# <a id="Ink_Canvas_Plugins_IAppRestartService"></a> Interface IAppRestartService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

应用重启服务：供插件以指定权限/置顶模式重启宿主应用。

```csharp
public interface IAppRestartService
```

## Properties

### <a id="Ink_Canvas_Plugins_IAppRestartService_IsRunningAsAdmin"></a> IsRunningAsAdmin

当前宿主进程是否以管理员身份运行。

```csharp
bool IsRunningAsAdmin { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Plugins_IAppRestartService_RestartApp_System_Boolean_"></a> RestartApp\(bool\)

重启宿主应用。

```csharp
void RestartApp(bool asAdmin)
```

#### Parameters

`asAdmin` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true 时以管理员权限重启；false 时以普通权限重启。

### <a id="Ink_Canvas_Plugins_IAppRestartService_RestartAsAdmin"></a> RestartAsAdmin\(\)

以管理员权限重启宿主应用。

```csharp
void RestartAsAdmin()
```

### <a id="Ink_Canvas_Plugins_IAppRestartService_RestartAsNormal"></a> RestartAsNormal\(\)

以普通权限重启宿主应用。

```csharp
void RestartAsNormal()
```

### <a id="Ink_Canvas_Plugins_IAppRestartService_RestartWithCurrentPrivileges"></a> RestartWithCurrentPrivileges\(\)

以当前权限重启宿主应用。

```csharp
void RestartWithCurrentPrivileges()
```

### <a id="Ink_Canvas_Plugins_IAppRestartService_SwitchToNormalTopMostAndRestart"></a> SwitchToNormalTopMostAndRestart\(\)

切换到普通置顶模式并重启宿主应用。

```csharp
void SwitchToNormalTopMostAndRestart()
```

### <a id="Ink_Canvas_Plugins_IAppRestartService_SwitchToUIATopMostAndRestart"></a> SwitchToUIATopMostAndRestart\(\)

开启 UIA 置顶模式并重启宿主应用。

```csharp
void SwitchToUIATopMostAndRestart()
```

