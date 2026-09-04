# <a id="Ink_Canvas_Plugins_PluginBase"></a> Class PluginBase

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件抽象基类。

```csharp
public abstract class PluginBase : IPlugin
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PluginBase](Ink\_Canvas.Plugins.PluginBase.md)

#### Implements

[IPlugin](Ink\_Canvas.Plugins.IPlugin.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_PluginBase_Author"></a> Author

插件作者，从 <xref href="Ink_Canvas.Plugins.PluginBase.Manifest" data-throw-if-not-resolved="false"></xref> 读取；无清单时为空字符串。

```csharp
public virtual string Author { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginBase_Description"></a> Description

插件描述，从 <xref href="Ink_Canvas.Plugins.PluginBase.Manifest" data-throw-if-not-resolved="false"></xref> 读取；无清单时为空字符串。

```csharp
public virtual string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginBase_Host"></a> Host

宿主 API 入口。在 Initialize 阶段由宿主注入，用于日志、服务注册/获取与工具栏注册。

```csharp
protected IPluginHost Host { get; }
```

#### Property Value

 [IPluginHost](Ink\_Canvas.Plugins.IPluginHost.md)

### <a id="Ink_Canvas_Plugins_PluginBase_Id"></a> Id

插件唯一标识，从 <xref href="Ink_Canvas.Plugins.PluginBase.Manifest" data-throw-if-not-resolved="false"></xref> 读取；无清单时为空字符串。

```csharp
public virtual string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginBase_Manifest"></a> Manifest

插件清单信息，从 manifest.json 加载。如果清单存在，则 Id/Name/Version 等属性优先从清单读取。

```csharp
public PluginManifest Manifest { get; set; }
```

#### Property Value

 [PluginManifest](Ink\_Canvas.Plugins.PluginManifest.md)

### <a id="Ink_Canvas_Plugins_PluginBase_Name"></a> Name

插件显示名称，从 <xref href="Ink_Canvas.Plugins.PluginBase.Manifest" data-throw-if-not-resolved="false"></xref> 读取；无清单时为空字符串。

```csharp
public virtual string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginBase_Order"></a> Order

插件列表排序（数值越小越靠前；实际加载顺序由依赖解析决定）。默认 0。

```csharp
public virtual int Order { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_PluginBase_PluginConfigFolder"></a> PluginConfigFolder

插件配置目录路径

```csharp
public string PluginConfigFolder { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginBase_PluginFolder"></a> PluginFolder

插件所在目录路径

```csharp
public string PluginFolder { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_PluginBase_Version"></a> Version

插件版本号，从 <xref href="Ink_Canvas.Plugins.PluginBase.Manifest" data-throw-if-not-resolved="false"></xref> 读取；无清单时为空字符串。

```csharp
public virtual string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Plugins_PluginBase_GetMainView"></a> GetMainView\(\)

获取插件主视图控件（宿主在浮动栏/组件库中渲染）。返回 null 表示无主视图。

```csharp
public virtual object GetMainView()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

主视图控件；null 表示无。

### <a id="Ink_Canvas_Plugins_PluginBase_GetService__1"></a> GetService<T\>\(\)

从宿主 DI 容器获取服务；未注册时返回 null。

```csharp
protected T GetService<T>() where T : class
```

#### Returns

 T

服务实例；未注册时返回 null。

#### Type Parameters

`T` 

服务类型。

### <a id="Ink_Canvas_Plugins_PluginBase_GetSettingsView"></a> GetSettingsView\(\)

获取插件设置视图控件（宿主在插件设置页中渲染）。返回 null 表示无设置视图。

```csharp
public virtual object GetSettingsView()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

设置视图控件；null 表示无。

### <a id="Ink_Canvas_Plugins_PluginBase_Initialize_Ink_Canvas_Plugins_IPluginHost_"></a> Initialize\(IPluginHost\)

初始化插件（旧版签名，保持向后兼容）。
新插件请使用 Initialize(IPluginHost, IServiceCollection) 重载。

```csharp
public virtual void Initialize(IPluginHost host)
```

#### Parameters

`host` [IPluginHost](Ink\_Canvas.Plugins.IPluginHost.md)

宿主 API 入口。

### <a id="Ink_Canvas_Plugins_PluginBase_Initialize_Ink_Canvas_Plugins_IPluginHost_Microsoft_Extensions_DependencyInjection_IServiceCollection_"></a> Initialize\(IPluginHost, IServiceCollection\)

初始化插件（新版签名，支持 DI 服务注册）。
默认调用旧版 Initialize(host) 以保持兼容。
新插件应重写此方法。

```csharp
public virtual void Initialize(IPluginHost host, IServiceCollection services)
```

#### Parameters

`host` [IPluginHost](Ink\_Canvas.Plugins.IPluginHost.md)

宿主 API 入口。

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

依赖注入服务集合，插件可在此阶段注册服务。

### <a id="Ink_Canvas_Plugins_PluginBase_Log_System_String_"></a> Log\(string\)

记录普通日志（经宿主写入当前插件日志目录）。

```csharp
protected void Log(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

日志消息。

### <a id="Ink_Canvas_Plugins_PluginBase_LogError_System_String_System_Exception_"></a> LogError\(string, Exception\)

记录错误日志（经宿主写入当前插件日志目录）。

```csharp
protected void LogError(string message, Exception ex = null)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

错误描述。

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

关联异常；可为 null。

### <a id="Ink_Canvas_Plugins_PluginBase_Shutdown"></a> Shutdown\(\)

卸载插件时调用，释放插件持有的资源。

```csharp
public virtual void Shutdown()
```

