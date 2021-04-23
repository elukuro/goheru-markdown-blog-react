---
title: "How to filter object"
date: "23 Apr 2021"
---

Let say you have an object that you want to use it as a payload to make a request 
```
const payload = {
    'username': 'Mark'
    'Hash' :'8fafasdf8afadsf',
    'redirectUrl':'/'
}
```
but you want to exclude `redirectUrl` from your object, hmmm it is easy doesn't it, just destructure the object and rearrange it to a new `const` 
```
    const {username,Hash} = payload;
    const newPayload = {username,Hash}
```
but wait, what if object that you to use get another data 
```
    const anotherData = {
        'firstname':'mark',
        'lastname':'brown',
        'birthdate':'01/12/2000'
    }
    const payload = {}
```

