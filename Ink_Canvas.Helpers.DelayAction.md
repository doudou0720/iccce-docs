# <a id="Ink_Canvas_Helpers_DelayAction"></a> Class DelayAction

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class DelayAction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DelayAction](Ink\_Canvas.Helpers.DelayAction.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_DelayAction_DebounceAction_System_Int32_System_ComponentModel_ISynchronizeInvoke_System_Action_"></a> DebounceAction\(int, ISynchronizeInvoke, Action\)

防抖函式

```csharp
public void DebounceAction(int timeMs, ISynchronizeInvoke inv, Action action)
```

#### Parameters

`timeMs` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`inv` [ISynchronizeInvoke](https://learn.microsoft.com/dotnet/api/system.componentmodel.isynchronizeinvoke)

同步的對象，一般傳入控件，不需要可null

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

