# <a id="Ink_Canvas_Helpers_IUploadProvider"></a> Interface IUploadProvider

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

上传提供者接口

```csharp
public interface IUploadProvider
```

## Properties

### <a id="Ink_Canvas_Helpers_IUploadProvider_IsEnabled"></a> IsEnabled

是否启用

```csharp
bool IsEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_IUploadProvider_Name"></a> Name

提供者名称

```csharp
string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Helpers_IUploadProvider_UploadAsync_System_String_System_Threading_CancellationToken_"></a> UploadAsync\(string, CancellationToken\)

上传文件

```csharp
Task<bool> UploadAsync(string filePath, CancellationToken cancellationToken = default)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

文件路径

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

取消令牌

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

是否上传成功

