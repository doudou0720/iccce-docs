# <a id="Ink_Canvas_RollCallHistoryData"></a> Class RollCallHistoryData

Namespace: [Ink\_Canvas](Ink\_Canvas.md)  
Assembly: InkCanvasForClass.dll  

点名历史记录数据模型

```csharp
public class RollCallHistoryData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RollCallHistoryData](Ink\_Canvas.RollCallHistoryData.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Ink_Canvas_RollCallHistoryData_History"></a> History

```csharp
public List<string> History { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Ink_Canvas_RollCallHistoryData_LastUpdate"></a> LastUpdate

```csharp
public DateTime LastUpdate { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Ink_Canvas_RollCallHistoryData_NameFrequency"></a> NameFrequency

```csharp
public Dictionary<string, int> NameFrequency { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Ink_Canvas_RollCallHistoryData_NameProbabilities"></a> NameProbabilities

```csharp
public Dictionary<string, double> NameProbabilities { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\>

