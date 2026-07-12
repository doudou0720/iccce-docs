# <a id="Ink_Canvas_Plugins_IHotkeyService"></a> Interface IHotkeyService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

快捷键服务，供插件注册自定义全局热键。

```csharp
public interface IHotkeyService
```

## Methods

### <a id="Ink_Canvas_Plugins_IHotkeyService_IsRegistered_System_String_"></a> IsRegistered\(string\)

检查热键是否已注册。

```csharp
bool IsRegistered(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IHotkeyService_Register_System_String_System_UInt32_System_UInt32_System_Action_"></a> Register\(string, uint, uint, Action\)

注册全局热键。

```csharp
bool Register(string id, uint modifiers, uint key, Action callback)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

热键唯一标识

`modifiers` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

修饰键组合（Ctrl=2, Alt=1, Shift=4, Win=8）

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

虚拟键码（如 0x42 = B）

`callback` [Action](https://learn.microsoft.com/dotnet/api/system.action)

按下时的回调

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否注册成功

### <a id="Ink_Canvas_Plugins_IHotkeyService_Unregister_System_String_"></a> Unregister\(string\)

注销全局热键。

```csharp
bool Unregister(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

