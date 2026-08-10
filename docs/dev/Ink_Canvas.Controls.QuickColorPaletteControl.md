# <a id="Ink_Canvas_Controls_QuickColorPaletteControl"></a> Class QuickColorPaletteControl

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class QuickColorPaletteControl : Controls.UserControl, INotifyPropertyChanged
```

#### Inheritance

Controls.UserControl ← 
[QuickColorPaletteControl](Ink\_Canvas.Controls.QuickColorPaletteControl.md)

#### Implements

[INotifyPropertyChanged](https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged)

## Constructors

### <a id="Ink_Canvas_Controls_QuickColorPaletteControl__ctor"></a> QuickColorPaletteControl\(\)

```csharp
public QuickColorPaletteControl()
```

## Fields

### <a id="Ink_Canvas_Controls_QuickColorPaletteControl_ColorClickedEvent"></a> ColorClickedEvent

```csharp
public static readonly RoutedEvent ColorClickedEvent
```

#### Field Value

 RoutedEvent

### <a id="Ink_Canvas_Controls_QuickColorPaletteControl_DisplayModeProperty"></a> DisplayModeProperty

```csharp
public static readonly DependencyProperty DisplayModeProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_Controls_QuickColorPaletteControl_DisplayMode"></a> DisplayMode

```csharp
public int DisplayMode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Controls_QuickColorPaletteControl_ApplyOrientation_System_Boolean_"></a> ApplyOrientation\(bool\)

```csharp
public void ApplyOrientation(bool isVertical)
```

#### Parameters

`isVertical` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_QuickColorPaletteControl_ClearAllChecked"></a> ClearAllChecked\(\)

```csharp
public void ClearAllChecked()
```

### <a id="Ink_Canvas_Controls_QuickColorPaletteControl_ForceApplyDisplayMode"></a> ForceApplyDisplayMode\(\)

强制应用显示模式，确保即使在控件初始化期间也能正确显示

```csharp
public void ForceApplyDisplayMode()
```

### <a id="Ink_Canvas_Controls_QuickColorPaletteControl_OnPropertyChanged_System_String_"></a> OnPropertyChanged\(string\)

```csharp
protected virtual void OnPropertyChanged(string propertyName = null)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_QuickColorPaletteControl_SetCheckedByColor_Color_System_Int32_"></a> SetCheckedByColor\(Color, int\)

```csharp
public void SetCheckedByColor(Color color, int tolerance = 15)
```

#### Parameters

`color` Color

`tolerance` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Controls_QuickColorPaletteControl_SyncFromSettings"></a> SyncFromSettings\(\)

```csharp
public void SyncFromSettings()
```

### <a id="Ink_Canvas_Controls_QuickColorPaletteControl_ColorClicked"></a> ColorClicked

```csharp
public event RoutedEventHandler ColorClicked
```

#### Event Type

 RoutedEventHandler

### <a id="Ink_Canvas_Controls_QuickColorPaletteControl_PropertyChanged"></a> PropertyChanged

Occurs when a property value changes.

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 [PropertyChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler)

