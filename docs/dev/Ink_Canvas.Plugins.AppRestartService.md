# <a id="Ink_Canvas_Plugins_AppRestartService"></a> Class AppRestartService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class AppRestartService : IAppRestartService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AppRestartService](Ink\_Canvas.Plugins.AppRestartService.md)

#### Implements

IAppRestartService

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_AppRestartService_IsRunningAsAdmin"></a> IsRunningAsAdmin

当前宿主进程是否以管理员身份运行。

```csharp
public bool IsRunningAsAdmin { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Plugins_AppRestartService_RestartApp_System_Boolean_"></a> RestartApp\(bool\)

重启宿主应用。

```csharp
public void RestartApp(bool asAdmin)
```

#### Parameters

`asAdmin` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true 时以管理员权限重启；false 时以普通权限重启。

### <a id="Ink_Canvas_Plugins_AppRestartService_RestartAsAdmin"></a> RestartAsAdmin\(\)

以管理员权限重启宿主应用。

```csharp
public void RestartAsAdmin()
```

### <a id="Ink_Canvas_Plugins_AppRestartService_RestartAsNormal"></a> RestartAsNormal\(\)

以普通权限重启宿主应用。

```csharp
public void RestartAsNormal()
```

### <a id="Ink_Canvas_Plugins_AppRestartService_RestartWithCurrentPrivileges"></a> RestartWithCurrentPrivileges\(\)

以当前权限重启宿主应用。

```csharp
public void RestartWithCurrentPrivileges()
```

### <a id="Ink_Canvas_Plugins_AppRestartService_SwitchToNormalTopMostAndRestart"></a> SwitchToNormalTopMostAndRestart\(\)

切换到普通置顶模式并重启宿主应用。

```csharp
public void SwitchToNormalTopMostAndRestart()
```

### <a id="Ink_Canvas_Plugins_AppRestartService_SwitchToUIATopMostAndRestart"></a> SwitchToUIATopMostAndRestart\(\)

开启 UIA 置顶模式并重启宿主应用。

```csharp
public void SwitchToUIATopMostAndRestart()
```

