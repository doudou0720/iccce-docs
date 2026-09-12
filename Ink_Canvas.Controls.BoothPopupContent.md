# <a id="Ink_Canvas_Controls_BoothPopupContent"></a> Class BoothPopupContent

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvasForClass.dll  

视频展台弹窗菜单内容：使用 PopupShellContent 作为外壳，承载摄像头设备选择、
分辨率选择以及矫正/拍照/旋转/关闭 4 个操作按钮。

```csharp
public class BoothPopupContent : UserControl
```

#### Inheritance

UserControl ← 
[BoothPopupContent](Ink\_Canvas.Controls.BoothPopupContent.md)

## Remarks

该控件仅作为 UI 容器，所有事件由 MainWindow 通过订阅内部控件事件处理。

## Constructors

### <a id="Ink_Canvas_Controls_BoothPopupContent__ctor"></a> BoothPopupContent\(\)

```csharp
public BoothPopupContent()
```

## Properties

### <a id="Ink_Canvas_Controls_BoothPopupContent_BoothResolutionComboBoxControl"></a> BoothResolutionComboBoxControl

```csharp
public ComboBox BoothResolutionComboBoxControl { get; }
```

#### Property Value

 ComboBox

### <a id="Ink_Canvas_Controls_BoothPopupContent_BrightnessResetButton"></a> BrightnessResetButton

```csharp
public Button BrightnessResetButton { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_BoothPopupContent_BrightnessSlider"></a> BrightnessSlider

```csharp
public Slider BrightnessSlider { get; }
```

#### Property Value

 Slider

### <a id="Ink_Canvas_Controls_BoothPopupContent_BrightnessValueText"></a> BrightnessValueText

```csharp
public TextBlock BrightnessValueText { get; }
```

#### Property Value

 TextBlock

### <a id="Ink_Canvas_Controls_BoothPopupContent_CameraDevicesComboBoxControl"></a> CameraDevicesComboBoxControl

```csharp
public ComboBox CameraDevicesComboBoxControl { get; }
```

#### Property Value

 ComboBox

### <a id="Ink_Canvas_Controls_BoothPopupContent_CapturePhotoButton"></a> CapturePhotoButton

```csharp
public Button CapturePhotoButton { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_BoothPopupContent_CloseButtonControl"></a> CloseButtonControl

```csharp
public Button CloseButtonControl { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_BoothPopupContent_ContrastResetButton"></a> ContrastResetButton

```csharp
public Button ContrastResetButton { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_BoothPopupContent_ContrastSlider"></a> ContrastSlider

```csharp
public Slider ContrastSlider { get; }
```

#### Property Value

 Slider

### <a id="Ink_Canvas_Controls_BoothPopupContent_ContrastValueText"></a> ContrastValueText

```csharp
public TextBlock ContrastValueText { get; }
```

#### Property Value

 TextBlock

### <a id="Ink_Canvas_Controls_BoothPopupContent_ExitVideoPresenterButton"></a> ExitVideoPresenterButton

```csharp
public Button ExitVideoPresenterButton { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_BoothPopupContent_ExposureResetButton"></a> ExposureResetButton

```csharp
public Button ExposureResetButton { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_BoothPopupContent_ExposureSlider"></a> ExposureSlider

```csharp
public Slider ExposureSlider { get; }
```

#### Property Value

 Slider

### <a id="Ink_Canvas_Controls_BoothPopupContent_ExposureValueText"></a> ExposureValueText

```csharp
public TextBlock ExposureValueText { get; }
```

#### Property Value

 TextBlock

### <a id="Ink_Canvas_Controls_BoothPopupContent_FocusResetButton"></a> FocusResetButton

```csharp
public Button FocusResetButton { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_BoothPopupContent_FocusSlider"></a> FocusSlider

```csharp
public Slider FocusSlider { get; }
```

#### Property Value

 Slider

### <a id="Ink_Canvas_Controls_BoothPopupContent_FocusValueText"></a> FocusValueText

```csharp
public TextBlock FocusValueText { get; }
```

#### Property Value

 TextBlock

### <a id="Ink_Canvas_Controls_BoothPopupContent_GainResetButton"></a> GainResetButton

```csharp
public Button GainResetButton { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_BoothPopupContent_GainSlider"></a> GainSlider

```csharp
public Slider GainSlider { get; }
```

#### Property Value

 Slider

### <a id="Ink_Canvas_Controls_BoothPopupContent_GainValueText"></a> GainValueText

```csharp
public TextBlock GainValueText { get; }
```

#### Property Value

 TextBlock

### <a id="Ink_Canvas_Controls_BoothPopupContent_MirrorHorizontalToggle"></a> MirrorHorizontalToggle

```csharp
public ToggleButton MirrorHorizontalToggle { get; }
```

#### Property Value

 ToggleButton

### <a id="Ink_Canvas_Controls_BoothPopupContent_MirrorVerticalToggle"></a> MirrorVerticalToggle

```csharp
public ToggleButton MirrorVerticalToggle { get; }
```

#### Property Value

 ToggleButton

### <a id="Ink_Canvas_Controls_BoothPopupContent_PhotoCorrectionAccelerationComboBox"></a> PhotoCorrectionAccelerationComboBox

```csharp
public ComboBox PhotoCorrectionAccelerationComboBox { get; }
```

#### Property Value

 ComboBox

### <a id="Ink_Canvas_Controls_BoothPopupContent_PhotoCorrectionToggle"></a> PhotoCorrectionToggle

```csharp
public ToggleButton PhotoCorrectionToggle { get; }
```

#### Property Value

 ToggleButton

### <a id="Ink_Canvas_Controls_BoothPopupContent_ProModeExpander"></a> ProModeExpander

```csharp
public Expander ProModeExpander { get; }
```

#### Property Value

 Expander

### <a id="Ink_Canvas_Controls_BoothPopupContent_RotateImageButton"></a> RotateImageButton

```csharp
public Button RotateImageButton { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_BoothPopupContent_SaturationResetButton"></a> SaturationResetButton

```csharp
public Button SaturationResetButton { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_BoothPopupContent_SaturationSlider"></a> SaturationSlider

```csharp
public Slider SaturationSlider { get; }
```

#### Property Value

 Slider

### <a id="Ink_Canvas_Controls_BoothPopupContent_SaturationValueText"></a> SaturationValueText

```csharp
public TextBlock SaturationValueText { get; }
```

#### Property Value

 TextBlock

### <a id="Ink_Canvas_Controls_BoothPopupContent_WhiteBalanceResetButton"></a> WhiteBalanceResetButton

```csharp
public Button WhiteBalanceResetButton { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_BoothPopupContent_WhiteBalanceSlider"></a> WhiteBalanceSlider

```csharp
public Slider WhiteBalanceSlider { get; }
```

#### Property Value

 Slider

### <a id="Ink_Canvas_Controls_BoothPopupContent_WhiteBalanceValueText"></a> WhiteBalanceValueText

```csharp
public TextBlock WhiteBalanceValueText { get; }
```

#### Property Value

 TextBlock

