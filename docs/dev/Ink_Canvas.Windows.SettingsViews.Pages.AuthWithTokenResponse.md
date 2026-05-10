# <a id="Ink_Canvas_Windows_SettingsViews_Pages_AuthWithTokenResponse"></a> Class AuthWithTokenResponse

Namespace: [Ink\_Canvas.Windows.SettingsViews.Pages](Ink\_Canvas.Windows.SettingsViews.Pages.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class AuthWithTokenResponse
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuthWithTokenResponse](Ink\_Canvas.Windows.SettingsViews.Pages.AuthWithTokenResponse.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_AuthWithTokenResponse_Count"></a> Count

```csharp
[JsonProperty("count")]
public int Count { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_AuthWithTokenResponse_Success"></a> Success

```csharp
[JsonProperty("success")]
public bool Success { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_AuthWithTokenResponse_User"></a> User

```csharp
[JsonProperty("user")]
public UserInfo User { get; set; }
```

#### Property Value

 [UserInfo](Ink\_Canvas.Windows.SettingsViews.Pages.UserInfo.md)

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_AuthWithTokenResponse_Whiteboards"></a> Whiteboards

```csharp
[JsonProperty("whiteboards")]
public List<WhiteboardInfo> Whiteboards { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[WhiteboardInfo](Ink\_Canvas.Windows.SettingsViews.Pages.WhiteboardInfo.md)\>

