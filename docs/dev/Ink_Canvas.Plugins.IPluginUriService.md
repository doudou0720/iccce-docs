# <a id="Ink_Canvas_Plugins_IPluginUriService"></a> Interface IPluginUriService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

URI 服务：供插件注册深链接处理程序，或主动打开 <code>icc://</code> 深链接。

<p>
注册后，宿主会把形如 <code>icc://plugin/&lt;pluginId&gt;/&lt;path&gt;?&lt;query&gt;</code> 的深链接
派发给对应插件注册的处理器。子路径按「/」分段做最长前缀匹配（忽略大小写），
注册空字符串 <code>""</code> 表示接收该插件全部子路径。
</p>
<p>
处理器与 <xref href="Ink_Canvas.Plugins.IPluginUriService.OpenUri(System.String)" data-throw-if-not-resolved="false"></xref> 均在 UI 线程执行，可安全操作画布/窗口等宿主对象。
</p>

```csharp
public interface IPluginUriService
```

## Methods

### <a id="Ink_Canvas_Plugins_IPluginUriService_OpenUri_System_String_"></a> OpenUri\(string\)

主动打开一个 <code>icc://</code> 深链接（应用命令或其它插件的 URI）。

<p>受宿主设置「启用 URI 协议」控制：设置关闭时调用不生效。</p>

```csharp
bool OpenUri(string uri)
```

#### Parameters

`uri` string

形如 <code>icc://settings/CanvasPage?key=xxx</code> 或 <code>icc://plugin/&lt;id&gt;/&lt;path&gt;</code>。

#### Returns

 bool

是否已受理（已进入路由，不代表命令一定成功）。

### <a id="Ink_Canvas_Plugins_IPluginUriService_RegisterHandler_System_String_Func_Ink_Canvas_Plugins_PluginUriRequest_System_Boolean__"></a> RegisterHandler\(string, Func<PluginUriRequest, bool\>\)

注册 URI 处理程序。

<p>
注册后，<code>icc://plugin/&lt;本插件ID&gt;/&lt;subPath&gt;</code> 会调用 <code class="paramref">handler</code>。
应在插件 <code>Initialize</code> 阶段调用（与 <xref href="Ink_Canvas.Plugins.IPluginHost.RegisterService%60%601(%60%600)" data-throw-if-not-resolved="false"></xref> 约束一致）。
</p>

```csharp
void RegisterHandler(string subPath, Func<PluginUriRequest, bool> handler)
```

#### Parameters

`subPath` string

子路径（去 <code>plugin/&lt;id&gt;/</code> 前缀），空字符串表示接收全部子路径。

`handler` Func<[PluginUriRequest](Ink\_Canvas.Plugins.PluginUriRequest.md), bool\>

处理器；返回 <code>true</code> 表示已处理，返回 <code>false</code> 时宿主记录「未处理」日志。

