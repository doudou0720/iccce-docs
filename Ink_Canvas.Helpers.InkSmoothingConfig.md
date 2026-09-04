# <a id="Ink_Canvas_Helpers_InkSmoothingConfig"></a> Class InkSmoothingConfig

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

墨迹平滑配置类

```csharp
public class InkSmoothingConfig
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InkSmoothingConfig](Ink\_Canvas.Helpers.InkSmoothingConfig.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_CurveTension"></a> CurveTension

```csharp
public double CurveTension { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_InterpolationSteps"></a> InterpolationSteps

```csharp
public int InterpolationSteps { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_MaxConcurrentTasks"></a> MaxConcurrentTasks

```csharp
public int MaxConcurrentTasks { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_MaxCurvatureThreshold"></a> MaxCurvatureThreshold

```csharp
public double MaxCurvatureThreshold { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_MaxPointsPerStroke"></a> MaxPointsPerStroke

```csharp
public int MaxPointsPerStroke { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_MinCurvatureThreshold"></a> MinCurvatureThreshold

```csharp
public double MinCurvatureThreshold { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_Quality"></a> Quality

```csharp
public InkSmoothingConfig.SmoothingQuality Quality { get; set; }
```

#### Property Value

 [InkSmoothingConfig](Ink\_Canvas.Helpers.InkSmoothingConfig.md).[SmoothingQuality](Ink\_Canvas.Helpers.InkSmoothingConfig.SmoothingQuality.md)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_ResampleInterval"></a> ResampleInterval

```csharp
public double ResampleInterval { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_SmoothingStrength"></a> SmoothingStrength

```csharp
public double SmoothingStrength { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_UseAdaptiveInterpolation"></a> UseAdaptiveInterpolation

```csharp
public bool UseAdaptiveInterpolation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_UseAsyncProcessing"></a> UseAsyncProcessing

```csharp
public bool UseAsyncProcessing { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_UseHardwareAcceleration"></a> UseHardwareAcceleration

```csharp
public bool UseHardwareAcceleration { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_ApplyQualitySettings"></a> ApplyQualitySettings\(\)

应用质量设置

```csharp
public void ApplyQualitySettings()
```

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_FromSettings"></a> FromSettings\(\)

从设置中加载配置

```csharp
public static InkSmoothingConfig FromSettings()
```

#### Returns

 [InkSmoothingConfig](Ink\_Canvas.Helpers.InkSmoothingConfig.md)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_GetSummary"></a> GetSummary\(\)

获取配置摘要

```csharp
public string GetSummary()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_SaveToSettings"></a> SaveToSettings\(\)

保存配置到设置

```csharp
public void SaveToSettings()
```

### <a id="Ink_Canvas_Helpers_InkSmoothingConfig_Validate"></a> Validate\(\)

验证配置参数

```csharp
public bool Validate()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

