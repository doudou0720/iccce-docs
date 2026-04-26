# <a id="Ink_Canvas_Helpers_WindowInfo"></a> Class WindowInfo

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

窗口信息结构

```csharp
public class WindowInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WindowInfo](Ink\_Canvas.Helpers.WindowInfo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Helpers_WindowInfo_ClassName"></a> ClassName

```csharp
public string ClassName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_WindowInfo_Handle"></a> Handle

```csharp
public IntPtr Handle { get; set; }
```

#### Property Value

 [IntPtr](https://learn.microsoft.com/dotnet/api/system.intptr)

### <a id="Ink_Canvas_Helpers_WindowInfo_IsFullScreen"></a> IsFullScreen

```csharp
public bool IsFullScreen { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_WindowInfo_IsMaximized"></a> IsMaximized

```csharp
public bool IsMaximized { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_WindowInfo_IsMinimized"></a> IsMinimized

```csharp
public bool IsMinimized { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_WindowInfo_IsVisible"></a> IsVisible

```csharp
public bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_WindowInfo_ProcessId"></a> ProcessId

```csharp
public uint ProcessId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="Ink_Canvas_Helpers_WindowInfo_ProcessName"></a> ProcessName

```csharp
public string ProcessName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_WindowInfo_ProcessPath"></a> ProcessPath

```csharp
public string ProcessPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_WindowInfo_Rect"></a> Rect

```csharp
public WindowRect Rect { get; set; }
```

#### Property Value

 [WindowRect](Ink\_Canvas.Helpers.WindowRect.md)

### <a id="Ink_Canvas_Helpers_WindowInfo_Title"></a> Title

```csharp
public string Title { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_WindowInfo_ZOrder"></a> ZOrder

```csharp
public int ZOrder { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Helpers_WindowInfo_CoversArea_Ink_Canvas_Helpers_WindowRect_"></a> CoversArea\(WindowRect\)

计算窗口是否覆盖指定区域

```csharp
public bool CoversArea(WindowRect area)
```

#### Parameters

`area` [WindowRect](Ink\_Canvas.Helpers.WindowRect.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_WindowInfo_GetCoverageRatio_Ink_Canvas_Helpers_WindowRect_"></a> GetCoverageRatio\(WindowRect\)

计算窗口覆盖指定区域的比例

```csharp
public double GetCoverageRatio(WindowRect area)
```

#### Parameters

`area` [WindowRect](Ink\_Canvas.Helpers.WindowRect.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

