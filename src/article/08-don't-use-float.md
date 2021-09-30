---
title: "Don't use float"
date: "28 Mar 2021"
---
### Sure you can use float don't be silly, but use it wisely because you have to pay with clearfix 🙀
```
<div style="
    background: blue;
    display: block;
    clear: both; // cost that I mean 
    overflow: hidden; // just whyyy 😔  
"><p>container here </p>
    <div style="background:red;float:left;height: 100px;width: 100px;">child 1</div>
    <div style="background:red;float:left;height: 100px;width: 100px;">child 2</div>
    <div style="background:red;float:left;height: 100px;width: 100px;">child 3</div>
</div>
```
Sometimes we need to make two div divided equaly to container width, usually we do something like this 
```
    <div class="container">
        <div style="
            float: left;
            width: 50%;
            background: red;
        ">
            div a
        </div>
        <div style="
            float: right;
            width: 50%;
            background: blue;
        ">
            div b
        </div>
    </div>
```
This approch is fine but when those element getting more complex you have to put some clearfix at your container to normalize your float.
Here `flex` come to the rescue make it more simple and efficient

```
<div class="container" style="
    display: flex;
    justify-content: space-evenly;
">
    <div style="background:red;width: 50%;">div a</div>
    <div style="background:blue;width: 50%;">div b</div>
</div>
```
