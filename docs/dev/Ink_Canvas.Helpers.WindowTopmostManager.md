# <a id="Ink_Canvas_Helpers_WindowTopmostManager"></a> Class WindowTopmostManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

窗口置顶中央管理器。
所有窗口的置顶状态由此类统一管理，子窗口不再自行调用 Win32 API 置顶。

```csharp
public static class WindowTopmostManager
```

#### Inheritance

object ← 
[WindowTopmostManager](Ink\_Canvas.Helpers.WindowTopmostManager.md)

## Methods

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_ApplyMainWindowTopmost_Window_System_Boolean_"></a> ApplyMainWindowTopmost\(Window, bool\)

```csharp
public static void ApplyMainWindowTopmost(Window mainWindow, bool isTopmost)
```

#### Parameters

`mainWindow` Window

`isTopmost` bool

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_Initialize_Window_System_Boolean_"></a> Initialize\(Window, bool\)

```csharp
public static void Initialize(Window mainWindow, bool skipScan = false)
```

#### Parameters

`mainWindow` Window

`skipScan` bool

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_PauseTopmostMaintenance"></a> PauseTopmostMaintenance\(\)

```csharp
public static void PauseTopmostMaintenance()
```

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_RegisterWindow_Window_System_Boolean_"></a> RegisterWindow\(Window, bool\)

```csharp
public static void RegisterWindow(Window window, bool isMainWindow = false)
```

#### Parameters

`window` Window

`isMainWindow` bool

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_ResumeTopmostMaintenance_Window_"></a> ResumeTopmostMaintenance\(Window\)

```csharp
public static void ResumeTopmostMaintenance(Window mainWindow)
```

#### Parameters

`mainWindow` Window

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_Shutdown"></a> Shutdown\(\)

```csharp
public static void Shutdown()
```

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_StartTopmostMaintenance_Window_"></a> StartTopmostMaintenance\(Window\)

```csharp
public static void StartTopmostMaintenance(Window mainWindow)
```

#### Parameters

`mainWindow` Window

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_StopTopmostMaintenance"></a> StopTopmostMaintenance\(\)

```csharp
public static void StopTopmostMaintenance()
```

### <a id="Ink_Canvas_Helpers_WindowTopmostManager_UnregisterWindow_Window_"></a> UnregisterWindow\(Window\)

```csharp
public static void UnregisterWindow(Window window)
```

#### Parameters

`window` Window

