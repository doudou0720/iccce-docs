# <a id="Ink_Canvas_Helpers_VstoRegistrationHelper"></a> Class VstoRegistrationHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

VSTO PowerPoint 插件自动注册/反注册辅助类。
优先使用 .vsto 清单加载，回退到 regasm COM 注册。

```csharp
public static class VstoRegistrationHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VstoRegistrationHelper](Ink\_Canvas.Helpers.VstoRegistrationHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_VstoRegistrationHelper_CleanupRegistry"></a> CleanupRegistry\(\)

```csharp
public static void CleanupRegistry()
```

### <a id="Ink_Canvas_Helpers_VstoRegistrationHelper_EnsureRegistered"></a> EnsureRegistered\(\)

```csharp
public static bool EnsureRegistered()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_VstoRegistrationHelper_IsRegistered"></a> IsRegistered\(\)

```csharp
public static bool IsRegistered()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_VstoRegistrationHelper_IsVstoAvailable"></a> IsVstoAvailable\(\)

检查 VSTO 插件文件是否可用（优先检查 .vsto 清单，回退到 DLL）。

```csharp
public static bool IsVstoAvailable()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_VstoRegistrationHelper_Register"></a> Register\(\)

```csharp
public static bool Register()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_VstoRegistrationHelper_Unregister"></a> Unregister\(\)

```csharp
public static bool Unregister()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

