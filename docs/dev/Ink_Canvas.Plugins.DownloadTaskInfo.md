# <a id="Ink_Canvas_Plugins_DownloadTaskInfo"></a> Class DownloadTaskInfo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

下载任务状态。

```csharp
public class DownloadTaskInfo : INotifyPropertyChanged
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DownloadTaskInfo](Ink\_Canvas.Plugins.DownloadTaskInfo.md)

#### Implements

[INotifyPropertyChanged](https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_CancellationToken"></a> CancellationToken

```csharp
public CancellationToken CancellationToken { get; }
```

#### Property Value

 [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_CancellationTokenSource"></a> CancellationTokenSource

```csharp
public CancellationTokenSource CancellationTokenSource { get; }
```

#### Property Value

 [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource)

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_Error"></a> Error

```csharp
public string Error { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_IsCancelled"></a> IsCancelled

```csharp
public bool IsCancelled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_IsCompleted"></a> IsCompleted

```csharp
public bool IsCompleted { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_IsDownloading"></a> IsDownloading

```csharp
public bool IsDownloading { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_Progress"></a> Progress

```csharp
public double Progress { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_OnPropertyChanged_System_String_"></a> OnPropertyChanged\(string\)

```csharp
protected void OnPropertyChanged(string propertyName = null)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_PropertyChanged"></a> PropertyChanged

Occurs when a property value changes.

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 [PropertyChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler)

