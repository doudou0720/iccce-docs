# <a id="Ink_Canvas_Windows_OobePresetWindow"></a> Class OobePresetWindow

Namespace: [Ink\_Canvas.Windows](Ink\_Canvas.Windows.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class OobePresetWindow : Window
```

#### Inheritance

Window ← 
[OobePresetWindow](Ink\_Canvas.Windows.OobePresetWindow.md)

## Constructors

### <a id="Ink_Canvas_Windows_OobePresetWindow__ctor"></a> OobePresetWindow\(\)

```csharp
public OobePresetWindow()
```

## Properties

### <a id="Ink_Canvas_Windows_OobePresetWindow_SelectedPreset"></a> SelectedPreset

```csharp
public OobePresetWindow.PresetKind SelectedPreset { get; }
```

#### Property Value

 [OobePresetWindow](Ink\_Canvas.Windows.OobePresetWindow.md).[PresetKind](Ink\_Canvas.Windows.OobePresetWindow.PresetKind.md)

## Methods

### <a id="Ink_Canvas_Windows_OobePresetWindow_ApplyLite_Ink_Canvas_Settings_"></a> ApplyLite\(Settings\)

简洁轻量配置：最小化后台行为，适合简单批注场景。

```csharp
public static void ApplyLite(Settings settings)
```

#### Parameters

`settings` [Settings](Ink\_Canvas.Settings.md)

### <a id="Ink_Canvas_Windows_OobePresetWindow_ApplyStandard_Ink_Canvas_Settings_"></a> ApplyStandard\(Settings\)

课堂标准配置：适合大多数教学场景，启用 PPT 联动、自动保存、手势等。

```csharp
public static void ApplyStandard(Settings settings)
```

#### Parameters

`settings` [Settings](Ink\_Canvas.Settings.md)

