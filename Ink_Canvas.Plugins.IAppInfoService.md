# <a id="Ink_Canvas_Plugins_IAppInfoService"></a> Interface IAppInfoService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

应用信息服务：供插件读取宿主应用的基本信息。

```csharp
public interface IAppInfoService
```

## Properties

### <a id="Ink_Canvas_Plugins_IAppInfoService_IsUIAccessTopMostEnabled"></a> IsUIAccessTopMostEnabled

是否已启用 UIAccess 置顶模式。

```csharp
bool IsUIAccessTopMostEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IAppInfoService_IsUpdateInstalling"></a> IsUpdateInstalling

是否正在安装新版本（更新流程中）。

```csharp
bool IsUpdateInstalling { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IAppInfoService_RootPath"></a> RootPath

宿主安装目录路径（插件/设置/日志相对此路径）。

```csharp
string RootPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IAppInfoService_StartWithBoardMode"></a> StartWithBoardMode

本次启动是否带 --board 参数（直接进入白板模式）。

```csharp
bool StartWithBoardMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IAppInfoService_Version"></a> Version

宿主版本号，如 "1.7.18.0 (sha)"。

```csharp
string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

