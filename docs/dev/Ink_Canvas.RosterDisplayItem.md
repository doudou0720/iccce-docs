# <a id="Ink_Canvas_RosterDisplayItem"></a> Class RosterDisplayItem

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

ListView 展示行：把 NameRoster 的内容与"是否当前"状态合并展示。

```csharp
public class RosterDisplayItem : DependencyObject
```

#### Inheritance

DependencyObject ← 
[RosterDisplayItem](Ink\_Canvas.RosterDisplayItem.md)

## Constructors

### <a id="Ink_Canvas_RosterDisplayItem__ctor_Ink_Canvas_NameRoster_System_Boolean_"></a> RosterDisplayItem\(NameRoster, bool\)

```csharp
public RosterDisplayItem(NameRoster roster, bool isCurrent)
```

#### Parameters

`roster` [NameRoster](Ink\_Canvas.NameRoster.md)

`isCurrent` bool

## Fields

### <a id="Ink_Canvas_RosterDisplayItem_NameProperty"></a> NameProperty

```csharp
public static readonly DependencyProperty NameProperty
```

#### Field Value

 DependencyProperty

### <a id="Ink_Canvas_RosterDisplayItem_PeopleCountTextProperty"></a> PeopleCountTextProperty

```csharp
public static readonly DependencyProperty PeopleCountTextProperty
```

#### Field Value

 DependencyProperty

## Properties

### <a id="Ink_Canvas_RosterDisplayItem_Guid"></a> Guid

```csharp
public string Guid { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_RosterDisplayItem_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 string

### <a id="Ink_Canvas_RosterDisplayItem_PeopleCountText"></a> PeopleCountText

```csharp
public string PeopleCountText { get; set; }
```

#### Property Value

 string

## Methods

### <a id="Ink_Canvas_RosterDisplayItem_UpdateFrom_Ink_Canvas_NameRoster_System_Boolean_"></a> UpdateFrom\(NameRoster, bool\)

```csharp
public void UpdateFrom(NameRoster roster, bool isCurrent)
```

#### Parameters

`roster` [NameRoster](Ink\_Canvas.NameRoster.md)

`isCurrent` bool

