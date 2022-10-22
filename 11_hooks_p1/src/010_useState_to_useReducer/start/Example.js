import { useState, useReducer } from 'react';

const Example = () => {
  const [first, setfirst] = useState(0);
  const [second, dispatch] = useReducer((prev, action) => {
    if (action === 'countUp') {
      return ++prev;
    }
    if (action === 'countDown') {
      return --prev;
    }
  }, 0);

  const countUpFirst = () => {
    setfirst(first + 1);
  };
  const countUpSecond = () => {
    dispatch('countUp');
  };
  const countDown = () => {
    dispatch('countDown');
  };
  return (
    <>
      <div>{first}</div>
      <button onClick={countUpFirst}>+</button>
      <div>{second}</div>
      <button onClick={countUpSecond}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
