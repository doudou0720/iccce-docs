# <a id="Ink_Canvas_Controls_CanvasMediaControl"></a> Class CanvasMediaControl

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class CanvasMediaControl : UserControl
```

#### Inheritance

UserControl ← 
[CanvasMediaControl](Ink\_Canvas.Controls.CanvasMediaControl.md)

## Constructors

### <a id="Ink_Canvas_Controls_CanvasMediaControl__ctor"></a> CanvasMediaControl\(\)

```csharp
public CanvasMediaControl()
```

## Properties

### <a id="Ink_Canvas_Controls_CanvasMediaControl_DisplayName"></a> DisplayName

```csharp
public string DisplayName { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Controls_CanvasMediaControl_IsAudioOnly"></a> IsAudioOnly

```csharp
public bool IsAudioOnly { get; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Controls_CanvasMediaControl_MediaPlayer"></a> MediaPlayer

```csharp
public MediaElement MediaPlayer { get; }
```

#### Property Value

 MediaElement

### <a id="Ink_Canvas_Controls_CanvasMediaControl_PlaybackRate"></a> PlaybackRate

```csharp
public double PlaybackRate { get; }
```

#### Property Value

 double

### <a id="Ink_Canvas_Controls_CanvasMediaControl_SourcePath"></a> SourcePath

```csharp
public string SourcePath { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Controls_CanvasMediaControl_VolumeLevel"></a> VolumeLevel

```csharp
public double VolumeLevel { get; }
```

#### Property Value

 double

## Methods

### <a id="Ink_Canvas_Controls_CanvasMediaControl_GetPlaybackPositionOrNull"></a> GetPlaybackPositionOrNull\(\)

```csharp
public TimeSpan? GetPlaybackPositionOrNull()
```

#### Returns

 TimeSpan?

### <a id="Ink_Canvas_Controls_CanvasMediaControl_Initialize_System_String_System_String_"></a> Initialize\(string, string\)

```csharp
public void Initialize(string sourcePath, string displayName = null)
```

#### Parameters

`sourcePath` string

`displayName` string

### <a id="Ink_Canvas_Controls_CanvasMediaControl_IsInteractiveChildTarget_DependencyObject_"></a> IsInteractiveChildTarget\(DependencyObject\)

```csharp
public static bool IsInteractiveChildTarget(DependencyObject current)
```

#### Parameters

`current` DependencyObject

#### Returns

 bool

### <a id="Ink_Canvas_Controls_CanvasMediaControl_OnMouseLeftButtonDown_MouseButtonEventArgs_"></a> OnMouseLeftButtonDown\(MouseButtonEventArgs\)

```csharp
protected override void OnMouseLeftButtonDown(MouseButtonEventArgs e)
```

#### Parameters

`e` MouseButtonEventArgs

### <a id="Ink_Canvas_Controls_CanvasMediaControl_OnPreviewMouseLeftButtonDown_MouseButtonEventArgs_"></a> OnPreviewMouseLeftButtonDown\(MouseButtonEventArgs\)

```csharp
protected override void OnPreviewMouseLeftButtonDown(MouseButtonEventArgs e)
```

#### Parameters

`e` MouseButtonEventArgs

### <a id="Ink_Canvas_Controls_CanvasMediaControl_PausePlayback"></a> PausePlayback\(\)

```csharp
public void PausePlayback()
```

### <a id="Ink_Canvas_Controls_CanvasMediaControl_RegisterSelectHandler_MouseButtonEventHandler_"></a> RegisterSelectHandler\(MouseButtonEventHandler\)

```csharp
public void RegisterSelectHandler(MouseButtonEventHandler handler)
```

#### Parameters

`handler` MouseButtonEventHandler

### <a id="Ink_Canvas_Controls_CanvasMediaControl_RegisterTouchSelectHandler_EventHandler_TouchEventArgs__"></a> RegisterTouchSelectHandler\(EventHandler<TouchEventArgs\>\)

```csharp
public void RegisterTouchSelectHandler(EventHandler<TouchEventArgs> handler)
```

#### Parameters

`handler` EventHandler<TouchEventArgs\>

### <a id="Ink_Canvas_Controls_CanvasMediaControl_SetPlaybackPosition_TimeSpan_"></a> SetPlaybackPosition\(TimeSpan\)

```csharp
public void SetPlaybackPosition(TimeSpan position)
```

#### Parameters

`position` TimeSpan

### <a id="Ink_Canvas_Controls_CanvasMediaControl_SetPlaybackRate_System_Double_"></a> SetPlaybackRate\(double\)

```csharp
public void SetPlaybackRate(double speedRatio)
```

#### Parameters

`speedRatio` double

### <a id="Ink_Canvas_Controls_CanvasMediaControl_SetVolumeLevel_System_Double_"></a> SetVolumeLevel\(double\)

```csharp
public void SetVolumeLevel(double volume)
```

#### Parameters

`volume` double

### <a id="Ink_Canvas_Controls_CanvasMediaControl_Shutdown"></a> Shutdown\(\)

```csharp
public void Shutdown()
```

### <a id="Ink_Canvas_Controls_CanvasMediaControl_StopPlayback"></a> StopPlayback\(\)

```csharp
public void StopPlayback()
```

### <a id="Ink_Canvas_Controls_CanvasMediaControl_UpdateLocalizedTexts"></a> UpdateLocalizedTexts\(\)

```csharp
public void UpdateLocalizedTexts()
```

