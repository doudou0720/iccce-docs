# <a id="Ink_Canvas_Canvas"></a> Class Canvas

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class Canvas
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Canvas](Ink\_Canvas.Canvas.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Canvas_AutoStraightenLine"></a> AutoStraightenLine

```csharp
public bool AutoStraightenLine { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_AutoStraightenLineThreshold"></a> AutoStraightenLineThreshold

```csharp
public int AutoStraightenLineThreshold { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_BrushAutoRestoreAlpha"></a> BrushAutoRestoreAlpha

```csharp
public int BrushAutoRestoreAlpha { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_BrushAutoRestoreColor"></a> BrushAutoRestoreColor

```csharp
public string BrushAutoRestoreColor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Canvas_BrushAutoRestoreDelaySeconds"></a> BrushAutoRestoreDelaySeconds

```csharp
public int BrushAutoRestoreDelaySeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_BrushAutoRestoreTimes"></a> BrushAutoRestoreTimes

```csharp
public string BrushAutoRestoreTimes { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Canvas_BrushAutoRestoreWidth"></a> BrushAutoRestoreWidth

```csharp
public double BrushAutoRestoreWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Canvas_ClearCanvasAlsoClearImages"></a> ClearCanvasAlsoClearImages

```csharp
public bool ClearCanvasAlsoClearImages { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_ClearCanvasAndClearTimeMachine"></a> ClearCanvasAndClearTimeMachine

```csharp
public bool ClearCanvasAndClearTimeMachine { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_CustomBackgroundColor"></a> CustomBackgroundColor

```csharp
public string CustomBackgroundColor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Canvas_CustomPenCursorPath"></a> CustomPenCursorPath

用户自定义光标文件路径（当 PenCursorType == 2 时使用）。

```csharp
public string CustomPenCursorPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Canvas_DisablePressure"></a> DisablePressure

```csharp
public bool DisablePressure { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_EdgeExpandAutoHideMs"></a> EdgeExpandAutoHideMs

"扩展画布"按钮在无新触发后保持可见的时长（毫秒）。超过后自动隐藏。

```csharp
public double EdgeExpandAutoHideMs { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Canvas_EdgeExpandThreshold"></a> EdgeExpandThreshold

触发"扩展画布"提示按钮的边缘阈值（像素）。当笔画的任意触点距画布四边的距离小于该值时，提示按钮会浮现。
默认 80 像素，便于教师日常书写时容易触发。

```csharp
public double EdgeExpandThreshold { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Canvas_EdgeExpandTranslateStep"></a> EdgeExpandTranslateStep

点击"扩展画布"按钮时一次性平移墨迹的像素距离。值越大，单击腾出的书写空间越大。

```csharp
public double EdgeExpandTranslateStep { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Canvas_EnableBrushAutoRestore"></a> EnableBrushAutoRestore

```csharp
public bool EnableBrushAutoRestore { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_EnableEraserAutoSwitchBack"></a> EnableEraserAutoSwitchBack

```csharp
public bool EnableEraserAutoSwitchBack { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_EnableInkFade"></a> EnableInkFade

```csharp
public bool EnableInkFade { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_EnableLongPressUndoClear"></a> EnableLongPressUndoClear

长按撤销按钮约 0.8 秒清空画布（默认关闭，快速点击仍是普通撤销）。

```csharp
public bool EnableLongPressUndoClear { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_EnablePalmEraser"></a> EnablePalmEraser

```csharp
public bool EnablePalmEraser { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_EnablePressureTouchMode"></a> EnablePressureTouchMode

```csharp
public bool EnablePressureTouchMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_EnableVelocityBrushTip"></a> EnableVelocityBrushTip

```csharp
public bool EnableVelocityBrushTip { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_EraserAutoSwitchBackDelaySeconds"></a> EraserAutoSwitchBackDelaySeconds

```csharp
public int EraserAutoSwitchBackDelaySeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_EraserShapeType"></a> EraserShapeType

```csharp
public int EraserShapeType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_EraserSize"></a> EraserSize

```csharp
public int EraserSize { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_EraserType"></a> EraserType

```csharp
public int EraserType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_FitToCurve"></a> FitToCurve

```csharp
public bool FitToCurve { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_HideStrokeWhenSelecting"></a> HideStrokeWhenSelecting

```csharp
public bool HideStrokeWhenSelecting { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_HighPrecisionLineStraighten"></a> HighPrecisionLineStraighten

```csharp
public bool HighPrecisionLineStraighten { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_HighlighterAlpha"></a> HighlighterAlpha

```csharp
public double HighlighterAlpha { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Canvas_HighlighterOverlapEnabled"></a> HighlighterOverlapEnabled

```csharp
public bool HighlighterOverlapEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_HighlighterWidth"></a> HighlighterWidth

```csharp
public double HighlighterWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Canvas_HyperbolaAsymptoteOption"></a> HyperbolaAsymptoteOption

```csharp
public OptionalOperation HyperbolaAsymptoteOption { get; set; }
```

#### Property Value

 [OptionalOperation](Ink\_Canvas.OptionalOperation.md)

### <a id="Ink_Canvas_Canvas_InkAlpha"></a> InkAlpha

```csharp
public double InkAlpha { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Canvas_InkFadeSpeedMultiplier"></a> InkFadeSpeedMultiplier

```csharp
public double InkFadeSpeedMultiplier { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Canvas_InkFadeTime"></a> InkFadeTime

```csharp
public int InkFadeTime { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_InkSmoothingQuality"></a> InkSmoothingQuality

```csharp
public int InkSmoothingQuality { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_InkStyle"></a> InkStyle

笔锋存储值：0 基于点集，1 基于速率，2 关闭，3 实时笔锋（速度与压感混合）。界面下拉顺序为实时笔锋、点集、速率、关闭。

```csharp
public int InkStyle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_InkWidth"></a> InkWidth

```csharp
public double InkWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Canvas_IsCompressPicturesUploaded"></a> IsCompressPicturesUploaded

```csharp
public bool IsCompressPicturesUploaded { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_IsEnableEdgeExpandHint"></a> IsEnableEdgeExpandHint

是否在书写位置贴近画布边缘时显示"扩展画布"提示按钮。
默认关闭，避免在 PPT 演示、桌面批注等场景干扰；开启后在白板书写时贴近边缘会自动浮现提示。

```csharp
public bool IsEnableEdgeExpandHint { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_IsEnableEdgeExpandHintWhiteboardOnly"></a> IsEnableEdgeExpandHintWhiteboardOnly

"扩展画布"提示是否仅在白板模式下启用。
为 true 时，桌面批注、PPT 演示等非白板场景即使书写贴近边缘也不会浮现提示按钮。
默认开启，与功能初衷一致：扩展画布是白板场景的专用能力。

```csharp
public bool IsEnableEdgeExpandHintWhiteboardOnly { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_IsShowCursor"></a> IsShowCursor

```csharp
public bool IsShowCursor { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_LaserPenAlpha"></a> LaserPenAlpha

```csharp
public int LaserPenAlpha { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_LaserPenWidth"></a> LaserPenWidth

```csharp
public double LaserPenWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Canvas_LaunchSeewoVideoShowcaseForWhiteboardBooth"></a> LaunchSeewoVideoShowcaseForWhiteboardBooth

为 true 时，白板工具栏「展台」按钮启动希沃视频展台（sweclauncher），否则使用内置展台。

```csharp
public bool LaunchSeewoVideoShowcaseForWhiteboardBooth { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_LineEndpointSnapping"></a> LineEndpointSnapping

```csharp
public bool LineEndpointSnapping { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_LineEndpointSnappingThreshold"></a> LineEndpointSnappingThreshold

```csharp
public int LineEndpointSnappingThreshold { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_MaxConcurrentSmoothingTasks"></a> MaxConcurrentSmoothingTasks

```csharp
public int MaxConcurrentSmoothingTasks { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_MergeInkSmoothingWithUndo"></a> MergeInkSmoothingWithUndo

```csharp
public bool MergeInkSmoothingWithUndo { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_NotifyAfterLongPressUndoClear"></a> NotifyAfterLongPressUndoClear

长按撤销清屏后是否在通知中心发送提示（默认开启）。

```csharp
public bool NotifyAfterLongPressUndoClear { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_PalmEraserSensitivity"></a> PalmEraserSensitivity

```csharp
public int PalmEraserSensitivity { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_PauseStraightenDelay"></a> PauseStraightenDelay

```csharp
public int PauseStraightenDelay { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_PauseStraightenLine"></a> PauseStraightenLine

```csharp
public bool PauseStraightenLine { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_PenCursorType"></a> PenCursorType

画笔光标类型：0 系统光标，1 软件内置光标（默认），2 用户自定义光标。

```csharp
public int PenCursorType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Canvas_RealtimeBrushTipMinDistanceScale"></a> RealtimeBrushTipMinDistanceScale

```csharp
public double RealtimeBrushTipMinDistanceScale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Canvas_ShowCircleCenter"></a> ShowCircleCenter

```csharp
public bool ShowCircleCenter { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_ShowCoordinateUnitMarks"></a> ShowCoordinateUnitMarks

```csharp
public bool ShowCoordinateUnitMarks { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_UseAdvancedBezierSmoothing"></a> UseAdvancedBezierSmoothing

```csharp
public bool UseAdvancedBezierSmoothing { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_UseAsyncInkSmoothing"></a> UseAsyncInkSmoothing

```csharp
public bool UseAsyncInkSmoothing { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_UseHardwareAcceleration"></a> UseHardwareAcceleration

```csharp
public bool UseHardwareAcceleration { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_UsingWhiteboard"></a> UsingWhiteboard

```csharp
public bool UsingWhiteboard { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Canvas_VelocityBrushTipMix"></a> VelocityBrushTipMix

```csharp
public double VelocityBrushTipMix { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Canvas_VideoPresenterLastCameraName"></a> VideoPresenterLastCameraName

视频展台持久化：上次选中的摄像头设备名（DsDevice.Name）。
下次启动展台时优先选中同名设备；找不到则回退到第一个。
用设备名而非索引，因为索引会随设备热插拔变化。

```csharp
public string VideoPresenterLastCameraName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Canvas_VideoPresenterLastResolutionKey"></a> VideoPresenterLastResolutionKey

视频展台持久化：上次选中的分辨率键，格式 "WxH@FPS"（例如 "1920x1080@30"）。
下次启动展台时优先选中相同键的 capability；找不到则回退到默认（最接近 1920×1080 的项）。
用字符串键而非索引，因为索引会随驱动 capability 列表顺序变化。

```csharp
public string VideoPresenterLastResolutionKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

