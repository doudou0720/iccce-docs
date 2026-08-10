# <a id="Ink_Canvas_Helpers_SafeZipExtractor"></a> Class SafeZipExtractor

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class SafeZipExtractor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SafeZipExtractor](Ink\_Canvas.Helpers.SafeZipExtractor.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_SafeZipExtractor_ExtractZipSafely_System_String_System_String_System_Boolean_"></a> ExtractZipSafely\(string, string, bool\)

```csharp
public static void ExtractZipSafely(string zipFilePath, string extractPath, bool overwrite = true)
```

#### Parameters

`zipFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

ZIP 文件路径

`extractPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

解压目标目录

`overwrite` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否覆盖已存在文件

