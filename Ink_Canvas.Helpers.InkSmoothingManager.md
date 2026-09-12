# <a id="Ink_Canvas_Helpers_InkSmoothingManager"></a> Class InkSmoothingManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

统一的墨迹平滑管理器，整合异步处理和硬件加速

```csharp
public class InkSmoothingManager : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InkSmoothingManager](Ink\_Canvas.Helpers.InkSmoothingManager.md)

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

### <a id="Ink_Canvas_Helpers_InkSmoothingManager__ctor_Dispatcher_"></a> InkSmoothingManager\(Dispatcher\)

```csharp
public InkSmoothingManager(Dispatcher uiDispatcher)
```

#### Parameters

`uiDispatcher` Dispatcher

## Properties

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_PerformanceMonitor"></a> PerformanceMonitor

获取性能监控器实例（供外部读取详细统计）

```csharp
public InkSmoothingPerformanceMonitor PerformanceMonitor { get; }
```

#### Property Value

 [InkSmoothingPerformanceMonitor](Ink\_Canvas.Helpers.InkSmoothingPerformanceMonitor.md)

## Methods

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_ApplyRecommendedSettings"></a> ApplyRecommendedSettings\(\)

应用推荐配置到设置

```csharp
public static void ApplyRecommendedSettings()
```

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_CancelAllTasks"></a> CancelAllTasks\(\)

取消所有正在进行的任务

```csharp
public void CancelAllTasks()
```

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_CopyPropertyData_Stroke_Stroke_"></a> CopyPropertyData\(Stroke, Stroke\)

把 <code class="paramref">source</code> 的全部 property data 复制到 <code class="paramref">target</code>。
平滑器（AsyncAdvancedBezierSmoothing / HardwareAcceleratedInkProcessor / AdvancedBezierSmoothing）
创建的新 Stroke 只克隆 DrawingAttributes，会丢失 LaserRenderModeGuid 等标记——
激光笔迹会因此失去激光渲染效果。
必须在 UI 线程调用（property data 值可能是 DispatcherObject）。

```csharp
public static void CopyPropertyData(Stroke source, Stroke target)
```

#### Parameters

`source` Stroke

`target` Stroke

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_GetDetailedStats"></a> GetDetailedStats\(\)

获取详细的墨迹纠正性能统计

```csharp
public InkSmoothingDetailedStats GetDetailedStats()
```

#### Returns

 [InkSmoothingDetailedStats](Ink\_Canvas.Helpers.InkSmoothingDetailedStats.md)

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_GetPerformanceStats"></a> GetPerformanceStats\(\)

获取性能统计信息

```csharp
public string GetPerformanceStats()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_GetRecommendedConfig"></a> GetRecommendedConfig\(\)

获取推荐的配置

```csharp
public static InkSmoothingConfig GetRecommendedConfig()
```

#### Returns

 [InkSmoothingConfig](Ink\_Canvas.Helpers.InkSmoothingConfig.md)

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_IsHardwareAccelerationSupported"></a> IsHardwareAccelerationSupported\(\)

检查系统是否支持硬件加速

```csharp
public static bool IsHardwareAccelerationSupported()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_ResetPerformanceStats"></a> ResetPerformanceStats\(\)

```csharp
public void ResetPerformanceStats()
```

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_SmoothStroke_Stroke_"></a> SmoothStroke\(Stroke\)

同步平滑笔画（用于向后兼容）

```csharp
public Stroke SmoothStroke(Stroke originalStroke)
```

#### Parameters

`originalStroke` Stroke

#### Returns

 Stroke

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_SmoothStrokeAsync_Stroke_System_Action_Stroke_Stroke__System_Threading_CancellationToken_"></a> SmoothStrokeAsync\(Stroke, Action<Stroke, Stroke\>, CancellationToken\)

平滑笔画（自动选择最佳方法）

```csharp
public Task<Stroke> SmoothStrokeAsync(Stroke originalStroke, Action<Stroke, Stroke> onCompleted = null, CancellationToken cancellationToken = default)
```

#### Parameters

`originalStroke` Stroke

`onCompleted` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<Stroke, Stroke\>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<Stroke\>

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_UpdateConfig"></a> UpdateConfig\(\)

更新配置

```csharp
public void UpdateConfig()
```

