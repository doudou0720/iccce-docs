# <a id="Ink_Canvas_Helpers_MicroBinClient"></a> Class MicroBinClient

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

MicroBin pastebin 客户端。

MicroBin 没有 REST API，通过表单提交创建 paste：
  POST /   — multipart/form-data, 字段 "content" = 文本
  302 重定向到 paste 页面，从 Location 头获取 URL

```csharp
public class MicroBinClient
```

#### Inheritance

object ← 
[MicroBinClient](Ink\_Canvas.Helpers.MicroBinClient.md)

## Methods

### <a id="Ink_Canvas_Helpers_MicroBinClient_UploadRawAsync_System_String_System_String_"></a> UploadRawAsync\(string, string\)

上传文本到 MicroBin，返回 paste URL。

```csharp
public static Task<(string url, string error)> UploadRawAsync(string serverUrl, string content)
```

#### Parameters

`serverUrl` string

`content` string

#### Returns

 Task<\(string [url](System.ValueTuple\{System.String,System.String\}.md\#System\_ValueTuple\_System\_String\_System\_String\_\_url), string [error](System.ValueTuple\{System.String,System.String\}.md\#System\_ValueTuple\_System\_String\_System\_String\_\_error)\)\>

