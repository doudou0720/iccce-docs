# <a id="Ink_Canvas_Windows_SettingsViews_Helpers"></a> Namespace Ink\_Canvas.Windows.SettingsViews.Helpers

### Classes

 [AutoStartHelper](Ink\_Canvas.Windows.SettingsViews.Helpers.AutoStartHelper.md)

 [IdToPathDataConverterBase](Ink\_Canvas.Windows.SettingsViews.Helpers.IdToPathDataConverterBase.md)

IdToPathData 转换器基类：将组件 Id 转换为 Path 可用的 Geometry 对象。
子类只需提供 IdToIconGeometryString 转换逻辑。

 [MainWindowSettingsHelper](Ink\_Canvas.Windows.SettingsViews.Helpers.MainWindowSettingsHelper.md)

 [NullToVisibilityConverter](Ink\_Canvas.Windows.SettingsViews.Helpers.NullToVisibilityConverter.md)

null 值转 Visibility（null → Collapsed，非 null → Visible）。

 [SettingsActionHub](Ink\_Canvas.Windows.SettingsViews.Helpers.SettingsActionHub.md)

 [SettingsBinder](Ink\_Canvas.Windows.SettingsViews.Helpers.SettingsBinder.md)

 [SettingsChangeRegistry](Ink\_Canvas.Windows.SettingsViews.Helpers.SettingsChangeRegistry.md)

 [SettingsListItemHelper](Ink\_Canvas.Windows.SettingsViews.Helpers.SettingsListItemHelper.md)

设置页面列表项共享辅助方法。

 [SettingsManager](Ink\_Canvas.Windows.SettingsViews.Helpers.SettingsManager.md)

 [SettingsNavigator](Ink\_Canvas.Windows.SettingsViews.Helpers.SettingsNavigator.md)

附加属性：用于在设置页面中标记控件对应的 Settings.json 键名，
配合 icc://settings/&lt;Page&gt;?key=&lt;JsonKey&gt; 深链接实现定位与高亮。

 [StringToGeometryConverter](Ink\_Canvas.Windows.SettingsViews.Helpers.StringToGeometryConverter.md)

将几何字符串转换为 Geometry 对象。

 [TopMostModeButtonItem](Ink\_Canvas.Windows.SettingsViews.Helpers.TopMostModeButtonItem.md)

 [TopMostModeSelectionItem](Ink\_Canvas.Windows.SettingsViews.Helpers.TopMostModeSelectionItem.md)

 [TopMostModeTemplateSelector](Ink\_Canvas.Windows.SettingsViews.Helpers.TopMostModeTemplateSelector.md)

 [UriSchemeShortcutHelper](Ink\_Canvas.Windows.SettingsViews.Helpers.UriSchemeShortcutHelper.md)

创建指向 icc:// 外部协议命令的桌面快捷方式。
快捷方式以主程序为目标并携带 icc:// 参数：已有实例运行时由 App 通过 IPC 转发命令，
无实例时启动应用后按启动 URI 参数执行命令。
快捷方式图标为按需生成的 .ico：半透明圆角矩形底 + 程序内图标 + 右下角半透明 ICC 文字，
与设置页徽章按钮使用同一套绘制参数。

 [WindowSettingsHelper](Ink\_Canvas.Windows.SettingsViews.Helpers.WindowSettingsHelper.md)

 [WrapPanelAutoResize](Ink\_Canvas.Windows.SettingsViews.Helpers.WrapPanelAutoResize.md)

让 WrapPanel 根据容器宽度自动计算 ItemWidth，使元素均匀撑满。
用法：WrapPanelAutoResize.TargetWidth="225"

