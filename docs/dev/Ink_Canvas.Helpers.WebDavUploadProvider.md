# <a id="Ink_Canvas_Helpers_WebDavUploadProvider"></a> Class WebDavUploadProvider

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

WebDav上传提供者

```csharp
public class WebDavUploadProvider : IUploadProvider
```

#### Inheritance

object ← 
[WebDavUploadProvider](Ink\_Canvas.Helpers.WebDavUploadProvider.md)

#### Implements

[IUploadProvider](Ink\_Canvas.Helpers.IUploadProvider.md)

## Fields

### <a id="Ink_Canvas_Helpers_WebDavUploadProvider_Queue"></a> Queue

```csharp
public static readonly WebDavUploadQueue Queue
```

#### Field Value

 [WebDavUploadQueue](Ink\_Canvas.Helpers.WebDavUploadQueue.md)

## Properties

### <a id="Ink_Canvas_Helpers_WebDavUploadProvider_IsEnabled"></a> IsEnabled

是否启用

```csharp
public bool IsEnabled { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_WebDavUploadProvider_Name"></a> Name

提供者名称

```csharp
public string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_Helpers_WebDavUploadProvider_UploadAsync_System_String_CancellationToken_"></a> UploadAsync\(string, CancellationToken\)

上传文件

```csharp
public Task<bool> UploadAsync(string filePath, CancellationToken cancellationToken = null)
```

#### Parameters

`filePath` string

文件路径

`cancellationToken` CancellationToken

取消令牌

#### Returns

 Task<bool\>

是否上传成功

