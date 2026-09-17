# <a id="Ink_Canvas_Plugins_DependencyAnalysis"></a> Class DependencyAnalysis

Namespace: [Ink\_Canvas.Plugins](Ink\_Canvas.Plugins.md)  
Assembly: InkCanvasForClass.dll  

一组 <xref href="Ink_Canvas.Plugins.DependencyIssue" data-throw-if-not-resolved="false"></xref> 的归纳报告。

```csharp
public class DependencyAnalysis
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyAnalysis](Ink\_Canvas.Plugins.DependencyAnalysis.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_Plugins_DependencyAnalysis_Errors"></a> Errors

```csharp
public IEnumerable<DependencyIssue> Errors { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[DependencyIssue](Ink\_Canvas.Plugins.DependencyIssue.md)\>

### <a id="Ink_Canvas_Plugins_DependencyAnalysis_HasErrors"></a> HasErrors

```csharp
public bool HasErrors { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_DependencyAnalysis_HasWarnings"></a> HasWarnings

```csharp
public bool HasWarnings { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Ink_Canvas_Plugins_DependencyAnalysis_Issues"></a> Issues

```csharp
public List<DependencyIssue> Issues { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DependencyIssue](Ink\_Canvas.Plugins.DependencyIssue.md)\>

### <a id="Ink_Canvas_Plugins_DependencyAnalysis_Warnings"></a> Warnings

```csharp
public IEnumerable<DependencyIssue> Warnings { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[DependencyIssue](Ink\_Canvas.Plugins.DependencyIssue.md)\>

