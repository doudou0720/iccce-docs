# <a id="Ink_Canvas_Helpers_WebDavUploader"></a> Class WebDavUploader

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

WebDav上传工具类

```csharp
public static class WebDavUploader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WebDavUploader](Ink\_Canvas.Helpers.WebDavUploader.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_WebDavUploader_IsWebDavEnabled"></a> IsWebDavEnabled\(\)

检查WebDAV是否已启用

```csharp
public static bool IsWebDavEnabled()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否启用

### <a id="Ink_Canvas_Helpers_WebDavUploader_UploadFileAsync_System_String_System_Threading_CancellationToken_"></a> UploadFileAsync\(string, CancellationToken\)

上传文件到WebDav服务器

```csharp
public static Task<bool> UploadFileAsync(string filePath, CancellationToken cancellationToken = default)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

文件路径

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

取消令牌

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

是否上传成功

