# <a id="Ink_Canvas_Controls_Toolbar_FloatingToolbar"></a> Namespace Ink\_Canvas.Controls.Toolbar.FloatingToolbar

### Classes

 [ComponentSettingKeys](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ComponentSettingKeys.md)

 [ToolbarComponentEntry](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarComponentEntry.md)

 [ToolbarHost](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarHost.md)

MainWindow 版的 IToolbarHost 实现。Phase 1 直接把 MainWindow 引用暴露给插件，
插件可通过 host.Window 访问私有/内部成员（partial class 扩展或 internal 字段）。
后续阶段逐步把具体行为抽成 Host 上的方法/事件，收窄这个接口。

 [ToolbarLayoutSettings](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarLayoutSettings.md)

 [ToolbarRegistry](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarRegistry.md)

 [ToolbarRule](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarRule.md)

 [ToolbarRuleGroup](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarRuleGroup.md)

 [ToolbarRuleset](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarRuleset.md)

### Interfaces

 [IToolbarHost](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.IToolbarHost.md)

工具栏按钮插件与宿主之间的桥梁。Phase 1 粗粒度暴露 MainWindow，后续收窄。

 [IToolbarItem](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.IToolbarItem.md)

### Enums

 [ToolbarHidingRule](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarHidingRule.md)

 [ToolbarLogicalMode](Ink\_Canvas.Controls.Toolbar.FloatingToolbar.ToolbarLogicalMode.md)

