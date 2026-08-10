# <a id="Ink_Canvas_ManageNameRostersWindow"></a> Class ManageNameRostersWindow

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

ManageNameRostersWindow.xaml 的交互逻辑 — 管理随机点名的"选择方案"（学生档案）

```csharp
public class ManageNameRostersWindow : UserControl
```

#### Inheritance

UserControl ← 
[ManageNameRostersWindow](Ink\_Canvas.ManageNameRostersWindow.md)

## Constructors

### <a id="Ink_Canvas_ManageNameRostersWindow__ctor"></a> ManageNameRostersWindow\(\)

```csharp
public ManageNameRostersWindow()
```

## Properties

### <a id="Ink_Canvas_ManageNameRostersWindow_Rosters"></a> Rosters

```csharp
public ObservableCollection<RosterDisplayItem> Rosters { get; set; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<[RosterDisplayItem](Ink\_Canvas.RosterDisplayItem.md)\>

## Methods

### <a id="Ink_Canvas_ManageNameRostersWindow_AddNewRosterDialogAsync_Window_"></a> AddNewRosterDialogAsync\(Window\)

新建方案。调用方（设置页/点名窗口）通过此方法弹出名称输入框。
返回新方案的 Guid，用户取消则返回 null。

```csharp
public static Task<string> AddNewRosterDialogAsync(Window owner)
```

#### Parameters

`owner` Window

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_ManageNameRostersWindow_PromptRosterNameAsync_Window_System_String_System_String_System_String_"></a> PromptRosterNameAsync\(Window, string, string, string\)

使用 iNKORE ContentDialog 输入方案名称。
若当前 Owner 上已有 ContentDialog（如管理列表），则在该对话框内就地切换内容，避免“同时只能打开一个 ContentDialog”的限制。
返回 trim 后的名称；用户取消返回 null。

```csharp
public static Task<string> PromptRosterNameAsync(Window owner, string title, string prompt, string defaultValue)
```

#### Parameters

`owner` Window

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

`prompt` [string](https://learn.microsoft.com/dotnet/api/system.string)

`defaultValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_ManageNameRostersWindow_RefreshList"></a> RefreshList\(\)

根据 Settings 中的方案列表刷新 UI（增删改后由本控件或外部对话框调用）。

```csharp
public void RefreshList()
```

