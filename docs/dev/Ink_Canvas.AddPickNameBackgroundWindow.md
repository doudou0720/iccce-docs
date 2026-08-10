# <a id="Ink_Canvas_AddPickNameBackgroundWindow"></a> Class AddPickNameBackgroundWindow

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

AddPickNameBackgroundWindow.xaml 的交互逻辑

```csharp
public class AddPickNameBackgroundWindow : UserControl
```

#### Inheritance

UserControl ← 
[AddPickNameBackgroundWindow](Ink\_Canvas.AddPickNameBackgroundWindow.md)

## Constructors

### <a id="Ink_Canvas_AddPickNameBackgroundWindow__ctor_Ink_Canvas_MainWindow_"></a> AddPickNameBackgroundWindow\(MainWindow\)

```csharp
public AddPickNameBackgroundWindow(MainWindow owner)
```

#### Parameters

`owner` [MainWindow](Ink\_Canvas.MainWindow.md)

## Properties

### <a id="Ink_Canvas_AddPickNameBackgroundWindow_IsSuccess"></a> IsSuccess

```csharp
public bool IsSuccess { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_AddPickNameBackgroundWindow_CanSave"></a> CanSave\(\)

```csharp
public bool CanSave()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_AddPickNameBackgroundWindow_Save"></a> Save\(\)

```csharp
public bool Save()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_AddPickNameBackgroundWindow_OnInputChanged"></a> OnInputChanged

当输入变化时触发，由外部订阅来更新按钮状态

```csharp
public event Action OnInputChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

