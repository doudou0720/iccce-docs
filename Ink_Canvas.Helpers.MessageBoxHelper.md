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

