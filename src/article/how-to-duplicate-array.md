---
title: "How to duplicate array"
date: "12 Feb 2021"
---

If I run following script, something wierd will happen, can you tell me ?  

```
    const arrayA = [1,2,3]
    const duplicate = arrayA 
    duplicate.push(4)
    console.log(duplicate,arrayA)
```

output for that example will be something like this
```
[1, 2, 3, 4] [1, 2, 3, 4]
```
Yes the value from `duplicate` array is correct as we expected, but why arrayA value is change ? 


this happen because we did assigment `duplicate = arrayA` and because assigment in array is work as reference, so when we try to copy using assigment 
what happen is actually it will only copy the reference to the original array and not the value of the array itself.


to handle this problem you can use spread operator to clone `arrayA`, spread operator is a new feature that introduce in ES6,

```
    const arrayA = [1,2,3]
    const duplicate = [...arrayA] 
    duplicate.push(4)
    console.log(duplicate,arrayA)
```
output for that example
```
[1, 2, 3, 4] [1, 2, 3]
```
