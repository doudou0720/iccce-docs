# <a id="Ink_Canvas_Helpers_PopupManagerHelper"></a> Class PopupManagerHelper

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class PopupManagerHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PopupManagerHelper](Ink\_Canvas.Helpers.PopupManagerHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_PopupManagerHelper__ctor"></a> PopupManagerHelper\(\)

```csharp
public PopupManagerHelper()
```

### <a id="Ink_Canvas_Helpers_PopupManagerHelper__ctor_Ink_Canvas_Helpers_PopupManagerHelper_Config_"></a> PopupManagerHelper\(Config\)

```csharp
public PopupManagerHelper(PopupManagerHelper.Config config)
```

#### Parameters

`config` [PopupManagerHelper](Ink\_Canvas.Helpers.PopupManagerHelper.md).[Config](Ink\_Canvas.Helpers.PopupManagerHelper.Config.md)

## Properties

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_ShouldBeTopmost"></a> ShouldBeTopmost

```csharp
public Func<bool> ShouldBeTopmost { get; set; }
```

#### Property Value

 [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

## Methods

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_BringToFront_System_Windows_Controls_Primitives_Popup_"></a> BringToFront\(Popup\)

```csharp
public void BringToFront(Popup popup)
```

#### Parameters

`popup` [Popup](https://learn.microsoft.com/dotnet/api/system.windows.controls.primitives.popup)

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_BringToFrontLight_System_Windows_Controls_Primitives_Popup_"></a> BringToFrontLight\(Popup\)

```csharp
public void BringToFrontLight(Popup popup)
```

#### Parameters

`popup` [Popup](https://learn.microsoft.com/dotnet/api/system.windows.controls.primitives.popup)

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_Cleanup"></a> Cleanup\(\)

```csharp
public void Cleanup()
```

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_Initialize"></a> Initialize\(\)

```csharp
public void Initialize()
```

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_MarkNeedsUpdate"></a> MarkNeedsUpdate\(\)

```csharp
public void MarkNeedsUpdate()
```

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_RegisterPopup_System_Windows_Controls_Primitives_Popup_"></a> RegisterPopup\(Popup\)

```csharp
public void RegisterPopup(Popup popup)
```

#### Parameters

`popup` [Popup](https://learn.microsoft.com/dotnet/api/system.windows.controls.primitives.popup)

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_UnregisterPopup_System_Windows_Controls_Primitives_Popup_"></a> UnregisterPopup\(Popup\)

```csharp
public void UnregisterPopup(Popup popup)
```

#### Parameters

`popup` [Popup](https://learn.microsoft.com/dotnet/api/system.windows.controls.primitives.popup)

### <a id="Ink_Canvas_Helpers_PopupManagerHelper_UpdatePosition_System_Windows_Controls_Primitives_Popup_"></a> UpdatePosition\(Popup\)

```csharp
public void UpdatePosition(Popup popup)
```

#### Parameters

`popup` [Popup](https://learn.microsoft.com/dotnet/api/system.windows.controls.primitives.popup)

