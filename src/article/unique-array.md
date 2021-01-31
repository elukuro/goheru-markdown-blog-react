---
title: "How to make an array unique without headache"
date: "31 Jan 2021"
---
The fastest and shortest way that I know to remove duplicate in Array 


```
const a =[1,2,3,12,3,1,2,3];

// use Set to remove duplicate array

const unique = [... new Set(a)]
console.log(unique)


// result is [1,2,3,12]
```
