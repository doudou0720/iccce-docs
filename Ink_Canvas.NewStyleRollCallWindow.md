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

`isSingleDraw` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_NewStyleRollCallWindow__ctor_Ink_Canvas_Settings_System_Boolean_"></a> NewStyleRollCallWindow\(Settings, bool\)

```csharp
public NewStyleRollCallWindow(Settings settings, bool isSingleDraw = false)
```

#### Parameters

`settings` [Settings](Ink\_Canvas.Settings.md)

`isSingleDraw` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Ink_Canvas_NewStyleRollCallWindow_OnSourceInitialized_System_EventArgs_"></a> OnSourceInitialized\(EventArgs\)

注册到中央置顶管理器，确保窗口立即获得置顶状态

```csharp
protected override void OnSourceInitialized(EventArgs e)
```

#### Parameters

`e` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### <a id="Ink_Canvas_NewStyleRollCallWindow_SelectNamesWithML_System_Collections_Generic_List_System_String__System_Int32_System_Random_"></a> SelectNamesWithML\(List<string\>, int, Random\)

使用机器学习算法选择点名人员，避免最近重复

```csharp
public static List<string> SelectNamesWithML(List<string> availableNames, int count, Random random)
```

#### Parameters

`availableNames` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

可用名单

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

需要选择的人数

`random` [Random](https://learn.microsoft.com/dotnet/api/system.random)

随机数生成器

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

选择的人员名单

### <a id="Ink_Canvas_NewStyleRollCallWindow_UpdateRollCallHistory_System_Collections_Generic_List_System_String__"></a> UpdateRollCallHistory\(List<string\>\)

更新点名历史记录

```csharp
public static void UpdateRollCallHistory(List<string> selectedNames)
```

#### Parameters

`selectedNames` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

