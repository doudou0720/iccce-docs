# <a id="Ink_Canvas_Helpers_PopupManagerHelper"></a> Class PopupManagerHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class PopupManagerHelper : IDisposable
```

#### Inheritance

IDisposable ← 
[PopupManagerHelper](Ink\_Canvas.Helpers.PopupManagerHelper.md)

## Properties

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_ShouldBeTopmost"></a> ShouldBeTopmost

```csharp
public Func<bool> ShouldBeTopmost { get; set; }
```

#### Property Value

 Func<bool\>

## Methods

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_BringToFront_Popup_"></a> BringToFront\(Popup\)

```csharp
public void BringToFront(Popup popup)
```

#### Parameters

`popup` Popup

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_BringToFrontLight_Popup_"></a> BringToFrontLight\(Popup\)

```csharp
public void BringToFrontLight(Popup popup)
```

#### Parameters

`popup` Popup

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_Cleanup"></a> Cleanup\(\)

```csharp
public void Cleanup()
```

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_CloseAllRegisteredPopups_ICollection_Popup__"></a> CloseAllRegisteredPopups\(ICollection<Popup\>\)

关闭所有已注册的 Popup。

<p>
供 <code>HideSubPanels</code> / <code>HideSubPanelsImmediately</code> 兜底调用：宿主自带面板是按名字逐个关闭的，
插件通过 <xref href="Ink_Canvas.Helpers.PopupManagerHelper.RegisterPopup(Popup)" data-throw-if-not-resolved="false"></xref> 注册的弹窗不在那份硬编码列表里，
需要在此统一关闭，否则点击画布空白处时插件弹窗不会收起。
</p>

```csharp
public void CloseAllRegisteredPopups(ICollection<Popup> skip = null)
```

#### Parameters

`skip` ICollection<Popup\>

需要跳过的 Popup（调用方已自行处理，例如正在播放关闭动画）。
传 <code>null</code> 表示不跳过任何一个。

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_Dispose"></a> Dispose\(\)

释放资源，防止内存泄漏

```csharp
public void Dispose()
```

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_Initialize_Window_"></a> Initialize\(Window\)

```csharp
public void Initialize(Window ownerWindow)
```

#### Parameters

`ownerWindow` Window

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

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_RegisterPopup_Popup_"></a> RegisterPopup\(Popup\)

```csharp
public void RegisterPopup(Popup popup)
```

#### Parameters

`popup` Popup

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_UnregisterPopup_Popup_"></a> UnregisterPopup\(Popup\)

```csharp
public void UnregisterPopup(Popup popup)
```

#### Parameters

`popup` Popup

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_UpdatePosition_Popup_"></a> UpdatePosition\(Popup\)

```csharp
public void UpdatePosition(Popup popup)
```

#### Parameters

`popup` Popup

