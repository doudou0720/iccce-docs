# <a id="Ink_Canvas_Plugins_IPresentationSourceService"></a> Interface IPresentationSourceService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

外部演示源服务：让插件把自己声明为一个「可翻页的演示文档」，
复用宿主 PPT 放映模式的整套 UI（四个翻页条、工具栏放映布局、全屏处理）。

<p>
与 <xref href="Ink_Canvas.Plugins.IPowerPointService" data-throw-if-not-resolved="false"></xref> 的区别：后者是遥控真实 PowerPoint，
本服务是把插件自己的文档接进放映模式，翻页请求会回调到插件。
</p>
<p>
典型用法（以 PDF 阅读器为例）：

<ol><li>打开文档并注入背景层后调用 <xref href="Ink_Canvas.Plugins.IPresentationSourceService.BeginAsync(Ink_Canvas.Plugins.PresentationSourceDescriptor%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref>，宿主进入放映模式并显示翻页条；</li><li>宿主翻页条被点击时回调 <xref href="Ink_Canvas.Plugins.PresentationSourceDescriptor.NavigateAsync" data-throw-if-not-resolved="false"></xref>；</li><li>插件自己翻页（滚轮、弹窗按钮）后调用 <xref href="Ink_Canvas.Plugins.IPresentationSourceService.UpdatePageAsync(System.Int32%2cSystem.Int32%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref> 同步页码；</li><li>关闭文档时调用 <xref href="Ink_Canvas.Plugins.IPresentationSourceService.EndAsync(System.String%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref> 退出放映模式。</li></ol>
</p>

所有方法都可以从任意线程调用，宿主内部会切换到 UI 线程。

```csharp
public interface IPresentationSourceService
```

## Properties

### <a id="Ink_Canvas_Plugins_IPresentationSourceService_CurrentPage"></a> CurrentPage

当前外部演示源的页码（从 1 开始）；未激活时为 0。

```csharp
int CurrentPage { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_IPresentationSourceService_IsActive"></a> IsActive

当前是否有插件正在以外部演示源身份占用放映模式。

```csharp
bool IsActive { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_IPresentationSourceService_PageCount"></a> PageCount

当前外部演示源的页数；未激活时为 0。

```csharp
int PageCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Ink_Canvas_Plugins_IPresentationSourceService_BeginAsync_Ink_Canvas_Plugins_PresentationSourceDescriptor_System_Threading_CancellationToken_"></a> BeginAsync\(PresentationSourceDescriptor, CancellationToken\)

进入放映模式。宿主会显示翻页条、切换工具栏为放映布局，并把翻页请求路由到
<code class="paramref">descriptor</code> 提供的回调。

<p>
真实 PowerPoint 正在放映时调用会被拒绝（返回 <code>false</code>），避免两个演示源争抢同一套 UI。
重复调用等价于先 <xref href="Ink_Canvas.Plugins.IPresentationSourceService.EndAsync(System.String%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref> 再重新开始。
</p>

```csharp
Task<bool> BeginAsync(PresentationSourceDescriptor descriptor, CancellationToken cancellationToken = default)
```

#### Parameters

`descriptor` [PresentationSourceDescriptor](Ink\_Canvas.Plugins.PresentationSourceDescriptor.md)

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

成功进入放映模式返回 <code>true</code>。

### <a id="Ink_Canvas_Plugins_IPresentationSourceService_EndAsync_System_String_System_Threading_CancellationToken_"></a> EndAsync\(string, CancellationToken\)

退出放映模式，隐藏翻页条并恢复工具栏布局。
非本插件激活的演示源不受影响（内部按 <xref href="Ink_Canvas.Plugins.PresentationSourceDescriptor.Id" data-throw-if-not-resolved="false"></xref> 校验）。

```csharp
Task EndAsync(string sourceId = null, CancellationToken cancellationToken = default)
```

#### Parameters

`sourceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Plugins_IPresentationSourceService_UpdatePageAsync_System_Int32_System_Int32_System_Threading_CancellationToken_"></a> UpdatePageAsync\(int, int, CancellationToken\)

同步页码到所有翻页条。插件自己完成翻页后调用；
由宿主翻页条触发的翻页无需调用，宿主会在回调返回后自动读取。

```csharp
Task UpdatePageAsync(int currentPage, int pageCount = 0, CancellationToken cancellationToken = default)
```

#### Parameters

`currentPage` [int](https://learn.microsoft.com/dotnet/api/system.int32)

当前页码（从 1 开始）。

`pageCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

总页数；传 0 表示沿用原值。

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Ink_Canvas_Plugins_IPresentationSourceService_Ended"></a> Ended

外部演示源被宿主强制结束时触发（例如真实 PPT 开始放映、宿主退出）。

```csharp
event Action<string> Ended
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

