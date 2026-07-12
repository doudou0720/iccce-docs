# <a id="Ink_Canvas_App"></a> Class App

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

Interaction logic for App.xaml

```csharp
public class App : Application, IQueryAmbient, IComponentConnector
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DispatcherObject](https://learn.microsoft.com/dotnet/api/system.windows.threading.dispatcherobject) ← 
[Application](https://learn.microsoft.com/dotnet/api/system.windows.application) ← 
[App](Ink\_Canvas.App.md)

#### Implements

[IQueryAmbient](https://learn.microsoft.com/dotnet/api/system.windows.markup.iqueryambient), 
[IComponentConnector](https://learn.microsoft.com/dotnet/api/system.windows.markup.icomponentconnector)

#### Inherited Members

[Application.FindResource\(object\)](https://learn.microsoft.com/dotnet/api/system.windows.application.findresource), 
[Application.GetContentStream\(Uri\)](https://learn.microsoft.com/dotnet/api/system.windows.application.getcontentstream), 
[Application.GetCookie\(Uri\)](https://learn.microsoft.com/dotnet/api/system.windows.application.getcookie), 
[Application.GetRemoteStream\(Uri\)](https://learn.microsoft.com/dotnet/api/system.windows.application.getremotestream), 
[Application.GetResourceStream\(Uri\)](https://learn.microsoft.com/dotnet/api/system.windows.application.getresourcestream), 
[Application.LoadComponent\(object, Uri\)](https://learn.microsoft.com/dotnet/api/system.windows.application.loadcomponent\#system\-windows\-application\-loadcomponent\(system\-object\-system\-uri\)), 
[Application.LoadComponent\(Uri\)](https://learn.microsoft.com/dotnet/api/system.windows.application.loadcomponent\#system\-windows\-application\-loadcomponent\(system\-uri\)), 
[Application.OnActivated\(EventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.application.onactivated), 
[Application.OnDeactivated\(EventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.application.ondeactivated), 
[Application.OnExit\(ExitEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.application.onexit), 
[Application.OnFragmentNavigation\(FragmentNavigationEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.application.onfragmentnavigation), 
[Application.OnLoadCompleted\(NavigationEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.application.onloadcompleted), 
[Application.OnNavigated\(NavigationEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.application.onnavigated), 
[Application.OnNavigating\(NavigatingCancelEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.application.onnavigating), 
[Application.OnNavigationFailed\(NavigationFailedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.application.onnavigationfailed), 
[Application.OnNavigationProgress\(NavigationProgressEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.application.onnavigationprogress), 
[Application.OnNavigationStopped\(NavigationEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.application.onnavigationstopped), 
[Application.OnSessionEnding\(SessionEndingCancelEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.application.onsessionending), 
[Application.OnStartup\(StartupEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.application.onstartup), 
[Application.Run\(\)](https://learn.microsoft.com/dotnet/api/system.windows.application.run\#system\-windows\-application\-run), 
[Application.Run\(Window\)](https://learn.microsoft.com/dotnet/api/system.windows.application.run\#system\-windows\-application\-run\(system\-windows\-window\)), 
[Application.SetCookie\(Uri, string\)](https://learn.microsoft.com/dotnet/api/system.windows.application.setcookie), 
[Application.Shutdown\(\)](https://learn.microsoft.com/dotnet/api/system.windows.application.shutdown\#system\-windows\-application\-shutdown), 
[Application.Shutdown\(int\)](https://learn.microsoft.com/dotnet/api/system.windows.application.shutdown\#system\-windows\-application\-shutdown\(system\-int32\)), 
[Application.TryFindResource\(object\)](https://learn.microsoft.com/dotnet/api/system.windows.application.tryfindresource), 
[Application.Current](https://learn.microsoft.com/dotnet/api/system.windows.application.current), 
[Application.MainWindow](https://learn.microsoft.com/dotnet/api/system.windows.application.mainwindow), 
[Application.Properties](https://learn.microsoft.com/dotnet/api/system.windows.application.properties), 
[Application.ResourceAssembly](https://learn.microsoft.com/dotnet/api/system.windows.application.resourceassembly), 
[Application.Resources](https://learn.microsoft.com/dotnet/api/system.windows.application.resources), 
[Application.ShutdownMode](https://learn.microsoft.com/dotnet/api/system.windows.application.shutdownmode), 
[Application.StartupUri](https://learn.microsoft.com/dotnet/api/system.windows.application.startupuri), 
[Application.Windows](https://learn.microsoft.com/dotnet/api/system.windows.application.windows), 
[Application.Activated](https://learn.microsoft.com/dotnet/api/system.windows.application.activated), 
[Application.Deactivated](https://learn.microsoft.com/dotnet/api/system.windows.application.deactivated), 
[Application.DispatcherUnhandledException](https://learn.microsoft.com/dotnet/api/system.windows.application.dispatcherunhandledexception), 
[Application.Exit](https://learn.microsoft.com/dotnet/api/system.windows.application.exit), 
[Application.FragmentNavigation](https://learn.microsoft.com/dotnet/api/system.windows.application.fragmentnavigation), 
[Application.LoadCompleted](https://learn.microsoft.com/dotnet/api/system.windows.application.loadcompleted), 
[Application.Navigated](https://learn.microsoft.com/dotnet/api/system.windows.application.navigated), 
[Application.Navigating](https://learn.microsoft.com/dotnet/api/system.windows.application.navigating), 
[Application.NavigationFailed](https://learn.microsoft.com/dotnet/api/system.windows.application.navigationfailed), 
[Application.NavigationProgress](https://learn.microsoft.com/dotnet/api/system.windows.application.navigationprogress), 
[Application.NavigationStopped](https://learn.microsoft.com/dotnet/api/system.windows.application.navigationstopped), 
[Application.SessionEnding](https://learn.microsoft.com/dotnet/api/system.windows.application.sessionending), 
[Application.Startup](https://learn.microsoft.com/dotnet/api/system.windows.application.startup), 
[DispatcherObject.Dispatcher](https://learn.microsoft.com/dotnet/api/system.windows.threading.dispatcherobject.dispatcher), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_App_IsOobeShowing"></a> IsOobeShowing

```csharp
public static bool IsOobeShowing
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_App_IsUIAccessTopMostEnabled"></a> IsUIAccessTopMostEnabled

