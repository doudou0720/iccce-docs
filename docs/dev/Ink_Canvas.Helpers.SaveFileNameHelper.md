# <a id="Ink_Canvas_Helpers_SaveFileNameHelper"></a> Class SaveFileNameHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

渲染保存文件名模板。支持占位符: {date} {time} {datetime} {mode} {page} {count} {type}。
当模板为空、渲染结果非法或仅含分隔符时，回退到默认时间戳命名。

```csharp
public static class SaveFileNameHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SaveFileNameHelper](Ink\_Canvas.Helpers.SaveFileNameHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_SaveFileNameHelper_Render_System_String_Ink_Canvas_Helpers_SaveFileNameContext_"></a> Render\(string, SaveFileNameContext\)

```csharp
public static string Render(string template, SaveFileNameContext ctx)
```

#### Parameters

`template` [string](https://learn.microsoft.com/dotnet/api/system.string)

`ctx` [SaveFileNameContext](Ink\_Canvas.Helpers.SaveFileNameContext.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

