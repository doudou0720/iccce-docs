# <a id="Ink_Canvas_Controls_Toolbar"></a> Namespace Ink\_Canvas.Controls.Toolbar

### Classes

 [ToolbarHost](Ink\_Canvas.Controls.Toolbar.ToolbarHost.md)

MainWindow 版的 IToolbarHost 实现。Phase 1 直接把 MainWindow 引用暴露给插件，
插件可通过 host.Window 访问私有/内部成员（partial class 扩展或 internal 字段）。
后续阶段逐步把具体行为抽成 Host 上的方法/事件，收窄这个接口。

 [ToolbarItemConfig](Ink\_Canvas.Controls.Toolbar.ToolbarItemConfig.md)

单个工具栏按钮的用户配置（可见性、顺序、所属 slot、插入位置）。
由 Settings.Toolbar 持久化。

 [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.ToolbarLayoutSettings.md)

 [ToolbarRegistry](Ink\_Canvas.Controls.Toolbar.ToolbarRegistry.md)

### Interfaces

 [IToolbarHost](Ink\_Canvas.Controls.Toolbar.IToolbarHost.md)

工具栏按钮插件与宿主之间的桥梁。Phase 1 粗粒度暴露 MainWindow，后续收窄。

 [IToolbarItem](Ink\_Canvas.Controls.Toolbar.IToolbarItem.md)

### Enums

 [ToolbarInsertPosition](Ink\_Canvas.Controls.Toolbar.ToolbarInsertPosition.md)

 [ToolbarSlot](Ink\_Canvas.Controls.Toolbar.ToolbarSlot.md)

