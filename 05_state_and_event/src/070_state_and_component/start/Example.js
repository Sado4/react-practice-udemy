import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const switchToggle = () => {
    setToggle((bool) => {
      return !bool
    });
    // setToggle((bool) => {
    //   console.log(bool)
    // })
  }
  return (
    <>
      <button onClick={switchToggle}>Switch</button>
      {toggle ? <Count key="A" title="TRUE" /> : <Count key="B" title="FALSE" />}
    </>
  )
}

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
