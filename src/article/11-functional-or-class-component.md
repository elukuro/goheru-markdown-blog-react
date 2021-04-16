---
title: "Functional or class component"
date: "16 Apr 2021"
---

Component is a reusable part that should be able to use anywhere inside user interface. there are two way to create component 
first using functional component and second one is using class component, I prefer using functional except when I need using state management or take benefit from lifecycle

## Functional component or stateless component
- Just function that return HTML
- give solution without state and able to consume props 
```
   function Hey(props){
       return <h1> hello {props.name}</h1>
   } 
   export default Hey
```
- no render method, just return
- component lifecycle such as mounting and updating doesn't exist, instead functional component has `useEffect()` to replicate lifecycle behaviour, and `useState()` to store state 

## Class component or stateful component
- classes that extends component class from react library
- using state, set state and able to consume props with this.props
- have render() method, and must using it to render HTML 
- have three phases of lifecyle there is mounting, updating, unmounting
    - mounting : when putiing elements into the DOM (constructor, getDrivedStateFromProps, render, componentDidMount)
    - updating : when component is updated (getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate)
    - unmounting: when component remove from the DOM (componentWillUnmount)
```
    import React, { Component } from "react";
    class Hey extends Component{
        constructor(props) {
            super(props);
            this.state = {
                name:'';
            }
        }
        render() {
            return(
               <h1> Hey {this.state.name} </h1>
            )
        }
    }
    export default Hey
```

### so why functional components ? 
- less code than class component
- more readable because it's like a plain javascript function 
- more easy to separate from container

### conclusion
If you don't need your own state or need to access lifecycle hook, use functional component as much as posibble
