# <a id="Ink_Canvas_Helpers_FullScreenHelper_WindowPositionFlags"></a> Enum FullScreenHelper.WindowPositionFlags

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public enum FullScreenHelper.WindowPositionFlags
```

## Fields

`SWP_NOCOPYBITS` 

<p>
清除客户区的所有内容。如果未设置该标志，客户区的有效内容被保存并且在窗口尺寸更新和重定位后拷贝回客户区
</p>

    Discards the entire contents of the client area. If this flag is not specified, the valid contents of the client
    area are saved and copied back into the client area after the window is sized or repositioned.



`SWP_NOMOVE` 

<p>
维持当前位置（忽略X和Y参数）
</p>

    Retains the current position (ignores X and Y parameters).



`SWP_NOREDRAW` 

<p>
不重画改变的内容。如果设置了这个标志，则不发生任何重画动作。适用于客户区和非客户区（包括标题栏和滚动条）和任何由于窗回移动而露出的父窗口的所有部分。如果设置了这个标志，应用程序必须明确地使窗口无效并区重画窗口的任何部分和父窗口需要重画的部分
</p>

    Does not redraw changes. If this flag is set, no repainting of any kind occurs. This applies to the client area,
    the nonclient area (including the title bar and scroll bars), and any part of the parent window uncovered as a
    result of the window being moved. When this flag is set, the application must explicitly invalidate or redraw any
    parts of the window and parent window that need redrawing.



`SWP_NOSIZE` 

<p>
维持当前尺寸（忽略 cx 和 cy 参数）
</p>

    Retains the current size (ignores the cx and cy parameters).



`SWP_NOZORDER` 

<p>
维持当前 Z 序（忽略 hWndlnsertAfter 参数）
</p>

    Retains the current Z order (ignores the hWndInsertAfter parameter).



