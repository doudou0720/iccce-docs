# <a id="Ink_Canvas_MarkupExtensions_I18nExtension"></a> Class I18nExtension

Namespace: [Ink\_Canvas.MarkupExtensions](Ink\_Canvas.MarkupExtensions.md)  
Assembly: InkCanvasForClass.dll  

XAML 中用键名取本地化字符串，无需在 Strings.Designer.cs 中为每个键添加属性。
用法：xmlns:i18n="clr-namespace:Ink_Canvas.MarkupExtensions" 然后 Text="{i18n:I18n Key=Settings_Title}"

```csharp
public class I18nExtension : MarkupExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MarkupExtension](https://learn.microsoft.com/dotnet/api/system.windows.markup.markupextension) ← 
[I18nExtension](Ink\_Canvas.MarkupExtensions.I18nExtension.md)

#### Inherited Members

[MarkupExtension.ProvideValue\(IServiceProvider\)](https://learn.microsoft.com/dotnet/api/system.windows.markup.markupextension.providevalue), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_MarkupExtensions_I18nExtension_Key"></a> Key

```csharp
public string Key { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_MarkupExtensions_I18nExtension_ProvideValue_System_IServiceProvider_"></a> ProvideValue\(IServiceProvider\)

When implemented in a derived class, returns an object that is provided as the value of the target property for this markup extension.

```csharp
public override object ProvideValue(IServiceProvider serviceProvider)
```

#### Parameters

`serviceProvider` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

A service provider helper that can provide services for the markup extension.

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

The object value to set on the property where the extension is applied.

