# <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor"></a> Class FloatingWindowInterceptor

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

悬浮窗拦截器 - 检测和隐藏指定的悬浮窗

```csharp
public class FloatingWindowInterceptor : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor__ctor"></a> FloatingWindowInterceptor\(\)

```csharp
public FloatingWindowInterceptor()
```

## Properties

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_IsRunning"></a> IsRunning

```csharp
public bool IsRunning { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_GetAllRules"></a> GetAllRules\(\)

获取所有拦截规则

```csharp
public Dictionary<FloatingWindowInterceptor.InterceptType, FloatingWindowInterceptor.InterceptRule> GetAllRules()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptType](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptType.md), [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptRule](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptRule.md)\>

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_GetInterceptRule_Ink_Canvas_Helpers_FloatingWindowInterceptor_InterceptType_"></a> GetInterceptRule\(InterceptType\)

获取拦截规则

```csharp
public FloatingWindowInterceptor.InterceptRule GetInterceptRule(FloatingWindowInterceptor.InterceptType type)
```

#### Parameters

`type` [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptType](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptType.md)

#### Returns

 [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptRule](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptRule.md)

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_GetInterceptedWindowsCount"></a> GetInterceptedWindowsCount\(\)

获取当前被拦截的窗口数量

```csharp
public int GetInterceptedWindowsCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_RestoreAllWindows"></a> RestoreAllWindows\(\)

恢复所有被拦截的窗口

```csharp
public void RestoreAllWindows()
```

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_RestoreWindow_System_IntPtr_"></a> RestoreWindow\(IntPtr\)

恢复指定窗口

```csharp
public bool RestoreWindow(IntPtr hWnd)
```

#### Parameters

`hWnd` [IntPtr](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_RestoreWindowsByType_Ink_Canvas_Helpers_FloatingWindowInterceptor_InterceptType_"></a> RestoreWindowsByType\(InterceptType\)

恢复指定类型的被拦截窗口

```csharp
public void RestoreWindowsByType(FloatingWindowInterceptor.InterceptType type)
```

#### Parameters

`type` [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptType](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptType.md)

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_ScanOnce"></a> ScanOnce\(\)

手动扫描一次

```csharp
public void ScanOnce()
```

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_SetInterceptRule_Ink_Canvas_Helpers_FloatingWindowInterceptor_InterceptType_System_Boolean_"></a> SetInterceptRule\(InterceptType, bool\)

设置拦截规则

```csharp
public void SetInterceptRule(FloatingWindowInterceptor.InterceptType type, bool enabled)
```

#### Parameters

`type` [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptType](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptType.md)

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_Start_System_Int32_"></a> Start\(int\)

启动拦截器

```csharp
public void Start(int scanIntervalMs = 5000)
```

#### Parameters

`scanIntervalMs` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_Stop"></a> Stop\(\)

停止拦截器

```csharp
public void Stop()
```

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_WindowIntercepted"></a> WindowIntercepted

```csharp
public event EventHandler<FloatingWindowInterceptor.WindowInterceptedEventArgs> WindowIntercepted
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[WindowInterceptedEventArgs](Ink\_Canvas.Helpers.FloatingWindowInterceptor.WindowInterceptedEventArgs.md)\>

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_WindowRestored"></a> WindowRestored

```csharp
public event EventHandler<FloatingWindowInterceptor.WindowRestoredEventArgs> WindowRestored
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[WindowRestoredEventArgs](Ink\_Canvas.Helpers.FloatingWindowInterceptor.WindowRestoredEventArgs.md)\>

