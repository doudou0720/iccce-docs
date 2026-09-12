# <a id="Ink_Canvas_Helpers_PPTROTConnectionHelper"></a> Class PPTROTConnectionHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class PPTROTConnectionHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PPTROTConnectionHelper](Ink\_Canvas.Helpers.PPTROTConnectionHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_PPTROTConnectionHelper_AreComObjectsEqual_System_Object_System_Object_"></a> AreComObjectsEqual\(object, object\)

```csharp
public static bool AreComObjectsEqual(object o1, object o2)
```

#### Parameters

`o1` [object](https://learn.microsoft.com/dotnet/api/system.object)

`o2` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTROTConnectionHelper_GetAnyActivePowerPoint_System_Object_System_Int32__System_Int32__"></a> GetAnyActivePowerPoint\(object, out int, out int\)

在系统的运行对象表（ROT）中查找并返回最合适的正在运行的 PowerPoint 应用实例。

```csharp
public static object GetAnyActivePowerPoint(object targetApp, out int bestPriority, out int targetPriority)
```

#### Parameters

`targetApp` [object](https://learn.microsoft.com/dotnet/api/system.object)

可选的目标 PowerPoint COM 对象，用于优先比较；传入 null 表示不指定目标。

`bestPriority` [int](https://learn.microsoft.com/dotnet/api/system.int32)

输出参数：返回找到的最佳实例的优先级（0 表示未找到或无活动演示）。

`targetPriority` [int](https://learn.microsoft.com/dotnet/api/system.int32)

输出参数：返回与 <code class="paramref">targetApp</code> 对应实例的优先级（如果未提供或未命中则为 0）。

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

最合适的 PowerPoint 应用对象（通常为 COM Application 实例），若未找到则返回 null。

### <a id="Ink_Canvas_Helpers_PPTROTConnectionHelper_GetSlideShowWindowsCount_Microsoft_Office_Interop_PowerPoint_Application_"></a> GetSlideShowWindowsCount\(Application\)

```csharp
public static int GetSlideShowWindowsCount(Office.Interop.PowerPoint.Application pptApp)
```

#### Parameters

`pptApp` Office.Interop.PowerPoint.Application

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_PPTROTConnectionHelper_IsSlideShowWindowActive_System_Object_"></a> IsSlideShowWindowActive\(object\)

```csharp
public static bool IsSlideShowWindowActive(object sswObj)
```

#### Parameters

`sswObj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTROTConnectionHelper_IsValidSlideShowWindow_System_Object_"></a> IsValidSlideShowWindow\(object\)

```csharp
public static bool IsValidSlideShowWindow(object pptSlideShowWindow)
```

#### Parameters

`pptSlideShowWindow` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_PPTROTConnectionHelper_SafeReleaseComObject_System_Object_"></a> SafeReleaseComObject\(object\)

```csharp
public static void SafeReleaseComObject(object comObj)
```

#### Parameters

`comObj` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Ink_Canvas_Helpers_PPTROTConnectionHelper_TryConnectViaROT_System_Boolean_"></a> TryConnectViaROT\(bool\)

```csharp
public static Office.Interop.PowerPoint.Application TryConnectViaROT(bool isSupportWPS = false)
```

#### Parameters

`isSupportWPS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 Office.Interop.PowerPoint.Application

