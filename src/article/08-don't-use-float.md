---
title: "Don't use float"
date: "28 Mar 2021"
---
### Of course you can use float don't be silly, but use it wisely because you have to pay it with clearfix 🙀
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
When we create a web, sometimes we have to create two div that divided equaly to container width, our approach is usually something like this 
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
it's fine but when this element getting more complex, it's hard to make it propper unless you put some clearfix at your container, but you actually can do a better using `flex` 

```
<div class="container" style="
    display: flex;
    justify-content: space-evenly;
">
    <div style="background:red;width: 50%;">div a</div>
    <div style="background:blue;width: 50%;">div b</div>
</div>
```