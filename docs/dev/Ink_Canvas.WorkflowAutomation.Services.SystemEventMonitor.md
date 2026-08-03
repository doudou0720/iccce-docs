# <a id="Ink_Canvas_WorkflowAutomation_Services_SystemEventMonitor"></a> Class SystemEventMonitor

Namespace: [Ink\_Canvas.WorkflowAutomation.Services](Ink\_Canvas.WorkflowAutomation.Services.md)  
Assembly: InkCanvasForClass.dll  

集中式系统事件监控服务。
使用 WinEvent 钩子监听前台窗口变化，使用单一计时器监控进程状态，
替代各触发器和 RulesetService 各自轮询的方式。

```csharp
public class SystemEventMonitor : IDisposable
```

#### Inheritance

IDisposable ← 
[SystemEventMonitor](Ink\_Canvas.WorkflowAutomation.Services.SystemEventMonitor.md)

## Constructors

### <a id="Ink_Canvas_WorkflowAutomation_Services_SystemEventMonitor__ctor"></a> SystemEventMonitor\(\)

```csharp
public SystemEventMonitor()
```

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Services_SystemEventMonitor_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_WorkflowAutomation_Services_SystemEventMonitor_IsProcessRunning_System_String_"></a> IsProcessRunning\(string\)

查询指定进程是否正在运行

```csharp
public bool IsProcessRunning(string processName)
```

#### Parameters

`processName` string

#### Returns

 bool

### <a id="Ink_Canvas_WorkflowAutomation_Services_SystemEventMonitor_NotifyInternalStateChanged"></a> NotifyInternalStateChanged\(\)

通知应用内部状态已变化（批注模式、浮动栏折叠等）。
由 Action 在修改状态后调用。

```csharp
public void NotifyInternalStateChanged()
```

### <a id="Ink_Canvas_WorkflowAutomation_Services_SystemEventMonitor_RegisterProcess_System_String_"></a> RegisterProcess\(string\)

注册需要监控的进程（引用计数，同一进程名可多次注册）

```csharp
public void RegisterProcess(string processName)
```

#### Parameters

`processName` string

### <a id="Ink_Canvas_WorkflowAutomation_Services_SystemEventMonitor_Start"></a> Start\(\)

启动监控

```csharp
public void Start()
```

### <a id="Ink_Canvas_WorkflowAutomation_Services_SystemEventMonitor_Stop"></a> Stop\(\)

停止监控

```csharp
public void Stop()
```

### <a id="Ink_Canvas_WorkflowAutomation_Services_SystemEventMonitor_UnregisterProcess_System_String_"></a> UnregisterProcess\(string\)

取消注册进程监控（引用计数归零时移除）

```csharp
public void UnregisterProcess(string processName)
```

#### Parameters

`processName` string

### <a id="Ink_Canvas_WorkflowAutomation_Services_SystemEventMonitor_ForegroundWindowChanged"></a> ForegroundWindowChanged

前台窗口变化事件（窗口切换、焦点变化时触发）

```csharp
public event EventHandler ForegroundWindowChanged
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_WorkflowAutomation_Services_SystemEventMonitor_InternalStateChanged"></a> InternalStateChanged

应用内部状态变化事件（批注模式、浮动栏折叠等变化时触发）

```csharp
public event EventHandler InternalStateChanged
```

#### Event Type

 EventHandler

### <a id="Ink_Canvas_WorkflowAutomation_Services_SystemEventMonitor_ProcessChanged"></a> ProcessChanged

监控的进程状态变化事件（任何已注册进程启动或退出时触发）

```csharp
public event EventHandler ProcessChanged
```

#### Event Type

 EventHandler

