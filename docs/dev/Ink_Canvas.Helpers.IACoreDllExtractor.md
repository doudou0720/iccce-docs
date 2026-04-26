# <a id="Ink_Canvas_Helpers_IACoreDllExtractor"></a> Class IACoreDllExtractor

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

IACore DLL自动释放器
在应用启动时自动释放IACore相关的DLL文件到应用程序目录

```csharp
public static class IACoreDllExtractor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IACoreDllExtractor](Ink\_Canvas.Helpers.IACoreDllExtractor.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_IACoreDllExtractor_CleanupExtractedDlls"></a> CleanupExtractedDlls\(\)

清理释放的DLL文件（可选，在应用退出时调用）

```csharp
public static void CleanupExtractedDlls()
```

### <a id="Ink_Canvas_Helpers_IACoreDllExtractor_ExtractIACoreDlls"></a> ExtractIACoreDlls\(\)

在应用启动时释放IACore相关DLL

```csharp
public static void ExtractIACoreDlls()
```

