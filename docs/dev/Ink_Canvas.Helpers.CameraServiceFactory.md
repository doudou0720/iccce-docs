# <a id="Ink_Canvas_Helpers_CameraServiceFactory"></a> Class CameraServiceFactory

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

摄像头服务工厂：根据操作系统版本选择实现。
- Win10 1607 (14393)+：使用 <xref href="Ink_Canvas.Helpers.WinRtCameraService" data-throw-if-not-resolved="false"></xref>（性能更高）
- Win7 SP1+ / Win10 1607-：使用 <xref href="Ink_Canvas.Helpers.CameraService" data-throw-if-not-resolved="false"></xref>（AForge DirectShow 兜底）

```csharp
public static class CameraServiceFactory
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CameraServiceFactory](Ink\_Canvas.Helpers.CameraServiceFactory.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Helpers_CameraServiceFactory_IsWinRtSupported"></a> IsWinRtSupported

当前系统是否支持 WinRT 摄像头路径。

```csharp
public static bool IsWinRtSupported { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Helpers_CameraServiceFactory_Create"></a> Create\(\)

创建一个新的摄像头服务实例。调用方负责 Dispose。

```csharp
public static ICameraService Create()
```

#### Returns

 [ICameraService](Ink\_Canvas.Helpers.ICameraService.md)

