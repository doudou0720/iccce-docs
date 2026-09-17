# <a id="Ink_Canvas_Helpers_DlassUploadProvider"></a> Class DlassUploadProvider

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Dlass上传提供者

```csharp
public class DlassUploadProvider : IUploadProvider
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DlassUploadProvider](Ink\_Canvas.Helpers.DlassUploadProvider.md)

#### Implements

[IUploadProvider](Ink\_Canvas.Helpers.IUploadProvider.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_DlassUploadProvider_Name"></a> Name

提供者名称

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Helpers_DlassUploadProvider_UploadAsync_System_String_System_Threading_CancellationToken_"></a> UploadAsync\(string, CancellationToken\)

上传文件

```csharp
public Task<bool> UploadAsync(string filePath, CancellationToken cancellationToken = default)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

文件路径

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

取消令牌

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

是否上传成功

