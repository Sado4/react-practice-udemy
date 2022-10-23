import { useContext } from 'react';
import { MyContext } from '../Example';

const OtherChild = () => {
  const [, setValue] = useContext(MyContext);

  const clickHandler = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div style={{ border: '1px solid black' }}>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
    </div>
  );
};

export default OtherChild;