```csharp
public static bool IsUIAccessTopMostEnabled
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_App_IsUpdateInstalling"></a> IsUpdateInstalling

```csharp
public static bool IsUpdateInstalling
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_App_RootPath"></a> RootPath

```csharp
public static string RootPath
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_App_StartArgs"></a> StartArgs

```csharp
public static string[] StartArgs
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="Ink_Canvas_App_StartWithBoardMode"></a> StartWithBoardMode

```csharp
public static bool StartWithBoardMode
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_App_StartWithShowMode"></a> StartWithShowMode

```csharp
public static bool StartWithShowMode
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_App_watchdogProcess"></a> watchdogProcess

```csharp
public static Process watchdogProcess
```

#### Field Value

 [Process](https://learn.microsoft.com/dotnet/api/system.diagnostics.process)

## Properties

### <a id="Ink_Canvas_App_IsFastStartupEnabled"></a> IsFastStartupEnabled

```csharp
public static bool IsFastStartupEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_App_CloseSplashScreen"></a> CloseSplashScreen\(\)

```csharp
public static void CloseSplashScreen()
```

### <a id="Ink_Canvas_App_InitializeComponent"></a> InitializeComponent\(\)

InitializeComponent

```csharp
public void InitializeComponent()
```

### <a id="Ink_Canvas_App_Main"></a> Main\(\)

Application Entry Point.

```csharp
[STAThread]
public static void Main()
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

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_App_SetSplashProgress_System_Int32_"></a> SetSplashProgress\(int\)

```csharp
public static void SetSplashProgress(int progress)
```

#### Parameters

`progress` [int](https://learn.microsoft.com/dotnet/api/system.int32)

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

