# <a id="Ink_Canvas_Windows_PPTTimeCapsule"></a> Class PPTTimeCapsule

Namespace: [Ink\_Canvas.Windows](Ink\_Canvas.Windows.md)  
Assembly: InkCanvasForClass.dll  

PPT时间显示胶囊控件

```csharp
public class PPTTimeCapsule : UserControl, IDisposable
```

#### Inheritance

UserControl ← 
[PPTTimeCapsule](Ink\_Canvas.Windows.PPTTimeCapsule.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Constructors

### <a id="Ink_Canvas_Windows_PPTTimeCapsule__ctor"></a> PPTTimeCapsule\(\)

```csharp
public PPTTimeCapsule()
```

## Properties

### <a id="Ink_Canvas_Windows_PPTTimeCapsule_IsCountdownRunning"></a> IsCountdownRunning

获取当前倒计时状态

```csharp
public bool IsCountdownRunning { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Windows_PPTTimeCapsule_IsOvertime"></a> IsOvertime

获取是否超时

```csharp
public bool IsOvertime { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Windows_PPTTimeCapsule_ApplyDragOffset_System_Double_System_Double_"></a> ApplyDragOffset\(double, double\)

应用拖拽偏移量

```csharp
public void ApplyDragOffset(double offsetX, double offsetY)
```

#### Parameters

`offsetX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`offsetY` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Windows_PPTTimeCapsule_Dispose"></a> Dispose\(\)

实现 IDisposable

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Windows_PPTTimeCapsule_OnTimerCompleted"></a> OnTimerCompleted\(\)

处理计时器完成事件

```csharp
public void OnTimerCompleted()
```

### <a id="Ink_Canvas_Windows_PPTTimeCapsule_ResetDragOffset"></a> ResetDragOffset\(\)

重置拖拽偏移量到默认位置

```csharp
public void ResetDragOffset()
```

### <a id="Ink_Canvas_Windows_PPTTimeCapsule_SetParentControl_Ink_Canvas_Windows_NewStyleTimerWindow_"></a> SetParentControl\(NewStyleTimerWindow\)

设置父计时器控件

```csharp
public void SetParentControl(NewStyleTimerWindow parent)
```

#### Parameters

`parent` [NewStyleTimerWindow](Ink\_Canvas.Windows.NewStyleTimerWindow.md)

### <a id="Ink_Canvas_Windows_PPTTimeCapsule_StopCountdown"></a> StopCountdown\(\)

停止倒计时

```csharp
public void StopCountdown()
```

