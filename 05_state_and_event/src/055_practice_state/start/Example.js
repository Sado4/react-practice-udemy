import { useState } from "react";

const Example = () => {
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    setCount(prevState => prevState + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Example;
