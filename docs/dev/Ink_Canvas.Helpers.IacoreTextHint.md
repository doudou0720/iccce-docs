# <a id="Ink_Canvas_Helpers_IacoreTextHint"></a> Class IacoreTextHint

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

IACore 文字识别的上下文提示（对应 IAWinFX AnalysisHintNode 的属性层）。
UWP WinRT InkAnalyzer 无法访问这些层；只有走 IPC 辅助进程才能注入 Factoid/WordList/WordMode/Coerce。
HintLeft/Top/Width/Height 全 0 表示无限区域（属性作用于全部笔画）。

```csharp
public sealed class IacoreTextHint
```

#### Inheritance

object ← 
[IacoreTextHint](Ink\_Canvas.Helpers.IacoreTextHint.md)

## Fields

### <a id="Ink_Canvas_Helpers_IacoreTextHint_CoerceToFactoid"></a> CoerceToFactoid

```csharp
public bool CoerceToFactoid
```

#### Field Value

 bool

### <a id="Ink_Canvas_Helpers_IacoreTextHint_Factoid"></a> Factoid

```csharp
public string Factoid
```

#### Field Value

 string

### <a id="Ink_Canvas_Helpers_IacoreTextHint_HintHeight"></a> HintHeight

```csharp
public float HintHeight
```

#### Field Value

 float

### <a id="Ink_Canvas_Helpers_IacoreTextHint_HintLeft"></a> HintLeft

```csharp
public float HintLeft
```

#### Field Value

 float

### <a id="Ink_Canvas_Helpers_IacoreTextHint_HintTop"></a> HintTop

```csharp
public float HintTop
```

#### Field Value

 float

### <a id="Ink_Canvas_Helpers_IacoreTextHint_HintWidth"></a> HintWidth

```csharp
public float HintWidth
```

#### Field Value

 float

### <a id="Ink_Canvas_Helpers_IacoreTextHint_WordList"></a> WordList

```csharp
public string[] WordList
```

#### Field Value

 string\[\]

### <a id="Ink_Canvas_Helpers_IacoreTextHint_WordMode"></a> WordMode

```csharp
public bool WordMode
```

#### Field Value

 bool

