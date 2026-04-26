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

```csharp
public bool IsRunningAsAdmin { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Plugins_AppRestartService_RestartApp_System_Boolean_"></a> RestartApp\(bool\)

```csharp
public void RestartApp(bool asAdmin)
```

#### Parameters

`asAdmin` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_AppRestartService_RestartAsAdmin"></a> RestartAsAdmin\(\)

```csharp
public void RestartAsAdmin()
```

### <a id="Ink_Canvas_Plugins_AppRestartService_RestartAsNormal"></a> RestartAsNormal\(\)

```csharp
public void RestartAsNormal()
```

### <a id="Ink_Canvas_Plugins_AppRestartService_RestartWithCurrentPrivileges"></a> RestartWithCurrentPrivileges\(\)

```csharp
public void RestartWithCurrentPrivileges()
```

### <a id="Ink_Canvas_Plugins_AppRestartService_SwitchToNormalTopMostAndRestart"></a> SwitchToNormalTopMostAndRestart\(\)

```csharp
public void SwitchToNormalTopMostAndRestart()
```

### <a id="Ink_Canvas_Plugins_AppRestartService_SwitchToUIATopMostAndRestart"></a> SwitchToUIATopMostAndRestart\(\)

```csharp
public void SwitchToUIATopMostAndRestart()
```

