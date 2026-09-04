# <a id="Ink_Canvas_RandWindow"></a> Class RandWindow

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

Interaction logic for RandWindow.xaml

```csharp
public class RandWindow : Window
```

#### Inheritance

Window ← 
[RandWindow](Ink\_Canvas.RandWindow.md)

## Constructors

### <a id="Ink_Canvas_RandWindow__ctor_Ink_Canvas_Settings_"></a> RandWindow\(Settings\)

```csharp
public RandWindow(Settings settings)
```

#### Parameters

`settings` [Settings](Ink\_Canvas.Settings.md)

### <a id="Ink_Canvas_RandWindow__ctor_Ink_Canvas_Settings_System_Boolean_"></a> RandWindow\(Settings, bool\)

```csharp
public RandWindow(Settings settings, bool IsAutoClose)
```

#### Parameters

`settings` [Settings](Ink\_Canvas.Settings.md)

`IsAutoClose` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Fields

### <a id="Ink_Canvas_RandWindow_Names"></a> Names

```csharp
public List<string> Names
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_RandWindow_PeopleCount"></a> PeopleCount

```csharp
public int PeopleCount
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_RandWindow_RandDoneAutoCloseWaitTime"></a> RandDoneAutoCloseWaitTime

```csharp
public int RandDoneAutoCloseWaitTime
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_RandWindow_RandMaxPeopleOneTime"></a> RandMaxPeopleOneTime

```csharp
public int RandMaxPeopleOneTime
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_RandWindow_RandWaitingThreadSleepTime"></a> RandWaitingThreadSleepTime

```csharp
public int RandWaitingThreadSleepTime
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_RandWindow_RandWaitingTimes"></a> RandWaitingTimes

```csharp
public int RandWaitingTimes
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_RandWindow_TotalCount"></a> TotalCount

```csharp
public int TotalCount
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_RandWindow_isAutoClose"></a> isAutoClose

```csharp
public bool isAutoClose
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_RandWindow_isNotRepeatName"></a> isNotRepeatName

```csharp
public bool isNotRepeatName
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_RandWindow_randSeed"></a> randSeed

```csharp
public static int randSeed
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_RandWindow_RefreshTheme"></a> RefreshTheme\(\)

刷新主题，当主窗口主题切换时调用

```csharp
public void RefreshTheme()
```

