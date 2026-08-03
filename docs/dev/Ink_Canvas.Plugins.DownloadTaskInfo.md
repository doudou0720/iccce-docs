# <a id="Ink_Canvas_Plugins_DownloadTaskInfo"></a> Class DownloadTaskInfo

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

下载任务状态。

```csharp
public class DownloadTaskInfo : INotifyPropertyChanged
```

#### Inheritance

INotifyPropertyChanged ← 
[DownloadTaskInfo](Ink\_Canvas.Plugins.DownloadTaskInfo.md)

## Properties

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_CancellationToken"></a> CancellationToken

```csharp
public CancellationToken CancellationToken { get; }
```

#### Property Value

 CancellationToken

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_CancellationTokenSource"></a> CancellationTokenSource

```csharp
public CancellationTokenSource CancellationTokenSource { get; }
```

#### Property Value

 CancellationTokenSource

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_Error"></a> Error

```csharp
public string Error { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_IsCancelled"></a> IsCancelled

```csharp
public bool IsCancelled { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_IsCompleted"></a> IsCompleted

```csharp
public bool IsCompleted { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_IsDownloading"></a> IsDownloading

```csharp
public bool IsDownloading { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_Progress"></a> Progress

```csharp
public double Progress { get; set; }
```

#### Property Value

 double

## Methods

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_OnPropertyChanged_System_String_"></a> OnPropertyChanged\(string\)

```csharp
protected void OnPropertyChanged(string propertyName = null)
```

#### Parameters

`propertyName` string

### <a id="Ink_Canvas_Plugins_DownloadTaskInfo_PropertyChanged"></a> PropertyChanged

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 PropertyChangedEventHandler

