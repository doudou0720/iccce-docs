# <a id="Ink_Canvas_Helpers_WindowOverviewModel"></a> Class WindowOverviewModel

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

窗口概览模型 - 实时监控桌面所有可见窗口并计算遮挡情况

```csharp
public class WindowOverviewModel : IDisposable
```

#### Inheritance

IDisposable ← 
[WindowOverviewModel](Ink\_Canvas.Helpers.WindowOverviewModel.md)

## Constructors

### <a id="Ink_Canvas_Helpers_WindowOverviewModel__ctor"></a> WindowOverviewModel\(\)

构造函数

```csharp
public WindowOverviewModel()
```

## Properties

### <a id="Ink_Canvas_Helpers_WindowOverviewModel_Windows"></a> Windows

当前窗口列表（按Z顺序排序，最上层在前）

```csharp
public List<WindowInfo> Windows { get; }
```

#### Property Value

 List<[WindowInfo](Ink\_Canvas.Helpers.WindowInfo.md)\>

## Methods

### <a id="Ink_Canvas_Helpers_WindowOverviewModel_Dispose"></a> Dispose\(\)

释放资源

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_WindowOverviewModel_FindWindowsByProcessName_System_String_"></a> FindWindowsByProcessName\(string\)

根据进程名查找窗口

```csharp
public List<WindowInfo> FindWindowsByProcessName(string processName)
```

#### Parameters

`processName` string

进程名

#### Returns

 List<[WindowInfo](Ink\_Canvas.Helpers.WindowInfo.md)\>

匹配的窗口列表

### <a id="Ink_Canvas_Helpers_WindowOverviewModel_FindWindowsByTitle_System_String_"></a> FindWindowsByTitle\(string\)

根据窗口标题查找窗口

```csharp
public List<WindowInfo> FindWindowsByTitle(string title)
```

#### Parameters

`title` string

窗口标题（支持部分匹配）

#### Returns

 List<[WindowInfo](Ink\_Canvas.Helpers.WindowInfo.md)\>

匹配的窗口列表

### <a id="Ink_Canvas_Helpers_WindowOverviewModel_GetCoveringWindows_Ink_Canvas_Helpers_WindowRect_List_System_String__System_Double_"></a> GetCoveringWindows\(WindowRect, List<string\>, double\)

获取覆盖指定区域的所有窗口

```csharp
public List<WindowInfo> GetCoveringWindows(WindowRect area, List<string> excludeProcessNames = null, double coverageThreshold = 0.1)
```

#### Parameters

`area` [WindowRect](Ink\_Canvas.Helpers.WindowRect.md)

要检查的区域

`excludeProcessNames` List<string\>

要排除的进程名列表

`coverageThreshold` double

覆盖阈值

#### Returns

 List<[WindowInfo](Ink\_Canvas.Helpers.WindowInfo.md)\>

覆盖该区域的窗口列表（按Z顺序，最上层在前）

### <a id="Ink_Canvas_Helpers_WindowOverviewModel_GetFullScreenWindows_List_System_String__"></a> GetFullScreenWindows\(List<string\>\)

获取所有全屏窗口

```csharp
public List<WindowInfo> GetFullScreenWindows(List<string> excludeProcessNames = null)
```

#### Parameters

`excludeProcessNames` List<string\>

要排除的进程名列表

#### Returns

 List<[WindowInfo](Ink\_Canvas.Helpers.WindowInfo.md)\>

全屏窗口列表

### <a id="Ink_Canvas_Helpers_WindowOverviewModel_HasFullScreenWindow_List_System_String__"></a> HasFullScreenWindow\(List<string\>\)

检查是否有全屏窗口

```csharp
public bool HasFullScreenWindow(List<string> excludeProcessNames = null)
```

#### Parameters

`excludeProcessNames` List<string\>

要排除的进程名列表

#### Returns

 bool

如果有全屏窗口返回true

### <a id="Ink_Canvas_Helpers_WindowOverviewModel_IsAreaCovered_Ink_Canvas_Helpers_WindowRect_List_System_String__System_Double_"></a> IsAreaCovered\(WindowRect, List<string\>, double\)

检查指定区域是否被其他窗口覆盖

```csharp
public bool IsAreaCovered(WindowRect area, List<string> excludeProcessNames = null, double coverageThreshold = 0.5)
```

#### Parameters

`area` [WindowRect](Ink\_Canvas.Helpers.WindowRect.md)

要检查的区域

`excludeProcessNames` List<string\>

要排除的进程名列表（例如当前应用程序）

`coverageThreshold` double

覆盖阈值（0.0-1.0），超过此阈值认为被覆盖

#### Returns

 bool

如果被覆盖返回true

### <a id="Ink_Canvas_Helpers_WindowOverviewModel_IsAreaCoveredByFullScreenWindow_Ink_Canvas_Helpers_WindowRect_List_System_String__"></a> IsAreaCoveredByFullScreenWindow\(WindowRect, List<string\>\)

检查指定区域是否被全屏窗口覆盖

```csharp
public bool IsAreaCoveredByFullScreenWindow(WindowRect area, List<string> excludeProcessNames = null)
```

#### Parameters

`area` [WindowRect](Ink\_Canvas.Helpers.WindowRect.md)

要检查的区域

`excludeProcessNames` List<string\>

要排除的进程名列表

#### Returns

 bool

如果被全屏窗口覆盖返回true

### <a id="Ink_Canvas_Helpers_WindowOverviewModel_UpdateWindows"></a> UpdateWindows\(\)

更新窗口列表

```csharp
public void UpdateWindows()
```

### <a id="Ink_Canvas_Helpers_WindowOverviewModel_WindowsUpdated"></a> WindowsUpdated

窗口列表更新事件

```csharp
public event EventHandler<List<WindowInfo>> WindowsUpdated
```

#### Event Type

 EventHandler<List<[WindowInfo](Ink\_Canvas.Helpers.WindowInfo.md)\>\>

