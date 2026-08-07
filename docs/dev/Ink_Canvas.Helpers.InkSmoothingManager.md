# <a id="Ink_Canvas_Helpers_InkSmoothingManager"></a> Class InkSmoothingManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

统一的墨迹平滑管理器，整合异步处理和硬件加速

```csharp
public class InkSmoothingManager : IDisposable
```

#### Inheritance

IDisposable ← 
[InkSmoothingManager](Ink\_Canvas.Helpers.InkSmoothingManager.md)

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
创建的新 Stroke 只克隆 DrawingAttributes，会丢失 NativeWetInkCommittedGuid、
LaserRenderModeGuid、RealtimeVelocityBrushTipAppliedGuid 等标记——激光笔迹会因此失去
激光渲染效果，原生湿墨笔迹会失去「压感已烘焙」识别（后续可能被当普通笔画二次重写压感）。
必须在 UI 线程调用（property data 值可能是 DispatcherObject）。

```csharp
public static void CopyPropertyData(Stroke source, Stroke target)
```

#### Parameters

`source` Stroke

`target` Stroke

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_Dispose"></a> Dispose\(\)

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

 string

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

 bool

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

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_SmoothStrokeAsync_Stroke_Action_Stroke_Stroke__CancellationToken_"></a> SmoothStrokeAsync\(Stroke, Action<Stroke, Stroke\>, CancellationToken\)

平滑笔画（自动选择最佳方法）

```csharp
public Task<Stroke> SmoothStrokeAsync(Stroke originalStroke, Action<Stroke, Stroke> onCompleted = null, CancellationToken cancellationToken = null)
```

#### Parameters

`originalStroke` Stroke

`onCompleted` Action<Stroke, Stroke\>

`cancellationToken` CancellationToken

#### Returns

 Task<Stroke\>

### <a id="Ink_Canvas_Helpers_InkSmoothingManager_UpdateConfig"></a> UpdateConfig\(\)

更新配置

```csharp
public void UpdateConfig()
```

