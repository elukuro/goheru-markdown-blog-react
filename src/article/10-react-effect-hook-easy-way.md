---
title: "How to use 'effect' hook easy way"
date: 9 Apr 2021"
---

### Hooks are additional in react 16.8, Hooks let us to use state and other React features without writing class wooow 😎
In previous post I was explained about first hook `useState`, in this post I will explain about `useEffect`.
In sort `useEffect` let us perform side effect after we render component, let see example below.

#### Example using class component
```
class PlusOne extends React.Component{
    // prepare and declaring state 
    constructor(props);
    super(props);
    this.state = {
        count:0
    }
    componentDidMount() {
        document.title = `hit ${this.state.count} times`;
    }
    componentDidUpdate() {
        document.title = `hit ${this.state.count} times`;
    }
    render() {
        return(
            <div>
                <p>you hit {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    +
                </button>
            </div>
        )
    }
}
```
#### Example function components using hooks

>   gently reminder that hooks doesn't work with class component 
```
   // import useState and useEffect from react lib
   import React, { useState,useEffect } from 'react';
   function PlusOne() {
       const[count,setCount]= useState(0); /* first count variable value set to 0 */
       useEffect(()=>{
           /*
            use effect let us express side effect after component rendered.   
           */
           document.title = `hit ${count} times`; 
       },[count]) // only re-run effect if count changes
       return(
           <div>
            <p> you hit {count} </p>
            <button onClick={()=> setCount(count+1)}>
                +
            </button>
           </div>
       )
   }
```


