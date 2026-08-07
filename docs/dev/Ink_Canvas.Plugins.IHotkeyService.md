# <a id="Ink_Canvas_Plugins_IHotkeyService"></a> Interface IHotkeyService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

快捷键服务，供插件注册自定义全局热键。

```csharp
public interface IHotkeyService
```

## Methods

### <a id="Ink_Canvas_Plugins_IHotkeyService_DisableRegistration"></a> DisableRegistration\(\)

停用宿主热键注册（所有热键暂停响应）。

```csharp
void DisableRegistration()
```

### <a id="Ink_Canvas_Plugins_IHotkeyService_EnableRegistration"></a> EnableRegistration\(\)

启用宿主热键注册（恢复响应）。

```csharp
void EnableRegistration()
```

### <a id="Ink_Canvas_Plugins_IHotkeyService_GetRegisteredHotkeys"></a> GetRegisteredHotkeys\(\)

获取宿主当前已注册的全部热键（含内置热键）的只读描述。

```csharp
IReadOnlyList<PluginHotkeyInfo> GetRegisteredHotkeys()
```

#### Returns

 IReadOnlyList<[PluginHotkeyInfo](Ink\_Canvas.Plugins.PluginHotkeyInfo.md)\>

### <a id="Ink_Canvas_Plugins_IHotkeyService_IsRegistered_System_String_"></a> IsRegistered\(string\)

检查热键是否已注册。

```csharp
bool IsRegistered(string id)
```

#### Parameters

`id` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_IHotkeyService_Register_System_String_System_UInt32_System_UInt32_System_Action_"></a> Register\(string, uint, uint, Action\)

注册全局热键。

```csharp
bool Register(string id, uint modifiers, uint key, System.Action callback)
```

#### Parameters

`id` string

热键唯一标识

`modifiers` uint

修饰键组合（Ctrl=2, Alt=1, Shift=4, Win=8）

`key` uint

虚拟键码（如 0x42 = B）

`callback` System.Action

按下时的回调

#### Returns

 bool

是否注册成功

### <a id="Ink_Canvas_Plugins_IHotkeyService_Unregister_System_String_"></a> Unregister\(string\)

注销全局热键。

```csharp
bool Unregister(string id)
```

#### Parameters

`id` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_IHotkeyService_UpdateHotkey_System_String_Key_ModifierKeys_"></a> UpdateHotkey\(string, Key, ModifierKeys\)

更新宿主内置热键的按键组合（按热键名称，如 "Undo"、"Redo"）。

```csharp
bool UpdateHotkey(string hotkeyName, Key key, ModifierKeys modifiers)
```

#### Parameters

`hotkeyName` string

`key` Key

`modifiers` ModifierKeys

#### Returns

 bool

是否更新成功。

