# <a id="Ink_Canvas_Helpers_SaveFileNameHelper"></a> Class SaveFileNameHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

渲染保存文件名模板。支持占位符: {date} {time} {datetime} {mode} {page} {count} {type}。
当模板为空、渲染结果非法或仅含分隔符时，回退到默认时间戳命名。

```csharp
public static class SaveFileNameHelper
```

#### Inheritance

object ← 
[SaveFileNameHelper](Ink\_Canvas.Helpers.SaveFileNameHelper.md)

## Methods

### <a id="Ink_Canvas_Helpers_SaveFileNameHelper_Render_System_String_Ink_Canvas_Helpers_SaveFileNameContext_"></a> Render\(string, SaveFileNameContext\)

```csharp
public static string Render(string template, SaveFileNameContext ctx)
```

#### Parameters

`template` string

`ctx` [SaveFileNameContext](Ink\_Canvas.Helpers.SaveFileNameContext.md)

#### Returns

 string

