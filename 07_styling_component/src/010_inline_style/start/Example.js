import { useState } from 'react';

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const style = {
    margin: 'auto',
    width: 120,
    height: 60,
    borderRadius: 999,
    display: 'block',
    border: 'none',
    backgroundColor: isSelected ? 'pink' : '',
    cursor: 'pointer',
  };

  return (
    <>
      <button style={style} onClick={clickHandler}>
        ボタン
      </button>
      <div style={{ color: 'red' }}>{isSelected && 'クリックされました。'}</div>
    </>
  );
};

export default Example;
