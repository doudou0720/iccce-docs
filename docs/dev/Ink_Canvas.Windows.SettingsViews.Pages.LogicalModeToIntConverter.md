# <a id="Ink_Canvas_Windows_SettingsViews_Pages_LogicalModeToIntConverter"></a> Class LogicalModeToIntConverter

Namespace: [Ink\_Canvas.Windows.SettingsViews.Pages](Ink\_Canvas.Windows.SettingsViews.Pages.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class LogicalModeToIntConverter : IValueConverter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LogicalModeToIntConverter](Ink\_Canvas.Windows.SettingsViews.Pages.LogicalModeToIntConverter.md)

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

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_LogicalModeToIntConverter_Convert_System_Object_System_Type_System_Object_System_Globalization_CultureInfo_"></a> Convert\(object, Type, object, CultureInfo\)

Converts a value.

```csharp
public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
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

### <a id="Ink_Canvas_Windows_SettingsViews_Pages_LogicalModeToIntConverter_ConvertBack_System_Object_System_Type_System_Object_System_Globalization_CultureInfo_"></a> ConvertBack\(object, Type, object, CultureInfo\)

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

