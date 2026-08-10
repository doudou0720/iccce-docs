# <a id="Ink_Canvas_Helpers_PPTInkManager"></a> Class PPTInkManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

PPT墨迹管理器 - 负责按幻灯片保存/加载墨迹、自动保存与内存管理。

```csharp
public class PPTInkManager : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PPTInkManager](Ink\_Canvas.Helpers.PPTInkManager.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_Helpers_PPTInkManager__ctor"></a> PPTInkManager\(\)

初始化 PPTInkManager 实例并为内部内存流分配初始容量以跟踪默认最大幻灯片数加上备用槽位。

```csharp
public PPTInkManager()
```

## Properties

### <a id="Ink_Canvas_Helpers_PPTInkManager_AutoSaveLocation"></a> AutoSaveLocation

```csharp
public string AutoSaveLocation { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_PPTInkManager_CurrentStrokes"></a> CurrentStrokes

```csharp
public StrokeCollection CurrentStrokes { get; }
```

#### Property Value

 StrokeCollection

### <a id="Ink_Canvas_Helpers_PPTInkManager_IsAutoSaveEnabled"></a> IsAutoSaveEnabled

```csharp
public bool IsAutoSaveEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_Helpers_PPTInkManager_CanWriteInk_System_Int32_"></a> CanWriteInk\(int\)

确定在当前滑页上下文中是否允许写入墨迹（基于短期的墨迹写入锁与容差窗口）。

```csharp
public bool CanWriteInk(int currentSlideIndex)
```

#### Parameters

`currentSlideIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

当前尝试写入墨迹的幻灯片索引（从 1 开始）。

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`true` 如果允许写入墨迹（锁已过期、目标为被锁定的幻灯片，或处于短暂的容差窗口内），`false` 否则。

### <a id="Ink_Canvas_Helpers_PPTInkManager_ClearAllStrokes"></a> ClearAllStrokes\(\)

清除所有墨迹

```csharp
public void ClearAllStrokes()
```

#### Remarks

清除并释放当前演示文稿所有幻灯片的墨迹数据和相关内存资源。
该方法在内部加锁以保证线程安全；会处置并清空所有内部存储的墨迹流、重建内部流数组并清空 CurrentStrokes。

### <a id="Ink_Canvas_Helpers_PPTInkManager_Dispose"></a> Dispose\(\)

释放 PPTInkManager 持有的资源并清除所有内存中的笔迹数据。

```csharp
public void Dispose()
```

#### Remarks

调用后该实例将进入已释放状态，不应再被使用。方法为幂等且线程安全：如果已释放则立即返回，否则在同步区内清理资源并标记为已释放。

### <a id="Ink_Canvas_Helpers_PPTInkManager_ForceSaveSlideStrokes_System_Int32_StrokeCollection_"></a> ForceSaveSlideStrokes\(int, StrokeCollection\)

强制保存指定页墨迹到内存（不受锁定限制）。用于放映结束前保存当前画布到当前页。

```csharp
public void ForceSaveSlideStrokes(int slideIndex, StrokeCollection strokes)
```

#### Parameters

`slideIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

要保存的幻灯片索引（从 1 开始）。

`strokes` StrokeCollection

要保存的墨迹集合，不能为空。

#### Remarks

强制将指定幻灯片的墨迹保存到内部内存缓存，覆盖该幻灯片已有的墨迹数据。

### <a id="Ink_Canvas_Helpers_PPTInkManager_InitializePresentation_Presentation_"></a> InitializePresentation\(Presentation\)

初始化新的演示文稿

```csharp
public void InitializePresentation(Presentation presentation)
```

#### Parameters

`presentation` Presentation

要初始化的 PowerPoint Presentation 实例；为 null 时方法不执行任何操作并直接返回。

#### Remarks

为新的或当前的演示文稿初始化墨迹管理器的内部状态。
方法会清除所有内存中的笔迹数据，重置墨迹写入锁与快速切换追踪，并根据演示文稿的幻灯片数量分配内部内存缓冲区。
如果已启用自动保存且设置了 <xref href="Ink_Canvas.Helpers.PPTInkManager.AutoSaveLocation" data-throw-if-not-resolved="false"></xref>，则会尝试加载磁盘上的已保存墨迹文件。

### <a id="Ink_Canvas_Helpers_PPTInkManager_LoadSavedStrokes"></a> LoadSavedStrokes\(\)

从文件加载已保存的墨迹

```csharp
public void LoadSavedStrokes()
```

#### Remarks

从自动保存目录加载已保存的幻灯片墨迹数据到内存流中，供后续显示和编辑使用。
仅在启用自动保存且已设置 AutoSaveLocation 时执行。函数获取当前演示文稿的自动保存文件夹，遍历以 <code>.icstk</code> 为扩展名的文件，
将文件名（去除扩展名）解析为幻灯片索引并在合法且文件大小大于 8 字节时加载到对应的内存流槽位。对单个文件的读取失败会记录错误并继续处理其他文件；
若成功加载则会记录已加载页数。方法在内部使用锁以保证线程安全。

### <a id="Ink_Canvas_Helpers_PPTInkManager_LoadSlideStrokes_System_Int32_"></a> LoadSlideStrokes\(int\)

加载指定页面的墨迹

```csharp
public StrokeCollection LoadSlideStrokes(int slideIndex)
```

#### Parameters

`slideIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

要加载的幻灯片索引（从1开始）。

#### Returns

 StrokeCollection

包含指定幻灯片的墨迹的 StrokeCollection；如果该幻灯片没有已保存的墨迹或加载失败，则返回空的 StrokeCollection。

#### Remarks

加载并返回指定幻灯片的墨迹集合。

### <a id="Ink_Canvas_Helpers_PPTInkManager_LockInkForSlide_System_Int32_"></a> LockInkForSlide\(int\)

为指定幻灯片设置短时墨迹写入锁，防止在该时间窗口内对其他幻灯片进行写入操作。

```csharp
public void LockInkForSlide(int slideIndex)
```

#### Parameters

`slideIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

要上锁的幻灯片索引（大于 0）。锁从调用时刻开始，持续 InkLockMilliseconds 毫秒。

### <a id="Ink_Canvas_Helpers_PPTInkManager_ResetLockState"></a> ResetLockState\(\)

重置与墨迹书写和幻灯片切换相关的锁与跟踪状态为初始（未锁定）值。

```csharp
public void ResetLockState()
```

#### Remarks

将内部的墨迹写入到期时间、当前被锁定的幻灯片索引、上次切换时间和上次切换的幻灯片索引均恢复为默认未设置状态。

### <a id="Ink_Canvas_Helpers_PPTInkManager_SaveAllStrokesToFile_Presentation_System_Int32_"></a> SaveAllStrokesToFile\(Presentation, int\)

保存所有墨迹到文件

```csharp
public void SaveAllStrokesToFile(Presentation presentation, int currentSlideIndex = -1)
```

#### Parameters

`presentation` Presentation

要保存墨迹的 PowerPoint 演示文稿对象。

`currentSlideIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

当前播放的页码；如果大于 0 则以此值写入 Position 文件，否则使用当前被锁定的页码或最后切换的页码作为保存位置。

#### Remarks

将内存中当前演示文稿的每页墨迹保存到磁盘，并根据情况写入当前播放位置文件。
仅在 IsAutoSaveEnabled 为真且 AutoSaveLocation 已设置时执行。会在演示文稿专属文件夹中写入按页编号的墨迹文件（带 `.icstk` 扩展名）和可选的 Position 文件。遇到特定 COM 错误（HRESULT 0x80048010）时会中止保存当前幻灯片计数读取而不抛出异常；单页保存失败会记录错误并继续处理其他页。

### <a id="Ink_Canvas_Helpers_PPTInkManager_SaveCurrentSlideStrokes_System_Int32_StrokeCollection_"></a> SaveCurrentSlideStrokes\(int, StrokeCollection\)

保存当前页面的墨迹

```csharp
public void SaveCurrentSlideStrokes(int slideIndex, StrokeCollection strokes)
```

#### Parameters

`slideIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

要保存的幻灯片索引（从 1 开始）。方法在索引小于或等于 0 时不执行任何操作。

`strokes` StrokeCollection

要保存的墨迹集合；为 null 时方法不执行任何操作。

#### Remarks

将指定幻灯片的墨迹保存到内部内存缓存，并在必要时触发内存清理。

### <a id="Ink_Canvas_Helpers_PPTInkManager_SwitchToSlide_System_Int32_StrokeCollection_"></a> SwitchToSlide\(int, StrokeCollection\)

切换到指定页面并加载墨迹

```csharp
public StrokeCollection SwitchToSlide(int slideIndex, StrokeCollection currentStrokes = null)
```

#### Parameters

`slideIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

要切换到的幻灯片索引（从 1 开始）。

`currentStrokes` StrokeCollection

可选的当前笔迹集合，用于在切换时提供当前画面状态。

#### Returns

 StrokeCollection

`StrokeCollection`：指定幻灯片已加载的笔迹集合；若加载失败则返回一个空的 `StrokeCollection`。

#### Remarks

切换到指定幻灯片并返回该幻灯片的已加载笔迹集合。

