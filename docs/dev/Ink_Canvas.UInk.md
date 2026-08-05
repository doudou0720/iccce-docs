# <a id="Ink_Canvas_UInk"></a> Namespace Ink\_Canvas.UInk

### Classes

 [UInkAppend](Ink\_Canvas.UInk.UInkAppend.md)

UInk 增量追加（可选崩溃保护路径）。只向既有对象流末尾最后一个 Canvas 追加已完整结束的
Ink/Shape/Media，不更新 Header（读取端按对象流重算状态）。不满足追加条件时调用方应回退完整保存。

 [UInkCanvas](Ink\_Canvas.UInk.UInkCanvas.md)

 [UInkCanvasFormatter](Ink\_Canvas.UInk.UInkCanvasFormatter.md)

 [UInkCanvasRecord](Ink\_Canvas.UInk.UInkCanvasRecord.md)

 [UInkCircleGeometry](Ink\_Canvas.UInk.UInkCircleGeometry.md)

 [UInkColor](Ink\_Canvas.UInk.UInkColor.md)

 [UInkConversion](Ink\_Canvas.UInk.UInkConversion.md)

ICC WPF 墨迹模型 ⇄ UInk Ink 块 的双向转换。
语义（对应方案决策）：
 - inkType 统一 = Pen(1)；
 - 块级 opacity 承载 ICC 的 alpha（AARRGGBB 的 A）：写 opacity = A / 255f，读回 A = (byte)(opacity * 255f)；
 - 剩余 DrawingAttributes（Width/Height/FitToCurve/IsHighlighter/IgnorePressure/StylusTip）经 extra["icc:da"]
   私有键无损往返；读取端有 icc:da 用 icc:da，否则从块级字段推导（外部文件回退，透明度仍尊重块级 opacity）。

 [UInkDevice](Ink\_Canvas.UInk.UInkDevice.md)

 [UInkDocument](Ink\_Canvas.UInk.UInkDocument.md)

 [UInkExtraArchive](Ink\_Canvas.UInk.UInkExtraArchive.md)

