import { useState } from 'react'

const Example = () => {
  let [valA, setValA] = useState(0);
  const actionClick = () => {
    setValA(valA + 1);
  }
  let [valB, setValB] = useState(10);
  let [valC, setValC] = useState(100);
  return (
    <>
      <p>
        ボタンをAを{valA}回押しました
      </p>
      <button onClick={actionClick}>ボタンA</button>
      <p>
        ボタンをBを{valB}回押しました
      </p>
      <button onClick={() => {
        setValB(valB + 1);
      }}>ボタンB</button>
      <p>
        ボタンをCを{valC}回押しました
      </p>
      <button onClick={() => {
        setValC(valC + 1);
      }}>ボタンC</button>
    </>
  )
};

export default Example;
