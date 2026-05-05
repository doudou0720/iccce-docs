# <a id="Ink_Canvas_App"></a> Class App

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

Interaction logic for App.xaml

```csharp
public class App : System.Windows.Application, System.Windows.Application
```

#### Inheritance

System.Windows.Application ← 
[App](Ink\_Canvas.App.md)

#### Implements

System.Windows.Application

## Constructors

### <a id="Ink_Canvas_App__ctor"></a> App\(\)

```csharp
public App()
```

## Fields

### <a id="Ink_Canvas_App_CrashAction"></a> CrashAction

```csharp
public static App.CrashActionType CrashAction
```

#### Field Value

 [App](Ink\_Canvas.App.md).[CrashActionType](Ink\_Canvas.App.CrashActionType.md)

### <a id="Ink_Canvas_App_IsAppExitByUser"></a> IsAppExitByUser

```csharp
public static bool IsAppExitByUser
```

#### Field Value

 bool

### <a id="Ink_Canvas_App_IsOobeShowing"></a> IsOobeShowing

```csharp
public static bool IsOobeShowing
```

#### Field Value

 bool

### <a id="Ink_Canvas_App_IsUIAccessTopMostEnabled"></a> IsUIAccessTopMostEnabled

```csharp
public static bool IsUIAccessTopMostEnabled
```

#### Field Value

 bool

### <a id="Ink_Canvas_App_IsUpdateInstalling"></a> IsUpdateInstalling

```csharp
public static bool IsUpdateInstalling
```

#### Field Value

 bool

### <a id="Ink_Canvas_App_RootPath"></a> RootPath

```csharp
public static string RootPath
```

#### Field Value

 string

### <a id="Ink_Canvas_App_StartArgs"></a> StartArgs

```csharp
public static string[] StartArgs
```

#### Field Value

 string\[\]

### <a id="Ink_Canvas_App_StartWithBoardMode"></a> StartWithBoardMode

```csharp
public static bool StartWithBoardMode
```

#### Field Value

 bool

### <a id="Ink_Canvas_App_StartWithShowMode"></a> StartWithShowMode

```csharp
public static bool StartWithShowMode
```

#### Field Value

 bool

### <a id="Ink_Canvas_App_watchdogProcess"></a> watchdogProcess

```csharp
public static Process watchdogProcess
```

#### Field Value

 Process

## Methods

### <a id="Ink_Canvas_App_CloseSplashScreen"></a> CloseSplashScreen\(\)

```csharp
public static void CloseSplashScreen()
```

### <a id="Ink_Canvas_App_ReleaseMutexForRestart"></a> ReleaseMutexForRestart\(\)

```csharp
public void ReleaseMutexForRestart()
```

### <a id="Ink_Canvas_App_RunWatchdogIfNeeded"></a> RunWatchdogIfNeeded\(\)

作为守护进程监视指定的主进程，并在主进程异常退出时根据配置执行重启或退出操作。

```csharp
public static void RunWatchdogIfNeeded()
```

#### Remarks

该方法期望命令行参数格式为："--watchdog &lt;pid&gt; &lt;exitSignalFile&gt;"（args[1..3]）。
- 每 2 秒检查一次指定的主进程是否仍在运行；同时检测退出信号文件，若存在则删除该文件并以代码 0 退出守护进程。  
- 当主进程退出时，会同步崩溃处理设置（SyncCrashActionFromSettings）。若启用了 UIA 顶层访问（IsUIAccessTopMostEnabled），守护进程直接退出。  
- 若崩溃动作为 SilentRestart，则增加启动计数并：当连续重启计数达到 5 次及以上时弹出错误对话框、重置计数并以代码 1 退出；否则启动新的主进程实例。  
方法对内部异常静默处理，并在完成后确保进程退出。

### <a id="Ink_Canvas_App_SetSplashMessage_System_String_"></a> SetSplashMessage\(string\)

```csharp
public static void SetSplashMessage(string message)
```

#### Parameters

`message` string

### <a id="Ink_Canvas_App_SetSplashProgress_System_Int32_"></a> SetSplashProgress\(int\)

```csharp
public static void SetSplashProgress(int progress)
```

#### Parameters

`progress` int

### <a id="Ink_Canvas_App_ShowSplashScreen"></a> ShowSplashScreen\(\)

```csharp
public static void ShowSplashScreen()
```

### <a id="Ink_Canvas_App_StartWatchdogIfNeeded"></a> StartWatchdogIfNeeded\(\)

```csharp
public static void StartWatchdogIfNeeded()
```

### <a id="Ink_Canvas_App_SyncCrashActionFromSettings"></a> SyncCrashActionFromSettings\(\)

```csharp
public static void SyncCrashActionFromSettings()
```

