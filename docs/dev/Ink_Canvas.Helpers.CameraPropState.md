# <a id="Ink_Canvas_Helpers_CameraPropState"></a> Class CameraPropState

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

单个摄像头属性的支持状态与归一化值。

```csharp
public class CameraPropState
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CameraPropState](Ink\_Canvas.Helpers.CameraPropState.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_Helpers_CameraPropState_HwDefault"></a> HwDefault

硬件默认值。

```csharp
public int HwDefault
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_CameraPropState_HwMax"></a> HwMax

硬件范围最大值。

```csharp
public int HwMax
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_CameraPropState_HwMin"></a> HwMin

硬件范围最小值（IAMVideoProcAmp/IAMCameraControl.GetRange 返回）。

```csharp
public int HwMin
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_CameraPropState_NormalizedValue"></a> NormalizedValue

归一化值 -100..100，0=默认。+100=max，-100=min。

```csharp
public int NormalizedValue
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Helpers_CameraPropState_Supported"></a> Supported

摄像头是否支持手动调节该属性。

```csharp
public bool Supported
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

