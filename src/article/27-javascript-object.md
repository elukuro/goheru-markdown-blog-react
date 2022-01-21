---
title: "Understanding Javascript Object"
date: "21 January 2022"
---

Object in javascript are similar with arrays, the able to store multiple value, however the difference is object doesn't have indexed positions like arrays
and second difference is object give a name to every value that you store.

## Analogy of object

Object in javascript have similarity with object in real life, imagine a car, it has property and also behaviors.

For instance car property is :

- Brand
- Model
- Color
- Horse Power
- Transmission Type

Similary, a car has behaviors such as:

- Accelerate
- Turn right
- Turn left
- Turn on whipper

If we write thoose car object with javascript it will looks like this:

```
    let car = {
        brand:"Toyota",
        model:"Prius",
        color:"silver",
        horsePower:98,
        transmissionType:"AT"
        accelerate:function(){
            // code to accelerate
        }
        turnRight:function(){
            // code to turn right
        }
        turnLeft:function(){
            // code to turn right
        }
        whipperOn:function(){
            // code to turn on whipper
        }
        ...
    }
```

You got the idea.

## Declare Object

There is two way to declare object first is using object literal, that what we do at example above, and second one are using new keyword

```
    let car = new Object();
    car.brand = "Toyota";
```

Between the two way to define object, the object literal are widely use among developer because it's better readability and also faster execution.

### Object properties & Method

The key:value pair in javascript object called with properties, you can access properties with two ways:

```
// Dot notation

car.brand // Toyota

// Square bracket

car["brand"] // Toyota

// or calling square bracket with variable

const brand = "brand";
car[brand] // Toyota

```

Then you can change value of properties by set new value using = sign

```
car.brand = "Honda" // or
car["brand"] = "Honda"
```

You can also access Object values inside a form of arrays using `Object.values`

```
const car = {
    brand:"Honda",
    type:"Civic"
}

Object.values(car)

// ["Honda", "Civic"]

```

To make a method ( method is a function that store inside an object ), just add `function` after your name for instance

```
    let person = {
        firstName:"John",
        lastName:"Snow",
        fullName:function(){
            return `${this.firstName} ${this.lastName}`
        }
    }
    person.fullName()
    // John Snow
```

`this` keyword refers to the owner of the functions, at above example code it will be object person, therefore inside fullName method `this.firstName` keyword
refer to object person with key firstName or `person.firstName`
