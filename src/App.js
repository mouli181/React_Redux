import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  // Access state from the store
  const count = useSelector((state) => state.count);

  // Dispatch actions
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        style={{ marginRight: "10px" }}
      >
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default App;
