# <a id="Ink_Canvas_WorkflowAutomation_Rules_ForegroundWindowProcessRule"></a> Class ForegroundWindowProcessRule

Namespace: [Ink\_Canvas.WorkflowAutomation.Rules](Ink\_Canvas.WorkflowAutomation.Rules.md)  
Assembly: InkCanvasForClass.dll  

判断前台窗口的进程名是否匹配指定名称的规则。

```csharp
public static class ForegroundWindowProcessRule
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ForegroundWindowProcessRule](Ink\_Canvas.WorkflowAutomation.Rules.ForegroundWindowProcessRule.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_WorkflowAutomation_Rules_ForegroundWindowProcessRule_RuleId"></a> RuleId

```csharp
public const string RuleId = "inkcanvas.foregroundwindowprocess"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_WorkflowAutomation_Rules_ForegroundWindowProcessRule_Evaluate_System_Object_"></a> Evaluate\(object\)

```csharp
public static bool Evaluate(object settings)
```

#### Parameters

`settings` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_WorkflowAutomation_Rules_ForegroundWindowProcessRule_Register"></a> Register\(\)

```csharp
public static RuleRegistryInfo Register()
```

#### Returns

 [RuleRegistryInfo](Ink\_Canvas.WorkflowAutomation.Models.RuleRegistryInfo.md)

