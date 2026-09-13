# <a id="Ink_Canvas_Helpers_MessageBoxHelper"></a> Class MessageBoxHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

统一弹窗辅助类。
自动为弹窗定位最适合的 Owner 窗口（优先关联当前 Page/Control 所在的设置窗口或活动窗口），
防止在设置窗口置顶或最大化时，无 Owner 的弹窗被遮挡在设置窗口后方导致界面死锁。

```csharp
public static class MessageBoxHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MessageBoxHelper](Ink\_Canvas.Helpers.MessageBoxHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_MessageBoxHelper_GetDefaultOwner_DependencyObject_"></a> GetDefaultOwner\(DependencyObject\)

解析最适合作为弹窗 Owner 的 Window 实例。

```csharp
public static Window GetDefaultOwner(DependencyObject context = null)
```

#### Parameters

`context` DependencyObject

#### Returns

 Window

### <a id="Ink_Canvas_Helpers_MessageBoxHelper_Show_System_String_System_String_MessageBoxButton_MessageBoxImage_MessageBoxResult_"></a> Show\(string, string, MessageBoxButton, MessageBoxImage, MessageBoxResult\)

```csharp
public static MessageBoxResult Show(string messageBoxText, string caption = "", MessageBoxButton button = null, MessageBoxImage icon = null, MessageBoxResult defaultResult = null)
```

#### Parameters

`messageBoxText` [string](https://learn.microsoft.com/dotnet/api/system.string)

`caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

`button` MessageBoxButton

`icon` MessageBoxImage

`defaultResult` MessageBoxResult

#### Returns

 MessageBoxResult

### <a id="Ink_Canvas_Helpers_MessageBoxHelper_Show_DependencyObject_System_String_System_String_MessageBoxButton_MessageBoxImage_MessageBoxResult_"></a> Show\(DependencyObject, string, string, MessageBoxButton, MessageBoxImage, MessageBoxResult\)

```csharp
public static MessageBoxResult Show(DependencyObject context, string messageBoxText, string caption = "", MessageBoxButton button = null, MessageBoxImage icon = null, MessageBoxResult defaultResult = null)
```

#### Parameters

`context` DependencyObject

