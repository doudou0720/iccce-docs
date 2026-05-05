# <a id="Ink_Canvas_Helpers_DelayAction"></a> Class DelayAction

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class DelayAction
```

#### Inheritance

object ← 
[DelayAction](Ink\_Canvas.Helpers.DelayAction.md)

## Methods

### <a id="Ink_Canvas_Helpers_DelayAction_DebounceAction_System_Int32_ISynchronizeInvoke_Action_"></a> DebounceAction\(int, ISynchronizeInvoke, Action\)

防抖函式

```csharp
public void DebounceAction(int timeMs, ISynchronizeInvoke inv, Action action)
```

#### Parameters

`timeMs` int

`inv` ISynchronizeInvoke

同步的對象，一般傳入控件，不需要可null

`action` Action

