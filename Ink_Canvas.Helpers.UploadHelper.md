# <a id="Ink_Canvas_Helpers_UploadHelper"></a> Class UploadHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

上传帮助类

```csharp
public static class UploadHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UploadHelper](Ink\_Canvas.Helpers.UploadHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_UploadHelper_GetEnabledProviders"></a> GetEnabledProviders\(\)

获取所有启用的上传提供者

```csharp
public static List<IUploadProvider> GetEnabledProviders()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IUploadProvider](Ink\_Canvas.Helpers.IUploadProvider.md)\>

启用的上传提供者列表

### <a id="Ink_Canvas_Helpers_UploadHelper_GetProviders"></a> GetProviders\(\)

获取所有上传提供者

```csharp
public static List<IUploadProvider> GetProviders()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IUploadProvider](Ink\_Canvas.Helpers.IUploadProvider.md)\>

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

### <a id="Ink_Canvas_Helpers_UploadHelper_UploadFileAsync_System_String_System_Threading_CancellationToken_"></a> UploadFileAsync\(string, CancellationToken\)

上传文件到所有启用的提供者

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

是否至少有一个提供者上传成功

