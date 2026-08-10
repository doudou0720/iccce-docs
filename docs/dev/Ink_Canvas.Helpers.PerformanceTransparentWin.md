# <a id="Ink_Canvas_Helpers_PerformanceTransparentWin"></a> Class PerformanceTransparentWin

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Main-window base that can use WindowChrome for DWM-backed transparent rendering.

```csharp
public class PerformanceTransparentWin : Window
```

#### Inheritance

Window ← 
[PerformanceTransparentWin](Ink\_Canvas.Helpers.PerformanceTransparentWin.md)

#### Derived

[MainWindow](Ink\_Canvas.MainWindow.md)

## Constructors

### <a id="Ink_Canvas_Helpers_PerformanceTransparentWin__ctor"></a> PerformanceTransparentWin\(\)

```csharp
public PerformanceTransparentWin()
```

## Properties

### <a id="Ink_Canvas_Helpers_PerformanceTransparentWin_IsUsingWindowChromeRendering"></a> IsUsingWindowChromeRendering

```csharp
public bool IsUsingWindowChromeRendering { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Helpers_PerformanceTransparentWin_SetTransparentHitThrough"></a> SetTransparentHitThrough\(\)

```csharp
public void SetTransparentHitThrough()
```

### <a id="Ink_Canvas_Helpers_PerformanceTransparentWin_SetTransparentNotHitThrough"></a> SetTransparentNotHitThrough\(\)

```csharp
public void SetTransparentNotHitThrough()
```

### <a id="Ink_Canvas_Helpers_PerformanceTransparentWin_ShouldHandleWindowChromeHitTest_Point_"></a> ShouldHandleWindowChromeHitTest\(Point\)

```csharp
protected virtual bool ShouldHandleWindowChromeHitTest(Point windowPoint)
```

#### Parameters

`windowPoint` Point

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

