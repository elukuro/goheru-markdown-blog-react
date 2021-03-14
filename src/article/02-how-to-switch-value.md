---
title: "How to switch value"
date: "25 Jan 2021"
---
There are always coding skill test session that push you ability to switch value between two variables, normal mediocre developer usually do this technique called `"the third var"`

```
// use var instead of let :( what a shame
var a = 10;
var b = 14;
var temp = b;
b = a
a = temp
console.log(a, b);
```

but fancy developer don't waste his line to create third variable, so this is what he does 

```
let a = 10;
let b = 15;
[a,b] = [b,a]; // array destructuring 
console.log(a, b);
```

even more he can short the line use this rhapsodic technique
```
let [a,b] = [10,15];
[a,b] = [b,a];
console.log(a, b);
```