# <a id="Ink_Canvas_Helpers_UploadQueueHelper"></a> Class UploadQueueHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

上传队列帮助类，提供统一的队列管理功能

```csharp
public static class UploadQueueHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UploadQueueHelper](Ink\_Canvas.Helpers.UploadQueueHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_UploadQueueHelper_EnsureQueuesInitialized"></a> EnsureQueuesInitialized\(\)

确保所有队列都已初始化

```csharp
public static void EnsureQueuesInitialized()
```

### <a id="Ink_Canvas_Helpers_UploadQueueHelper_GetAllQueues"></a> GetAllQueues\(\)

获取所有注册的上传队列

```csharp
public static IReadOnlyList<BaseUploadQueue> GetAllQueues()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BaseUploadQueue](Ink\_Canvas.Helpers.BaseUploadQueue.md)\>

上传队列列表

### <a id="Ink_Canvas_Helpers_UploadQueueHelper_InitializeAllQueues"></a> InitializeAllQueues\(\)

初始化所有上传队列

```csharp
public static void InitializeAllQueues()
```

### <a id="Ink_Canvas_Helpers_UploadQueueHelper_RegisterQueue_Ink_Canvas_Helpers_BaseUploadQueue_"></a> RegisterQueue\(BaseUploadQueue\)

注册上传队列

```csharp
public static void RegisterQueue(BaseUploadQueue queue)
```

#### Parameters

`queue` [BaseUploadQueue](Ink\_Canvas.Helpers.BaseUploadQueue.md)

上传队列实例

