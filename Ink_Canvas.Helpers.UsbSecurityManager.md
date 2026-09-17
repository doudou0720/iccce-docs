# <a id="Ink_Canvas_Helpers_UsbSecurityManager"></a> Class UsbSecurityManager

Namespace: [Ink\_Canvas.Helpers](Ink\_Canvas.Helpers.md)  
Assembly: InkCanvasForClass.dll  

```csharp
public static class UsbSecurityManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UsbSecurityManager](Ink\_Canvas.Helpers.UsbSecurityManager.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Ink_Canvas_Helpers_UsbSecurityManager_GetConnectedUsbDrives"></a> GetConnectedUsbDrives\(\)

```csharp
public static List<UsbDriveInfo> GetConnectedUsbDrives()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UsbDriveInfo](Ink\_Canvas.Helpers.UsbDriveInfo.md)\>

### <a id="Ink_Canvas_Helpers_UsbSecurityManager_GetVolumeSerialNumber_System_String_"></a> GetVolumeSerialNumber\(string\)

```csharp
public static string GetVolumeSerialNumber(string driveLetter)
```

#### Parameters

`driveLetter` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ink_Canvas_Helpers_UsbSecurityManager_VerifyCurrentUsbDrives_Ink_Canvas_Settings_"></a> VerifyCurrentUsbDrives\(Settings\)

```csharp
public static bool VerifyCurrentUsbDrives(Settings settings)
```

#### Parameters

`settings` [Settings](Ink\_Canvas.Settings.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