`.uink.extra` 资源包（ZIP）读写。规范约束（uink_media / uink_conf）：
 - Media.path 写入前必须 Unicode NFC、`/` 分隔，不得以 `/` 开头、含 `\`、NUL、控制字符、空路径段、`.` 或 `..`；
 - ZIP 条目路径用相同 NFC 规范化形式，且不得重复；
 - 读取不受信任 ZIP 前必须做资源预算检查（条目数、单条目大小、总解压大小、压缩比），禁止直接解压到工作目录。
路径穿越校验思路与 SafeZipExtractor 一致（拒绝绝对路径/`..`，Combine 后二次确认在目标目录内）。

 [UInkFill](Ink\_Canvas.UInk.UInkFill.md)

 [UInkHardware](Ink\_Canvas.UInk.UInkHardware.md)

 [UInkHeader](Ink\_Canvas.UInk.UInkHeader.md)

 [UInkHeaderExtension](Ink\_Canvas.UInk.UInkHeaderExtension.md)

 [UInkHeaderExtensionFormatter](Ink\_Canvas.UInk.UInkHeaderExtensionFormatter.md)

 [UInkHeaderFormatter](Ink\_Canvas.UInk.UInkHeaderFormatter.md)

 [UInkIccMapper](Ink\_Canvas.UInk.UInkIccMapper.md)

ICC 运行态 ⇄ UInkDocument 的结构映射（屏幕→Display Device、模式→Workspace、页/PPT 幻灯片→Canvas、viewport）。
设备/工作区/页 GUID 规则见规范：pageGuid 全程唯一；(workspaceKey, deviceKey, pageGuid, layerIndex) 是 Canvas 唯一键。
写侧把当前可见状态归一化（undoId=0、全 renderOnlyWhenLatest=false）。

 [UInkInk](Ink\_Canvas.UInk.UInkInk.md)

 [UInkInkFormatter](Ink\_Canvas.UInk.UInkInkFormatter.md)

 [UInkInkPoint](Ink\_Canvas.UInk.UInkInkPoint.md)

 [UInkLineGeometry](Ink\_Canvas.UInk.UInkLineGeometry.md)

 [UInkMedia](Ink\_Canvas.UInk.UInkMedia.md)

 [UInkMediaFormatter](Ink\_Canvas.UInk.UInkMediaFormatter.md)

 [UInkPageData](Ink\_Canvas.UInk.UInkPageData.md)

一个页面的映射结果（加载方向）：Canvas + 最终墨迹 + 撤回链 + 媒体 + Shape。

 [UInkPageInput](Ink\_Canvas.UInk.UInkPageInput.md)

保存方向的一页输入：Canvas 元数据 + 该页墨迹 + 该页媒体。

 [UInkReader](Ink\_Canvas.UInk.UInkReader.md)

UInk 主文件读取器。读取连续 MessagePack 对象流，重建 <xref href="Ink_Canvas.UInk.UInkDocument" data-throw-if-not-resolved="false"></xref>。
容错规则（对应规范 uink_conf / uink_inc）：
 - 首块必须是 array(7) Header（type=0, version=10），否则视为非 UInk 文件（返回 null）；
 - 未知 Type ID 跳过（作为完整对象已消费）；
 - EOF 处不完整尾块丢弃（保留此前完整对象）；
 - 解码失败停止读取，不重新同步。

 [UInkRectGeometry](Ink\_Canvas.UInk.UInkRectGeometry.md)

 [UInkSaveService](Ink\_Canvas.UInk.UInkSaveService.md)

UInk 完整保存编排（两阶段原子提交）。提交顺序对应规范 uink_inc / uink_conf：
 1. 确定完整对象流 + 新主文件引用的资源集合；
 2. 生成并校验临时 `.uink.extra`（**必须包含旧主文件仍引用的资源与新主文件将引用资源的并集**）；
 3. 生成并校验临时 `.uink` 主文件（暂不替换）；
 4. 先用临时资源包替换目标资源包，然后原子替换 `.uink` 主文件（主文件最后提交）；
 5. 主文件提交成功后才清理多余 ZIP 条目或整个无用资源包。
任一步失败：删除临时文件，旧文件保持原样。

 [UInkSerializer](Ink\_Canvas.UInk.UInkSerializer.md)

 [UInkShape](Ink\_Canvas.UInk.UInkShape.md)

 [UInkShapeFormatter](Ink\_Canvas.UInk.UInkShapeFormatter.md)

 [UInkShapeGeometry](Ink\_Canvas.UInk.UInkShapeGeometry.md)

 [UInkShapePoint](Ink\_Canvas.UInk.UInkShapePoint.md)

 [UInkSquareGeometry](Ink\_Canvas.UInk.UInkSquareGeometry.md)

 [UInkStroke](Ink\_Canvas.UInk.UInkStroke.md)

 [UInkUndoAdaptation](Ink\_Canvas.UInk.UInkUndoAdaptation.md)

一个 Canvas 的撤回适配结果：最终可见墨迹 + 可导入 ICC TimeMachine 的 delta 链。

 [UInkUndoAdapter](Ink\_Canvas.UInk.UInkUndoAdapter.md)

加载方向撤回语义适配（UInk → ICC TimeMachine）。
UInk 用 undoId 分组 + renderOnlyWhenLatest 末尾最新组表达撤回；ICC TimeMachine 是增量栈
（ApplyHistoryToCanvas 对 UserInput：cleared=false 添加 CurrentStroke，true 移除）。
适配算法：
 1. 按 undoId 分组（连续同值 = 一次撤回操作）；
 2. 对每个前缀应用末尾最新组规则得到可见集 visibleSet(i)；
 3. 相邻边界差集得 added/removed，生成 UserInput 历史项；
 4. 最终可见集 = 载入画布的墨迹。此后 ICC 的 Undo 沿链逐步把「隐藏但未撤回的原稿」展现出来。
Media 块不参与墨迹撤回链（其 undoId 分组语义由元素恢复管线处理，见 UInkIccMapper）。

 [UInkViewport](Ink\_Canvas.UInk.UInkViewport.md)

 [UInkWorkspace](Ink\_Canvas.UInk.UInkWorkspace.md)

 [UInkWriter](Ink\_Canvas.UInk.UInkWriter.md)

UInk 主文件写入器。按对象流顺序写出 Header → HeaderExtension → (Canvas → 内容块)*。
完整保存走 <xref href="Ink_Canvas.UInk.UInkWriter.Save(Ink_Canvas.UInk.UInkDocument%2cSystem.String)" data-throw-if-not-resolved="false"></xref>；增量追加走 <xref href="Ink_Canvas.UInk.UInkWriter.AppendBlocks(System.String%2cIEnumerable%7bSystem.Object%7d)" data-throw-if-not-resolved="false"></xref>。
两阶段提交（先 .uink.extra 后主文件）由 UInkSaveService 编排。

### Interfaces

 [IUInkContentBlock](Ink\_Canvas.UInk.IUInkContentBlock.md)

Ink/Shape/Media 内容块统一标记接口（字段以具体类型访问）。

### Enums

 [UInkBlockType](Ink\_Canvas.UInk.UInkBlockType.md)

 [UInkDeviceType](Ink\_Canvas.UInk.UInkDeviceType.md)

Device 类型（deviceType）。

 [UInkFillType](Ink\_Canvas.UInk.UInkFillType.md)

Fill 类型（fillType）。

 [UInkInkType](Ink\_Canvas.UInk.UInkInkType.md)

Ink 渲染类型（inkType）。ICC 统一使用 Pen=1，透明度经块级 opacity 承载。

 [UInkShapeType](Ink\_Canvas.UInk.UInkShapeType.md)

Shape 几何类型（shapeType）。

 [UInkWorkspaceType](Ink\_Canvas.UInk.UInkWorkspaceType.md)

Workspace 场景类型（workspaceType）。

