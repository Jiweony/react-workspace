import React, { useReducer } from 'react'

function Counter() {
  //const [number, setNumber] =  useState(0);
  const [number, dispatch] = useReducer(reducer, 0);

  // function reducer(state, action) {
  //   if(action.type === "Increment") {
  //     return state + action.payload;
  //   }

  //   if(action.type === "Decrement") {
  //     return state - action.payload;
  //   }

  switch (action.type) {
    case "Increment":
      return state + action.payload;
    case "Decrement":
      return state - action.payload;
    default:
      return state;
  }
}

  const payload = 10;

  const onIncrease = () => dispatch({type: "Increment", payload});
  const onDecrease = () => dispatch({type: "Decrement", payload});
  
  return (
    <div>
      <h1>0</h1>
      <button onClick={onIncrease}>+{payload}</button>
      <button onClick={onDecrease}>-{payload}</button>
    </div>
  )
}

export default Counter