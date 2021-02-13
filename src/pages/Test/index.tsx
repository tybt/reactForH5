import React from "react";
import { initialState, reducer } from "../../reducer/testReducer";

export default function Test(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log(state,'state',dispatch);
  return (
    <>
      <div onClick={() => dispatch({type: 'decrement'})}>{state.count}</div>
    </>
  );
}
