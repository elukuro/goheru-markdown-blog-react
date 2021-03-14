---
title: "No undefined value at function params anymore"
date: "12 Feb 2021"
---
We can make our functions as a default value, It's make your function return default value instead of `undefined`

```
    function multiply(a=1 ,b = 1) {
        return a * b;
    }
    console.warn(multiply(5,2))
    // expected output : 10 

    console.warn(multiply(5))
    // expected output: 5 ( 5 * 1)

    console.warn(multiply())
    // expected output: 1 (5 * 1)
```

