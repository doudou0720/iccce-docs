# <a id="Ink_Canvas_Windows_FeedbackPages_FeedbackPage3"></a> Class FeedbackPage3

Namespace: [Ink\_Canvas.Windows.FeedbackPages](Ink\_Canvas.Windows.FeedbackPages.md)  
Assembly: InkCanvasForClass.dll  

反馈页面3：反馈提交页面。
提供 Pastebin 上传、GitHub Issue 跳转、Markdown 模板复制。

```csharp
public class FeedbackPage3 : UserControl
```

#### Inheritance

UserControl ← 
[FeedbackPage3](Ink\_Canvas.Windows.FeedbackPages.FeedbackPage3.md)

## Constructors

### <a id="Ink_Canvas_Windows_FeedbackPages_FeedbackPage3__ctor"></a> FeedbackPage3\(\)

```csharp
public FeedbackPage3()
```

## Properties

### <a id="Ink_Canvas_Windows_FeedbackPages_FeedbackPage3_MarkdownTemplate"></a> MarkdownTemplate

```csharp
public string MarkdownTemplate { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Windows_FeedbackPages_FeedbackPage3_PastebinUrl"></a> PastebinUrl

```csharp
public string PastebinUrl { get; }
```

#### Property Value

 string

### <a id="Ink_Canvas_Windows_FeedbackPages_FeedbackPage3_BtnCopyMarkdownClick"></a> BtnCopyMarkdownClick

```csharp
public event EventHandler<RoutedEventArgs> BtnCopyMarkdownClick
```

#### Event Type

 EventHandler<RoutedEventArgs\>

### <a id="Ink_Canvas_Windows_FeedbackPages_FeedbackPage3_BtnCopyPasteUrlClick"></a> BtnCopyPasteUrlClick

```csharp
public event EventHandler<RoutedEventArgs> BtnCopyPasteUrlClick
```

#### Event Type

 EventHandler<RoutedEventArgs\>

### <a id="Ink_Canvas_Windows_FeedbackPages_FeedbackPage3_BtnOpenGitHubIssueClick"></a> BtnOpenGitHubIssueClick

```csharp
public event EventHandler<RoutedEventArgs> BtnOpenGitHubIssueClick
```

#### Event Type

 EventHandler<RoutedEventArgs\>

### <a id="Ink_Canvas_Windows_FeedbackPages_FeedbackPage3_BtnUploadPastebinClick"></a> BtnUploadPastebinClick

```csharp
public event EventHandler<RoutedEventArgs> BtnUploadPastebinClick
```

#### Event Type

 EventHandler<RoutedEventArgs\>

### <a id="Ink_Canvas_Windows_FeedbackPages_FeedbackPage3_CardCopyIssueUrlClick"></a> CardCopyIssueUrlClick

```csharp
public event EventHandler<RoutedEventArgs> CardCopyIssueUrlClick
```

#### Event Type

 EventHandler<RoutedEventArgs\>

