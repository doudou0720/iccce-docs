# <a id="Ink_Canvas_Helpers_WebDavUploadQueue"></a> Class WebDavUploadQueue

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

WebDAV上传队列

```csharp
public class WebDavUploadQueue : BaseUploadQueue
```

#### Inheritance

IDisposable ← 
[BaseUploadQueue](Ink\_Canvas.Helpers.BaseUploadQueue.md) ← 
[WebDavUploadQueue](Ink\_Canvas.Helpers.WebDavUploadQueue.md)

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
[BaseUploadQueue.SaveQueueToFileAsync\(CancellationToken\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_SaveQueueToFileAsync\_CancellationToken\_), 
[BaseUploadQueue.ClearQueueFile\(\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_ClearQueueFile), 
[BaseUploadQueue.EnqueueFile\(string, int, CancellationToken\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_EnqueueFile\_System\_String\_System\_Int32\_CancellationToken\_), 
[BaseUploadQueue.ProcessUploadQueueAsync\(CancellationToken\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_ProcessUploadQueueAsync\_CancellationToken\_), 
[BaseUploadQueue.IsValidFile\(string\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_IsValidFile\_System\_String\_), 
[BaseUploadQueue.IsRetryableError\(string\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_IsRetryableError\_System\_String\_), 
[BaseUploadQueue.IsUploadEnabled\(\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_IsUploadEnabled), 
[BaseUploadQueue.UploadFileInternalAsync\(string, CancellationToken\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_UploadFileInternalAsync\_System\_String\_CancellationToken\_), 
[BaseUploadQueue.UploadFileAsync\(string, CancellationToken\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_UploadFileAsync\_System\_String\_CancellationToken\_), 
[BaseUploadQueue.Dispose\(\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_Dispose), 
[BaseUploadQueue.Dispose\(bool\)](Ink\_Canvas.Helpers.BaseUploadQueue.md\#Ink\_Canvas\_Helpers\_BaseUploadQueue\_Dispose\_System\_Boolean\_)

## Properties

### <a id="Ink_Canvas_Helpers_WebDavUploadQueue_QueueFileName"></a> QueueFileName

队列文件名

```csharp
protected override string QueueFileName { get; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_Helpers_WebDavUploadQueue_IsUploadEnabled"></a> IsUploadEnabled\(\)

检查上传是否启用

```csharp
protected override bool IsUploadEnabled()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_WebDavUploadQueue_UploadFileInternalAsync_System_String_CancellationToken_"></a> UploadFileInternalAsync\(string, CancellationToken\)

内部上传方法，执行实际上传操作

```csharp
protected override Task<bool> UploadFileInternalAsync(string filePath, CancellationToken cancellationToken)
```

#### Parameters

`filePath` string

`cancellationToken` CancellationToken

#### Returns

 Task<bool\>

