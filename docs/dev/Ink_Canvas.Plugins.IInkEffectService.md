# <a id="Ink_Canvas_Plugins_IInkEffectService"></a> Interface IInkEffectService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

墨迹特效服务：供插件控制宿主画布的墨迹渐变消隐动画（InkFade）。

<p>宿主画布上的墨迹按时间渐隐消失，用于演示/答题场景的自动擦除效果。</p>
<p>底层复用宿主 <code>InkFadeManager</code>；画布未初始化时调用方法可能无效，
但不会抛出异常。</p>

```csharp
public interface IInkEffectService
```

## Properties

### <a id="Ink_Canvas_Plugins_IInkEffectService_FadeSpeedMultiplier"></a> FadeSpeedMultiplier

渐隐速度倍率。

```csharp
double FadeSpeedMultiplier { get; set; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Plugins_IInkEffectService_FadeTime"></a> FadeTime

渐隐时长（毫秒）。

```csharp
int FadeTime { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Plugins_IInkEffectService_IsEnabled"></a> IsEnabled

墨迹渐隐是否启用。写入即生效。

```csharp
bool IsEnabled { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_Plugins_IInkEffectService_AddFadingStroke_Stroke_Point_Point_System_Int64_"></a> AddFadingStroke\(Stroke, Point, Point, long\)

把一条墨迹加入渐隐队列（从 <code class="paramref">startPoint</code> 画到 <code class="paramref">endPoint</code>，
持续 <code class="paramref">strokeDurationMs</code> 毫秒后渐隐消失）。

```csharp
void AddFadingStroke(Stroke stroke, Point startPoint, Point endPoint, long strokeDurationMs = null)
```

#### Parameters

`stroke` Stroke

`startPoint` Point

`endPoint` Point

`strokeDurationMs` long

### <a id="Ink_Canvas_Plugins_IInkEffectService_ClearAllFadingStrokes"></a> ClearAllFadingStrokes\(\)

清空全部渐隐墨迹。

```csharp
void ClearAllFadingStrokes()
```

### <a id="Ink_Canvas_Plugins_IInkEffectService_Disable"></a> Disable\(\)

停用墨迹渐隐。

```csharp
void Disable()
```

### <a id="Ink_Canvas_Plugins_IInkEffectService_Enable"></a> Enable\(\)

启用墨迹渐隐。

```csharp
void Enable()
```

### <a id="Ink_Canvas_Plugins_IInkEffectService_RemoveStroke_Stroke_"></a> RemoveStroke\(Stroke\)

从渐隐队列移除指定墨迹（立即停止其渐隐动画）。

```csharp
void RemoveStroke(Stroke stroke)
```

#### Parameters

`stroke` Stroke

### <a id="Ink_Canvas_Plugins_IInkEffectService_UpdateFadeSpeedMultiplier_System_Double_"></a> UpdateFadeSpeedMultiplier\(double\)

更新渐隐速度倍率。

```csharp
void UpdateFadeSpeedMultiplier(double multiplier)
```

#### Parameters

`multiplier` double

### <a id="Ink_Canvas_Plugins_IInkEffectService_UpdateFadeTime_System_Int32_"></a> UpdateFadeTime\(int\)

更新渐隐时长（毫秒）。

```csharp
void UpdateFadeTime(int fadeTime)
```

#### Parameters

`fadeTime` int

