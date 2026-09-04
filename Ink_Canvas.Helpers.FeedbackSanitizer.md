# <a id="Ink_Canvas_Helpers_FeedbackSanitizer"></a> Class FeedbackSanitizer

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

反馈数据脱敏处理器。
对上传到 pastebin 的 JSON 数据进行脱敏，移除敏感配置。
脱敏规则：
- 设备 ID：保留原样
- WebDAV 配置（URL、用户名、密码、根目录）：完全移除
- DlassSettings 的 token 和 API 地址：移除
- 密码哈希/盐值：移除

```csharp
public static class FeedbackSanitizer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FeedbackSanitizer](Ink\_Canvas.Helpers.FeedbackSanitizer.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_FeedbackSanitizer_BuildSanitizedSettingsJson_Ink_Canvas_Settings_System_String_"></a> BuildSanitizedSettingsJson\(Settings, string\)

将 Settings 对象序列化为脱敏后的 JSON。
设备 ID 保留原样，移除 WebDAV、token、密码等敏感字段。

```csharp
public static string BuildSanitizedSettingsJson(Settings settings, string deviceId)
```

#### Parameters

`settings` [Settings](Ink\_Canvas.Settings.md)

`deviceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

