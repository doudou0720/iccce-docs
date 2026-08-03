# <a id="Ink_Canvas_Controls_DynamicNotificationControl"></a> Class DynamicNotificationControl

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class DynamicNotificationControl : UserControl
```

#### Inheritance

UserControl ← 
[DynamicNotificationControl](Ink\_Canvas.Controls.DynamicNotificationControl.md)

## Constructors

### <a id="Ink_Canvas_Controls_DynamicNotificationControl__ctor"></a> DynamicNotificationControl\(\)

```csharp
public DynamicNotificationControl()
```

## Methods

### <a id="Ink_Canvas_Controls_DynamicNotificationControl_RefreshTheme_System_Boolean_"></a> RefreshTheme\(bool\)

刷新通知主题颜色，在全局主题切换时调用

```csharp
public void RefreshTheme(bool isDark)
```

#### Parameters

`isDark` bool

### <a id="Ink_Canvas_Controls_DynamicNotificationControl_Show_Ink_Canvas_Models_NotificationMessage_"></a> Show\(NotificationMessage\)

```csharp
public void Show(NotificationMessage message)
```

#### Parameters

`message` [NotificationMessage](Ink\_Canvas.Models.NotificationMessage.md)

### <a id="Ink_Canvas_Controls_DynamicNotificationControl_Closed"></a> Closed

```csharp
public event EventHandler Closed
```

#### Event Type

 EventHandler

