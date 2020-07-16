import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./_actions/action.counter";

const styles = {
  container: {
    width: "500px",
    margin: "0 auto",
  },
};

const App = () => {
  const count = useSelector((store) => store.counter.count);
  const tienda = useSelector((store) => store);
  console.log(count)
  console.log(tienda)
  const dispatch = useDispatch();
  return (
    <div style={styles.container}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(actions.increment())}>+</button>
      <button onClick={() => dispatch(actions.decrement())}>-</button>
    </div>
  );
};

export default App;
