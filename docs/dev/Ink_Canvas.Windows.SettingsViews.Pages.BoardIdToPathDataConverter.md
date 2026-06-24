# <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardIdToPathDataConverter"></a> Class BoardIdToPathDataConverter

Namespace: [Ink\_Canvas.Windows.SettingsViews.Pages](Ink\_Canvas.Windows.SettingsViews.Pages.md)  
Assembly: InkCanvasForClass.dll  

将白板工具栏组件 Id 直接转换为 Path 可用的 Geometry 对象。

```csharp
public class BoardIdToPathDataConverter : IdToPathDataConverterBase, IValueConverter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdToPathDataConverterBase](Ink\_Canvas.Windows.SettingsViews.Helpers.IdToPathDataConverterBase.md) ← 
[BoardIdToPathDataConverter](Ink\_Canvas.Windows.SettingsViews.Pages.BoardIdToPathDataConverter.md)

#### Implements

[IValueConverter](https://learn.microsoft.com/dotnet/api/system.windows.data.ivalueconverter)

#### Inherited Members

[IdToPathDataConverterBase.ConvertIdToGeometryString\(string\)](Ink\_Canvas.Windows.SettingsViews.Helpers.IdToPathDataConverterBase.md\#Ink\_Canvas\_Windows\_SettingsViews\_Helpers\_IdToPathDataConverterBase\_ConvertIdToGeometryString\_System\_String\_), 
[IdToPathDataConverterBase.Convert\(object, Type, object, CultureInfo\)](Ink\_Canvas.Windows.SettingsViews.Helpers.IdToPathDataConverterBase.md\#Ink\_Canvas\_Windows\_SettingsViews\_Helpers\_IdToPathDataConverterBase\_Convert\_System\_Object\_System\_Type\_System\_Object\_System\_Globalization\_CultureInfo\_), 
[IdToPathDataConverterBase.ConvertBack\(object, Type, object, CultureInfo\)](Ink\_Canvas.Windows.SettingsViews.Helpers.IdToPathDataConverterBase.md\#Ink\_Canvas\_Windows\_SettingsViews\_Helpers\_IdToPathDataConverterBase\_ConvertBack\_System\_Object\_System\_Type\_System\_Object\_System\_Globalization\_CultureInfo\_), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_BoardIdToPathDataConverter_ConvertIdToGeometryString_System_String_"></a> ConvertIdToGeometryString\(string\)

```csharp
protected override string ConvertIdToGeometryString(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

