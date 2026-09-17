# <a id="Ink_Canvas_QuickDrawWindow"></a> Class QuickDrawWindow

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

快抽窗口

```csharp
public class QuickDrawWindow : Window
```

#### Inheritance

Window ← 
[QuickDrawWindow](Ink\_Canvas.QuickDrawWindow.md)

## Constructors

### <a id="Ink_Canvas_QuickDrawWindow__ctor"></a> QuickDrawWindow\(\)

```csharp
public QuickDrawWindow()
```

## Methods

### <a id="Ink_Canvas_QuickDrawWindow_OnClosed_System_EventArgs_"></a> OnClosed\(EventArgs\)

```csharp
protected override void OnClosed(EventArgs e)
```

#### Parameters

`e` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### <a id="Ink_Canvas_QuickDrawWindow_OnSourceInitialized_System_EventArgs_"></a> OnSourceInitialized\(EventArgs\)

注册到中央置顶管理器，确保窗口立即获得置顶状态

```csharp
protected override void OnSourceInitialized(EventArgs e)
```

#### Parameters

`e` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### <a id="Ink_Canvas_QuickDrawWindow_RefreshTheme"></a> RefreshTheme\(\)

刷新主题，当主窗口主题切换时调用

```csharp
public void RefreshTheme()
```

