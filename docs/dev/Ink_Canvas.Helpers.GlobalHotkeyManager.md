# <a id="Ink_Canvas_Helpers_GlobalHotkeyManager"></a> Class GlobalHotkeyManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

全局快捷键管理器 - 使用NHotkey库实现全局快捷键功能

```csharp
public class GlobalHotkeyManager : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GlobalHotkeyManager](Ink\_Canvas.Helpers.GlobalHotkeyManager.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager__ctor_Ink_Canvas_MainWindow_"></a> GlobalHotkeyManager\(MainWindow\)

```csharp
public GlobalHotkeyManager(MainWindow mainWindow)
```

#### Parameters

`mainWindow` [MainWindow](Ink\_Canvas.MainWindow.md)

## Methods

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_DisableHotkeyRegistration"></a> DisableHotkeyRegistration\(\)

禁用快捷键注册功能
调用此方法后，快捷键将被注销

```csharp
public void DisableHotkeyRegistration()
```

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_DisableScreenSpecificHotkeys"></a> DisableScreenSpecificHotkeys\(\)

禁用基于屏幕的热键注册

```csharp
public void DisableScreenSpecificHotkeys()
```

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_EnableHotkeyRegistration"></a> EnableHotkeyRegistration\(\)

启用快捷键注册功能
调用此方法后，快捷键将被允许注册

```csharp
public void EnableHotkeyRegistration()
```

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_EnableScreenSpecificHotkeys"></a> EnableScreenSpecificHotkeys\(\)

启用基于屏幕的热键注册

```csharp
public void EnableScreenSpecificHotkeys()
```

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_GetCurrentScreenInfo"></a> GetCurrentScreenInfo\(\)

获取当前屏幕信息

```csharp
public string GetCurrentScreenInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

当前屏幕信息

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_GetHotkeysFromConfigFile"></a> GetHotkeysFromConfigFile\(\)

获取配置文件中的快捷键信息（不注册，仅用于显示）

```csharp
public List<GlobalHotkeyManager.HotkeyInfo> GetHotkeysFromConfigFile()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GlobalHotkeyManager](Ink\_Canvas.Helpers.GlobalHotkeyManager.md).[HotkeyInfo](Ink\_Canvas.Helpers.GlobalHotkeyManager.HotkeyInfo.md)\>

配置文件中的快捷键列表

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_GetRegisteredHotkeys"></a> GetRegisteredHotkeys\(\)

获取已注册的快捷键列表

```csharp
public List<GlobalHotkeyManager.HotkeyInfo> GetRegisteredHotkeys()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GlobalHotkeyManager](Ink\_Canvas.Helpers.GlobalHotkeyManager.md).[HotkeyInfo](Ink\_Canvas.Helpers.GlobalHotkeyManager.HotkeyInfo.md)\>

快捷键信息列表

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_IsHotkeyRegistered_System_String_"></a> IsHotkeyRegistered\(string\)

检查快捷键是否已注册

```csharp
public bool IsHotkeyRegistered(string hotkeyName)
```

#### Parameters

`hotkeyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

快捷键名称

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否已注册

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_IsScreenSpecificHotkeysEnabled"></a> IsScreenSpecificHotkeysEnabled\(\)

检查是否启用了基于屏幕的热键注册

```csharp
public bool IsScreenSpecificHotkeysEnabled()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否启用

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_LoadHotkeysFromSettings"></a> LoadHotkeysFromSettings\(\)

从配置文件加载快捷键

```csharp
public void LoadHotkeysFromSettings()
```

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_RefreshCurrentScreenHotkeys"></a> RefreshCurrentScreenHotkeys\(\)

手动刷新当前屏幕的热键注册

```csharp
public void RefreshCurrentScreenHotkeys()
```

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_RefreshMultiScreenSettings"></a> RefreshMultiScreenSettings\(\)

刷新多屏相关设置（开关和跟随鼠标策略）。

```csharp
public void RefreshMultiScreenSettings()
```

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_RegisterDefaultHotkeys"></a> RegisterDefaultHotkeys\(\)

注册默认快捷键集合

```csharp
public void RegisterDefaultHotkeys()
```

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_RegisterHotkey_System_String_System_Windows_Input_Key_System_Windows_Input_ModifierKeys_System_Action_"></a> RegisterHotkey\(string, Key, ModifierKeys, Action\)

注册全局快捷键

```csharp
public bool RegisterHotkey(string hotkeyName, Key key, ModifierKeys modifiers, Action action)
```

#### Parameters

`hotkeyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

快捷键名称

`key` [Key](https://learn.microsoft.com/dotnet/api/system.windows.input.key)

按键

`modifiers` [ModifierKeys](https://learn.microsoft.com/dotnet/api/system.windows.input.modifierkeys)

修饰键

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

执行动作

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否注册成功

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_SaveHotkeysToSettings"></a> SaveHotkeysToSettings\(\)

保存快捷键配置到设置

```csharp
public void SaveHotkeysToSettings()
```

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_UnregisterAllHotkeys"></a> UnregisterAllHotkeys\(\)

注销所有快捷键

```csharp
public void UnregisterAllHotkeys()
```

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_UnregisterHotkey_System_String_"></a> UnregisterHotkey\(string\)

注销指定快捷键

```csharp
public bool UnregisterHotkey(string hotkeyName)
```

#### Parameters

`hotkeyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

快捷键名称

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否注销成功

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_UpdateHotkey_System_String_System_Windows_Input_Key_System_Windows_Input_ModifierKeys_"></a> UpdateHotkey\(string, Key, ModifierKeys\)

更新快捷键配置

```csharp
public bool UpdateHotkey(string hotkeyName, Key key, ModifierKeys modifiers)
```

#### Parameters

`hotkeyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

快捷键名称

`key` [Key](https://learn.microsoft.com/dotnet/api/system.windows.input.key)

新按键

`modifiers` [ModifierKeys](https://learn.microsoft.com/dotnet/api/system.windows.input.modifierkeys)

新修饰键

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否更新成功

### <a id="Ink_Canvas_Helpers_GlobalHotkeyManager_UpdateHotkeyStateForToolMode_System_Boolean_"></a> UpdateHotkeyStateForToolMode\(bool\)

根据当前工具模式更新快捷键状态
在工具切换时调用此方法

```csharp
public void UpdateHotkeyStateForToolMode(bool isMouseMode)
```

#### Parameters

`isMouseMode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

是否为鼠标模式（选择模式）

