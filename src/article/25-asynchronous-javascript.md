---
title: "Aynchronous javascript"
date: "7 December 2021"
---

Let's me explain with a simple example

```
console.log('First log');
console.log('Second log');
console.log('Third log');
```

As we can see, every line of code will waits for previous line to complete execution before execute next line. this is called with synchronous javascript

Now another example

```
console.log('First log');
setTimeout(()=>{
    console.log('Second log');
},2000)
console.log('Third log')
```

setTimeout function will wait for milisecond time that set in second argument and executes anonymous function in the first arguments, what output you think will be ?

```
First log
Third log
Second log
```
