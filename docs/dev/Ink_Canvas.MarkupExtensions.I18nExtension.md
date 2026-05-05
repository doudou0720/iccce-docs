# <a id="Ink_Canvas_MarkupExtensions_I18nExtension"></a> Class I18nExtension

Namespace: [Ink\_Canvas.MarkupExtensions](Ink\_Canvas.MarkupExtensions.md)  
Assembly: InkCanvasForClass.dll  

XAML 中用键名取本地化字符串，无需在 Strings.Designer.cs 中为每个键添加属性。
用法：xmlns:i18n="clr-namespace:Ink_Canvas.MarkupExtensions" 然后 Text="{i18n:I18n Key=Settings_Title}"

```csharp
public class I18nExtension : MarkupExtension
```

#### Inheritance

MarkupExtension ← 
[I18nExtension](Ink\_Canvas.MarkupExtensions.I18nExtension.md)

## Properties

### <a id="Ink_Canvas_MarkupExtensions_I18nExtension_Key"></a> Key

```csharp
public string Key { get; set; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_MarkupExtensions_I18nExtension_ProvideValue_IServiceProvider_"></a> ProvideValue\(IServiceProvider\)

```csharp
public override object ProvideValue(IServiceProvider serviceProvider)
```

#### Parameters

`serviceProvider` IServiceProvider

#### Returns

 object

