# <a id="Ink_Canvas_Helpers_IACoreDllExtractor"></a> Class IACoreDllExtractor

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

IACore DLL自动释放器
在应用启动时自动释放IACore相关的DLL文件到应用程序目录

```csharp
public static class IACoreDllExtractor
```

#### Inheritance

object ← 
[IACoreDllExtractor](Ink\_Canvas.Helpers.IACoreDllExtractor.md)

## Methods

### <a id="Ink_Canvas_Helpers_IACoreDllExtractor_CleanupExtractedDlls"></a> CleanupExtractedDlls\(\)

清理释放的DLL文件（可选，在应用退出时调用）

```csharp
public static void CleanupExtractedDlls()
```

### <a id="Ink_Canvas_Helpers_IACoreDllExtractor_ExtractIACoreDllsAsync"></a> ExtractIACoreDllsAsync\(\)

在应用启动时释放IACore相关DLL

```csharp
public static Task ExtractIACoreDllsAsync()
```

#### Returns

 Task

