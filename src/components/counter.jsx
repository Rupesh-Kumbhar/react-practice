import React,{useState} from 'react';

/*
Here we are using useState hook to manage the state of the counter. 
The useState hook returns an array with two elements: 
the current state value and a function to update that state. 
In this case, 
we initialize the count state to 0 and 
provide functions to increment and decrement the count. 
The component re-renders whenever the state changes, 
allowing us to see the updated count value in the UI.
*/
 
function Counter() {
    //let count =0;

    const [ count , setCount ] = useState(0);

    const incCounter = ()=>{
      // count = count + 1;
      setCount(count+1);
      console.log("inside incCounter function",count);
    }

    const decCount = ()=>{
      setCount(count-1);
      console.log("inside decCount function",count);
    }

  return(
    <div>
        <h1>Counter </h1>
        {/* <p> printing hard coded value {count} </p> */}
        <button onClick={incCounter} > Add </button>
        <h3> printing the value {count} </h3>
        <button onClick={ decCount} > subtract </button>
        <h3> printing the value {count} </h3>

    </div>
  )
}

export default Counter;