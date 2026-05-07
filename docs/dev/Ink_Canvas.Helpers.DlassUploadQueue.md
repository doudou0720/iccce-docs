# <a id="Ink_Canvas_Helpers_DlassUploadQueue"></a> Class DlassUploadQueue

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Dlass上传队列

```csharp
public class DlassUploadQueue : BaseUploadQueue, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseUploadQueue](Ink\_Canvas.Helpers.BaseUploadQueue.md) ← 
[DlassUploadQueue](Ink\_Canvas.Helpers.DlassUploadQueue.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[BaseUploadQueue.BATCH\_SIZE](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_BATCH\_SIZE), 
[BaseUploadQueue.MAX\_RETRY\_COUNT](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_MAX\_RETRY\_COUNT), 
[BaseUploadQueue.\_uploadQueue](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_\_uploadQueue), 
[BaseUploadQueue.\_queueProcessingLock](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_\_queueProcessingLock), 
[BaseUploadQueue.\_queueSaveLock](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_\_queueSaveLock), 
[BaseUploadQueue.\_isQueueInitialized](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_\_isQueueInitialized), 
[BaseUploadQueue.QueueFileName](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_QueueFileName), 
[BaseUploadQueue.AllowedExtensions](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_AllowedExtensions), 
[BaseUploadQueue.GetQueueFilePath\(\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_GetQueueFilePath), 
[BaseUploadQueue.GetMaxFileSize\(string\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_GetMaxFileSize\_System\_String\_), 
[BaseUploadQueue.InitializeQueue\(\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_InitializeQueue), 
[BaseUploadQueue.SaveQueueToFileAsync\(CancellationToken\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_SaveQueueToFileAsync\_System\_Threading\_CancellationToken\_), 
[BaseUploadQueue.ClearQueueFile\(\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_ClearQueueFile), 
[BaseUploadQueue.EnqueueFile\(string, int, CancellationToken\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_EnqueueFile\_System\_String\_System\_Int32\_System\_Threading\_CancellationToken\_), 
[BaseUploadQueue.ProcessUploadQueueAsync\(CancellationToken\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_ProcessUploadQueueAsync\_System\_Threading\_CancellationToken\_), 
[BaseUploadQueue.IsValidFile\(string\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_IsValidFile\_System\_String\_), 
[BaseUploadQueue.IsRetryableError\(string\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_IsRetryableError\_System\_String\_), 
[BaseUploadQueue.IsUploadEnabled\(\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_IsUploadEnabled), 
[BaseUploadQueue.UploadFileInternalAsync\(string, CancellationToken\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_UploadFileInternalAsync\_System\_String\_System\_Threading\_CancellationToken\_), 
[BaseUploadQueue.UploadFileAsync\(string, CancellationToken\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_UploadFileAsync\_System\_String\_System\_Threading\_CancellationToken\_), 
[BaseUploadQueue.Dispose\(\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_Dispose), 
[BaseUploadQueue.Dispose\(bool\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_Dispose\_System\_Boolean\_), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Helpers_DlassUploadQueue_QueueFileName"></a> QueueFileName

队列文件名

```csharp
protected override string QueueFileName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Helpers_DlassUploadQueue_IsUploadEnabled"></a> IsUploadEnabled\(\)

检查上传是否启用

```csharp
protected override bool IsUploadEnabled()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_DlassUploadQueue_UploadFileInternalAsync_System_String_System_Threading_CancellationToken_"></a> UploadFileInternalAsync\(string, CancellationToken\)

内部上传方法，执行实际上传操作

```csharp
protected override Task<bool> UploadFileInternalAsync(string filePath, CancellationToken cancellationToken)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

