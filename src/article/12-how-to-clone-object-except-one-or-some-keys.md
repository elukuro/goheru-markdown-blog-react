---
title: "How to clone object except one or some keys"
date: "23 Apr 2021"
---

Let say you have an object that you want to use it as a payload to make a request
```
const payload = {
    'username': 'Mark',
    'Hash' :'8fafasdf8afadsf',
    'redirectUrl':'/'
}
```
but you want to exclude `redirectUrl` from your object and I don't want to delete this key, hmmm it is easy doesn't it, just destructure the object and rearrange it to a new variable
```
    const {username,Hash} = payload;
    const newPayload = {username,Hash}
```
but wait, what if your object is actually updated and now look like this
```
const payload = {
    'username': 'Mark',
    'Hash' :'8fafasdf8afadsf',
    'redirectUrl':'/',
    'firstname':'mark',
    'lastname':'brown',
    'birthdate':'01/12/2000',
    'gender':'MALE',
    'address':'planet earth'
}
```
seems like desctructuring and rearrange is kind of hardwork to do.
### "Put rest to the last" technique to the rescue 
simply put keys that you don't want to use and put the rest of it in the last
```
const payload = {
    'username': 'Mark',
    'Hash' :'8fafasdf8afadsf',
    'redirectUrl':'/',
    'firstname':'mark',
    'lastname':'brown',
    'birthdate':'01/12/2000',
    'gender':'MALE',
    'address':'planet earth'
}
let{redirectUrl, ...newPayload} = payload
newPayload
/*
    {
        'username': 'Mark',
        'Hash' :'8fafasdf8afadsf',
        'firstname':'mark',
        'lastname':'brown',
        'birthdate':'01/12/2000',
        'gender':'MALE',
        'address':'planet earth'
    }
*/

```
If you want to add another key to exclude, just simply put the keys name after `redirectUrl`




