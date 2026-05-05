# <a id="Ink_Canvas_Helpers_DlassApiClient"></a> Class DlassApiClient

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Dlass API 客户端，用于与服务端通信

```csharp
public class DlassApiClient : IDisposable
```

#### Inheritance

IDisposable ← 
[DlassApiClient](Ink\_Canvas.Helpers.DlassApiClient.md)

## Constructors

### <a id="Ink_Canvas_Helpers_DlassApiClient__ctor_System_String_System_String_System_String_System_String_"></a> DlassApiClient\(string, string, string, string\)

初始化 Dlass API 客户端

```csharp
public DlassApiClient(string appId, string appSecret, string baseUrl = null, string userToken = null)
```

#### Parameters

`appId` string

应用ID

`appSecret` string

应用密钥

`baseUrl` string

API基础URL，如果为空则使用默认URL

`userToken` string

用户Token，如果提供则优先使用用户token而不是App Secret

## Methods

### <a id="Ink_Canvas_Helpers_DlassApiClient_DeleteAsync_System_String_System_Boolean_CancellationToken_"></a> DeleteAsync\(string, bool, CancellationToken\)

发送DELETE请求

```csharp
public Task<bool> DeleteAsync(string endpoint, bool requireAuth = true, CancellationToken cancellationToken = null)
```

#### Parameters

`endpoint` string

API端点

`requireAuth` bool

是否需要认证

`cancellationToken` CancellationToken

取消令牌

#### Returns

 Task<bool\>

### <a id="Ink_Canvas_Helpers_DlassApiClient_Dispose"></a> Dispose\(\)

释放资源

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_DlassApiClient_GetAccessTokenAsync_CancellationToken_"></a> GetAccessTokenAsync\(CancellationToken\)

获取访问令牌（Access Token）

```csharp
public Task<string> GetAccessTokenAsync(CancellationToken cancellationToken = null)
```

#### Parameters

`cancellationToken` CancellationToken

取消令牌

#### Returns

 Task<string\>

### <a id="Ink_Canvas_Helpers_DlassApiClient_GetAsync__1_System_String_System_Boolean_CancellationToken_"></a> GetAsync<T\>\(string, bool, CancellationToken\)

发送GET请求

```csharp
public Task<T> GetAsync<T>(string endpoint, bool requireAuth = true, CancellationToken cancellationToken = null)
```

#### Parameters

`endpoint` string

API端点

`requireAuth` bool

是否需要认证

`cancellationToken` CancellationToken

取消令牌

#### Returns

 Task<T\>

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Helpers_DlassApiClient_PostAsync__1_System_String_System_Object_System_Boolean_CancellationToken_"></a> PostAsync<T\>\(string, object, bool, CancellationToken\)

发送POST请求

```csharp
public Task<T> PostAsync<T>(string endpoint, object data = null, bool requireAuth = true, CancellationToken cancellationToken = null)
```

#### Parameters

`endpoint` string

API端点

`data` object

请求数据

`requireAuth` bool

是否需要认证

`cancellationToken` CancellationToken

取消令牌

#### Returns

 Task<T\>

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Helpers_DlassApiClient_PutAsync__1_System_String_System_Object_System_Boolean_CancellationToken_"></a> PutAsync<T\>\(string, object, bool, CancellationToken\)

发送PUT请求

```csharp
public Task<T> PutAsync<T>(string endpoint, object data = null, bool requireAuth = true, CancellationToken cancellationToken = null)
```

#### Parameters

`endpoint` string

API端点

`data` object

请求数据

`requireAuth` bool

是否需要认证

`cancellationToken` CancellationToken

取消令牌

#### Returns

 Task<T\>

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Helpers_DlassApiClient_UploadNoteAsync__1_System_String_System_String_System_String_System_String_System_String_System_String_System_String_CancellationToken_"></a> UploadNoteAsync<T\>\(string, string, string, string, string, string, string, CancellationToken\)

上传笔记文件

```csharp
public Task<T> UploadNoteAsync<T>(string endpoint, string filePath, string boardId, string secretKey, string title = null, string description = null, string tags = null, CancellationToken cancellationToken = null)
```

#### Parameters

`endpoint` string

上传端点

`filePath` string

文件路径

`boardId` string

白板ID

`secretKey` string

白板密钥

`title` string

笔记标题（可选）

`description` string

笔记描述（可选）

`tags` string

笔记标签（可选）

`cancellationToken` CancellationToken

取消令牌

#### Returns

 Task<T\>

#### Type Parameters

`T` 

