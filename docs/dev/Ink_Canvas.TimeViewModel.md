# <a id="Ink_Canvas_TimeViewModel"></a> Class TimeViewModel

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

时间视图模型类，用于绑定显示时间和日期

```csharp
public class TimeViewModel : INotifyPropertyChanged
```

#### Inheritance

INotifyPropertyChanged ← 
[TimeViewModel](Ink\_Canvas.TimeViewModel.md)

## Properties

### <a id="Ink_Canvas_TimeViewModel_nowDate"></a> nowDate

当前日期属性

```csharp
public string nowDate { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_TimeViewModel_nowTime"></a> nowTime

当前时间属性

```csharp
public string nowTime { get; set; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_TimeViewModel_OnPropertyChanged_System_String_"></a> OnPropertyChanged\(string\)

触发属性变化事件

```csharp
protected virtual void OnPropertyChanged(string propertyName = null)
```

#### Parameters

`propertyName` string

属性名称

### <a id="Ink_Canvas_TimeViewModel_PropertyChanged"></a> PropertyChanged

属性变化事件

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 PropertyChangedEventHandler

