# <a id="Ink_Canvas_Helpers_WindowZOrderManager"></a> Class WindowZOrderManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

窗口Z-Order管理器，用于管理窗口的层级顺序
在无焦点模式下，确保后打开的窗口能够置顶于先打开的窗口

```csharp
public static class WindowZOrderManager
```

#### Inheritance

object ← 
[WindowZOrderManager](Ink\_Canvas.Helpers.WindowZOrderManager.md)

## Methods

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_BringToTop_Window_"></a> BringToTop\(Window\)

将窗口移到最顶层

```csharp
public static void BringToTop(Window window)
```

#### Parameters

`window` Window

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

 int

窗口数量

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_HasChildWindowInForeground"></a> HasChildWindowInForeground\(\)

检查是否有子窗口在前景

```csharp
public static bool HasChildWindowInForeground()
```

#### Returns

 bool

如果有子窗口在前景返回true

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_RegisterWindow_Window_System_Boolean_System_Boolean_"></a> RegisterWindow\(Window, bool, bool\)

注册窗口到Z-Order管理器

```csharp
public static void RegisterWindow(Window window, bool isTopmost = false, bool isNoFocusMode = false)
```

#### Parameters

`window` Window

要注册的窗口

`isTopmost` bool

是否置顶

`isNoFocusMode` bool

是否无焦点模式

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_SetWindowTopmost_Window_System_Boolean_"></a> SetWindowTopmost\(Window, bool\)

设置窗口为置顶状态

```csharp
public static void SetWindowTopmost(Window window, bool isTopmost)
```

#### Parameters

`window` Window

要置顶的窗口

`isTopmost` bool

是否置顶

### <a id="Ink_Canvas_Helpers_WindowZOrderManager_UnregisterWindow_Window_"></a> UnregisterWindow\(Window\)

从Z-Order管理器中移除窗口

```csharp
public static void UnregisterWindow(Window window)
```

#### Parameters

`window` Window

要移除的窗口

