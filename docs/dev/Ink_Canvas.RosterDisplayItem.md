# <a id="Ink_Canvas_RosterDisplayItem"></a> Class RosterDisplayItem

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

ListView 展示行：把 NameRoster 的内容与"是否当前"状态合并展示。

```csharp
public class RosterDisplayItem : DependencyObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DispatcherObject](https://learn.microsoft.com/dotnet/api/system.windows.threading.dispatcherobject) ← 
[DependencyObject](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject) ← 
[RosterDisplayItem](Ink\_Canvas.RosterDisplayItem.md)

#### Inherited Members

[DependencyObject.ClearValue\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.clearvalue\#system\-windows\-dependencyobject\-clearvalue\(system\-windows\-dependencyproperty\)), 
[DependencyObject.ClearValue\(DependencyPropertyKey\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.clearvalue\#system\-windows\-dependencyobject\-clearvalue\(system\-windows\-dependencypropertykey\)), 
[DependencyObject.CoerceValue\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.coercevalue), 
[DependencyObject.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.equals), 
[DependencyObject.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.gethashcode), 
[DependencyObject.GetLocalValueEnumerator\(\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.getlocalvalueenumerator), 
[DependencyObject.GetValue\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.getvalue), 
[DependencyObject.InvalidateProperty\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.invalidateproperty), 
[DependencyObject.OnPropertyChanged\(DependencyPropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.onpropertychanged), 
[DependencyObject.ReadLocalValue\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.readlocalvalue), 
[DependencyObject.SetCurrentValue\(DependencyProperty, object\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.setcurrentvalue), 
[DependencyObject.SetValue\(DependencyProperty, object\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.setvalue\#system\-windows\-dependencyobject\-setvalue\(system\-windows\-dependencyproperty\-system\-object\)), 
[DependencyObject.SetValue\(DependencyPropertyKey, object\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.setvalue\#system\-windows\-dependencyobject\-setvalue\(system\-windows\-dependencypropertykey\-system\-object\)), 
[DependencyObject.ShouldSerializeProperty\(DependencyProperty\)](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.shouldserializeproperty), 
[DependencyObject.DependencyObjectType](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.dependencyobjecttype), 
[DependencyObject.IsSealed](https://learn.microsoft.com/dotnet/api/system.windows.dependencyobject.issealed), 
[DispatcherObject.Dispatcher](https://learn.microsoft.com/dotnet/api/system.windows.threading.dispatcherobject.dispatcher), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ink_Canvas_RosterDisplayItem__ctor_Ink_Canvas_NameRoster_System_Boolean_"></a> RosterDisplayItem\(NameRoster, bool\)

```csharp
public RosterDisplayItem(NameRoster roster, bool isCurrent)
```

#### Parameters

`roster` [NameRoster](Ink\_Canvas.NameRoster.md)

`isCurrent` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Fields

### <a id="Ink_Canvas_RosterDisplayItem_NameProperty"></a> NameProperty

```csharp
public static readonly DependencyProperty NameProperty
```

#### Field Value

 [DependencyProperty](https://learn.microsoft.com/dotnet/api/system.windows.dependencyproperty)

### <a id="Ink_Canvas_RosterDisplayItem_PeopleCountTextProperty"></a> PeopleCountTextProperty

```csharp
public static readonly DependencyProperty PeopleCountTextProperty
```

#### Field Value

 [DependencyProperty](https://learn.microsoft.com/dotnet/api/system.windows.dependencyproperty)

## Properties

### <a id="Ink_Canvas_RosterDisplayItem_Guid"></a> Guid

```csharp
public string Guid { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_RosterDisplayItem_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_RosterDisplayItem_PeopleCountText"></a> PeopleCountText

```csharp
public string PeopleCountText { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Ink_Canvas_RosterDisplayItem_UpdateFrom_Ink_Canvas_NameRoster_System_Boolean_"></a> UpdateFrom\(NameRoster, bool\)

```csharp
public void UpdateFrom(NameRoster roster, bool isCurrent)
```

#### Parameters

`roster` [NameRoster](Ink\_Canvas.NameRoster.md)

`isCurrent` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

