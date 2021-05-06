---
title: "Don't do this, a guide not to curse by other developer"
date: "6 May 2021"
---

## write code as sort as possible 
Don't ever write code too short and make it hard to understand by other developers, look at this code below
```
‘?’ i = i ? i < 0 ? Math.max(0, len + i) : i : 0; 

```
Can you guest the value of variable i ?, If someone find this code he will spend his entire life just to find that variable i value is 0.  

## One letter variable
Don't name you variable with a,b,c or d, a short variable name is hard to find and search by editor, and even we already found it we can't understand "the true meaning" of this variable until we analize the code line by line.

## Use Abbreviation
Don't name your variable with a meaningless abbreviation
```
    list → lst
    begin_date →bgdt
    browser → bws
```
So instead of `dteofbrth` you can use `dob` as abbreviation of date of birth

## Being Abstrack
Don't use abstrack name such as `obj, value, data, elem` as your variable name unless they are the only variable within your code scope, it's hard to define `data` variable if we use more than one data, and what is `data` or `value` mean either ? everything has data and value so instead you can use `userData` or `customerData` to define more meaningfull name

## Super function 
Don't create a function that has many function, a good function only do one thing, `validateEmail(email)` function sould only validate email format not to send or prefill email value, you can create other function to do that.

## Unconsistent
If you define `showFirstName` function to preview first name then don't difine `displayLastName` as function to preview last name, it's confusing and hard to debug when our code is getting bigger, be consistent with your prefix
so instead of `displayLastName` you can define your function with `showLastName`, be consistent

## Use reusable name
Don't reuse a variable name because it's hard to know the actual value  and it's take times to analize
