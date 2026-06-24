# <a id="Ink_Canvas_Windows_SettingsViews_Helpers_SettingsListItemHelper"></a> Class SettingsListItemHelper

Namespace: [Ink\_Canvas.Windows.SettingsViews.Helpers](Ink\_Canvas.Windows.SettingsViews.Helpers.md)  
Assembly: InkCanvasForClass.dll  

设置页面列表项共享辅助方法。

```csharp
public static class SettingsListItemHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SettingsListItemHelper](Ink\_Canvas.Windows.SettingsViews.Helpers.SettingsListItemHelper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_SettingsListItemHelper_FindVisualChild__1_System_Windows_DependencyObject_System_String_"></a> FindVisualChild<T\>\(DependencyObject, string\)

在可视树中查找指定名称的子元素。

```csharp
public static T FindVisualChild<T>(DependencyObject parent, string name) where T : FrameworkElement
```

#### Parameters

`parent` [DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_SettingsListItemHelper_UpdateButtonVisibility_System_Windows_Controls_ListView_System_String_"></a> UpdateButtonVisibility\(ListView, string\)

根据列表项选中状态更新指定按钮的可见性。

```csharp
public static void UpdateButtonVisibility(ListView listView, string buttonName)
```

#### Parameters

`listView` [ListView](https://learn.microsoft.com/dotnet/api/system.windows.controls.listview)

`buttonName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_SettingsListItemHelper_UpdateButtonVisibility_System_Windows_Controls_ItemsControl_System_String_"></a> UpdateButtonVisibility\(ItemsControl, string\)

```csharp
public static void UpdateButtonVisibility(ItemsControl itemsControl, string buttonName)
```

#### Parameters

`itemsControl` [ItemsControl](https://learn.microsoft.com/dotnet/api/system.windows.controls.itemscontrol)

`buttonName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_SettingsListItemHelper_UpdateRemoveButtonVisibility_System_Windows_Controls_ListView_System_String_"></a> UpdateRemoveButtonVisibility\(ListView, string\)

根据列表项选中状态更新删除按钮的可见性。

```csharp
public static void UpdateRemoveButtonVisibility(ListView listView, string buttonName)
```

#### Parameters

`listView` [ListView](https://learn.microsoft.com/dotnet/api/system.windows.controls.listview)

`buttonName` [string](https://learn.microsoft.com/dotnet/api/system.string)