`messageBoxText` [string](https://learn.microsoft.com/dotnet/api/system.string)

`caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

`button` MessageBoxButton

`icon` MessageBoxImage

`defaultResult` MessageBoxResult

#### Returns

 MessageBoxResult

### <a id="Ink_Canvas_Helpers_MessageBoxHelper_Show_Window_System_String_System_String_MessageBoxButton_MessageBoxImage_MessageBoxResult_"></a> Show\(Window, string, string, MessageBoxButton, MessageBoxImage, MessageBoxResult\)

```csharp
public static MessageBoxResult Show(Window owner, string messageBoxText, string caption = "", MessageBoxButton button = null, MessageBoxImage icon = null, MessageBoxResult defaultResult = null)
```

#### Parameters

`owner` Window

`messageBoxText` [string](https://learn.microsoft.com/dotnet/api/system.string)

`caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

`button` MessageBoxButton

`icon` MessageBoxImage

`defaultResult` MessageBoxResult

#### Returns

 MessageBoxResult

### <a id="Ink_Canvas_Helpers_MessageBoxHelper_ShowAsync_System_String_System_String_MessageBoxButton_MessageBoxImage_MessageBoxResult_"></a> ShowAsync\(string, string, MessageBoxButton, MessageBoxImage, MessageBoxResult\)

```csharp
public static Task<MessageBoxResult> ShowAsync(string messageBoxText, string caption = "", MessageBoxButton button = null, MessageBoxImage icon = null, MessageBoxResult defaultResult = null)
```

#### Parameters

`messageBoxText` [string](https://learn.microsoft.com/dotnet/api/system.string)

`caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

`button` MessageBoxButton

`icon` MessageBoxImage

`defaultResult` MessageBoxResult

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<MessageBoxResult\>

### <a id="Ink_Canvas_Helpers_MessageBoxHelper_ShowAsync_DependencyObject_System_String_System_String_MessageBoxButton_MessageBoxImage_MessageBoxResult_"></a> ShowAsync\(DependencyObject, string, string, MessageBoxButton, MessageBoxImage, MessageBoxResult\)

```csharp
public static Task<MessageBoxResult> ShowAsync(DependencyObject context, string messageBoxText, string caption = "", MessageBoxButton button = null, MessageBoxImage icon = null, MessageBoxResult defaultResult = null)
```

#### Parameters

`context` DependencyObject

`messageBoxText` [string](https://learn.microsoft.com/dotnet/api/system.string)

`caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

`button` MessageBoxButton

`icon` MessageBoxImage

`defaultResult` MessageBoxResult

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<MessageBoxResult\>

### <a id="Ink_Canvas_Helpers_MessageBoxHelper_ShowAsync_Window_System_String_System_String_MessageBoxButton_MessageBoxImage_MessageBoxResult_"></a> ShowAsync\(Window, string, string, MessageBoxButton, MessageBoxImage, MessageBoxResult\)

```csharp
public static Task<MessageBoxResult> ShowAsync(Window owner, string messageBoxText, string caption = "", MessageBoxButton button = null, MessageBoxImage icon = null, MessageBoxResult defaultResult = null)
```

#### Parameters

`owner` Window

`messageBoxText` [string](https://learn.microsoft.com/dotnet/api/system.string)

`caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

`button` MessageBoxButton

`icon` MessageBoxImage

`defaultResult` MessageBoxResult

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<MessageBoxResult\>

### <a id="Ink_Canvas_Helpers_MessageBoxHelper_ShowAt_DependencyObject_System_Double_System_Double_System_String_System_String_MessageBoxButton_MessageBoxImage_System_Action_iNKORE_UI_WPF_Modern_Controls_MessageBox__"></a> ShowAt\(DependencyObject, double, double, string, string, MessageBoxButton, MessageBoxImage, Action<MessageBox\>\)

以指定屏幕位置（DIP）显示同步模态弹窗，返回点击结果。
位置无效（NaN/∞）时回退为居中显示。

```csharp
public static MessageBoxResult ShowAt(DependencyObject context, double screenX, double screenY, string messageBoxText, string caption = "", MessageBoxButton button = null, MessageBoxImage icon = null, Action<iNKORE.UI.WPF.Modern.Controls.MessageBox> configure = null)
```

#### Parameters

`context` DependencyObject

`screenX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`screenY` [double](https://learn.microsoft.com/dotnet/api/system.double)

`messageBoxText` [string](https://learn.microsoft.com/dotnet/api/system.string)

`caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

`button` MessageBoxButton

`icon` MessageBoxImage

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<iNKORE.UI.WPF.Modern.Controls.MessageBox\>

#### Returns

 MessageBoxResult

### <a id="Ink_Canvas_Helpers_MessageBoxHelper_ShowAtAsync_DependencyObject_System_Double_System_Double_System_String_System_String_MessageBoxButton_MessageBoxImage_System_Action_iNKORE_UI_WPF_Modern_Controls_MessageBox__"></a> ShowAtAsync\(DependencyObject, double, double, string, string, MessageBoxButton, MessageBoxImage, Action<MessageBox\>\)

以指定屏幕位置（DIP）显示异步弹窗（非阻塞调用线程，等待用户点击后返回结果）。

```csharp
public static Task<MessageBoxResult> ShowAtAsync(DependencyObject context, double screenX, double screenY, string messageBoxText, string caption = "", MessageBoxButton button = null, MessageBoxImage icon = null, Action<iNKORE.UI.WPF.Modern.Controls.MessageBox> configure = null)
```

#### Parameters

`context` DependencyObject

`screenX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`screenY` [double](https://learn.microsoft.com/dotnet/api/system.double)

`messageBoxText` [string](https://learn.microsoft.com/dotnet/api/system.string)

`caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

`button` MessageBoxButton

`icon` MessageBoxImage

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<iNKORE.UI.WPF.Modern.Controls.MessageBox\>

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<MessageBoxResult\>

### <a id="Ink_Canvas_Helpers_MessageBoxHelper_ShowAtNonBlocking_DependencyObject_System_Double_System_Double_System_String_System_String_MessageBoxButton_MessageBoxImage_System_Action_MessageBoxResult__System_Nullable_System_Double__System_Boolean_System_Action_iNKORE_UI_WPF_Modern_Controls_MessageBox__"></a> ShowAtNonBlocking\(DependencyObject, double, double, string, string, MessageBoxButton, MessageBoxImage, Action<MessageBoxResult\>, double?, bool, Action<MessageBox\>\)

以指定屏幕位置（DIP）显示非模态弹窗：不阻塞调用方、默认不抢焦点。
可通过 <code class="paramref">autoCloseSeconds</code> 设置自动关闭；
弹窗关闭时（含自动关闭、用户点击、外部关闭）以最终结果回调 <code class="paramref">onClosed</code>，
未点击按钮时结果为 MessageBoxResult.None。
返回弹窗实例，可通过其 <code>Close(MessageBoxResult)</code> 主动关闭。

```csharp
public static iNKORE.UI.WPF.Modern.Controls.MessageBox ShowAtNonBlocking(DependencyObject context, double screenX, double screenY, string messageBoxText, string caption = "", MessageBoxButton button = null, MessageBoxImage icon = null, Action<MessageBoxResult> onClosed = null, double? autoCloseSeconds = null, bool showActivated = false, Action<iNKORE.UI.WPF.Modern.Controls.MessageBox> configure = null)
```

#### Parameters

`context` DependencyObject

`screenX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`screenY` [double](https://learn.microsoft.com/dotnet/api/system.double)

`messageBoxText` [string](https://learn.microsoft.com/dotnet/api/system.string)

`caption` [string](https://learn.microsoft.com/dotnet/api/system.string)

`button` MessageBoxButton

`icon` MessageBoxImage

`onClosed` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<MessageBoxResult\>

`autoCloseSeconds` [double](https://learn.microsoft.com/dotnet/api/system.double)?

`showActivated` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<iNKORE.UI.WPF.Modern.Controls.MessageBox\>

#### Returns

 iNKORE.UI.WPF.Modern.Controls.MessageBox

### <a id="Ink_Canvas_Helpers_MessageBoxHelper_TranslateToScreen_Visual_Point_"></a> TranslateToScreen\(Visual, Point\)

将可视元素上的坐标点换算为屏幕坐标（DIP，即 Window.Left/Top 使用的单位），
供 ShowAt / ShowAtAsync / ShowAtNonBlocking 定位使用。
假定目标点与该可视元素位于同一显示器（DPI 按该元素当前所在显示器换算）。
失败时返回 NaN 点。

```csharp
public static Point TranslateToScreen(Visual visual, Point point)
```

#### Parameters

`visual` Visual

`point` Point

#### Returns

 Point

