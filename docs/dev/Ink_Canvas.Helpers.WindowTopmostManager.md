# <a id="Ink_Canvas_Helpers_WindowTopmostManager"></a> Class WindowTopmostManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class WindowTopmostManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WindowTopmostManager](Ink\_Canvas.Helpers.WindowTopmostManager.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_ApplyMainWindowTopmost_System_Windows_Window_System_Boolean_"></a> ApplyMainWindowTopmost\(Window, bool\)

```csharp
public static void ApplyMainWindowTopmost(Window mainWindow, bool isTopmost)
```

#### Parameters

`mainWindow` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

`isTopmost` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_Initialize_System_Windows_Window_"></a> Initialize\(Window\)

```csharp
public static void Initialize(Window mainWindow)
```

#### Parameters

`mainWindow` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_PauseTopmostMaintenance"></a> PauseTopmostMaintenance\(\)

```csharp
public static void PauseTopmostMaintenance()
```

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_RegisterWindow_System_Windows_Window_System_Boolean_"></a> RegisterWindow\(Window, bool\)

```csharp
public static void RegisterWindow(Window window, bool isMainWindow = false)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

`isMainWindow` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_ResumeTopmostMaintenance_System_Windows_Window_"></a> ResumeTopmostMaintenance\(Window\)

```csharp
public static void ResumeTopmostMaintenance(Window mainWindow)
```

#### Parameters

`mainWindow` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_Shutdown"></a> Shutdown\(\)

```csharp
public static void Shutdown()
```

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_StartTopmostMaintenance_System_Windows_Window_"></a> StartTopmostMaintenance\(Window\)

```csharp
public static void StartTopmostMaintenance(Window mainWindow)
```

#### Parameters

`mainWindow` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_StopTopmostMaintenance"></a> StopTopmostMaintenance\(\)

```csharp
public static void StopTopmostMaintenance()
```

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_UnregisterWindow_System_Windows_Window_"></a> UnregisterWindow\(Window\)

```csharp
public static void UnregisterWindow(Window window)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

