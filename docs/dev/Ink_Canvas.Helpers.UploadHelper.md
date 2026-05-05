# <a id="Ink_Canvas_Helpers_UploadHelper"></a> Class UploadHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

上传帮助类

```csharp
public static class UploadHelper
```

#### Inheritance

object ← 
[UploadHelper](Ink\_Canvas.Helpers.UploadHelper.md)

## Methods

### <a id="Ink_Canvas_Helpers_UploadHelper_GetEnabledProviders"></a> GetEnabledProviders\(\)

获取所有启用的上传提供者

```csharp
public static List<IUploadProvider> GetEnabledProviders()
```

#### Returns

 List<[IUploadProvider](Ink\_Canvas.Helpers.IUploadProvider.md)\>

启用的上传提供者列表

### <a id="Ink_Canvas_Helpers_UploadHelper_GetProviders"></a> GetProviders\(\)

获取所有上传提供者

```csharp
public static List<IUploadProvider> GetProviders()
```

#### Returns

 List<[IUploadProvider](Ink\_Canvas.Helpers.IUploadProvider.md)\>

上传提供者列表

### <a id="Ink_Canvas_Helpers_UploadHelper_Initialize"></a> Initialize\(\)

初始化上传帮助类

```csharp
public static void Initialize()
```

### <a id="Ink_Canvas_Helpers_UploadHelper_RegisterProvider_Ink_Canvas_Helpers_IUploadProvider_"></a> RegisterProvider\(IUploadProvider\)

注册上传提供者

```csharp
public static void RegisterProvider(IUploadProvider provider)
```

#### Parameters

`provider` [IUploadProvider](Ink\_Canvas.Helpers.IUploadProvider.md)

上传提供者

### <a id="Ink_Canvas_Helpers_UploadHelper_UploadFileAsync_System_String_CancellationToken_"></a> UploadFileAsync\(string, CancellationToken\)

上传文件到所有启用的提供者

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

是否至少有一个提供者上传成功

