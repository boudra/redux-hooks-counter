import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

import reducer from "./reducer.js";

const store = createStore(reducer);

function Counter(props) {
  const counter = useSelector(function(state) {
    return state.counter;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <Button text={`the current counter is ${counter}`}></Button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

function Clicks(props) {
  const clicked = useSelector(function(state) {
    return state.clicked;
  });

  return (
    <div>
      <p>You have clicked: {clicked} times.</p>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Counter />
    <Clicks />
  </Provider>,
  document.getElementById("root")
);
