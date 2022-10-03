import { useState } from "react";

const Example = () => {
  let [countA, setCountA] = useState(0);
  return (
    <>
      <p>現在のカウント数: {countA}</p>
      <button onClick={() => {
        setCountA(countA + 1);
        setCountA(prevState => prevState + 1);
      }}>+</button>
      <button onClick={() => {
        setCountA(countA - 1);
      }}>-</button>
    </>
  )
};

export default Example;
