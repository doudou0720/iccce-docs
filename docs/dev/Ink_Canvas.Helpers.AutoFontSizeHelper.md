# <a id="Ink_Canvas_Helpers_AutoFontSizeHelper"></a> Class AutoFontSizeHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

Automatically shrinks text to fit available width.
Supports TextBlock and Label.
Only shrinks, never enlarges above MaxFontSize.

```csharp
public static class AutoFontSizeHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AutoFontSizeHelper](Ink\_Canvas.Helpers.AutoFontSizeHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_Helpers_AutoFontSizeHelper_IsEnabledProperty"></a> IsEnabledProperty

```csharp
public static readonly DependencyProperty IsEnabledProperty
```

#### Field Value

 [DependencyProperty](https://learn.microsoft.com/dotnet/api/system.windows.dependencyproperty)

### <a id="Ink_Canvas_Helpers_AutoFontSizeHelper_MaxFontSizeProperty"></a> MaxFontSizeProperty

```csharp
public static readonly DependencyProperty MaxFontSizeProperty
```

#### Field Value

 [DependencyProperty](https://learn.microsoft.com/dotnet/api/system.windows.dependencyproperty)

### <a id="Ink_Canvas_Helpers_AutoFontSizeHelper_MinFontSizeProperty"></a> MinFontSizeProperty

```csharp
public static readonly DependencyProperty MinFontSizeProperty
```

#### Field Value

 [DependencyProperty](https://learn.microsoft.com/dotnet/api/system.windows.dependencyproperty)

### <a id="Ink_Canvas_Helpers_AutoFontSizeHelper_StepProperty"></a> StepProperty

```csharp
public static readonly DependencyProperty StepProperty
```

#### Field Value

 [DependencyProperty](https://learn.microsoft.com/dotnet/api/system.windows.dependencyproperty)

## Methods

### <a id="Ink_Canvas_Helpers_AutoFontSizeHelper_GetIsEnabled_System_Windows_DependencyObject_"></a> GetIsEnabled\(DependencyObject\)

```csharp
public static bool GetIsEnabled(DependencyObject element)
```

#### Parameters

`element` [DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_AutoFontSizeHelper_GetMaxFontSize_System_Windows_DependencyObject_"></a> GetMaxFontSize\(DependencyObject\)

```csharp
public static double GetMaxFontSize(DependencyObject element)
```

#### Parameters

`element` [DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_AutoFontSizeHelper_GetMinFontSize_System_Windows_DependencyObject_"></a> GetMinFontSize\(DependencyObject\)

```csharp
public static double GetMinFontSize(DependencyObject element)
```

#### Parameters

`element` [DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_AutoFontSizeHelper_GetStep_System_Windows_DependencyObject_"></a> GetStep\(DependencyObject\)

```csharp
public static double GetStep(DependencyObject element)
```

#### Parameters

`element` [DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_AutoFontSizeHelper_SetIsEnabled_System_Windows_DependencyObject_System_Boolean_"></a> SetIsEnabled\(DependencyObject, bool\)

```csharp
public static void SetIsEnabled(DependencyObject element, bool value)
```

#### Parameters

`element` [DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject)

`value` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_AutoFontSizeHelper_SetMaxFontSize_System_Windows_DependencyObject_System_Double_"></a> SetMaxFontSize\(DependencyObject, double\)

```csharp
public static void SetMaxFontSize(DependencyObject element, double value)
```

#### Parameters

`element` [DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject)

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_AutoFontSizeHelper_SetMinFontSize_System_Windows_DependencyObject_System_Double_"></a> SetMinFontSize\(DependencyObject, double\)

```csharp
public static void SetMinFontSize(DependencyObject element, double value)
```

#### Parameters

`element` [DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject)

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_AutoFontSizeHelper_SetStep_System_Windows_DependencyObject_System_Double_"></a> SetStep\(DependencyObject, double\)

```csharp
public static void SetStep(DependencyObject element, double value)
```

#### Parameters

`element` [DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject)

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

