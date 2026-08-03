# <a id="Ink_Canvas_Plugins_PluginSecurityCheck"></a> Class PluginSecurityCheck

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

插件来源安全检查。

<p>插件安装来源分为 <xref href="Ink_Canvas.Plugins.PluginTrustLevel" data-throw-if-not-resolved="false"></xref> 三档：</p>
<ul><li><xref href="Ink_Canvas.Plugins.PluginTrustLevel.Trusted" data-throw-if-not-resolved="false"></xref>：官方插件市场索引中的条目，且 SHA256 校验通过</li><li><xref href="Ink_Canvas.Plugins.PluginTrustLevel.Known" data-throw-if-not-resolved="false"></xref>：市场索引中存在但 SHA256 未提供/未校验</li><li><xref href="Ink_Canvas.Plugins.PluginTrustLevel.Unknown" data-throw-if-not-resolved="false"></xref>：本地 .icpx、第三方镜像、或 SHA256 校验失败的安装包</li></ul>

对 <xref href="Ink_Canvas.Plugins.PluginTrustLevel.Unknown" data-throw-if-not-resolved="false"></xref> 的安装，建议弹出安全提示并由用户明确确认。

```csharp
public class PluginSecurityCheck
```

#### Inheritance

object ← 
[PluginSecurityCheck](Ink\_Canvas.Plugins.PluginSecurityCheck.md)

## Constructors

### <a id="Ink_Canvas_Plugins_PluginSecurityCheck__ctor_Ink_Canvas_Plugins_PluginMarketService_"></a> PluginSecurityCheck\(PluginMarketService\)

```csharp
public PluginSecurityCheck(PluginMarketService market)
```

#### Parameters

`market` [PluginMarketService](Ink\_Canvas.Plugins.PluginMarketService.md)

## Methods

### <a id="Ink_Canvas_Plugins_PluginSecurityCheck_EvaluatePackage_System_String_System_String_System_String_"></a> EvaluatePackage\(string, string, string\)

评估一个即将被安装的 .icpx 包的安全等级。如果包尚未提取可传 <code class="paramref">expectedSha256</code>=<code>null</code>。

```csharp
public SecurityVerdict EvaluatePackage(string packageFilePath, string expectedSha256, string declaredPluginId)
```

#### Parameters

`packageFilePath` string

`expectedSha256` string

`declaredPluginId` string

#### Returns

 SecurityVerdict

### <a id="Ink_Canvas_Plugins_PluginSecurityCheck_FormatVerdict_Ink_Canvas_Plugins_SecurityVerdict_"></a> FormatVerdict\(SecurityVerdict\)

给 UI 渲染使用的安全摘要文本。

```csharp
public string FormatVerdict(SecurityVerdict verdict)
```

#### Parameters

`verdict` SecurityVerdict

#### Returns

 string

### <a id="Ink_Canvas_Plugins_PluginSecurityCheck_RequiresUserConfirmation_Ink_Canvas_Plugins_SecurityVerdict_"></a> RequiresUserConfirmation\(SecurityVerdict\)

默认策略下，安全安装应阻断哪些级别。该层级以上的强制弹出确认。

```csharp
public bool RequiresUserConfirmation(SecurityVerdict verdict)
```

#### Parameters

`verdict` SecurityVerdict

#### Returns

 bool

