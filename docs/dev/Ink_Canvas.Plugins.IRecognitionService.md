# <a id="Ink_Canvas_Plugins_IRecognitionService"></a> Interface IRecognitionService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

墨迹识别服务：包装宿主的 WinRT / IACore 双引擎识别能力，
供插件做手写转文字、图形识别/纠正与手写体美化。

<p>识别引擎可能需要系统组件（Windows 10+ 手写识别或 IACore IPC 辅助进程），
不可用时返回 <code>IsSuccess=false</code> 的结果，不会抛出异常。</p>

```csharp
public interface IRecognitionService
```

## Methods

### <a id="Ink_Canvas_Plugins_IRecognitionService_CorrectInkAsync_StrokeCollection_Ink_Canvas_Plugins_PluginRecognitionEngine_System_Boolean_System_String_"></a> CorrectInkAsync\(StrokeCollection, PluginRecognitionEngine, bool, string\)

墨迹纠正（手写体美化）：识别成功后把原始笔画替换为手写风格字体的轮廓墨迹。

```csharp
Task<StrokeCollection> CorrectInkAsync(StrokeCollection strokes, PluginRecognitionEngine engine = default, bool applyHandwritingBeautify = false, string handwritingFontFamilyList = null)
```

#### Parameters

`strokes` StrokeCollection

待纠正的笔画。

`engine` [PluginRecognitionEngine](Ink\_Canvas.Plugins.PluginRecognitionEngine.md)

识别后端。

`applyHandwritingBeautify` bool

为 true 时用识别结果替换为手写风格字体轮廓墨迹；false 时原样返回。

`handwritingFontFamilyList` string

逗号分隔的字体回退列表（WPF FontFamily）；null 时使用宿主内置默认。

#### Returns

 Task<StrokeCollection\>

纠正后的墨迹；识别失败或未启用美化时原样返回。

### <a id="Ink_Canvas_Plugins_IRecognitionService_GetSystemInfo"></a> GetSystemInfo\(\)

当前识别引擎的系统信息（用于诊断/展示）。

```csharp
string GetSystemInfo()
```

#### Returns

 string

### <a id="Ink_Canvas_Plugins_IRecognitionService_IsValidShapeType_System_String_"></a> IsValidShapeType\(string\)

判断形状名是否为宿主支持的标准形状类型。

```csharp
bool IsValidShapeType(string shapeName)
```

#### Parameters

`shapeName` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_IRecognitionService_RecognizeHandwritingAsync_StrokeCollection_Ink_Canvas_Plugins_PluginRecognitionEngine_"></a> RecognizeHandwritingAsync\(StrokeCollection, PluginRecognitionEngine\)

手写转文字识别，返回分词候选与包围框。

```csharp
Task<PluginHandwritingResult> RecognizeHandwritingAsync(StrokeCollection strokes, PluginRecognitionEngine engine = default)
```

#### Parameters

`strokes` StrokeCollection

待识别的笔画。

`engine` [PluginRecognitionEngine](Ink\_Canvas.Plugins.PluginRecognitionEngine.md)

识别后端（文字引擎跟随形状引擎选择）。

#### Returns

 Task<[PluginHandwritingResult](Ink\_Canvas.Plugins.PluginHandwritingResult.md)\>

识别结果；失败时 <xref href="Ink_Canvas.Plugins.PluginHandwritingResult.IsSuccess" data-throw-if-not-resolved="false"></xref> 为 false。

### <a id="Ink_Canvas_Plugins_IRecognitionService_RecognizeShapeAsync_StrokeCollection_Ink_Canvas_Plugins_PluginRecognitionEngine_"></a> RecognizeShapeAsync\(StrokeCollection, PluginRecognitionEngine\)

形状识别：把手写笔画识别为几何形状（三角形/圆/矩形/箭头等）。

```csharp
Task<PluginShapeRecognitionResult> RecognizeShapeAsync(StrokeCollection strokes, PluginRecognitionEngine engine = default)
```

#### Parameters

`strokes` StrokeCollection

待识别的笔画。

`engine` [PluginRecognitionEngine](Ink\_Canvas.Plugins.PluginRecognitionEngine.md)

识别后端。

#### Returns

 Task<[PluginShapeRecognitionResult](Ink\_Canvas.Plugins.PluginShapeRecognitionResult.md)\>

识别结果；失败时 <xref href="Ink_Canvas.Plugins.PluginShapeRecognitionResult.IsSuccess" data-throw-if-not-resolved="false"></xref> 为 false。

