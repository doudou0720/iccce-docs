# <a id="Ink_Canvas_Windows_NewStyleTimerWindow"></a> Class NewStyleTimerWindow

Namespace: [Ink\_Canvas.Windows](Ink\_Canvas.Windows.md)  
Assembly: InkCanvasForClass.dll  

新计时器UI风格的倒计时器窗口

```csharp
public class NewStyleTimerWindow : Window
```

#### Inheritance

Window ← 
[NewStyleTimerWindow](Ink\_Canvas.Windows.NewStyleTimerWindow.md)

## Constructors

### <a id="Ink_Canvas_Windows_NewStyleTimerWindow__ctor"></a> NewStyleTimerWindow\(\)

```csharp
public NewStyleTimerWindow()
```

## Properties

### <a id="Ink_Canvas_Windows_NewStyleTimerWindow_IsFullscreenWindowOpen"></a> IsFullscreenWindowOpen

```csharp
public bool IsFullscreenWindowOpen { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Windows_NewStyleTimerWindow_IsTimerRunning"></a> IsTimerRunning

```csharp
public bool IsTimerRunning { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Windows_NewStyleTimerWindow_GetElapsedTime"></a> GetElapsedTime\(\)

```csharp
public TimeSpan? GetElapsedTime()
```

#### Returns

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

### <a id="Ink_Canvas_Windows_NewStyleTimerWindow_GetRemainingTime"></a> GetRemainingTime\(\)

```csharp
public TimeSpan? GetRemainingTime()
```

#### Returns

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

### <a id="Ink_Canvas_Windows_NewStyleTimerWindow_GetTotalTimeSpan"></a> GetTotalTimeSpan\(\)

```csharp
public TimeSpan? GetTotalTimeSpan()
```

#### Returns

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

### <a id="Ink_Canvas_Windows_NewStyleTimerWindow_RefreshTheme"></a> RefreshTheme\(\)

刷新主题

```csharp
public void RefreshTheme()
```

### <a id="Ink_Canvas_Windows_NewStyleTimerWindow_ResetTimerState"></a> ResetTimerState\(\)

重置计时器状态

```csharp
public void ResetTimerState()
```

### <a id="Ink_Canvas_Windows_NewStyleTimerWindow_StopTimer"></a> StopTimer\(\)

```csharp
public void StopTimer()
```

### <a id="Ink_Canvas_Windows_NewStyleTimerWindow_UpdateActivityTime"></a> UpdateActivityTime\(\)

```csharp
public void UpdateActivityTime()
```

### <a id="Ink_Canvas_Windows_NewStyleTimerWindow_TimerCompleted"></a> TimerCompleted

计时器完成事件

```csharp
public event EventHandler TimerCompleted
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

