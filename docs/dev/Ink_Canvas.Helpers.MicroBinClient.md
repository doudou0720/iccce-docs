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

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MicroBinClient](Ink\_Canvas.Helpers.MicroBinClient.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_MicroBinClient_UploadRawAsync_System_String_System_String_"></a> UploadRawAsync\(string, string\)

上传文本到 MicroBin，返回 paste URL。

```csharp
public static Task<(string url, string error)> UploadRawAsync(string serverUrl, string content)
```

#### Parameters

`serverUrl` [string](https://learn.microsoft.com/dotnet/api/system.string)

`content` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<\([string](https://learn.microsoft.com/dotnet/api/system.string) [url](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string\-.url), [string](https://learn.microsoft.com/dotnet/api/system.string) [error](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.string\-.error)\)\>

