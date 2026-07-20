# <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost"></a> Interface IBoardToolbarHost

Namespace: [Ink\_Canvas.Controls.Toolbar.BoardToolbar](Ink\_Canvas.Controls.Toolbar.BoardToolbar.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public interface IBoardToolbarHost
```

## Properties

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_CanAddNewPage"></a> CanAddNewPage

```csharp
bool CanAddNewPage { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_CanDeletePage"></a> CanDeletePage

```csharp
bool CanDeletePage { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_CanRedo"></a> CanRedo

```csharp
bool CanRedo { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_CanSwitchToNextPage"></a> CanSwitchToNextPage

```csharp
bool CanSwitchToNextPage { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_CanSwitchToPreviousPage"></a> CanSwitchToPreviousPage

```csharp
bool CanSwitchToPreviousPage { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_CanUndo"></a> CanUndo

```csharp
bool CanUndo { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_CurrentPageInfo"></a> CurrentPageInfo

```csharp
string CurrentPageInfo { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_Window"></a> Window

```csharp
MainWindow Window { get; }
```

#### Property Value

 [MainWindow](Ink\_Canvas.MainWindow.md)

## Methods

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_AddWhiteboardPage"></a> AddWhiteboardPage\(\)

```csharp
void AddWhiteboardPage()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_ChangeBackgroundColor"></a> ChangeBackgroundColor\(\)

```csharp
void ChangeBackgroundColor()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_DeleteWhiteboardPage"></a> DeleteWhiteboardPage\(\)

```csharp
void DeleteWhiteboardPage()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_ExitWhiteboard"></a> ExitWhiteboard\(\)

```csharp
void ExitWhiteboard()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_FindView_System_String_"></a> FindView\(string\)

```csharp
FrameworkElement FindView(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_InsertImage"></a> InsertImage\(\)

```csharp
void InsertImage()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_OpenTools"></a> OpenTools\(\)

```csharp
void OpenTools()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_Redo"></a> Redo\(\)

```csharp
void Redo()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_RegisterView_System_String_System_Windows_FrameworkElement_"></a> RegisterView\(string, FrameworkElement\)

```csharp
void RegisterView(string id, FrameworkElement view)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`view` [FrameworkElement](https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement)

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_SelectEraser"></a> SelectEraser\(\)

```csharp
void SelectEraser()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_SelectPen"></a> SelectPen\(\)

```csharp
void SelectPen()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_SelectRoaming"></a> SelectRoaming\(\)

```csharp
void SelectRoaming()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_SelectShape"></a> SelectShape\(\)

```csharp
void SelectShape()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_SelectStrokeEraser"></a> SelectStrokeEraser\(\)

```csharp
void SelectStrokeEraser()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_SelectTool"></a> SelectTool\(\)

```csharp
void SelectTool()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_SwitchToNextPage"></a> SwitchToNextPage\(\)

```csharp
void SwitchToNextPage()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_SwitchToPreviousPage"></a> SwitchToPreviousPage\(\)

```csharp
void SwitchToPreviousPage()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_ToggleGesture"></a> ToggleGesture\(\)

```csharp
void ToggleGesture()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_ToggleInkFreeze"></a> ToggleInkFreeze\(\)

```csharp
void ToggleInkFreeze()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_Undo"></a> Undo\(\)

```csharp
void Undo()
```

### <a id="Ink_Canvas_Controls_Toolbar_BoardToolbar_IBoardToolbarHost_UpdatePageInfo"></a> UpdatePageInfo\(\)

```csharp
void UpdatePageInfo()
```

