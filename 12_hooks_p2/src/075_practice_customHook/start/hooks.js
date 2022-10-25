import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((state) => state + 1);
  };

  return { count, countUp };
};

export default useCounter;
