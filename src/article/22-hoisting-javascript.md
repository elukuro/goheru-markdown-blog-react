---
title: "What is hoisting ? explain In 1 minute"
date: "12 November 2021"
---

Short answer: Hoisting is javascript behaviour that move declaration to the top

```
yourName="Jiwoo";
console.log(yourName);
var yourName;
```

What really happen here is during compile phase javascript will put the variables declaration into memory, similar like moving your variable declaration to the top of the code like this, therefore your code are working

```
var yourName;
yourName="Jiwoo";
console.log(yourName);
```

Okay then let's try another example

```
console.log('number 1', number1);
console.log('number 2', number2);
console.log('number 3', number3);
number1 = 3;
var number2 = 3;

// output

// number 1 3
// number 2 undefined
// Uncaught ReferenceError: number3 is not defined
    at <anonymous>:4:25

```

What the heck is going on here ?, first you maybe think at line 2 it should log 3 as output because we already make initialisation at line 5 ?
yes and that is the answer, because hoisting is only moving declaration to the top and not initialisation so when
