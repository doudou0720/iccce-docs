# <a id="Ink_Canvas_Plugins_IClipboardService"></a> Interface IClipboardService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

剪贴板服务：允许插件读取/写入系统剪贴板文本与图像，并订阅剪贴板变化事件。

<p>宿主已挂接系统剪贴板监听（AddClipboardFormatListener），
<xref href="Ink_Canvas.Plugins.IClipboardService.ClipboardUpdate" data-throw-if-not-resolved="false"></xref> 在剪贴板文本/图像变化时触发。</p>
<p>所有方法都应在 UI 线程调用（WPF Clipboard 依赖 STA 线程）。</p>

```csharp
public interface IClipboardService
```

## Methods

### <a id="Ink_Canvas_Plugins_IClipboardService_ContainsImage"></a> ContainsImage\(\)

剪贴板当前是否包含图像。

```csharp
bool ContainsImage()
```

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_IClipboardService_GetImage"></a> GetImage\(\)

读取剪贴板图像；剪贴板不含图像时返回 null。

```csharp
BitmapSource GetImage()
```

#### Returns

 BitmapSource

### <a id="Ink_Canvas_Plugins_IClipboardService_GetText"></a> GetText\(\)

读取剪贴板文本；剪贴板不含文本时返回空字符串。

```csharp
string GetText()
```

#### Returns

 string

### <a id="Ink_Canvas_Plugins_IClipboardService_SetImage_BitmapSource_"></a> SetImage\(BitmapSource\)

把图像写入剪贴板。返回是否成功。

```csharp
bool SetImage(BitmapSource image)
```

#### Parameters

`image` BitmapSource

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_IClipboardService_SetText_System_String_"></a> SetText\(string\)

写入文本到剪贴板。返回是否成功。

```csharp
bool SetText(string text)
```

#### Parameters

`text` string

#### Returns

 bool

### <a id="Ink_Canvas_Plugins_IClipboardService_ClipboardUpdate"></a> ClipboardUpdate

系统剪贴板内容（文本/图像）变化时触发。

```csharp
event Action ClipboardUpdate
```

#### Event Type

 Action

