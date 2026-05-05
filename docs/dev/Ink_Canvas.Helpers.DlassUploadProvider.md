# <a id="Ink_Canvas_Helpers_DlassUploadProvider"></a> Class DlassUploadProvider

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Dlass上传提供者

```csharp
public class DlassUploadProvider : IUploadProvider
```

#### Inheritance

object ← 
[DlassUploadProvider](Ink\_Canvas.Helpers.DlassUploadProvider.md)

#### Implements

[IUploadProvider](Ink\_Canvas.Helpers.IUploadProvider.md)

## Fields

### <a id="Ink_Canvas_Helpers_DlassUploadProvider_Queue"></a> Queue

```csharp
public static readonly DlassUploadQueue Queue
```

#### Field Value

 [DlassUploadQueue](Ink\_Canvas.Helpers.DlassUploadQueue.md)

## Properties

### <a id="Ink_Canvas_Helpers_DlassUploadProvider_IsEnabled"></a> IsEnabled

是否启用

```csharp
public bool IsEnabled { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Helpers_DlassUploadProvider_Name"></a> Name

提供者名称

```csharp
public string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_Helpers_DlassUploadProvider_UploadAsync_System_String_CancellationToken_"></a> UploadAsync\(string, CancellationToken\)

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

