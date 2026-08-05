# <a id="Ink_Canvas_UInk_UInkIccMapper"></a> Class UInkIccMapper

Namespace: [Ink\_Canvas.UInk](Ink\_Canvas.UInk.md)  
Assembly: InkCanvasForClass.dll  

ICC 运行态 ⇄ UInkDocument 的结构映射（屏幕→Display Device、模式→Workspace、页/PPT 幻灯片→Canvas、viewport）。
设备/工作区/页 GUID 规则见规范：pageGuid 全程唯一；(workspaceKey, deviceKey, pageGuid, layerIndex) 是 Canvas 唯一键。
写侧把当前可见状态归一化（undoId=0、全 renderOnlyWhenLatest=false）。

```csharp
public static class UInkIccMapper
```

#### Inheritance

object ← 
[UInkIccMapper](Ink\_Canvas.UInk.UInkIccMapper.md)

## Methods

### <a id="Ink_Canvas_UInk_UInkIccMapper_ApplyViewportToStrokes_StrokeCollection_Ink_Canvas_UInk_UInkViewport_"></a> ApplyViewportToStrokes\(StrokeCollection, UInkViewport\)

把 Canvas 世界坐标按 viewport 逆变换转回 Device 坐标：device = (canvas − vp.xy) * vp.scale。
History 与 FinalStrokes 共享 Stroke 引用，转换后同步生效。scale=1 且无平移时不动。

```csharp
public static void ApplyViewportToStrokes(StrokeCollection strokes, UInkViewport vp)
```

#### Parameters

`strokes` StrokeCollection

`vp` [UInkViewport](Ink\_Canvas.UInk.UInkViewport.md)

### <a id="Ink_Canvas_UInk_UInkIccMapper_BuildCanvas_System_String_System_String_System_String_System_UInt32_System_UInt32_System_Nullable_System_Int32__Ink_Canvas_UInk_UInkViewport_"></a> BuildCanvas\(string, string, string, uint, uint, int?, UInkViewport\)

构建一个 Canvas（用于写侧）。workspaceGuid/deviceGuid 为空时省略（隐式单例）。

```csharp
public static UInkCanvas BuildCanvas(string workspaceGuid, string deviceGuid, string pageGuid, uint pageIndex, uint pageNumber, int? slideId, UInkViewport viewport)
```

#### Parameters

`workspaceGuid` string

`deviceGuid` string

`pageGuid` string

`pageIndex` uint

`pageNumber` uint

`slideId` int?

`viewport` [UInkViewport](Ink\_Canvas.UInk.UInkViewport.md)

#### Returns

 [UInkCanvas](Ink\_Canvas.UInk.UInkCanvas.md)

### <a id="Ink_Canvas_UInk_UInkIccMapper_BuildDisplayDevices"></a> BuildDisplayDevices\(\)

把系统屏幕映射为 Display Device 列表（逻辑像素，支持负原点/多显示器）。

```csharp
public static List<UInkDevice> BuildDisplayDevices()
```

#### Returns

 List<[UInkDevice](Ink\_Canvas.UInk.UInkDevice.md)\>

### <a id="Ink_Canvas_UInk_UInkIccMapper_BuildDocument_System_String_IReadOnlyList_Ink_Canvas_UInk_UInkDevice__IReadOnlyList_Ink_Canvas_UInk_UInkWorkspace__IReadOnlyList_Ink_Canvas_UInk_UInkPageInput__System_UInt64_"></a> BuildDocument\(string, IReadOnlyList<UInkDevice\>, IReadOnlyList<UInkWorkspace\>, IReadOnlyList<UInkPageInput\>, ulong\)

汇总为 UInkDocument：写 Header/HeaderExtension、逐页写 Canvas+内容块、重算 Header 统计。

```csharp
public static UInkDocument BuildDocument(string headerGuid, IReadOnlyList<UInkDevice> devices, IReadOnlyList<UInkWorkspace> workspaces, IReadOnlyList<UInkPageInput> pages, ulong nowUnixSeconds)
```

#### Parameters

`headerGuid` string

`devices` IReadOnlyList<[UInkDevice](Ink\_Canvas.UInk.UInkDevice.md)\>

`workspaces` IReadOnlyList<[UInkWorkspace](Ink\_Canvas.UInk.UInkWorkspace.md)\>

`pages` IReadOnlyList<[UInkPageInput](Ink\_Canvas.UInk.UInkPageInput.md)\>

`nowUnixSeconds` ulong

#### Returns

 [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

### <a id="Ink_Canvas_UInk_UInkIccMapper_EnsureWorkspace_List_Ink_Canvas_UInk_UInkWorkspace__Ink_Canvas_UInk_UInkWorkspace_"></a> EnsureWorkspace\(List<UInkWorkspace\>, UInkWorkspace\)

把一个 Workspace 注册项加入列表（同 GUID 去重）。

```csharp
public static UInkWorkspace EnsureWorkspace(List<UInkWorkspace> workspaces, UInkWorkspace ws)
```

#### Parameters

`workspaces` List<[UInkWorkspace](Ink\_Canvas.UInk.UInkWorkspace.md)\>

`ws` [UInkWorkspace](Ink\_Canvas.UInk.UInkWorkspace.md)

#### Returns

 [UInkWorkspace](Ink\_Canvas.UInk.UInkWorkspace.md)

### <a id="Ink_Canvas_UInk_UInkIccMapper_IdentityViewport"></a> IdentityViewport\(\)

默认 viewport：ICC 无持久画布变换时用恒等 {0,0,1}。

```csharp
public static UInkViewport IdentityViewport()
```

#### Returns

 [UInkViewport](Ink\_Canvas.UInk.UInkViewport.md)

### <a id="Ink_Canvas_UInk_UInkIccMapper_NewFileGuid"></a> NewFileGuid\(\)

生成文件级 UUID（Header.guid；"另存为"才换）。

```csharp
public static string NewFileGuid()
```

#### Returns

 string

### <a id="Ink_Canvas_UInk_UInkIccMapper_ToPages_Ink_Canvas_UInk_UInkDocument_Func_Ink_Canvas_UInk_IUInkContentBlock_Stroke__"></a> ToPages\(UInkDocument, Func<IUInkContentBlock, Stroke\>\)

把文档映射为逻辑页面列表：按 (workspaceGuid, deviceGuid, pageGuid) 合并同页所有 layer，
layerIndex 越大越靠前；layer 1+ 继承 layer 0 的 viewport。各 layer 的撤回 delta 链按层顺序拼接。

```csharp
public static List<UInkPageData> ToPages(UInkDocument doc, Func<IUInkContentBlock, Stroke> toStroke)
```

#### Parameters

`doc` [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

`toStroke` Func<[IUInkContentBlock](Ink\_Canvas.UInk.IUInkContentBlock.md), Stroke\>

#### Returns

 List<[UInkPageData](Ink\_Canvas.UInk.UInkPageData.md)\>

