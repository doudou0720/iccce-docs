# <a id="Ink_Canvas_Helpers_TouchAwareDragDropHelper"></a> Class TouchAwareDragDropHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

触屏感知拖拽辅助类。

<p>根据窗口与控件层级处理触屏拖拽：</p>
<p>- 窗口/控件级检测输入设备类型（鼠标/触屏）</p>
<p>- 触屏模式下显示拖动按钮（grip handle），鼠标模式下隐藏</p>
<p>- 触屏模式下只有从 grip handle 发起的按下才能触发拖动，否则事件交给 ScrollViewer 处理滑动</p>
<p>- 一旦检测到触屏输入，grip handle 将持续显示直到应用重启（不因鼠标输入而恢复隐藏）</p>
<p>用法：</p>
<p>1. 在 ItemsControl 上设置 touch:TouchAwareDragDropHelper.IsEnabled="True"</p>
<p>2. 在 ItemTemplate 中的拖动图标上设置 touch:TouchAwareDragDropHelper.IsGripHandle="True"</p>

```csharp
public static class TouchAwareDragDropHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TouchAwareDragDropHelper](Ink\_Canvas.Helpers.TouchAwareDragDropHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_Helpers_TouchAwareDragDropHelper_IsEnabledProperty"></a> IsEnabledProperty

```csharp
public static readonly DependencyProperty IsEnabledProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Helpers_TouchAwareDragDropHelper_IsExplicitVisibleProperty"></a> IsExplicitVisibleProperty

是否强制始终显示 grip handle（不依赖触摸模式）。

```csharp
public static readonly DependencyProperty IsExplicitVisibleProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Helpers_TouchAwareDragDropHelper_IsGripHandleProperty"></a> IsGripHandleProperty

```csharp
public static readonly DependencyProperty IsGripHandleProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Helpers_TouchAwareDragDropHelper_IsTouchModeProperty"></a> IsTouchModeProperty

```csharp
public static readonly DependencyProperty IsTouchModeProperty
```

#### Field Value

 DependencyProperty

## Methods

### <a id="Ink_Canvas_Helpers_TouchAwareDragDropHelper_GetIsEnabled_DependencyObject_"></a> GetIsEnabled\(DependencyObject\)

```csharp
public static bool GetIsEnabled(DependencyObject obj)
```

#### Parameters

`obj` DependencyObject

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_TouchAwareDragDropHelper_GetIsExplicitVisible_DependencyObject_"></a> GetIsExplicitVisible\(DependencyObject\)

```csharp
public static bool GetIsExplicitVisible(DependencyObject obj)
```

#### Parameters

`obj` DependencyObject

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_TouchAwareDragDropHelper_GetIsGripHandle_DependencyObject_"></a> GetIsGripHandle\(DependencyObject\)

```csharp
public static bool GetIsGripHandle(DependencyObject obj)
```

#### Parameters

`obj` DependencyObject

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_TouchAwareDragDropHelper_GetIsTouchMode_DependencyObject_"></a> GetIsTouchMode\(DependencyObject\)

```csharp
public static bool GetIsTouchMode(DependencyObject obj)
```

#### Parameters

`obj` DependencyObject

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_TouchAwareDragDropHelper_SetIsEnabled_DependencyObject_System_Boolean_"></a> SetIsEnabled\(DependencyObject, bool\)

```csharp
public static void SetIsEnabled(DependencyObject obj, bool value)
```

#### Parameters

`obj` DependencyObject

`value` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_TouchAwareDragDropHelper_SetIsExplicitVisible_DependencyObject_System_Boolean_"></a> SetIsExplicitVisible\(DependencyObject, bool\)

```csharp
public static void SetIsExplicitVisible(DependencyObject obj, bool value)
```

#### Parameters

`obj` DependencyObject

`value` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_TouchAwareDragDropHelper_SetIsGripHandle_DependencyObject_System_Boolean_"></a> SetIsGripHandle\(DependencyObject, bool\)

```csharp
public static void SetIsGripHandle(DependencyObject obj, bool value)
```

#### Parameters

`obj` DependencyObject

`value` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

