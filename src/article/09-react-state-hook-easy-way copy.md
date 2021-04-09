---
title: "How to use state hook easy way"
date: "2 Apr 2021"
---

### Hooks are additional in react 16.8, Hooks let us to use state and other React features without writing class wooow 😎
The first "hook" that we will learn is `useState`, and the other "hook" is `useEffect`. `useState` is simillar to declaring state with class component include the `setState` functionality in one wrap.


#### Example using class component
```
class PlusOne extends React.Component{
    // prepare and declaring state 
    constructor(props);
    super(props);
    this.state = {
        count:0
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
   // import useState from react lib
   import React, { useState } from 'react';
   function PlusOne() {
       const[count,setCount]= useState(0); /* first count variable value set to 0 */
       /* 
        those above line actually is an `array destructuring` , they are consist of two variable
        count is  current value
        setCount is function that let us update it
       */
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
### Conclusion

- State hook is similar to declaring state
- React hook can't use in class components 
- React hook make our components looks more clean