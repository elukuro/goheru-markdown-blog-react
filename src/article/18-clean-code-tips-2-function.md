---
title: "Clean code tips #2: Function"
date: "11 September 2021"
---

## Use descriptive name 
Again, name your function descriptively, it's okay if your function name are lengthly  as long as describe what the functions actually does.
function name usually has a form of action verbs 

```
// ❌ Don't 

function switch(){

}

function declined(user){

}

// ✅ Do

function toggleSwitchDarkMode(){

}

function isDecline(user){

}

```

## Add default arguments for extra save 
Default argument can prevent your function from returning `undefined` , actually you can do short-circuiting as well but default argument is more cleaner 

```
// ❌ Don't

function printFromDirectory(dir){
    return dir 
}

printFromDirectory()


// ✅ Do

function printFromDirectory(dir = './print'){
    return dir 
}

printFromDirectory()


```

## Limit number of arguments 
function argument should only have zero, one or two arguments, more than that mean your functions is to complex and need to devided to smaller one.
if you want to pass data through function you can use `object`

```
// ❌ Don't 

function sendUserData(name,state,sex,age){

}

sendUserData('John','Canada','Male','32')

// ✅ Do

const userData={
    name:'John',
    state:'Canada',
    sex:'Male',
    age:'32'
}
sendUserData(userData)

```

## Avoid multiple action in function and avoid using flag as arguments 
A function should done one thing at a time, this rules reduces function size, complexity with make it easier to debug and refactor, 
generally the line number of a function should not more than 20-30 lines if possible, also a flag in arguments mean the function can still be 
simplified 

```
// ❌ Don't 
function calculate(x, y, operation){
    if(operation === 'add'){
        return x + y;
    }
    if(operation === 'substract'){
        return x - y;
    }
    if(operation === 'multiply'){
        return x * y;
    }
    if(operation === 'divide'){
        return x / y;
    }
}

// ✅ Do
function addNumber(x,y){
    return x+y;
}

function substractNumber(x,y){
    return x-y;
}

function multiplyNumber(x,y){
    return x*y;
}

function devideNumber(x,y){
    return x/y;
}

```

## Don't repeat yourself 
Duplicate code is not a good sign, if you repeat yourself you will have to update multiple places wherever there is logic change 

```
// ❌ Don't 

function getTrucksList(trucks) {
    trucks.forEach(truck)=>{
        const {price, size, numberOfWheel} = truck
        render({price,size,numberOfWheel})
    }
}

function getCarsList(cars) {
    cars.forEach(car)=>{
        const {price, numberOfDoors} = car
        render({price,numberOfDoors})
    }
}

// ✅ Do

function getVehichlesList(vehicles){
    vehicles.forEach(vehicle){
        const price = vehicle.price
        const data = {price}

        if(vehicle.type ==='truck'){
            data.size = vehicle.size
            data.numberOfWheel= vehicle.numberOfWheel
        }
         if(vehicle.type ==='car'){
            data.numberOfDoors= vehicle.numberOfDoors
        }
        render({data})
    }
}

```

## Avoid side effects 
Side effects can resulting undesirabled behaviours all side effets have to centralized

```
// ❌ Don't 
let date = "11-08-2021";

function splitIntoDayMonthYear() {
  date = date.split("-");
}

splitIntoDayMonthYear();


// ✅ Do
function splitIntoDayMonthYear(date) {
  return date.split("-");
}

const newDate = splitIntoDayMonthYear(date)

```