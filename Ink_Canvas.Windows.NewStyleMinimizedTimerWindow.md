# <a id="Ink_Canvas_Windows_NewStyleMinimizedTimerWindow"></a> Class NewStyleMinimizedTimerWindow

Namespace: [Ink\_Canvas.Windows](Ink\_Canvas.Windows.md)  
Assembly: InkCanvasForClass.dll  

最小化计时器独立窗口

```csharp
public class NewStyleMinimizedTimerWindow : Window
```

#### Inheritance

Window ← 
[NewStyleMinimizedTimerWindow](Ink\_Canvas.Windows.NewStyleMinimizedTimerWindow.md)

## Constructors

### <a id="Ink_Canvas_Windows_NewStyleMinimizedTimerWindow__ctor_System_Func_System_Nullable_System_TimeSpan___System_Func_System_Boolean__System_Action_System_Action_"></a> NewStyleMinimizedTimerWindow\(Func<TimeSpan?\>, Func<bool\>, Action, Action\)

```csharp
public NewStyleMinimizedTimerWindow(Func<TimeSpan?> remainingTime, Func<bool> shouldHide, Action restoreCallback, Action stopTimerCallback)
```

#### Parameters

`remainingTime` [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?\>

`shouldHide` [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

`restoreCallback` [Action](https://learn.microsoft.com/dotnet/api/system.action)

`stopTimerCallback` [Action](https://learn.microsoft.com/dotnet/api/system.action)

