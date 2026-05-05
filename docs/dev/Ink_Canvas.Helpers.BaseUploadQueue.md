# <a id="Ink_Canvas_Helpers_BaseUploadQueue"></a> Class BaseUploadQueue

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

通用上传队列基类

```csharp
public abstract class BaseUploadQueue : IDisposable
```

#### Inheritance

IDisposable ← 
[BaseUploadQueue](Ink\_Canvas.Helpers.BaseUploadQueue.md)

#### Derived

[DlassUploadQueue](Ink\_Canvas.Helpers.DlassUploadQueue.md), 
[WebDavUploadQueue](Ink\_Canvas.Helpers.WebDavUploadQueue.md)

## Fields

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_BATCH_SIZE"></a> BATCH\_SIZE

```csharp
protected const int BATCH_SIZE
```

#### Field Value

 int

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_MAX_RETRY_COUNT"></a> MAX\_RETRY\_COUNT

```csharp
protected const int MAX_RETRY_COUNT
```

#### Field Value

 int

### <a id="Ink_Canvas_Helpers_BaseUploadQueue__isQueueInitialized"></a> \_isQueueInitialized

是否已初始化队列

```csharp
protected bool _isQueueInitialized
```

#### Field Value

 bool

### <a id="Ink_Canvas_Helpers_BaseUploadQueue__queueProcessingLock"></a> \_queueProcessingLock

队列处理锁，防止并发处理

```csharp
protected readonly SemaphoreSlim _queueProcessingLock
```

#### Field Value

 SemaphoreSlim

### <a id="Ink_Canvas_Helpers_BaseUploadQueue__queueSaveLock"></a> \_queueSaveLock

队列保存锁，防止并发保存

```csharp
protected readonly SemaphoreSlim _queueSaveLock
```

#### Field Value

 SemaphoreSlim

### <a id="Ink_Canvas_Helpers_BaseUploadQueue__uploadQueue"></a> \_uploadQueue

上传队列

```csharp
protected readonly ConcurrentQueue<UploadQueueItem> _uploadQueue
```

#### Field Value

 ConcurrentQueue<[UploadQueueItem](Ink\_Canvas.Helpers.UploadQueueItem.md)\>

## Properties

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_AllowedExtensions"></a> AllowedExtensions

允许的文件扩展名

```csharp
protected virtual HashSet<string> AllowedExtensions { get; }
```

#### Property Value

 HashSet<string\>

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_QueueFileName"></a> QueueFileName

队列文件名

```csharp
protected abstract string QueueFileName { get; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_ClearQueueFile"></a> ClearQueueFile\(\)

清空队列文件

```csharp
protected void ClearQueueFile()
```

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_Dispose"></a> Dispose\(\)

释放资源

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_Dispose_System_Boolean_"></a> Dispose\(bool\)

释放资源

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` bool

是否手动释放

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_EnqueueFile_System_String_System_Int32_CancellationToken_"></a> EnqueueFile\(string, int, CancellationToken\)

将文件加入上传队列

```csharp
protected void EnqueueFile(string filePath, int retryCount = 0, CancellationToken cancellationToken = null)
```

#### Parameters

`filePath` string

`retryCount` int

`cancellationToken` CancellationToken

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_Finalize"></a> \~BaseUploadQueue\(\)

析构函数

```csharp
protected ~BaseUploadQueue()
```

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_GetMaxFileSize_System_String_"></a> GetMaxFileSize\(string\)

获取最大文件大小

```csharp
protected virtual long GetMaxFileSize(string extension)
```

#### Parameters

`extension` string

文件扩展名

#### Returns

 long

最大文件大小（字节）

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_GetQueueFilePath"></a> GetQueueFilePath\(\)

获取队列文件路径

```csharp
protected string GetQueueFilePath()
```

#### Returns

 string

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_InitializeQueue"></a> InitializeQueue\(\)

初始化上传队列

```csharp
public void InitializeQueue()
```

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_IsRetryableError_System_String_"></a> IsRetryableError\(string\)

判断错误是否可重试

```csharp
protected bool IsRetryableError(string filePath)
```

#### Parameters

`filePath` string

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_IsUploadEnabled"></a> IsUploadEnabled\(\)

检查上传是否启用

```csharp
protected abstract bool IsUploadEnabled()
```

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_IsValidFile_System_String_"></a> IsValidFile\(string\)

验证文件是否有效

```csharp
protected virtual bool IsValidFile(string filePath)
```

#### Parameters

`filePath` string

#### Returns

 bool

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_ProcessUploadQueueAsync_CancellationToken_"></a> ProcessUploadQueueAsync\(CancellationToken\)

处理上传队列，批量上传文件

```csharp
protected Task ProcessUploadQueueAsync(CancellationToken cancellationToken = null)
```

#### Parameters

`cancellationToken` CancellationToken

#### Returns

 Task

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_SaveQueueToFileAsync_CancellationToken_"></a> SaveQueueToFileAsync\(CancellationToken\)

保存队列到文件

```csharp
protected Task SaveQueueToFileAsync(CancellationToken cancellationToken = null)
```

#### Parameters

`cancellationToken` CancellationToken

#### Returns

 Task

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_UploadFileAsync_System_String_CancellationToken_"></a> UploadFileAsync\(string, CancellationToken\)

异步上传文件

```csharp
public Task<bool> UploadFileAsync(string filePath, CancellationToken cancellationToken = null)
```

#### Parameters

`filePath` string

`cancellationToken` CancellationToken

#### Returns

 Task<bool\>

### <a id="Ink_Canvas_Helpers_BaseUploadQueue_UploadFileInternalAsync_System_String_CancellationToken_"></a> UploadFileInternalAsync\(string, CancellationToken\)

内部上传方法，执行实际上传操作

```csharp
protected abstract Task<bool> UploadFileInternalAsync(string filePath, CancellationToken cancellationToken)
```

#### Parameters

`filePath` string

`cancellationToken` CancellationToken

#### Returns

 Task<bool\>

