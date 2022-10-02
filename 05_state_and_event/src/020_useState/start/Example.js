import { useState } from 'react';

const Example = () => {
  // let [val, setFn] = useState('');
  const [val, setval] = useState('')
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setval(e.target.value);
        }}
      /> = {val}
    </>
  );
};

export default Example;
