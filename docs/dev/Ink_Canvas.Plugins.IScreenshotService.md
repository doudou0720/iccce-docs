# <a id="Ink_Canvas_Plugins_IScreenshotService"></a> Interface IScreenshotService

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

截图服务：允许插件捕获全屏或指定区域的屏幕内容，返回位图或保存为文件。

<p>所有方法都应在 UI 线程调用（宿主内部不做线程切换）。</p>

```csharp
public interface IScreenshotService
```

## Methods

### <a id="Ink_Canvas_Plugins_IScreenshotService_CaptureFullScreen"></a> CaptureFullScreen\(\)

捕获整个虚拟屏幕（所有显示器）为位图。

```csharp
BitmapSource CaptureFullScreen()
```

#### Returns

 BitmapSource

已 Freeze 的 BitmapSource，可直接用于 WPF 绑定/绘制。

### <a id="Ink_Canvas_Plugins_IScreenshotService_CaptureScreenArea_System_Int32_System_Int32_System_Int32_System_Int32_"></a> CaptureScreenArea\(int, int, int, int\)

捕获屏幕指定区域为位图。

```csharp
BitmapSource CaptureScreenArea(int x, int y, int width, int height)
```

#### Parameters

`x` int

区域左上角 X（屏幕坐标）。

`y` int

区域左上角 Y（屏幕坐标）。

`width` int

区域宽度。

`height` int

区域高度。

#### Returns

 BitmapSource

已 Freeze 的 BitmapSource。

### <a id="Ink_Canvas_Plugins_IScreenshotService_SaveFullScreenToFile_System_String_"></a> SaveFullScreenToFile\(string\)

捕获整个虚拟屏幕并保存为 PNG 文件。

```csharp
bool SaveFullScreenToFile(string filePath)
```

#### Parameters

`filePath` string

输出 PNG 路径（目录需已存在）。

#### Returns

 bool

是否保存成功。

