# <a id="Ink_Canvas_Plugins_InkCanvasService"></a> Class InkCanvasService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class InkCanvasService : IInkCanvasService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InkCanvasService](Ink\_Canvas.Plugins.InkCanvasService.md)

#### Implements

IInkCanvasService

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Plugins_InkCanvasService__ctor_Ink_Canvas_MainWindow_"></a> InkCanvasService\(MainWindow\)

```csharp
public InkCanvasService(MainWindow mainWindow)
```

#### Parameters

`mainWindow` [MainWindow](Ink\_Canvas.MainWindow.md)

## Methods

### <a id="Ink_Canvas_Plugins_InkCanvasService_CloseWhiteboard"></a> CloseWhiteboard\(\)

```csharp
public void CloseWhiteboard()
```

### <a id="Ink_Canvas_Plugins_InkCanvasService_OpenWhiteboard"></a> OpenWhiteboard\(\)

```csharp
public void OpenWhiteboard()
```

### <a id="Ink_Canvas_Plugins_InkCanvasService_OpenWhiteboardAsync_System_Int32_"></a> OpenWhiteboardAsync\(int\)

```csharp
public Task OpenWhiteboardAsync(int delayMilliseconds = 0)
```

#### Parameters

`delayMilliseconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

