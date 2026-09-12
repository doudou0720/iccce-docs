# <a id="Ink_Canvas_Plugins_PluginLoadStatus"></a> Enum PluginLoadStatus

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件加载状态

```csharp
public enum PluginLoadStatus
```

## Fields

`Disabled = 2` 

已禁用（用户禁用或加载被拦截）。



`Error = 3` 

加载失败（详见 <xref href="Ink_Canvas.Plugins.PluginInfo.Exception" data-throw-if-not-resolved="false"></xref>）。



`Loaded = 1` 

已加载成功。



`NotLoaded = 0` 

未加载。



