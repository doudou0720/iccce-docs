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

### <a id="Ink_Canvas_Controls_BoothPopupContent_ExitVideoPresenterButton"></a> ExitVideoPresenterButton

```csharp
public Button ExitVideoPresenterButton { get; }
```

#### Property Value

 Button

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

### <a id="Ink_Canvas_Controls_BoothPopupContent_RotateImageButton"></a> RotateImageButton

```csharp
public Button RotateImageButton { get; }
```

#### Property Value

 Button

