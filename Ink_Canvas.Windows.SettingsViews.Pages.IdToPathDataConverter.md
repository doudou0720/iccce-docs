# <a id="Ink_Canvas_Windows_SettingsViews_Pages_IdToPathDataConverter"></a> Class IdToPathDataConverter

Namespace: [Ink\_Canvas.Windows.SettingsViews.Pages](Ink\_Canvas.Windows.SettingsViews.Pages.md)  
Assembly: InkCanvasForClass.dll  

将组件 Id 直接转换为 Path 可用的 Geometry 对象（组合 IdToIconGeometry + StringToGeometry 两步）。

```csharp
public class IdToPathDataConverter : IdToPathDataConverterBase
```

#### Inheritance

IValueConverter ← 
[IdToPathDataConverterBase](Ink\_Canvas.Windows.SettingsViews.Helpers.IdToPathDataConverterBase.md) ← 
[IdToPathDataConverter](Ink\_Canvas.Windows.SettingsViews.Pages.IdToPathDataConverter.md)

#### Inherited Members

[IdToPathDataConverterBase.ConvertIdToGeometryString\(string\)](Ink\_Canvas.Windows.SettingsViews.Helpers.IdToPathDataConverterBase.md\#Ink\_Canvas\_Windows\_SettingsViews\_Helpers\_IdToPathDataConverterBase\_ConvertIdToGeometryString\_System\_String\_), 
[IdToPathDataConverterBase.Convert\(object, Type, object, CultureInfo\)](Ink\_Canvas.Windows.SettingsViews.Helpers.IdToPathDataConverterBase.md\#Ink\_Canvas\_Windows\_SettingsViews\_Helpers\_IdToPathDataConverterBase\_Convert\_System\_Object\_System\_Type\_System\_Object\_System\_Globalization\_CultureInfo\_), 
[IdToPathDataConverterBase.ConvertBack\(object, Type, object, CultureInfo\)](Ink\_Canvas.Windows.SettingsViews.Helpers.IdToPathDataConverterBase.md\#Ink\_Canvas\_Windows\_SettingsViews\_Helpers\_IdToPathDataConverterBase\_ConvertBack\_System\_Object\_System\_Type\_System\_Object\_System\_Globalization\_CultureInfo\_)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_IdToPathDataConverter_ConvertIdToGeometryString_System_String_"></a> ConvertIdToGeometryString\(string\)

```csharp
protected override string ConvertIdToGeometryString(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

