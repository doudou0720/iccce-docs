# <a id="Ink_Canvas_Helpers_UIAccessDllExtractor"></a> Class UIAccessDllExtractor

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

UIAccess DLL释放器

```csharp
public static class UIAccessDllExtractor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UIAccessDllExtractor](Ink\_Canvas.Helpers.UIAccessDllExtractor.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_UIAccessDllExtractor_CleanupExtractedDlls"></a> CleanupExtractedDlls\(\)

清理释放的DLL文件（可选，在应用退出时调用）

```csharp
public static void CleanupExtractedDlls()
```

### <a id="Ink_Canvas_Helpers_UIAccessDllExtractor_ExtractUIAccessDlls"></a> ExtractUIAccessDlls\(\)

在应用启动时释放UIAccess相关DLL

```csharp
public static void ExtractUIAccessDlls()
```

