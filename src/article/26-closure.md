---
title: "Understanding Javascript Closure"
date: "8 January 2022"
---

Closure gives you a access to an outer function scope from an inner function.

Here some simple example:

```
  function init(){
    let firstName = 'John';
    let lastName = 'Snow';
    function greeting(){ // inner function a closure
      return `Hello ${firstName} ${lastName}`;
    }
    return greeting();
  }
  init();
```

Here another example:

```
    function add(){
        let counter = 0;
        return function(){
            counter+=1;
            return counter;
        }
    }
    let setCounter = add();
    setCounter()
    // 1
    setCounter()
    // 2
```

Let's see what going on

First time call add() function

- Inner function access value of counter variable defined in the outer function (value of counter variable = 0)
- Inner function update counter value with increase by 1 (value of counter variable = 1)
- Inner function return counter value
- Outer function return based on return value from inner function (return value from inner function = 1)
- Return from outer function is 1

Second time call add() function

- counter variable value already increase by 1 so value of counter variable is 1
- repeat process
