# <a id="Ink_Canvas_Windows_TimerControl"></a> Class TimerControl

Namespace: [Ink\_Canvas.Windows](Ink\_Canvas.Windows.md)  
Assembly: InkCanvasForClass.dll  

新计时器UI风格的倒计时器窗口

```csharp
public class TimerControl : UserControl
```

#### Inheritance

UserControl ← 
[TimerControl](Ink\_Canvas.Windows.TimerControl.md)

## Constructors

### <a id="Ink_Canvas_Windows_TimerControl__ctor"></a> TimerControl\(\)

```csharp
public TimerControl()
```

## Properties

### <a id="Ink_Canvas_Windows_TimerControl_IsFullscreenWindowOpen"></a> IsFullscreenWindowOpen

```csharp
public bool IsFullscreenWindowOpen { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Windows_TimerControl_IsTimerRunning"></a> IsTimerRunning

```csharp
public bool IsTimerRunning { get; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_Windows_TimerControl_GetElapsedTime"></a> GetElapsedTime\(\)

```csharp
public TimeSpan? GetElapsedTime()
```

#### Returns

 TimeSpan?

### <a id="Ink_Canvas_Windows_TimerControl_GetRemainingTime"></a> GetRemainingTime\(\)

```csharp
public TimeSpan? GetRemainingTime()
```

#### Returns

 TimeSpan?

### <a id="Ink_Canvas_Windows_TimerControl_GetTotalTimeSpan"></a> GetTotalTimeSpan\(\)

```csharp
public TimeSpan? GetTotalTimeSpan()
```

#### Returns

 TimeSpan?

### <a id="Ink_Canvas_Windows_TimerControl_RefreshTheme"></a> RefreshTheme\(\)

刷新主题

```csharp
public void RefreshTheme()
```

### <a id="Ink_Canvas_Windows_TimerControl_ResetTimerState"></a> ResetTimerState\(\)

重置计时器状态

```csharp
public void ResetTimerState()
```

### <a id="Ink_Canvas_Windows_TimerControl_StopTimer"></a> StopTimer\(\)

```csharp
public void StopTimer()
```

### <a id="Ink_Canvas_Windows_TimerControl_UpdateActivityTime"></a> UpdateActivityTime\(\)

```csharp
public void UpdateActivityTime()
```

### <a id="Ink_Canvas_Windows_TimerControl_CloseRequested"></a> CloseRequested

关闭事件 - 通知主窗口隐藏容器

```csharp
public event EventHandler CloseRequested
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Windows_TimerControl_HideMinimizedRequested"></a> HideMinimizedRequested

隐藏最小化视图事件

```csharp
public event EventHandler HideMinimizedRequested
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Windows_TimerControl_ShowMinimizedRequested"></a> ShowMinimizedRequested

显示最小化视图事件

```csharp
public event EventHandler ShowMinimizedRequested
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_Windows_TimerControl_TimerCompleted"></a> TimerCompleted

计时器完成事件

```csharp
public event EventHandler TimerCompleted
```

#### Event Type

 EventHandler

