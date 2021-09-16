---
title: "Clean code tips #3: Conditionals"
date: "16 September 2021"
---

## Always positive
It's need extra effort to understanding logic in negative conditional, avoid it as you can

```
// ❌ Don't 

function isUserNotVerified(){

}

if(!userVerified){

}

// ✅ Do

function isUserVerified(){

}

if(userVerified){

}

```


## Use Shorthands if possible

Shorthands make your code more compact and easier to read
```
// ❌ Don't

if(isActive ==null){

}

if(firstname !== null || firstname !=='' || firstname !== undefined){

}

const isUserValid = user.isVerified() && user.isActive() ? true : false;

// ✅ Do

if(isActive) {

}

if(!!firstname){

}

const isUserValid = user.isVerified() && user.isActive()
```

## Object literals over Switch statements 

Object literals make your switch conditions more easy to understand
```
// ❌ Don't

const getStatus = (status) => {
  switch (status) {
    case "success":
      return "green";
    case "failure":
      return "red";
    case "warning":
      return "yellow";
    case "loading":
    default:
      return "blue";
  }
};

// ✅ Do
const statusColors = {
  success: "green",
  failure: "red",
  warning: "yellow",
  loading: "blue",
};

const getStatus = (status) => statusColors[status] || statusColors.loading;
```


## Use optional chaining 
optional chaining is not working with IE browser yet, see [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) 
```
const alice = {
    name:'Alice',
    cat:{
        name:'Nala'
    }
}
// ❌ Don't

const cat = (alice && alice.cat && alice.cat.name) || 'N/A';

// ✅ Do

const cat = alice?.cat?.name ?? 'N/A';

```