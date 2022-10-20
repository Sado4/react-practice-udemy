import { useState, useRef } from 'react';

const Case1 = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  return (
    <div>
      <h3>ユースケース1</h3>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};

export default Example;
