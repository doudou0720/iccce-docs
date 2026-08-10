# <a id="Ink_Canvas_Windows_SplashScreen"></a> Class SplashScreen

Namespace: [Ink\_Canvas.Windows](Ink\_Canvas.Windows.md)  
Assembly: InkCanvasForClass.dll  

SplashScreen.xaml 的交互逻辑

```csharp
public class SplashScreen : Window
```

#### Inheritance

Window ← 
[SplashScreen](Ink\_Canvas.Windows.SplashScreen.md)

## Constructors

### <a id="Ink_Canvas_Windows_SplashScreen__ctor"></a> SplashScreen\(\)

```csharp
public SplashScreen()
```

## Methods

### <a id="Ink_Canvas_Windows_SplashScreen_CloseSplashScreen"></a> CloseSplashScreen\(\)

```csharp
public void CloseSplashScreen()
```

### <a id="Ink_Canvas_Windows_SplashScreen_LoadSplashImageWithStyle"></a> LoadSplashImageWithStyle\(\)

加载启动图片并返回实际样式

```csharp
public int LoadSplashImageWithStyle()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

实际选择的样式

### <a id="Ink_Canvas_Windows_SplashScreen_SetLoadingMessage_System_String_"></a> SetLoadingMessage\(string\)

设置加载消息

```csharp
public void SetLoadingMessage(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

加载消息

### <a id="Ink_Canvas_Windows_SplashScreen_SetLoadingMessage_System_String_System_Int32_"></a> SetLoadingMessage\(string, int\)

```csharp
public void SetLoadingMessage(string message, int actualSplashStyle)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`actualSplashStyle` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Windows_SplashScreen_SetProgress_System_Int32_"></a> SetProgress\(int\)

设置加载进度（0-100）

```csharp
public void SetProgress(int progress)
```

#### Parameters

`progress` [int](https://learn.microsoft.com/dotnet/api/system.int32)

进度百分比

