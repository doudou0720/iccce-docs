# <a id="Ink_Canvas_NewStyleRollCallWindow"></a> Class NewStyleRollCallWindow

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

新点名UI风格的窗口

```csharp
public class NewStyleRollCallWindow : Window
```

#### Inheritance

Window ← 
[NewStyleRollCallWindow](Ink\_Canvas.NewStyleRollCallWindow.md)

## Constructors

### <a id="Ink_Canvas_NewStyleRollCallWindow__ctor"></a> NewStyleRollCallWindow\(\)

```csharp
public NewStyleRollCallWindow()
```

### <a id="Ink_Canvas_NewStyleRollCallWindow__ctor_System_Boolean_"></a> NewStyleRollCallWindow\(bool\)

```csharp
public NewStyleRollCallWindow(bool isSingleDraw)
```

#### Parameters

`isSingleDraw` bool

### <a id="Ink_Canvas_NewStyleRollCallWindow__ctor_Ink_Canvas_Settings_System_Boolean_"></a> NewStyleRollCallWindow\(Settings, bool\)

```csharp
public NewStyleRollCallWindow(Settings settings, bool isSingleDraw = false)
```

#### Parameters

`settings` [Settings](Ink\_Canvas.Settings.md)

`isSingleDraw` bool

## Methods

### <a id="Ink_Canvas_NewStyleRollCallWindow_SelectNamesWithML_List_System_String__System_Int32_Random_"></a> SelectNamesWithML\(List<string\>, int, Random\)

使用机器学习算法选择点名人员，避免最近重复

```csharp
public static List<string> SelectNamesWithML(List<string> availableNames, int count, Random random)
```

#### Parameters

`availableNames` List<string\>

可用名单

`count` int

需要选择的人数

`random` Random

随机数生成器

#### Returns

 List<string\>

选择的人员名单

### <a id="Ink_Canvas_NewStyleRollCallWindow_UpdateRollCallHistory_List_System_String__"></a> UpdateRollCallHistory\(List<string\>\)

更新点名历史记录

```csharp
public static void UpdateRollCallHistory(List<string> selectedNames)
```

#### Parameters

`selectedNames` List<string\>

