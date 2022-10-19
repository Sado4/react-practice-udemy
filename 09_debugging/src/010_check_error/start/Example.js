import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState({ val: 0 });

  console.log('再レンダリング');

  const countUp = () => {
    setCount((prevstate) => {
      const newVal = { ...prevstate };
      newVal.val += 1;
      return newVal;
    });
  };

  return (
    <>
      <p>現在のカウント数: {count.val}</p>
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Example;
