# <a id="Ink_Canvas_Helpers_UIAccessHelper"></a> Class UIAccessHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

通过 Winlogon 令牌模拟实现 UIAccess 提权重启。
1. 找到当前会话中 winlogon.exe 的令牌，复制为模拟令牌；
2. SetThreadToken 暂时模拟 winlogon（拥有 TCB 权限）；
3. 在自身令牌副本上 SetTokenInformation(TokenUIAccess, TRUE)；
4. RevertToSelf 后用 CreateProcessWithTokenW 启动新进程；
5. 新进程具有 UIAccess 权限，可置顶于 UAC 提示之上。

```csharp
public static class UIAccessHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UIAccessHelper](Ink\_Canvas.Helpers.UIAccessHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_UIAccessHelper_HasUIAccess"></a> HasUIAccess\(\)

检查当前进程是否已具有 UIAccess 标志。

```csharp
public static bool HasUIAccess()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_UIAccessHelper_LaunchNormalUserWithUIAccessFromElevatedHelper"></a> LaunchNormalUserWithUIAccessFromElevatedHelper\(\)

```csharp
public static bool LaunchNormalUserWithUIAccessFromElevatedHelper()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_UIAccessHelper_RestartAsNormalUser_System_String_"></a> RestartAsNormalUser\(string\)

以普通用户权限（非提升）重启自身。
通过获取 explorer.exe / ctfmon.exe 的非特权令牌，再用 CreateProcessWithTokenW 启动新进程，
避免经由 explorer.exe 中转可能产生的 UAC 提示或丢失参数问题。
成功时调用方应立即退出当前进程。

```csharp
public static bool RestartAsNormalUser(string extraArgs = null)
```

#### Parameters

`extraArgs` [string](https://learn.microsoft.com/dotnet/api/system.string)

追加到新进程的额外命令行参数。

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_UIAccessHelper_RestartAsNormalUserWithUIAccess_System_String_"></a> RestartAsNormalUserWithUIAccess\(string\)

```csharp
public static bool RestartAsNormalUserWithUIAccess(string extraArgs = null)
```

#### Parameters

`extraArgs` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_UIAccessHelper_RestartWithUIAccess_System_String_"></a> RestartWithUIAccess\(string\)

以 UIAccess 令牌重启自身。当前进程必须已经以管理员身份运行。
成功时新进程已启动，调用方应立即退出当前进程。

```csharp
public static bool RestartWithUIAccess(string extraArgs = null)
```

#### Parameters

`extraArgs` [string](https://learn.microsoft.com/dotnet/api/system.string)

追加到新进程的额外命令行参数（例如 --skip-mutex-check）。

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

