# <a id="Ink_Canvas_Windows_HotkeyItem"></a> Class HotkeyItem

Namespace: [Ink\_Canvas.Windows](Ink\_Canvas.Windows.md)  
Assembly: InkCanvasForClass.dll  

快捷键项控件

```csharp
public class HotkeyItem : UserControl
```

#### Inheritance

UserControl ← 
[HotkeyItem](Ink\_Canvas.Windows.HotkeyItem.md)

## Constructors

### <a id="Ink_Canvas_Windows_HotkeyItem__ctor"></a> HotkeyItem\(\)

```csharp
public HotkeyItem()
```

## Fields

### <a id="Ink_Canvas_Windows_HotkeyItem_DescriptionProperty"></a> DescriptionProperty

```csharp
public static readonly DependencyProperty DescriptionProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_Windows_HotkeyItem_TitleProperty"></a> TitleProperty

```csharp
public static readonly DependencyProperty TitleProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_Windows_HotkeyItem_DefaultKey"></a> DefaultKey

```csharp
public string DefaultKey { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Windows_HotkeyItem_DefaultModifiers"></a> DefaultModifiers

```csharp
public string DefaultModifiers { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Windows_HotkeyItem_Description"></a> Description

```csharp
public string Description { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Windows_HotkeyItem_HotkeyName"></a> HotkeyName

快捷键名称（用于标识，如"Undo"）

```csharp
public string HotkeyName { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Windows_HotkeyItem_Title"></a> Title

```csharp
public string Title { get; set; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_Windows_HotkeyItem_GetCurrentHotkey"></a> GetCurrentHotkey\(\)

```csharp
public (Key key, ModifierKeys modifiers) GetCurrentHotkey()
```

#### Returns

 \(Key [key](System.ValueTuple\{Key,ModifierKeys\}.md\#System\_ValueTuple\_Key\_ModifierKeys\_\_key), ModifierKeys [modifiers](System.ValueTuple\{Key,ModifierKeys\}.md\#System\_ValueTuple\_Key\_ModifierKeys\_\_modifiers)\)

### <a id="Ink_Canvas_Windows_HotkeyItem_SetCurrentHotkey_Key_ModifierKeys_"></a> SetCurrentHotkey\(Key, ModifierKeys\)

```csharp
public void SetCurrentHotkey(Key key, ModifierKeys modifiers)
```

#### Parameters

`key` Key

`modifiers` ModifierKeys

### <a id="Ink_Canvas_Windows_HotkeyItem_HotkeyChanged"></a> HotkeyChanged

快捷键变更事件

```csharp
public event EventHandler<HotkeyChangedEventArgs> HotkeyChanged
```

#### Event Type

 EventHandler<[HotkeyChangedEventArgs](Ink\_Canvas.Windows.HotkeyChangedEventArgs.md)\>

