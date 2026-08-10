# <a id="Ink_Canvas_Helpers_EdgeGestureUtil_IPropertyStore"></a> Interface EdgeGestureUtil.IPropertyStore

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
[Guid("886D8EEB-8CF2-4446-8D02-CDBA1DBDCF99")]
[InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
public interface EdgeGestureUtil.IPropertyStore
```

## Methods

### <a id="Ink_Canvas_Helpers_EdgeGestureUtil_IPropertyStore_Commit"></a> Commit\(\)

```csharp
void Commit()
```

### <a id="Ink_Canvas_Helpers_EdgeGestureUtil_IPropertyStore_GetAt_System_UInt32_Ink_Canvas_Helpers_EdgeGestureUtil_PropertyKey__"></a> GetAt\(uint, ref PropertyKey\)

```csharp
void GetAt(uint iProp, ref EdgeGestureUtil.PropertyKey pkey)
```

#### Parameters

`iProp` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`pkey` [EdgeGestureUtil](Ink\_Canvas.Helpers.EdgeGestureUtil.md).[PropertyKey](Ink\_Canvas.Helpers.EdgeGestureUtil.PropertyKey.md)

### <a id="Ink_Canvas_Helpers_EdgeGestureUtil_IPropertyStore_GetCount_System_UInt32__"></a> GetCount\(ref uint\)

```csharp
void GetCount(ref uint cProps)
```

#### Parameters

`cProps` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="Ink_Canvas_Helpers_EdgeGestureUtil_IPropertyStore_GetValue_Ink_Canvas_Helpers_EdgeGestureUtil_PropertyKey__Ink_Canvas_Helpers_EdgeGestureUtil_PropVariant__"></a> GetValue\(ref PropertyKey, ref PropVariant\)

```csharp
void GetValue(ref EdgeGestureUtil.PropertyKey key, ref EdgeGestureUtil.PropVariant pv)
```

#### Parameters

`key` [EdgeGestureUtil](Ink\_Canvas.Helpers.EdgeGestureUtil.md).[PropertyKey](Ink\_Canvas.Helpers.EdgeGestureUtil.PropertyKey.md)

`pv` [EdgeGestureUtil](Ink\_Canvas.Helpers.EdgeGestureUtil.md).[PropVariant](Ink\_Canvas.Helpers.EdgeGestureUtil.PropVariant.md)

### <a id="Ink_Canvas_Helpers_EdgeGestureUtil_IPropertyStore_Release"></a> Release\(\)

```csharp
void Release()
```

### <a id="Ink_Canvas_Helpers_EdgeGestureUtil_IPropertyStore_SetValue_Ink_Canvas_Helpers_EdgeGestureUtil_PropertyKey__Ink_Canvas_Helpers_EdgeGestureUtil_PropVariant__"></a> SetValue\(ref PropertyKey, ref PropVariant\)

```csharp
void SetValue(ref EdgeGestureUtil.PropertyKey key, ref EdgeGestureUtil.PropVariant pv)
```

#### Parameters

`key` [EdgeGestureUtil](Ink\_Canvas.Helpers.EdgeGestureUtil.md).[PropertyKey](Ink\_Canvas.Helpers.EdgeGestureUtil.PropertyKey.md)

`pv` [EdgeGestureUtil](Ink\_Canvas.Helpers.EdgeGestureUtil.md).[PropVariant](Ink\_Canvas.Helpers.EdgeGestureUtil.PropVariant.md)

