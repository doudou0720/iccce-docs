# <a id="Ink_Canvas_Helpers_InkFadeManager"></a> Class InkFadeManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

墨迹渐隐管理器 - 管理墨迹的渐隐动画和状态

```csharp
public class InkFadeManager
```

#### Inheritance

object ← 
[InkFadeManager](Ink\_Canvas.Helpers.InkFadeManager.md)

## Constructors

### <a id="Ink_Canvas_Helpers_InkFadeManager__ctor_Ink_Canvas_MainWindow_"></a> InkFadeManager\(MainWindow\)

```csharp
public InkFadeManager(MainWindow mainWindow)
```

#### Parameters

`mainWindow` [MainWindow](Ink\_Canvas.MainWindow.md)

## Properties

### <a id="Ink_Canvas_Helpers_InkFadeManager_AnimationDuration"></a> AnimationDuration

```csharp
public int AnimationDuration { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_InkFadeManager_FadeSpeedMultiplier"></a> FadeSpeedMultiplier

```csharp
public double FadeSpeedMultiplier { get; set; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Helpers_InkFadeManager_FadeTime"></a> FadeTime

墨迹渐隐时间（毫秒）

```csharp
public int FadeTime { get; set; }
```

#### Property Value

 int

### <a id="Ink_Canvas_Helpers_InkFadeManager_IsEnabled"></a> IsEnabled

是否启用墨迹渐隐功能

```csharp
public bool IsEnabled { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_Helpers_InkFadeManager_AddFadingStroke_Stroke_Point_Point_System_Int64_"></a> AddFadingStroke\(Stroke, Point, Point, long\)

添加需要渐隐的墨迹

```csharp
public void AddFadingStroke(Stroke stroke, Point startPoint, Point endPoint, long strokeDurationMs = null)
```

#### Parameters

`stroke` Stroke

墨迹对象

`startPoint` Point

落笔点

`endPoint` Point

抬笔点

`strokeDurationMs` long

### <a id="Ink_Canvas_Helpers_InkFadeManager_ClearAllFadingStrokes"></a> ClearAllFadingStrokes\(\)

清除所有渐隐墨迹

```csharp
public void ClearAllFadingStrokes()
```

### <a id="Ink_Canvas_Helpers_InkFadeManager_Disable"></a> Disable\(\)

禁用墨迹渐隐功能

```csharp
public void Disable()
```

### <a id="Ink_Canvas_Helpers_InkFadeManager_Enable"></a> Enable\(\)

启用墨迹渐隐功能

```csharp
public void Enable()
```

### <a id="Ink_Canvas_Helpers_InkFadeManager_RemoveStroke_Stroke_"></a> RemoveStroke\(Stroke\)

移除墨迹

```csharp
public void RemoveStroke(Stroke stroke)
```

#### Parameters

`stroke` Stroke

要移除的墨迹

### <a id="Ink_Canvas_Helpers_InkFadeManager_UpdateFadeSpeedMultiplier_System_Double_"></a> UpdateFadeSpeedMultiplier\(double\)

```csharp
public void UpdateFadeSpeedMultiplier(double multiplier)
```

#### Parameters

`multiplier` double

### <a id="Ink_Canvas_Helpers_InkFadeManager_UpdateFadeTime_System_Int32_"></a> UpdateFadeTime\(int\)

更新渐隐时间设置

```csharp
public void UpdateFadeTime(int fadeTime)
```

#### Parameters

`fadeTime` int

新的渐隐时间（毫秒）

