# <a id="Ink_Canvas_Windows_SettingsViews_Helpers_TopMostModeTemplateSelector"></a> Class TopMostModeTemplateSelector

Namespace: [Ink\_Canvas.Windows.SettingsViews.Helpers](Ink\_Canvas.Windows.SettingsViews.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public class TopMostModeTemplateSelector : DataTemplateSelector
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataTemplateSelector](https://learn.microsoft.com/dotnet/api/system.windows.controls.datatemplateselector) ← 
[TopMostModeTemplateSelector](Ink\_Canvas.Windows.SettingsViews.Helpers.TopMostModeTemplateSelector.md)

#### Inherited Members

[DataTemplateSelector.SelectTemplate\(object, DependencyObject\)](https://learn.microsoft.com/dotnet/api/system.windows.controls.datatemplateselector.selecttemplate), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_TopMostModeTemplateSelector_ButtonTemplate"></a> ButtonTemplate

```csharp
public DataTemplate ButtonTemplate { get; set; }
```

#### Property Value

 [DataTemplate](https://learn.microsoft.com/dotnet/api/system.windows.datatemplate)

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_TopMostModeTemplateSelector_SelectionTemplate"></a> SelectionTemplate

```csharp
public DataTemplate SelectionTemplate { get; set; }
```

#### Property Value

 [DataTemplate](https://learn.microsoft.com/dotnet/api/system.windows.datatemplate)

## Methods

### <a id="Ink_Canvas_Windows_SettingsViews_Helpers_TopMostModeTemplateSelector_SelectTemplate_System_Object_System_Windows_DependencyObject_"></a> SelectTemplate\(object, DependencyObject\)

When overridden in a derived class, returns a <xref href="System.Windows.DataTemplate" data-throw-if-not-resolved="false"></xref> based on custom logic.

```csharp
public override DataTemplate SelectTemplate(object item, DependencyObject container)
```

#### Parameters

`item` [object](https://learn.microsoft.com/dotnet/api/system.object)

The data object for which to select the template.

`container` [DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject)

The data-bound object.

#### Returns

 [DataTemplate](https://learn.microsoft.com/dotnet/api/system.windows.datatemplate)

Returns a <xref href="System.Windows.DataTemplate" data-throw-if-not-resolved="false"></xref> or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>. The default value is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

