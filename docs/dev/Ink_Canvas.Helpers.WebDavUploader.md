# <a id="Ink_Canvas_Helpers_WebDavUploader"></a> Class WebDavUploader

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

WebDav上传工具类

```csharp
public static class WebDavUploader
```

#### Inheritance

object ← 
[WebDavUploader](Ink\_Canvas.Helpers.WebDavUploader.md)

## Methods

### <a id="Ink_Canvas_Helpers_WebDavUploader_IsWebDavEnabled"></a> IsWebDavEnabled\(\)

检查WebDAV是否已启用

```csharp
public static bool IsWebDavEnabled()
```

#### Returns

 bool

是否启用

### <a id="Ink_Canvas_Helpers_WebDavUploader_UploadFileAsync_System_String_CancellationToken_"></a> UploadFileAsync\(string, CancellationToken\)

上传文件到WebDav服务器

```csharp
public static Task<bool> UploadFileAsync(string filePath, CancellationToken cancellationToken = null)
```

#### Parameters

`filePath` string

文件路径

`cancellationToken` CancellationToken

取消令牌

#### Returns

 Task<bool\>

是否上传成功

