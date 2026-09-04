# <a id="Ink_Canvas_UpdatePackageArchitecture"></a> Enum UpdatePackageArchitecture

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

自动更新要下载的安装包架构。默认跟随当前软件进程架构；64 位包对应发布物 ZIP 文件名在 .zip 前增加 -x64。

```csharp
public enum UpdatePackageArchitecture
```

## Fields

`X64 = 1` 

64 位包，例如 InkCanvasForClass.CE.1.7.0.0-x64.zip



`X86 = 0` 

32 位包，例如 InkCanvasForClass.CE.1.7.0.0.zip



