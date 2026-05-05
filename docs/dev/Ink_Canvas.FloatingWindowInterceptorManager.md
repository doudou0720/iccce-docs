# <a id="Ink_Canvas_FloatingWindowInterceptorManager"></a> Class FloatingWindowInterceptorManager

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

悬浮窗拦截管理器

```csharp
public class FloatingWindowInterceptorManager : IDisposable
```

#### Inheritance

IDisposable ← 
[FloatingWindowInterceptorManager](Ink\_Canvas.FloatingWindowInterceptorManager.md)

## Properties

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_IsEnabled"></a> IsEnabled

```csharp
public bool IsEnabled { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_IsRunning"></a> IsRunning

```csharp
public bool IsRunning { get; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_ApplySettings"></a> ApplySettings\(\)

应用设置

```csharp
public void ApplySettings()
```

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_GetAllRules"></a> GetAllRules\(\)

获取所有拦截规则

```csharp
public Dictionary<FloatingWindowInterceptor.InterceptType, FloatingWindowInterceptor.InterceptRule> GetAllRules()
```

#### Returns

 Dictionary<[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptType](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptType.md), [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptRule](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptRule.md)\>

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_GetInterceptRule_Ink_Canvas_Helpers_FloatingWindowInterceptor_InterceptType_"></a> GetInterceptRule\(InterceptType\)

获取拦截规则

```csharp
public FloatingWindowInterceptor.InterceptRule GetInterceptRule(FloatingWindowInterceptor.InterceptType type)
```

#### Parameters

`type` [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptType](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptType.md)

#### Returns

 [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptRule](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptRule.md)

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_GetStatistics"></a> GetStatistics\(\)

获取拦截统计信息

```csharp
public FloatingWindowInterceptorManager.InterceptStatistics GetStatistics()
```

#### Returns

 [FloatingWindowInterceptorManager](Ink\_Canvas.FloatingWindowInterceptorManager.md).[InterceptStatistics](Ink\_Canvas.FloatingWindowInterceptorManager.InterceptStatistics.md)

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_Initialize_Ink_Canvas_FloatingWindowInterceptorSettings_"></a> Initialize\(FloatingWindowInterceptorSettings\)

初始化拦截器

```csharp
public void Initialize(FloatingWindowInterceptorSettings settings)
```

#### Parameters

`settings` [FloatingWindowInterceptorSettings](Ink\_Canvas.FloatingWindowInterceptorSettings.md)

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_RestoreAllWindows"></a> RestoreAllWindows\(\)

恢复所有被拦截的窗口

```csharp
public void RestoreAllWindows()
```

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_ScanOnce"></a> ScanOnce\(\)

手动扫描一次

```csharp
public void ScanOnce()
```

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_SetInterceptRule_Ink_Canvas_Helpers_FloatingWindowInterceptor_InterceptType_System_Boolean_"></a> SetInterceptRule\(InterceptType, bool\)

设置拦截规则

```csharp
public void SetInterceptRule(FloatingWindowInterceptor.InterceptType type, bool enabled)
```

#### Parameters

`type` [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptType](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptType.md)

`enabled` bool

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_Start"></a> Start\(\)

启动拦截器

```csharp
public void Start()
```

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_Stop"></a> Stop\(\)

停止拦截器

```csharp
public void Stop()
```

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_UpdateScanInterval_System_Int32_"></a> UpdateScanInterval\(int\)

更新扫描间隔

```csharp
public void UpdateScanInterval(int intervalMs)
```

#### Parameters

`intervalMs` int

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_WindowIntercepted"></a> WindowIntercepted

```csharp
public event EventHandler<FloatingWindowInterceptor.WindowInterceptedEventArgs> WindowIntercepted
```

#### Event Type

 EventHandler<[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[WindowInterceptedEventArgs](Ink\_Canvas.Helpers.FloatingWindowInterceptor.WindowInterceptedEventArgs.md)\>

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_WindowRestored"></a> WindowRestored

```csharp
public event EventHandler<FloatingWindowInterceptor.WindowRestoredEventArgs> WindowRestored
```

#### Event Type

 EventHandler<[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[WindowRestoredEventArgs](Ink\_Canvas.Helpers.FloatingWindowInterceptor.WindowRestoredEventArgs.md)\>

