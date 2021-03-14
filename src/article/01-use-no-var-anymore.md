---
title: "Use no var anymore"
date: "16 Jan 2021"
---
> Once upon a time there is a creature that destructive, seeking a clumpsy developer to lose their guard and attack them with their clow.

The `var` is very wild because `var` has no block scope which mean they are "the beast" that visible outside blocks. here some example:
```
  if(true){
    var a = 'var is wild' 
  }
  alert(a);
```

since `var` ignore blocks, `var a` will become global variable and your browser will show alert that contain variable `a` value.

`var` also can't be `block-or` and `loop-local` which mean it's just ignore `for loop` block.

if you're using `var` inside function, then `var` become a function-level variable
```
  function sayHi() {
    if (true) {
      var a = "Hi";
    }

    alert(a); // works
  }

  sayHi();
  alert(a); // ReferenceError: a is not defined
```

when we create `var` and redeclare it below the first variable, they will ignore the old one and use newest variable value
```
var user = "Pete";
var user = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

alert(user); // John
```

remember when I mention that `var` is a global variable, it's also mean that they are able to declare below their use, so technicaly move them above
```
function sayHi() {
  phrase = "Hello";

  alert(phrase);

  var phrase;
}
sayHi();
```
as same as with
```
function sayHi() {
  var phrase;

  phrase = "Hello";

  alert(phrase);
}
sayHi();
```

because of this, I suggest you to use `let` and `cost` instead of `var` they are more modern and clean in term of block. 

Reference: [The old var](https://javascript.info/var)