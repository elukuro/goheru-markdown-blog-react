---
title: "How to calling for functions conditionally"
date: "16 July 2021"
---
You can create a shorthand of calling functions conditionally, usually we write functions conditions like this 

```
const type = 'greeting';

function greeting() {
    console.log('hello')
}

function goodbye() {
    console.log('goodbye')
}

if(type==='greeting'){
    greeting()
}else{
    goodbye()
}
```

Instead of using that, we can reduce the line number this way

```
(type==='greeting' ? greeting:goodbye)()
``` 


