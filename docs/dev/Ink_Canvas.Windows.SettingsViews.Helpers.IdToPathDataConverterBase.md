# <a id="Ink_Canvas_Windows_SettingsViews_Helpers_IdToPathDataConverterBase"></a> Class IdToPathDataConverterBase

Namespace: [Ink\_Canvas.Windows.SettingsViews.Helpers](Ink\_Canvas.Windows.SettingsViews.Helpers.md)  
Assembly: InkCanvasForClass.dll  

IdToPathData 转换器基类：将组件 Id 转换为 Path 可用的 Geometry 对象。
子类只需提供 IdToIconGeometryString 转换逻辑。

```csharp
public abstract class IdToPathDataConverterBase : IValueConverter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdToPathDataConverterBase](Ink\_Canvas.Windows.SettingsViews.Helpers.IdToPathDataConverterBase.md)

#### Derived

[BoardIdToPathDataConverter](Ink\_Canvas.Windows.SettingsViews.Pages.BoardIdToPathDataConverter.md), 
[BoardMenuItemIdToPathDataConverter](Ink\_Canvas.Windows.SettingsViews.Pages.BoardMenuItemIdToPathDataConverter.md), 
[IdToPathDataConverter](Ink\_Canvas.Windows.SettingsViews.Pages.IdToPathDataConverter.md), 
[MenuItemIdToPathDataConverter](Ink\_Canvas.Windows.SettingsViews.Pages.MenuItemIdToPathDataConverter.md)

#### Implements

[IValueConverter](https://learn.microsoft.com/dotnet/api/system.windows.data.ivalueconverter)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_IdToPathDataConverterBase_Convert_System_Object_System_Type_System_Object_System_Globalization_CultureInfo_"></a> Convert\(object, Type, object, CultureInfo\)

Converts a value.

```csharp
public virtual object Convert(object value, Type targetType, object parameter, CultureInfo culture)
```

#### Parameters

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

The value produced by the binding source.

`targetType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type of the binding target property.

`parameter` [object](https://learn.microsoft.com/dotnet/api/system.object)

The converter parameter to use.

`culture` [CultureInfo](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo)

The culture to use in the converter.

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

A converted value. If the method returns <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>, the valid null value is used.

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_IdToPathDataConverterBase_ConvertBack_System_Object_System_Type_System_Object_System_Globalization_CultureInfo_"></a> ConvertBack\(object, Type, object, CultureInfo\)

Converts a value.

```csharp
public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
```

#### Parameters

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

The value that is produced by the binding target.

`targetType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type to convert to.

`parameter` [object](https://learn.microsoft.com/dotnet/api/system.object)

The converter parameter to use.

`culture` [CultureInfo](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo)

The culture to use in the converter.

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

A converted value. If the method returns <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>, the valid null value is used.

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_IdToPathDataConverterBase_ConvertIdToGeometryString_System_String_"></a> ConvertIdToGeometryString\(string\)

```csharp
protected abstract string ConvertIdToGeometryString(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

