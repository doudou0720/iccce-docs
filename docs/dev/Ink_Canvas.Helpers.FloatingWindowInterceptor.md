# <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor"></a> Class FloatingWindowInterceptor

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

悬浮窗拦截器 - 检测和隐藏指定的悬浮窗

```csharp
public class FloatingWindowInterceptor : IDisposable
```

#### Inheritance

IDisposable ← 
[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md)

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

 bool

## Methods

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_GetAllRules"></a> GetAllRules\(\)

获取所有拦截规则

```csharp
public Dictionary<FloatingWindowInterceptor.InterceptType, FloatingWindowInterceptor.InterceptRule> GetAllRules()
```

#### Returns

 Dictionary<[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptType](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptType.md), [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptRule](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptRule.md)\>

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

 int

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_RestoreAllWindows"></a> RestoreAllWindows\(\)

恢复所有被拦截的窗口

```csharp
public void RestoreAllWindows()
```

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_RestoreWindow_IntPtr_"></a> RestoreWindow\(IntPtr\)

恢复指定窗口

```csharp
public bool RestoreWindow(IntPtr hWnd)
```

#### Parameters

`hWnd` IntPtr

#### Returns

 bool

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

`enabled` bool

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_Start_System_Int32_"></a> Start\(int\)

启动拦截器

```csharp
public void Start(int scanIntervalMs = 5000)
```

#### Parameters

`scanIntervalMs` int

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

 EventHandler<[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[WindowInterceptedEventArgs](Ink\_Canvas.Helpers.FloatingWindowInterceptor.WindowInterceptedEventArgs.md)\>

### <a id="Ink_Canvas_Helpers_FloatingWindowInterceptor_WindowRestored"></a> WindowRestored

```csharp
public event EventHandler<FloatingWindowInterceptor.WindowRestoredEventArgs> WindowRestored
```

#### Event Type

 EventHandler<[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[WindowRestoredEventArgs](Ink\_Canvas.Helpers.FloatingWindowInterceptor.WindowRestoredEventArgs.md)\>

