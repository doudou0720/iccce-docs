# <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow"></a> Class SettingsWindow

Namespace: [Ink\_Canvas.Windows.SettingsViews](Ink\_Canvas.Windows.SettingsViews.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class SettingsWindow : Window
```

#### Inheritance

Window ← 
[SettingsWindow](Ink\_Canvas.Windows.SettingsViews.SettingsWindow.md)

## Constructors

### <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow__ctor"></a> SettingsWindow\(\)

```csharp
public SettingsWindow()
```

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow_SuppressInitialNavigation"></a> SuppressInitialNavigation

若为 true，则跳过 Loaded 中默认导航到 HomePage 的行为。
用于 URI 打开设置窗口时由调用方在 Show() 之前设置，避免覆盖外部指定的目标页。

```csharp
public bool SuppressInitialNavigation { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow_ApplyWindowBackdrop_System_String_"></a> ApplyWindowBackdrop\(string\)

```csharp
public void ApplyWindowBackdrop(string backdropName)
```

#### Parameters

`backdropName` string

### <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow_BuildSettingsUri_System_String_System_String_"></a> BuildSettingsUri\(string, string\)

构造当前页面（或指定页面）的设置导航 URL。

```csharp
public string BuildSettingsUri(string pageTag = null, string settingKey = null)
```

#### Parameters

`pageTag` string

`settingKey` string

#### Returns

 string

### <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow_GetNavigationView"></a> GetNavigationView\(\)

```csharp
public NavigationView GetNavigationView()
```

#### Returns

 NavigationView

### <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow_HighlightSetting_System_String_"></a> HighlightSetting\(string\)

滚动到目标设置项并临时高亮。优先按 SettingsNavigator.SettingsKey 查找；若未找到则按 Header 文本匹配。

```csharp
public void HighlightSetting(string settingKey)
```

#### Parameters

`settingKey` string

### <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow_NavigateToPage_System_String_Ink_Canvas_Plugins_PluginInfo_"></a> NavigateToPage\(string, PluginInfo\)

```csharp
public void NavigateToPage(string pageTag, PluginInfo pluginInfo = null)
```

#### Parameters

`pageTag` string

`pluginInfo` PluginInfo

### <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow_RefreshFloatingBarThemePage"></a> RefreshFloatingBarThemePage\(\)

允许外部调用以刷新设置窗口中的浮动栏主题管理页（如果当前正在显示）

```csharp
public void RefreshFloatingBarThemePage()
```

### <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow_RefreshTheme"></a> RefreshTheme\(\)

```csharp
public void RefreshTheme()
```

### <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow_SetPendingHighlightKey_System_String_"></a> SetPendingHighlightKey\(string\)

由 URI 处理器调用：设置挂起的高亮 key。
若当前页面已加载，则立即触发；否则推迟到 OnRootFrameNavigated 中的 TryApplyPendingHighlight 处理。

```csharp
public void SetPendingHighlightKey(string key)
```

#### Parameters

`key` string

### <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow_UpdateAnnouncementUnreadBadge"></a> UpdateAnnouncementUnreadBadge\(\)

```csharp
public void UpdateAnnouncementUnreadBadge()
```

### <a id="Ink_Canvas_Windows_SettingsViews_SettingsWindow_UpdateUpdateBadgeVisibility"></a> UpdateUpdateBadgeVisibility\(\)

```csharp
public void UpdateUpdateBadgeVisibility()
```

