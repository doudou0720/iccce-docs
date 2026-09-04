# <a id="Ink_Canvas_Plugins_PluginVisiblePage"></a> Struct PluginVisiblePage

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

一个可见页：页索引 + 该页在背景层内占据的矩形（背景元素坐标系，DIP）。
供 <xref href="Ink_Canvas.Plugins.ICanvasCompositionService.SetVisiblePagesAsync(System.Collections.Generic.IReadOnlyList%7bInk_Canvas.Plugins.PluginVisiblePage%7d%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref> 使用。

```csharp
public struct PluginVisiblePage
```

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginVisiblePage_ContentRect"></a> ContentRect

该页在背景层内占据的矩形；用于墨迹按矩形切分。

```csharp
public Rect ContentRect { readonly get; set; }
```

#### Property Value

 [Rect](https://learn.microsoft.com/dotnet/api/system.windows.rect)

### <a id="Ink_Canvas_Plugins_PluginVisiblePage_PageIndex"></a> PageIndex

物理页索引（从 0 开始）。

```csharp
public uint PageIndex { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

