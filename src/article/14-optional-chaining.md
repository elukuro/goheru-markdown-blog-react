---
title: "Optional Chaining"
date: "23 May 2021"
---
Chaining operator will give us `undefined` when reference that we want to use is `nullish` instead of error, it's very usefull when the content of an object don't have guarantee as to which properties are required

```
const ourObject = {
    name:'Alina',
    pet:{
        name:'kitty',
        type:'cat'
    }
}
const dogName = ourObject.dog.name;
console.log(dogName)
```
Because dog is not exist at `ourObject` then it will return `Uncaught TypeError: Cannot read property 'name' of undefined`


To prevent those error we can use optional chaining

```
const dogName = ourObject.dog?.name
console.log(dogName)
// Undefined
```


So instead of error this code will return `undefined`, it also work for checking methods inside object 
```
console.log(ourObject.nonEksistingMethod())
//Uncaught TypeError: ourObject.someNonExistentMethod is not a function

console.log(ourObject.someNonExistentMethod?.())
// Undefined    
```