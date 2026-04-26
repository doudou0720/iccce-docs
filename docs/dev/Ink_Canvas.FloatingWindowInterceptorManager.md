# <a id="Ink_Canvas_FloatingWindowInterceptorManager"></a> Class FloatingWindowInterceptorManager

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

悬浮窗拦截管理器

```csharp
public class FloatingWindowInterceptorManager : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FloatingWindowInterceptorManager](Ink\_Canvas.FloatingWindowInterceptorManager.md)

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

## Properties

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_IsEnabled"></a> IsEnabled

```csharp
public bool IsEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_IsRunning"></a> IsRunning

```csharp
public bool IsRunning { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_ApplySettings"></a> ApplySettings\(\)

应用设置

```csharp
public void ApplySettings()
```

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_GetAllRules"></a> GetAllRules\(\)

获取所有拦截规则

```csharp
public Dictionary<FloatingWindowInterceptor.InterceptType, FloatingWindowInterceptor.InterceptRule> GetAllRules()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptType](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptType.md), [FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[InterceptRule](Ink\_Canvas.Helpers.FloatingWindowInterceptor.InterceptRule.md)\>

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

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`intervalMs` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_WindowIntercepted"></a> WindowIntercepted

```csharp
public event EventHandler<FloatingWindowInterceptor.WindowInterceptedEventArgs> WindowIntercepted
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[WindowInterceptedEventArgs](Ink\_Canvas.Helpers.FloatingWindowInterceptor.WindowInterceptedEventArgs.md)\>

### <a id="Ink_Canvas_FloatingWindowInterceptorManager_WindowRestored"></a> WindowRestored

```csharp
public event EventHandler<FloatingWindowInterceptor.WindowRestoredEventArgs> WindowRestored
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[FloatingWindowInterceptor](Ink\_Canvas.Helpers.FloatingWindowInterceptor.md).[WindowRestoredEventArgs](Ink\_Canvas.Helpers.FloatingWindowInterceptor.WindowRestoredEventArgs.md)\>

