# <a id="Ink_Canvas_Plugins_IFileAssociationService"></a> Interface IFileAssociationService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

文件关联服务，供插件注册自定义文件类型关联。

```csharp
public interface IFileAssociationService
```

## Methods

### <a id="Ink_Canvas_Plugins_IFileAssociationService_IsRegistered_System_String_"></a> IsRegistered\(string\)

检查文件关联是否已注册。

```csharp
bool IsRegistered(string extension)
```

#### Parameters

`extension` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IFileAssociationService_Register_System_String_System_String_System_String_System_String_"></a> Register\(string, string, string, string\)

注册文件关联（需要管理员权限）。

```csharp
bool Register(string extension, string progId, string description, string iconPath = null)
```

#### Parameters

`extension` [string](https://learn.microsoft.com/dotnet/api/system.string)

文件扩展名，如 ".icstk"

`progId` [string](https://learn.microsoft.com/dotnet/api/system.string)

程序标识符，如 "InkCanvasForClass.CE.icstk"

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

文件类型描述

`iconPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

图标路径（可选）

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否注册成功

### <a id="Ink_Canvas_Plugins_IFileAssociationService_Unregister_System_String_"></a> Unregister\(string\)

注销文件关联。

```csharp
bool Unregister(string extension)
```

#### Parameters

`extension` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

