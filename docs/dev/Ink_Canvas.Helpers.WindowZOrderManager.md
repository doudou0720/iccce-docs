# <a id="Ink_Canvas_Helpers_WindowZOrderManager"></a> Class WindowZOrderManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

窗口Z-Order管理器，用于管理窗口的层级顺序
在无焦点模式下，确保后打开的窗口能够置顶于先打开的窗口

```csharp
public static class WindowZOrderManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WindowZOrderManager](Ink\_Canvas.Helpers.WindowZOrderManager.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_BringToTop_System_Windows_Window_"></a> BringToTop\(Window\)

将窗口移到最顶层

```csharp
public static void BringToTop(Window window)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

要移到最顶层的窗口

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_CleanupInvalidWindows"></a> CleanupInvalidWindows\(\)

清理无效的窗口记录

```csharp
public static void CleanupInvalidWindows()
```

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_ForceRefreshAllWindows"></a> ForceRefreshAllWindows\(\)

强制刷新所有窗口的置顶状态

```csharp
public static void ForceRefreshAllWindows()
```

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_GetWindowCount"></a> GetWindowCount\(\)

获取当前注册的窗口数量

```csharp
public static int GetWindowCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

窗口数量

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_HasChildWindowInForeground"></a> HasChildWindowInForeground\(\)

检查是否有子窗口在前景

```csharp
public static bool HasChildWindowInForeground()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

如果有子窗口在前景返回true

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_RegisterWindow_System_Windows_Window_System_Boolean_System_Boolean_"></a> RegisterWindow\(Window, bool, bool\)

注册窗口到Z-Order管理器

```csharp
public static void RegisterWindow(Window window, bool isTopmost = false, bool isNoFocusMode = false)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

要注册的窗口

`isTopmost` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否置顶

`isNoFocusMode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否无焦点模式

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_SetWindowTopmost_System_Windows_Window_System_Boolean_"></a> SetWindowTopmost\(Window, bool\)

设置窗口为置顶状态

```csharp
public static void SetWindowTopmost(Window window, bool isTopmost)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

要置顶的窗口

`isTopmost` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否置顶

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_UnregisterWindow_System_Windows_Window_"></a> UnregisterWindow\(Window\)

从Z-Order管理器中移除窗口

```csharp
public static void UnregisterWindow(Window window)
```

#### Parameters

`window` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

要移除的窗口

