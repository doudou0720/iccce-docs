# <a id="Ink_Canvas_Plugins_IPlugin"></a> Interface IPlugin

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件接口。每个插件须有一个实现此接口的类；建议用 <xref href="Ink_Canvas.Plugins.PluginEntranceAttribute" data-throw-if-not-resolved="false"></xref> 标记（未标记时宿主自动回退查找 <xref href="Ink_Canvas.Plugins.PluginBase" data-throw-if-not-resolved="false"></xref> 子类或任意实现）。

```csharp
public interface IPlugin
```

## Properties

### <a id="Ink_Canvas_Plugins_IPlugin_Author"></a> Author

插件作者。

```csharp
string Author { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IPlugin_Description"></a> Description

插件描述。

```csharp
string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IPlugin_Id"></a> Id

插件唯一标识，如 "com.example.myplugin"。

```csharp
string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IPlugin_Name"></a> Name

插件显示名称。

```csharp
string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Plugins_IPlugin_Order"></a> Order

插件列表排序（数值越小越靠前；实际加载顺序由依赖解析决定）。

```csharp
int Order { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Ink_Canvas_Plugins_IPlugin_Version"></a> Version

插件版本号。

```csharp
string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_Plugins_IPlugin_GetMainView"></a> GetMainView\(\)

获取插件主视图控件；返回 null 表示无。

```csharp
object GetMainView()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

主视图控件；null 表示无。

### <a id="Ink_Canvas_Plugins_IPlugin_GetSettingsView"></a> GetSettingsView\(\)

获取插件设置视图控件；返回 null 表示无。

```csharp
object GetSettingsView()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

设置视图控件；null 表示无。

### <a id="Ink_Canvas_Plugins_IPlugin_Initialize_Ink_Canvas_Plugins_IPluginHost_"></a> Initialize\(IPluginHost\)

初始化插件。所有注册动作（服务、工具栏项、IPC 处理器等）必须在此时完成。

```csharp
void Initialize(IPluginHost host)
```

#### Parameters

`host` [IPluginHost](Ink\_Canvas.Plugins.IPluginHost.md)

宿主 API 入口。

### <a id="Ink_Canvas_Plugins_IPlugin_Shutdown"></a> Shutdown\(\)

卸载插件时调用，释放插件持有的资源。

```csharp
void Shutdown()
```

