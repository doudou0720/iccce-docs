# <a id="Ink_Canvas_Plugins_PluginRecognitionEngine"></a> Enum PluginRecognitionEngine

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvas.PluginSdk.dll  

墨迹识别后端：自动 / IACore / WinRT。自动模式在 Windows 10 及以上默认 WinRT。

```csharp
public enum PluginRecognitionEngine
```

## Fields

`Auto = 0` 

自动选择后端。



`IACore = 1` 

传统 IACore 识别（走 IPC 辅助进程）。



`WinRT = 2` 

Windows Runtime 识别。



