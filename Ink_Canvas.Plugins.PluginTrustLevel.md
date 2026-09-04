# <a id="Ink_Canvas_Plugins_PluginTrustLevel"></a> Enum PluginTrustLevel

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

插件来源信任度。

```csharp
public enum PluginTrustLevel
```

## Fields

`Known = 1` 

市场索引中存在但未提供 SHA256 校验值，无法核对文件完整性。



`Trusted = 2` 

官方插件市场索引中的条目且 SHA256 校验通过。



`Unknown = 0` 

未知来源（本地包/第三方镜像/SHA256 校验失败），建议安装前向用户明确确认。



