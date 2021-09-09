---
title: "Clean code tips #1: variable"
date: "9 September 2021"
---

## Use meaningful names 
Yes I know that you already know but honestly put meaningful name for a variable is not easy
Just to remember that naming variable sould be descriptive, usually variable name in javascript write in camelCase
and for `Boolean` variable name is usually answer question such as `isActive` `hasParams` etc.

```
// ❌ Don't 

const x= "Jean Doe";
const bar= 23;
const active= true;

// ✅ Do

const fullName= "Jean Doe";
const Age= 23;
const isActive=true;
```

## No hardcode values 
Hardcode is hard to maintain, instead of put constant values, you can put it inside a meaningful and searchable constants, by the way usually constant 
write with SCREAM_SNAKE_CASE

```

function setConfig(hasKey=''){
    ...
};

// ❌ Don't 

setConfig('KLKJFI123123KJHF');


// ✅ Do

const HASH_KEY ='KLKJFI123123KJHF';
setConfig(HASH_KEY);


```


## Put only Necessary 

Don't add redundant context to variable that already described itself

```
// ❌ Don't 

const user:{
    userId:'12345',
    userPassword:'12345qwe',
    userFirstName:'John',
    userLastName:'Doe'
}

user.userPassword

// ✅ Do

const user:{
    Id:'12345',
    Password:'12345qwe',
    FirstName:'John',
    LastName:'Doe'
}

user.Password
```