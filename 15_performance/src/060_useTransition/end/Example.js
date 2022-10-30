// POINT [Concurrent Mode]useTransitionでユーザビリティを向上
import { useState, useTransition } from 'react';

const generateDummyItem = (num) => {
  return new Array(num).fill(null).map((item, index) => `item ${index}`);
};

const dummyItems = generateDummyItem(10000);

const Example = () => {
  // 第２引数の関数でコールバック関数中に実行したい処理を記述すると、その優先度を下げることができる
  // きほんは使わないように、useMemoなどを使う
  const [isPending, startTransition] = useTransition();
  const [filterVal, setFilterVal] = useState('');

  const changeHandler = (e) => {
    startTransition(() => {
      setFilterVal(e.target.value);
    });
  };

  return (
    <>
      <input type="text" onChange={changeHandler} />
      {/* isPendingは関数が処理中の場合は、true 処理が終わったらfalseが返される */}
      {isPending && <div>Loading...</div>}
      <ul>
        {dummyItems
          .filter((item) => {
            if (filterVal === '') return true;
            return item.includes(filterVal);
          })
          .map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
