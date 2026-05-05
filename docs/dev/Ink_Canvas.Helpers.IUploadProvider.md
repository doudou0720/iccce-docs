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

 bool

### <a id="Ink_Canvas_Helpers_IUploadProvider_Name"></a> Name

提供者名称

```csharp
string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_Helpers_IUploadProvider_UploadAsync_System_String_CancellationToken_"></a> UploadAsync\(string, CancellationToken\)

上传文件

```csharp
Task<bool> UploadAsync(string filePath, CancellationToken cancellationToken = null)
```

#### Parameters

`filePath` string

文件路径

`cancellationToken` CancellationToken

取消令牌

#### Returns

 Task<bool\>

是否上传成功

