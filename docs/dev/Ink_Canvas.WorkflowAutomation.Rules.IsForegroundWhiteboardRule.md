# <a id="Ink_Canvas_WorkflowAutomation_Rules_IsForegroundWhiteboardRule"></a> Class IsForegroundWhiteboardRule

Namespace: [Ink\_Canvas.WorkflowAutomation.Rules](Ink\_Canvas.WorkflowAutomation.Rules.md)  
Assembly: InkCanvasForClass.dll  

判断前台窗口是否为 ICC-CE 白板的规则。
当 ICC-CE 处于白板模式（currentMode == 1）且主窗口可见时返回真。
此规则不依赖 GetForegroundWindow()，因此在无焦点模式（WS_EX_NOACTIVATE）下也能正常工作。

```csharp
public static class IsForegroundWhiteboardRule
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IsForegroundWhiteboardRule](Ink\_Canvas.WorkflowAutomation.Rules.IsForegroundWhiteboardRule.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_WorkflowAutomation_Rules_IsForegroundWhiteboardRule_RuleId"></a> RuleId

```csharp
public const string RuleId = "inkcanvas.isforegroundwhiteboard"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Rules_IsForegroundWhiteboardRule_Evaluate_System_Object_"></a> Evaluate\(object\)

```csharp
public static bool Evaluate(object settings)
```

#### Parameters

`settings` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_WorkflowAutomation_Rules_IsForegroundWhiteboardRule_Register"></a> Register\(\)

```csharp
public static RuleRegistryInfo Register()
```

#### Returns

 [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md)

