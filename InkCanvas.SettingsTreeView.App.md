# <a id="InkCanvas_SettingsTreeView_App"></a> Class App

Namespace: [InkCanvas.SettingsTreeView](InkCanvas.SettingsTreeView.md)  
Assembly: InkCanvas.SettingsTreeView.dll  

App

```csharp
public class App : Application, IQueryAmbient
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DispatcherObject](https://learn.microsoft.com/dotnet/api/system.windows.threading.dispatcherobject) ← 
[Application](https://learn.microsoft.com/dotnet/api/system.windows.application) ← 
[App](InkCanvas.SettingsTreeView.App.md)

#### Implements

[IQueryAmbient](https://learn.microsoft.com/dotnet/api/system.windows.markup.iqueryambient)

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
[Application.ThemeMode](https://learn.microsoft.com/dotnet/api/system.windows.application.thememode), 
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

## Methods

### <a id="InkCanvas_SettingsTreeView_App_InitializeComponent"></a> InitializeComponent\(\)

InitializeComponent

```csharp
public void InitializeComponent()
```

### <a id="InkCanvas_SettingsTreeView_App_Main"></a> Main\(\)

Application Entry Point.

```csharp
[STAThread]
public static void Main()
```

