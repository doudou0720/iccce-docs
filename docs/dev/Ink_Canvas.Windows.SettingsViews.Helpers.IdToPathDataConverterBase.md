# <a id="Ink_Canvas_Windows_SettingsViews_Helpers_IdToPathDataConverterBase"></a> Class IdToPathDataConverterBase

Namespace: [Ink\_Canvas.Windows.SettingsViews.Helpers](Ink\_Canvas.Windows.SettingsViews.Helpers.md)  
Assembly: InkCanvasForClass.dll  

IdToPathData 转换器基类：将组件 Id 转换为 Path 可用的 Geometry 对象。
子类只需提供 IdToIconGeometryString 转换逻辑。

```csharp
public abstract class IdToPathDataConverterBase : IValueConverter
```

#### Inheritance

IValueConverter ← 
[IdToPathDataConverterBase](Ink\_Canvas.Windows.SettingsViews.Helpers.IdToPathDataConverterBase.md)

#### Derived

[BoardIdToPathDataConverter](Ink\_Canvas.Windows.SettingsViews.Pages.BoardIdToPathDataConverter.md), 
[BoardMenuItemIdToPathDataConverter](Ink\_Canvas.Windows.SettingsViews.Pages.BoardMenuItemIdToPathDataConverter.md), 
[IdToPathDataConverter](Ink\_Canvas.Windows.SettingsViews.Pages.IdToPathDataConverter.md), 
[MenuItemIdToPathDataConverter](Ink\_Canvas.Windows.SettingsViews.Pages.MenuItemIdToPathDataConverter.md)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_IdToPathDataConverterBase_Convert_System_Object_Type_System_Object_CultureInfo_"></a> Convert\(object, Type, object, CultureInfo\)

```csharp
public virtual object Convert(object value, Type targetType, object parameter, CultureInfo culture)
```

#### Parameters

`value` object

`targetType` Type

`parameter` object

`culture` CultureInfo

#### Returns

 object

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_IdToPathDataConverterBase_ConvertBack_System_Object_Type_System_Object_CultureInfo_"></a> ConvertBack\(object, Type, object, CultureInfo\)

```csharp
public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
```

#### Parameters

`value` object

`targetType` Type

`parameter` object

`culture` CultureInfo

#### Returns

 object

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_IdToPathDataConverterBase_ConvertIdToGeometryString_System_String_"></a> ConvertIdToGeometryString\(string\)

```csharp
protected abstract string ConvertIdToGeometryString(string id)
```

#### Parameters

`id` string

#### Returns

 string

