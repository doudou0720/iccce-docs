# <a id="Ink_Canvas_Plugins_CompatibilityResult"></a> Class CompatibilityResult

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

兼容性检查结果。

```csharp
public class CompatibilityResult
```

#### Inheritance

object ← 
[CompatibilityResult](Ink\_Canvas.Plugins.CompatibilityResult.md)

## Properties

### <a id="Ink_Canvas_Plugins_CompatibilityResult_IsCompatible"></a> IsCompatible

```csharp
public bool IsCompatible { get; set; }
```

#### Property Value

 bool

### <a id="Ink_Canvas_Plugins_CompatibilityResult_Reason"></a> Reason

```csharp
public string Reason { get; set; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_Plugins_CompatibilityResult_Fail_System_String_"></a> Fail\(string\)

```csharp
public static CompatibilityResult Fail(string reason)
```

#### Parameters

`reason` string

#### Returns

 [CompatibilityResult](Ink\_Canvas.Plugins.CompatibilityResult.md)

### <a id="Ink_Canvas_Plugins_CompatibilityResult_Ok"></a> Ok\(\)

```csharp
public static CompatibilityResult Ok()
```

#### Returns

 [CompatibilityResult](Ink\_Canvas.Plugins.CompatibilityResult.md)

