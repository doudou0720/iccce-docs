# <a id="Ink_Canvas_ClipboardNotification"></a> Class ClipboardNotification

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

剪贴板通知类，用于监控剪贴板变化

```csharp
public static class ClipboardNotification
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ClipboardNotification](Ink\_Canvas.ClipboardNotification.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_ClipboardNotification_NotifyFromMessage"></a> NotifyFromMessage\(\)

检查当前系统剪贴板的文本与图像状态，并在检测到相关变化或存在图像时触发 <xref href="Ink_Canvas.ClipboardNotification.ClipboardUpdate" data-throw-if-not-resolved="false"></xref> 事件以通知订阅者。

```csharp
public static void NotifyFromMessage()
```

#### Remarks

会比较当前剪贴板的图像存在性与文本内容与内部缓存的上一状态；若图像存在性发生变化、文本内容发生变化，或当前存在图像，则更新缓存并调用 <xref href="Ink_Canvas.ClipboardNotification.ClipboardUpdate" data-throw-if-not-resolved="false"></xref>。方法内部捕获异常并将错误记录到日志，而不是向调用方抛出异常。

### <a id="Ink_Canvas_ClipboardNotification_Stop"></a> Stop\(\)

停止剪贴板监控

```csharp
public static void Stop()
```

#### Remarks

当前实现为空方法，预留用于未来扩展

### <a id="Ink_Canvas_ClipboardNotification_ClipboardUpdate"></a> ClipboardUpdate

剪贴板更新事件

```csharp
public static event Action ClipboardUpdate
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

