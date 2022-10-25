import useCounter from './hooks';

const Example = () => {
  const { count, countUp } = useCounter();

  return (
    <>
      <div>Counts: {count}</div>
      <button onClick={countUp}>Count Up!</button>
    </>
  );
};

export default Example;
