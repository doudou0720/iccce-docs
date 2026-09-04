# <a id="Ink_Canvas_Helpers_FullScreenHelper"></a> Class FullScreenHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

用来使窗口变得全屏的辅助类
采用设置窗口位置和尺寸，确保盖住整个屏幕的方式来实现全屏
目前已知需要满足的条件是：窗口盖住整个屏幕、窗口没有WS_THICKFRAME样式、窗口不能有标题栏且最大化

```csharp
public static class FullScreenHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FullScreenHelper](Ink\_Canvas.Helpers.FullScreenHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_FullScreenHelper_EndFullScreen_Window_"></a> EndFullScreen\(Window\)

退出全屏模式
窗口会回到进入全屏模式时保存的状态
退出全屏模式后会重新启用 DWM 过渡动画

```csharp
public static void EndFullScreen(Window window)
```

#### Parameters

`window` Window

### <a id="Ink_Canvas_Helpers_FullScreenHelper_MarkFullscreenWindowTaskbarList_System_IntPtr_System_Boolean_"></a> MarkFullscreenWindowTaskbarList\(nint, bool\)

```csharp
public static void MarkFullscreenWindowTaskbarList(nint hwnd, bool isFullscreen)
```

#### Parameters

`hwnd` [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

`isFullscreen` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_FullScreenHelper_StartFullScreen_Window_"></a> StartFullScreen\(Window\)

开始进入全屏模式
进入全屏模式后，窗口可通过 API 方式（也可以用 Win + Shift + Left/Right）移动，调整大小，但会根据目标矩形寻找显示器重新调整到全屏状态。
进入全屏后，不要修改样式等窗口属性，在退出时，会恢复到进入前的状态
进入全屏模式后会禁用 DWM 过渡动画

```csharp
public static void StartFullScreen(Window window)
```

#### Parameters

`window` Window

