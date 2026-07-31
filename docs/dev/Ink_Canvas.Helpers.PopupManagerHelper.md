# <a id="Ink_Canvas_Helpers_PopupManagerHelper"></a> Class PopupManagerHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class PopupManagerHelper : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PopupManagerHelper](Ink\_Canvas.Helpers.PopupManagerHelper.md)

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

## Properties

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_ShouldBeTopmost"></a> ShouldBeTopmost

```csharp
public Func<bool> ShouldBeTopmost { get; set; }
```

#### Property Value

 [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

## Methods

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_BringToFront_System_Windows_Controls_Primitives_Popup_"></a> BringToFront\(Popup\)

```csharp
public void BringToFront(Popup popup)
```

#### Parameters

`popup` [Popup](https://learn.microsoft.com/dotnet/api/system.windows.controls.primitives.popup)

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_BringToFrontLight_System_Windows_Controls_Primitives_Popup_"></a> BringToFrontLight\(Popup\)

```csharp
public void BringToFrontLight(Popup popup)
```

#### Parameters

`popup` [Popup](https://learn.microsoft.com/dotnet/api/system.windows.controls.primitives.popup)

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_Cleanup"></a> Cleanup\(\)

```csharp
public void Cleanup()
```

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_CloseAllRegisteredPopups_System_Collections_Generic_ICollection_System_Windows_Controls_Primitives_Popup__"></a> CloseAllRegisteredPopups\(ICollection<Popup\>\)

关闭所有已注册的 Popup。

<p>
供 <code>HideSubPanels</code> / <code>HideSubPanelsImmediately</code> 兜底调用：宿主自带面板是按名字逐个关闭的，
插件通过 <xref href="Ink_Canvas.Helpers.PopupManagerHelper.RegisterPopup(System.Windows.Controls.Primitives.Popup)" data-throw-if-not-resolved="false"></xref> 注册的弹窗不在那份硬编码列表里，
需要在此统一关闭，否则点击画布空白处时插件弹窗不会收起。
</p>

```csharp
public void CloseAllRegisteredPopups(ICollection<Popup> skip = null)
```

#### Parameters

`skip` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[Popup](https://learn.microsoft.com/dotnet/api/system.windows.controls.primitives.popup)\>

需要跳过的 Popup（调用方已自行处理，例如正在播放关闭动画）。
传 <code>null</code> 表示不跳过任何一个。

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_Dispose"></a> Dispose\(\)

释放资源，防止内存泄漏

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_Initialize_System_Windows_Window_"></a> Initialize\(Window\)

```csharp
public void Initialize(Window ownerWindow)
```

#### Parameters

`ownerWindow` [Window](https://learn.microsoft.com/dotnet/api/system.windows.window)

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_MarkNeedsUpdate"></a> MarkNeedsUpdate\(\)

```csharp
public void MarkNeedsUpdate()
```

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_NotifyTopmostMaintained"></a> NotifyTopmostMaintained\(\)

```csharp
public static void NotifyTopmostMaintained()
```

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_OnOwnerActivated"></a> OnOwnerActivated\(\)

```csharp
public void OnOwnerActivated()
```

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_OnTopmostSettingChanged"></a> OnTopmostSettingChanged\(\)

```csharp
public void OnTopmostSettingChanged()
```

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_RegisterPopup_System_Windows_Controls_Primitives_Popup_"></a> RegisterPopup\(Popup\)

```csharp
public void RegisterPopup(Popup popup)
```

#### Parameters

`popup` [Popup](https://learn.microsoft.com/dotnet/api/system.windows.controls.primitives.popup)

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_UnregisterPopup_System_Windows_Controls_Primitives_Popup_"></a> UnregisterPopup\(Popup\)

```csharp
public void UnregisterPopup(Popup popup)
```

#### Parameters

`popup` [Popup](https://learn.microsoft.com/dotnet/api/system.windows.controls.primitives.popup)

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_UpdatePosition_System_Windows_Controls_Primitives_Popup_"></a> UpdatePosition\(Popup\)

```csharp
public void UpdatePosition(Popup popup)
```

#### Parameters

`popup` [Popup](https://learn.microsoft.com/dotnet/api/system.windows.controls.primitives.popup)

