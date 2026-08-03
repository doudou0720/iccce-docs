# <a id="Ink_Canvas_AddCustomIconWindow"></a> Class AddCustomIconWindow

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

AddCustomIconWindow.xaml 的交互逻辑

```csharp
public class AddCustomIconWindow : UserControl
```

#### Inheritance

UserControl ← 
[AddCustomIconWindow](Ink\_Canvas.AddCustomIconWindow.md)

## Constructors

### <a id="Ink_Canvas_AddCustomIconWindow__ctor_Ink_Canvas_MainWindow_"></a> AddCustomIconWindow\(MainWindow\)

```csharp
public AddCustomIconWindow(MainWindow owner)
```

#### Parameters

`owner` [MainWindow](Ink\_Canvas.MainWindow.md)

## Properties

### <a id="Ink_Canvas_AddCustomIconWindow_IsSuccess"></a> IsSuccess

```csharp
public bool IsSuccess { get; }
```

#### Property Value

 bool

## Methods

### <a id="Ink_Canvas_AddCustomIconWindow_CanSave"></a> CanSave\(\)

```csharp
public bool CanSave()
```

#### Returns

 bool

### <a id="Ink_Canvas_AddCustomIconWindow_Save"></a> Save\(\)

```csharp
public bool Save()
```

#### Returns

 bool

### <a id="Ink_Canvas_AddCustomIconWindow_OnInputChanged"></a> OnInputChanged

当输入变化时触发，由外部订阅来更新按钮状态

```csharp
public event Action OnInputChanged
```

#### Event Type

 Action

