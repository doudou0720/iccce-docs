# <a id="Ink_Canvas_Controls_BoardRoamingPopupContent"></a> Class BoardRoamingPopupContent

Namespace: [Ink\_Canvas.Controls](Ink\_Canvas.Controls.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class BoardRoamingPopupContent : UserControl
```

#### Inheritance

UserControl ← 
[BoardRoamingPopupContent](Ink\_Canvas.Controls.BoardRoamingPopupContent.md)

## Constructors

### <a id="Ink_Canvas_Controls_BoardRoamingPopupContent__ctor"></a> BoardRoamingPopupContent\(\)

```csharp
public BoardRoamingPopupContent()
```

## Properties

### <a id="Ink_Canvas_Controls_BoardRoamingPopupContent_CloseButtonControl"></a> CloseButtonControl

```csharp
public Button CloseButtonControl { get; }
```

#### Property Value

 Button

### <a id="Ink_Canvas_Controls_BoardRoamingPopupContent_PreviewImageControl"></a> PreviewImageControl

```csharp
public Image PreviewImageControl { get; }
```

#### Property Value

 Image

## Methods

### <a id="Ink_Canvas_Controls_BoardRoamingPopupContent_SetViewport_Rect_Rect_System_String_"></a> SetViewport\(Rect, Rect, string\)

```csharp
public void SetViewport(Rect viewport, Rect movementBounds, string hint)
```

#### Parameters

`viewport` Rect

`movementBounds` Rect

`hint` string

### <a id="Ink_Canvas_Controls_BoardRoamingPopupContent_ViewportDragCompleted"></a> ViewportDragCompleted

```csharp
public event Action ViewportDragCompleted
```

#### Event Type

 Action

### <a id="Ink_Canvas_Controls_BoardRoamingPopupContent_ViewportDragStarted"></a> ViewportDragStarted

```csharp
public event Action ViewportDragStarted
```

#### Event Type

 Action

### <a id="Ink_Canvas_Controls_BoardRoamingPopupContent_ViewportPositionChanged"></a> ViewportPositionChanged

```csharp
public event Action<Point> ViewportPositionChanged
```

#### Event Type

 Action<Point\>

