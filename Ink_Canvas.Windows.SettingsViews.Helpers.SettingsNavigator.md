# <a id="Ink_Canvas_Windows_SettingsViews_Helpers_SettingsNavigator"></a> Class SettingsNavigator

Namespace: [Ink\_Canvas.Windows.SettingsViews.Helpers](Ink\_Canvas.Windows.SettingsViews.Helpers.md)  
Assembly: InkCanvasForClass.dll  

附加属性：用于在设置页面中标记控件对应的 Settings.json 键名，
配合 icc://settings/&lt;Page&gt;?key=&lt;JsonKey&gt; 深链接实现定位与高亮。

```csharp
public static class SettingsNavigator
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SettingsNavigator](Ink\_Canvas.Windows.SettingsViews.Helpers.SettingsNavigator.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_SettingsNavigator_SettingsKeyProperty"></a> SettingsKeyProperty

```csharp
public static readonly DependencyProperty SettingsKeyProperty
```

#### Field Value

 DependencyProperty

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_SettingsNavigator_GetSettingsKey_DependencyObject_"></a> GetSettingsKey\(DependencyObject\)

```csharp
public static string GetSettingsKey(DependencyObject obj)
```

#### Parameters

`obj` DependencyObject

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_SettingsNavigator_SetSettingsKey_DependencyObject_System_String_"></a> SetSettingsKey\(DependencyObject, string\)

```csharp
public static void SetSettingsKey(DependencyObject obj, string value)
```

#### Parameters

`obj` DependencyObject

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

