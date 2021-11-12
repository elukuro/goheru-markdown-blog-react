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

What really happen here is during compile phase, javascript will put the variables declaration into memory, similar like moving your variable declaration to the top of code like this:

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

What the heck is going on here ?, okay let's break it down

Since there are no declaration and initialization for `variable3` it's make sense when the result is `number 3not defined`
`number1` variable is return correct answer but why ?, It's return correct answer because javascript "magically" create a declaration for
`number1` variable and move it to the top. In simple term "Hey you're initialise number1 with value 3 but you're not making any declaration, okay lazy I will do it for you huufh"
For the `number2` variable are the most confused one, you already initialise and declare your variable but why it's return `undefined` ?
It's happen because hoisting only move declaration, it's mean that javascript only move `number2` declaration to the top and that make it return `undefined`
